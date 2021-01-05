webpackHotUpdate_N_E("pages/wanikani",{

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
/* harmony import */ var _WaniKani_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WaniKani.profile */ "./components/public/WaniKani/WaniKani.profile.tsx");
/* harmony import */ var _WaniKani_profile__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_WaniKani_profile__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_PublicShell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/PublicShell */ "./components/common/PublicShell.tsx");
/* harmony import */ var _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styling/WaniKani.module.css */ "./components/styling/WaniKani.module.css");
/* harmony import */ var _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "/home/kingofboxes/projects/website-project/components/public/WaniKani/WaniKani.tsx",
    _this = undefined;





 // Create Axios instance.

var api = axios__WEBPACK_IMPORTED_MODULE_4___default.a.create({
  baseURL: 'http://localhost:4000/'
});

var WaniKani = function WaniKani(data) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_common_PublicShell__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "WaniKani Progression | kingofboxes's Website",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_WaniKani_profile__WEBPACK_IMPORTED_MODULE_5__["WaniKaniProfile"], {
        data: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_WaniKani_profile__WEBPACK_IMPORTED_MODULE_5__["WaniKaniReviews"], {
        data: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvV2FuaUthbmkvV2FuaUthbmkudHN4Il0sIm5hbWVzIjpbImFwaSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIldhbmlLYW5pIiwiZGF0YSIsInN0eWxlcyIsImNvbnRhaW5lciIsImdldEluaXRpYWxQcm9wcyIsImdldCIsInJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBSUE7QUFFQTtDQUlBOztBQUNBLElBQU1BLEdBQWtCLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUN0Q0MsU0FBTyxFQUFFO0FBRDZCLENBQWIsQ0FBM0I7O0FBSUEsSUFBTUMsUUFBNkIsR0FBRyxTQUFoQ0EsUUFBZ0MsQ0FBQ0MsSUFBRCxFQUFxQjtBQUN6RCxzQkFDRSxxRUFBQywyREFBRDtBQUFhLFNBQUssRUFBQyw4Q0FBbkI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUMsbUVBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw4QkFDRSxxRUFBQyxpRUFBRDtBQUFpQixZQUFJLEVBQUVGO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLGlFQUFEO0FBQWlCLFlBQUksRUFBRUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBVEQsQyxDQVdBOzs7S0FYTUQsUTtBQVlOQSxRQUFRLENBQUNJLGVBQVQsK1NBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1BSLEdBQUcsQ0FBQ1MsR0FBSixDQUFRLFdBQVIsQ0FETzs7QUFBQTtBQUNuQkMsYUFEbUI7QUFFbkJMLGNBRm1CLEdBRURLLEdBQUcsQ0FBQ0wsSUFGSDtBQUFBLDJDQUdsQkEsSUFIa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBM0I7QUFNZUQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd2FuaWthbmkuOWY0Njc0ZDJmOWI1YzJhYmQ0ODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFdLUHJvZmlsZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgV2FuaUthbmlSZXZpZXdzLCBXYW5pS2FuaVByb2ZpbGUgfSBmcm9tICcuL1dhbmlLYW5pLnByb2ZpbGUnO1xuXG5pbXBvcnQgUHVibGljU2hlbGwgZnJvbSAnLi4vLi4vY29tbW9uL1B1YmxpY1NoZWxsJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsaW5nL1dhbmlLYW5pLm1vZHVsZS5jc3MnO1xuXG4vLyBDcmVhdGUgQXhpb3MgaW5zdGFuY2UuXG5jb25zdCBhcGk6IEF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDo0MDAwLycsXG59KTtcblxuY29uc3QgV2FuaUthbmk6IE5leHRQYWdlPFdLUHJvZmlsZT4gPSAoZGF0YTogV0tQcm9maWxlKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFB1YmxpY1NoZWxsIHRpdGxlPVwiV2FuaUthbmkgUHJvZ3Jlc3Npb24gfCBraW5nb2Zib3hlcydzIFdlYnNpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFdhbmlLYW5pUHJvZmlsZSBkYXRhPXtkYXRhfSAvPlxuICAgICAgICA8V2FuaUthbmlSZXZpZXdzIGRhdGE9e2RhdGF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1B1YmxpY1NoZWxsPlxuICApO1xufTtcblxuLy8gRmV0Y2ggZGF0YSBiZWZvcmUgbG9hZC5cbldhbmlLYW5pLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCgnL3dhbmlrYW5pJyk7XG4gIGNvbnN0IGRhdGE6IFdLUHJvZmlsZSA9IHJlcy5kYXRhO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhbmlLYW5pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==