type SectionBlockProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function SectionBlock({ eyebrow, title, description, children }: SectionBlockProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00d4ff]">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        )}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}
