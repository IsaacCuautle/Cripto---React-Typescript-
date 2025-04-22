import axios from "axios";

import { CryptoCurrencyResponseSchema, cryptoPriceSchema } from "../schema/crypto-schema";
import { Pair } from "../types";

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

// Obtiene el tipo de cambio segun la moneda y cryptomoneda
export const fetchCurrentCryptoPrice = async (pair: Pair) => {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`;
  const { data: {DISPLAY}} = await axios(url);
  const result = cryptoPriceSchema.safeParse(DISPLAY[pair.cryptocurrency][pair.currency]) 

  console.log(result);
  
  if(result.success) {
    console.log(result.data);
  }
};

