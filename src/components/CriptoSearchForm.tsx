import { useState, ChangeEvent, FormEvent } from "react";

import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoSearchForm() {

  const cryptoCurrencies = useCryptoStore((state) => state.cryptocurrencies);
  const fetchData = useCryptoStore((state) => state.fetchData);
  const [pair, setPair] = useState<Pair>({
    currency: "",
    cryptocurrency: ""
  });
  const [error,setError] = useState('')
  
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value
    })
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (Object.values(pair).includes('')) {
      setError('Todos los campos son obligatorios')
      return
    }
    
    setError('')

    // Consultar la API
    fetchData(pair)

  }

  return (
    <>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {/* Moneda */}
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="currency">Moneda:</label>
          <select name="currency" id="currency" onChange={handleChange} value={pair.currency}>
            <option value="">-- Seleccione --</option>
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>

        {/* Cryptomoneda */}
        <div className="field">
          <label htmlFor="cryptocurrency">Criptomoneda:</label>
          <select name="cryptocurrency" id="cryptocurrency" onChange={handleChange} value={pair.cryptocurrency}>
            <option value="">-- Seleccione --</option>
            {cryptoCurrencies.map((crypto) => (
              <option key={crypto.SYMBOL} value={crypto.SYMBOL}>
                {crypto.NAME}
              </option>
            ))}
          </select>
        </div>

        <input type="submit" value="Cotizar" />
      </form>
    </>
  );
}
