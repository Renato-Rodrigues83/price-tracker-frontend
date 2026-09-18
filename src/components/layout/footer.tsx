import { cacheLife } from "next/cache";

export async function Footer() {
  "use cache";

  cacheLife({
    stale: 86400,
    revalidate: 86400,
    expire: 604800,
  });

  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-center px-4 md:px-6">
        <p className="text-sm text-muted-foreground">© {year} Price Tracker</p>
      </div>
    </footer>
  );
}
