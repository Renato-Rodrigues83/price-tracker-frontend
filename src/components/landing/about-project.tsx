import { ArrowBigRight } from "lucide-react";
import { CardTech } from "./card-tech";

export function AboutProject() {
  return (
    <section className="border-b bg-background px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Sobre o projeto</h2>

          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Este projeto é uma iniciativa de engenharia de software voltada para
            a coleta, processamento e comparação de preços em lojas de hardware.
            O objetivo é fornecer aos usuários uma ferramenta eficiente para
            encontrar melhores ofertas e oportunidades no mercado.
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          <CardTech
            title="Scraping"
            description="Coleta periódica de dados de preços em lojas de hardware."
          />

          <ArrowBigRight className="h-10 w-10 shrink-0 rotate-90 text-primary md:rotate-0" />

          <CardTech
            title="Persistência"
            description="Armazenamento e gerenciamento dos dados coletados."
          />

          <ArrowBigRight className="h-10 w-10 shrink-0 rotate-90 text-primary md:rotate-0" />

          <CardTech
            title="API"
            description="Interface para acesso aos dados de preços e ofertas."
          />

          <ArrowBigRight className="h-10 w-10 shrink-0 rotate-90 text-primary md:rotate-0" />

          <CardTech
            title="Frontend"
            description="Interface para visualização das ofertas e pesquisa de preços."
          />
        </div>
      </div>
    </section>
  );
}
