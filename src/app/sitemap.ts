import { MetadataRoute } from "next";

import { getSitemapPostList } from "@/lib/post";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postList = await getSitemapPostList();
  const baseUrl = "https://www.dustvoyager.com/";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postList,
  ];
}
