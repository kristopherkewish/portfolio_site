"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
};

const GAP = 30;
const RADIUS = 210;

/**
 * Canvas dot grid that lights up and bends away from the pointer.
 * With no pointer (touch devices, first paint) a slow drifting point of light
 * takes its place, so the field is never dead. Pauses when off-screen.
 */
export function DotField({ className }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = false;
    let pointerActive = false;
    const target = { x: 0, y: 0 };
    const light = { x: 0, y: 0 };

    const draw = (time: number) => {
      if (!pointerActive) {
        target.x = width * (0.64 + 0.2 * Math.cos(time * 0.00035));
        target.y = height * (0.48 + 0.24 * Math.sin(time * 0.00052));
      }
      light.x += (target.x - light.x) * 0.09;
      light.y += (target.y - light.y) * 0.09;

      ctx.clearRect(0, 0, width, height);

      const glow = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, RADIUS * 2);
      glow.addColorStop(0, "rgba(163, 230, 53, 0.10)");
      glow.addColorStop(1, "rgba(163, 230, 53, 0)");
      ctx.globalAlpha = 1;
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      const cols = Math.ceil(width / GAP) + 1;
      const rows = Math.ceil(height / GAP) + 1;
      const offsetX = (width - (cols - 1) * GAP) / 2;
      const offsetY = (height - (rows - 1) * GAP) / 2;
      const lit: number[] = [];

      ctx.fillStyle = "#f4f4f5";
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = offsetX + c * GAP;
          const y = offsetY + r * GAP;
          const dx = x - light.x;
          const dy = y - light.y;
          const influence = Math.exp(-(dx * dx + dy * dy) / (RADIUS * RADIUS));
          const wave = 0.5 + 0.5 * Math.sin(x * 0.011 + y * 0.007 + time * 0.0009);

          if (influence > 0.03) {
            lit.push(x, y, dx, dy, influence);
          } else {
            ctx.globalAlpha = 0.05 + wave * 0.09;
            ctx.fillRect(x - 0.75, y - 0.75, 1.5, 1.5);
          }
        }
      }

      ctx.fillStyle = "#a3e635";
      for (let i = 0; i < lit.length; i += 5) {
        const influence = lit[i + 4];
        const dist = Math.hypot(lit[i + 2], lit[i + 3]) || 1;
        const push = influence * 9;
        const x = lit[i] + (lit[i + 2] / dist) * push;
        const y = lit[i + 1] + (lit[i + 3] / dist) * push;
        ctx.globalAlpha = Math.min(1, 0.12 + influence * 0.85);
        ctx.beginPath();
        ctx.arc(x, y, 0.8 + influence * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (time: number) => {
      draw(time);
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      frame = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!running) {
        light.x = target.x = width * 0.7;
        light.y = target.y = height * 0.45;
        pointerActive = reduced;
        draw(0);
        pointerActive = false;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = canvas.getBoundingClientRect();
      pointerActive = true;
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
    };

    const onPointerOut = (e: PointerEvent) => {
      if (!e.relatedTarget) pointerActive = false;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const visibility = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    visibility.observe(canvas);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerout", onPointerOut);

    return () => {
      stop();
      resizeObserver.disconnect();
      visibility.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerout", onPointerOut);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
