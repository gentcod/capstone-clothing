import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, removeItemFromCart, clearItemFromCart} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import {CheckoutItemContainer, CheckoutItemIcon, CheckoutItemImageContainer, CheckoutItemIconRemove, CheckoutItemName, CheckoutItemPrice, CheckoutItemQuantity, CheckoutItemValue} from './checkout-item.styles.jsx';

const CheckoutItem = ({cartItem}) => {
   const { name, price, imageUrl, quantity} = cartItem;
   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems)

   const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
   const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
   const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

   return(
      <CheckoutItemContainer>
         <CheckoutItemImageContainer>
            <img src={imageUrl} alt={`${name}`}/>
         </CheckoutItemImageContainer>
         <CheckoutItemName>{name}</CheckoutItemName>
         <CheckoutItemQuantity>
            <CheckoutItemIcon onClick={removeItemHandler}>&#10094;</CheckoutItemIcon>
            <CheckoutItemValue>{quantity}</CheckoutItemValue>
            <CheckoutItemIcon onClick={addItemHandler}>&#10095;</CheckoutItemIcon>
         </CheckoutItemQuantity>
         <CheckoutItemPrice>${price}</CheckoutItemPrice>
         <CheckoutItemIconRemove onClick={clearItemHandler}>&#10006;</CheckoutItemIconRemove>
      </CheckoutItemContainer>
   )
};

export default CheckoutItem;
