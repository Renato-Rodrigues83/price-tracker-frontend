import { CardTech } from "./card-tech";

export function TechStack() {
  return (
    <section className="border-b bg-background px-4 py-16 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Tecnologias utilizadas
          </h2>

          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            O projeto utiliza tecnologias modernas para coleta, processamento,
            persistência e apresentação dos dados.
          </p>
        </div>

        <div className="grid w-full max-w-6xl grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CardTech
            title="Frontend"
            description="Next.js 16 com TypeScript, Tailwind CSS e shadcn/ui para construção da interface."
          />

          <CardTech
            title="Backend"
            description="Golang utilizando a biblioteca HTTP da standard library e Chi para roteamento."
          />

          <CardTech
            title="Banco de dados"
            description="PostgreSQL para armazenamento e gerenciamento dos dados coletados."
          />

          <CardTech
            title="Scraping"
            description="Playwright, Cloudscraper, SeleniumBase e BeautifulSoup para coleta de dados."
          />
        </div>
      </div>
    </section>
  );
}
