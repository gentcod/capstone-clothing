import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utilities/firebase/firebase.utilities'

//Actual value or data
export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null,
})

//Context Provider
export const UserProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState(null); //Set data 
   const value = { currentUser, setCurrentUser };

   //It is run once when the page is loaded: it calls the Authentication change listener on setCurrentUser, which is called when the state of the currentUser changes
   useEffect(() => {
      //Store function return in a variable
      const unsuscribe = onAuthStateChangedListener((user) => {

         //Create user authenticatiob is user exist or isnt null
         if (user) createUserDocumentFromAuth(user);
         setCurrentUser(user)

         console.log(user)
      })

      return unsuscribe;
   }, []);

   //The usercontext.provider gives the children elements access to the set value passed
   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}