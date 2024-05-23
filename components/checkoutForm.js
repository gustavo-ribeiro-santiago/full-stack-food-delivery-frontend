import React, { useState, useContext } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import fetch from 'isomorphic-fetch';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CardSection from './cardSection';
import AppContext from './context';
import Router from 'next/router';
import Cookies from 'js-cookie';

function CheckoutForm() {
  const [data, setData] = useState({
    address: '',
    city: '',
    state: '',
    stripe_id: '',
  });
  const [error, setError] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const appContext = useContext(AppContext);

  function onChange(e) {
    // set the key = to the name property equal to the value typed
    const updateItem = (data[e.target.name] = e.target.value);
    // update the state data object
    setData({ ...data, updateItem });
  }

  async function submitOrder() {
    // event.preventDefault();
    console.log(data);

    // // Use elements.getElement to get a reference to the mounted Element.
    const cardElement = elements.getElement(CardElement);

    // // Pass the Element directly to other Stripe.js methods:
    // // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
    // get token back from stripe to process credit card
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

    const token = await stripe.createToken(cardElement);
    const userToken = Cookies.get('token');
    console.log('token', JSON.stringify(token));
    console.log(
      'body.data',
      JSON.stringify({
        data: {
          amount: Number(Math.round(appContext.cart.total + 'e2') + 'e-2'),
          dishes: appContext.cart.items,
          address: data.address,
          city: data.city,
          state: data.state,
          token: token.token.id,
          orderDate: new Date(),
          userID: appContext.user.id.toString(),
        },
      })
    );

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${userToken}`); // Add this line

    const response = await fetch(`${API_URL}/api/orders`, {
      method: 'POST',
      // headers: userToken && { Authorization: `Bearer ${userToken}` },
      headers: myHeaders,
      body: JSON.stringify({
        data: {
          "amount": Number(Math.round(appContext.cart.total + 'e2') + 'e-2'),
          "dishes": appContext.cart.items,
          "address": data.address,
          "city": data.city,
          "state": data.state,
          "token": token.token.id,
          "orderDate": new Date(),
          "userID": appContext.user.id.toString(),
        },
      }),
      redirect:"follow"
    });

    if (!response.ok) {
      setError(response.statusText);
    } else {
      console.log('SUCCESS');
      alert(
        "Your payment was successful. Your order will soon be on your way. You can check its delivery status on your account's past orders."
      );
      Router.push('/');
    }

    // OTHER stripe methods you can use depending on app
    // // or createPaymentMethod - https://stripe.com/docs/js/payment_intents/create_payment_method
    // stripe.createPaymentMethod({
    //   type: "card",
    //   card: cardElement,
    // });

    // // or confirmCardPayment - https://stripe.com/docs/js/payment_intents/confirm_card_payment
    // stripe.confirmCardPayment(paymentIntentClientSecret, {
    //   payment_method: {
    //     card: cardElement,
    //   },
    // });
  }

  return (
    <div className="paper">
      <h5>Your order details:</h5>
      <hr />
      <div style={{ marginBottom: 40 }}>
        {appContext.cart.items.map((item) => (
          <div>
            <span>${item.price}</span>
            <span>&nbsp; {item.name}</span>
            <span>&nbsp; {item.quantity}x</span>
          </div>
        ))}
        <div className="font-weight-bold mt-2">
          {' '}
          Total: ${appContext.cart.total}
        </div>
      </div>
      <h5>Your information:</h5>
      <hr />
      <FormGroup style={{ display: 'flex' }}>
        <div style={{ flex: '0.90', marginRight: 10 }}>
          <Label>Address</Label>
          <Input name="address" onChange={onChange} />
        </div>
      </FormGroup>
      <FormGroup style={{ display: 'flex' }}>
        <div style={{ flex: '0.65', marginRight: '6%' }}>
          <Label>City</Label>
          <Input name="city" onChange={onChange} />
        </div>
        <div style={{ flex: '0.25', marginRight: 0 }}>
          <Label>State</Label>
          <Input name="state" onChange={onChange} />
        </div>
      </FormGroup>

      <CardSection data={data} stripeError={error} submitOrder={submitOrder} />

      <style jsx global>
        {`
          .paper {
            border: 1px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            padding: 30px;
            background: #fff;
            border-radius: 6px;
            margin-top: 30px;
          }
          .form-half {
            flex: 0.5;
          }
          * {
            box-sizing: border-box;
          }
          body,
          html {
            background-color: #f6f9fc;
            font-size: 18px;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          }
          h1 {
            color: #32325d;
            font-weight: 400;
            line-height: 50px;
            font-size: 40px;
            margin: 20px 0;
            padding: 0;
          }
          .Checkout {
            margin: 0 auto;
            max-width: 800px;
            box-sizing: border-box;
            padding: 0 5px;
          }
          label {
            color: #6b7c93;
            font-weight: 300;
            letter-spacing: 0.025em;
          }
          button.confirm-order {
            white-space: nowrap;
            border: 0;
            outline: 0;
            display: inline-block;
            height: 40px;
            line-height: 40px;
            padding: 0 14px;
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
            color: #fff;
            border-radius: 4px;
            font-size: 15px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.025em;
            background-color: #6772e5;
            text-decoration: none;
            -webkit-transition: all 150ms ease;
            transition: all 150ms ease;
            margin-top: 10px;
          }
          form {
            margin-bottom: 40px;
            padding-bottom: 40px;
            border-bottom: 3px solid #e6ebf1;
          }
          button:hover {
            color: #fff;
            cursor: pointer;
            background-color: #7795f8;
            transform: translateY(-1px);
            box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
              0 3px 6px rgba(0, 0, 0, 0.08);
          }
          input,
          .StripeElement {
            display: block;
            background-color: #f8f9fa !important;
            margin: 10px 0 20px 0;
            max-width: 500px;
            padding: 10px 14px;
            font-size: 1em;
            font-family: 'Source Code Pro', monospace;
            box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
              rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
            border: 0;
            outline: 0;
            border-radius: 4px;
            background: white;
          }
          input::placeholder {
            color: #aab7c4;
          }
          input:focus,
          .StripeElement--focus {
            box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
              rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
            -webkit-transition: all 150ms ease;
            transition: all 150ms ease;
          }
          .StripeElement.IdealBankElement,
          .StripeElement.PaymentRequestButton {
            padding: 0;
          }
        `}
      </style>
    </div>
  );
}
export default CheckoutForm;
