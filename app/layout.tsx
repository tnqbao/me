import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import { siteUrl } from "./site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const title = "Tran Nguyen Quoc Bao — Software / DevOps Engineer";
const description =
  "Software Engineer focused on backend systems, Kubernetes, DevOps and application infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Tran Nguyen Quoc Bao",
  },
  description,
  alternates: { canonical: new URL(`${siteUrl}/`) },
  authors: [{ name: "Tran Nguyen Quoc Bao", url: "https://github.com/tnqbao" }],
  openGraph: {
    title,
    description,
    url: `${siteUrl}/`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
    siteName: "Tran Nguyen Quoc Bao",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#030406",
};

const themeScript = `
  try {
    const stored = localStorage.getItem('bao-theme');
    const theme = stored || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.dataset.theme = theme;
  } catch (_) {
    document.documentElement.classList.add('dark');
    document.documentElement.dataset.theme = 'dark';
  }
`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
