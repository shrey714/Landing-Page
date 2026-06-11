import { LogoFooter } from "@/components/logo";
import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  ChevronsUpDown,
  Clock3Icon,
  HeadsetIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Link from "next/link";
import ThemeSwitch from "@/components/subs/ThemeSwitch";
import { Separator } from "@/components/ui/separator";

const footerColumns = [
  {
    title: "Product",
    links: [
      { title: "Patient Records", href: "#modules" },
      { title: "Appointments", href: "#workflow" },
      { title: "Prescriptions", href: "#modules" },
      { title: "Diagnostics", href: "#modules" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { title: "Solo Doctors", href: "#workflow" },
      { title: "Clinics", href: "#modules" },
      { title: "Hospitals", href: "#trust" },
      { title: "Care Teams", href: "#trust" },
    ],
  },
  {
    title: "Workflows",
    links: [
      { title: "Patient Journey", href: "#workflow" },
      { title: "Clinic Queue", href: "#modules" },
      { title: "Lab & Pharmacy", href: "#workflow" },
      { title: "Follow-ups", href: "#demo" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Book Demo", href: "#demo" },
      { title: "Implementation", href: "#demo" },
      { title: "Trust & Access", href: "#trust" },
      { title: "Contact", href: "#demo" },
    ],
  },
];

const proofItems = [
  {
    title: "Privacy-first workflows",
    description: "Built around responsible handling of clinic and patient data.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Guided setup",
    description: "Map your current reception, consultation, and follow-up flow.",
    icon: HeadsetIcon,
  },
  {
    title: "Fast daily use",
    description: "Designed for busy teams that need clarity during OPD hours.",
    icon: Clock3Icon,
  },
];

export default function Footer() {
  return (
    <footer className="w-full min-h-[calc(100vh-66px)] relative overflow-hidden p-4 sm:p-5 md:p-6 lg:p-10 box-border">
      <div className="p-6 sm:p-8 size-full min-h-[calc(100vh-114px)] bg-background/50 backdrop-blur-lg rounded-2xl shadow-md flex flex-col gap-8">
        <div className="grid flex-1 content-center gap-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr] lg:items-end">
            <section className="grid gap-6">
              <Link href="/" aria-label="go home" className="block size-fit">
                <LogoFooter />
              </Link>

              <div className="grid gap-4">
                <h2 className="max-w-xl text-3xl font-medium leading-tight text-foreground sm:text-4xl">
                  Digitize every clinic touchpoint with DardiBook.
                </h2>
                <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                  Practice management software for appointments, patient
                  records, prescriptions, diagnostics, pharmacy coordination,
                  and follow-ups.
                </p>
              </div>

              <Link
                href="#demo"
                className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Book a product walkthrough <ArrowRightIcon size={16} />
              </Link>
            </section>

            <div className="grid gap-6 sm:grid-cols-3">
              {proofItems.map((item) => (
                <section key={item.title} className="grid gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded bg-[#00d4ff24] text-[#00d4ff]">
                    <item.icon size={18} />
                  </div>
                  <h3 className="text-sm font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </section>
              ))}
            </div>
          </div>

          <Separator />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <section key={column.title} className="grid content-start gap-4">
                <h3 className="text-sm font-medium text-foreground">
                  {column.title}
                </h3>
                <ul className="grid gap-3 text-sm">
                  {column.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <Separator />

        <div className="flex flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} DardiBook, All rights reserved</span>

          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <ChevronsUpDown
                className="pointer-events-none absolute inset-y-0 right-2 my-auto opacity-75"
                size="0.75rem"
              />
              <select
                className={cn(
                  "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground shadow-xs flex h-9 w-full min-w-32 appearance-none rounded-md border bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                )}
                name="language"
              >
                <option value="1">English</option>
                <option value="2">हिन्दी</option>
                <option value="3">ગુજરાતી</option>
              </select>
            </div>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
}
