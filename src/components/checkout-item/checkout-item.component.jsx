import React from 'react';
import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import {CheckoutItemContainer, CheckoutItemIcon, CheckoutItemImageContainer, CheckoutItemIconRemove, CheckoutItemName, CheckoutItemPrice, CheckoutItemQuantity, CheckoutItemValue} from './checkout-item.styles.jsx';

const CheckoutItem = ({cartItem}) => {

   const { name, price, imageUrl, quantity} = cartItem;

   const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
   const addItemHandler = () => addItemToCart(cartItem);
   const clearItemHandler = () => clearItemFromCart(cartItem);
   const removeItemHandler = () => removeItemFromCart(cartItem);

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
