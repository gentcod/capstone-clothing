import { useSelector } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import { CheckoutContainer, CheckoutHeaderContainer, CheckoutHeader, CheckoutTotal } from './checkout.styles';

const Checkout = () => {
   const cartItems = useSelector(selectCartItems);
   const cartTotal = useSelector(selectCartTotal);

   return (
      <CheckoutContainer>
         <CheckoutHeaderContainer>
            <CheckoutHeader>
               <span>Product</span>
            </CheckoutHeader>

            <CheckoutHeader>
               <span>Description</span>
            </CheckoutHeader>

            <CheckoutHeader>
               <span>Quantity</span>   
            </CheckoutHeader>

            <CheckoutHeader>
               <span>Price</span>
            </CheckoutHeader>

            <CheckoutHeader>
               <span>Remove</span>
            </CheckoutHeader>
         </CheckoutHeaderContainer>
       
         {cartItems.map(item => <CheckoutItem cartItem={item} key={item.id}/>)}

         <CheckoutTotal>Total: ${cartTotal}</CheckoutTotal>
         <PaymentForm/>
      </CheckoutContainer>
   );
};

export default Checkout;