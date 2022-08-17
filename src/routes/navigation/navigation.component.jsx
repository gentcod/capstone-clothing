import { Link, Outlet } from "react-router-dom" //Syntactic sugar for anchor tags.. Outlet represents the preceeding  elements in a component
import { Fragment } from "react";
import { ReactComponent as Logo} from '../../assets/crown.svg' //Syntactic sugar adding logos

import './_navigation.style.scss';

const Navigation = () => {
   return (
     <Fragment>
         <div className="navigation-container">
            <Link className="logo" to={'/'}>
               <Logo/>
            </Link>
            <div className="navigation__links">
               <Link className="navigation__link" to={'/shop'}>Shop</Link>
               <Link className="navigation__link" to={'/contact'}>Contact</Link>
               <Link className="navigation__link" to={'/auth'}>Sign in</Link>
               <i className="fa-regular fa-cart-shopping"></i>
            </div>
         </div>
         <Outlet/>
     </Fragment>
   )
}

export default Navigation;