import { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CartContext } from '../../context/cart.context';

import './checkout.style.scss';

const Checkout = () => {
   const { cartItems, cartTotal } = useContext(CartContext);

   return (
      <div className='checkout__container'>
         <div className='checkout__header'>
            <div className='checkout__header--block'>
               <span>Product</span>
            </div>

            <div className='checkout__header--block'>
               <span>Description</span>
            </div>

            <div className='checkout__header--block'>
               <span>Quantity</span>   
            </div>

            <div className='checkout__header--block'>
               <span>Price</span>
            </div>

            <div className='checkout__header--block'>
               <span>Remove</span>
            </div>
         </div>
       
         {cartItems.map(item => <CheckoutItem cartItem={item} key={item.id}/>)}

         <span className='checkout__total'>Total: ${cartTotal}</span>
      </div>
   );
};

export default Checkout;