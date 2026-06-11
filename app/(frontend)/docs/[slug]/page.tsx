import fs from "fs/promises";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";
import type { Metadata } from "next";

type Props = { params: { slug: string } | Promise<{ slug: string }> };

type MetadataProps = { params: Promise<{ slug: string }> };

async function loadPage(slug: string) {
  const filePath = path.join(process.cwd(), "content", "pages", `${slug}.md`);
  const md = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(md);
  return { data, content };
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
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
    };
  } catch {
    return {
      title: "Page not found | DardiBook",
      description: "The requested document does not exist.",
    };
  }
}

export default async function DocPage(props: Props) {
  const params = await (props.params as Promise<{ slug: string }> | { slug: string });
  const { slug } = params as { slug: string };

  let pageData;
  try {
    pageData = await loadPage(slug);
  } catch (e) {
    return (
      <main className="max-w-4xl mx-auto py-24 px-4">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="mt-4">The requested document does not exist.</p>
      </main>
    );
  }

  const { data, content } = pageData;
  const html = marked.parse(content || "", { mangle: false, headerIds: false });
  const title = data.title || slug.replace(/-/g, " ");
  const description = data.description || "DardiBook documentation page.";

  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <section className="rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-lg shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-950/90 dark:shadow-none">
        <div className="mb-8 space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Documentation</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>
        <article className="prose prose-slate prose-lg dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </section>
    </main>
  );
}
