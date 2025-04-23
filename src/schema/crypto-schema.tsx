import z from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CryptoCurrencyResponseSchema = z.object({
  LIST: z.array(
    z.object({
      NAME: z.string(),
      SYMBOL: z.string(),
    })
  ),
});

export const CryptoCurrenciesResponseSchema = z.array(
  CryptoCurrencyResponseSchema
);

export const PairSchema = z.object({
  currency: z.string(),
  cryptocurrency: z.string()
})

export const CryptoPriceSchema = z.object({
  IMAGEURL: z.string(),
  PRICE: z.string(),
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  CHANGE24HOUR: z.string(),
  LASTUPDATE:  z.string()
})