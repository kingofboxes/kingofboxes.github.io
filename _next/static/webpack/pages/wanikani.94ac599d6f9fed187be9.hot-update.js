webpackHotUpdate_N_E("pages/wanikani",{

/***/ "./assets/avatar.png":
false,

/***/ "./assets/avatar.png?url&width=128":
false,

/***/ "./assets/avatar.png?webp&width=128":
false,

/***/ "./components/public/WaniKani/WaniKani.tsx":
/*!*************************************************!*\
  !*** ./components/public/WaniKani/WaniKani.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_PublicShell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/PublicShell */ "./components/common/PublicShell.tsx");
/* harmony import */ var _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styling/WaniKani.module.css */ "./components/styling/WaniKani.module.css");
/* harmony import */ var _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "/home/kingofboxes/projects/website-project/components/public/WaniKani/WaniKani.tsx",
    _this = undefined;




 // Create Axios instance.

var api = axios__WEBPACK_IMPORTED_MODULE_4___default.a.create({
  baseURL: 'http://localhost:4000/'
});

var WaniKani = function WaniKani(data) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_common_PublicShell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "WaniKani Progression | kingofboxes's Website",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
}; // Fetch data before load.


_c = WaniKani;
WaniKani.getInitialProps = /*#__PURE__*/Object(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return api.get('/wanikani');

        case 2:
          res = _context.sent;
          data = res.data;
          return _context.abrupt("return", data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (WaniKani);

var _c;

$RefreshReg$(_c, "WaniKani");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/react-optimized-image/lib/components/Img.js":
false,

/***/ "./node_modules/react-optimized-image/lib/components/Svg.js":
false,

/***/ "./node_modules/react-optimized-image/lib/index.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvV2FuaUthbmkvV2FuaUthbmkudHN4Il0sIm5hbWVzIjpbImFwaSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIldhbmlLYW5pIiwiZGF0YSIsInN0eWxlcyIsImNvbnRhaW5lciIsImdldEluaXRpYWxQcm9wcyIsImdldCIsInJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQU1BO0NBSUE7O0FBQ0EsSUFBTUEsR0FBa0IsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQ3RDQyxTQUFPLEVBQUU7QUFENkIsQ0FBYixDQUEzQjs7QUFJQSxJQUFNQyxRQUE2QixHQUFHLFNBQWhDQSxRQUFnQyxDQUFDQyxJQUFELEVBQXFCO0FBQ3pELHNCQUNFLHFFQUFDLDJEQUFEO0FBQWEsU0FBSyxFQUFDLDhDQUFuQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQyxtRUFBTSxDQUFDQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBM0JELEMsQ0E2QkE7OztLQTdCTUgsUTtBQThCTkEsUUFBUSxDQUFDSSxlQUFULCtTQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNQUixHQUFHLENBQUNTLEdBQUosQ0FBUSxXQUFSLENBRE87O0FBQUE7QUFDbkJDLGFBRG1CO0FBRW5CTCxjQUZtQixHQUVESyxHQUFHLENBQUNMLElBRkg7QUFBQSwyQ0FHbEJBLElBSGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTNCO0FBTWVELHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dhbmlrYW5pLjk0YWM1OTlkNmY5ZmVkMTg3YmU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgSW1nIH0gZnJvbSAncmVhY3Qtb3B0aW1pemVkLWltYWdlJztcblxuaW1wb3J0IHsgV0tQcm9maWxlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi8uLi9hc3NldHMvYXZhdGFyLnBuZyc7XG5cbmltcG9ydCBQdWJsaWNTaGVsbCBmcm9tICcuLi8uLi9jb21tb24vUHVibGljU2hlbGwnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxpbmcvV2FuaUthbmkubW9kdWxlLmNzcyc7XG5cbi8vIENyZWF0ZSBBeGlvcyBpbnN0YW5jZS5cbmNvbnN0IGFwaTogQXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvJyxcbn0pO1xuXG5jb25zdCBXYW5pS2FuaTogTmV4dFBhZ2U8V0tQcm9maWxlPiA9IChkYXRhOiBXS1Byb2ZpbGUpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UHVibGljU2hlbGwgdGl0bGU9XCJXYW5pS2FuaSBQcm9ncmVzc2lvbiB8IGtpbmdvZmJveGVzJ3MgV2Vic2l0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICB7LyogXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxuICAgICAgICAgICAgPEltZyBzcmM9e0F2YXRhcn0gc2l6ZXM9e1sxMjhdfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfT5cbiAgICAgICAgICAgICAgPGEgaHJlZj17ZGF0YS51c2VyLnByb2ZpbGV9PntkYXRhLnVzZXIudXNlcm5hbWV9PC9hPlxuICAgICAgICAgICAgICA8cD5MZXZlbDoge2RhdGEudXNlci5sZXZlbH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+XG4gICAgICAgICAgICAgIDxwPkRhdGUgU3RhcnRlZDoge2RhdGEudXNlci5kYXRlX3N0YXJ0ZWR9PC9wPlxuICAgICAgICAgICAgICA8cD5MYXN0IFVwZGF0ZWQ6IHtkYXRhLnVzZXIudGltZV91cGRhdGVkfTwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgSXRlbXMgbGVhcm50OiB7ZGF0YS5pdGVtcy5yYWRpY2FsfSByYWRpY2Fscywge2RhdGEuaXRlbXMua2Fuaml9IGthbmppLHsnICd9XG4gICAgICAgICAgICAgICAge2RhdGEuaXRlbXMudm9jYWJ1bGFyeX0gdm9jYWJ1bGFyeS57JyAnfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9QdWJsaWNTaGVsbD5cbiAgKTtcbn07XG5cbi8vIEZldGNoIGRhdGEgYmVmb3JlIGxvYWQuXG5XYW5pS2FuaS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXQoJy93YW5pa2FuaScpO1xuICBjb25zdCBkYXRhOiBXS1Byb2ZpbGUgPSByZXMuZGF0YTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYW5pS2FuaTtcbiJdLCJzb3VyY2VSb290IjoiIn0=