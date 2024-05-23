webpackHotUpdate_N_E("pages/[restaurantId]",{

/***/ "./components/RestaurantPage.js":
/*!**************************************!*\
  !*** ./components/RestaurantPage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _components_dishes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dishes */ "./components/dishes.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\gusta\\Documents\\Coding Bootcamp by MIT\\Module 29 - Full-Stack Restaurant App Part 2\\full-stack-restaurant-app_starter\\components\\RestaurantPage.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query($id: ID!) {\n    restaurant(id: $id) {\n      data {\n        id\n        attributes {\n          name\n          description\n          image {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          dishes {\n            data {\n              id\n              attributes {\n                name\n                description\n                price\n                image {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







function RestaurantPage(_ref) {
  _s();

  var restId = _ref.restId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      query = _useState[0],
      setQuery = _useState[1];

  var API_URL = "http://18.230.62.56:1337" || false;
  var GET_RESTAURANT_DATA = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(GET_RESTAURANT_DATA, {
    variables: {
      id: restId
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 23
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, "ERROR here");
  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, "Not found");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: "search m-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "d-flex",
    style: {
      justifyContent: 'space-between'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: API_URL + data.restaurant.data.attributes.image.data.attributes.url,
    style: {
      height: 50,
      width: 50,
      marginTop: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "mx-3 my-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "py-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, " ", data.restaurant.attributes.name))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("a", {
    style: {
      color: 'black',
      fontSize: 35,
      marginTop: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "bi-arrow-left-circle text-dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  })))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, data.restaurant.description), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
    className: "pt-3 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroupAddon"], {
    addonType: "append",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, " Search "), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    onChange: function onChange(e) {
      return setQuery(e.target.value.toLocaleLowerCase());
    },
    value: query,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  })), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  })), __jsx(_components_dishes__WEBPACK_IMPORTED_MODULE_1__["default"], {
    dishes: data.restaurant.dishes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }));
}

_s(RestaurantPage, "CIVw1Rizm0il/o8oET94xV40ARo=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"]];
});

_c = RestaurantPage;
/* harmony default export */ __webpack_exports__["default"] = (RestaurantPage);

var _c;

$RefreshReg$(_c, "RestaurantPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN0YXVyYW50UGFnZS5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50UGFnZSIsInJlc3RJZCIsInVzZVN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiR0VUX1JFU1RBVVJBTlRfREFUQSIsImdxbCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaWQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwianVzdGlmeUNvbnRlbnQiLCJyZXN0YXVyYW50IiwiYXR0cmlidXRlcyIsImltYWdlIiwidXJsIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJuYW1lIiwiY29sb3IiLCJmb250U2l6ZSIsImRlc2NyaXB0aW9uIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJkaXNoZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxPQUFvQztBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTs7QUFBQSxrQkFDUkMsc0RBQVEsQ0FBQyxFQUFELENBREE7QUFBQSxNQUMzQkMsS0FEMkI7QUFBQSxNQUNwQkMsUUFEb0I7O0FBR2xDLE1BQU1DLE9BQU8sR0FBR0MsMEJBQUEsSUFBbUMsS0FBbkQ7QUFFQSxNQUFNQyxtQkFBbUIsR0FBR0MsMERBQUgsbUJBQXpCOztBQUxrQyxrQkEyQ0RDLCtEQUFRLENBQUNGLG1CQUFELEVBQXNCO0FBQzdERyxhQUFTLEVBQUU7QUFBRUMsUUFBRSxFQUFFVjtBQUFOO0FBRGtELEdBQXRCLENBM0NQO0FBQUEsTUEyQzFCVyxPQTNDMEIsYUEyQzFCQSxPQTNDMEI7QUFBQSxNQTJDakJDLEtBM0NpQixhQTJDakJBLEtBM0NpQjtBQUFBLE1BMkNWQyxJQTNDVSxhQTJDVkEsSUEzQ1U7O0FBK0NsQyxN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InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tyZXN0YXVyYW50SWRdLjBkY2Q3YWU0OGY3M2JhZTYyMzc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlzaGVzIGZyb20gJy4uL2NvbXBvbmVudHMvZGlzaGVzJztcclxuaW1wb3J0IHsgSW5wdXRHcm91cCwgSW5wdXRHcm91cEFkZG9uLCBJbnB1dCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gUmVzdGF1cmFudFBhZ2UoeyByZXN0SWQgfSkge1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xyXG5cclxuICBjb25zdCBHRVRfUkVTVEFVUkFOVF9EQVRBID0gZ3FsYFxyXG4gIHF1ZXJ5KCRpZDogSUQhKSB7XHJcbiAgICByZXN0YXVyYW50KGlkOiAkaWQpIHtcclxuICAgICAgZGF0YSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBhdHRyaWJ1dGVzIHtcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xyXG4gICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXNoZXMge1xyXG4gICAgICAgICAgICBkYXRhIHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UX0RBVEEsIHtcclxuICAgIHZhcmlhYmxlczogeyBpZDogcmVzdElkIH0sXHJcbiAgfSk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RVJST1IgaGVyZTwvcD47XHJcbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoIG0tM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCIgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e0FQSV9VUkwgKyBkYXRhLnJlc3RhdXJhbnQuZGF0YS5hdHRyaWJ1dGVzLmltYWdlLmRhdGEuYXR0cmlidXRlcy51cmx9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA1MCwgd2lkdGg6IDUwLCBtYXJnaW5Ub3A6IDIwIH19XHJcbiAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0zIG15LTJcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHktM1wiPiB7ZGF0YS5yZXN0YXVyYW50LmF0dHJpYnV0ZXMubmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIGZvbnRTaXplOiAzNSwgbWFyZ2luVG9wOiAyMCB9fT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaS1hcnJvdy1sZWZ0LWNpcmNsZSB0ZXh0LWRhcmtcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PntkYXRhLnJlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPVwicHQtMyBwYi0yXCI+XHJcbiAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cImFwcGVuZFwiPiBTZWFyY2ggPC9JbnB1dEdyb3VwQWRkb24+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpKX1cclxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RGlzaGVzIGRpc2hlcz17ZGF0YS5yZXN0YXVyYW50LmRpc2hlc30+PC9EaXNoZXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==