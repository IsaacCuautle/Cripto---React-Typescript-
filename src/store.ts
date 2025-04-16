import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

import { CryptoCurrencyResponseSchema } from "./schema/crypto-schema";
import { CryptoCurrency } from "./types";

type CryptoStore = {
  cryptocurrencies: CryptoCurrency[];
  fetchCryptos: () => Promise<void>;
};

// Obtiene las cryptomonedas de la API
const getCryptos = async () => {
  const url =
    "https://data-api.coindesk.com/asset/v1/top/list?page=1&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK&toplist_quote_asset=USD&page_size=20";
  const {
    data: { Data },
  } = await axios(url);

  // Valida la respuesta
  const result = CryptoCurrencyResponseSchema.safeParse(Data);

  if (result.success) {
    return result.data.LIST;
  }
};

// Crea el store de crytomonedas
export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();

      set(() => ({
        cryptocurrencies,
      }));
    },
  }))
);
