import z from "zod";
import {
  CryptoCurrenciesResponseSchema,
  CryptoCurrencyResponseSchema,
  CurrencySchema,
} from "../schema/crypto-schema.tsx";

export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>["LIST"][number];
export type CryptoCurrencies = z.infer<typeof CryptoCurrenciesResponseSchema>;
