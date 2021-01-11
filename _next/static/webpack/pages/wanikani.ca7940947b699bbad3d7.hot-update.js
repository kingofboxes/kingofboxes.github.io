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

var _reactOptimizedImage = __webpack_require__(/*! react-optimized-image */ "./node_modules/react-optimized-image/lib/index.js");

var _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var _avatar = _interopRequireDefault(__webpack_require__(/*! ../../../assets/avatar.png */ "./assets/avatar.png"));

var _WaniKaniModule = _interopRequireDefault(__webpack_require__(/*! ../../styling/WaniKani.module.css */ "./components/styling/WaniKani.module.css"));

var _jsxFileName = "/home/kingofboxes/projects/website-project/components/public/WaniKani/WaniKani.data.tsx",
    _this = void 0;

// Profile header.
var WaniKaniProfile = function WaniKaniProfile(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    className: _WaniKaniModule["default"].profile,
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: _WaniKaniModule["default"].avatar,
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_reactOptimizedImage.Img, {
        src: _avatar["default"],
        sizes: [64, 128],
        breakpoints: [450],
        alt: "kingofboxes-avatar",
        webp: true,
        rawSrc: {
          fallback: {
            64: {
              1: __webpack_require__(/*! ../../../assets/avatar.png?url&width=64 */ "./assets/avatar.png?url&width=64")
            },
            128: {
              1: __webpack_require__(/*! ../../../assets/avatar.png?url&width=128 */ "./assets/avatar.png?url&width=128")
            }
          },
          webp: {
            64: {
              1: __webpack_require__(/*! ../../../assets/avatar.png?webp&url&width=64 */ "./assets/avatar.png?webp&url&width=64")
            },
            128: {
              1: __webpack_require__(/*! ../../../assets/avatar.png?webp&url&width=128 */ "./assets/avatar.png?webp&url&width=128")
            }
          }
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
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
          lineNumber: 24,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
          children: ["Level: ", data.user.level]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: _WaniKaniModule["default"].summary,
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
          children: ["Date Started: ", data.user.date_started]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
          children: ["Last Updated: ", data.user.time_updated]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
          children: ["Items learnt: ", data.items.radical, " radicals, ", data.items.kanji, " kanji,", ' ', data.items.vocabulary, " vocabulary.", ' ']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
}; // Review table.


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
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table, {
      celled: true,
      textAlign: "center",
      color: "black",
      inverted: true,
      compact: true,
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Header, {
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Reading"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Meaning"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Total"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Body, {
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Total Reviews:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.total_readings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.total_meanings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.total_reviews
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Correct:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.correct_readings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.correct_meanings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.correct_reviews
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Incorrect:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.incorrect_readings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.incorrect_meanings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.incorrect_reviews
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Accuracy:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.readings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.meanings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.total * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
}; // Accuracy table.


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
      lineNumber: 89,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table, {
      celled: true,
      textAlign: "center",
      inverted: true,
      color: "black",
      compact: true,
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Header, {
        children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Reading"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Meaning"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Total"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Body, {
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Radicals:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "---"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.radical.meanings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.radical.total * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Kanji:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.kanji.readings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.kanji.meanings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.kanji.total * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Vocabulary:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.vocabulary.readings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.vocabulary.meanings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.vocabulary.total * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvV2FuaUthbmkvV2FuaUthbmkuZGF0YS50c3giXSwibmFtZXMiOlsiV2FuaUthbmlQcm9maWxlIiwiZGF0YSIsInN0eWxlcyIsInByb2ZpbGUiLCJhdmF0YXIiLCJBdmF0YXIiLCJ3cmFwcGVyIiwicHJvZ3Jlc3MiLCJ1c2VyIiwidXNlcm5hbWUiLCJsZXZlbCIsInN1bW1hcnkiLCJkYXRlX3N0YXJ0ZWQiLCJ0aW1lX3VwZGF0ZWQiLCJpdGVtcyIsInJhZGljYWwiLCJrYW5qaSIsInZvY2FidWxhcnkiLCJXYW5pS2FuaVJldmlld3MiLCJkZXNjcmlwdG9ycyIsInJldmlldyIsInRvdGFsX3JlYWRpbmdzIiwidG90YWxfbWVhbmluZ3MiLCJ0b3RhbF9yZXZpZXdzIiwiY29ycmVjdF9yZWFkaW5ncyIsImNvcnJlY3RfbWVhbmluZ3MiLCJjb3JyZWN0X3Jldmlld3MiLCJpbmNvcnJlY3RfcmVhZGluZ3MiLCJpbmNvcnJlY3RfbWVhbmluZ3MiLCJpbmNvcnJlY3RfcmV2aWV3cyIsImFjY3VyYWN5IiwicmVhZGluZ3MiLCJ0b0ZpeGVkIiwibWVhbmluZ3MiLCJ0b3RhbCIsIldhbmlLYW5pQWNjdXJhY3kiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFFQTs7Ozs7QUFPQTtBQUNPLElBQU1BLGVBQTZDLEdBQUcsU0FBaERBLGVBQWdELE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDekUsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDJCQUFPQyxPQUF2QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCwyQkFBT0UsTUFBdkI7QUFBQSw2QkFDRSwyQkFBQyx3QkFBRDtBQUFLLFdBQUcsRUFBRUMsa0JBQVY7QUFBa0IsYUFBSyxFQUFFLENBQUMsRUFBRCxFQUFLLEdBQUwsQ0FBekI7QUFBb0MsbUJB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QUQsQ0FBTyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsMkJBQUMsc0JBQUQsQ0FBTyxJQUFQO0FBQUEsdUJBQWEsQ0FBQy9CLElBQUksQ0FBQzZCLFFBQUwsQ0FBY2IsVUFBZCxDQUF5QmMsUUFBekIsR0FBb0MsR0FBckMsRUFBMENDLE9BQTFDLENBQWtELENBQWxELENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0UsMkJBQUMsc0JBQUQsQ0FBTyxJQUFQO0FBQUEsdUJBQWEsQ0FBQy9CLElBQUksQ0FBQzZCLFFBQUwsQ0FBY2IsVUFBZCxDQUF5QmdCLFFBQXpCLEdBQW9DLEdBQXJDLEVBQTBDRCxPQUExQyxDQUFrRCxDQUFsRCxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFLDJCQUFDLHNCQUFELENBQU8sSUFBUDtBQUFBLHVCQUFhLENBQUMvQixJQUFJLENBQUM2QixRQUFMLENBQWNiLFVBQWQsQ0FBeUJpQixLQUF6QixHQUFpQyxHQUFsQyxFQUF1Q0YsT0FBdkMsQ0FBK0MsQ0FBL0MsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7QUFtQ0QsQ0FwQ007OztNQUFNRyxnQjtBQXNDYkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZyQyxpQkFBZSxFQUFmQSxlQURlO0FBRWZrQixpQkFBZSxFQUFmQSxlQUZlO0FBR2ZpQixrQkFBZ0IsRUFBaEJBO0FBSGUsQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd2FuaWthbmkuY2E3OTQwOTQ3YjY5OWJiYWQzZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbWcgfSBmcm9tICdyZWFjdC1vcHRpbWl6ZWQtaW1hZ2UnO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmltcG9ydCB7IFdLUHJvZmlsZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2F2YXRhci5wbmcnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxpbmcvV2FuaUthbmkubW9kdWxlLmNzcyc7XG5cbi8vIEludGVyZmFjZSBmb3IgcGFnZS5cbmludGVyZmFjZSBXS1Byb2ZpbGVJbnRlcmZhY2Uge1xuICBkYXRhOiBXS1Byb2ZpbGU7XG59XG5cbi8vIFByb2ZpbGUgaGVhZGVyLlxuZXhwb3J0IGNvbnN0IFdhbmlLYW5pUHJvZmlsZTogUmVhY3QuRkM8V0tQcm9maWxlSW50ZXJmYWNlPiA9ICh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XG4gICAgICAgIDxJbWcgc3JjPXtBdmF0YXJ9IHNpemVzPXtbNjQsIDEyOF19IGJyZWFrcG9pbnRzPXtbNDUwXX0gYWx0PVwia2luZ29mYm94ZXMtYXZhdGFyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc30+XG4gICAgICAgICAgPGEgaHJlZj17ZGF0YS51c2VyLnByb2ZpbGV9PntkYXRhLnVzZXIudXNlcm5hbWV9PC9hPlxuICAgICAgICAgIDxwPkxldmVsOiB7ZGF0YS51c2VyLmxldmVsfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VtbWFyeX0+XG4gICAgICAgICAgPHA+RGF0ZSBTdGFydGVkOiB7ZGF0YS51c2VyLmRhdGVfc3RhcnRlZH08L3A+XG4gICAgICAgICAgPHA+TGFzdCBVcGRhdGVkOiB7ZGF0YS51c2VyLnRpbWVfdXBkYXRlZH08L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJdGVtcyBsZWFybnQ6IHtkYXRhLml0ZW1zLnJhZGljYWx9IHJhZGljYWxzLCB7ZGF0YS5pdGVtcy5rYW5qaX0ga2FuamkseycgJ31cbiAgICAgICAgICAgIHtkYXRhLml0ZW1zLnZvY2FidWxhcnl9IHZvY2FidWxhcnkueycgJ31cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBSZXZpZXcgdGFibGUuXG5leHBvcnQgY29uc3QgV2FuaUthbmlSZXZpZXdzOiBSZWFjdC5GQzxXS1Byb2ZpbGVJbnRlcmZhY2U+ID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0b3JzfT5PdmVyYWxsIFBlcmZvcm1hbmNlOjwvc3Bhbj5cbiAgICAgIDxUYWJsZSBjZWxsZWQgdGV4dEFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJibGFja1wiIGludmVydGVkIGNvbXBhY3Q+XG4gICAgICAgIDxUYWJsZS5IZWFkZXI+XG4gICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPjwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPlJlYWRpbmc8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5NZWFuaW5nPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+VG90YWw8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgIDwvVGFibGUuSGVhZGVyPlxuICAgICAgICA8VGFibGUuQm9keT5cbiAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+VG90YWwgUmV2aWV3czo8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57ZGF0YS5yZXZpZXcudG90YWxfcmVhZGluZ3N9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+e2RhdGEucmV2aWV3LnRvdGFsX21lYW5pbmdzfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntkYXRhLnJldmlldy50b3RhbF9yZXZpZXdzfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+Q29ycmVjdDo8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57ZGF0YS5yZXZpZXcuY29ycmVjdF9yZWFkaW5nc308L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57ZGF0YS5yZXZpZXcuY29ycmVjdF9tZWFuaW5nc308L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57ZGF0YS5yZXZpZXcuY29ycmVjdF9yZXZpZXdzfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+SW5jb3JyZWN0OjwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntkYXRhLnJldmlldy5pbmNvcnJlY3RfcmVhZGluZ3N9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+e2RhdGEucmV2aWV3LmluY29ycmVjdF9tZWFuaW5nc308L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57ZGF0YS5yZXZpZXcuaW5jb3JyZWN0X3Jldmlld3N9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5BY2N1cmFjeTo8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57KGRhdGEuYWNjdXJhY3kucmVhZGluZ3MgKiAxMDApLnRvRml4ZWQoMil9JTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPnsoZGF0YS5hY2N1cmFjeS5tZWFuaW5ncyAqIDEwMCkudG9GaXhlZCgyKX0lPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+eyhkYXRhLmFjY3VyYWN5LnRvdGFsICogMTAwKS50b0ZpeGVkKDIpfSU8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgIDwvVGFibGUuQm9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG4vLyBBY2N1cmFjeSB0YWJsZS5cbmV4cG9ydCBjb25zdCBXYW5pS2FuaUFjY3VyYWN5OiBSZWFjdC5GQzxXS1Byb2ZpbGVJbnRlcmZhY2U+ID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0b3JzfT5PdmVyYWxsIEFjY3VyYWN5Ojwvc3Bhbj5cbiAgICAgIDxUYWJsZSBjZWxsZWQgdGV4dEFsaWduPVwiY2VudGVyXCIgaW52ZXJ0ZWQgY29sb3I9XCJibGFja1wiIGNvbXBhY3Q+XG4gICAgICAgIDxUYWJsZS5IZWFkZXI+XG4gICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPjwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPlJlYWRpbmc8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5NZWFuaW5nPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+VG90YWw8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgIDwvVGFibGUuSGVhZGVyPlxuICAgICAgICA8VGFibGUuQm9keT5cbiAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+UmFkaWNhbHM6PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+LS0tPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+eyhkYXRhLmFjY3VyYWN5LnJhZGljYWwubWVhbmluZ3MgKiAxMDApLnRvRml4ZWQoMil9JTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPnsoZGF0YS5hY2N1cmFjeS5yYWRpY2FsLnRvdGFsICogMTAwKS50b0ZpeGVkKDIpfSU8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPkthbmppOjwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPnsoZGF0YS5hY2N1cmFjeS5rYW5qaS5yZWFkaW5ncyAqIDEwMCkudG9GaXhlZCgyKX0lPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+eyhkYXRhLmFjY3VyYWN5LmthbmppLm1lYW5pbmdzICogMTAwKS50b0ZpeGVkKDIpfSU8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57KGRhdGEuYWNjdXJhY3kua2FuamkudG90YWwgKiAxMDApLnRvRml4ZWQoMil9JTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+Vm9jYWJ1bGFyeTo8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57KGRhdGEuYWNjdXJhY3kudm9jYWJ1bGFyeS5yZWFkaW5ncyAqIDEwMCkudG9GaXhlZCgyKX0lPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+eyhkYXRhLmFjY3VyYWN5LnZvY2FidWxhcnkubWVhbmluZ3MgKiAxMDApLnRvRml4ZWQoMil9JTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPnsoZGF0YS5hY2N1cmFjeS52b2NhYnVsYXJ5LnRvdGFsICogMTAwKS50b0ZpeGVkKDIpfSU8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgIDwvVGFibGUuQm9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgV2FuaUthbmlQcm9maWxlLFxuICBXYW5pS2FuaVJldmlld3MsXG4gIFdhbmlLYW5pQWNjdXJhY3ksXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==