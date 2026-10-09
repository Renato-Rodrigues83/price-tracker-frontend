import Link from "next/link";

export function Hero() {
  return (
    <section className="border-b bg-background px-4 py-20 text-center md:py-32">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Compare preços.
          </h1>

          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Encontre oportunidades.
          </h2>
        </div>

        <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Um projeto de engenharia de software para coleta, processamento e
          comparação de preços em lojas de hardware.
        </p>

        <Link
          href="/home"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Começar
        </Link>
      </div>
    </section>
  );
}
