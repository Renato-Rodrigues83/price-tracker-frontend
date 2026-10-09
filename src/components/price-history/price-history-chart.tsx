"use client";

import type { PriceHistoryDTO } from "@/interfaces/price-history";
import { formatDate, formatFullDate, formatPrice } from "@/lib/formatters";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface PriceHistoryChartProps {
  data: PriceHistoryDTO[];
}

interface ChartDTO {
  date: string;
  fullDate: string;
  price: number;
  available: boolean;
}

export function PriceHistoryChart({ data }: PriceHistoryChartProps) {
  if (data.length === 0) {
    return (
      <div className="flex min-h-80 items-center justify-center rounded-lg border">
        <p className="text-sm text-muted-foreground">
          Não há histórico de preços para esta oferta.
        </p>
      </div>
    );
  }

  const chartData: ChartDTO[] = data.map((point) => ({
    date: formatDate(point.collected_at),
    fullDate: formatFullDate(point.collected_at),
    price: point.price,
    available: point.available,
  }));

  return (
    <div className=" w-full rounded-lg border bg-card p-4">
      <div className=" mb-6">
        <h2 className=" text-lg font-semibold">Histórico de preços</h2>
        <p className=" text-sm text-muted-foreground">
          Evolução do preço ao longo das coletas.
        </p>
      </div>

      <div className=" h-100 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{
              top: 10,
              right: 20,
              left: 10,
              bottom: 10,
            }}>
            <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />

            <XAxis
              dataKey="date"
              tick={{
                fontSize: 12,
                fill: "var(--muted-foreground)",
              }}
              tickMargin={8}
            />

            <YAxis
              tick={{
                fontSize: 12,
                fill: "var(--muted-foreground)",
              }}
              tickFormatter={(value) => formatPrice(value)}
              width={90}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "0.5rem",
                color: "var(--card-foreground)",
              }}
              labelStyle={{
                color: "var(--card-foreground)",
              }}
              itemStyle={{
                color: "var(--card-foreground)",
              }}
              formatter={(value) => [formatPrice(Number(value)), "Preço"]}
              labelFormatter={(_, payload) => {
                const point = payload?.[0]?.payload as ChartDTO | undefined;

                return point?.fullDate ?? "";
              }}
            />

            <Line
              type="monotone"
              dataKey="price"
              stroke="var(--primary)"
              strokeWidth={2}
              dot={{
                r: 4,
                fill: "var(--primary)",
              }}
              activeDot={{
                r: 6,
                fill: "var(--primary)",
              }}
            />
            <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />

            <XAxis
              dataKey="date"
              tick={{
                fontSize: 12,
                fill: "var(--muted-foreground)",
              }}
              tickMargin={8}
            />

            <YAxis
              tick={{
                fontSize: 12,
                fill: "var(--muted-foreground)",
              }}
              tickFormatter={(value) => formatPrice(value)}
              width={90}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "0.5rem",
                color: "var(--card-foreground)",
              }}
              labelStyle={{
                color: "var(--card-foreground)",
              }}
              itemStyle={{
                color: "var(--card-foreground)",
              }}
              formatter={(value) => [formatPrice(Number(value)), "Preço"]}
              labelFormatter={(_, payload) => {
                const point = payload?.[0]?.payload as ChartDTO | undefined;

                return point?.fullDate ?? "";
              }}
            />

            <Line
              type="monotone"
              dataKey="price"
              stroke="var(--primary)"
              strokeWidth={2}
              dot={{
                r: 4,
                fill: "var(--primary)",
              }}
              activeDot={{
                r: 6,
                fill: "var(--primary)",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
