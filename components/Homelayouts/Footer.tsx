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
import { Button } from "../ui/button";
import TypingAnimation from "../ui/typingText";
import { APP_LINKS } from "@/content/links";

const footerColumns = [
  {
    title: content.Footer.productTitle,
    links: [
      { title: content.Footer.productPatientRecords, href: APP_LINKS.MODULES },
      { title: content.Footer.productAppointments, href: APP_LINKS.WORKFLOW },
      { title: content.Footer.productPrescriptions, href: APP_LINKS.MODULES },
      { title: content.Footer.productDiagnostics, href: APP_LINKS.MODULES },
    ],
  },
  {
    title: content.Footer.solutionsTitle,
    links: [
      { title: "Resources", href: APP_LINKS.BLOG },
      { title: "Pricing", href: APP_LINKS.PRICING },
      { title: "Security", href: APP_LINKS.SECURITY },
      { title: content.Footer.solutionsSoloDoctors, href: APP_LINKS.SOLUTIONS.SOLO_DOCTORS },
      { title: content.Footer.solutionsClinics, href: APP_LINKS.SOLUTIONS.CLINICS },
      { title: content.Footer.solutionsHospitals, href: APP_LINKS.SOLUTIONS.HOSPITALS },
      { title: content.Footer.solutionsCareTeams, href: APP_LINKS.SOLUTIONS.CLINICS },
    ],
  },
  {
    title: content.Footer.workflowsTitle,
    links: [
      { title: content.Footer.workflowsPatientJourney, href: APP_LINKS.WORKFLOW },
      { title: content.Footer.workflowsClinicQueue, href: APP_LINKS.MODULES },
      { title: content.Footer.workflowsLabPharmacy, href: APP_LINKS.WORKFLOW },
      { title: content.Footer.workflowsFollowups, href: APP_LINKS.DEMO },
    ],
  },
  {
    title: content.Footer.companyTitle,
    links: [
      { title: content.Footer.companyBookDemo, href: APP_LINKS.DEMO },
      { title: content.Footer.companyImplementation, href: APP_LINKS.DEMO },
      { title: content.Footer.companyTrustAccess, href: APP_LINKS.TRUST },
      { title: content.Footer.companyContact, href: APP_LINKS.DOCS.CONTACT_US },
    ],
  },
  {
    title: content.Footer.legalTitle,
    links: [
      { title: content.Footer.legalAbout, href: APP_LINKS.DOCS.ABOUT_US },
      { title: content.Footer.legalPricing, href: APP_LINKS.PRICING },
      { title: content.Footer.legalPrivacyPolicy, href: APP_LINKS.DOCS.PRIVACY_POLICY },
      { title: content.Footer.legalTermsConditions, href: APP_LINKS.DOCS.TERMS_CONDITIONS },
    ],
  },
  {
    title: "",
    links: [
      { title: content.Footer.legalCancellationPolicy, href: APP_LINKS.DOCS.CANCELLATION_POLICY }
    ],
  },
];

const proofItems = [
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

export default function Footer() {
  const translatedProofItems = proofItems;

  return (
    <footer className="w-full min-h-[calc(100vh-66px)] relative overflow-hidden p-4 sm:p-5 md:p-6 lg:p-10 box-border">
      <div className="p-6 sm:p-8 size-full min-h-[calc(100vh-114px)] bg-background/50 backdrop-blur-lg rounded-2xl shadow-md flex flex-col gap-8">
        <div className="grid flex-1 content-center gap-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr] lg:items-end">
            <section className="grid gap-6">
              <Link href={APP_LINKS.HOME} aria-label="go home" className="block size-fit">
                <LogoFooter />
              </Link>

              <div className="grid gap-4">
                <h2 className="max-w-xl text-4xl md:text-5xl font-extrabold leading-tight sm:text-5xl">
                  {content.Footer.title}
                </h2>
                <TypingAnimation className="max-w-xl text-sm leading-6 text-accent-foreground">
                  {content.Footer.description}
                </TypingAnimation>
              </div>

              <Button asChild variant="outline" size="lg" className="rounded-full w-min">
                <Link
                  href={APP_LINKS.DOCS.CONTACT_US}
                >
                  {content.Footer.bookWalkthrough} <ArrowRightIcon size={16} />
                </Link>
              </Button>

            </section>

            <div className="grid gap-6 sm:grid-cols-3">
              {translatedProofItems.map((item) => (
                <section key={item.title} className="grid gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded bg-[#00d4ff24] text-[#00d4ff]">
                    <item.icon size={18} />
                  </div>
                  <h3 className="text-sm font-medium">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-accent-foreground">
                    {item.description}
                  </p>
                </section>
              ))}
            </div>
          </div>

          <Separator className="bg-muted-foreground" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column, index) => (
              <section key={index} className="grid content-start gap-4">
                <h3 className="text-sm font-medium underline underline-offset-2">
                  {column.title}
                </h3>
                <ul className="grid gap-3 text-sm">
                  {column.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-accent-foreground transition-colors hover:text-primary"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <div className="lg:col-start-4 flex items-end">
              <GoogleTranslate />
            </div>

          </div>
        </div>

        <Separator className="bg-muted-foreground" />

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
