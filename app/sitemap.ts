import { MetadataRoute } from "next";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { APP_LINKS } from "@/content/links";

type DocFrontmatter = {
  lastModified?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://dardibook.in";

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: APP_LINKS.DARDIBOOK_DASHBOARD,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];

  const pagesDirectory = path.join(process.cwd(), "content", "pages");
  let filenames: string[] = [];

  try {
    filenames = await fs.readdir(pagesDirectory);
  } catch (error) {
    console.error("Error reading pages directory for sitemap:", error);
  }

  const docRoutes: MetadataRoute.Sitemap = [];

  for (const filename of filenames.filter((item) => item.endsWith(".md"))) {
    const slug = filename.replace(".md", "");
    const md = await fs.readFile(path.join(pagesDirectory, filename), "utf8");
    const parsed = matter<string, Record<string, unknown>>(md);
    const data = parsed.data as DocFrontmatter;
    const lastModified = data.lastModified
      ? new Date(`${data.lastModified}T00:00:00Z`)
      : new Date();

    docRoutes.push({
      url: `${baseUrl}/docs/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return [...routes, ...docRoutes];
}
