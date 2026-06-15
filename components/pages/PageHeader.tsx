import { Button } from "@/components/ui/button";
import Link from "next/link";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00d4ff]">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>
        {(ctaHref || secondaryHref) && (
          <div className="flex flex-wrap gap-3">
            {ctaHref && ctaLabel && (
              <Button asChild size="lg" className="rounded-full border-2 border-[#635bff] bg-[#635bff] text-white hover:bg-[#635bff96] dark:bg-[#635bff96] dark:hover:bg-[#635bff]">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            )}
            {secondaryHref && secondaryLabel && (
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
