import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route} from 'react-router-dom'; //Routes is used as parent element for Route elements or components, Route elements can also be used as parent elements to subsidiary Route elements


import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utilities/firebase/firebase.utilities';
import { setCurrentUser } from "./store/user/user.action";

import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  //It is run once when the page is loaded: it calls the Authentication change listener on setCurrentUser, which is called when the state of the currentUser changes
  useEffect(() => {
    //Store function return in a variable
    const unsuscribe = onAuthStateChangedListener((user) => {

      if (user) createUserDocumentFromAuth(user);
      dispatch(setCurrentUser(user));
    });

    return unsuscribe;
  }, [dispatch]);


  return (
    <Routes>
      <Route path={'/'} element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*'element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  );
}

export default App;
