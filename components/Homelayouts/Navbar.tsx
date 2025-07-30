"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
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

const menuItems = [
  { name: "Features", href: "#link" },
  { name: "Solution", href: "#link" },
  { name: "Pricing", href: "#link" },
  { name: "About", href: "#link" },
];

export const Navbar = () => {
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
            "mx-auto mt-2 max-w-6xl px-6 transition-all rounded-full duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl shadow-md backdrop-blur-lg lg:pl-5 lg:pr-2.5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-2.5 lg:gap-0 lg:py-2.5">
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
                  <p className="text-[24px] font-medium text-pretty tracking-wide text-foreground leading-normal">
                    DardiBook
                  </p>
                </div>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
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
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  variant={"outline"}
                  size="sm"
                  className={cn(
                    isScrolled ? "lg:inline-flex" : "",
                    "rounded-full h-9"
                  )}
                >
                  <Link href="#">
                    <span>Get Started</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

import {
  CreditCardIcon,
  Loader,
  LucideIcon,
  SquareCheckIcon,
  SquareChevronUpIcon,
  SquarePowerIcon,
  ToggleRight,
} from "lucide-react";

const components: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Accordion",
    href: "/components/accordion",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    icon: SquareChevronUpIcon,
  },
  {
    title: "Button",
    href: "/components/button",
    description: "Displays a button or a component that looks like a button.",
    icon: SquarePowerIcon,
  },
  {
    title: "Card",
    href: "/components/card",
    description: "Displays a card with header, content, and footer.",
    icon: CreditCardIcon,
  },
  {
    title: "Checkbox",
    href: "/components/checkbox",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    icon: SquareCheckIcon,
  },
  {
    title: "Spinner",
    href: "/components/spinner",
    description: "Informs users about the status of ongoing processes.",
    icon: Loader,
  },
  {
    title: "Switch",
    href: "/components/switch",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    icon: ToggleRight,
  },
];

function RichNavigationMenu() {
  return (
    <NavigationMenu className="z-20">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent focus-visible:bg-transparent">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-4">
            <div className="grid grid-cols-3 gap-3 p-4 w-[900px] divide-x">
              <div className="col-span-2">
                <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                  Capabilities
                </h6>
                <ul className="mt-2.5 grid grid-cols-1 gap-3">
                  {components.map((component) => (
                    <li key={component.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                          href={component.href}
                        >
                          <div className="font-semibold tracking-tight leading-none flex items-center gap-2">
                            <component.icon className="h-5 w-5" />
                            {component.title}
                          </div>
                          <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {component.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pl-4">
                <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                  Product & Features
                </h6>
                <ul className="mt-2.5 grid gap-3">
                  {components.slice(0, 3).map((component) => (
                    <li key={component.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          className={cn(
                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                          href={component.href}
                        >
                          <div className="font-semibold tracking-tight leading-none flex items-center gap-2">
                            <component.icon className="h-5 w-5" />
                            {component.title}
                          </div>
                          <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {component.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent className="px-4 py-6">
            <div className="pl-4">
              <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                Solutions
              </h6>
              <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <li key={component.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        className={cn(
                          "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                        href={component.href}
                      >
                        <div className="font-semibold tracking-tight leading-none flex items-center gap-2">
                          <component.icon className="h-5 w-5" />
                          {component.title}
                        </div>
                        <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {component.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs" passHref>
              Developers
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuIndicator className="transition-[width,transform] duration-[250ms] ease-in-out" />
      </NavigationMenuList>
      <NavigationMenuViewport className="bg-popover/70 backdrop-blur-md" />
    </NavigationMenu>
  );
}
