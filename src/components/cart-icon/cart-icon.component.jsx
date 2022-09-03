import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import { CartLogo, CartIconConatiner, ItemCount } from './cart-icon.styles.jsx';

const CartIcon = ({itemNum}) => {
   const {isCartOpen, setIsCartOpen} = useContext(CartContext);

   const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

   return(
      <CartIconConatiner onClick={toggleIsCartOpen}>
         <CartLogo/>
         <ItemCount>{itemNum}</ItemCount>
      </CartIconConatiner>
   )
}

export default CartIcon;