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
import content from "@/content/content";
import { APP_LINKS } from "@/content/links";

export const Navbar = () => {

  const menuItems = [
    { name: content.Navbar.menuWorkflow, href: APP_LINKS.WORKFLOW },
    { name: content.Navbar.menuModules, href: APP_LINKS.MODULES },
    { name: "Resources", href: APP_LINKS.BLOG },
    { name: "Pricing", href: APP_LINKS.PRICING },
    { name: content.Navbar.menuTrust, href: APP_LINKS.TRUST },
    { name: content.Navbar.menuDemo, href: APP_LINKS.DEMO },
  ];


  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuState(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuState(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = menuState ? "hidden" : "";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [menuState]);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-40 w-full lg:px-2"
      >
        <div
          ref={menuRef}
          className={cn(
            "mx-auto lg:mt-2 lg:max-w-6xl px-6 transition-all lg:rounded-full duration-300 lg:px-10 bg-background/65 dark:bg-transparent",
            isScrolled &&
            "bg-background/65! lg:max-w-4xl shadow-md backdrop-blur-lg lg:pl-5 lg:pr-2.5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-2.5 lg:gap-0">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href={APP_LINKS.HOME}
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
                aria-expanded={menuState}
                aria-controls="mobile-navigation-menu"
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>



            <div id="mobile-navigation-menu" className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
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
                <Button asChild size="sm" className="rounded-full h-9 border-2 border-[#635bff] bg-[#635bff] dark:bg-[#635bff96] text-white hover:bg-[#635bff96] dark:hover:bg-[#635bff] shadow-none" variant={"default"}>
                    <Link href={APP_LINKS.DEMO} aria-label="Request a demo of DardiBook">
                    <span>{content.Navbar.requestDemo}</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
          <RichNavigationMenu />
        </div>
      </nav>
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
  const modules: {
    title: string;
    href: string;
    description: string;
    icon: LucideIcon;
  }[] = [
      {
        title: content.Navbar.modPatientRecordsTitle,
        href: APP_LINKS.MODULES,
        description: content.Navbar.modPatientRecordsDesc,
        icon: ClipboardPlusIcon,
      },
      {
        title: content.Navbar.modAppointmentsTitle,
        href: APP_LINKS.WORKFLOW,
        description: content.Navbar.modAppointmentsDesc,
        icon: CalendarDaysIcon,
      },
      {
        title: content.Navbar.modPrescriptionsTitle,
        href: APP_LINKS.MODULES,
        description: content.Navbar.modPrescriptionsDesc,
        icon: PillIcon,
      },
      {
        title: content.Navbar.modDiagnosticsTitle,
        href: APP_LINKS.MODULES,
        description: content.Navbar.modDiagnosticsDesc,
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
        title: content.Navbar.solSoloDoctorsTitle,
        href: APP_LINKS.WORKFLOW,
        description: content.Navbar.solSoloDoctorsDesc,
        icon: StethoscopeIcon,
      },
      {
        title: content.Navbar.solClinicsTitle,
        href: APP_LINKS.MODULES,
        description: content.Navbar.solClinicsDesc,
        icon: Building2Icon,
      },
      {
        title: content.Navbar.solHospitalsTitle,
        href: APP_LINKS.TRUST,
        description: content.Navbar.solHospitalsDesc,
        icon: HospitalIcon,
      },
      {
        title: content.Navbar.solCareTeamsTitle,
        href: APP_LINKS.TRUST,
        description: content.Navbar.solCareTeamsDesc,
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
            <div className="grid grid-cols-[1fr_280px] gap-4 p-4 w-190">
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

              <div className="rounded-xl bg-[#081C4F] p-5 text-white">
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
              <ul className="mt-2.5 grid w-140 gap-3 md:grid-cols-2">
                {solutions.map((item) => (
                  <MenuCard key={item.title} item={item} />
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={APP_LINKS.WORKFLOW}>Workflow</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={APP_LINKS.TRUST}>
              <ShieldCheckIcon className="mr-1 h-4 w-4" />
              Trust
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuIndicator className="transition-[width,transform] duration-250 ease-in-out" />
      </NavigationMenuList>
      <NavigationMenuViewport className="bg-popover/80 backdrop-blur-md" />
    </NavigationMenu>
  );
}
