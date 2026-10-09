import Link from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";

export function Header() {
  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <h1 className="text-lg font-bold transition-colors hover:text-primary">
          Price Tracker
        </h1>

        <div className="flex items-center gap-6">
          <ThemeSwitch />

          <Link
            href="/home"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Ir para Home
          </Link>
        </div>
      </div>
    </header>
  );
}
