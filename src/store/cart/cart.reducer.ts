import { CartItem } from "./cart.types";
import { AnyAction } from "redux";
import { setIsCartOpen, updateCartItem } from "./cart.action";

export type CartState = {
   readonly isCartOpen: boolean;
   readonly cartItems: CartItem[];
   readonly cartCount: number;
   readonly cartTotal: number;
}

const INITIAL_STATE: CartState = {
   isCartOpen: false,
   cartItems: [],
   cartCount: 0,
   cartTotal: 0,
}

export const cartReducer = (state = INITIAL_STATE, action: AnyAction): CartState => {

   if (updateCartItem.match(action))
   {
      return {
         ...state,
         cartItems: action.payload,
      }
   }
   if (setIsCartOpen.match(action))
   {
      return {
         ...state,
         isCartOpen: action.payload
      }
   }

   return state;
}
