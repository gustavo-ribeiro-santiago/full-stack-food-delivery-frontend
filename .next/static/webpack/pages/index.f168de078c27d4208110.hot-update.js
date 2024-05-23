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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query {\n      restaurants {\n        data {\n          id\n          attributes {\n            name\n            description\n            image {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "]);

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
  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "Not found");
  console.log("Query Data: ".concat(data.restaurants.data[0].attributes.name));
  var API_URL = "http://18.230.62.56:1337" || false;
  var searchQuery = data.restaurants.data.filter(function (res) {
    return res.attributes.name.toLowerCase().includes(props.search);
  });
  var restId = searchQuery[0].id; // definet renderer for Dishes

  var renderDishes = function renderDishes(restaurantID) {
    return __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      restId: restaurantID,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
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
          lineNumber: 62,
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
          lineNumber: 63,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardImg"], {
        top: true,
        style: {
          height: 300,
          width: 300
        },
        src: API_URL + res.attributes.image.data.attributes.url,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], {
        className: "font-weight-bold",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      }, res.attributes.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }
      }, res.attributes.description)), __jsx("div", {
        className: "card-footer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/".concat(res.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "dark",
        className: "d-block m-auto px-4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 15
        }
      }, "View dishes")))));
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      xs: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }
    }, restList));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3RhdXJhbnRzIiwiYXR0cmlidXRlcyIsIm5hbWUiLCJBUElfVVJMIiwicHJvY2VzcyIsInNlYXJjaFF1ZXJ5IiwiZmlsdGVyIiwicmVzIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlYXJjaCIsInJlc3RJZCIsImlkIiwicmVuZGVyRGlzaGVzIiwicmVzdGF1cmFudElEIiwibGVuZ3RoIiwicmVzdExpc3QiLCJtYXAiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbkJvdHRvbSIsImltYWdlIiwidXJsIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVlBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ1pDLHdEQUFVLENBQUNDLGdEQUFELENBREU7QUFBQSxNQUNyQkMsSUFEcUIsZUFDckJBLElBRHFCOztBQUFBLGtCQUVIQyxzREFBUSxDQUFDRCxJQUFELENBRkw7QUFBQSxNQUV0QkUsS0FGc0I7QUFBQSxNQUVmQyxRQUZlOztBQUc3QixNQUFNQyxlQUFlLEdBQUdDLDBEQUFILG1CQUFyQjs7QUFINkIsa0JBdUJJQywrREFBUSxDQUFDRixlQUFELENBdkJaO0FBQUEsTUF1QnJCRyxPQXZCcUIsYUF1QnJCQSxPQXZCcUI7QUFBQSxNQXVCWkMsS0F2QlksYUF1QlpBLEtBdkJZO0FB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cUIsaUJBQVMsRUFBQyxxQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixDQURGLENBWkYsQ0FERixDQUQrQjtBQUFBLEtBQWhCLENBQWpCO0FBeUJBLFdBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4Q0FBRDtBQUFLLFFBQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBYUksUUFBYixDQURGLENBREY7QUFLRCxHQS9CRCxNQStCTztBQUNMLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBUDtBQUNEO0FBQ0Y7O0dBM0VRaEMsYztVQXVCMEJVLHVEOzs7S0F2QjFCVixjO0FBNEVNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMTY4ZGUwNzhjMjdkNDIwODExMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBEaXNoZXMgZnJvbSAnLi9kaXNoZXMnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQm9keSxcbiAgQ2FyZEltZyxcbiAgQ2FyZFRleHQsXG4gIENhcmRUaXRsZSxcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbCxcbn0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShjYXJ0KTtcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHJlc3RhdXJhbnRzIHtcbiAgICAgICAgZGF0YSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBhdHRyaWJ1dGVzIHtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgIGRhdGEge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVFMpO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FUlJPUjwvcD47XG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XG4gIGNvbnNvbGUubG9nKGBRdWVyeSBEYXRhOiAke2RhdGEucmVzdGF1cmFudHMuZGF0YVswXS5hdHRyaWJ1dGVzLm5hbWV9YCk7XG5cbiAgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjtcblxuICBsZXQgc2VhcmNoUXVlcnkgPSBkYXRhLnJlc3RhdXJhbnRzLmRhdGEuZmlsdGVyKChyZXMpID0+IHtcbiAgICByZXR1cm4gcmVzLmF0dHJpYnV0ZXMubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaCk7XG4gIH0pO1xuXG4gIGxldCByZXN0SWQgPSBzZWFyY2hRdWVyeVswXS5pZDtcblxuICAvLyBkZWZpbmV0IHJlbmRlcmVyIGZvciBEaXNoZXNcbiAgY29uc3QgcmVuZGVyRGlzaGVzID0gKHJlc3RhdXJhbnRJRCkgPT4ge1xuICAgIHJldHVybiA8RGlzaGVzIHJlc3RJZD17cmVzdGF1cmFudElEfT4gPC9EaXNoZXM+O1xuICB9O1xuICBpZiAoc2VhcmNoUXVlcnkubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJlc3RMaXN0ID0gc2VhcmNoUXVlcnkubWFwKChyZXMpID0+IChcbiAgICAgIDxDb2wga2V5PXtyZXMuaWR9PlxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogMzAwLCBoZWlnaHQ6IDU0MCwgbWFyZ2luQm90dG9tOiA0MCB9fT5cbiAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgdG9wPXt0cnVlfVxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAzMDAsIHdpZHRoOiAzMDAgfX1cbiAgICAgICAgICAgIHNyYz17QVBJX1VSTCArIHJlcy5hdHRyaWJ1dGVzLmltYWdlLmRhdGEuYXR0cmlidXRlcy51cmx9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAge3Jlcy5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgIDxDYXJkVGV4dD57cmVzLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtyZXMuaWR9YH0+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJkYXJrXCIgY2xhc3NOYW1lPVwiZC1ibG9jayBtLWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgICAgIFZpZXcgZGlzaGVzXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L0NvbD5cbiAgICApKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93IHhzPVwiM1wiPntyZXN0TGlzdH08L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxoMT4gTm8gUmVzdGF1cmFudHMgRm91bmQ8L2gxPjtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9