import { createContext } from "react";
import { useState, useEffect } from "react";
import PRODUCTS from '../shop-data.json'


export const ProductsContext = createContext({
   products: [],
})

//Context Provider
export const ProductsProvider = ({ children }) => {
   const [products] = useState(PRODUCTS); //Set data 
   const value = { products };

   useEffect(() => {
      
   }, []);

   //The usercontext.provider gives the children elements access to the set value passed
   return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}