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
exports.WaniKaniAccuracy = exports.WaniKaniReviews = exports.WaniKaniProfile = void 0;

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
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
      className: _WaniKaniModule["default"].descriptors,
      children: "Overall Performance:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table, {
      celled: true,
      textAlign: "center",
      color: "black",
      inverted: true,
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Header, {
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Reading"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Meaning"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Total"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Body, {
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Total Reviews:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.total_readings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.total_meanings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.total_reviews
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Correct:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.correct_readings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.correct_meanings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.correct_reviews
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Incorrect:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.incorrect_readings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.incorrect_meanings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.incorrect_reviews
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Accuracy:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.readings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.meanings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.total * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

exports.WaniKaniReviews = WaniKaniReviews;
_c2 = WaniKaniReviews;

var WaniKaniAccuracy = function WaniKaniAccuracy(_ref3) {
  var data = _ref3.data;
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
      className: _WaniKaniModule["default"].descriptors,
      children: "Overall Accuracy:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table, {
      celled: true,
      textAlign: "center",
      inverted: true,
      color: "black",
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Header, {
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Reading"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Meaning"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Total"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Body, {
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Radicals:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "---"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.radical.meanings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.radical.total * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Kanji:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.kanji.readings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.kanji.meanings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.kanji.total * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Vocabulary:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.vocabulary.readings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.vocabulary.meanings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.vocabulary.total * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

exports.WaniKaniAccuracy = WaniKaniAccuracy;
_c3 = WaniKaniAccuracy;
module.exports = {
  WaniKaniProfile: WaniKaniProfile,
  WaniKaniReviews: WaniKaniReviews,
  WaniKaniAccuracy: WaniKaniAccuracy
};

var _c, _c2, _c3;

$RefreshReg$(_c, "WaniKaniProfile");
$RefreshReg$(_c2, "WaniKaniReviews");
$RefreshReg$(_c3, "WaniKaniAccuracy");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvV2FuaUthbmkvV2FuaUthbmkuZGF0YS50c3giXSwibmFtZXMiOlsiV2FuaUthbmlQcm9maWxlIiwiZGF0YSIsInN0eWxlcyIsInByb2ZpbGUiLCJhdmF0YXIiLCJBdmF0YXIiLCJ3cmFwcGVyIiwicHJvZ3Jlc3MiLCJ1c2VyIiwidXNlcm5hbWUiLCJsZXZlbCIsInN1bW1hcnkiLCJkYXRlX3N0YXJ0ZWQiLCJ0aW1lX3VwZGF0ZWQiLCJpdGVtcyIsInJhZGljYWwiLCJrYW5qaSIsInZvY2FidWxhcnkiLCJXYW5pS2FuaVJldmlld3MiLCJkZXNjcmlwdG9ycyIsInJldmlldyIsInRvdGFsX3JlYWRpbmdzIiwidG90YWxfbWVhbmluZ3MiLCJ0b3RhbF9yZXZpZXdzIiwiY29ycmVjdF9yZWFkaW5ncyIsImNvcnJlY3RfbWVhbmluZ3MiLCJjb3JyZWN0X3Jldmlld3MiLCJpbmNvcnJlY3RfcmVhZGluZ3MiLCJpbmNvcnJlY3RfbWVhbmluZ3MiLCJpbmNvcnJlY3RfcmV2aWV3cyIsImFjY3VyYWN5IiwicmVhZGluZ3MiLCJ0b0ZpeGVkIiwibWVhbmluZ3MiLCJ0b3RhbCIsIldhbmlLYW5pQWNjdXJhY3kiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7QUFNTyxJQUFNQSxlQUE2QyxHQUFHLFNBQWhEQSxlQUFnRCxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pFLHNCQUNFO0FBQUssYUFBUyxFQUFFQywyQkFBT0MsT0FBdkI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUQsMkJBQU9FLE1BQXZCO0FBQUEsNkJBQ0UsMkJBQUMsd0JBQUQ7QUFBSyxXQUFHLEVBQUVDLGtCQUFWO0FBQWtCLGFBQUssRUFBRSxDQUFDLEdBQUQsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUExQyxDQUFrRCxDQUFsRCxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFLDJCQUFDLHNCQUFELENBQU8sSUFBUDtBQUFBLHVCQUFhLENBQUMvQixJQUFJLENBQUM2QixRQUFMLENBQWNiLFVBQWQsQ0FBeUJnQixRQUF6QixHQUFvQyxHQUFyQyxFQUEwQ0QsT0FBMUMsQ0FBa0QsQ0FBbEQsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRSwyQkFBQyxzQkFBRCxDQUFPLElBQVA7QUFBQSx1QkFBYSxDQUFDL0IsSUFBSSxDQUFDNkIsUUFBTCxDQUFjYixVQUFkLENBQXlCaUIsS0FBekIsR0FBaUMsR0FBbEMsRUFBdUNGLE9BQXZDLENBQStDLENBQS9DLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGO0FBbUNELENBcENNOzs7TUFBTUcsZ0I7QUFzQ2JDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmckMsaUJBQWUsRUFBZkEsZUFEZTtBQUVma0IsaUJBQWUsRUFBZkEsZUFGZTtBQUdmaUIsa0JBQWdCLEVBQWhCQTtBQUhlLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dhbmlrYW5pLjU5Nzk4NWMwZThhNzNkNzUxNmJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV0tQcm9maWxlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsaW5nL1dhbmlLYW5pLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgSW1nIH0gZnJvbSAncmVhY3Qtb3B0aW1pemVkLWltYWdlJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2F2YXRhci5wbmcnO1xuXG5pbXBvcnQgeyBJY29uLCBMYWJlbCwgTWVudSwgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmludGVyZmFjZSBXS1Byb2ZpbGVJbnRlcmZhY2Uge1xuICBkYXRhOiBXS1Byb2ZpbGU7XG59XG5cbmV4cG9ydCBjb25zdCBXYW5pS2FuaVByb2ZpbGU6IFJlYWN0LkZDPFdLUHJvZmlsZUludGVyZmFjZT4gPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxuICAgICAgICA8SW1nIHNyYz17QXZhdGFyfSBzaXplcz17WzEyOF19IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxuICAgICAgICAgIDxhIGhyZWY9e2RhdGEudXNlci5wcm9maWxlfT57ZGF0YS51c2VyLnVzZXJuYW1lfTwvYT5cbiAgICAgICAgICA8cD5MZXZlbDoge2RhdGEudXNlci5sZXZlbH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnl9PlxuICAgICAgICAgIDxwPkRhdGUgU3RhcnRlZDoge2RhdGEudXNlci5kYXRlX3N0YXJ0ZWR9PC9wPlxuICAgICAgICAgIDxwPkxhc3QgVXBkYXRlZDoge2RhdGEudXNlci50aW1lX3VwZGF0ZWR9PC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSXRlbXMgbGVhcm50OiB7ZGF0YS5pdGVtcy5yYWRpY2FsfSByYWRpY2Fscywge2RhdGEuaXRlbXMua2Fuaml9IGthbmppLHsnICd9XG4gICAgICAgICAgICB7ZGF0YS5pdGVtcy52b2NhYnVsYXJ5fSB2b2NhYnVsYXJ5LnsnICd9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFdhbmlLYW5pUmV2aWV3czogUmVhY3QuRkM8V0tQcm9maWxlSW50ZXJmYWNlPiA9ICh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdG9yc30+T3ZlcmFsbCBQZXJmb3JtYW5jZTo8L3NwYW4+XG4gICAgICA8VGFibGUgY2VsbGVkIHRleHRBbGlnbj1cImNlbnRlclwiIGNvbG9yPVwiYmxhY2tcIiBpbnZlcnRlZD5cbiAgICAgICAgPFRhYmxlLkhlYWRlcj5cbiAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+PC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+UmVhZGluZzwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPk1lYW5pbmc8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5Ub3RhbDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgPC9UYWJsZS5IZWFkZXI+XG4gICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5Ub3RhbCBSZXZpZXdzOjwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntkYXRhLnJldmlldy50b3RhbF9yZWFkaW5nc308L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57ZGF0YS5yZXZpZXcudG90YWxfbWVhbmluZ3N9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+e2RhdGEucmV2aWV3LnRvdGFsX3Jldmlld3N9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5Db3JyZWN0OjwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntkYXRhLnJldmlldy5jb3JyZWN0X3JlYWRpbmdzfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntkYXRhLnJldmlldy5jb3JyZWN0X21lYW5pbmdzfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntkYXRhLnJldmlldy5jb3JyZWN0X3Jldmlld3N9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5JbmNvcnJlY3Q6PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+e2RhdGEucmV2aWV3LmluY29ycmVjdF9yZWFkaW5nc308L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57ZGF0YS5yZXZpZXcuaW5jb3JyZWN0X21lYW5pbmdzfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntkYXRhLnJldmlldy5pbmNvcnJlY3RfcmV2aWV3c308L1RhYmxlLkNlbGw+XG4gICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPkFjY3VyYWN5OjwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPnsoZGF0YS5hY2N1cmFjeS5yZWFkaW5ncyAqIDEwMCkudG9GaXhlZCgyKX0lPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+eyhkYXRhLmFjY3VyYWN5Lm1lYW5pbmdzICogMTAwKS50b0ZpeGVkKDIpfSU8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57KGRhdGEuYWNjdXJhY3kudG90YWwgKiAxMDApLnRvRml4ZWQoMil9JTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgPC9UYWJsZS5Cb2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBXYW5pS2FuaUFjY3VyYWN5OiBSZWFjdC5GQzxXS1Byb2ZpbGVJbnRlcmZhY2U+ID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0b3JzfT5PdmVyYWxsIEFjY3VyYWN5Ojwvc3Bhbj5cbiAgICAgIDxUYWJsZSBjZWxsZWQgdGV4dEFsaWduPVwiY2VudGVyXCIgaW52ZXJ0ZWQgY29sb3I9XCJibGFja1wiPlxuICAgICAgICA8VGFibGUuSGVhZGVyPlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD48L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5SZWFkaW5nPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+TWVhbmluZzwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPlRvdGFsPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICA8L1RhYmxlLkhlYWRlcj5cbiAgICAgICAgPFRhYmxlLkJvZHk+XG4gICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPlJhZGljYWxzOjwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPi0tLTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPnsoZGF0YS5hY2N1cmFjeS5yYWRpY2FsLm1lYW5pbmdzICogMTAwKS50b0ZpeGVkKDIpfSU8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57KGRhdGEuYWNjdXJhY3kucmFkaWNhbC50b3RhbCAqIDEwMCkudG9GaXhlZCgyKX0lPC9UYWJsZS5DZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5LYW5qaTo8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57KGRhdGEuYWNjdXJhY3kua2FuamkucmVhZGluZ3MgKiAxMDApLnRvRml4ZWQoMil9JTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPnsoZGF0YS5hY2N1cmFjeS5rYW5qaS5tZWFuaW5ncyAqIDEwMCkudG9GaXhlZCgyKX0lPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+eyhkYXRhLmFjY3VyYWN5LmthbmppLnRvdGFsICogMTAwKS50b0ZpeGVkKDIpfSU8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPlZvY2FidWxhcnk6PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+eyhkYXRhLmFjY3VyYWN5LnZvY2FidWxhcnkucmVhZGluZ3MgKiAxMDApLnRvRml4ZWQoMil9JTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPnsoZGF0YS5hY2N1cmFjeS52b2NhYnVsYXJ5Lm1lYW5pbmdzICogMTAwKS50b0ZpeGVkKDIpfSU8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57KGRhdGEuYWNjdXJhY3kudm9jYWJ1bGFyeS50b3RhbCAqIDEwMCkudG9GaXhlZCgyKX0lPC9UYWJsZS5DZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICA8L1RhYmxlLkJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvPlxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFdhbmlLYW5pUHJvZmlsZSxcbiAgV2FuaUthbmlSZXZpZXdzLFxuICBXYW5pS2FuaUFjY3VyYWN5LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=