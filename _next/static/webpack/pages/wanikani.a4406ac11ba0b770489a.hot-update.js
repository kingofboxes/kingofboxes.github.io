webpackHotUpdate_N_E("pages/wanikani",{

/***/ "./components/public/WaniKani/WaniKani.data.tsx":
/*!******************************************************!*\
  !*** ./components/public/WaniKani/WaniKani.data.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WaniKaniReviews = exports.WaniKaniProfile = void 0;

var _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _WaniKaniModule = _interopRequireDefault(__webpack_require__(/*! ../../styling/WaniKani.module.css */ "./components/styling/WaniKani.module.css"));

var _reactOptimizedImage = __webpack_require__(/*! react-optimized-image */ "./node_modules/react-optimized-image/lib/index.js");

var _avatar = _interopRequireDefault(__webpack_require__(/*! ../../../assets/avatar.png */ "./assets/avatar.png"));

var _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var _jsxFileName = "/home/kingofboxes/projects/website-project/components/public/WaniKani/WaniKani.data.tsx",
    _this = void 0;

var WaniKaniProfile = function WaniKaniProfile(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
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
        lineNumber: 17,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: _WaniKaniModule["default"].wrapper,
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: _WaniKaniModule["default"].progress,
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("a", {
          href: data.user.profile,
          children: data.user.username
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
          children: ["Level: ", data.user.level]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: _WaniKaniModule["default"].summary,
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
          children: ["Date Started: ", data.user.date_started]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
          children: ["Last Updated: ", data.user.time_updated]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
          children: ["Items learnt: ", data.items.radical, " radicals, ", data.items.kanji, " kanji,", ' ', data.items.vocabulary, " vocabulary.", ' ']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

exports.WaniKaniProfile = WaniKaniProfile;
_c = WaniKaniProfile;

var WaniKaniReviews = function WaniKaniReviews(_ref2) {
  var data = _ref2.data;
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table, {
    celled: true,
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Header, {
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
          children: "Header"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
          children: "Header"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
          children: "Header"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Body, {
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Label, {
            ribbon: true,
            children: "First"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
          children: "Cell"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
          children: "Cell"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
          children: "Cell"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
          children: "Cell"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
          children: "Cell"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
          children: "Cell"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
          children: "Cell"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
          children: "Cell"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, _this);
};

exports.WaniKaniReviews = WaniKaniReviews;
_c2 = WaniKaniReviews;
module.exports = {
  WaniKaniProfile: WaniKaniProfile,
  WaniKaniReviews: WaniKaniReviews
};

var _c, _c2;

$RefreshReg$(_c, "WaniKaniProfile");
$RefreshReg$(_c2, "WaniKaniReviews");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvV2FuaUthbmkvV2FuaUthbmkuZGF0YS50c3giXSwibmFtZXMiOlsiV2FuaUthbmlQcm9maWxlIiwiZGF0YSIsInN0eWxlcyIsInByb2ZpbGUiLCJhdmF0YXIiLCJBdmF0YXIiLCJ3cmFwcGVyIiwicHJvZ3Jlc3MiLCJ1c2VyIiwidXNlcm5hbWUiLCJsZXZlbCIsInN1bW1hcnkiLCJkYXRlX3N0YXJ0ZWQiLCJ0aW1lX3VwZGF0ZWQiLCJpdGVtcyIsInJhZGljYWwiLCJrYW5qaSIsInZvY2FidWxhcnkiLCJXYW5pS2FuaVJldmlld3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7QUFNTyxJQUFNQSxlQUE2QyxHQUFHLFNBQWhEQSxlQUFnRCxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pFLHNCQUNFO0FBQUssYUFBUyxFQUFFQywyQkFBT0MsT0FBdkI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUQsMkJBQU9FLE1BQXZCO0FBQUEsNkJBQ0UsMkJBQUMsd0JBQUQ7QUFBSyxXQUFHLEVBQUVDLGtCQUFWO0FBQWtCLGFBQUssRUFBRSxDQUFDLEdBQUQsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFLLGVBQVMsRUFBRUgsMkJBQU9JLE9BQXZCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFSiwyQkFBT0ssUUFBdkI7QUFBQSxnQ0FDRTtBQUFHLGNBQUksRUFBRU4sSUFBSSxDQUFDTyxJQUFMLENBQVVMLE9BQW5CO0FBQUEsb0JBQTZCRixJQUFJLENBQUNPLElBQUwsQ0FBVUM7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RkYsZUFHRSwyQkFBQyxzQkFBRCxDQUFPLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQkQsQ0FoQ007OztNQUFNaUIsZTtBQWtDYkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZwQixpQkFBZSxFQUFmQSxlQURlO0FBRWZrQixpQkFBZSxFQUFmQTtBQUZlLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dhbmlrYW5pLmE0NDA2YWMxMWJhMGI3NzA0ODlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV0tQcm9maWxlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsaW5nL1dhbmlLYW5pLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgSW1nIH0gZnJvbSAncmVhY3Qtb3B0aW1pemVkLWltYWdlJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2F2YXRhci5wbmcnO1xuXG5pbXBvcnQgeyBJY29uLCBMYWJlbCwgTWVudSwgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmludGVyZmFjZSBXS1Byb2ZpbGVJbnRlcmZhY2Uge1xuICBkYXRhOiBXS1Byb2ZpbGU7XG59XG5cbmV4cG9ydCBjb25zdCBXYW5pS2FuaVByb2ZpbGU6IFJlYWN0LkZDPFdLUHJvZmlsZUludGVyZmFjZT4gPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxuICAgICAgICA8SW1nIHNyYz17QXZhdGFyfSBzaXplcz17WzEyOF19IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxuICAgICAgICAgIDxhIGhyZWY9e2RhdGEudXNlci5wcm9maWxlfT57ZGF0YS51c2VyLnVzZXJuYW1lfTwvYT5cbiAgICAgICAgICA8cD5MZXZlbDoge2RhdGEudXNlci5sZXZlbH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnl9PlxuICAgICAgICAgIDxwPkRhdGUgU3RhcnRlZDoge2RhdGEudXNlci5kYXRlX3N0YXJ0ZWR9PC9wPlxuICAgICAgICAgIDxwPkxhc3QgVXBkYXRlZDoge2RhdGEudXNlci50aW1lX3VwZGF0ZWR9PC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSXRlbXMgbGVhcm50OiB7ZGF0YS5pdGVtcy5yYWRpY2FsfSByYWRpY2Fscywge2RhdGEuaXRlbXMua2Fuaml9IGthbmppLHsnICd9XG4gICAgICAgICAgICB7ZGF0YS5pdGVtcy52b2NhYnVsYXJ5fSB2b2NhYnVsYXJ5LnsnICd9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFdhbmlLYW5pUmV2aWV3czogUmVhY3QuRkM8V0tQcm9maWxlSW50ZXJmYWNlPiA9ICh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUYWJsZSBjZWxsZWQ+XG4gICAgICA8VGFibGUuSGVhZGVyPlxuICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPkhlYWRlcjwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5IZWFkZXI8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+SGVhZGVyPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgIDwvVGFibGUuSGVhZGVyPlxuXG4gICAgICA8VGFibGUuQm9keT5cbiAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxMYWJlbCByaWJib24+Rmlyc3Q8L0xhYmVsPlxuICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICA8VGFibGUuQ2VsbD5DZWxsPC9UYWJsZS5DZWxsPlxuICAgICAgICAgIDxUYWJsZS5DZWxsPkNlbGw8L1RhYmxlLkNlbGw+XG4gICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgIDxUYWJsZS5DZWxsPkNlbGw8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgPFRhYmxlLkNlbGw+Q2VsbDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICA8VGFibGUuQ2VsbD5DZWxsPC9UYWJsZS5DZWxsPlxuICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICA8VGFibGUuQ2VsbD5DZWxsPC9UYWJsZS5DZWxsPlxuICAgICAgICAgIDxUYWJsZS5DZWxsPkNlbGw8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgPFRhYmxlLkNlbGw+Q2VsbDwvVGFibGUuQ2VsbD5cbiAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICA8L1RhYmxlLkJvZHk+XG4gICAgPC9UYWJsZT5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBXYW5pS2FuaVByb2ZpbGUsXG4gIFdhbmlLYW5pUmV2aWV3cyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9