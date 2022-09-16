import { createContext, useEffect, useReducer } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utilities/firebase/firebase.utilities';
import { createAction } from "../utilities/reducer/reducer.utilities";

//Actual value or data
export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
   SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const INITIAL_STATE = {
   currentUser: null,
}

const userReducer = (state, action) => {

   const { type, payload } = action;

   switch(type) {
      case USER_ACTION_TYPES.SET_CURRENT_USER: 
         return {
            ...state,
            currentUser: payload
         }

      default: 
         throw new Error(`Unhandled type ${type} in userReducer`)
   }
}

//Context Provider
export const UserProvider = ({ children }) => {
   // const [currentUser, setCurrentUser] = useState(null); //Set data 
   const [{currentUser}, dispatch ] = useReducer(userReducer, INITIAL_STATE)


   const setCurrentUser = (user) => {
      // dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
      dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
   }

   const value = { currentUser, setCurrentUser };

   //It is run once when the page is loaded: it calls the Authentication change listener on setCurrentUser, which is called when the state of the currentUser changes
   useEffect(() => {
      //Store function return in a variable
      const unsuscribe = onAuthStateChangedListener((user) => {

         //Create user authenticatiob is user exist or isnt null
         if (user) createUserDocumentFromAuth(user);
         setCurrentUser(user)
      })

      return unsuscribe;
   }, []);

   //The usercontext.provider gives the children elements access to the set value passed
   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}