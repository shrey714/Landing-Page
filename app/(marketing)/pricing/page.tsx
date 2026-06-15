import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/pages/PageHeader";
import { SectionBlock } from "@/components/pages/SectionBlock";
import { FeatureCard } from "@/components/pages/FeatureCard";
import pricing from "@/content/pricing";
import { APP_LINKS } from "@/content/links";

export const metadata: Metadata = {
  title: "Pricing | DardiBook",
  description: "Explore DardiBook pricing options for solo doctors, clinics, and hospitals based on users, branches, and workflow modules.",
};

export default function PricingPage() {
  return (
    <main>
      <PageHeader
        eyebrow={pricing.eyebrow}
        title={pricing.title}
        description={pricing.description}
        ctaLabel="Book a walkthrough"
        ctaHref={APP_LINKS.DEMO}
        secondaryLabel="See solutions"
        secondaryHref="/solutions/clinics"
      />
      <SectionBlock
        eyebrow="Plans"
        title="Flexible setup for the way your practice works."
        description="DardiBook can start with core clinic workflows and expand as your team, branches, and departments grow."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.cards.map((card) => (
            <article
              key={card.title}
              className={`rounded-3xl border p-6 shadow-sm ${
                card.highlighted
                  ? "border-[#635bff] bg-[#081C4F] text-white shadow-[0_20px_80px_-30px_#635bff]"
                  : "border-white/10 bg-background dark:bg-[#081C4F]/70"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{card.title}</h3>
                {card.highlighted && (
                  <span className="rounded-full bg-[#00d4ff24] px-3 py-1 text-xs font-medium text-[#00d4ff]">
                    Popular
                  </span>
                )}
              </div>
              <p className={`mt-4 text-sm leading-6 ${card.highlighted ? "text-slate-300" : "text-slate-600 dark:text-slate-300"}`}>
                {card.description}
              </p>
              <div className="mt-6 text-3xl font-extrabold">{card.price}</div>
              <ul className="mt-6 space-y-3 text-sm">
                {card.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#00d4ff]" />
                    <span className={card.highlighted ? "text-slate-200" : "text-slate-600 dark:text-slate-300"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 w-full rounded-full" variant={card.highlighted ? "default" : "outline"}>
                <a href={APP_LINKS.DEMO}>{card.cta}</a>
              </Button>
            </article>
          ))}
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="What affects pricing"
        title="A setup based on your actual clinic needs."
        description="We recommend a configuration after understanding your team size, branches, departments, and modules."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard title="Users and roles" description="Reception, doctors, pharmacy, diagnostics, and operations teams can have different access needs." />
          <FeatureCard title="Branches and departments" description="Multi-location and multi-speciality teams may need structured workflows across departments." />
          <FeatureCard title="Modules" description="Start with core workflows and expand into diagnostics, pharmacy, admissions, billing, or follow-ups." />
        </div>
      </SectionBlock>
      <SectionBlock
        eyebrow="Questions"
        title="Pricing FAQs"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {pricing.faq.map((item) => (
            <article key={item.question} className="rounded-2xl border border-white/10 bg-[#081C4F]/70 p-6">
              <h3 className="font-semibold text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </SectionBlock>
    </main>
  );
}
