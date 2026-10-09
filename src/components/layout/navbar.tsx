"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Navegação principal">
      <ul className="flex items-center gap-6">
        {navigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive
                    ? "underline decoration-2 underline-offset-4 text-muted-foreground"
                    : ""
                }`}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
