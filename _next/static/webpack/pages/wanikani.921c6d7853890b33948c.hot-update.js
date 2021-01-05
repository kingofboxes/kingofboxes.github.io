webpackHotUpdate_N_E("pages/wanikani",{

/***/ "./components/public/WaniKani/WaniKani.profile.tsx":
/*!*********************************************************!*\
  !*** ./components/public/WaniKani/WaniKani.profile.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styling/WaniKani.module.css */ "./components/styling/WaniKani.module.css");
/* harmony import */ var _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_optimized_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-optimized-image */ "./node_modules/react-optimized-image/lib/index.js");
/* harmony import */ var react_optimized_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_optimized_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_avatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/avatar.png */ "./assets/avatar.png");
/* harmony import */ var _assets_avatar_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_avatar_png__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/home/kingofboxes/projects/website-project/components/public/WaniKani/WaniKani.profile.tsx",
    _this = undefined;






var WaniKaniProfile = function WaniKaniProfile(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.wkcontainer,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_optimized_image__WEBPACK_IMPORTED_MODULE_3__["Img"], {
          src: _assets_avatar_png__WEBPACK_IMPORTED_MODULE_4___default.a,
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.progress,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: data.profile,
            children: data.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Level: ", data.level]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summary,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Date Started: ", data.date_started]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Last Updated: ", data.time_updated]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Items learnt: ", data.radical, " radicals, ", data.kanji, " kanji, ", data.vocabulary, ' ', "vocabulary.", ' ']
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
/* harmony default export */ __webpack_exports__["default"] = (WaniKaniProfile);

var _c;

$RefreshReg$(_c, "WaniKaniProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvV2FuaUthbmkvV2FuaUthbmkucHJvZmlsZS50c3giXSwibmFtZXMiOlsiV2FuaUthbmlQcm9maWxlIiwiZGF0YSIsInN0eWxlcyIsIndrY29udGFpbmVyIiwicHJvZmlsZSIsImF2YXRhciIsIkF2YXRhciIsIndyYXBwZXIiLCJwcm9ncmVzcyIsInVzZXJuYW1lIiwibGV2ZWwiLCJzdW1tYXJ5IiwiZGF0ZV9zdGFydGVkIiwidGltZV91cGRhdGVkIiwicmFkaWNhbCIsImthbmppIiwidm9jYWJ1bGFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxlQUEwQyxHQUFHLFNBQTdDQSxlQUE2QyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQy9ELHNCQUNFO0FBQUssYUFBUyxFQUFFQyxtRUFBTSxDQUFDQyxXQUF2QjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFRCxtRUFBTSxDQUFDRSxPQUF2QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUYsbUVBQU0sQ0FBQ0csTUFBdkI7QUFBQSwrQkFDRSxxRUFBQyx5REFBRDtBQUFLLGFBQUcsRUFBRUMseURBQVY7QUFBa0IsZUFBSyxFQUFFLENBQUMsR0FBRCxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQUssaUJBQVMsRUFBRUosbUVBQU0sQ0FBQ0ssT0FBdkI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVMLG1FQUFNLENBQUNNLFFBQXZCO0FBQUEsa0NBQ0U7QUFBRyxnQkFBSSxFQUFFUCxJQUFJLENBQUNHLE9BQWQ7QUFBQSxzQkFBd0JILElBQUksQ0FBQ1E7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsa0NBQVdSLElBQUksQ0FBQ1MsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQUssbUJBQVMsRUFBRVIsbUVBQU0sQ0FBQ1MsT0FBdkI7QUFBQSxrQ0FDRTtBQUFBLHlDQUFrQlYsSUFBSSxDQUFDVyxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLHlDQUFrQlgsSUFBSSxDQUFDWSxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFBLHlDQUNpQlosSUFBSSxDQUFDYSxPQUR0QixpQkFDMENiLElBQUksQ0FBQ2MsS0FEL0MsY0FDOERkLElBQUksQ0FBQ2UsVUFEbkUsRUFDK0UsR0FEL0UsaUJBRWMsR0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQXhCRDs7S0FBTWhCLGU7QUEwQlNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dhbmlrYW5pLjkyMWM2ZDc4NTM4OTBiMzM5NDhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV0tVc2VyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsaW5nL1dhbmlLYW5pLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgSW1nIH0gZnJvbSAncmVhY3Qtb3B0aW1pemVkLWltYWdlJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2F2YXRhci5wbmcnO1xuXG5pbnRlcmZhY2UgV0tVc2VySW50ZXJmYWNlIHtcbiAgZGF0YTogV0tVc2VyO1xufVxuXG5jb25zdCBXYW5pS2FuaVByb2ZpbGU6IFJlYWN0LkZDPFdLVXNlckludGVyZmFjZT4gPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndrY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cbiAgICAgICAgICA8SW1nIHNyYz17QXZhdGFyfSBzaXplcz17WzEyOF19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxuICAgICAgICAgICAgPGEgaHJlZj17ZGF0YS5wcm9maWxlfT57ZGF0YS51c2VybmFtZX08L2E+XG4gICAgICAgICAgICA8cD5MZXZlbDoge2RhdGEubGV2ZWx9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VtbWFyeX0+XG4gICAgICAgICAgICA8cD5EYXRlIFN0YXJ0ZWQ6IHtkYXRhLmRhdGVfc3RhcnRlZH08L3A+XG4gICAgICAgICAgICA8cD5MYXN0IFVwZGF0ZWQ6IHtkYXRhLnRpbWVfdXBkYXRlZH08L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSXRlbXMgbGVhcm50OiB7ZGF0YS5yYWRpY2FsfSByYWRpY2Fscywge2RhdGEua2Fuaml9IGthbmppLCB7ZGF0YS52b2NhYnVsYXJ5fXsnICd9XG4gICAgICAgICAgICAgIHZvY2FidWxhcnkueycgJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhbmlLYW5pUHJvZmlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=