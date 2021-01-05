webpackHotUpdate_N_E("pages/wanikani",{

/***/ "./components/public/WaniKani/WaniKani.profile.tsx":
/*!*********************************************************!*\
  !*** ./components/public/WaniKani/WaniKani.profile.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _WaniKaniModule = _interopRequireDefault(__webpack_require__(/*! ../../styling/WaniKani.module.css */ "./components/styling/WaniKani.module.css"));

var _reactOptimizedImage = __webpack_require__(/*! react-optimized-image */ "./node_modules/react-optimized-image/lib/index.js");

var _avatar = _interopRequireDefault(__webpack_require__(/*! ../../../assets/avatar.png */ "./assets/avatar.png"));

var _jsxFileName = "/home/kingofboxes/projects/website-project/components/public/WaniKani/WaniKani.profile.tsx",
    _this = void 0;

var WaniKaniProfile = function WaniKaniProfile(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    className: _WaniKaniModule["default"].wkcontainer,
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: _WaniKaniModule["default"].profile,
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: _WaniKaniModule["default"].avatar,
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactOptimizedImage.Img, {
          src: _avatar["default"],
          sizes: [128],
          webp: true,
          rawSrc: {
            fallback: {
              128: {
                1: __webpack_require__(/*! ../../../assets/avatar.png?url&width=128 */ "./assets/avatar.png?url&width=128")
              }
            },
            webp: {
              128: {
                1: __webpack_require__(/*! ../../../assets/avatar.png?webp&width=128 */ "./assets/avatar.png?webp&width=128")
              }
            }
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: _WaniKaniModule["default"].wrapper,
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          className: _WaniKaniModule["default"].progress,
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("a", {
            href: data.user.profile,
            children: data.user.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
            children: ["Level: ", data.user.level]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          className: _WaniKaniModule["default"].summary,
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
            children: ["Date Started: ", data.user.date_started]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
            children: ["Last Updated: ", data.user.time_updated]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
            children: ["Items learnt: ", data.items.radical, " radicals, ", data.items.kanji, " kanji,", ' ', data.items.vocabulary, " vocabulary.", ' ']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_c = WaniKaniProfile;

var WaniKaniAccuracy = function WaniKaniAccuracy(_ref2) {
  var data = _ref2.data;
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    className: _WaniKaniModule["default"].wkcontainer,
    children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: _WaniKaniModule["default"].profile,
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: _WaniKaniModule["default"].avatar,
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactOptimizedImage.Img, {
          src: _avatar["default"],
          sizes: [128],
          webp: true,
          rawSrc: {
            fallback: {
              128: {
                1: __webpack_require__(/*! ../../../assets/avatar.png?url&width=128 */ "./assets/avatar.png?url&width=128")
              }
            },
            webp: {
              128: {
                1: __webpack_require__(/*! ../../../assets/avatar.png?webp&width=128 */ "./assets/avatar.png?webp&width=128")
              }
            }
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: _WaniKaniModule["default"].wrapper,
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          className: _WaniKaniModule["default"].progress,
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("a", {
            href: data.user.profile,
            children: data.user.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
            children: ["Level: ", data.user.level]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          className: _WaniKaniModule["default"].summary,
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
            children: ["Date Started: ", data.user.date_started]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
            children: ["Last Updated: ", data.user.time_updated]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
            children: ["Items learnt: ", data.items.radical, " radicals, ", data.items.kanji, " kanji,", ' ', data.items.vocabulary, " vocabulary.", ' ']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, _this);
};

_c2 = WaniKaniAccuracy;
module.exports = {
  WaniKaniProfile: WaniKaniProfile,
  WaniKaniAccuracy: WaniKaniAccuracy
};

var _c, _c2;

$RefreshReg$(_c, "WaniKaniProfile");
$RefreshReg$(_c2, "WaniKaniAccuracy");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_WaniKani_profile__WEBPACK_IMPORTED_MODULE_5___default.a, {
        data: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvV2FuaUthbmkvV2FuaUthbmkucHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHVibGljL1dhbmlLYW5pL1dhbmlLYW5pLnRzeCJdLCJuYW1lcyI6WyJXYW5pS2FuaVByb2ZpbGUiLCJkYXRhIiwic3R5bGVzIiwid2tjb250YWluZXIiLCJwcm9maWxlIiwiYXZhdGFyIiwiQXZhdGFyIiwid3JhcHBlciIsInByb2dyZXNzIiwidXNlciIsInVzZXJuYW1lIiwibGV2ZWwiLCJzdW1tYXJ5IiwiZGF0ZV9zdGFydGVkIiwidGltZV91cGRhdGVkIiwiaXRlbXMiLCJyYWRpY2FsIiwia2FuamkiLCJ2b2NhYnVsYXJ5IiwiV2FuaUthbmlBY2N1cmFjeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcGkiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJXYW5pS2FuaSIsImNvbnRhaW5lciIsImdldEluaXRpYWxQcm9wcyIsImdldCIsInJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOzs7OztBQU1BLElBQU1BLGVBQTZDLEdBQUcsU0FBaERBLGVBQWdELE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDbEUsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDJCQUFPQyxXQUF2QjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFRCwyQkFBT0UsT0FBdkI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVGLDJCQUFPRyxNQUF2QjtBQUFBLCtCQUNFLDJCQUFDLHdCQUFEO0FBQUssYUFBRyxFQUFFQyxrQkFBVjtBQUFrQixlQUFLLEVBQUUsQ0FBQyxHQUFELENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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Q0FBQ08sR0FBSixDQUFRLFdBQVIsQ0FETzs7QUFBQTtBQUNuQkMsYUFEbUI7QUFFbkI3QixjQUZtQixHQUVENkIsR0FBRyxDQUFDN0IsSUFGSDtBQUFBLDJDQUdsQkEsSUFIa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBM0I7QUFNZXlCLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dhbmlrYW5pLmJjODdjOGQ4Y2NmY2QwNTY5NTlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV0tQcm9maWxlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsaW5nL1dhbmlLYW5pLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgSW1nIH0gZnJvbSAncmVhY3Qtb3B0aW1pemVkLWltYWdlJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2F2YXRhci5wbmcnO1xuXG5pbnRlcmZhY2UgV0tQcm9maWxlSW50ZXJmYWNlIHtcbiAgZGF0YTogV0tQcm9maWxlO1xufVxuXG5jb25zdCBXYW5pS2FuaVByb2ZpbGU6IFJlYWN0LkZDPFdLUHJvZmlsZUludGVyZmFjZT4gPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndrY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cbiAgICAgICAgICA8SW1nIHNyYz17QXZhdGFyfSBzaXplcz17WzEyOF19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxuICAgICAgICAgICAgPGEgaHJlZj17ZGF0YS51c2VyLnByb2ZpbGV9PntkYXRhLnVzZXIudXNlcm5hbWV9PC9hPlxuICAgICAgICAgICAgPHA+TGV2ZWw6IHtkYXRhLnVzZXIubGV2ZWx9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VtbWFyeX0+XG4gICAgICAgICAgICA8cD5EYXRlIFN0YXJ0ZWQ6IHtkYXRhLnVzZXIuZGF0ZV9zdGFydGVkfTwvcD5cbiAgICAgICAgICAgIDxwPkxhc3QgVXBkYXRlZDoge2RhdGEudXNlci50aW1lX3VwZGF0ZWR9PC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEl0ZW1zIGxlYXJudDoge2RhdGEuaXRlbXMucmFkaWNhbH0gcmFkaWNhbHMsIHtkYXRhLml0ZW1zLmthbmppfSBrYW5qaSx7JyAnfVxuICAgICAgICAgICAgICB7ZGF0YS5pdGVtcy52b2NhYnVsYXJ5fSB2b2NhYnVsYXJ5LnsnICd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBXYW5pS2FuaUFjY3VyYWN5OiBSZWFjdC5GQzxXS1Byb2ZpbGVJbnRlcmZhY2U+ID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53a2NvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XG4gICAgICAgICAgPEltZyBzcmM9e0F2YXRhcn0gc2l6ZXM9e1sxMjhdfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfT5cbiAgICAgICAgICAgIDxhIGhyZWY9e2RhdGEudXNlci5wcm9maWxlfT57ZGF0YS51c2VyLnVzZXJuYW1lfTwvYT5cbiAgICAgICAgICAgIDxwPkxldmVsOiB7ZGF0YS51c2VyLmxldmVsfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnl9PlxuICAgICAgICAgICAgPHA+RGF0ZSBTdGFydGVkOiB7ZGF0YS51c2VyLmRhdGVfc3RhcnRlZH08L3A+XG4gICAgICAgICAgICA8cD5MYXN0IFVwZGF0ZWQ6IHtkYXRhLnVzZXIudGltZV91cGRhdGVkfTwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJdGVtcyBsZWFybnQ6IHtkYXRhLml0ZW1zLnJhZGljYWx9IHJhZGljYWxzLCB7ZGF0YS5pdGVtcy5rYW5qaX0ga2FuamkseycgJ31cbiAgICAgICAgICAgICAge2RhdGEuaXRlbXMudm9jYWJ1bGFyeX0gdm9jYWJ1bGFyeS57JyAnfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFdhbmlLYW5pUHJvZmlsZSxcbiAgV2FuaUthbmlBY2N1cmFjeSxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBXS1Byb2ZpbGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmltcG9ydCBXYW5pS2FuaVByb2ZpbGUgZnJvbSAnLi9XYW5pS2FuaS5wcm9maWxlJztcblxuaW1wb3J0IFB1YmxpY1NoZWxsIGZyb20gJy4uLy4uL2NvbW1vbi9QdWJsaWNTaGVsbCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGluZy9XYW5pS2FuaS5tb2R1bGUuY3NzJztcblxuLy8gQ3JlYXRlIEF4aW9zIGluc3RhbmNlLlxuY29uc3QgYXBpOiBBeGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC8nLFxufSk7XG5cbmNvbnN0IFdhbmlLYW5pOiBOZXh0UGFnZTxXS1Byb2ZpbGU+ID0gKGRhdGE6IFdLUHJvZmlsZSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQdWJsaWNTaGVsbCB0aXRsZT1cIldhbmlLYW5pIFByb2dyZXNzaW9uIHwga2luZ29mYm94ZXMncyBXZWJzaXRlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxXYW5pS2FuaVByb2ZpbGUgZGF0YT17ZGF0YX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUHVibGljU2hlbGw+XG4gICk7XG59O1xuXG4vLyBGZXRjaCBkYXRhIGJlZm9yZSBsb2FkLlxuV2FuaUthbmkuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0KCcvd2FuaWthbmknKTtcbiAgY29uc3QgZGF0YTogV0tQcm9maWxlID0gcmVzLmRhdGE7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2FuaUthbmk7XG4iXSwic291cmNlUm9vdCI6IiJ9