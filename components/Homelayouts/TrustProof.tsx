import {
  Clock3Icon,
  LockKeyholeIcon,
  ShieldCheckIcon,
  UsersRoundIcon,
} from "lucide-react";

const trustItems = [
  {
    title: "Secure clinic records",
    description:
      "Keep sensitive patient information organized with privacy-first digital workflows.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Role-based staff access",
    description:
      "Give reception, doctors, and operations teams the right view for their work.",
    icon: LockKeyholeIcon,
  },
  {
    title: "Fast onboarding",
    description:
      "Start with core clinic workflows first, then expand into pharmacy, labs, and follow-ups.",
    icon: Clock3Icon,
  },
  {
    title: "Built for teams",
    description:
      "Works for solo doctors, growing clinics, hospitals, pharmacies, and diagnostics.",
    icon: UsersRoundIcon,
  },
];

const TrustProof = () => {
  return (
    <section id="trust" className="relative scroll-mt-28">
      <div className="relative z-[1] flex justify-center">
        <div className="w-full max-w-7xl mx-4">
          <div className="py-20">
            <div className="grid gap-y-10 rounded-[8px] border border-white/10 bg-white/[0.05] px-6 py-10 min-[900px]:grid-cols-[1.1fr_2fr] min-[900px]:gap-x-12 min-[900px]:px-10">
              <section className="grid content-start gap-y-5">
                <h2 className="text-[#00d4ff] text-3xl md:text-4xl font-semibold leading-tight">
                  Why clinics choose DardiBook
                </h2>
                <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
                  Less manual work, better patient continuity
                </h1>
                <p className="text-gray-300 font-light text-lg leading-[1.6]">
                  The strongest healthcare software feels calm during a busy
                  clinic day. DardiBook keeps the essentials visible without
                  forcing teams into a complicated enterprise system.
                </p>
              </section>

              <div className="grid gap-4 min-[700px]:grid-cols-2">
                {trustItems.map((item) => (
                  <article
                    key={item.title}
                    className="grid gap-y-3 rounded-[8px] bg-[#081C4F]/60 p-5"
                  >
                    <div className="grid h-9 w-9 place-items-center rounded bg-[#00d4ff24] text-[#00d4ff]">
                      <item.icon size={18} />
                    </div>
                    <h3 className="text-white text-2xl font-semibold leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 font-light text-base leading-[1.6]">
                      {item.description}
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
