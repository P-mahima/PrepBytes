import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import Store from './ReDux/Store';

import { Auth0Provider } from '@auth0/auth0-react';  
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
const root = ReactDOM.createRoot(document.getElementById('root'))
const client = "AUOdwuINerkA6QroOC-eErif68KW_J_bF7TuSRx0JGCVBXAFq1gegSu2V4_G_ZOfp4E7UR4jlph_Pde1"

root.render(
  <Auth0Provider
  domain="dev-z1s0w0hr43qquov7.us.auth0.com"
  clientId="tKwHET1d61GGjCMJobg8a8mQfXbtg5wT"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
    
    <PayPalScriptProvider options={{"client-id": client, currency: "USD", intent: "capture"}}>
  
    
  <React.StrictMode>
   
    <Provider store={Store}>
   

    <App />
    
    </Provider>
  
  
  </React.StrictMode>,
    </PayPalScriptProvider>
    </Auth0Provider>
)

