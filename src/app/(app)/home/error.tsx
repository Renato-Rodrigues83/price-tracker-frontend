"use client";

import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center gap-4 text-center">
      <div>
        <h2 className="text-xl font-semibold">
          Não foi possível carregar os destaques
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Ocorreu um erro ao carregar as ofertas das lojas.
        </p>
      </div>

      <Button onClick={reset}>Tentar novamente</Button>
    </div>
  );
}
