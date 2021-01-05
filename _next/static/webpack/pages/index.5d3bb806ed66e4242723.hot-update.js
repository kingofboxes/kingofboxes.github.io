webpackHotUpdate_N_E("pages/index",{

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
              color: "grey",
              className: _styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.override,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTmF2aWdhdGlvbkJhci50c3giXSwibmFtZXMiOlsidGFicyIsInVybCIsInRhYiIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIk5hdmlnYXRpb25CYXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJuYXZiYXIiLCJtYXAiLCJuYXZpdGVtIiwib3ZlcnJpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBLElBQU1BLElBQWMsR0FBRyxDQUFDLFVBQUQsRUFBYSxVQUFiLENBQXZCOztBQUNBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEdBQUQsRUFBaUI7QUFDM0Isb0JBQVdBLEdBQUcsQ0FBQ0MsV0FBSixHQUFrQkMsT0FBbEIsQ0FBMEIsS0FBMUIsRUFBaUMsRUFBakMsQ0FBWDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLHNCQUNwQjtBQUFLLGFBQVMsRUFBRUMsd0VBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQWUsUUFBRSxLQUFqQjtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVELHdFQUFNLENBQUNFLE1BQXZCO0FBQUEsZ0JBQ0dSLElBQUksQ0FBQ1MsR0FBTCxDQUFTLFVBQUNQLEdBQUQsRUFBUztBQUNqQiw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBRUQsR0FBRyxDQUFDQyxHQUFELENBQWY7QUFBc0IsWUFBRSxFQUFFLEtBQTBCRCxHQUFHLENBQUNDLEdBQUQsQ0FBdkQ7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUVJLHdFQUFNLENBQUNJLE9BQXJCO0FBQUEsbUNBQ0UscUVBQUMsd0RBQUQ7QUFBUSxnQkFBRSxFQUFDLElBQVg7QUFBZ0IsbUJBQUssRUFBQyxNQUF0QjtBQUE2Qix1QkFBUyxFQUFFSix3RUFBTSxDQUFDSyxRQUEvQztBQUFBLHdCQUNHVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBbUVBLEdBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFTRCxPQVZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURvQjtBQUFBLENBQXRCOztLQUFNRyxhO0FBcUJTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZDNiYjgwNmVkNjZlNDI0MjcyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IEJ1dHRvbiwgSGVhZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxpbmcvTmF2aWdhdGlvbkJhci5tb2R1bGUuY3NzJztcblxuY29uc3QgdGFiczogc3RyaW5nW10gPSBbJ1dhbmlLYW5pJywgJ0Fib3V0IE1lJ107XG5jb25zdCB1cmwgPSAodGFiOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGAvJHt0YWIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgJycpfWA7XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uQmFyID0gKCk6IEpTWC5FbGVtZW50ID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy8nfT5cbiAgICAgIDxCdXR0b24+UGxhY2Vob2xkZXIgTG9nbzwvQnV0dG9uPlxuICAgIDwvTGluaz5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XG4gICAgICB7dGFicy5tYXAoKHRhYikgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e3VybCh0YWIpfSBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyB1cmwodGFiKX0ga2V5PXt0YWJ9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbX0+XG4gICAgICAgICAgICAgIDxIZWFkZXIgYXM9XCJoM1wiIGNvbG9yPVwiZ3JleVwiIGNsYXNzTmFtZT17c3R5bGVzLm92ZXJyaWRlfT5cbiAgICAgICAgICAgICAgICB7dGFifVxuICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==