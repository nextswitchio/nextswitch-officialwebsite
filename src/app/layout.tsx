import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Switch — Lighting Africa. Building the Future.",
  description:
    "A frontier company advancing redemptive digital innovation across Africa. We help individuals, startups, businesses, and institutions design, build, and scale technology-driven solutions that create lasting impact.",
  keywords: [
    "Next Switch",
    "Africa technology",
    "digital innovation",
    "software development Africa",
    "tech talent Africa",
    "innovation lab",
  ],
  icons: [{ rel: "icon", url: "/Next-Switch-Icon.png" }],
  openGraph: {
    title: "Next Switch — Lighting Africa. Building the Future.",
    description:
      "A frontier company advancing redemptive digital innovation across Africa.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-dvh bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
