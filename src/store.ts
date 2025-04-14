import { create } from 'zustand'

export const useCryptoStore = create( () => ({
    fetchCryptos: () => {
        console.log('desde de fetch cryptos');
        
    }
}))