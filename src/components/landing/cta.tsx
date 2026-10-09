import Link from "next/link";

export function CallToAction() {
  return (
    <section className="border-b bg-background px-4 py-16 md:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tight">
            Pronto para começar?
          </h2>

          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Explore o Price Tracker e descubra as melhores ofertas em lojas de
            hardware.
          </p>
        </div>

        <Link
          href="/home"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Começar
        </Link>
      </div>
    </section>
  );
}
