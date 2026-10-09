"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { Category } from "@/interfaces/category";
import type { Store } from "@/interfaces/store";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
interface ProductsFiltersProps {
  stores: Store[];
  categories: Category[];
}

export function ProductFilters({ stores, categories }: ProductsFiltersProps) {
  const router = useRouter();

  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  const [minPrice, setMinPrice] = useState(searchParams.get("min_price") ?? "");

  const [maxPrice, setMaxPrice] = useState(searchParams.get("max_price") ?? "");

  const updateParams = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    params.delete("page");

    const queryString = params.toString();

    router.push(queryString ? `/products?${queryString}` : "/products");
  };

  const handleSearch = () => {
    updateParams({
      search: search.trim() || null,
    });
  };

  const handleStoreChange = (value: string | null) => {
    updateParams({
      store: value === "all" || value === null ? null : value,
    });
  };

  const handleCategoryChange = (value: string | null) => {
    updateParams({
      category: value === "all" || value === null ? null : value,
    });
  };

  const handleAvailableChange = (checked: boolean) => {
    updateParams({
      available: checked ? "true" : null,
    });
  };

  const handlePriceFilter = () => {
    updateParams({
      min_price: minPrice || null,
      max_price: maxPrice || null,
    });
  };

  const clearFilters = () => {
    setSearch("");
    setMinPrice("");
    setMaxPrice("");

    router.push("/products");
  };

  return (
    <div className=" space-y-6 rounded-lg border p-4 mb-4">
      <div className=" space-y-2">
        <label htmlFor="search" className=" text-sm font-medium">
          Buscar
        </label>

        <div className=" flex gap-2">
          <Input
            id="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Ex.: Ryzen 5"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <Button onClick={handleSearch}>Buscar</Button>
        </div>
      </div>

      <div className=" space-y-2">
        <label className=" text-sm font-medium">Loja</label>

        <Select
          value={searchParams.get("store") ?? "all"}
          onValueChange={handleStoreChange}>
          <SelectTrigger>
            <SelectValue placeholder="Todas as lojas" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">Todas as lojas</SelectItem>

            {stores.map((store) => (
              <SelectItem key={store.id} value={store.id}>
                {store.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className=" space-y-2">
        <label className=" text-sm font-medium">Categoria</label>

        <Select
          value={searchParams.get("category") ?? "all"}
          onValueChange={handleCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Todas as categorias" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">Todas as categorias</SelectItem>

            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className=" space-y-2">
        <label className=" text-sm font-medium">Faixa de preço</label>

        <div className=" grid grid-cols-2 gap-2">
          <Input
            type="number"
            min="0"
            placeholder="Preço mínimo"
            value={minPrice}
            onChange={(e) => {
              setMinPrice(e.target.value);
            }}
          />

          <Input
            type="number"
            min="0"
            placeholder="Preço máximo"
            value={maxPrice}
            onChange={(e) => {
              setMaxPrice(e.target.value);
            }}
          />
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={handlePriceFilter}>
          Aplicar preço
        </Button>
      </div>

      <div className=" flex items-center gap-2">
        <Checkbox
          id="available"
          checked={searchParams.get("available") === "true"}
          onCheckedChange={(checked) => {
            handleAvailableChange(checked === true);
          }}
        />

        <label htmlFor="available" className=" text-sm font-medium">
          Apenas disponíveis
        </label>
      </div>

      <Button variant="ghost" className="w-full" onClick={clearFilters}>
        Limpar filtros
      </Button>
    </div>
  );
}
