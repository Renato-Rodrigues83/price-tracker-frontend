import { FeaturedOffersSection } from "@/components/home/featured-offers-section";
import { getFeaturedOffers } from "@/lib/services/server/featured-offers-service";

export async function HomeContent() {
  const featuredOffers = await getFeaturedOffers();

  return (
    <div className=" space-y-16">
      <FeaturedOffersSection
        featuredOffers={featuredOffers.data}
        storeId="kabum"
        title="Destaques KaBuM"
        description="Produtos em destaque na KaBuM"
      />

      <FeaturedOffersSection
        featuredOffers={featuredOffers.data}
        storeId="pichau"
        title="Destaques Pichau"
        description="Produtos em destaque na Pichau"
      />

      <FeaturedOffersSection
        featuredOffers={featuredOffers.data}
        storeId="terabyteshop"
        title="Destaques Terabyte"
        description="Produtos em destaque na Terabyte"
      />
    </div>
  );
}
