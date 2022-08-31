import { createContext, useState, useEffect } from "react";

//Helper function
const addCartItem = (cartItems, productToAdd) => {
   //Find if cardItems contains product
   const exists = cartItems.find(item => item.id === productToAdd.id)

   //if found, increment quantity
   if (exists) {
      return cartItems.map(item => item.id === productToAdd.id ? 
         {...item, quantity: item.quantity + 1}:
         item   
      )
   }

   //Else Return new array, with modified carditems
   return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, productToRemove) => {
   //Find item to remove
   const exists = cartItems.find(item => item.id === productToRemove.id)

   //Check if quantity is equal to 1, remove item from cart
   if (exists.quantity === 1) {
      return cartItems.filter(item => item.id !== productToRemove.id)
   }

   //Else Return cartitem with reduced quantity
   return cartItems.map(item => item.id === productToRemove.id ?
      {...item, quantity: item.quantity - 1} :
      item)
}

const clearItem = (cartItems, itemToClear) => {
   return cartItems.filter(item => item.id !== itemToClear.id)
}

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

export const CartProvider = ({children}) => {
   const [cartItems, setCartItem] = useState([])
   const [cartCount, setCartCount] = useState(0);
   const [isCartOpen, setIsCartOpen] = useState(false)
   const [cartTotal, setCartTotal] = useState(0)

   useEffect(() => {
      const newCartCount = cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
      setCartCount(newCartCount)
   }, [cartItems])

   useEffect(() => {
      const newCartTotal = cartItems.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0)
      setCartTotal(newCartTotal)
   }, [cartItems])

   const addItemToCart = (productToAdd) => {
      setCartItem(addCartItem(cartItems, productToAdd))
   }

   const removeItemFromCart = (productToRemove) => {
      setCartItem(removeCartItem(cartItems, productToRemove))
   }
   
   const clearItemFromCart = (itemToClear) => {
      setCartItem(clearItem(cartItems, itemToClear))
   }


   const value = {cartCount, setCartCount, isCartOpen, setIsCartOpen, cartItems, setCartItem, addItemToCart, removeItemFromCart, clearItemFromCart, cartTotal}

   return (
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
   );
};