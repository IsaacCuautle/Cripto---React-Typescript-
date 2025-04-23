import { useEffect } from "react";

import { useCryptoStore } from "./store";
import CryptoSearchForm from "./components/CryptoSearchForm";
import CryptoPriceDysplay from "./components/CryptoPriceDysplay";

function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos);

  useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="content">
          <CryptoSearchForm />
          
          { /* Mostrar la cotizacion */ }
          <CryptoPriceDysplay />
        </div>
      
      </div>
    </>
  );
}

export default App;
