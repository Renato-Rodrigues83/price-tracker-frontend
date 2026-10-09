import { FolderGit2, ExternalLink } from "lucide-react";
import { cacheLife } from "next/cache";
import Link from "next/link";

export async function Footer() {
  "use cache";

  cacheLife({
    stale: 86400,
    revalidate: 86400,
    expire: 604800,
  });

  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Price Tracker</h2>

          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            Projeto de portfólio desenvolvido para explorar engenharia de
            software, web scraping, APIs, persistência de dados e aplicações web
            modernas.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium">Desenvolvido por</span>

          <Link
            href="https://github.com/Renato-Rodrigues83"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <FolderGit2 className="h-4 w-4" />
            Renato Rodrigues / GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Price Tracker</span>

          <span>Projeto de portfólio</span>
        </div>
      </div>
    </footer>
  );
}
