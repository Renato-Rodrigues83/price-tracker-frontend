import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface CardTechProps {
  title: string;
  description: string;
}

export function CardTech({ title, description }: CardTechProps) {
  return (
    <Card className="w-50 h-50 border-2 border-border bg-background">
      <CardHeader className="border-b-2 h-10 border-b-border">
        <CardTitle className="text-lg font-semibold text-center flxex items-center justify-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-start h-0">
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
