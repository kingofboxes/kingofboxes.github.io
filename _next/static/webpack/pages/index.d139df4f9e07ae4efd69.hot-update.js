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
}; // Menu icon.


var menu = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
  name: "bars",
  inverted: true,
  size: "large"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 17,
  columnNumber: 14
}, undefined); // Navbar.


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
        lineNumber: 23,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
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
                lineNumber: 31,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this)
        }, tab, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.mininavbar,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
        trigger: menu,
        icon: null,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
          children: tabs.map(function (tab) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: url(tab),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
                text: tab
              }, tab, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, _this)
            }, tab, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTmF2aWdhdGlvbkJhci50c3giXSwibmFtZXMiOlsidGFicyIsInVybCIsInRhYiIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIm1lbnUiLCJOYXZpZ2F0aW9uQmFyIiwic3R5bGVzIiwiY29udGFpbmVyIiwiTG9nbyIsImNsaWNrYWJsZSIsIm5hdmJhciIsIm1hcCIsIm5hdml0ZW0iLCJvdmVycmlkZSIsIm1pbmluYXZiYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtDQUlBOztBQUNBLElBQU1BLElBQWMsR0FBRyxDQUFDLFVBQUQsRUFBYSxRQUFiLEVBQXVCLFdBQXZCLEVBQW9DLE9BQXBDLENBQXZCOztBQUNBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEdBQUQsRUFBaUI7QUFDM0Isb0JBQVdBLEdBQUcsQ0FBQ0MsV0FBSixHQUFrQkMsT0FBbEIsQ0FBMEIsS0FBMUIsRUFBaUMsRUFBakMsQ0FBWDtBQUNELENBRkQsQyxDQUlBOzs7QUFDQSxJQUFNQyxJQUFJLGdCQUFHLHFFQUFDLHNEQUFEO0FBQU0sTUFBSSxFQUFDLE1BQVg7QUFBa0IsVUFBUSxNQUExQjtBQUEyQixNQUFJLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFiLEMsQ0FFQTs7O0FBQ0EsSUFBTUMsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEI7QUFBQSxzQkFDOUI7QUFBSyxhQUFTLEVBQUVDLHdFQUFNLENBQUNDLFNBQXZCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBLDZCQUNFLHFFQUFDLHlEQUFEO0FBQUssV0FBRyxFQUFFQyx1REFBVjtBQUFnQixhQUFLLEVBQUUsQ0FBQyxHQUFELENBQXZCO0FBQThCLGlCQUFTLEVBQUVGLHdFQUFNLENBQUNHLFNBQWhEO0FBQTJELFdBQUcsRUFBQyxVQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFFSCx3RUFBTSxDQUFDSSxNQUF2QjtBQUFBLGdCQUNHWCxJQUFJLENBQUNZLEdBQUwsQ0FBUyxVQUFDVixHQUFELEVBQVM7QUFDakIsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUVELEdBQUcsQ0FBQ0MsR0FBRCxDQUFmO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFFSyx3RUFBTSxDQUFDTSxPQUFyQjtBQUFBLG1DQUNFLHFFQUFDLHdEQUFEO0FBQVEsZ0JBQUUsRUFBQyxJQUFYO0FBQUEscUNBQ0U7QUFBTSx5QkFBUyxFQUFFTix3RUFBTSxDQUFDTyxRQUF4QjtBQUFBLDBCQUFtQ1o7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBMkJBLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFTRCxPQVZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBaUJFO0FBQUssZUFBUyxFQUFFSyx3RUFBTSxDQUFDUSxVQUF2QjtBQUFBLDZCQUNFLHFFQUFDLDBEQUFEO0FBQVUsZUFBTyxFQUFFVixJQUFuQjtBQUF5QixZQUFJLEVBQUUsSUFBL0I7QUFBQSwrQkFDRSxxRUFBQywwREFBRCxDQUFVLElBQVY7QUFBQSxvQkFDR0wsSUFBSSxDQUFDWSxHQUFMLENBQVMsVUFBQ1YsR0FBRCxFQUFTO0FBQ2pCLGdDQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBRUQsR0FBRyxDQUFDQyxHQUFELENBQWY7QUFBQSxxQ0FDRSxxRUFBQywwREFBRCxDQUFVLElBQVY7QUFBZSxvQkFBSSxFQUFFQTtBQUFyQixpQkFBK0JBLEdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUEyQkEsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQUtELFdBTkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRDhCO0FBQUEsQ0FBaEM7O0tBQU1JLGE7QUFrQ1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQxMzlkZjRmOWUwN2FlNGVmZDY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEhlYWRlciwgRHJvcGRvd24sIEljb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgeyBJbWcgfSBmcm9tICdyZWFjdC1vcHRpbWl6ZWQtaW1hZ2UnO1xuXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi9hc3NldHMvbG9nby5wbmcnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxpbmcvTmF2aWdhdGlvbkJhci5tb2R1bGUuY3NzJztcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0YWJzLlxuY29uc3QgdGFiczogc3RyaW5nW10gPSBbJ1dhbmlLYW5pJywgJ01haW1haScsICdQb3J0Zm9saW8nLCAnQWJvdXQnXTtcbmNvbnN0IHVybCA9ICh0YWI6IHN0cmluZykgPT4ge1xuICByZXR1cm4gYC8ke3RhYi50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJyl9YDtcbn07XG5cbi8vIE1lbnUgaWNvbi5cbmNvbnN0IG1lbnUgPSA8SWNvbiBuYW1lPVwiYmFyc1wiIGludmVydGVkIHNpemU9XCJsYXJnZVwiIC8+O1xuXG4vLyBOYXZiYXIuXG5jb25zdCBOYXZpZ2F0aW9uQmFyOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICA8SW1nIHNyYz17TG9nb30gc2l6ZXM9e1sxNDBdfSBjbGFzc05hbWU9e3N0eWxlcy5jbGlja2FibGV9IGFsdD1cIm55YS1sb2dvXCIgLz5cbiAgICA8L0xpbms+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxuICAgICAge3RhYnMubWFwKCh0YWIpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGluayBocmVmPXt1cmwodGFiKX0ga2V5PXt0YWJ9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbX0+XG4gICAgICAgICAgICAgIDxIZWFkZXIgYXM9XCJoM1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm92ZXJyaWRlfT57dGFifTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5taW5pbmF2YmFyfT5cbiAgICAgIDxEcm9wZG93biB0cmlnZ2VyPXttZW51fSBpY29uPXtudWxsfT5cbiAgICAgICAgPERyb3Bkb3duLk1lbnU+XG4gICAgICAgICAge3RhYnMubWFwKCh0YWIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3VybCh0YWIpfSBrZXk9e3RhYn0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gdGV4dD17dGFifSBrZXk9e3RhYn0gLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxuICAgICAgPC9Ecm9wZG93bj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==