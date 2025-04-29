import { useMemo } from "react";

import { useCryptoStore } from "../store";

export default function CryptoPriceDysplay() {
  const result = useCryptoStore((state) => state.result);
  console.log(result)
  const hasResult = useMemo(
    () => Object.keys(result).length !== 0, 
    [result]
  );

  return (
    <div className="result-wrapper">
      {hasResult && (
        <>
          <h2>Cotizacion:</h2>
          <div className="result">
            <img
              src={`https://www.cryptocompare.com/${result.IMAGEURL}`}
              alt="imagen cryptomoneda"
            />
            <div>
              <p>
                El precio es de: <span>{result.PRICE}</span>
              </p>
              <p>
                El precio mas alto del dia: <span>{result.HIGHDAY}</span>
              </p>
              <p>
                El precio mas bajo del dia: <span>{result.LOWDAY}</span>
              </p>
              <p>
                Variacion ultimas 24 horas: <span>{result.CHANGE24HOUR}</span>
              </p>
              <p>
                Ultima actualizacion: <span>{result.LASTUPDATE}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
