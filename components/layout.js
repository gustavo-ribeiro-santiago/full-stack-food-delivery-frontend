/* /components/Layout.js */

import React, { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Nav, NavItem, Button } from 'reactstrap';
import AppContext from './context';
import Cart from './cart';

const Layout = (props) => {
  const title = 'Rocket Food Delivery';
  const { user, cart, hideCart, setHideCart } = useContext(AppContext);
  console.log('user', user);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        ></link>
        <script src="https://js.stripe.com/v3" />
      </Head>
      <header style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <style jsx>
          {`
            a {
              color: white;
            }
            h5 {
              color: white;
              padding-top: 11px;
            }
          `}
        </style>
        <Nav className="navbar navbar-dark bg-dark">
          <NavItem>
            <Link legacyBehavior href="/">
              <a className="navbar-brand">
                <i className="bi bi-rocket-takeoff pl-2 pr-3"></i>
                Rocket Food Delivery
              </a>
            </Link>
          </NavItem>
          <NavItem className="ml-auto">
            <Link legacyBehavior href="/">
              <a className="nav-link bg-dark rounded">Home</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link legacyBehavior href="/">
              <a className="nav-link bg-dark rounded">About</a>
            </Link>
          </NavItem>
          <NavItem>
            {user ? (
              <div className="p-2 mx-2 text-white border bg-dark rounded">
                <i className="bi bi-person-circle pr-2"></i>
                {user.username}
              </div>
            ) : (
              <Link legacyBehavior href="/register">
                <a className="nav-link bg-dark rounded"> Sign up</a>
              </Link>
            )}
          </NavItem>
          <NavItem>
            {user ? (
              <Link legacyBehavior href="/">
                <a
                  className="nav-link bg-dark rounded"
                  onClick={() => {
                    logout();
                    setUser(null);
                  }}
                >
                  Logout
                </a>
              </Link>
            ) : (
              <Link legacyBehavior href="/login">
                <a className="nav-link bg-dark rounded">Sign in</a>
              </Link>
            )}
          </NavItem>
          {cart.items.length ? (
            <NavItem>
              <button
                onClick={() => setHideCart(false)}
                className="nav-link bg-dark text-white border-0 rounded"
                style={{ cursor: 'pointer' }}
              >
                <a>Bag</a>
              </button>
            </NavItem>
          ) : (
            ''
          )}
        </Nav>
      </header>
      <Cart></Cart>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
