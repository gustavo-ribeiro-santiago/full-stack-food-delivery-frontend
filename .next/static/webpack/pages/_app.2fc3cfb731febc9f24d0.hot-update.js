webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/dishes.js":
/*!******************************!*\
  !*** ./components/dishes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "C:\\Users\\gusta\\Documents\\Coding Bootcamp by MIT\\Module 29 - Full-Stack Restaurant App Part 2\\full-stack-restaurant-app_starter\\components\\dishes.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Dishes(_ref) {
  _s();

  var _this = this;

  var dishes = _ref.dishes;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_2__["default"]),
      addItem = _useContext.addItem;

  console.log(dishes);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var API_URL = "http://18.230.62.56:1337" || false;

  if (dishes.data.length > 0) {
    return __jsx("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }, dishes.data.map(function (dish) {
      return __jsx("div", {
        style: {
          padding: 0
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
        style: {
          width: 300,
          height: 561,
          margin: '0 10px 30px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
        top: true,
        style: {
          height: 300,
          width: 300
        },
        src: API_URL + dish.attributes.image.data.attributes.url,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 15
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
        className: "font-weight-bold",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }
      }, dish.attributes.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }
      }, dish.attributes.description)), __jsx("div", {
        className: "card-footer",
        style: {
          display: 'flex',
          justifyContent: 'space-between'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 15
        }
      }, __jsx("div", {
        style: {
          paddingLeft: 15,
          paddingTop: 8,
          fontWeight: 'bold'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }
      }, "$", dish.attributes.price), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        outline: true,
        color: "dark",
        onClick: function onClick() {
          return addItem(dish);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }
      }, "+ Add To Bag"))));
    }));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 12
      }
    }, " No Dishes");
  }
}

_s(Dishes, "Dw5TKDNi97b4bdf76jyTByfBcCU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Dishes;
/* harmony default export */ __webpack_exports__["default"] = (Dishes);

var _c;

