// import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


// import { CartContext } from '../../context/cart.context';
import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropDownContainer, CartDropdownItemsContainer} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
   // const { cartItems, setIsCartOpen} = useContext(CartContext);

   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);
   
   const navigate = useNavigate();
   
   const goToCheckOut = () => {
      navigate('/checkout');
      dispatch(setIsCartOpen(!selectIsCartOpen));
   }

   return (
      <CartDropDownContainer>
         <CartDropdownItemsContainer>
            {cartItems.map(item => <CartItem cartItem={item} key={item.id}/>)}
         </CartDropdownItemsContainer>
         <Button onClick={goToCheckOut}>Go to checkout</Button>
      </CartDropDownContainer>
   );
};

export default CartDropdown;