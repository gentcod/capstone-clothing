import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropDownContainer, CartDropdownItemsContainer} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
   const {cartItems, setIsCartOpen} = useContext(CartContext);
   const navigate = useNavigate();

   const goToCheckOut = () => {
      navigate('/checkout');
      setIsCartOpen(false);
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