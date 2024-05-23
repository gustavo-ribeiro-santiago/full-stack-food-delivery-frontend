import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { Button, Card, CardBody, CardTitle, Badge } from 'reactstrap';
import AppContext from './context';
import Link from 'next/link';
// we can pass cart data in via props method
// the alternative is using useContext as below
function Cart() {
  // let isAuthenticated = true;
  let { user, cart, addItem, removeItem, hideCart, setHideCart } =
    useContext(AppContext);
  console.log(`in CART: ${JSON.stringify(cart)}`);

  if (hideCart) {
    return null;
  }
  //   problem is that cart may not be set
  const router = useRouter();
  console.log(`Router Path: ${JSON.stringify(router)}`);
  const renderItems = () => {
    let { items } = cart;
    console.log(`cart component items: ${JSON.stringify(items)}`);
    if (items && items.length) {
      var itemList = cart.items.map((item) => {
        if (item.quantity > 0) {
          return (
            <div
              className="items-one"
              style={{ marginBottom: 15 }}
              key={item.id}
            >
              <div>
                <span id="item-price">&nbsp; ${item.attributes.price}</span>
                <span id="item-name">&nbsp; {item.attributes.name}</span>
              </div>
              <div>
                <Button
                  style={{
                    height: 25,
                    padding: 0,
                    width: 15,
                    marginRight: 5,
                    marginLeft: 10,
                  }}
                  onClick={() => addItem(item)}
                  color="link"
                >
                  +
                </Button>
                <Button
                  style={{
                    height: 25,
                    padding: 0,
                    width: 15,
                    marginRight: 10,
                  }}
                  onClick={() => removeItem(item)}
                  color="link"
                >
                  -
                </Button>
                <span style={{ marginLeft: 5 }} id="item-quantity">
                  {item.quantity}x
                </span>
              </div>
            </div>
          );
        }
      });
      return itemList;
    } else {
      return <div></div>;
    }
  };
  const checkoutItems = () => {
    return (
      <div>
        <Badge style={{ width: 200, padding: 10 }} color="light">
          <h5 style={{ fontWeight: 100, color: 'gray' }}>Total:</h5>
          <h3>${cart.total}</h3>
        </Badge>
        {user ? (
          <Link href="/checkout/" onClick={() => setHideCart(true)}>
            <Button style={{ width: '60%' }} color="dark">
              <a>Order</a>
            </Button>
          </Link>
        ) : (
          <Link href="/login/">
            <Button style={{ width: '60%' }} color="dark">
              <a>Sign in and Order</a>
            </Button>
          </Link>
        )}
      </div>
    );
  };

  // return Cart
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 5,
        right: 0,
        top: 0,
        height: '100vh',
        paddingTop: 60,
      }}
      className="bg-dark rounded"
    >
      <div>
        <button
          style={{
            cursor: 'pointer',
            border: 'none',
            fontSize: 20,
            float: 'right',
          }}
          className="bg-dark rounded"
          onClick={() => setHideCart(true)}
        >
          <i
            className="bi bi-arrow-right-circle text-white m-2"
            style={{ background: 'none' }}
          ></i>
        </button>
      </div>
      <div className="d-flex mt-3">
        <i
          className="bi bi-bag text-white ml-3 mt-1"
          style={{ fontSize: 22 }}
        ></i>
        <h4 className="text-white m-2"> Bag</h4>
      </div>
      <Card style={{ padding: '10px 5px' }} className="cart">
        <CardTitle style={{ margin: 10 }}>Your Order:</CardTitle>
        <hr />
        <CardBody style={{ padding: 10 }}>
          <div style={{ marginBottom: 6 }}>
            <small>Items:</small>
          </div>
          <div>{renderItems()}</div>
          <div>{checkoutItems()}</div>

          {console.log(`Router Path: ${router.asPath}`)}
        </CardBody>
      </Card>
      <style jsx>{`
        #item-price {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
        #item-quantity {
          font-size: 0.95em;
          padding-bottom: 4px;
          color: rgba(158, 158, 158, 1);
        }
        #item-name {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
      `}</style>
    </div>
  );
}
export default Cart;
