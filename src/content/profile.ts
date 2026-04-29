export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  initials: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  currently: { label: string; value: string }[];
  typewriter: string[];
  socials: SocialLink[];
};

export const profile: Profile = {
  /** Casual public-facing brand. Resume / formal docs use "Kristopher Kewish". */
  name: "Kris Kewish",
  initials: "KK",
  role: "Full Stack Software Engineer",
  location: "Melbourne, Australia",
  email: "kristopherkewish@gmail.com",
  phone: "0422 019 884",
  bio: "I'm a full-stack engineer who likes building software that holds up — clean, scalable, easy to reason about months later. Day-to-day that means React and TypeScript on the front, .NET and SQL Server on the back, and Azure tying it together.",
  currently: [
    { label: "Working on", value: "Full-stack loan servicing tooling at Interfi Systems" },
    { label: "Learning", value: "AI development workflows & cloud architecture" },
  ],
  typewriter: [
    "React apps",
    "TypeScript systems",
    ".NET services",
    "cloud-native tools",
    "things that ship",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/kristopherkewish" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kristopher-kewish-3189352bb/" },
    { label: "Email", href: "mailto:kristopherkewish@gmail.com" },
  ],
};
