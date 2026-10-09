import { ArrowBigRight } from "lucide-react";
import { CardTech } from "./card-tech";

export function HowWorks() {
  return (
    <section className="border-b bg-background px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Como funciona</h2>

          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            O projeto é dividido em serviços independentes, cada um responsável
            por uma parte do fluxo da aplicação.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <CardTech
            title="price-tracker-scraper"
            description="Responsável pela coleta periódica de dados de preços nas lojas de hardware e pela persistência das informações no banco de dados."
          />

          <ArrowBigRight className="h-10 w-10 shrink-0 rotate-90 text-primary md:rotate-0" />

          <CardTech
            title="price-tracker-api"
            description="Responsável por disponibilizar os dados coletados pelo scraper através de uma API REST."
          />

          <ArrowBigRight className="h-10 w-10 shrink-0 rotate-90 text-primary md:rotate-0" />

          <CardTech
            title="price-tracker-frontend"
            description="Interface web responsável por apresentar os preços, ofertas e histórico de dados aos usuários."
          />
        </div>
      </div>
    </section>
  );
}
