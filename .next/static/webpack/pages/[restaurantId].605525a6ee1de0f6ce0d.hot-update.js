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
  console.log(JSON.stringify(data));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: "search m-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 65,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "mx-3 my-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "py-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, " ", data.restaurant.data.attributes.name))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "bi-arrow-left-circle text-dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  })))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, data.restaurant.data.attributes.description), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
    className: "pt-3 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroupAddon"], {
    addonType: "append",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 82,
      columnNumber: 11
    }
  })), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  })), __jsx(_components_dishes__WEBPACK_IMPORTED_MODULE_1__["default"], {
    dishes: data.restaurant.data.attributes.dishes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN0YXVyYW50UGFnZS5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50UGFnZSIsInJlc3RJZCIsInVzZVN0YXRlIiwicXVlcnkiLCJzZXRRdWVyeSIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiR0VUX1JFU1RBVVJBTlRfREFUQSIsImdxbCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaWQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJqdXN0aWZ5Q29udGVudCIsInJlc3RhdXJhbnQiLCJhdHRyaWJ1dGVzIiwiaW1hZ2UiLCJ1cmwiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm5hbWUiLCJjb2xvciIsImZvbnRTaXplIiwiZGVzY3JpcHRpb24iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImRpc2hlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULE9BQW9DO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUFBLGtCQUNSQyxzREFBUSxDQUFDLEVBQUQsQ0FEQTtBQUFBLE1BQzNCQyxLQUQyQjtBQUFBLE1BQ3BCQyxRQURvQjs7QUFHbEMsTUFBTUMsT0FBTyxHQUFHQywwQkFBQSxJQUFtQyxLQUFuRDtBQUVBLE1BQU1DLG1CQUFtQixHQUFHQywwREFBSCxtQkFBekI7O0FBTGtDLGtCQTJDREMsK0RBQVEsQ0FBQ0YsbUJBQUQsRUFBc0I7QUFDN0RHLGFBQVMsRUFBRTtBQUFFQyxRQUFFLEVBQUVWO0FBQU47QUFEa0QsR0FBdEIsQ0EzQ1A7QUFBQSxNQTJDMUJXLE9BM0MwQixhQTJDMUJBLE9BM0MwQjtBQUFBLE1BMkNqQkMsS0EzQ2lCLGFBMkNqQkEsS0EzQ2lCO0FBQUEs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QUksQ0FBQ00sVUFBTCxDQUFnQk4sSUFBaEIsQ0FBcUJPLFVBQXJCLENBQWdDYyxNQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUJGLENBREY7QUFnQ0Q7O0dBckZRbkMsYztVQTJDMEJTLHVEOzs7S0EzQzFCVCxjO0FBdUZNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bcmVzdGF1cmFudElkXS42MDU1MjVhNmVlMWRlMGY2Y2UwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpc2hlcyBmcm9tICcuLi9jb21wb25lbnRzL2Rpc2hlcyc7XHJcbmltcG9ydCB7IElucHV0R3JvdXAsIElucHV0R3JvdXBBZGRvbiwgSW5wdXQgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmZ1bmN0aW9uIFJlc3RhdXJhbnRQYWdlKHsgcmVzdElkIH0pIHtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjtcclxuXHJcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRfREFUQSA9IGdxbGBcclxuICBxdWVyeSgkaWQ6IElEISkge1xyXG4gICAgcmVzdGF1cmFudChpZDogJGlkKSB7XHJcbiAgICAgIGRhdGEge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgYXR0cmlidXRlcyB7XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICBkYXRhIHtcclxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzIHtcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGlzaGVzIHtcclxuICAgICAgICAgICAgZGF0YSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzIHtcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBgO1xyXG5cclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVF9EQVRBLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQ6IHJlc3RJZCB9LFxyXG4gIH0pO1xyXG5cclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVSUk9SIGhlcmU8L3A+O1xyXG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XHJcblxyXG4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2ggbS0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17QVBJX1VSTCArIGRhdGEucmVzdGF1cmFudC5kYXRhLmF0dHJpYnV0ZXMuaW1hZ2UuZGF0YS5hdHRyaWJ1dGVzLnVybH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCB3aWR0aDogNTAsIG1hcmdpblRvcDogMjAgfX1cclxuICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTMgbXktMlwiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJweS0zXCI+IHtkYXRhLnJlc3RhdXJhbnQuZGF0YS5hdHRyaWJ1dGVzLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBmb250U2l6ZTogMzUsIG1hcmdpblRvcDogMjAgfX0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmktYXJyb3ctbGVmdC1jaXJjbGUgdGV4dC1kYXJrXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj57ZGF0YS5yZXN0YXVyYW50LmRhdGEuYXR0cmlidXRlcy5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICA8SW5wdXRHcm91cCBjbGFzc05hbWU9XCJwdC0zIHBiLTJcIj5cclxuICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwiYXBwZW5kXCI+IFNlYXJjaCA8L0lucHV0R3JvdXBBZGRvbj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkpfVxyXG4gICAgICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxEaXNoZXMgZGlzaGVzPXtkYXRhLnJlc3RhdXJhbnQuZGF0YS5hdHRyaWJ1dGVzLmRpc2hlc30+PC9EaXNoZXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==