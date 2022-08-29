import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';

import Button from '../button/button-regular.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.scss';

const CartDropdown = () => {
   const {cartItems, setIsCartOpen} = useContext(CartContext);

   const closeDropdown = () => setIsCartOpen(false);

   return (
      <div className='cart-dropdown-container'>
         <div className='cart-dropdown-items-container'>
            {cartItems.map(item => <CartItem cartItem={item} key={item.id}/>)}
         </div>
         <Button onClick={closeDropdown}><Link className='checkout__link' to={'/checkout'}>Go to checkout</Link></Button>
      </div>
   );
};

export default CartDropdown;