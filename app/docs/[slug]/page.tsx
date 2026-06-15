import fs from "fs/promises";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactUsForm from "@/components/subs/ContactForm";

type DocPageData = {
  data: {
    title?: string;
    description?: string;
    canonical?: string;
    lastModified?: string;
  };
  content: string;
};

type Props = { params: Promise<{ slug: string }> };

function sanitizeHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+\s*=\s*(['"]).*?\1/gi, "")
    .replace(/javascript:/gi, "");
}

const pagesDirectory = path.join(process.cwd(), "content", "pages");

async function loadPage(slug: string): Promise<DocPageData> {
  const filePath = path.join(pagesDirectory, `${slug}.md`);
  const md = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(md);

  return { data, content };
}

export async function generateStaticParams() {
  const filenames = await fs.readdir(pagesDirectory);

  return filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => ({ slug: filename.replace(".md", "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const { data } = await loadPage(slug);
    const title = data.title || slug.replace(/-/g, " ");
    const description = data.description || "DardiBook documentation page.";
    const canonical = data.canonical || `/docs/${slug}`;

    return {
      title: `${title} | DardiBook`,
      description,
      alternates: {
        canonical: `https://dardibook.in${canonical}`,
      },
      openGraph: {
        title: `${title} | DardiBook`,
        description,
        type: "article",
        url: `https://dardibook.in${canonical}`,
      },
    };
  } catch {
    return {
      title: "Page not found | DardiBook",
      description: "The requested document does not exist.",
    };
  }
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  let pageData: DocPageData;

  try {
    pageData = await loadPage(slug);
  } catch {
    notFound();
  }

  const { data, content } = pageData;
  const html = sanitizeHtml(marked.parse(content || "", { mangle: false, headerIds: false }) as string);
  const title = data.title || slug.replace(/-/g, " ");
  const description = data.description || "DardiBook documentation page.";
  const lastModified = data.lastModified
    ? new Date(`${data.lastModified}T00:00:00Z`).toISOString()
    : undefined;

  return (
    <main className="max-w-6xl mx-auto py-16 px-4">
      <div className="mb-8 space-y-4">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Documentation</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
        {lastModified && (
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date(lastModified).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        )}
      </div>
      <article className="prose prose-slate prose-lg dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      {title === "Contact Us" && (
        <div
          className="rounded-lg shadow-[0px_0px_0px_1px_#a0aec0] bg-white mt-3"
          style={{ overflowY: "auto" }}
        >
          <ContactUsForm />
        </div>
      )}
    </main>
  );
}
