webpackHotUpdate_N_E("pages/wanikani",{

/***/ "./components/common/NavigationBar.tsx":
/*!*********************************************!*\
  !*** ./components/common/NavigationBar.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styling/NavigationBar.module.css */ "./components/styling/NavigationBar.module.css");
/* harmony import */ var _styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/home/kingofboxes/projects/website-project/components/common/NavigationBar.tsx",
    _this = undefined;





var tabs = ['WaniKani', 'About Me'];

var url = function url(tab) {
  return "/".concat(tab.toLowerCase().replace(/\s/g, ''));
};

var NavigationBar = function NavigationBar() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      as: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        children: "Placeholder Logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navbar,
      children: tabs.map(function (tab) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: url(tab),
          as: "" + url(tab),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: _styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.navitem,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
              as: "h3",
              children: tab
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, _this)
        }, tab, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, _this);
};

_c = NavigationBar;
/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

var _c;

$RefreshReg$(_c, "NavigationBar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTmF2aWdhdGlvbkJhci50c3giXSwibmFtZXMiOlsidGFicyIsInVybCIsInRhYiIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIk5hdmlnYXRpb25CYXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJuYXZiYXIiLCJtYXAiLCJuYXZpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQSxJQUFNQSxJQUFjLEdBQUcsQ0FBQyxVQUFELEVBQWEsVUFBYixDQUF2Qjs7QUFDQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxHQUFELEVBQWlCO0FBQzNCLG9CQUFXQSxHQUFHLENBQUNDLFdBQUosR0FBa0JDLE9BQWxCLENBQTBCLEtBQTFCLEVBQWlDLEVBQWpDLENBQVg7QUFDRCxDQUZEOztBQUlBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxzQkFDcEI7QUFBSyxhQUFTLEVBQUVDLHdFQUFNLENBQUNDLFNBQXZCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFlLFFBQUUsS0FBakI7QUFBQSw2QkFDRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFFRCx3RUFBTSxDQUFDRSxNQUF2QjtBQUFBLGdCQUNHUixJQUFJLENBQUNTLEdBQUwsQ0FBUyxVQUFDUCxHQUFELEVBQVM7QUFDakIsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUVELEdBQUcsQ0FBQ0MsR0FBRCxDQUFmO0FBQXNCLFlBQUUsRUFBRSxLQUEwQkQsR0FBRyxDQUFDQyxHQUFELENBQXZEO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFFSSx3RUFBTSxDQUFDSSxPQUFyQjtBQUFBLG1DQUNFLHFFQUFDLHdEQUFEO0FBQVEsZ0JBQUUsRUFBQyxJQUFYO0FBQUEsd0JBQWlCUjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQW1FQSxHQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBT0QsT0FSQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEb0I7QUFBQSxDQUF0Qjs7S0FBTUcsYTtBQW1CU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd2FuaWthbmkuYzJlMzA4NTZiZGFhNzYxOTBkOGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBCdXR0b24sIEhlYWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsaW5nL05hdmlnYXRpb25CYXIubW9kdWxlLmNzcyc7XG5cbmNvbnN0IHRhYnM6IHN0cmluZ1tdID0gWydXYW5pS2FuaScsICdBYm91dCBNZSddO1xuY29uc3QgdXJsID0gKHRhYjogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBgLyR7dGFiLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKX1gO1xufTtcblxuY29uc3QgTmF2aWdhdGlvbkJhciA9ICgpOiBKU1guRWxlbWVudCA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICA8TGluayBocmVmPVwiL1wiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvJ30+XG4gICAgICA8QnV0dG9uPlBsYWNlaG9sZGVyIExvZ288L0J1dHRvbj5cbiAgICA8L0xpbms+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxuICAgICAge3RhYnMubWFwKCh0YWIpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGluayBocmVmPXt1cmwodGFiKX0gYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgdXJsKHRhYil9IGtleT17dGFifT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PlxuICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDNcIj57dGFifTwvSGVhZGVyPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25CYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9