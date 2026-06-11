"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Building2Icon,
  CalendarDaysIcon,
  ClipboardPlusIcon,
  FlaskConicalIcon,
  HeartPulseIcon,
  HospitalIcon,
  LucideIcon,
  Menu,
  PillIcon,
  ShieldCheckIcon,
  StethoscopeIcon,
  UsersRoundIcon,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";







export const Navbar = () => {
  const t = useTranslations("Navbar");

  const menuItems = [
    { name: t("menuWorkflow"), href: "#workflow" },
    { name: t("menuModules"), href: "#modules" },
    { name: t("menuTrust"), href: "#trust" },
    { name: t("menuDemo"), href: "#demo" },
  ];

  
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all rounded-full duration-300 lg:px-10",
            isScrolled &&
              "bg-background/65 max-w-4xl shadow-md backdrop-blur-lg lg:pl-5 lg:pr-2.5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-2.5 lg:gap-0">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <div className="flex flex-row gap-1 items-center">
                  <Image
                    alt="Logo"
                    src="/Logo.svg"
                    width={36}
                    height={36}
                    className="aspect-square size-9"
                    priority
                  />
                  <p className="text-xl font-medium text-pretty tracking-wide text-foreground leading-normal">
                    DardiBook
                  </p>
                </div>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <RichNavigationMenu />
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        onClick={() => setMenuState(false)}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild size="sm" className="rounded-full h-9 bg-[#635bff] text-white hover:opacity-95">
                  <Link href="#demo" aria-label="Request a demo of DardiBook">
                    <span>{t("requestDemo")}</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isScrolled && (
        <div className="fixed z-50 right-6 bottom-6 lg:right-10 lg:bottom-8">
          <Link href="#demo" aria-label="Request a demo of DardiBook" className="inline-flex items-center rounded-full bg-[#635bff] text-white px-4 py-2 shadow-lg hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#cfc8ff]">
            {t("requestDemo")}
          </Link>
        </div>
      )}
    </header>
  );
};

type MenuItemType = {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
};
function MenuCard({ item }: { item: MenuItemType }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          href={item.href}
        >
          <div className="font-semibold tracking-tight leading-none flex items-center gap-2">
            <item.icon className="h-5 w-5 text-[#00d4ff]" />
            {item.title}
          </div>
          <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function RichNavigationMenu() {
  const t = useTranslations("Navbar");

  const modules: {
    title: string;
    href: string;
    description: string;
    icon: LucideIcon;
  }[] = [
    {
      title: t("modPatientRecordsTitle"),
      href: "#modules",
      description: t("modPatientRecordsDesc"),
      icon: ClipboardPlusIcon,
    },
    {
      title: t("modAppointmentsTitle"),
      href: "#workflow",
      description: t("modAppointmentsDesc"),
      icon: CalendarDaysIcon,
    },
    {
      title: t("modPrescriptionsTitle"),
      href: "#modules",
      description: t("modPrescriptionsDesc"),
      icon: PillIcon,
    },
    {
      title: t("modDiagnosticsTitle"),
      href: "#modules",
      description: t("modDiagnosticsDesc"),
      icon: FlaskConicalIcon,
    },
  ];

  const solutions: {
    title: string;
    href: string;
    description: string;
    icon: LucideIcon;
  }[] = [
    {
      title: t("solSoloDoctorsTitle"),
      href: "#workflow",
      description: t("solSoloDoctorsDesc"),
      icon: StethoscopeIcon,
    },
    {
      title: t("solClinicsTitle"),
      href: "#modules",
      description: t("solClinicsDesc"),
      icon: Building2Icon,
    },
    {
      title: t("solHospitalsTitle"),
      href: "#trust",
      description: t("solHospitalsDesc"),
      icon: HospitalIcon,
    },
    {
      title: t("solCareTeamsTitle"),
      href: "#trust",
      description: t("solCareTeamsDesc"),
      icon: UsersRoundIcon,
    },
  ];

  return (
    <NavigationMenu className="z-20">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent focus-visible:bg-transparent">
            Modules
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-4">
            <div className="grid grid-cols-[1fr_280px] gap-4 p-4 w-[760px]">
              <div>
                <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                  Core workflows
                </h6>
                <ul className="mt-2.5 grid grid-cols-2 gap-3">
                  {modules.map((item) => (
                    <MenuCard key={item.title} item={item} />
                  ))}
                </ul>
              </div>

              <div className="rounded-[8px] bg-[#081C4F] p-5 text-white">
                <HeartPulseIcon className="h-8 w-8 text-[#00d4ff]" />
                <h3 className="mt-5 text-2xl font-semibold leading-snug">
                  One workspace for care
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  Keep reception, consultation, prescription, labs, and
                  follow-up connected through the patient record.
                </p>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent className="px-4 py-6">
            <div className="pl-4">
              <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                Built for healthcare teams
              </h6>
              <ul className="mt-2.5 grid w-[560px] gap-3 md:grid-cols-2">
                {solutions.map((item) => (
                  <MenuCard key={item.title} item={item} />
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#workflow">Workflow</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#trust">
              <ShieldCheckIcon className="mr-1 h-4 w-4" />
              Trust
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuIndicator className="transition-[width,transform] duration-[250ms] ease-in-out" />
      </NavigationMenuList>
      <NavigationMenuViewport className="bg-popover/80 backdrop-blur-md" />
    </NavigationMenu>
  );
}
