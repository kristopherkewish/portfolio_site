export type Experience = {
  year: string;
  title: string;
  org?: string;
  body: string;
};

export const experience: Experience[] = [
  {
    year: "Earlier",
    title: "First lines of code",
    body: "Started writing Visual Basic as a kid, mostly to mess around. That turned into Java and C# for game development through the school years — long before any of this was a career plan, just curiosity that wouldn't quit.",
  },
  {
    year: "2018",
    title: "Started university",
    org: "Monash University — Engineering & Pharmaceutical Science",
    body: "Began a dual Bachelor of Engineering / Pharmaceutical Science. By then I'd been writing code as a hobby for years, and it didn't take long to realise I'd ended up on the wrong degree.",
  },
  {
    year: "2023",
    title: "Made the pivot",
    body: "Stepped away from the dual degree at Monash and committed fully to software. A deliberate decision — pharma wasn't where I wanted to land, and waiting out a credential I no longer needed wasn't going to change that.",
  },
  {
    year: "2024",
    title: "Bootcamp & freelance work",
    body: "Completed the Codecademy Full Stack Engineer Bootcamp and a dedicated .NET course. Started taking on freelance projects — building responsive UIs, structured APIs, and cloud-deployed apps for small business clients alongside personal builds.",
  },
  {
    year: "Now",
    title: "Full-stack at Interfi Systems",
    org: "Software Engineer · Sept 2024 – present",
    body: "Building and maintaining full-stack systems for loan management and internal analytics. Day-to-day mix of React + .NET feature work, complex SQL stored procedures, Azure-based observability tooling, and integrating with banking partners.",
  },
];
