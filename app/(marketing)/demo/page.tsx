import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/pages/PageHeader";
import { SectionBlock } from "@/components/pages/SectionBlock";
import demo from "@/content/demo";
import { APP_LINKS } from "@/content/links";

export const metadata: Metadata = {
  title: "Book a Demo | DardiBook",
  description: "Book a guided DardiBook walkthrough and see how appointments, patient records, prescriptions, diagnostics, and follow-ups can fit your clinic workflow.",
};

export default function DemoPage() {
  return (
    <main>
      <PageHeader
        eyebrow={demo.eyebrow}
        title={demo.title}
        description={demo.description}
        ctaLabel="Contact our team"
        ctaHref={APP_LINKS.DOCS.CONTACT_US}
        secondaryLabel="View pricing"
        secondaryHref={APP_LINKS.PRICING}
      />
      <SectionBlock
        eyebrow="Walkthrough flow"
        title="A practical session, not a generic sales demo."
        description="We use the walkthrough to understand your current workflow and show the DardiBook setup that matches your practice."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {demo.steps.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-white/10 bg-[#081C4F]/70 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00d4ff24] text-sm font-bold text-[#00d4ff]">
                {index + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="What we cover"
        title="See the workflows that matter to your team."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-[#081C4F]/70 p-8">
            <h3 className="text-2xl font-bold text-white">Workflow checklist</h3>
            <ul className="mt-6 space-y-4">
              {demo.checklist.map((item) => (
                <li key={item} className="flex gap-3 text-slate-200">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00d4ff]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-background p-8 dark:bg-[#081C4F]/70">
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Ready to map your setup?</h3>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{demo.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link href={APP_LINKS.DOCS.CONTACT_US}>Contact our team</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href={APP_LINKS.DARDIBOOK_DASHBOARD}>Access dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionBlock>
    </main>
  );
}
