import type { Metadata, Viewport } from "next";
import { Geist, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/motion/LenisProvider";
import { TopNav } from "@/components/nav/TopNav";
import { ScrollProgress } from "@/components/nav/ScrollProgress";
import { profile } from "@/content/profile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://kriskewish.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.bio,
  keywords: [
    profile.name,
    "Full Stack Software Engineer",
    "Software Engineer",
    "React",
    "TypeScript",
    "Next.js",
    ".NET",
    "C#",
    "Azure",
    "SQL Server",
    "Melbourne",
    "Australia",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — ${profile.role}`,
    description: profile.bio,
    siteName: profile.name,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.bio,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-[var(--color-bg)] text-[var(--color-fg)]">
        <LenisProvider>
          <ScrollProgress />
          <TopNav />
          <main id="main">{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
