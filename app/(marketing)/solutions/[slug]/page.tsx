import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/pages/PageHeader";
import { SectionBlock } from "@/components/pages/SectionBlock";
import { FeatureCard } from "@/components/pages/FeatureCard";
import solutions from "@/content/solutions";
import { APP_LINKS } from "@/content/links";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return solutions.pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = solutions.pages.find((item) => item.slug === slug);

  return {
    title: page ? `${page.title} | DardiBook` : "Solution not found | DardiBook",
    description: page?.description || "DardiBook solution page.",
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const page = solutions.pages.find((item) => item.slug === slug);

  if (!page) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Solution not found</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">The requested solution page does not exist.</p>
        <Button asChild className="mt-6 rounded-full">
          <Link href={APP_LINKS.HOME}>Back to home</Link>
        </Button>
      </main>
    );
  }

  return (
    <main>
      <PageHeader
        eyebrow={page.eyebrow}
        title={page.heroTitle}
        description={page.heroDescription}
        ctaLabel={solutions.commonCTA}
        ctaHref={APP_LINKS.DEMO}
        secondaryLabel="View pricing"
        secondaryHref={APP_LINKS.PRICING}
      />
      <SectionBlock
        eyebrow="Built for"
        title={page.description}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {page.audience.map((item) => (
            <article key={item} className="rounded-2xl border border-white/10 bg-[#081C4F]/70 p-5 text-white">
              {item}
            </article>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="Common challenges"
        title="The workflow problems DardiBook helps solve."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {page.painPoints.map((item) => (
            <FeatureCard key={item} title={item} description="" />
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="Workflows"
        title="How DardiBook supports your team."
        description="Start with the workflows your team uses every day, then expand as your practice grows."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {page.workflows.map((workflow) => (
            <FeatureCard key={workflow.title} title={workflow.title} description={workflow.description} />
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="Modules"
        title="Modules that fit this solution."
      >
        <div className="rounded-3xl border border-white/10 bg-[#081C4F]/70 p-8 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00d4ff]">{page.metricValue}</div>
          <div className="mt-3 text-3xl font-extrabold text-white">{page.metricLabel}</div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {page.modules.map((module) => (
              <span key={module} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white">
                {module}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full">
              <Link href={APP_LINKS.DEMO}>{solutions.commonCTA}</Link>
            </Button>
          </div>
        </div>
      </SectionBlock>
    </main>
  );
}
