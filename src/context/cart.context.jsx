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

   //Return new array, with modified carditems
   return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
   cartCount: 0,
   isCartOpen: false,
   setIsCartOpen: () => {}, 
   cartItems: [],
   addItemToCart: () => {},
});

export const CartProvider = ({children}) => {
   const [cartItems, setCartItem] = useState([])
   const [cartCount, setCartCount] = useState(0);
   const [isCartOpen, setIsCartOpen] = useState(false)

   useEffect(() => {
      const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
      setCartCount(newCartCount)
   }, [cartItems])

   const addItemToCart = (productToAdd) => {
      setCartItem(addCartItem(cartItems, productToAdd))
   }

   const value = {cartCount, setCartCount, isCartOpen, setIsCartOpen, cartItems, setCartItem, addItemToCart}

   return (
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
   );
};