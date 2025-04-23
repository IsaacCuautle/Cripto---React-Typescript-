import { useMemo } from "react";
import { useCryptoStore } from "../store";

export default function CryptoPriceDysplay() {
  const result = useCryptoStore((state) => state.result);
  const hastResult = useMemo(
    () => Object.values(result).includes(""),
    [result]
  );

  return (
    <div>
      {hastResult && (
        <>
          <h2>Cotizacion:</h2>

          <div className="result">
            <div>
              <p>
                El precio es de: <span>{result.PRICE}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
