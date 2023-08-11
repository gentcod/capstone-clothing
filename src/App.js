import { useEffect, Suspense, lazy } from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route} from 'react-router-dom'; //Routes is used as parent element for Route elements or components, Route elements can also be used as parent elements to subsidiary Route elements
// import { onAuthStateChangedListener, createUserDocumentFromAuth, getCurrentUser } from './utilities/firebase/firebase.utilities';
import { checkUserSession } from "./store/user/user.action";

import './App.css';
import Spinner from "./components/spinner/spinner.component";

const Authentication = lazy(() => import('./routes/authentication/authentication.component'));
const Navigation = lazy(() => import('./routes/navigation/navigation.component'));
const Shop = lazy(() => import('./routes/shop/shop.component'));
const Home = lazy(() => import('./routes/home/home.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path={'/'} element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='shop/*'element={<Shop/>}/>
          <Route path='auth' element={<Authentication/>}/>
          <Route path='checkout' element={<Checkout/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
