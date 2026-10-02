import { CardTech } from "./card-tech";

export function Features() {
  return (
    <section className=" w-full space-y-4 border-b border-b-border bg-background p-8 flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Tecnologias utilizadas</h1>
      <p className="text-center text-lg text-muted-foreground line-clamp-4 w-full max-w-2xl">
        Este projeto utiliza uma variedade de tecnologias modernas para garantir
        eficiência, escalabilidade e uma experiência de usuário de alta
        qualidade.
      </p>
      <div className=" flex flex-col items-center justify-center gap-4 md:flex-row">
        <CardTech
          title="Frontend"
          description="Utilizando Next 16 com TypeScript como framework e Tailwind CSS + Shadcn UI para estilização e componentização."
        />
        <CardTech
          title="Backend"
          description="Golang utilizando a biblioteca HTTP da stdlib de Go e Chi para roteamento."
        />
        <CardTech
          title="Banco de dados"
          description="PostgreSQL como banco de dados relacional para armazenamento e gerenciamento de dados."
        />
        <CardTech
          title="Scraping"
          description="Utilizando Playwright + Cloudscraper + SeleniumBase + BeautifulSoup para coleta de dados de preços em lojas de hardware."
        />
      </div>
    </section>
  );
}
