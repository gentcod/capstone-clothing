import Button from '../button/button-regular.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import './cart-dropdown.style.scss';

const CartDropdown = () => {
   const {cartItems} = useContext(CartContext)

   return (
      <div className='cart-dropdown-container'>
         <div className='cart-dropdown-items-container'>
            {cartItems.map(item => <CartItem cartItem={item}/>)}
         </div>
         <Button>Go to checkout</Button>
      </div>
   );
};

export default CartDropdown;