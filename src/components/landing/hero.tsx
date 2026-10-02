import Link from "next/link";

export function Hero() {
  return (
    <section className=" w-full flex flex-col items-center justify-center gap-4 px-4 py-16 text-center md:py-32 border-b border-b-border bg-background">
      <div className="w-full flex flex-col items-center gap-2">
        <h2 className=" text-3xl font-bold">Compare preços.</h2>

        <h2 className=" text-3xl font-bold">Encontre oportunidades.</h2>
      </div>
      <div className="w-full max-w-2xl ">
        <p className="text-lg text-muted-foreground">
          Um projeto de engenharia de software para coleta, processamento e
          comparação de preços em lojas de hardware.
        </p>
      </div>
      <div className="w-full max-w-2xl">
        <Link
          href="/home"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          Começar
        </Link>
      </div>
    </section>
  );
}
