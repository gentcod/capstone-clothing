import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg'; //Syntactic sugar for adding logos
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

// import { UserContext } from "../../context/user.context";
// import { CartContext } from "../../context/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";

// import { signOutUser } from "../../utilities/firebase/firebase.utilities.js";

import { NavigationContainer, LogoContainer, NavigationLinksContainer, NavigationLink } from "./navigation.styles";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
   // const { currentUser } = useContext(UserContext);
   // const { cartCount, isCartOpen } = useContext(CartContext);

   const dispatch = useDispatch()
   const currentUser = useSelector(selectCurrentUser);
   const cartCount = useSelector(selectCartCount)
   const isCartOpen = useSelector(selectIsCartOpen)

   const signOutUser = () => dispatch(signOutStart());

   // const signOutUserHandler = async () => {
   //    await signOutUser();
   // }

   return (
      <Fragment>
         <NavigationContainer>
            <LogoContainer to={'/'}>
               <Logo />
            </LogoContainer>
            <NavigationLinksContainer>
               <NavigationLink to={'/shop'}>Shop</NavigationLink>
               <NavigationLink to={'/contact'}>Contact</NavigationLink>
               {currentUser ? (<NavigationLink as={'span'} onClick={signOutUser}>SIGN OUT</NavigationLink>) : (<NavigationLink to={'/auth'}>Sign in</NavigationLink>)}
               <CartIcon itemNum={cartCount} />
            </NavigationLinksContainer>
            {isCartOpen && <CartDropdown />}
         </NavigationContainer>
         <Outlet />
      </Fragment>
   )
}

export default Navigation;