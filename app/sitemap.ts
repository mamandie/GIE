import type { MetadataRoute } from "next";
import { sectors } from "@/lib/content";

const SITE_URL = "https://goa.sn";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...sectors.map((s) => ({
      url: `${SITE_URL}/domaines/${s.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}