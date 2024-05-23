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

  addItem = function addItem(item) {
    //dish.attributes.price
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
        total: state.cart.total + item.attributes.price
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
        total: state.cart.total + item.attributes.price
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
        total: state.cart.total - item.attributes.price
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
        total: state.cart.total - item.attributes.price
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJ1c2VyIiwic2V0VXNlciIsImhpZGVDYXJ0Iiwic2V0SGlkZUNhcnQiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsIml0ZW1zIiwiZm91bmRJdGVtIiwibGVuZ3RoIiwiZmluZCIsImkiLCJpZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZW1wIiwicGFyc2UiLCJxdWFudGl0eSIsIm5ld0NhcnQiLCJ0b3RhbCIsImF0dHJpYnV0ZXMiLCJwcmljZSIsIm1hcCIsIk9iamVjdCIsImFzc2lnbiIsImluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwiaXNBdXRoZW50aWNhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQSxvQkFFbEJDLHdEQUFVLENBQUNDLDJEQUFELENBRlE7QUFBQSxNQUNkQyxJQURjLGVBQ2RBLElBRGM7QUFBQSxNQUNSQyxPQURRLGVBQ1JBLE9BRFE7QUFBQSxNQUNDQyxVQURELGVBQ0NBLFVBREQ7QUFBQSxNQUNhQyxJQURiLGVBQ2FBLElBRGI7QUFBQSxNQUNtQkMsT0FEbkIsZUFDbUJBLE9BRG5CO0FBQUEsTUFDNEJDLFFBRDVCLGVBQzRCQSxRQUQ1QjtBQUFBLE1BQ3NDQyxXQUR0QyxlQUNzQ0EsV0FEdEM7O0FBQUEsa0JBR01DLHNEQUFRLENBQUM7QUFBRVAsUUFBSSxFQUFFQSxJQUFSO0FBQWNLLFlBQVEsRUFBRUE7QUFBeEIsR0FBRCxDQUhkO0FBQUEsTUFHYkcsS0FIYTtBQUFBLE1BR05DLFFBSE07O0FBQUEsTUFJWkMsU0FKWSxHQUlhYixLQUpiLENBSVphLFNBSlk7QUFBQSxNQUlEQyxTQUpDLEdBSWFkLEtBSmIsQ0FJRGMsU0FKQzs7QUFNcEJQLFNBQU8sR0FBRyxpQkFBQ0QsSUFBRCxFQUFVO0FBQ2xCTSxZQUFRLGlDQUFNRCxLQUFOO0FBQWFMLFVBQUksRUFBSkE7QUFBYixPQUFSO0FBQ0QsR0FGRDs7QUFHQUcsYUFBVyxHQUFHLHFCQUFDRCxRQUFELEVBQWM7QUFDMUJJLFlBQVEsaUNBQU1ELEtBQU47QUFBYUgsY0FBUSxFQUFSQTtBQUFiLE9BQVI7QUFDRCxHQUZEOztBQUdBSixTQUFPLEdBQUcsaUJBQUNXLElBQUQsRUFBVTtBQUNsQjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBRmtCLFFBR1pDLEtBSFksR0FHRlAsS0FBSyxDQUFDUixJQUhKLENBR1plLEtBSFksRUFJbEI7QUFDQTs7QUFDQSxRQUFJQyxTQUFTLEdBQUcsSUFBaEI7O0FBQ0EsUUFBSUQsS0FBSyxDQUFDRSxNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7QUFDcEJELGVBQVMsR0FBR0QsS0FBSyxDQUFDRyxJQUFOLENBQVcsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTUixJQUFJLENBQUNRLEVBQXJCO0FBQUEsT0FBWCxDQUFaO0FBRUEsVUFBSSxDQUFDSixTQUFMLEVBQWdCQSxTQUFTLEdBQUcsS0FBWjtBQUNqQixLQUpELE1BSU87QUFDTEEsZUFBUyxHQUFHLEtBQVo7QUFDRDs7QUFDREgsV0FBTyxDQUFDQyxHQUFSLDZCQUFpQ08sSUFBSSxDQUFDQyxTQUFMLENBQWVOLFNBQWYsQ0FBakMsR0Fka0IsQ0FlbEI7O0FBQ0EsUUFBSSxDQUFDQSxTQUFMLEVBQWdCO0FBQ2Q7QUFFQSxVQUFJTyxJQUFJLEdBQUdGLElBQUksQ0FBQ0csS0FBTCxDQUFXSCxJQUFJLENBQUNDLFNBQUwsQ0FBZVYsSUFBZixDQUFYLENBQVg7QUFDQVcsVUFBSSxDQUFDRSxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsVUFBSUMsT0FBTyxHQUFHO0FBQ1pYLGFBQUsseUdBQU1QLEtBQUssQ0FBQ1IsSUFBTixDQUFXZSxLQUFqQixJQUF3QlEsSUFBeEIsRUFETztBQUVaSSxhQUFLLEVBQUVuQixLQUFLLENBQUNSLElBQU4sQ0FBVzJCLEtBQVgsR0FBbUJmLElBQUksQ0FBQ2dCLFVBQUwsQ0FBZ0JDO0FBRjlCLE9BQWQ7QUFJQXBCLGNBQVEsQ0FBQztBQUFFVCxZQUFJLEVBQUUwQjtBQUFSLE9BQUQsQ0FBUjtBQUNBYixhQUFPLENBQUNDLEdBQVIsd0JBQTRCTyxJQUFJLENBQUNDLFNBQUwsQ0FBZUksT0FBZixDQUE1QjtBQUNELEtBWEQsTUFXTztBQUNMO0FBQ0FiLGFBQU8sQ0FBQ0MsR0FBUiwwQkFBOEJOLEtBQUssQ0FBQ1IsSUFBTixDQUFXMkIsS0FBekM7QUFDQUQsYUFBTyxHQUFHO0FBQ1JYLGFBQUssRUFBRUEsS0FBSyxDQUFDZSxHQUFOLENBQVUsVUFBQ2xCLElBQUQsRUFBVTtBQUN6QixjQUFJQSxJQUFJLENBQUNRLEVBQUwsS0FBWUosU0FBUyxDQUFDSSxFQUExQixFQUE4QjtBQUM1QixtQkFBT1csTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQnBCLElBQWxCLEVBQXdCO0FBQUVhLHNCQUFRLEVBQUViLElBQUksQ0FBQ2EsUUFBTCxHQUFnQjtBQUE1QixhQUF4QixDQUFQO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsbUJBQU9iLElBQVA7QUFDRDtBQUNGLFNBTk0sQ0FEQztBQVFSZSxhQUFLLEVBQUVuQixLQUFLLENBQUNSLElBQU4sQ0FBVzJCLEtBQVgsR0FBbUJmLElBQUksQ0FBQ2dCLFVBQUwsQ0FBZ0JDO0FBUmxDLE9BQVY7QUFVRDs7QUFDRHBCLFlBQVEsaUNBQU1ELEtBQU47QUFBYVIsVUFBSSxFQUFFMEIsT0FBbkI7QUFBNEJyQixjQUFRLEVBQUU7QUFBdEMsT0FBUixDQXpDa0IsQ0F5Q3NDOztBQUN4RFEsV0FBTyxDQUFDQyxHQUFSLCtCQUFtQ08sSUFBSSxDQUFDQyxTQUFMLENBQWVkLEtBQWYsQ0FBbkM7QUFDRCxHQTNDRDs7QUE0Q0FOLFlBQVUsR0FBRyxvQkFBQ1UsSUFBRCxFQUFVO0FBQUEsUUFDZkcsS0FEZSxHQUNMUCxLQUFLLENBQUNSLElBREQsQ0FDZmUsS0FEZSxFQUVyQjs7QUFDQSxRQUFNQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0csSUFBTixDQUFXLFVBQUNDLENBQUQ7QUFBQSxhQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBU1IsSUFBSSxDQUFDUSxFQUFyQjtBQUFBLEtBQVgsQ0FBbEI7O0FBQ0EsUUFBSUosU0FBUyxDQUFDUyxRQUFWLEdBQXFCLENBQXpCLEVBQTRCO0FBQzFCLFVBQUlDLE9BQU8sR0FBRztBQUNaWCxhQUFLLEVBQUVBLEtBQUssQ0FBQ2UsR0FBTixDQUFVLFVBQUNsQixJQUFELEVBQVU7QUFDekIsY0FBSUEsSUFBSSxDQUFDUSxFQUFMLEtBQVlKLFNBQVMsQ0FBQ0ksRUFBMUIsRUFBOEI7QUFDNUIsbUJBQU9XLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JwQixJQUFsQixFQUF3QjtBQUFFYSxzQkFBUSxFQUFFYixJQUFJLENBQUNhLFFBQUwsR0FBZ0I7QUFBNUIsYUFBeEIsQ0FBUDtBQUNELFdBRkQsTUFFTztBQUNMLG1CQUFPYixJQUFQO0FBQ0Q7QUFDRixTQU5NLENBREs7QUFRWmUsYUFBSyxFQUFFbkIsS0FBSyxDQUFDUixJQUFOLENBQVcyQixLQUFYLEdBQW1CZixJQUFJLENBQUNnQixVQUFMLENBQWdCQztBQVI5QixPQUFkLENBRDBCLENBVzFCO0FBQ0QsS0FaRCxNQVlPO0FBQ0w7QUFDQWhCLGFBQU8sQ0FBQ0MsR0FBUiwyQkFBK0JPLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixTQUFmLENBQS9CO0FBQ0EsVUFBTWlCLEtBQUssR0FBR2xCLEtBQUssQ0FBQ21CLFNBQU4sQ0FBZ0IsVUFBQ2YsQ0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTSixTQUFTLENBQUNJLEVBQTFCO0FBQUEsT0FBaEIsQ0FBZDtBQUNBTCxXQUFLLENBQUNvQixNQUFOLENBQWFGLEtBQWIsRUFBb0IsQ0FBcEI7QUFDQSxVQUFJUCxPQUFPLEdBQUc7QUFBRVgsYUFBSyxFQUFFQSxLQUFUO0FBQWdCWSxhQUFLLEVBQUVuQixLQUFLLENBQUNSLElBQU4sQ0FBVzJCLEtBQVgsR0FBbUJmLElBQUksQ0FBQ2dCLFVBQUwsQ0FBZ0JDO0FBQTFELE9BQWQ7QUFDRDs7QUFDRHBCLFlBQVEsaUNBQU1ELEtBQU47QUFBYVIsVUFBSSxFQUFFMEI7QUFBbkIsT0FBUjtBQUNELEdBeEJEOztBQTBCQSxTQUNFLE1BQUMsMkRBQUQsQ0FBWSxRQUFaO0FBQ0UsU0FBSyxFQUFFO0FBQ0wxQixVQUFJLEVBQUVRLEtBQUssQ0FBQ1IsSUFEUDtBQUVMQyxhQUFPLEVBQUVBLE9BRko7QUFHTEMsZ0JBQVUsRUFBRUEsVUFIUDtBQUlMa0MscUJBQWUsRUFBRSxLQUpaO0FBS0xqQyxVQUFJLEVBQUVLLEtBQUssQ0FBQ0wsSUFMUDtBQU1MQyxhQUFPLEVBQUVBLE9BTko7QUFPTEMsY0FBUSxFQUFFRyxLQUFLLENBQUNILFFBUFg7QUFRTEMsaUJBQVcsRUFBRUE7QUFSUixLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyxZQUROO0FBRUUsUUFBSSxFQUFDLHVFQUZQO0FBR0UsYUFBUyxFQUFDLHlFQUhaO0FBSUUsZUFBVyxFQUFDLFdBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWkYsRUFxQkUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELHlGQUFlSyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQXJCRixDQURGO0FBMkJEOztHQTdHUWYsSzs7S0FBQUEsSztBQStHTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yOGY2YjU3NGIxYjM2ZjY5OTZkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZXh0JztcbmltcG9ydCBIb21lIGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgQ29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5cbmZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XG4gIHZhciB7IGNhcnQsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0sIHVzZXIsIHNldFVzZXIsIGhpZGVDYXJ0LCBzZXRIaWRlQ2FydCB9ID1cbiAgICB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHsgY2FydDogY2FydCwgaGlkZUNhcnQ6IGhpZGVDYXJ0IH0pO1xuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcblxuICBzZXRVc2VyID0gKHVzZXIpID0+IHtcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCB1c2VyIH0pO1xuICB9O1xuICBzZXRIaWRlQ2FydCA9IChoaWRlQ2FydCkgPT4ge1xuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGhpZGVDYXJ0IH0pO1xuICB9O1xuICBhZGRJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAvL2Rpc2guYXR0cmlidXRlcy5wcmljZVxuICAgIGNvbnNvbGUubG9nKCdjYXJ0IGFkZGl0ZW0nKTtcbiAgICBsZXQgeyBpdGVtcyB9ID0gc3RhdGUuY2FydDtcbiAgICAvL2NoZWNrIGZvciBpdGVtIGFscmVhZHkgaW4gY2FydFxuICAgIC8vaWYgbm90IGluIGNhcnQsIGFkZCBpdGVtIGlmIGl0ZW0gaXMgZm91bmQgaW5jcmVhc2UgcXVhbml0eSArK1xuICAgIGxldCBmb3VuZEl0ZW0gPSB0cnVlO1xuICAgIGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3VuZEl0ZW0gPSBpdGVtcy5maW5kKChpKSA9PiBpLmlkID09PSBpdGVtLmlkKTtcblxuICAgICAgaWYgKCFmb3VuZEl0ZW0pIGZvdW5kSXRlbSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3VuZEl0ZW0gPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYEZvdW5kIEl0ZW0gdmFsdWU6ICR7SlNPTi5zdHJpbmdpZnkoZm91bmRJdGVtKX1gKTtcbiAgICAvLyBpZiBpdGVtIGlzIG5vdCBuZXcsIGFkZCB0byBjYXJ0LCBzZXQgcXVhbnRpdHkgdG8gMVxuICAgIGlmICghZm91bmRJdGVtKSB7XG4gICAgICAvL3NldCBxdWFudGl0eSBwcm9wZXJ0eSB0byAxXG5cbiAgICAgIGxldCB0ZW1wID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpdGVtKSk7XG4gICAgICB0ZW1wLnF1YW50aXR5ID0gMTtcbiAgICAgIHZhciBuZXdDYXJ0ID0ge1xuICAgICAgICBpdGVtczogWy4uLnN0YXRlLmNhcnQuaXRlbXMsIHRlbXBdLFxuICAgICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCArIGl0ZW0uYXR0cmlidXRlcy5wcmljZSxcbiAgICAgIH07XG4gICAgICBzZXRTdGF0ZSh7IGNhcnQ6IG5ld0NhcnQgfSk7XG4gICAgICBjb25zb2xlLmxvZyhgVG90YWwgaXRlbXM6ICR7SlNPTi5zdHJpbmdpZnkobmV3Q2FydCl9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHdlIGFscmVhZHkgaGF2ZSBpdCBzbyBqdXN0IGluY3JlYXNlIHF1YW50aXR5ICsrXG4gICAgICBjb25zb2xlLmxvZyhgVG90YWwgc28gZmFyOiAgJHtzdGF0ZS5jYXJ0LnRvdGFsfWApO1xuICAgICAgbmV3Q2FydCA9IHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmlkID09PSBmb3VuZEl0ZW0uaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7IHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgMSB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgKyBpdGVtLmF0dHJpYnV0ZXMucHJpY2UsXG4gICAgICB9O1xuICAgIH1cbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBjYXJ0OiBuZXdDYXJ0LCBoaWRlQ2FydDogZmFsc2UgfSk7IC8vIHByb2JsZW0gaXMgdGhpcyBpcyBub3QgdXBkYXRlZCB5ZXRcbiAgICBjb25zb2xlLmxvZyhgc3RhdGUgcmVzZXQgdG8gY2FydDoke0pTT04uc3RyaW5naWZ5KHN0YXRlKX1gKTtcbiAgfTtcbiAgcmVtb3ZlSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgbGV0IHsgaXRlbXMgfSA9IHN0YXRlLmNhcnQ7XG4gICAgLy9jaGVjayBmb3IgaXRlbSBhbHJlYWR5IGluIGNhcnRcbiAgICBjb25zdCBmb3VuZEl0ZW0gPSBpdGVtcy5maW5kKChpKSA9PiBpLmlkID09PSBpdGVtLmlkKTtcbiAgICBpZiAoZm91bmRJdGVtLnF1YW50aXR5ID4gMSkge1xuICAgICAgdmFyIG5ld0NhcnQgPSB7XG4gICAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gZm91bmRJdGVtLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgeyBxdWFudGl0eTogaXRlbS5xdWFudGl0eSAtIDEgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsIC0gaXRlbS5hdHRyaWJ1dGVzLnByaWNlLFxuICAgICAgfTtcbiAgICAgIC8vY29uc29sZS5sb2coYE5ld0NhcnQgYWZ0ZXIgcmVtb3ZlOiAke0pTT04uc3RyaW5naWZ5KG5ld0NhcnQpfWApXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG9ubHkgMSBpbiB0aGUgY2FydCBzbyByZW1vdmUgdGhlIHdob2xlIGl0ZW1cbiAgICAgIGNvbnNvbGUubG9nKGBUcnkgcmVtb3ZlIGl0ZW0gJHtKU09OLnN0cmluZ2lmeShmb3VuZEl0ZW0pfWApO1xuICAgICAgY29uc3QgaW5kZXggPSBpdGVtcy5maW5kSW5kZXgoKGkpID0+IGkuaWQgPT09IGZvdW5kSXRlbS5pZCk7XG4gICAgICBpdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdmFyIG5ld0NhcnQgPSB7IGl0ZW1zOiBpdGVtcywgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgLSBpdGVtLmF0dHJpYnV0ZXMucHJpY2UgfTtcbiAgICB9XG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgY2FydDogbmV3Q2FydCB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjYXJ0OiBzdGF0ZS5jYXJ0LFxuICAgICAgICBhZGRJdGVtOiBhZGRJdGVtLFxuICAgICAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICAgICAgICB1c2VyOiBzdGF0ZS51c2VyLFxuICAgICAgICBzZXRVc2VyOiBzZXRVc2VyLFxuICAgICAgICBoaWRlQ2FydDogc3RhdGUuaGlkZUNhcnQsXG4gICAgICAgIHNldEhpZGVDYXJ0OiBzZXRIaWRlQ2FydCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUduNTM4NHhxUTFhb1dYQSswNThSWFB4UGc2Znk0SVd2VE5oMEUyNjNYbUZjSmxTQXdpR2dGQVcvZEFpUzZKWG1cIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPExheW91dD5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=