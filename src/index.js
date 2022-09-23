import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import App from './App';
// import { UserProvider } from './context/user.context';
// import { CategoriesProvider } from './context/categories.context';
// import { CartProvider } from './context/cart.context';
import { store, persistor } from './store/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

//The loading parameter passed into the PersistGate component could be used to add a component which is rendered while the data is fetched
//When use context is used, appropriate provider is used to wrap elemets that get access to provider context
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <UserProvider>
//           <CategoriesProvider>
//             <CartProvider>
//               <App />
//             </CartProvider>
//           </CategoriesProvider>
//         </UserProvider>
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
