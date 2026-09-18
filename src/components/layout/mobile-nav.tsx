"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "Produtos",
    href: "/products",
  },
  {
    label: "Histórico de preços",
    href: "/price-history",
  },
];

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Abrir menu">
            <Menu />
          </Button>
        }></SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav className="mt-6" aria-label="Navegação mobile">
          <ul className="flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block text-sm font-medium">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
