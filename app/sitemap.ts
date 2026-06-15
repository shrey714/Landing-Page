import { MetadataRoute } from "next";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { APP_LINKS } from "@/content/links";

type DocFrontmatter = {
  lastModified?: string;
};

type BlogFrontmatter = {
  date?: string;
  lastModified?: string;
};

const baseUrl = "https://dardibook.in";

function toAbsoluteUrl(url: string) {
  return url.startsWith("http") ? url : `${baseUrl}${url}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "yearly", priority: 1 },
    { url: toAbsoluteUrl(APP_LINKS.BLOG), lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: toAbsoluteUrl(APP_LINKS.PRICING), lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: toAbsoluteUrl(APP_LINKS.DEMO), lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: toAbsoluteUrl(APP_LINKS.SECURITY), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...Object.values(APP_LINKS.SOLUTIONS).map((url): MetadataRoute.Sitemap[number] => ({
      url: toAbsoluteUrl(url),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    { url: APP_LINKS.DARDIBOOK_DASHBOARD, lastModified: new Date(), changeFrequency: "yearly", priority: 1 },
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

  const blogDirectory = path.join(process.cwd(), "content", "blog");
  let blogFilenames: string[] = [];

  try {
    blogFilenames = await fs.readdir(blogDirectory);
  } catch (error) {
    console.error("Error reading blog directory for sitemap:", error);
  }

  const blogRoutes: MetadataRoute.Sitemap = await Promise.all(
    blogFilenames
      .filter((filename) => filename.endsWith(".md"))
      .map(async (filename): Promise<MetadataRoute.Sitemap[number]> => {
        const slug = filename.replace(".md", "");
        const md = matter(await fs.readFile(path.join(blogDirectory, filename), "utf8"));
        const data = md.data as BlogFrontmatter;
        const lastModified = data.lastModified || data.date
          ? new Date(`${data.lastModified || data.date}T00:00:00Z`)
          : new Date();

        return {
          url: `${baseUrl}/blog/${slug}`,
          lastModified,
          changeFrequency: "weekly",
          priority: 0.7,
        };
      })
  );

  return [...routes, ...blogRoutes, ...docRoutes];
}
