import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const title = "Tran Nguyen Quoc Bao — Software Engineer";
const description =
  "Software Engineer focused on backend systems, Kubernetes, DevOps, GitOps and cloud infrastructure.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tnqbao.github.io/me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Tran Nguyen Quoc Bao",
  },
  description,
  alternates: { canonical: "/" },
  authors: [{ name: "Tran Nguyen Quoc Bao", url: "https://github.com/tnqbao" }],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Tran Nguyen Quoc Bao",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0E1116" },
    { media: "(prefers-color-scheme: light)", color: "#F6F4EF" },
  ],
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
