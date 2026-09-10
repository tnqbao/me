import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tnqbao.github.io/me";
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projects/gauas-cloud`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resume`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
