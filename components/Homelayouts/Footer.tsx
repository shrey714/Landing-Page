import { LogoFooter } from "@/components/logo";
import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import Link from "next/link";
import ThemeSwitch from "@/components/subs/ThemeSwitch";
import { Separator } from "@/components/ui/separator";

const links = [
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Solution",
    href: "#",
  },
  {
    title: "Customers",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="w-full h-[calc(100vh-66px)] relative overflow-hidden p-4 sm:p-5 md:p-6 lg:p-10 box-border">
      <div className="p-6 size-full bg-background/50 backdrop-blur-lg rounded-2xl shadow-md flex flex-col gap-4">
        <div className="flex flex-1 flex-col justify-center">
          <Link
            href="/"
            aria-label="go home"
            className="mx-auto block size-fit"
          >
            <LogoFooter />
          </Link>

          <div className="my-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary block duration-150"
              >
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <span className="text-muted-foreground block text-center text-sm">
          © {new Date().getFullYear()} Tailark, All rights reserved
        </span>

        <Separator />

        <div className="flex flex-wrap items-center justify-between gap-6">
          <form action="">
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
                <option value="2">Espanol</option>
                <option value="3">Français</option>
                <option value="4">Swahili</option>
                <option value="5">Lingala</option>
              </select>
            </div>
          </form>
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  );
}
