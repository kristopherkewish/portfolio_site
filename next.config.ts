import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Project preview SVGs live in /public/projects and are authored in this repo.
    // Hardened CSP + attachment disposition neutralizes the usual SVG XSS vectors.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
