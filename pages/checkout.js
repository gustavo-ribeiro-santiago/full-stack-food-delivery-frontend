/* pages/checkout.js */

import React, { useContext, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/checkoutForm';
import AppContext from '../components/context';
import Cart from '../components/cart';

function Checkout() {
  // get app context
  const { isAuthenticated, setHideCart } = useContext(AppContext);
  // isAuthenticated is passed to the cart component to display order button
  //const isAuthenticated  = true;

  // load stripe to inject into elements components
  const stripePromise = loadStripe(
    'pk_test_51PEzjiBDFGfdPs6Dodya6lb6BeSoU5pMLOVmopsPdoSNrLdQ1Btj0sw3zKYtXrbcewElRLIVbYJOQVHGFzYJNBZ800PmArEDcK'
  );

  useEffect( () => setHideCart(true), []);
  
  return (
    <div>
      <h1 style={{ margin: 20 }}>Checkout</h1>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Checkout;
