import {
  Clock3Icon,
  LockKeyholeIcon,
  ShieldCheckIcon,
  UsersRoundIcon,
} from "lucide-react";
import content from "@/content/content";
import TypingAnimation from "../ui/typingText";

const TrustProof = () => {

  const trustIcons = [ShieldCheckIcon, LockKeyholeIcon, Clock3Icon, UsersRoundIcon];
  const trustItems = content.TrustProof.items.map((item, index) => ({
    ...item,
    icon: trustIcons[index],
  }));
  return (
    <section id="trust" className="relative scroll-mt-28">
      <div className="relative z-1 flex justify-center">
        <div className="w-full max-w-7xl mx-4">
          <div className="py-20">
            <div className="grid gap-y-10 rounded-xl border border-white/10 bg-white/5 px-6 py-10 min-[900px]:grid-cols-[1.1fr_2fr] min-[900px]:gap-x-12 min-[900px]:px-10">
              <section className="grid content-start gap-y-5">
                <h2 className="text-[#00d4ff] text-3xl md:text-4xl font-semibold leading-tight">
                  {content.TrustProof.title}
                </h2>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  {content.TrustProof.subtitle}
                </h1>
                <TypingAnimation className="text-accent-foreground font-light text-lg leading-[1.6]">
                  {content.TrustProof.description}
                </TypingAnimation>
              </section>

              <div className="grid gap-4 min-[700px]:grid-cols-2">
                {trustItems.map((item) => (
                  <article
                    key={item.title}
                    className="grid gap-y-3 rounded-xl bg-[#081C4F]/60 p-5"
                  >
                    <div className="grid h-9 w-9 place-items-center rounded bg-[#00d4ff24] text-[#00d4ff]">
                      <item.icon size={18} />
                    </div>
                    <h3 className="text-white text-2xl font-semibold leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 font-light text-base leading-[1.6]">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustProof;
