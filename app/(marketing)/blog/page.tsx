import type { Metadata } from "next";
import { PageHeader } from "@/components/pages/PageHeader";
import { SectionBlock } from "@/components/pages/SectionBlock";
import { BlogCard, type BlogPost } from "@/components/blog/BlogCard";
import { listBlogPosts } from "@/lib/markdown";
import { APP_LINKS } from "@/content/links";

export const metadata: Metadata = {
  title: "Resources | DardiBook",
  description: "Practical resources for clinics, doctors, and healthcare teams improving appointments, patient records, prescriptions, diagnostics, and follow-ups.",
};

export default async function BlogIndexPage() {
  const posts = await listBlogPosts();

  return (
    <main>
      <PageHeader
        eyebrow="Resources"
        title="Practical guides for modern clinic workflows."
        description="Read about patient records, digital prescriptions, appointment queues, follow-ups, diagnostics, and clinic operations from the DardiBook team."
        ctaLabel="Book a walkthrough"
        ctaHref={APP_LINKS.DEMO}
        secondaryLabel="Explore solutions"
        secondaryHref="/solutions/clinics"
      />
      <SectionBlock
        eyebrow="Latest articles"
        title="Learn how to make clinic workflows clearer."
        description="Our articles are written for doctors, clinic owners, reception teams, and healthcare operators who want practical ways to reduce admin work."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: BlogPost) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </SectionBlock>
    </main>
  );
}
