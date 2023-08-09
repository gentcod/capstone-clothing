import { ActionWithPayload, createAction, withMatcher } from "../../utilities/reducer/reducer.utilities";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { CategoryItem } from "../category/category.types";

export type UpdateCartItem = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;
export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;


export const updateCartItem = withMatcher((newCartItems: CartItem[]): UpdateCartItem => 
   createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
)

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
   const exists = cartItems.find(item => item.id === productToAdd.id)

   if (exists) {
      return cartItems.map(item => item.id === productToAdd.id ? 
         {...item, quantity: item.quantity + 1}:
         item   
      )
   }
   const newCartItems = [...cartItems, {...productToAdd, quantity: 1}]
   updateCartItem(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], productToRemove: CartItem) => {
   const exists = cartItems.find(item => item.id === productToRemove.id)

   if (exists && exists.quantity === 1) {
      return cartItems.filter(item => item.id !== productToRemove.id)
   }

   const newCartItems = cartItems.map(item => item.id === productToRemove.id ?
      {...item, quantity: item.quantity - 1} :
      item);
   
   updateCartItem(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], itemToClear: CategoryItem) => {
   const newCartItems = cartItems.filter(item => item.id !== itemToClear.id)
   updateCartItem(newCartItems);
};
