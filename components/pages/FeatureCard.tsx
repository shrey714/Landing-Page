type FeatureCardProps = {
  title: string;
  description: string;
  accent?: string;
};

export function FeatureCard({ title, description, accent = "#00d4ff" }: FeatureCardProps) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-[#081C4F]/70 p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#00d4ff]/40 dark:bg-[#061233]">
      <div className="mb-5 h-2.5 w-12 rounded-full" style={{ backgroundColor: accent, boxShadow: `0 0 18px ${accent}55` }} />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </article>
  );
}
