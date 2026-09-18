import {
  PriceHistoryChart,
  PriceHistorySelector,
} from "@/components/price-history";

import { getOfferByUrl } from "@/lib/services/server/offer-service";
import { getPriceHistory } from "@/lib/services/server/price-history-service";

interface PriceHistoryContentProps {
  searchParams: Promise<{
    offer_url?: string;
  }>;
}

export async function PriceHistoryContent({
  searchParams,
}: PriceHistoryContentProps) {
  const params = await searchParams;
  const offerUrl = params.offer_url;

  const [selectedOffer, history] = offerUrl
    ? await Promise.all([getOfferByUrl(offerUrl), getPriceHistory(offerUrl)])
    : [null, null];

  return (
    <>
      <PriceHistorySelector selectedOffer={selectedOffer} />

      {selectedOffer && history ? (
        <div className="mt-8">
          <PriceHistoryChart data={history.data} />
        </div>
      ) : (
        <div className="mt-8 rounded-lg p-8 text-center">
          <p className="text-muted-foreground">
            Selecione um produto para visualizar seu histórico de preços.
          </p>
        </div>
      )}
    </>
  );
}
