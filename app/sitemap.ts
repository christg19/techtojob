import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://techtojob.christopherozuna.com";

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${base}/`,
          en: `${base}/en/`,
        },
      },
    },
  ];
}
