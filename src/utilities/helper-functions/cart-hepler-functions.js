//Helper functions
///////////////////////////////////////////////////////////////////
export const addCartItem = (cartItems, productToAdd) => {
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

export const removeCartItem = (cartItems, productToRemove) => {
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

export const clearItem = (cartItems, itemToClear) => {
   return cartItems.filter(item => item.id !== itemToClear.id)
}
///////////////////////////////////////////////////////////////////