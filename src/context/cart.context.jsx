import { createContext, useReducer } from "react";

import { createAction } from "../utilities/reducer/reducer.utilities";

export const CartContext = createContext({
   cartCount: 0,
   isCartOpen: false,
   setIsCartOpen: () => {}, 
   cartItems: [],
   addItemToCart: () => {},
   removeItemFromCart: () => {},
   clearItemFromCart: () => {},
   cartTotal: 0,
});

//Helper function
const addCartItem = (cartItems, productToAdd) => {
   const exists = cartItems.find(item => item.id === productToAdd.id)

   if (exists) {
      return cartItems.map(item => item.id === productToAdd.id ? 
         {...item, quantity: item.quantity + 1}:
         item   
      )
   }

   return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, productToRemove) => {
   const exists = cartItems.find(item => item.id === productToRemove.id)

   if (exists.quantity === 1) {
      return cartItems.filter(item => item.id !== productToRemove.id)
   }

   return cartItems.map(item => item.id === productToRemove.id ?
      {...item, quantity: item.quantity - 1} :
      item)
}

const clearItem = (cartItems, itemToClear) => {
   return cartItems.filter(item => item.id !== itemToClear.id)
}

export const CART_ACTION_TYPES = {
   SET_CART_ITEMS: 'SET_CART_ITEMS',
   SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const INITIAL_STATE = {
   cartCount: 0,
   isCartOpen: false,
   cartItems: [],
   cartTotal: 0,
}

const cartReducer = (state, action) => {
   const {type, payload} = action;

   switch(type) {
      case CART_ACTION_TYPES.SET_CART_ITEMS: 
         return {
            ...state,
            ...payload
         }
      
      case CART_ACTION_TYPES.SET_IS_CART_OPEN: 
      return {
         ...state,
         isCartOpen: payload
      }

      default: 
         throw new Error(`Unhandled type of ${type} in reducer`)
   }

}

export const CartProvider = ({children}) => {

   const [{cartItems, isCartOpen, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

   const updateCartItemReducer = (newCartItems) => {
      const newCartCount = newCartItems.reduce((acc, cur) => acc + cur.quantity, 0);
      const newCartTotal = newCartItems.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0);

      dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {cartItems: newCartItems, cartCount: newCartCount, cartTotal: newCartTotal}));

   }

   const addItemToCart = (productToAdd) => {
      const newCartItems = addCartItem(cartItems, productToAdd);
      updateCartItemReducer(newCartItems);
   }

   const removeItemFromCart = (productToRemove) => {
      const newCartItems = removeCartItem(cartItems, productToRemove);
      updateCartItemReducer(newCartItems);
   }
   
   const clearItemFromCart = (itemToClear) => {
      const newCartItems = clearItem(cartItems, itemToClear);
      updateCartItemReducer(newCartItems);
   }

   const setIsCartOpen = (bool) => {
      dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
   }


   const value = {cartCount, isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, cartTotal}

   return (
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
   );
};