import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/pages/PageHeader";
import { SectionBlock } from "@/components/pages/SectionBlock";
import { FeatureCard } from "@/components/pages/FeatureCard";
import security from "@/content/security";
import { APP_LINKS } from "@/content/links";

export const metadata: Metadata = {
  title: "Security and Trust | DardiBook",
  description: "Learn how DardiBook is designed for responsible handling of clinic and patient data with privacy-first workflows and role-aware access.",
};

export default function SecurityPage() {
  return (
    <main>
      <PageHeader
        eyebrow={security.eyebrow}
        title={security.title}
        description={security.description}
        ctaLabel="Talk to our team"
        ctaHref={APP_LINKS.DOCS.CONTACT_US}
        secondaryLabel="Explore solutions"
        secondaryHref="/solutions/clinics"
      />
      <SectionBlock
        eyebrow="Principles"
        title="Responsible workflows for healthcare teams."
        description="DardiBook focuses on practical controls that help clinics stay organized without making patient information harder to manage."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {security.principles.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="Practices"
        title="Designed to keep care context clear."
      >
        <div className="rounded-3xl border border-white/10 bg-[#081C4F]/70 p-8">
          <div className="grid gap-8 md:grid-cols-3">
            {security.practices.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="Questions"
        title="Security FAQs"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {security.faq.map((item) => (
            <article key={item.question} className="rounded-2xl border border-white/10 bg-background p-6 dark:bg-[#081C4F]/70">
              <h3 className="font-semibold text-slate-950 dark:text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </SectionBlock>
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#081C4F] to-[#102a66] p-8 text-white shadow-lg">
          <h2 className="text-3xl font-extrabold">Want to review access and workflow needs?</h2>
          <p className="mt-4 max-w-2xl text-slate-200">
            We can walk through your team structure, patient workflows, and access requirements before recommending a DardiBook setup.
          </p>
          <Button asChild className="mt-6 rounded-full bg-white text-[#081C4F] hover:bg-slate-100">
            <Link href={APP_LINKS.DOCS.CONTACT_US}>Contact our team</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
