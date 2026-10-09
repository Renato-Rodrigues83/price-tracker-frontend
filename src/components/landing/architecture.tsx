import { ArrowBigDown, ArrowBigRight } from "lucide-react";
import { CardTech } from "./card-tech";

export function Architecture() {
  return (
    <section className="border-b bg-background px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Arquitetura</h2>

          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            O fluxo da aplicação conecta a coleta dos dados até a apresentação
            das ofertas para o usuário.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
          <CardTech
            title="Lojas de hardware"
            description="KaBuM, Pichau e TerabyteShop fornecem as informações que são coletadas pelo sistema."
          />

          <ArrowBigRight className="hidden h-10 w-10 shrink-0 text-primary lg:block" />
          <ArrowBigDown className="h-10 w-10 shrink-0 text-primary lg:hidden" />

          <CardTech
            title="Scraper"
            description="Os scrapers realizam as coletas periódicas, validam os dados e estruturam as ofertas."
          />

          <ArrowBigRight className="hidden h-10 w-10 shrink-0 text-primary lg:block" />
          <ArrowBigDown className="h-10 w-10 shrink-0 text-primary lg:hidden" />

          <CardTech
            title="PostgreSQL"
            description="Os dados coletados são persistidos e disponibilizados para consultas posteriores."
          />

          <ArrowBigRight className="hidden h-10 w-10 shrink-0 text-primary lg:block" />
          <ArrowBigDown className="h-10 w-10 shrink-0 text-primary lg:hidden" />

          <CardTech
            title="Go API"
            description="A API REST consulta o banco e disponibiliza os dados para o frontend."
          />

          <ArrowBigRight className="hidden h-10 w-10 shrink-0 text-primary lg:block" />
          <ArrowBigDown className="h-10 w-10 shrink-0 text-primary lg:hidden" />

          <CardTech
            title="Next.js"
            description="O frontend consome a API e apresenta ofertas, produtos e informações de preços."
          />
        </div>
      </div>
    </section>
  );
}
