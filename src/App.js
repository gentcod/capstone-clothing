import { Routes, Route} from 'react-router-dom'; //Routes is used as parent element for Route elements or components, Route elements can also be used as parent elements to subsidiary Route elements

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

import './App.css';

const Shop = () => {
  return (
    <div>
      <h1>Shopping</h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop'element={<Shop/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;
