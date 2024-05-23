webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./pages/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "C:\\Users\\gusta\\Documents\\Coding Bootcamp by MIT\\Module 29 - Full-Stack Restaurant App Part 2\\full-stack-restaurant-app_starter\\pages\\_app.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function MyApp(props) {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      cart = _useContext.cart,
      addItem = _useContext.addItem,
      removeItem = _useContext.removeItem,
      user = _useContext.user,
      setUser = _useContext.setUser,
      hideCart = _useContext.hideCart,
      setHideCart = _useContext.setHideCart;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    cart: cart,
    hideCart: hideCart
  }),
      state = _useState[0],
      setState = _useState[1];

  var Component = props.Component,
      pageProps = props.pageProps;

  setUser = function setUser(user) {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      user: user
    }));
  };

  setHideCart = function setHideCart(hideCart) {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      hideCart: hideCart
    }));
  };

  addItem = function addItem(dish) {
    item = dish.attributes;
    console.log('cart additem');
    var items = state.cart.items; //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++

    var foundItem = true;

    if (items.length > 0) {
      foundItem = items.find(function (i) {
        return i.id === item.id;
      });
      if (!foundItem) foundItem = false;
    } else {
      foundItem = false;
    }

    console.log("Found Item value: ".concat(JSON.stringify(foundItem))); // if item is not new, add to cart, set quantity to 1

    if (!foundItem) {
      //set quantity property to 1
      var temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      var newCart = {
        items: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.cart.items), [temp]),
        total: state.cart.total + item.price
      };
      setState({
        cart: newCart
      });
      console.log("Total items: ".concat(JSON.stringify(newCart)));
    } else {
      // we already have it so just increase quantity ++
      console.log("Total so far:  ".concat(state.cart.total));
      newCart = {
        items: items.map(function (item) {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity + 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total + item.price
      };
    }

    setState(_objectSpread(_objectSpread({}, state), {}, {
      cart: newCart,
      hideCart: false
    })); // problem is this is not updated yet

    console.log("state reset to cart:".concat(JSON.stringify(state)));
  };

  removeItem = function removeItem(item) {
    var items = state.cart.items; //check for item already in cart

    var foundItem = items.find(function (i) {
      return i.id === item.id;
    });

    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map(function (item) {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity - 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total - item.price
      }; //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)
    } else {
      // only 1 in the cart so remove the whole item
      console.log("Try remove item ".concat(JSON.stringify(foundItem)));
      var index = items.findIndex(function (i) {
        return i.id === foundItem.id;
      });
      items.splice(index, 1);
      var newCart = {
        items: items,
        total: state.cart.total - item.price
      };
    }

    setState(_objectSpread(_objectSpread({}, state), {}, {
      cart: newCart
    }));
  };

  return __jsx(_components_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: {
      cart: state.cart,
      addItem: addItem,
      removeItem: removeItem,
      isAuthenticated: false,
      user: state.user,
      setUser: setUser,
      hideCart: state.hideCart,
      setHideCart: setHideCart
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }))));
}

