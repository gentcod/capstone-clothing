import { createContext } from "react";
import { useState, useEffect } from "react";

import { getDocumentAndCollection } from "../utilities/firebase/firebase.utilities";

// import SHOP_DATA from "../shop-data";


export const CategoriesContext = createContext({
   categoriesMap: [],
})

//Context Provider
export const CategoriesProvider = ({ children }) => {
   const [ categoriesMap, setCategoriesMap ] = useState([]); //Set data 
   
   //Run only once to load data to fireabse; firestore.. It can be deleted after data has been stored
   // useEffect(() => {
   //    addDocumentAndCollection('categories', SHOP_DATA)
   // }, [])

   //Useeffect does not take an async function as an argument, instead another async function is declared inside the function argument and then called
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

   //The usercontext.provider gives the children elements access to the set value passed
   return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}