import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/pages/PageHeader";
import { SectionBlock } from "@/components/pages/SectionBlock";
import { BlogCard, type BlogPost } from "@/components/blog/BlogCard";
import { listBlogPosts, parseMarkdown, readMarkdownFile } from "@/lib/markdown";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await listBlogPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { data } = await readMarkdownFile(`${process.cwd()}/content/blog/${slug}.md`);

    return {
      title: `${data.title || slug.replace(/-/g, " ")} | DardiBook`,
      description: data.description || "DardiBook resource article.",
    };
  } catch {
    return {
      title: "Article not found | DardiBook",
      description: "The requested article does not exist.",
    };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let page;

  try {
    page = await readMarkdownFile(`${process.cwd()}/content/blog/${slug}.md`);
  } catch {
    notFound();
  }

  const posts = await listBlogPosts();
  const relatedPosts = posts
    .filter((post) => post.slug !== slug)
    .slice(0, 3);

  return (
    <main>
      <PageHeader
        eyebrow={page.data.category || "Resource"}
        title={page.data.title || slug.replace(/-/g, " ")}
        description={page.data.description || ""}
      />
      <SectionBlock title="">
        <article className="prose prose-slate prose-lg dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: parseMarkdown(page.content) }} />
        </article>
      </SectionBlock>
      <SectionBlock
        eyebrow="More resources"
        title="Continue reading"
        description="Explore more practical clinic workflow guides from DardiBook."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {relatedPosts.map((post: BlogPost) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </SectionBlock>
    </main>
  );
}
