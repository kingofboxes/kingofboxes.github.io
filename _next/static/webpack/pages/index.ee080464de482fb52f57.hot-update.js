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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/styling/NavigationBar.module.css":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/styling/NavigationBar.module.css ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".NavigationBar_container__3mqpS {\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n    -webkit-flex-direction: row;\n       -moz-box-orient: horizontal;\n       -moz-box-direction: normal;\n            flex-direction: row;\n    -webkit-align-items: center;\n       -moz-box-align: center;\n            align-items: center;\n    width: 100%;\n    height: 75px;\n    background-color: #1B1C1D;\n    padding: 10px 20% 10px 20%;\n}\n\n.NavigationBar_navbar__2dFlv {\n    margin-left: 50px;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: flex;\n    -webkit-flex-direction: row;\n       -moz-box-orient: horizontal;\n       -moz-box-direction: normal;\n            flex-direction: row;\n}\n\n.NavigationBar_navitem__39QnU {\n    font-size: 1.3em;\n    color:white;\n    margin-left: 20px;\n}\n\n.NavigationBar_override__3kXAD {\n    color: white;\n}", "",{"version":3,"sources":["webpack://components/styling/NavigationBar.module.css"],"names":[],"mappings":"AAAA;IACI,qBAAa;IAAb,iBAAa;IAAb,aAAa;IACb,2BAAmB;OAAnB,2BAAmB;OAAnB,0BAAmB;YAAnB,mBAAmB;IACnB,2BAAmB;OAAnB,sBAAmB;YAAnB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,0BAA0B;AAC9B;;AAEA;IACI,iBAAiB;IACjB,qBAAa;IAAb,iBAAa;IAAb,aAAa;IACb,2BAAmB;OAAnB,2BAAmB;OAAnB,0BAAmB;YAAnB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB","sourcesContent":[".container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    height: 75px;\n    background-color: #1B1C1D;\n    padding: 10px 20% 10px 20%;\n}\n\n.navbar {\n    margin-left: 50px;\n    display: flex;\n    flex-direction: row;\n}\n\n.navitem {\n    font-size: 1.3em;\n    color:white;\n    margin-left: 20px;\n}\n\n.override {\n    color: white;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "NavigationBar_container__3mqpS",
	"navbar": "NavigationBar_navbar__2dFlv",
	"navitem": "NavigationBar_navitem__39QnU",
	"override": "NavigationBar_override__3kXAD"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTmF2aWdhdGlvbkJhci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3R5bGluZy9OYXZpZ2F0aW9uQmFyLm1vZHVsZS5jc3MiXSwibmFtZXMiOlsidGFicyIsInVybCIsInRhYiIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIk5hdmlnYXRpb25CYXIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJuYXZiYXIiLCJtYXAiLCJuYXZpdGVtIiwib3ZlcnJpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBLElBQU1BLElBQWMsR0FBRyxDQUFDLFVBQUQsRUFBYSxVQUFiLENBQXZCOztBQUNBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEdBQUQsRUFBaUI7QUFDM0Isb0JBQVdBLEdBQUcsQ0FBQ0MsV0FBSixHQUFrQkMsT0FBbEIsQ0FBMEIsS0FBMUIsRUFBaUMsRUFBakMsQ0FBWDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLHNCQUNwQjtBQUFLLGFBQVMsRUFBRUMsd0VBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQWUsUUFBRSxLQUFqQjtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVELHdFQUFNLENBQUNFLE1BQXZCO0FBQUEsZ0JBQ0dSLElBQUksQ0FBQ1MsR0FBTCxDQUFTLFVBQUNQLEdBQUQsRUFBUztBQUNqQiw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBRUQsR0FBRyxDQUFDQyxHQUFELENBQWY7QUFBc0IsWUFBRSxFQUFFLEtBQTBCRCxHQUFHLENBQUNDLEdBQUQsQ0FBdkQ7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUVJLHdFQUFNLENBQUNJLE9BQXJCO0FBQUEsbUNBQ0UscUVBQUMsd0RBQUQ7QUFBUSxnQkFBRSxFQUFDLElBQVg7QUFBZ0IsdUJBQVMsRUFBRUosd0VBQU0sQ0FBQ0ssUUFBbEM7QUFBQSx3QkFDR1Q7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQW1FQSxHQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBU0QsT0FWQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEb0I7QUFBQSxDQUF0Qjs7S0FBTUcsYTtBQXFCU0EsNEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsOEJBQThCLFFBQVMsb0NBQW9DLDRCQUE0Qix3QkFBd0Isb0JBQW9CLGtDQUFrQyxxQ0FBcUMsb0NBQW9DLGtDQUFrQyxrQ0FBa0MsZ0NBQWdDLGtDQUFrQyxrQkFBa0IsbUJBQW1CLGdDQUFnQyxpQ0FBaUMsR0FBRyxrQ0FBa0Msd0JBQXdCLDRCQUE0Qix3QkFBd0Isb0JBQW9CLGtDQUFrQyxxQ0FBcUMsb0NBQW9DLGtDQUFrQyxHQUFHLG1DQUFtQyx1QkFBdUIsa0JBQWtCLHdCQUF3QixHQUFHLG9DQUFvQyxtQkFBbUIsR0FBRyxPQUFPLDRHQUE0RyxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsc0NBQXNDLG9CQUFvQiwwQkFBMEIsMEJBQTBCLGtCQUFrQixtQkFBbUIsZ0NBQWdDLGlDQUFpQyxHQUFHLGFBQWEsd0JBQXdCLG9CQUFvQiwwQkFBMEIsR0FBRyxjQUFjLHVCQUF1QixrQkFBa0Isd0JBQXdCLEdBQUcsZUFBZSxtQkFBbUIsR0FBRyxtQkFBbUI7QUFDbnlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWUwODA0NjRkZTQ4MmZiNTJmNTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBCdXR0b24sIEhlYWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsaW5nL05hdmlnYXRpb25CYXIubW9kdWxlLmNzcyc7XG5cbmNvbnN0IHRhYnM6IHN0cmluZ1tdID0gWydXYW5pS2FuaScsICdBYm91dCBNZSddO1xuY29uc3QgdXJsID0gKHRhYjogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBgLyR7dGFiLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKX1gO1xufTtcblxuY29uc3QgTmF2aWdhdGlvbkJhciA9ICgpOiBKU1guRWxlbWVudCA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICA8TGluayBocmVmPVwiL1wiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvJ30+XG4gICAgICA8QnV0dG9uPlBsYWNlaG9sZGVyIExvZ288L0J1dHRvbj5cbiAgICA8L0xpbms+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxuICAgICAge3RhYnMubWFwKCh0YWIpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGluayBocmVmPXt1cmwodGFiKX0gYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgdXJsKHRhYil9IGtleT17dGFifT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PlxuICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDNcIiBjbGFzc05hbWU9e3N0eWxlcy5vdmVycmlkZX0+XG4gICAgICAgICAgICAgICAge3RhYn1cbiAgICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJhcjtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5OYXZpZ2F0aW9uQmFyX2NvbnRhaW5lcl9fM21xcFMge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgIC1tb3otYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gICAgICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjFDMUQ7XFxuICAgIHBhZGRpbmc6IDEwcHggMjAlIDEwcHggMjAlO1xcbn1cXG5cXG4uTmF2aWdhdGlvbkJhcl9uYXZiYXJfXzJkRmx2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gICAgZGlzcGxheTogLW1vei1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgLW1vei1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uTmF2aWdhdGlvbkJhcl9uYXZpdGVtX18zOVFuVSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLk5hdmlnYXRpb25CYXJfb3ZlcnJpZGVfXzNrWEFEIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9zdHlsaW5nL05hdmlnYXRpb25CYXIubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFhO0lBQWIsaUJBQWE7SUFBYixhQUFhO0lBQ2IsMkJBQW1CO09BQW5CLDJCQUFtQjtPQUFuQiwwQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDJCQUFtQjtPQUFuQixzQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBYTtJQUFiLGlCQUFhO0lBQWIsYUFBYTtJQUNiLDJCQUFtQjtPQUFuQiwyQkFBbUI7T0FBbkIsMEJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFCMUMxRDtcXG4gICAgcGFkZGluZzogMTBweCAyMCUgMTBweCAyMCU7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLm5hdml0ZW0ge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5vdmVycmlkZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTmF2aWdhdGlvbkJhcl9jb250YWluZXJfXzNtcXBTXCIsXG5cdFwibmF2YmFyXCI6IFwiTmF2aWdhdGlvbkJhcl9uYXZiYXJfXzJkRmx2XCIsXG5cdFwibmF2aXRlbVwiOiBcIk5hdmlnYXRpb25CYXJfbmF2aXRlbV9fMzlRblVcIixcblx0XCJvdmVycmlkZVwiOiBcIk5hdmlnYXRpb25CYXJfb3ZlcnJpZGVfXzNrWEFEXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==