import { createContext, useState } from "react";

//Actual value or data
export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null,
})

//Context Provider
export const UserProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState(null); //Set data 
   const value = { currentUser, setCurrentUser };

   //The usercontext.provider gives the children elements access to the set value passed
   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}