export type PreviewProps = {
  /** True while the preview is on screen and motion is allowed. Timers should only run then. */
  active: boolean;
  /** The project's accent colour (hex). */
  accent: string;
};
