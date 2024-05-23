webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/auth */ "./components/auth.js");
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/context */ "./components/context.js");


var _jsxFileName = "C:\\Users\\gusta\\Documents\\Coding Bootcamp by MIT\\Module 29 - Full-Stack Restaurant App Part 2\\full-stack-restaurant-app_starter\\pages\\login.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* /pages/login.js */







function Login(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    identifier: '',
    password: ''
  }),
      data = _useState[0],
      updateData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      error = _useState3[0],
      setError = _useState3[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var appContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_7__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (appContext.isAuthenticated) {
      router.push('/'); // redirect if you're already logged in
    }
  }, []);

  function _onChange(event) {
    updateData(_objectSpread(_objectSpread({}, data), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value)));
  }

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    sm: "12",
    md: {
      size: 5,
      offset: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1448322100" + " " + "paper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("section", {
    className: "jsx-1448322100" + " " + "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, Object.entries(error).length !== 0 && error.constructor === Object && error.message.map(function (error) {
    return __jsx("div", {
      key: error.messages[0].id,
      style: {
        marginBottom: 10
      },
      className: "jsx-1448322100",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    }, __jsx("small", {
      style: {
        color: 'red'
      },
      className: "jsx-1448322100",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 23
      }
    }, error.messages[0].message));
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("fieldset", {
    disabled: loading,
    className: "jsx-1448322100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, "Email:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    onChange: function onChange(event) {
      return _onChange(event);
    },
    name: "identifier",
    style: {
      height: 50,
      fontSize: '1.2em'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    style: {
      marginBottom: 30
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, "Password:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    onChange: function onChange(event) {
      return _onChange(event);
    },
    type: "password",
    name: "password",
    style: {
      height: 50,
      fontSize: '1.2em'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "jsx-1448322100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "",
    className: "jsx-1448322100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 23
    }
  }, __jsx("small", {
    className: "jsx-1448322100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, "Forgot Password?"))), __jsx("br", {
    className: "jsx-1448322100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/register",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx("small", {
    className: "jsx-1448322100" + " " + "mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 23
    }
  }, "Don't have an account yet?", __jsx("a", {
    className: "jsx-1448322100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, " Sign up"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    style: {
      "float": 'right',
      width: 120
    },
    color: "dark",
    onClick: function onClick() {
      setLoading(true);
      Object(_components_auth__WEBPACK_IMPORTED_MODULE_6__["login"])(data.identifier, data.password).then(function (res) {
        setLoading(false); // set authed User in global context to update header/app state

        appContext.setUser(res.data.user);
        alert("Welcome back, ".concat(res.data.user.firstName, "! It is nice to have you here."));
      })["catch"](function (error) {
        //setError(error.response.data);
        setLoading(false);
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, loading ? 'Loading... ' : 'Submit')))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1448322100",
    __self: this
  }, ".paper.jsx-1448322100{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);border-radius:6px;margin-top:90px;}.notification.jsx-1448322100{color:#ab003c;}.header.jsx-1448322100{width:100%;height:120px;background-color:#2196f3;margin-bottom:30px;border-radius-top:6px;}.wrapper.jsx-1448322100{padding:20px 30px 20px 30px !important;}a.jsx-1448322100{color:blue !important;}img.jsx-1448322100{margin:15px 30px 10px 50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ3VzdGFcXERvY3VtZW50c1xcQ29kaW5nIEJvb3RjYW1wIGJ5IE1JVFxcTW9kdWxlIDI5IC0gRnVsbC1TdGFjayBSZXN0YXVyYW50IEFwcCBQYXJ0IDJcXGZ1bGwtc3RhY2stcmVzdGF1cmFudC1hcHBfc3RhcnRlclxccGFnZXNcXGxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNIUyxBQUd3QyxBQVFiLEFBR0gsQUFPNEIsQUFHakIsQUFHSyxXQVpkLEdBSGYsUUFhQSxFQVQyQixHQVZhLEFBc0J4QyxZQU5BLFVBTHFCLG1CQUNHLHNCQUN4QixpREFab0Isa0JBQ0YsZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZ3VzdGFcXERvY3VtZW50c1xcQ29kaW5nIEJvb3RjYW1wIGJ5IE1JVFxcTW9kdWxlIDI5IC0gRnVsbC1TdGFjayBSZXN0YXVyYW50IEFwcCBQYXJ0IDJcXGZ1bGwtc3RhY2stcmVzdGF1cmFudC1hcHBfc3RhcnRlclxccGFnZXNcXGxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogL3BhZ2VzL2xvZ2luLmpzICovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2wsXG4gIEJ1dHRvbixcbiAgRm9ybSxcbiAgRm9ybUdyb3VwLFxuICBMYWJlbCxcbiAgSW5wdXQsXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi9jb21wb25lbnRzL2F1dGgnO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZXh0JztcblxuZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcbiAgY29uc3QgW2RhdGEsIHVwZGF0ZURhdGFdID0gdXNlU3RhdGUoeyBpZGVudGlmaWVyOiAnJywgcGFzc3dvcmQ6ICcnIH0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgYXBwQ29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXBwQ29udGV4dC5pc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7IC8vIHJlZGlyZWN0IGlmIHlvdSdyZSBhbHJlYWR5IGxvZ2dlZCBpblxuICAgIH1cbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgdXBkYXRlRGF0YSh7IC4uLmRhdGEsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc209XCIxMlwiIG1kPXt7IHNpemU6IDUsIG9mZnNldDogMyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcGVyXCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhlcnJvcikubGVuZ3RoICE9PSAwICYmXG4gICAgICAgICAgICAgICAgZXJyb3IuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJlxuICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGtleT17ZXJyb3IubWVzc2FnZXNbMF0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvci5tZXNzYWdlc1swXS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD5FbWFpbDo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZShldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImlkZW50aWZpZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNTAsIGZvbnRTaXplOiAnMS4yZW0nIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAzMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPlBhc3N3b3JkOjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uQ2hhbmdlKGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA1MCwgZm9udFNpemU6ICcxLjJlbScgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+Rm9yZ290IFBhc3N3b3JkPzwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cIm1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudCB5ZXQ/XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT4gU2lnbiB1cDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0Jywgd2lkdGg6IDEyMCB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luKGRhdGEuaWRlbnRpZmllciwgZGF0YS5wYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBhdXRoZWQgVXNlciBpbiBnbG9iYWwgY29udGV4dCB0byB1cGRhdGUgaGVhZGVyL2FwcCBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbnRleHQuc2V0VXNlcihyZXMuZGF0YS51c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBXZWxjb21lIGJhY2ssICR7cmVzLmRhdGEudXNlci5maXJzdE5hbWV9ISBJdCBpcyBuaWNlIHRvIGhhdmUgeW91IGhlcmUuYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldEVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAnTG9hZGluZy4uLiAnIDogJ1N1Ym1pdCd9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAucGFwZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICAgICAgY29sb3I6ICNhYjAwM2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzLXRvcDogNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHggMjBweCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAzMHB4IDEwcHggNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\gusta\\\\Documents\\\\Coding Bootcamp by MIT\\\\Module 29 - Full-Stack Restaurant App Part 2\\\\full-stack-restaurant-app_starter\\\\pages\\\\login.js */"));
}

_s(Login, "YNxEPLgoKTxghLfNWlSNbAd4Xcc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsInVzZVN0YXRlIiwiaWRlbnRpZmllciIsInBhc3N3b3JkIiwiZGF0YSIsInVwZGF0ZURhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhcHBDb250ZXh0IiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJ1c2VFZmZlY3QiLCJpc0F1dGhlbnRpY2F0ZWQiLCJwdXNoIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNpemUiLCJvZmZzZXQiLCJPYmplY3QiLCJlbnRyaWVzIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJtZXNzYWdlIiwibWFwIiwibWVzc2FnZXMiLCJpZCIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJ3aWR0aCIsImxvZ2luIiwidGhlbiIsInJlcyIsInNldFVzZXIiLCJ1c2VyIiwiYWxlcnQiLCJmaXJzdE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUM7QUFBRUMsY0FBVSxFQUFFLEVBQWQ7QUFBa0JDLFlBQVEsRUFBRTtBQUE1QixHQUFELENBRGY7QUFBQSxNQUNiQyxJQURhO0FBQUEsTUFDUEMsVUFETzs7QUFBQSxtQkFFVUosc0RBQVEsQ0FBQyxLQUFELENBRmxCO0FBQUEsTUFFYkssT0FGYTtBQUFBLE1BRUpDLFVBRkk7O0FBQUEsbUJBR01OLHNEQUFRLENBQUMsS0FBRCxDQUhkO0FBQUEsTUFHYk8sS0FIYTtBQUFBLE1BR05DLFFBSE07O0FBSXBCLE1B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akMsa0JBQVUsQ0FBQyxLQUFELENBQVYsQ0FEYSxDQUViOztBQUNBSyxrQkFBVSxDQUFDNkIsT0FBWCxDQUFtQkQsR0FBRyxDQUFDcEMsSUFBSixDQUFTc0MsSUFBNUI7QUFDQUMsYUFBSyx5QkFDY0gsR0FBRyxDQUFDcEMsSUFBSixDQUFTc0MsSUFBVCxDQUFjRSxTQUQ1QixvQ0FBTDtBQUdELE9BUkgsV0FTUyxVQUFDcEMsS0FBRCxFQUFXO0FBQ2hCO0FBQ0FELGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsT0FaSDtBQWFELEtBbEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FvQkdELE9BQU8sR0FBRyxhQUFILEdBQW1CLFFBcEI3QixDQWJGLENBbkJGLENBREYsQ0FmRixDQURGLENBREYsQ0FERixDQURGO0FBQUE7QUFBQTtBQUFBLDI4UEFERjtBQW1IRDs7R0FwSVFQLEs7VUFJUVkscUQ7OztLQUpSWixLO0FBc0lNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5iNjRhZDZiZWQzOWJjNTAwMGE3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogL3BhZ2VzL2xvZ2luLmpzICovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2wsXG4gIEJ1dHRvbixcbiAgRm9ybSxcbiAgRm9ybUdyb3VwLFxuICBMYWJlbCxcbiAgSW5wdXQsXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi9jb21wb25lbnRzL2F1dGgnO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZXh0JztcblxuZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcbiAgY29uc3QgW2RhdGEsIHVwZGF0ZURhdGFdID0gdXNlU3RhdGUoeyBpZGVudGlmaWVyOiAnJywgcGFzc3dvcmQ6ICcnIH0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgYXBwQ29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXBwQ29udGV4dC5pc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7IC8vIHJlZGlyZWN0IGlmIHlvdSdyZSBhbHJlYWR5IGxvZ2dlZCBpblxuICAgIH1cbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgdXBkYXRlRGF0YSh7IC4uLmRhdGEsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc209XCIxMlwiIG1kPXt7IHNpemU6IDUsIG9mZnNldDogMyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcGVyXCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhlcnJvcikubGVuZ3RoICE9PSAwICYmXG4gICAgICAgICAgICAgICAgZXJyb3IuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJlxuICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UubWFwKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGtleT17ZXJyb3IubWVzc2FnZXNbMF0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvci5tZXNzYWdlc1swXS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD5FbWFpbDo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZShldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImlkZW50aWZpZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNTAsIGZvbnRTaXplOiAnMS4yZW0nIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAzMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPlBhc3N3b3JkOjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uQ2hhbmdlKGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA1MCwgZm9udFNpemU6ICcxLjJlbScgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+Rm9yZ290IFBhc3N3b3JkPzwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cIm1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudCB5ZXQ/XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT4gU2lnbiB1cDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0Jywgd2lkdGg6IDEyMCB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luKGRhdGEuaWRlbnRpZmllciwgZGF0YS5wYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBhdXRoZWQgVXNlciBpbiBnbG9iYWwgY29udGV4dCB0byB1cGRhdGUgaGVhZGVyL2FwcCBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbnRleHQuc2V0VXNlcihyZXMuZGF0YS51c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBXZWxjb21lIGJhY2ssICR7cmVzLmRhdGEudXNlci5maXJzdE5hbWV9ISBJdCBpcyBuaWNlIHRvIGhhdmUgeW91IGhlcmUuYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldEVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAnTG9hZGluZy4uLiAnIDogJ1N1Ym1pdCd9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAucGFwZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICAgICAgY29sb3I6ICNhYjAwM2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzLXRvcDogNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHggMjBweCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAzMHB4IDEwcHggNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=