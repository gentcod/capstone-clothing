import { Outlet } from "react-router-dom" //Syntactic sugar for anchor tags.. Outlet represents the preceeding  elements in a component
import { Fragment, useContext } from "react";

import { ReactComponent as Logo} from '../../assets/crown.svg'; //Syntactic sugar adding logos
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { signOutUser } from "../../utilities/firebase/firebase.utilities.js";

import { NavigationContainer, LogoContainer, NavigationLinksContainer, NavigationLink } from "./navigation.styles";

const Navigation = () => {
   const { currentUser } = useContext(UserContext);
   const { cartCount, isCartOpen } = useContext(CartContext);

   const signOutUserHandler = async () => {
      await signOutUser();
   }

   return (
     <Fragment>
         <NavigationContainer>
            <LogoContainer to={'/'}>
               <Logo/>
            </LogoContainer>
            <NavigationLinksContainer>
               <NavigationLink to={'/shop'}>Shop</NavigationLink>
               <NavigationLink to={'/contact'}>Contact</NavigationLink>
              { currentUser ? (<NavigationLink as={'span'} onClick={signOutUserHandler}>SIGN OUT</NavigationLink>) : (<NavigationLink to={'/auth'}>Sign in</NavigationLink>)}
               <CartIcon itemNum={cartCount}/>
            </NavigationLinksContainer>
            {isCartOpen && <CartDropdown/>}
         </NavigationContainer>
         <Outlet/>
     </Fragment>
   )
}

export default Navigation;