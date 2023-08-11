import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { ReactComponent as CartLogo } from '../../assets/shopping-bag.svg';

import { CartIconConatiner, ItemCount } from './cart-icon.styles.jsx';
import { setIsCartOpen } from '../../store/cart/cart.action';

type CartIconProps = {
   itemNum: number;
}

const CartIcon = ({itemNum}: CartIconProps) => {
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