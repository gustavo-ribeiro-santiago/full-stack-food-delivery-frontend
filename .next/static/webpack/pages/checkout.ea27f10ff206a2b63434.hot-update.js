webpackHotUpdate_N_E("pages/checkout",{

/***/ "./components/cardSection.js":
false,

/***/ "./components/checkoutForm.js":
/*!************************************!*\
  !*** ./components/checkoutForm.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
false,

/***/ "./node_modules/js-cookie/src/js.cookie.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js":
false,

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_checkoutForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/checkoutForm */ "./components/checkoutForm.js");
/* harmony import */ var _components_checkoutForm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_checkoutForm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/cart */ "./components/cart.js");
var _jsxFileName = "C:\\Users\\gusta\\Documents\\Coding Bootcamp by MIT\\Module 29 - Full-Stack Restaurant App Part 2\\full-stack-restaurant-app_starter\\pages\\checkout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* pages/checkout.js */








function Checkout() {
  _s();

  // get app context
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      isAuthenticated = _useContext.isAuthenticated,
      setHideCart = _useContext.setHideCart; // isAuthenticated is passed to the cart component to display order button
  //const isAuthenticated  = true;
  // load stripe to inject into elements components


  var stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__["loadStripe"])('pk_test_51PEzjiBDFGfdPs6Dodya6lb6BeSoU5pMLOVmopsPdoSNrLdQ1Btj0sw3zKYtXrbcewElRLIVbYJOQVHGFzYJNBZ800PmArEDcK');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return setHideCart(true);
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("h1", {
    style: {
      margin: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "Checkout"), __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__["Elements"], {
    stripe: stripePromise,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_components_checkoutForm__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })));
}

_s(Checkout, "uU6VJa5rxh4SoBcx3fhr2m1aXNg=");

_c = Checkout;
/* harmony default export */ __webpack_exports__["default"] = (Checkout);

var _c;

$RefreshReg$(_c, "Checkout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hlY2tvdXQuanMiXSwibmFtZXMiOlsiQ2hlY2tvdXQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsInNldEhpZGVDYXJ0Iiwic3RyaXBlUHJvbWlzZSIsImxvYWRTdHJpcGUiLCJ1c2VFZmZlY3QiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFDbEI7QUFEa0Isb0JBRXVCQyx3REFBVSxDQUFDQywyREFBRCxDQUZqQztBQUFBLE1BRVZDLGVBRlUsZUFFVkEsZUFGVTtBQUFBLE1BRU9DLFdBRlAsZUFFT0EsV0FGUCxFQUdsQjtBQUNBO0FBRUE7OztBQUNBLE1BQU1DLGFBQWEsR0FBR0Msb0VBQVUsQ0FDOUIsNkdBRDhCLENBQWhDO0FBSUFDLHlEQUFTLENBQUU7QUFBQSxXQUFNSCxXQUFXLENBQUMsSUFBRCxDQUFqQjtBQUFBLEdBQUYsRUFBMkIsRUFBM0IsQ0FBVDtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksU0FBSyxFQUFFO0FBQUVJLFlBQU0sRUFBRTtBQUFWLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUdFLE1BQUMsZ0VBQUQ7QUFBVSxVQUFNLEVBQUVILGFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUhGLENBREY7QUFTRDs7R0F0QlFMLFE7O0tBQUFBLFE7QUF3Qk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LmVhMjdmMTBmZjIwNmEyYjYzNDM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBwYWdlcy9jaGVja291dC5qcyAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcyc7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gJ0BzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzJztcbmltcG9ydCBDaGVja291dEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9jaGVja291dEZvcm0nO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZXh0JztcbmltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvY2FydCc7XG5cbmZ1bmN0aW9uIENoZWNrb3V0KCkge1xuICAvLyBnZXQgYXBwIGNvbnRleHRcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIHNldEhpZGVDYXJ0IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICAvLyBpc0F1dGhlbnRpY2F0ZWQgaXMgcGFzc2VkIHRvIHRoZSBjYXJ0IGNvbXBvbmVudCB0byBkaXNwbGF5IG9yZGVyIGJ1dHRvblxuICAvL2NvbnN0IGlzQXV0aGVudGljYXRlZCAgPSB0cnVlO1xuXG4gIC8vIGxvYWQgc3RyaXBlIHRvIGluamVjdCBpbnRvIGVsZW1lbnRzIGNvbXBvbmVudHNcbiAgY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUoXG4gICAgJ3BrX3Rlc3RfNTFQRXpqaUJERkdmZFBzNkRvZHlhNmxiNkJlU29VNXBNTE9WbW9wc1Bkb1NOckxkUTFCdGowc3czektZdFhyYmNld0VsUkxJVmJZSk9RVkhHRnpZSk5CWjgwMFBtQXJFRGNLJ1xuICApO1xuXG4gIHVzZUVmZmVjdCggKCkgPT4gc2V0SGlkZUNhcnQodHJ1ZSksIFtdKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW46IDIwIH19PkNoZWNrb3V0PC9oMT5cblxuICAgICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlUHJvbWlzZX0+XG4gICAgICAgIDxDaGVja291dEZvcm0gLz5cbiAgICAgIDwvRWxlbWVudHM+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==