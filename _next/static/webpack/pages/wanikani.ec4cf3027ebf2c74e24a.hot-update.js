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

var tabs = ['WaniKani', 'Maimai', 'Portfolio', 'About'];

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
        alt: "nya-logo",
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.mininavbar,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
        text: "File",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
          children: tabs.map(function (tab) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: url(tab),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                text: tab
              }, tab, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, _this)
            }, tab, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTmF2aWdhdGlvbkJhci50c3giXSwibmFtZXMiOlsidGFicyIsInVybCIsInRhYiIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIk5hdmlnYXRpb25CYXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJMb2dvIiwiY2xpY2thYmxlIiwibmF2YmFyIiwibWFwIiwibmF2aXRlbSIsIm92ZXJyaWRlIiwibWluaW5hdmJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBSUE7O0FBQ0EsSUFBTUEsSUFBYyxHQUFHLENBQUMsVUFBRCxFQUFhLFFBQWIsRUFBdUIsV0FBdkIsRUFBb0MsT0FBcEMsQ0FBdkI7O0FBQ0EsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsR0FBRCxFQUFpQjtBQUMzQixvQkFBV0EsR0FBRyxDQUFDQyxXQUFKLEdBQWtCQyxPQUFsQixDQUEwQixLQUExQixFQUFpQyxFQUFqQyxDQUFYO0FBQ0QsQ0FGRCxDLENBSUE7OztBQUNBLElBQU1DLGFBQXVCLEdBQUcsU0FBMUJBLGFBQTBCO0FBQUEsc0JBQzlCO0FBQUssYUFBUyxFQUFFQyx3RUFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDRSxxRUFBQyx5REFBRDtBQUFLLFdBQUcsRUFBRUMsdURBQVY7QUFBZ0IsYUFBSyxFQUFFLENBQUMsR0FBRCxDQUF2QjtBQUE4QixpQkFBUyxFQUFFRix3RUFBTSxDQUFDRyxTQUFoRDtBQUEyRCxXQUFHLEVBQUMsVUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFLLGVBQVMsRUFBRUgsd0VBQU0sQ0FBQ0ksTUFBdkI7QUFBQSxnQkFDR1YsSUFBSSxDQUFDVyxHQUFMLENBQVMsVUFBQ1QsR0FBRCxFQUFTO0FBQ2pCLDRCQUNFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFFRCxHQUFHLENBQUNDLEdBQUQsQ0FBZjtBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBRUksd0VBQU0sQ0FBQ00sT0FBckI7QUFBQSxtQ0FDRSxxRUFBQyx3REFBRDtBQUFRLGdCQUFFLEVBQUMsSUFBWDtBQUFBLHFDQUNFO0FBQU0seUJBQVMsRUFBRU4sd0VBQU0sQ0FBQ08sUUFBeEI7QUFBQSwwQkFBbUNYO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQTJCQSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBU0QsT0FWQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQWlCRTtBQUFLLGVBQVMsRUFBRUksd0VBQU0sQ0FBQ1EsVUFBdkI7QUFBQSw2QkFDRSxxRUFBQywwREFBRDtBQUFVLFlBQUksRUFBQyxNQUFmO0FBQUEsK0JBQ0UscUVBQUMsMERBQUQsQ0FBVSxJQUFWO0FBQUEsb0JBQ0dkLElBQUksQ0FBQ1csR0FBTCxDQUFTLFVBQUNULEdBQUQsRUFBUztBQUNqQixnQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUVELEdBQUcsQ0FBQ0MsR0FBRCxDQUFmO0FBQUEscUNBQ0UscUVBQUMsMERBQUQsQ0FBVSxJQUFWO0FBQWUsb0JBQUksRUFBRUE7QUFBckIsaUJBQStCQSxHQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBMkJBLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFLRCxXQU5BO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUQ4QjtBQUFBLENBQWhDOztLQUFNRyxhO0FBa0NTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93YW5pa2FuaS5lYzRjZjMwMjdlYmYyYzc0ZTI0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBIZWFkZXIsIERyb3Bkb3duIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHsgSW1nIH0gZnJvbSAncmVhY3Qtb3B0aW1pemVkLWltYWdlJztcblxuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL2xvZ28ucG5nJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsaW5nL05hdmlnYXRpb25CYXIubW9kdWxlLmNzcyc7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgdGFicy5cbmNvbnN0IHRhYnM6IHN0cmluZ1tdID0gWydXYW5pS2FuaScsICdNYWltYWknLCAnUG9ydGZvbGlvJywgJ0Fib3V0J107XG5jb25zdCB1cmwgPSAodGFiOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGAvJHt0YWIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgJycpfWA7XG59O1xuXG4vLyBOYXZiYXIuXG5jb25zdCBOYXZpZ2F0aW9uQmFyOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICA8SW1nIHNyYz17TG9nb30gc2l6ZXM9e1sxNDBdfSBjbGFzc05hbWU9e3N0eWxlcy5jbGlja2FibGV9IGFsdD1cIm55YS1sb2dvXCIgLz5cbiAgICA8L0xpbms+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxuICAgICAge3RhYnMubWFwKCh0YWIpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGluayBocmVmPXt1cmwodGFiKX0ga2V5PXt0YWJ9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbX0+XG4gICAgICAgICAgICAgIDxIZWFkZXIgYXM9XCJoM1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm92ZXJyaWRlfT57dGFifTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5taW5pbmF2YmFyfT5cbiAgICAgIDxEcm9wZG93biB0ZXh0PVwiRmlsZVwiPlxuICAgICAgICA8RHJvcGRvd24uTWVudT5cbiAgICAgICAgICB7dGFicy5tYXAoKHRhYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17dXJsKHRhYil9IGtleT17dGFifT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSB0ZXh0PXt0YWJ9IGtleT17dGFifSAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICA8L0Ryb3Bkb3duPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25CYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9