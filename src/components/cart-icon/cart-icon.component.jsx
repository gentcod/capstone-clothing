import { ReactComponent as CartLogo } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import './cart-icon.style.scss';

const CartIcon = ({itemNum}) => {
   const {isCartOpen, setIsCartOpen} = useContext(CartContext);

   const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

   return(
      <div className='cart-icon-container' onClick={toggleIsCartOpen}>
         <CartLogo className='cart-logo'/>
         <span className='item-count'>{itemNum}</span>
      </div>
   )
}

export default CartIcon;