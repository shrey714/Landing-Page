import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { Navbar } from "@/components/Homelayouts/Navbar";
import Footer from "@/components/Homelayouts/Footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 mt-[80px] flex flex-col items-center justify-center px-4 py-20 w-full text-center">
        <div className="max-w-md w-full mb-8 relative aspect-video">
          <Image
            src="/404.svg"
            alt="404 Not Found"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-lg">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>

        <Button variant={"outline"} asChild size="lg" className="rounded-full">
          <Link href="/">
            Back to Home
          </Link>
        </Button>
      </main>

      <Footer />
    </div>
  );
}