webpackHotUpdate_N_E("pages/index",{

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
        src: "http://localhost:1337".concat(dish.attributes.image.data.attributes.url),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kaXNoZXMuanMiXSwibmFtZXMiOlsiRGlzaGVzIiwiZGlzaGVzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJhZGRJdGVtIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInVzZVJvdXRlciIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZGF0YSIsImxlbmd0aCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImp1c3RpZnlDb250ZW50IiwibWFwIiwiZGlzaCIsInBhZGRpbmciLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImF0dHJpYnV0ZXMiLCJpbWFnZSIsInVybCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCIsImZvbnRXZWlnaHQiLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQVdBLFNBQVNBLE1BQVQsT0FBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQUEsb0JBQ05DLHdEQUFVLENBQUNDLGdEQUFELENBREo7QUFBQSxNQUNsQkMsT0FEa0IsZUFDbEJBLE9BRGtCOztBQUUxQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLE1BQVo7QUFDQSxNQUFNTSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsTUFBTUMsT0FBTyxHQUFHQywwQkFBQSxJQUFtQyxLQUFuRDs7QUFFQSxNQUFJVCxNQUFNLENBQUNVLElBQVAsQ0FBWUMsTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUMxQixXQUNFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLGVBQU8sRUFBRSxNQURKO0FBRUxDLGdCQUFRLEVBQUUsTUFGTDtBQUdMQyxzQkFBYyxFQUFFO0FBSFgsT0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0dkLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZSyxHQUFaLENBQWdCLFVBQUNDLElBQUQ7QUFBQSxhQUNmO0FBQUssYUFBSyxFQUFFO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLCtDQUFEO0FBQU0sYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRSxHQUFUO0FBQWNDLGdCQUFNLEVBQUUsR0FBdEI7QUFBMkJDLGdCQUFNLEVBQUU7QUFBbkMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxrREFBRDtBQUNFLFdBQUcsRUFBRSxJQURQO0FBRUUsYUFBSyxFQUFFO0FBQUVELGdCQUFNLEVBQUUsR0FBVjtBQUFlRCxlQUFLLEVBQUU7QUFBdEIsU0FGVDtBQUdFLFdBQUcsaUNBQTBCRixJQUFJLENBQUNLLFVBQUwsQ0FBZ0JDLEtBQWhCLENBQXNCWixJQUF0QixDQUEyQlcsVUFBM0IsQ0FBc0NFLEdBQWhFLENBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBTUUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxvREFBRDtBQUFXLGlCQUFTLEVBQUMsa0JBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBeUNQLElBQUksQ0FBQ0ssVUFBTCxDQUFnQkcsSUFBekQsQ0FERixFQUVFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFXUixJQUFJLENBQUNLLFVBQUwsQ0FBZ0JJLFdBQTNCLENBRkYsQ0FORixFQVVFO0FBQ0UsaUJBQVMsRUFBQyxhQURaO0FBRUUsYUFBSyxFQUFFO0FBQUViLGlCQUFPLEVBQUUsTUFBWDtBQUFtQkUsd0JBQWMsRUFBRTtBQUFuQyxTQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJRTtBQUNFLGFBQUssRUFBRTtBQUFFWSxxQkFBVyxFQUFFLEVBQWY7QUFBbUJDLG9CQUFVLEVBQUUsQ0FBL0I7QUFBa0NDLG9CQUFVLEVBQUU7QUFBOUMsU0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBR0laLElBQUksQ0FBQ0ssVUFBTCxDQUFnQlEsS0FIcEIsQ0FKRixFQVNFLE1BQUMsaURBQUQ7QUFDRSxlQUFPLE1BRFQ7QUFFRSxhQUFLLEVBQUMsTUFGUjtBQUdFLGVBQU8sRUFBRTtBQUFBLGlCQUFNMUIsT0FBTyxDQUFDYSxJQUFELENBQWI7QUFBQSxTQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBVEYsQ0FWRixDQURGLENBRGU7QUFBQSxLQUFoQixDQVBILENBREY7QUEwQ0QsR0EzQ0QsTUEyQ087QUFDTCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFDRDtBQUNGOztHQXJEUWpCLE07VUFHUVEscUQ7OztLQUhSUixNO0FBc0RNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNmY2YmMyZTU4YmU3NDYwMDQ0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRCb2R5LFxuICBDYXJkSW1nLFxuICBDYXJkVGV4dCxcbiAgQ2FyZFRpdGxlLFxuICBSb3csXG4gIENvbCxcbn0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmZ1bmN0aW9uIERpc2hlcyh7IGRpc2hlcyB9KSB7XG4gIGNvbnN0IHsgYWRkSXRlbSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc29sZS5sb2coZGlzaGVzKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xuXG4gIGlmIChkaXNoZXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7ZGlzaGVzLmRhdGEubWFwKChkaXNoKSA9PiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6IDMwMCwgaGVpZ2h0OiA1NjEsIG1hcmdpbjogJzAgMTBweCAzMHB4JyB9fT5cbiAgICAgICAgICAgICAgPENhcmRJbWdcbiAgICAgICAgICAgICAgICB0b3A9e3RydWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAzMDAsIHdpZHRoOiAzMDAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcke2Rpc2guYXR0cmlidXRlcy5pbWFnZS5kYXRhLmF0dHJpYnV0ZXMudXJsfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj57ZGlzaC5hdHRyaWJ1dGVzLm5hbWV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgPENhcmRUZXh0PntkaXNoLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAxNSwgcGFkZGluZ1RvcDogOCwgZm9udFdlaWdodDogJ2JvbGQnIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgJHtkaXNoLmF0dHJpYnV0ZXMucHJpY2V9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW0oZGlzaCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgKyBBZGQgVG8gQmFnXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxoMT4gTm8gRGlzaGVzPC9oMT47XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IERpc2hlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=