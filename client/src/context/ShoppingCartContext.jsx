import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";


export const ShoppingCartContext = createContext();

export const ShoopingCartProvider = ({children}) => {
    const [cart, setCart] = useLocalStorage('ShoppingCart', [])
   
    return (
        <ShoppingCartContext.Provider value={[cart, setCart]}>
            {children}
        </ShoppingCartContext.Provider>
    )
}