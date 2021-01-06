webpackHotUpdate_N_E("pages/portfolio",{

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
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
              text: tab
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 20
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTmF2aWdhdGlvbkJhci50c3giXSwibmFtZXMiOlsidGFicyIsInVybCIsInRhYiIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIk5hdmlnYXRpb25CYXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJMb2dvIiwiY2xpY2thYmxlIiwibmF2YmFyIiwibWFwIiwibmF2aXRlbSIsIm92ZXJyaWRlIiwibWluaW5hdmJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBSUE7O0FBQ0EsSUFBTUEsSUFBYyxHQUFHLENBQUMsVUFBRCxFQUFhLFFBQWIsRUFBdUIsV0FBdkIsRUFBb0MsT0FBcEMsQ0FBdkI7O0FBQ0EsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsR0FBRCxFQUFpQjtBQUMzQixvQkFBV0EsR0FBRyxDQUFDQyxXQUFKLEdBQWtCQyxPQUFsQixDQUEwQixLQUExQixFQUFpQyxFQUFqQyxDQUFYO0FBQ0QsQ0FGRCxDLENBSUE7OztBQUNBLElBQU1DLGFBQXVCLEdBQUcsU0FBMUJBLGFBQTBCO0FBQUEsc0JBQzlCO0FBQUssYUFBUyxFQUFFQyx3RUFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDRSxxRUFBQyx5REFBRDtBQUFLLFdBQUcsRUFBRUMsdURBQVY7QUFBZ0IsYUFBSyxFQUFFLENBQUMsR0FBRCxDQUF2QjtBQUE4QixpQkFBUyxFQUFFRix3RUFBTSxDQUFDRyxTQUFoRDtBQUEyRCxXQUFHLEVBQUMsVUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFLLGVBQVMsRUFBRUgsd0VBQU0sQ0FBQ0ksTUFBdkI7QUFBQSxnQkFDR1YsSUFBSSxDQUFDVyxHQUFMLENBQVMsVUFBQ1QsR0FBRCxFQUFTO0FBQ2pCLDRCQUNFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFFRCxHQUFHLENBQUNDLEdBQUQsQ0FBZjtBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBRUksd0VBQU0sQ0FBQ00sT0FBckI7QUFBQSxtQ0FDRSxxRUFBQyx3REFBRDtBQUFRLGdCQUFFLEVBQUMsSUFBWDtBQUFBLHFDQUNFO0FBQU0seUJBQVMsRUFBRU4sd0VBQU0sQ0FBQ08sUUFBeEI7QUFBQSwwQkFBbUNYO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQTJCQSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBU0QsT0FWQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQWlCRTtBQUFLLGVBQVMsRUFBRUksd0VBQU0sQ0FBQ1EsVUFBdkI7QUFBQSw2QkFDRSxxRUFBQywwREFBRDtBQUFVLFlBQUksRUFBQyxNQUFmO0FBQUEsK0JBQ0UscUVBQUMsMERBQUQsQ0FBVSxJQUFWO0FBQUEsb0JBQ0dkLElBQUksQ0FBQ1csR0FBTCxDQUFTLFVBQUNULEdBQUQsRUFBUztBQUNqQixnQ0FBTyxxRUFBQywwREFBRCxDQUFVLElBQVY7QUFBZSxrQkFBSSxFQUFFQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBQ0QsV0FGQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEOEI7QUFBQSxDQUFoQzs7S0FBTUcsYTtBQThCU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9ydGZvbGlvLmEzMWE3NmYyYjNkMDQzZjk2ZTg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEhlYWRlciwgRHJvcGRvd24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgeyBJbWcgfSBmcm9tICdyZWFjdC1vcHRpbWl6ZWQtaW1hZ2UnO1xuXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi9hc3NldHMvbG9nby5wbmcnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxpbmcvTmF2aWdhdGlvbkJhci5tb2R1bGUuY3NzJztcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0YWJzLlxuY29uc3QgdGFiczogc3RyaW5nW10gPSBbJ1dhbmlLYW5pJywgJ01haW1haScsICdQb3J0Zm9saW8nLCAnQWJvdXQnXTtcbmNvbnN0IHVybCA9ICh0YWI6IHN0cmluZykgPT4ge1xuICByZXR1cm4gYC8ke3RhYi50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJyl9YDtcbn07XG5cbi8vIE5hdmJhci5cbmNvbnN0IE5hdmlnYXRpb25CYXI6IFJlYWN0LkZDID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgIDxJbWcgc3JjPXtMb2dvfSBzaXplcz17WzE0MF19IGNsYXNzTmFtZT17c3R5bGVzLmNsaWNrYWJsZX0gYWx0PVwibnlhLWxvZ29cIiAvPlxuICAgIDwvTGluaz5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XG4gICAgICB7dGFicy5tYXAoKHRhYikgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e3VybCh0YWIpfSBrZXk9e3RhYn0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtfT5cbiAgICAgICAgICAgICAgPEhlYWRlciBhcz1cImgzXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnJpZGV9Pnt0YWJ9PC9zcGFuPlxuICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pbmluYXZiYXJ9PlxuICAgICAgPERyb3Bkb3duIHRleHQ9XCJGaWxlXCI+XG4gICAgICAgIDxEcm9wZG93bi5NZW51PlxuICAgICAgICAgIHt0YWJzLm1hcCgodGFiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPERyb3Bkb3duLkl0ZW0gdGV4dD17dGFifSAvPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxuICAgICAgPC9Ecm9wZG93bj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==