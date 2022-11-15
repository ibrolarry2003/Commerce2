import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import NavbarBar from './components/NavBar/navbar';
import Footer from './components/NavBar/Footer';
import { StoreProvider } from './Store/Store';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <HelmetProvider>
          <PayPalScriptProvider deferLoading={true}>
            <NavbarBar />
            <App />
            <Footer />
          </PayPalScriptProvider>
        </HelmetProvider>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
