"use client";

import { Button } from "@/components/ui/button";

interface ProductsErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function Error({ error, reset }: ProductsErrorProps) {
  console.error(error);

  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-7xl items-center justify-center px-4 py-8">
      <div className="flex max-w-md flex-col items-center text-center">
        <h1 className="text-2xl font-bold">
          Não foi possível carregar os produtos
        </h1>

        <p className="mt-3 text-muted-foreground">
          Ocorreu um erro ao buscar as ofertas. Tente novamente.
        </p>

        <Button className="mt-6" onClick={() => reset()}>
          Tentar novamente
        </Button>
      </div>
    </main>
  );
}
