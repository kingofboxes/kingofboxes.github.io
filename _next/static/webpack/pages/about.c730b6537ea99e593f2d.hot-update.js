webpackHotUpdate_N_E("pages/about",{

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
/* harmony import */ var _assets_nyalogo3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/nyalogo3.png */ "./assets/nyalogo3.png");
/* harmony import */ var _assets_nyalogo3_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_nyalogo3_png__WEBPACK_IMPORTED_MODULE_5__);
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
  columnNumber: 27
}, undefined); // Navbar.


var NavigationBar = function NavigationBar() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_optimized_image__WEBPACK_IMPORTED_MODULE_4__["Img"], {
        src: _assets_nyalogo3_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        sizes: [140],
        className: _styling_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.clickable,
        alt: "nya-logo",
        webp: true,
        rawSrc: {
          fallback: {
            140: {
              1: __webpack_require__(/*! ../../assets/nyalogo3.png?url&width=140 */ "./assets/nyalogo3.png?url&width=140")
            }
          },
          webp: {
            140: {
              1: __webpack_require__(/*! ../../assets/nyalogo3.png?webp&width=140 */ "./assets/nyalogo3.png?webp&width=140")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTmF2aWdhdGlvbkJhci50c3giXSwibmFtZXMiOlsidGFicyIsInVybCIsInRhYiIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIm1lbnUiLCJOYXZpZ2F0aW9uQmFyIiwic3R5bGVzIiwiY29udGFpbmVyIiwiTG9nbyIsImNsaWNrYWJsZSIsIm5hdmJhciIsIm1hcCIsIm5hdml0ZW0iLCJvdmVycmlkZSIsIm1pbmluYXZiYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtDQUlBOztBQUNBLElBQU1BLElBQWMsR0FBRyxDQUFDLFVBQUQsRUFBYSxRQUFiLEVBQXVCLFdBQXZCLEVBQW9DLE9BQXBDLENBQXZCOztBQUNBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEdBQUQsRUFBaUI7QUFDM0Isb0JBQVdBLEdBQUcsQ0FBQ0MsV0FBSixHQUFrQkMsT0FBbEIsQ0FBMEIsS0FBMUIsRUFBaUMsRUFBakMsQ0FBWDtBQUNELENBRkQsQyxDQUlBOzs7QUFDQSxJQUFNQyxJQUFpQixnQkFBRyxxRUFBQyxzREFBRDtBQUFNLE1BQUksRUFBQyxNQUFYO0FBQWtCLFVBQVEsTUFBMUI7QUFBMkIsTUFBSSxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBMUIsQyxDQUVBOzs7QUFDQSxJQUFNQyxhQUF1QixHQUFHLFNBQTFCQSxhQUEwQjtBQUFBLHNCQUM5QjtBQUFLLGFBQVMsRUFBRUMsd0VBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0UscUVBQUMseURBQUQ7QUFBSyxXQUFHLEVBQUVDLDJEQUFWO0FBQWdCLGFBQUssRUFBRSxDQUFDLEdBQUQsQ0FBdkI7QUFBOEIsaUJBQVMsRUFBRUYsd0VBQU0sQ0FBQ0csU0FBaEQ7QUFBMkQsV0FBRyxFQUFDLFVBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVILHdFQUFNLENBQUNJLE1BQXZCO0FBQUEsZ0JBQ0dYLElBQUksQ0FBQ1ksR0FBTCxDQUFTLFVBQUNWLEdBQUQsRUFBUztBQUNqQiw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBRUQsR0FBRyxDQUFDQyxHQUFELENBQWY7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUVLLHdFQUFNLENBQUNNLE9BQXJCO0FBQUEsbUNBQ0UscUVBQUMsd0RBQUQ7QUFBUSxnQkFBRSxFQUFDLElBQVg7QUFBQSxxQ0FDRTtBQUFNLHlCQUFTLEVBQUVOLHdFQUFNLENBQUNPLFFBQXhCO0FBQUEsMEJBQW1DWjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUEyQkEsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVNELE9BVkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFpQkU7QUFBSyxlQUFTLEVBQUVLLHdFQUFNLENBQUNRLFVBQXZCO0FBQUEsNkJBQ0UscUVBQUMsMERBQUQ7QUFBVSxlQUFPLEVBQUVWLElBQW5CO0FBQXlCLFlBQUksRUFBRSxJQUEvQjtBQUFBLCtCQUNFLHFFQUFDLDBEQUFELENBQVUsSUFBVjtBQUFBLG9CQUNHTCxJQUFJLENBQUNZLEdBQUwsQ0FBUyxVQUFDVixHQUFELEVBQVM7QUFDakIsZ0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFFRCxHQUFHLENBQUNDLEdBQUQsQ0FBZjtBQUFBLHFDQUNFLHFFQUFDLDBEQUFELENBQVUsSUFBVjtBQUFlLG9CQUFJLEVBQUVBO0FBQXJCLGlCQUErQkEsR0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQTJCQSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBS0QsV0FOQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEOEI7QUFBQSxDQUFoQzs7S0FBTUksYTtBQWtDU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuYzczMGI2NTM3ZWE5OWU1OTNmMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgSGVhZGVyLCBEcm9wZG93biwgSWNvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7IEltZyB9IGZyb20gJ3JlYWN0LW9wdGltaXplZC1pbWFnZSc7XG5cbmltcG9ydCBMb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy9ueWFsb2dvMy5wbmcnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxpbmcvTmF2aWdhdGlvbkJhci5tb2R1bGUuY3NzJztcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0YWJzLlxuY29uc3QgdGFiczogc3RyaW5nW10gPSBbJ1dhbmlLYW5pJywgJ01haW1haScsICdQb3J0Zm9saW8nLCAnQWJvdXQnXTtcbmNvbnN0IHVybCA9ICh0YWI6IHN0cmluZykgPT4ge1xuICByZXR1cm4gYC8ke3RhYi50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJyl9YDtcbn07XG5cbi8vIE1lbnUgaWNvbi5cbmNvbnN0IG1lbnU6IEpTWC5FbGVtZW50ID0gPEljb24gbmFtZT1cImJhcnNcIiBpbnZlcnRlZCBzaXplPVwibGFyZ2VcIiAvPjtcblxuLy8gTmF2YmFyLlxuY29uc3QgTmF2aWdhdGlvbkJhcjogUmVhY3QuRkMgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgPEltZyBzcmM9e0xvZ299IHNpemVzPXtbMTQwXX0gY2xhc3NOYW1lPXtzdHlsZXMuY2xpY2thYmxlfSBhbHQ9XCJueWEtbG9nb1wiIC8+XG4gICAgPC9MaW5rPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyfT5cbiAgICAgIHt0YWJzLm1hcCgodGFiKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17dXJsKHRhYil9IGtleT17dGFifT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PlxuICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5vdmVycmlkZX0+e3RhYn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWluaW5hdmJhcn0+XG4gICAgICA8RHJvcGRvd24gdHJpZ2dlcj17bWVudX0gaWNvbj17bnVsbH0+XG4gICAgICAgIDxEcm9wZG93bi5NZW51PlxuICAgICAgICAgIHt0YWJzLm1hcCgodGFiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGluayBocmVmPXt1cmwodGFiKX0ga2V5PXt0YWJ9PlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIHRleHQ9e3RhYn0ga2V5PXt0YWJ9IC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgIDwvRHJvcGRvd24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=