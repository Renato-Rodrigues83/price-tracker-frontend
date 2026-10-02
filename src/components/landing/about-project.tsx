import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { CardTech } from "./card-tech";

export function AboutProject() {
  return (
    <section className="w-full space-y-2 border-b border-b-border bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-2 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold">Sobre o projeto</h2>
        <p className="text-lg text-muted-foreground line-clamp-4 w-full max-w-2xl">
          Este projeto é uma iniciativa de engenharia de software voltada para a
          coleta, processamento e comparação de preços em lojas de hardware. O
          objetivo é fornecer aos usuários uma ferramenta eficiente para
          encontrar as melhores ofertas e oportunidades no mercado.
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        <CardTech
          title="Scraping"
          description="Coleta de dados periódicamente de preços em lojas de hardware."
        />

        <ArrowBigRight className="h-10 w-10 rotate-90 text-primary md:rotate-0" />

        <CardTech
          title="Persistência"
          description="Armazenamento e gerenciamento de dados coletados."
        />

        <ArrowBigRight className="h-10 w-10 rotate-90 text-primary md:rotate-0" />

        <CardTech
          title="API"
          description="Interface para acesso aos dados de preços."
        />

        <ArrowBigRight className="h-10 w-10 rotate-90 text-primary md:rotate-0" />

        <CardTech
          title="Frontend"
          description="Interface para visualização das ofertas e pesquisa de preços."
        />
      </div>
    </section>
  );
}
