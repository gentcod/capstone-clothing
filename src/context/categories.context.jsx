import { createContext } from "react";
import { useState, useEffect } from "react";

import { getDocumentAndCollection } from "../utilities/firebase/firebase.utilities";

export const CategoriesContext = createContext({
   categoriesMap: [],
})

export const CategoriesProvider = ({ children }) => {
   const [ categoriesMap, setCategoriesMap ] = useState([]); 

   useEffect(() => {
      const getCategoriesMap = async () => {
         const categoriesMap = await getDocumentAndCollection();
         setCategoriesMap(categoriesMap);
      }
      getCategoriesMap();
   }, [])

   const value = { categoriesMap };

   useEffect(() => {
      
   }, []);

   return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}