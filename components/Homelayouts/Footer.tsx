"use client";

import { LogoFooter } from "@/components/logo";
import {
  ArrowRightIcon,
  Clock3Icon,
  HeadsetIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Link from "next/link";
import ThemeSwitch from "@/components/subs/ThemeSwitch";
import { Separator } from "@/components/ui/separator";
import GoogleTranslate from '@/lib/GoogleTranslate';
import content from "@/content/content";

const footerColumns = [
  {
    title: content.Footer.productTitle,
    links: [
      { title: content.Footer.productPatientRecords, href: "#modules" },
      { title: content.Footer.productAppointments, href: "#workflow" },
      { title: content.Footer.productPrescriptions, href: "#modules" },
      { title: content.Footer.productDiagnostics, href: "#modules" },
    ],
  },
  {
    title: content.Footer.solutionsTitle,
    links: [
      { title: content.Footer.solutionsSoloDoctors, href: "#workflow" },
      { title: content.Footer.solutionsClinics, href: "#modules" },
      { title: content.Footer.solutionsHospitals, href: "#trust" },
      { title: content.Footer.solutionsCareTeams, href: "#trust" },
    ],
  },
  {
    title: content.Footer.workflowsTitle,
    links: [
      { title: content.Footer.workflowsPatientJourney, href: "#workflow" },
      { title: content.Footer.workflowsClinicQueue, href: "#modules" },
      { title: content.Footer.workflowsLabPharmacy, href: "#workflow" },
      { title: content.Footer.workflowsFollowups, href: "#demo" },
    ],
  },
  {
    title: content.Footer.companyTitle,
    links: [
      { title: content.Footer.companyBookDemo, href: "#demo" },
      { title: content.Footer.companyImplementation, href: "#demo" },
      { title: content.Footer.companyTrustAccess, href: "#trust" },
      { title: content.Footer.companyContact, href: "#demo" },
    ],
  },
  {
    title: content.Footer.legalTitle,
    links: [
      { title: content.Footer.legalAbout, href: "/docs/about-us" },
      { title: content.Footer.legalPricing, href: "/docs/pricing" },
      { title: content.Footer.legalPrivacyPolicy, href: "/docs/privacy-policy" },
      { title: content.Footer.legalTermsConditions, href: "/docs/terms-conditions" },
    ],
  },
];

const proofItems = [
];

export default function Footer() {
  const translatedProofItems = [
    {
      title: content.Footer.proof1Title,
      description: content.Footer.proof1Desc,
      icon: ShieldCheckIcon,
    },
    {
      title: content.Footer.proof2Title,
      description: content.Footer.proof2Desc,
      icon: HeadsetIcon,
    },
    {
      title: content.Footer.proof3Title,
      description: content.Footer.proof3Desc,
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
                  {content.Footer.title}
                </h2>
                <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                  {content.Footer.description}
                </p>
              </div>

              <Link
                href="#demo"
                className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {content.Footer.bookWalkthrough} <ArrowRightIcon size={16} />
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

            <div className="lg:col-start-4">
              <GoogleTranslate />
            </div>

          </div>
        </div>

        <Separator />

        <div className="flex flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground">
          <span>{content.Footer.copyright.replace("{year}", new Date().getFullYear().toString())}</span>

          <div className="flex flex-wrap items-center gap-4">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
}
