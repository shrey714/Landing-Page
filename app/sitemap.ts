import { MetadataRoute } from 'next';
import fs from 'fs/promises';
import path from 'path';
import { APP_LINKS } from '@/content/links';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://dardibook.in';

  // Core pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: APP_LINKS.DARDIBOOK_DASHBOARD,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];

  // Dynamic doc pages
  const pagesDirectory = path.join(process.cwd(), 'content', 'pages');
  let filenames: string[] = [];
  try {
    filenames = await fs.readdir(pagesDirectory);
  } catch (error) {
    console.error('Error reading pages directory for sitemap:', error);
  }

  const docRoutes: MetadataRoute.Sitemap = filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => ({
      url: `${baseUrl}/docs/${filename.replace('.md', '')}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

  return [...routes, ...docRoutes];
}
