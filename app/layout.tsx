import type { Metadata, Viewport } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/data/portfolio";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url),
  title: {
    default: `${siteConfig.fullName} — Developer Portfolio`,
    template: `%s — ${siteConfig.fullName}`
  },
  description:
    "A premium, animated developer portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui.",
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: absoluteUrl(),
    title: `${siteConfig.fullName} — Developer Portfolio`,
    description: siteConfig.title,
    siteName: `${siteConfig.fullName} Portfolio`
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} — Developer Portfolio`,
    description: siteConfig.title,
    creator: siteConfig.social.x
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#050816" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
