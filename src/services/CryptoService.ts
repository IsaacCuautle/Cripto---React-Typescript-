import axios from "axios";

import { CryptoCurrencyResponseSchema } from "../schema/crypto-schema";

// Obtiene las cryptomonedas de la API
export const getCryptos = async () => {
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
