import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface CardTechProps {
  title: string;
  description: string;
}

export function CardTech({ title, description }: CardTechProps) {
  return (
    <Card className="flex w-full max-w-60 min-h-60 flex-col border-2">
      <CardHeader className="border-b px-4 py-3">
        <CardTitle className="text-center text-lg font-semibold">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 items-start p-4">
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
