import { createContext, useState } from "react";

//Helper function
const addCartItem = (cartItems, productToAdd) => {
   //find if cardItems contains product
   const check = cartItems.includes(productToAdd)
   console.log(check)
   console.log(cartItems)
   console.log(productToAdd)
   const num = 1

   const newNum = check ? num : num + 1;

   //if found, increment quantity

   //return new array, with modified carditems
   return [...cartItems, {...productToAdd, quantity: newNum}]
}

export const CartContext = createContext({
   cartNum: 0,
   isCartOpen: false,
   setIsCartOpen: () => {}, 
   cartItems: [],
   addItemToCart: () => {},
});

export const CartProvider = ({children}) => {
   const [cartItems, setCartItem] = useState([])
   const [cartNum, setCartNum] = useState(0);
   const [isCartOpen, setIsCartOpen] = useState(false)

   const addItemToCart = (productToAdd) => {
      setCartItem(addCartItem(cartItems, productToAdd))
      console.log(cartItems)
   }

   const value = {cartNum, setCartNum, isCartOpen, setIsCartOpen, cartItems, setCartItem, addItemToCart}

   return (
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
   );
};