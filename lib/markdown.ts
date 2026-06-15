import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export type MarkdownPage = {
  data: {
    title?: string;
    description?: string;
    date?: string;
    category?: string;
    readingTime?: string;
    canonical?: string;
    lastModified?: string;
  };
  content: string;
};

const blogDirectory = path.join(process.cwd(), "content", "blog");

export function sanitizeHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+\s*=\s*(['"]).*?\1/gi, "")
    .replace(/javascript:/gi, "");
}

export function parseMarkdown(content: string) {
  return sanitizeHtml(marked.parse(content || "", { mangle: false, headerIds: false }) as string);
}

export async function readMarkdownFile(filePath: string): Promise<MarkdownPage> {
  const md = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(md);

  return { data, content };
}

export async function listBlogPosts() {
  const filenames = await fs.readdir(blogDirectory);
  const posts = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith(".md"))
      .map(async (filename) => {
        const slug = filename.replace(".md", "");
        const page = await readMarkdownFile(path.join(blogDirectory, filename));

        return {
          slug,
          title: page.data.title || slug.replace(/-/g, " "),
          description: page.data.description || "",
          date: page.data.date || "",
          category: page.data.category || "DardiBook",
          readingTime: page.data.readingTime || "Read",
        };
      })
  );

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}
