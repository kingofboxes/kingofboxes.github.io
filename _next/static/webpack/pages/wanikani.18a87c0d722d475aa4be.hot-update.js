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
            href: data.user.profile,
            children: data.user.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.summary,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Date Started: ", data.user.date_started]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Last Updated: ", data.user.time_updated]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvV2FuaUthbmkvV2FuaUthbmkucHJvZmlsZS50c3giXSwibmFtZXMiOlsiV2FuaUthbmlQcm9maWxlIiwiZGF0YSIsInN0eWxlcyIsIndrY29udGFpbmVyIiwicHJvZmlsZSIsImF2YXRhciIsIkF2YXRhciIsIndyYXBwZXIiLCJwcm9ncmVzcyIsInVzZXIiLCJ1c2VybmFtZSIsImxldmVsIiwic3VtbWFyeSIsImRhdGVfc3RhcnRlZCIsInRpbWVfdXBkYXRlZCIsIml0ZW1zIiwicmFkaWNhbCIsImthbmppIiwidm9jYWJ1bGFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxlQUEwQixHQUFHLFNBQTdCQSxlQUE2QixPQUF5QjtBQUFBLE1BQXRCQyxJQUFzQixRQUF0QkEsSUFBc0I7QUFDMUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLG1FQUFNLENBQUNDLFdBQXZCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVELG1FQUFNLENBQUNFLE9BQXZCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFRixtRUFBTSxDQUFDRyxNQUF2QjtBQUFBLCtCQUNFLHFFQUFDLHlEQUFEO0FBQUssYUFBRyxFQUFFQyx5REFBVjtBQUFrQixlQUFLLEVBQUUsQ0FBQyxHQUFELENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFFSixtRUFBTSxDQUFDSyxPQUF2QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUwsbUVBQU0sQ0FBQ00sUUFBdkI7QUFBQSxrQ0FDRTtBQUFHLGdCQUFJLEVBQUVQLElBQUksQ0FBQ1EsSUFBTCxDQUFVTCxPQUFuQjtBQUFBLHNCQUE2QkgsSUFBSSxDQUFDUSxJQUFMLENBQVVDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLGtDQUFXVCxJQUFJLENBQUNRLElBQUwsQ0FBVUUsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQUssbUJBQVMsRUFBRVQsbUVBQU0sQ0FBQ1UsT0FBdkI7QUFBQSxrQ0FDRTtBQUFBLHlDQUFrQlgsSUFBSSxDQUFDUSxJQUFMLENBQVVJLFlBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEseUNBQWtCWixJQUFJLENBQUNRLElBQUwsQ0FBVUssWUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBQSx5Q0FDaUJiLElBQUksQ0FBQ2MsS0FBTCxDQUFXQyxPQUQ1QixpQkFDZ0RmLElBQUksQ0FBQ2MsS0FBTCxDQUFXRSxLQUQzRCxhQUN5RSxHQUR6RSxFQUVHaEIsSUFBSSxDQUFDYyxLQUFMLENBQVdHLFVBRmQsa0JBRXNDLEdBRnRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBeEJEOztLQUFNbEIsZTtBQTBCU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd2FuaWthbmkuMThhODdjMGQ3MjJkNDc1YWE0YmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXS1Byb2ZpbGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxpbmcvV2FuaUthbmkubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBJbWcgfSBmcm9tICdyZWFjdC1vcHRpbWl6ZWQtaW1hZ2UnO1xuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi8uLi9hc3NldHMvYXZhdGFyLnBuZyc7XG5cbmludGVyZmFjZSBXS1Byb2ZpbGVQcm9wcyB7XG4gIGRhdGE6IFdLUHJvZmlsZTtcbn1cblxuY29uc3QgV2FuaUthbmlQcm9maWxlOiBSZWFjdE5vZGUgPSAoeyBkYXRhIH0pOiBXS1Byb2ZpbGUgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2tjb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxuICAgICAgICAgIDxJbWcgc3JjPXtBdmF0YXJ9IHNpemVzPXtbMTI4XX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc30+XG4gICAgICAgICAgICA8YSBocmVmPXtkYXRhLnVzZXIucHJvZmlsZX0+e2RhdGEudXNlci51c2VybmFtZX08L2E+XG4gICAgICAgICAgICA8cD5MZXZlbDoge2RhdGEudXNlci5sZXZlbH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5fT5cbiAgICAgICAgICAgIDxwPkRhdGUgU3RhcnRlZDoge2RhdGEudXNlci5kYXRlX3N0YXJ0ZWR9PC9wPlxuICAgICAgICAgICAgPHA+TGFzdCBVcGRhdGVkOiB7ZGF0YS51c2VyLnRpbWVfdXBkYXRlZH08L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSXRlbXMgbGVhcm50OiB7ZGF0YS5pdGVtcy5yYWRpY2FsfSByYWRpY2Fscywge2RhdGEuaXRlbXMua2Fuaml9IGthbmppLHsnICd9XG4gICAgICAgICAgICAgIHtkYXRhLml0ZW1zLnZvY2FidWxhcnl9IHZvY2FidWxhcnkueycgJ31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhbmlLYW5pUHJvZmlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=