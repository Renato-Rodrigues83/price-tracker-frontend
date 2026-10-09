import Link from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import { MobileNav } from "./mobile-nav";
import { Navbar } from "./navbar";

export function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/home" className="text-xl font-bold tracking-tight">
          Price Tracker
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Navbar />
          </div>

          <ThemeSwitch />

          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
