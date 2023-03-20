export const addCartItem = (cartItems, productToAdd) => {
   const exists = cartItems.find(item => item.id === productToAdd.id)

   if (exists) {
      return cartItems.map(item => item.id === productToAdd.id ? 
         {...item, quantity: item.quantity + 1}:
         item   
      )
   }
   return [...cartItems, {...productToAdd, quantity: 1}]
}

export const removeCartItem = (cartItems, productToRemove) => {
   const exists = cartItems.find(item => item.id === productToRemove.id)

   if (exists.quantity === 1) {
      return cartItems.filter(item => item.id !== productToRemove.id)
   }

   return cartItems.map(item => item.id === productToRemove.id ?
      {...item, quantity: item.quantity - 1} :
      item)
}

export const clearItem = (cartItems, itemToClear) => {
   return cartItems.filter(item => item.id !== itemToClear.id)
}