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
/* harmony import */ var react_optimized_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-optimized-image */ "./node_modules/react-optimized-image/lib/index.js");
/* harmony import */ var react_optimized_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_optimized_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/logo.png */ "./assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styling/NavigationBar.module.css */ "./components/styling/NavigationBar.module.css");
/* harmony import */ var _styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/home/kingofboxes/projects/website-project/components/common/NavigationBar.tsx",
    _this = undefined;






 // Helper function to create tabs.

var tabs = ['WaniKani', 'Portfolio'];

var url = function url(tab) {
  return "/".concat(tab.toLowerCase().replace(/\s/g, ''));
}; // Navbar.


var NavigationBar = function NavigationBar() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_optimized_image__WEBPACK_IMPORTED_MODULE_4__["Img"], {
        src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        sizes: [140],
        className: _styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.clickable,
        webp: true,
        rawSrc: {
          fallback: {
            140: {
              1: __webpack_require__(/*! ../../assets/logo.png?url&width=140 */ "./assets/logo.png?url&width=140")
            }
          },
          webp: {
            140: {
              1: __webpack_require__(/*! ../../assets/logo.png?webp&width=140 */ "./assets/logo.png?webp&width=140")
            }
          }
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.navbar,
      children: tabs.map(function (tab) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: url(tab),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: _styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.navitem,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
              as: "h3",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.override,
                children: tab
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, _this)
        }, tab, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTmF2aWdhdGlvbkJhci50c3giXSwibmFtZXMiOlsidGFicyIsInVybCIsInRhYiIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIk5hdmlnYXRpb25CYXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJMb2dvIiwiY2xpY2thYmxlIiwibmF2YmFyIiwibWFwIiwibmF2aXRlbSIsIm92ZXJyaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Q0FJQTs7QUFDQSxJQUFNQSxJQUFjLEdBQUcsQ0FBQyxVQUFELEVBQWEsV0FBYixDQUF2Qjs7QUFDQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxHQUFELEVBQWlCO0FBQzNCLG9CQUFXQSxHQUFHLENBQUNDLFdBQUosR0FBa0JDLE9BQWxCLENBQTBCLEtBQTFCLEVBQWlDLEVBQWpDLENBQVg7QUFDRCxDQUZELEMsQ0FJQTs7O0FBQ0EsSUFBTUMsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEI7QUFBQSxzQkFDOUI7QUFBSyxhQUFTLEVBQUVDLHdFQUFNLENBQUNDLFNBQXZCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBLDZCQUNFLHFFQUFDLHlEQUFEO0FBQUssV0FBRyxFQUFFQyx1REFBVjtBQUFnQixhQUFLLEVBQUUsQ0FBQyxHQUFELENBQXZCO0FBQThCLGlCQUFTLEVBQUVGLHdFQUFNLENBQUNHLFNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVILHdFQUFNLENBQUNJLE1BQXZCO0FBQUEsZ0JBQ0dWLElBQUksQ0FBQ1csR0FBTCxDQUFTLFVBQUNULEdBQUQsRUFBUztBQUNqQiw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBRUQsR0FBRyxDQUFDQyxHQUFELENBQWY7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUVJLHdFQUFNLENBQUNNLE9BQXJCO0FBQUEsbUNBQ0UscUVBQUMsd0RBQUQ7QUFBUSxnQkFBRSxFQUFDLElBQVg7QUFBQSxxQ0FDRTtBQUFNLHlCQUFTLEVBQUVOLHdFQUFNLENBQUNPLFFBQXhCO0FBQUEsMEJBQW1DWDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUEyQkEsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVNELE9BVkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRDhCO0FBQUEsQ0FBaEM7O0tBQU1HLGE7QUFxQlNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dhbmlrYW5pLjI2MmFlMWQ2MjgxYWJkZGExZmVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHsgSW1nIH0gZnJvbSAncmVhY3Qtb3B0aW1pemVkLWltYWdlJztcbmltcG9ydCBMb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy9sb2dvLnBuZyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGluZy9OYXZpZ2F0aW9uQmFyLm1vZHVsZS5jc3MnO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIHRhYnMuXG5jb25zdCB0YWJzOiBzdHJpbmdbXSA9IFsnV2FuaUthbmknLCAnUG9ydGZvbGlvJ107XG5jb25zdCB1cmwgPSAodGFiOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGAvJHt0YWIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgJycpfWA7XG59O1xuXG4vLyBOYXZiYXIuXG5jb25zdCBOYXZpZ2F0aW9uQmFyOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICA8SW1nIHNyYz17TG9nb30gc2l6ZXM9e1sxNDBdfSBjbGFzc05hbWU9e3N0eWxlcy5jbGlja2FibGV9IC8+XG4gICAgPC9MaW5rPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyfT5cbiAgICAgIHt0YWJzLm1hcCgodGFiKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17dXJsKHRhYil9IGtleT17dGFifT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PlxuICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5vdmVycmlkZX0+e3RhYn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25CYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9