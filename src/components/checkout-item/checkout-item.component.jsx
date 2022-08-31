import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './checkout-item.style.scss';

const CheckoutItem = ({cartItem}) => {

   const { productName, price, image, quantity} = cartItem;

   const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
   const addItemHandler = () => addItemToCart(cartItem);
   const clearItemHandler = () => clearItemFromCart(cartItem);
   const removeItemHandler = () => removeItemFromCart(cartItem);

   return(
      <div className='checkout__item-container'>
         <div className='checkout__item-image-container'>
            <img src={image} alt={`${productName}`}/>
         </div>
         <span className='checkout__item-name'>{productName}</span>
         <span className='checkout__item-quantity'>
            <div className='checkout__item-arrow icon' onClick={removeItemHandler}>&#10094;</div>
            <span className='checkout__item-value'>{quantity}</span>
            <div className='checkout__item-arrow icon' onClick={addItemHandler}>&#10095;</div>
         </span>
         <span className='checkout__item-price'>${price}</span>
         <div className='checkout__item-remove icon' onClick={clearItemHandler}>&#10006;</div>
      </div>
   )
};

export default CheckoutItem;