import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiSharp,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDotnet,
  SiTailwindcss,
  SiSupabase,
  SiGithub,
  SiClaude,
} from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { DiMsqlServer } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

export type SkillCategory = "Languages" | "Frameworks" | "Tools";

export type Skill = {
  name: string;
  icon: IconType;
  category: SkillCategory;
  /** Brand color used for the icon glow on hover */
  color: string;
};

export const skills: Skill[] = [
  { name: "JavaScript", icon: SiJavascript, category: "Languages", color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, category: "Languages", color: "#3178C6" },
  { name: "C#", icon: SiSharp, category: "Languages", color: "#9B4F96" },
  { name: "SQL", icon: BsFiletypeSql, category: "Languages", color: "#E48E0F" },
  { name: "HTML", icon: SiHtml5, category: "Languages", color: "#E34F26" },
  { name: "CSS", icon: SiCss, category: "Languages", color: "#1572B6" },

  { name: "React", icon: SiReact, category: "Frameworks", color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frameworks", color: "#FFFFFF" },
  { name: ".NET", icon: SiDotnet, category: "Frameworks", color: "#512BD4" },
  { name: "Node.js", icon: SiNodedotjs, category: "Frameworks", color: "#5FA04E" },
  { name: "Tailwind", icon: SiTailwindcss, category: "Frameworks", color: "#06B6D4" },

  { name: "SQL Server", icon: DiMsqlServer, category: "Tools", color: "#CC2927" },
  { name: "Supabase", icon: SiSupabase, category: "Tools", color: "#3ECF8E" },
  { name: "Azure", icon: VscAzure, category: "Tools", color: "#0078D4" },
  { name: "GitHub", icon: SiGithub, category: "Tools", color: "#FFFFFF" },
  { name: "Claude", icon: SiClaude, category: "Tools", color: "#D97757" },
];

export const skillsByCategory = (category: SkillCategory) =>
  skills.filter((s) => s.category === category);