$RefreshReg$(_c, "Dishes");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kaXNoZXMuanMiXSwibmFtZXMiOlsiRGlzaGVzIiwiZGlzaGVzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJhZGRJdGVtIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInVzZVJvdXRlciIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZGF0YSIsImxlbmd0aCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImp1c3RpZnlDb250ZW50IiwibWFwIiwiZGlzaCIsInBhZGRpbmciLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImF0dHJpYnV0ZXMiLCJpbWFnZSIsInVybCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCIsImZvbnRXZWlnaHQiLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQVdBLFNBQVNBLE1BQVQsT0FBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQUEsb0JBQ05DLHdEQUFVLENBQUNDLGdEQUFELENBREo7QUFBQSxNQUNsQkMsT0FEa0IsZUFDbEJBLE9BRGtCOztBQUUxQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLE1BQVo7QUFDQSxNQUFNTSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsTUFBTUMsT0FBTyxHQUFHQywwQkFBQSxJQUFtQyxLQUFuRDs7QUFFQSxNQUFJVCxNQUFNLENBQUNVLElBQVAsQ0FBWUMsTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUMxQixXQUNFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLGVBQU8sRUFBRSxNQURKO0FBRUxDLGdCQUFRLEVBQUUsTUFGTDtBQUdMQyxzQkFBYyxFQUFFO0FBSFgsT0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0dkLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZSyxHQUFaLENBQWdCLFVBQUNDLElBQUQ7QUFBQSxhQUNmO0FBQUssYUFBSyxFQUFFO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLCtDQUFEO0FBQU0sYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRSxHQUFUO0FBQWNDLGdCQUFNLEVBQUUsR0FBdEI7QUFBMkJDLGdCQUFNLEVBQUU7QUFBbkMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxrREFBRDtBQUNFLFdBQUcsRUFBRSxJQURQO0FBRUUsYUFBSyxFQUFFO0FBQUVELGdCQUFNLEVBQUUsR0FBVjtBQUFlRCxlQUFLLEVBQUU7QUFBdEIsU0FGVDtBQUdFLFdBQUcsRUFBRVYsT0FBTyxHQUFHUSxJQUFJLENBQUNLLFVBQUwsQ0FBZ0JDLEtBQWhCLENBQXNCWixJQUF0QixDQUEyQlcsVUFBM0IsQ0FBc0NFLEdBSHZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQU1FLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsb0RBQUQ7QUFBVyxpQkFBUyxFQUFDLGtCQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXlDUCxJQUFJLENBQUNLLFVBQUwsQ0FBZ0JHLElBQXpELENBREYsRUFFRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBV1IsSUFBSSxDQUFDSyxVQUFMLENBQWdCSSxXQUEzQixDQUZGLENBTkYsRUFVRTtBQUNFLGlCQUFTLEVBQUMsYUFEWjtBQUVFLGFBQUssRUFBRTtBQUFFYixpQkFBTyxFQUFFLE1BQVg7QUFBbUJFLHdCQUFjLEVBQUU7QUFBbkMsU0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUU7QUFDRSxhQUFLLEVBQUU7QUFBRVkscUJBQVcsRUFBRSxFQUFmO0FBQW1CQyxvQkFBVSxFQUFFLENBQS9CO0FBQWtDQyxvQkFBVSxFQUFFO0FBQTlDLFNBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUdJWixJQUFJLENBQUNLLFVBQUwsQ0FBZ0JRLEtBSHBCLENBSkYsRUFTRSxNQUFDLGlEQUFEO0FBQ0UsZUFBTyxNQURUO0FBRUUsYUFBSyxFQUFDLE1BRlI7QUFHRSxlQUFPLEVBQUU7QUFBQSxpQkFBTTFCLE9BQU8sQ0FBQ2EsSUFBRCxDQUFiO0FBQUEsU0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVRGLENBVkYsQ0FERixDQURlO0FBQUEsS0FBaEIsQ0FQSCxDQURGO0FBMENELEdBM0NELE1BMkNPO0FBQ0wsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFQO0FBQ0Q7QUFDRjs7R0FyRFFqQixNO1VBR1FRLHFEOzs7S0FIUlIsTTtBQXNETUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yZmMzY2ZiNzMxZmViYzlmMjRkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRCb2R5LFxuICBDYXJkSW1nLFxuICBDYXJkVGV4dCxcbiAgQ2FyZFRpdGxlLFxuICBSb3csXG4gIENvbCxcbn0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmZ1bmN0aW9uIERpc2hlcyh7IGRpc2hlcyB9KSB7XG4gIGNvbnN0IHsgYWRkSXRlbSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc29sZS5sb2coZGlzaGVzKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xuXG4gIGlmIChkaXNoZXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7ZGlzaGVzLmRhdGEubWFwKChkaXNoKSA9PiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6IDMwMCwgaGVpZ2h0OiA1NjEsIG1hcmdpbjogJzAgMTBweCAzMHB4JyB9fT5cbiAgICAgICAgICAgICAgPENhcmRJbWdcbiAgICAgICAgICAgICAgICB0b3A9e3RydWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAzMDAsIHdpZHRoOiAzMDAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e0FQSV9VUkwgKyBkaXNoLmF0dHJpYnV0ZXMuaW1hZ2UuZGF0YS5hdHRyaWJ1dGVzLnVybH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPntkaXNoLmF0dHJpYnV0ZXMubmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICA8Q2FyZFRleHQ+e2Rpc2guYXR0cmlidXRlcy5kZXNjcmlwdGlvbn08L0NhcmRUZXh0PlxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDE1LCBwYWRkaW5nVG9wOiA4LCBmb250V2VpZ2h0OiAnYm9sZCcgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAke2Rpc2guYXR0cmlidXRlcy5wcmljZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSXRlbShkaXNoKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICArIEFkZCBUbyBCYWdcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPGgxPiBObyBEaXNoZXM8L2gxPjtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRGlzaGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==