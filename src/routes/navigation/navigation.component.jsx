import { Outlet } from "react-router-dom"
import { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";

import { NavigationContainer, LogoContainer, NavigationLinksContainer, NavigationLink } from "./navigation.styles";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {

   const dispatch = useDispatch()
   const currentUser = useSelector(selectCurrentUser);
   const cartCount = useSelector(selectCartCount)
   const isCartOpen = useSelector(selectIsCartOpen)

   const signOutUser = () => dispatch(signOutStart());

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