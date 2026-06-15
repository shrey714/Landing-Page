import Link from "next/link";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
};

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group rounded-2xl border border-white/10 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#00d4ff]/40 dark:bg-[#081C4F]/70">
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#00d4ff]">
        <span>{post.category}</span>
        <span className="text-slate-400">•</span>
        <span className="text-slate-500 dark:text-slate-400">{post.readingTime}</span>
      </div>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-950 dark:text-white group-hover:text-[#635bff]">
        {post.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {post.description}
      </p>
      <div className="mt-5 text-sm font-medium text-[#635bff]">Read article →</div>
    </Link>
  );
}
