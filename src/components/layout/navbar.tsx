import Link from "next/link";

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
  return (
    <nav aria-label="Navegação principal">
      <ul className="flex items-center gap-6">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
