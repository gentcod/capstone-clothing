import { createAction } from "../../utilities/reducer/reducer.utilities";
import { CART_ACTION_TYPES } from "./cart.types";
import { addCartItem, removeCartItem, clearItem } from "../../utilities/helper-functions/cart-hepler-functions";

export const updateCartItemReducer = (newCartItems) => {
   createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const setIsCartOpen = boolean => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
   const newCartItems = addCartItem(cartItems, productToAdd);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
   const newCartItems = removeCartItem(cartItems, productToRemove);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, itemToClear) => {
   const newCartItems = clearItem(cartItems, itemToClear);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
