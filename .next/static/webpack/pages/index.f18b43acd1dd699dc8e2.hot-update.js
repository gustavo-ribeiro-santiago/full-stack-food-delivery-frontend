webpackHotUpdate_N_E("pages/index",{

/***/ "./components/restaurantList.js":
/*!**************************************!*\
  !*** ./components/restaurantList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _dishes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dishes */ "./components/dishes.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _jsxFileName = "C:\\Users\\gusta\\Documents\\Coding Bootcamp by MIT\\Module 29 - Full-Stack Restaurant App Part 2\\full-stack-restaurant-app_starter\\components\\restaurantList.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    restaurants {\n      data {\n        id\n        attributes {\n          name\n          description\n          image {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








function RestaurantList(props) {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      cart = _useContext.cart;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(cart),
      state = _useState[0],
      setState = _useState[1];

  var GET_RESTAURANTS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_RESTAURANTS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 23
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, "ERROR");
  console.log("Query Data: ".concat(data));
  if (data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 20
    }
  }, "Not found");
  var searchQuery = data.restaurants.filter(function (res) {
    return res.name.toLowerCase().includes(props.search);
  });
  var restId = searchQuery[0].id; // definet renderer for Dishes

  var renderDishes = function renderDishes(restaurantID) {
    return __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      restId: restaurantID,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 12
      }
    }, " ");
  };

  if (searchQuery.length > 0) {
    var restList = searchQuery.map(function (res) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        key: res.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        style: {
          width: 300,
          height: 540,
          marginBottom: 40
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
        top: true,
        style: {
          height: 300,
          width: 300
        },
        src: "http://localhost:1337" + res.image.url,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
        className: "font-weight-bold",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      }, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }
      }, res.description)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/".concat(res.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "dark",
        className: "d-block m-auto px-4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 15
        }
      }, "View dishes")))));
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }
    }, restList));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 12
      }
    }, " No Restaurants Found");
  }
}

_s(RestaurantList, "UVx8QG13KxGG5sUE9JDdHLXEwCY=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
});

_c = RestaurantList;
/* harmony default export */ __webpack_exports__["default"] = (RestaurantList);

var _c;

$RefreshReg$(_c, "RestaurantList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNlYXJjaFF1ZXJ5IiwicmVzdGF1cmFudHMiLCJmaWx0ZXIiLCJyZXMiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaCIsInJlc3RJZCIsImlkIiwicmVuZGVyRGlzaGVzIiwicmVzdGF1cmFudElEIiwibGVuZ3RoIiwicmVzdExpc3QiLCJtYXAiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbkJvdHRvbSIsImltYWdlIiwidXJsIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVlBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ1pDLHdEQUFVLENBQUNDLGdEQUFELENBREU7QUFBQSxNQUNyQkMsSUFEcUIsZUFDckJBLElBRHFCOztBQUFBLGtCQUVIQyxzREFBUSxDQUFDRCxJQUFELENBRkw7QUFBQSxNQUV0QkUsS0FGc0I7QUFBQSxNQUVmQyxRQUZlOztBQUc3QixNQUFNQyxlQUFlLEdBQUdDLDBEQUFILG1CQUFyQjs7QUFINkIsa0JBdUJJQywrREFBUSxDQUFDRixlQUFELENBdkJaO0FBQUEsTUF1QnJCRyxPQXZCcUIsYUF1QnJCQSxPQXZCcUI7QUFBQSxNQXVCWkMsS0F2QlksYUF1QlpBLEtBdkJZO0FBQUEsTUF1QkxDLElBdkJLLGFBdUJMQSxJQXZCSzs7QUF3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LFFBQWIsQ0FERixDQURGO0FBS0QsR0FoQ0QsTUFnQ087QUFDTCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQVA7QUFDRDtBQUNGOztHQTFFUTdCLGM7VUF1QjBCVSx1RDs7O0tBdkIxQlYsYztBQTJFTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjE4YjQzYWNkMWRkNjk5ZGM4ZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgRGlzaGVzIGZyb20gJy4vZGlzaGVzJztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2wsXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5mdW5jdGlvbiBSZXN0YXVyYW50TGlzdChwcm9wcykge1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoY2FydCk7XG4gIGNvbnN0IEdFVF9SRVNUQVVSQU5UUyA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHJlc3RhdXJhbnRzIHtcbiAgICAgIGRhdGEge1xuICAgICAgICBpZFxuICAgICAgICBhdHRyaWJ1dGVzIHtcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYDtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRTKTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RVJST1I8L3A+O1xuICBjb25zb2xlLmxvZyhgUXVlcnkgRGF0YTogJHtkYXRhfWApO1xuICBpZiAoZGF0YSkgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XG5cbiAgbGV0IHNlYXJjaFF1ZXJ5ID0gZGF0YS5yZXN0YXVyYW50cy5maWx0ZXIoKHJlcykgPT4ge1xuICAgIHJldHVybiByZXMubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaCk7XG4gIH0pO1xuXG4gIGxldCByZXN0SWQgPSBzZWFyY2hRdWVyeVswXS5pZDtcblxuICAvLyBkZWZpbmV0IHJlbmRlcmVyIGZvciBEaXNoZXNcbiAgY29uc3QgcmVuZGVyRGlzaGVzID0gKHJlc3RhdXJhbnRJRCkgPT4ge1xuICAgIHJldHVybiA8RGlzaGVzIHJlc3RJZD17cmVzdGF1cmFudElEfT4gPC9EaXNoZXM+O1xuICB9O1xuICBpZiAoc2VhcmNoUXVlcnkubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJlc3RMaXN0ID0gc2VhcmNoUXVlcnkubWFwKChyZXMpID0+IChcbiAgICAgIDxDb2wga2V5PXtyZXMuaWR9PlxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogMzAwLCBoZWlnaHQ6IDU0MCwgbWFyZ2luQm90dG9tOiA0MCB9fT5cbiAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgdG9wPXt0cnVlfVxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAzMDAsIHdpZHRoOiAzMDAgfX1cbiAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzN2AgKyByZXMuaW1hZ2UudXJsfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+e3Jlcy5uYW1lfTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgPENhcmRUZXh0PntyZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtyZXMuaWR9YH0+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgbS1hdXRvIHB4LTRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVmlldyBkaXNoZXNcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvQ29sPlxuICAgICkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxSb3cgeHM9XCIzXCI+e3Jlc3RMaXN0fTwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPGgxPiBObyBSZXN0YXVyYW50cyBGb3VuZDwvaDE+O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=