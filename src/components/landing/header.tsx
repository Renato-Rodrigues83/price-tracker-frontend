import Link from "next/link";

export function Header() {
  return (
    <header className=" w-full space-y-4 border-b border-b-border bg-background p-4">
      <div className=" flex items-center justify-between mx-auto max-w-7xl">
        <Link href="/" className=" p-4">
          Price Tracker
        </Link>
        <Link href="/home" className=" p-4">
          Ir para Home
        </Link>
      </div>
    </header>
  );
}