_s(MyApp, "dLBPUyNlw3im/oAGp/mXvPyh/vQ=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJ1c2VyIiwic2V0VXNlciIsImhpZGVDYXJ0Iiwic2V0SGlkZUNhcnQiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkaXNoIiwiaXRlbSIsImF0dHJpYnV0ZXMiLCJjb25zb2xlIiwibG9nIiwiaXRlbXMiLCJmb3VuZEl0ZW0iLCJsZW5ndGgiLCJmaW5kIiwiaSIsImlkIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXAiLCJwYXJzZSIsInF1YW50aXR5IiwibmV3Q2FydCIsInRvdGFsIiwicHJpY2UiLCJtYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsImlzQXV0aGVudGljYXRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUEsb0JBRWxCQyx3REFBVSxDQUFDQywyREFBRCxDQUZRO0FBQUEsTUFDZEMsSUFEYyxlQUNkQSxJQURjO0FBQUEsTUFDUkMsT0FEUSxlQUNSQSxPQURRO0FBQUEsTUFDQ0MsVUFERCxlQUNDQSxVQUREO0FBQUEsTUFDYUMsSUFEYixlQUNhQSxJQURiO0FBQUEsTUFDbUJDLE9BRG5CLGVBQ21CQSxPQURuQjtBQUFBLE1BQzRCQyxRQUQ1QixlQUM0QkEsUUFENUI7QUFBQSxNQUNzQ0MsV0FEdEMsZUFDc0NBLFdBRHRDOztBQUFBLGtCQUdNQyxzREFBUSxDQUFDO0FBQUVQLFFBQUksRUFBRUEsSUFBUjtBQUFjSyxZQUFRLEVBQUVBO0FBQXhCLEdB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QSxLO0FBK0dNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQ4MmMzYTYxYzEwNjY3NDc5ODc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRleHQnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBDb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcblxuZnVuY3Rpb24gTXlBcHAocHJvcHMpIHtcbiAgdmFyIHsgY2FydCwgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgdXNlciwgc2V0VXNlciwgaGlkZUNhcnQsIHNldEhpZGVDYXJ0IH0gPVxuICAgIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyBjYXJ0OiBjYXJ0LCBoaWRlQ2FydDogaGlkZUNhcnQgfSk7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuXG4gIHNldFVzZXIgPSAodXNlcikgPT4ge1xuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIHVzZXIgfSk7XG4gIH07XG4gIHNldEhpZGVDYXJ0ID0gKGhpZGVDYXJ0KSA9PiB7XG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgaGlkZUNhcnQgfSk7XG4gIH07XG4gIGFkZEl0ZW0gPSAoZGlzaCkgPT4ge1xuICAgIGl0ZW0gPSBkaXNoLmF0dHJpYnV0ZXNcbiAgICBjb25zb2xlLmxvZygnY2FydCBhZGRpdGVtJyk7XG4gICAgbGV0IHsgaXRlbXMgfSA9IHN0YXRlLmNhcnQ7XG4gICAgLy9jaGVjayBmb3IgaXRlbSBhbHJlYWR5IGluIGNhcnRcbiAgICAvL2lmIG5vdCBpbiBjYXJ0LCBhZGQgaXRlbSBpZiBpdGVtIGlzIGZvdW5kIGluY3JlYXNlIHF1YW5pdHkgKytcbiAgICBsZXQgZm91bmRJdGVtID0gdHJ1ZTtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgZm91bmRJdGVtID0gaXRlbXMuZmluZCgoaSkgPT4gaS5pZCA9PT0gaXRlbS5pZCk7XG5cbiAgICAgIGlmICghZm91bmRJdGVtKSBmb3VuZEl0ZW0gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm91bmRJdGVtID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBGb3VuZCBJdGVtIHZhbHVlOiAke0pTT04uc3RyaW5naWZ5KGZvdW5kSXRlbSl9YCk7XG4gICAgLy8gaWYgaXRlbSBpcyBub3QgbmV3LCBhZGQgdG8gY2FydCwgc2V0IHF1YW50aXR5IHRvIDFcbiAgICBpZiAoIWZvdW5kSXRlbSkge1xuICAgICAgLy9zZXQgcXVhbnRpdHkgcHJvcGVydHkgdG8gMVxuXG4gICAgICBsZXQgdGVtcCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xuICAgICAgdGVtcC5xdWFudGl0eSA9IDE7XG4gICAgICB2YXIgbmV3Q2FydCA9IHtcbiAgICAgICAgaXRlbXM6IFsuLi5zdGF0ZS5jYXJ0Lml0ZW1zLCB0ZW1wXSxcbiAgICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgKyBpdGVtLnByaWNlLFxuICAgICAgfTtcbiAgICAgIHNldFN0YXRlKHsgY2FydDogbmV3Q2FydCB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBpdGVtczogJHtKU09OLnN0cmluZ2lmeShuZXdDYXJ0KX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2UgYWxyZWFkeSBoYXZlIGl0IHNvIGp1c3QgaW5jcmVhc2UgcXVhbnRpdHkgKytcbiAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBzbyBmYXI6ICAke3N0YXRlLmNhcnQudG90YWx9YCk7XG4gICAgICBuZXdDYXJ0ID0ge1xuICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGZvdW5kSXRlbS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHsgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgKyAxIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCArIGl0ZW0ucHJpY2UsXG4gICAgICB9O1xuICAgIH1cbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBjYXJ0OiBuZXdDYXJ0LCBoaWRlQ2FydDogZmFsc2UgfSk7IC8vIHByb2JsZW0gaXMgdGhpcyBpcyBub3QgdXBkYXRlZCB5ZXRcbiAgICBjb25zb2xlLmxvZyhgc3RhdGUgcmVzZXQgdG8gY2FydDoke0pTT04uc3RyaW5naWZ5KHN0YXRlKX1gKTtcbiAgfTtcbiAgcmVtb3ZlSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgbGV0IHsgaXRlbXMgfSA9IHN0YXRlLmNhcnQ7XG4gICAgLy9jaGVjayBmb3IgaXRlbSBhbHJlYWR5IGluIGNhcnRcbiAgICBjb25zdCBmb3VuZEl0ZW0gPSBpdGVtcy5maW5kKChpKSA9PiBpLmlkID09PSBpdGVtLmlkKTtcbiAgICBpZiAoZm91bmRJdGVtLnF1YW50aXR5ID4gMSkge1xuICAgICAgdmFyIG5ld0NhcnQgPSB7XG4gICAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gZm91bmRJdGVtLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgeyBxdWFudGl0eTogaXRlbS5xdWFudGl0eSAtIDEgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsIC0gaXRlbS5wcmljZSxcbiAgICAgIH07XG4gICAgICAvL2NvbnNvbGUubG9nKGBOZXdDYXJ0IGFmdGVyIHJlbW92ZTogJHtKU09OLnN0cmluZ2lmeShuZXdDYXJ0KX1gKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvbmx5IDEgaW4gdGhlIGNhcnQgc28gcmVtb3ZlIHRoZSB3aG9sZSBpdGVtXG4gICAgICBjb25zb2xlLmxvZyhgVHJ5IHJlbW92ZSBpdGVtICR7SlNPTi5zdHJpbmdpZnkoZm91bmRJdGVtKX1gKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KChpKSA9PiBpLmlkID09PSBmb3VuZEl0ZW0uaWQpO1xuICAgICAgaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHZhciBuZXdDYXJ0ID0geyBpdGVtczogaXRlbXMsIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsIC0gaXRlbS5wcmljZSB9O1xuICAgIH1cbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBjYXJ0OiBuZXdDYXJ0IH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGNhcnQ6IHN0YXRlLmNhcnQsXG4gICAgICAgIGFkZEl0ZW06IGFkZEl0ZW0sXG4gICAgICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0sXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgICAgIHVzZXI6IHN0YXRlLnVzZXIsXG4gICAgICAgIHNldFVzZXI6IHNldFVzZXIsXG4gICAgICAgIGhpZGVDYXJ0OiBzdGF0ZS5oaWRlQ2FydCxcbiAgICAgICAgc2V0SGlkZUNhcnQ6IHNldEhpZGVDYXJ0LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtR241Mzg0eHFRMWFvV1hBKzA1OFJYUHhQZzZmeTRJV3ZUTmgwRTI2M1htRmNKbFNBd2lHZ0ZBVy9kQWlTNkpYbVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==