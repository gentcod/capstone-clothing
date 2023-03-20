import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { CartLogo, CartIconConatiner, ItemCount } from './cart-icon.styles.jsx';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = ({itemNum}) => {
   const dispatch = useDispatch();

   const isCartOpen = useSelector(selectIsCartOpen)

   const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

   return(
      <CartIconConatiner onClick={toggleIsCartOpen}>
         <CartLogo/>
         <ItemCount>{itemNum}</ItemCount>
      </CartIconConatiner>
   )
}

export default CartIcon;