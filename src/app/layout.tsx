import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { absoluteUrl } from "@/lib/utils";
import CookieConsent from "@/components/ui/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = absoluteUrl("");
const siteName = "Next Switch";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Next Switch — Lighting Africa. Building the Future.",
    template: "%s — Next Switch",
  },
  description:
    "A frontier company advancing redemptive digital innovation across Africa. We help individuals, startups, businesses, and institutions design, build, and scale technology-driven solutions that create lasting impact.",
  keywords: [
    "Next Switch",
    "Africa technology",
    "digital innovation",
    "software development Africa",
    "tech talent Africa",
    "innovation lab",
    "African tech ecosystem",
    "redemptive innovation",
    "technology consulting Africa",
    "AI Africa",
    "digital transformation Africa",
    "African startups",
    "venture building Africa",
  ],
  authors: [{ name: "Next Switch" }],
  creator: "Next Switch",
  publisher: "Next Switch",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [{ rel: "icon", url: "/Next-Switch-Icon.png" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title: "Next Switch — Lighting Africa. Building the Future.",
    description:
      "A frontier company advancing redemptive digital innovation across Africa. We help individuals, startups, businesses, and institutions design, build, and scale technology-driven solutions that create lasting impact.",
    url: siteUrl,
    images: [
      {
        url: absoluteUrl("/og.png"),
        width: 1200,
        height: 630,
        alt: "Next Switch — Lighting Africa. Building the Future.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Switch — Lighting Africa. Building the Future.",
    description:
      "A frontier company advancing redemptive digital innovation across Africa.",
    images: [absoluteUrl("/og.png")],
    creator: "@nextswitch",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Next Switch",
  url: siteUrl,
  logo: absoluteUrl("/Next-Switch-Icon.png"),
  description:
    "A frontier company advancing redemptive digital innovation across Africa.",
  foundingDate: "2020",
  sameAs: [
    "https://twitter.com/nextswitch",
    "https://linkedin.com/company/nextswitch",
    "https://github.com/nextswitch",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
  },
  knowsAbout: [
    "Digital Innovation",
    "Software Development",
    "Technology Consulting",
    "AI and Machine Learning",
    "Digital Transformation",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body className="min-h-dvh bg-black text-white antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
