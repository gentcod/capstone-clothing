// import { useState, useEffect } from "react";
// import { useReducer } from "react";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

const CATEGORIES_INITIAL_STATE = {
   categories: [],
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = []) => {
   const {type, payload} = action;
   switch(type) {
      case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
         return {
            ...state,
            categories: payload,
         };
      default:
         return state;
   }
}

//Context Provider
export const CategoriesProvider = ({ children }) => {
   // const [ setCategoriesMap ] = useState([]); //Set data 
   
   //Run only once to load data to fireabse; firestore.. It can be deleted after data has been stored
   // useEffect(() => {
   //    addDocumentAndCollection('categories', SHOP_DATA)
   // }, [])

   //Useeffect does not take an async function as an argument, instead another async function is declared inside the function argument and then called
   // const [categoriesMap, dispatch] = useReducer(categoryReducer)
}