"use client";

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
import {useTranslations, useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/routing';
import GoogleTranslate from '@/GoogleTranslate';

const footerColumns = [
  {
    title: "productTitle",
    links: [
      { title: "productPatientRecords", href: "#modules" },
      { title: "productAppointments", href: "#workflow" },
      { title: "productPrescriptions", href: "#modules" },
      { title: "productDiagnostics", href: "#modules" },
    ],
  },
  {
    title: "solutionsTitle",
    links: [
      { title: "solutionsSoloDoctors", href: "#workflow" },
      { title: "solutionsClinics", href: "#modules" },
      { title: "solutionsHospitals", href: "#trust" },
      { title: "solutionsCareTeams", href: "#trust" },
    ],
  },
  {
    title: "workflowsTitle",
    links: [
      { title: "workflowsPatientJourney", href: "#workflow" },
      { title: "workflowsClinicQueue", href: "#modules" },
      { title: "workflowsLabPharmacy", href: "#workflow" },
      { title: "workflowsFollowups", href: "#demo" },
    ],
  },
  {
    title: "companyTitle",
    links: [
      { title: "companyBookDemo", href: "#demo" },
      { title: "companyImplementation", href: "#demo" },
      { title: "companyTrustAccess", href: "#trust" },
      { title: "companyContact", href: "#demo" },
    ],
  },
  {
    title: "legalTitle",
    links: [
      { title: "legalAbout", href: "/docs/about-us" },
      { title: "legalPricing", href: "/docs/pricing" },
      { title: "legalPrivacyPolicy", href: "/docs/privacy-policy" },
      { title: "legalTermsConditions", href: "/docs/terms-conditions" },
    ],
  },
];

const proofItems = [
];

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.replace(pathname, {locale: newLocale});
  };

  // Define proofItems here to use the translation function 't'
  const translatedProofItems = [
    {
      title: t("proof1Title"),
      description: t("proof1Desc"),
      icon: ShieldCheckIcon,
    },
    {
      title: t("proof2Title"),
      description: t("proof2Desc"),
      icon: HeadsetIcon,
    },
    {
      title: t("proof3Title"),
      description: t("proof3Desc"),
      icon: Clock3Icon,
    },
  ];

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
                <h2 className="max-w-xl text-4xl md:text-5xl font-extrabold leading-tight text-foreground sm:text-5xl">
                  {t('title')}
                </h2>
                <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                  {t('description')}
                </p>
              </div>

              <Link
                href="#demo"
                className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {t('bookWalkthrough')} <ArrowRightIcon size={16} />
              </Link>
            </section>

            <div className="grid gap-6 sm:grid-cols-3">
              {translatedProofItems.map((item) => (
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
                  {t(column.title as any)}
                </h3>
                <ul className="grid gap-3 text-sm">
                  {column.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href} 
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {t(link.title)}
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
          <span>{t('copyright', { year: new Date().getFullYear() })}</span>

          <div className="flex flex-wrap items-center gap-4">

<         GoogleTranslate />

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
                value={locale}
                onChange={handleLocaleChange}
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="gu">ગુજરાતી</option>
              </select>
            </div>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
}
