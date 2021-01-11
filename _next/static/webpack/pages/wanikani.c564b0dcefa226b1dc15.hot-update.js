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
        "object-fit": "cover",
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
          lineNumber: 30,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
          children: ["Level: ", data.user.level]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: _WaniKaniModule["default"].summary,
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
          children: ["Date Started: ", data.user.date_started]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
          children: ["Last Updated: ", data.user.time_updated]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
          children: ["Items learnt: ", data.items.radical, " radicals, ", data.items.kanji, " kanji,", ' ', data.items.vocabulary, " vocabulary.", ' ']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
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
      lineNumber: 50,
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
            lineNumber: 54,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Reading"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Meaning"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Total"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Body, {
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Total Reviews:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.total_readings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.total_meanings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.total_reviews
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
            children: "Correct:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.correct_readings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.correct_meanings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.correct_reviews
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
            children: "Incorrect:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.incorrect_readings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.incorrect_meanings
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: data.review.incorrect_reviews
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Accuracy:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.readings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.meanings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.total * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
      lineNumber: 95,
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
            lineNumber: 99,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Reading"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Meaning"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.HeaderCell, {
            children: "Total"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Body, {
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Radicals:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "---"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.radical.meanings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.radical.total * 100).toFixed(2), "%"]
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
            children: "Kanji:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.kanji.readings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.kanji.meanings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.kanji.total * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Row, {
          children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: "Vocabulary:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.vocabulary.readings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.vocabulary.meanings * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Table.Cell, {
            children: [(data.accuracy.vocabulary.total * 100).toFixed(2), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvV2FuaUthbmkvV2FuaUthbmkuZGF0YS50c3giXSwibmFtZXMiOlsiV2FuaUthbmlQcm9maWxlIiwiZGF0YSIsInN0eWxlcyIsInByb2ZpbGUiLCJhdmF0YXIiLCJBdmF0YXIiLCJ3cmFwcGVyIiwicHJvZ3Jlc3MiLCJ1c2VyIiwidXNlcm5hbWUiLCJsZXZlbCIsInN1bW1hcnkiLCJkYXRlX3N0YXJ0ZWQiLCJ0aW1lX3VwZGF0ZWQiLCJpdGVtcyIsInJhZGljYWwiLCJrYW5qaSIsInZvY2FidWxhcnkiLCJXYW5pS2FuaVJldmlld3MiLCJkZXNjcmlwdG9ycyIsInJldmlldyIsInRvdGFsX3JlYWRpbmdzIiwidG90YWxfbWVhbmluZ3MiLCJ0b3RhbF9yZXZpZXdzIiwiY29ycmVjdF9yZWFkaW5ncyIsImNvcnJlY3RfbWVhbmluZ3MiLCJjb3JyZWN0X3Jldmlld3MiLCJpbmNvcnJlY3RfcmVhZGluZ3MiLCJpbmNvcnJlY3RfbWVhbmluZ3MiLCJpbmNvcnJlY3RfcmV2aWV3cyIsImFjY3VyYWN5IiwicmVhZGluZ3MiLCJ0b0ZpeGVkIiwibWVhbmluZ3MiLCJ0b3RhbCIsIldhbmlLYW5pQWNjdXJhY3kiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFFQTs7Ozs7QUFPQTtBQUNPLElBQU1BLGVBQTZDLEdBQUcsU0FBaERBLGVBQWdELE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDekUsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDJCQUFPQyxPQUF2QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCwyQkFBT0UsTUFBdkI7QUFBQSw2QkFDRSwyQkFBQyx3QkFBRDtBQUNFLFdBQUcsRUFBRUMsa0JBRFA7QUFFRSxhQUFLLEVBQUUsQ0FBQyxFQUFELEVBQUssR0FBTCxDQUZUO0FBR0UsbUJBQVcs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LDJCQUFDLHNCQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDJCQUFDLHNCQUFELENBQU8sSUFBUDtBQUFBLHVCQUFhLENBQUMvQixJQUFJLENBQUM2QixRQUFMLENBQWNiLFVBQWQsQ0FBeUJjLFFBQXpCLEdBQW9DLEdBQXJDLEVBQTBDQyxPQUExQyxDQUFrRCxDQUFsRCxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFLDJCQUFDLHNCQUFELENBQU8sSUFBUDtBQUFBLHVCQUFhLENBQUMvQixJQUFJLENBQUM2QixRQUFMLENBQWNiLFVBQWQsQ0FBeUJnQixRQUF6QixHQUFvQyxHQUFyQyxFQUEwQ0QsT0FBMUMsQ0FBa0QsQ0FBbEQsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRSwyQkFBQyxzQkFBRCxDQUFPLElBQVA7QUFBQSx1QkFBYSxDQUFDL0IsSUFBSSxDQUFDNkIsUUFBTCxDQUFjYixVQUFkLENBQXlCaUIsS0FBekIsR0FBaUMsR0FBbEMsRUFBdUNGLE9BQXZDLENBQStDLENBQS9DLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGO0FBbUNELENBcENNOzs7TUFBTUcsZ0I7QUFzQ2JDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmckMsaUJBQWUsRUFBZkEsZUFEZTtBQUVma0IsaUJBQWUsRUFBZkEsZUFGZTtBQUdmaUIsa0JBQWdCLEVBQWhCQTtBQUhlLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dhbmlrYW5pLmM1NjRiMGRjZWZhMjI2YjFkYzE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW1nIH0gZnJvbSAncmVhY3Qtb3B0aW1pemVkLWltYWdlJztcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5pbXBvcnQgeyBXS1Byb2ZpbGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9hdmF0YXIucG5nJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsaW5nL1dhbmlLYW5pLm1vZHVsZS5jc3MnO1xuXG4vLyBJbnRlcmZhY2UgZm9yIHBhZ2UuXG5pbnRlcmZhY2UgV0tQcm9maWxlSW50ZXJmYWNlIHtcbiAgZGF0YTogV0tQcm9maWxlO1xufVxuXG4vLyBQcm9maWxlIGhlYWRlci5cbmV4cG9ydCBjb25zdCBXYW5pS2FuaVByb2ZpbGU6IFJlYWN0LkZDPFdLUHJvZmlsZUludGVyZmFjZT4gPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxuICAgICAgICA8SW1nXG4gICAgICAgICAgc3JjPXtBdmF0YXJ9XG4gICAgICAgICAgc2l6ZXM9e1s2NCwgMTI4XX1cbiAgICAgICAgICBicmVha3BvaW50cz17WzQ1MF19XG4gICAgICAgICAgYWx0PVwia2luZ29mYm94ZXMtYXZhdGFyXCJcbiAgICAgICAgICBvYmplY3QtZml0PVwiY292ZXJcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfT5cbiAgICAgICAgICA8YSBocmVmPXtkYXRhLnVzZXIucHJvZmlsZX0+e2RhdGEudXNlci51c2VybmFtZX08L2E+XG4gICAgICAgICAgPHA+TGV2ZWw6IHtkYXRhLnVzZXIubGV2ZWx9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5fT5cbiAgICAgICAgICA8cD5EYXRlIFN0YXJ0ZWQ6IHtkYXRhLnVzZXIuZGF0ZV9zdGFydGVkfTwvcD5cbiAgICAgICAgICA8cD5MYXN0IFVwZGF0ZWQ6IHtkYXRhLnVzZXIudGltZV91cGRhdGVkfTwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEl0ZW1zIGxlYXJudDoge2RhdGEuaXRlbXMucmFkaWNhbH0gcmFkaWNhbHMsIHtkYXRhLml0ZW1zLmthbmppfSBrYW5qaSx7JyAnfVxuICAgICAgICAgICAge2RhdGEuaXRlbXMudm9jYWJ1bGFyeX0gdm9jYWJ1bGFyeS57JyAnfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIFJldmlldyB0YWJsZS5cbmV4cG9ydCBjb25zdCBXYW5pS2FuaVJldmlld3M6IFJlYWN0LkZDPFdLUHJvZmlsZUludGVyZmFjZT4gPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRvcnN9Pk92ZXJhbGwgUGVyZm9ybWFuY2U6PC9zcGFuPlxuICAgICAgPFRhYmxlIGNlbGxlZCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cImJsYWNrXCIgaW52ZXJ0ZWQgY29tcGFjdD5cbiAgICAgICAgPFRhYmxlLkhlYWRlcj5cbiAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+PC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+UmVhZGluZzwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPk1lYW5pbmc8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5Ub3RhbDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgPC9UYWJsZS5IZWFkZXI+XG4gICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5Ub3RhbCBSZXZpZXdzOjwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntkYXRhLnJldmlldy50b3RhbF9yZWFkaW5nc308L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57ZGF0YS5yZXZpZXcudG90YWxfbWVhbmluZ3N9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+e2RhdGEucmV2aWV3LnRvdGFsX3Jldmlld3N9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5Db3JyZWN0OjwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntkYXRhLnJldmlldy5jb3JyZWN0X3JlYWRpbmdzfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntkYXRhLnJldmlldy5jb3JyZWN0X21lYW5pbmdzfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntkYXRhLnJldmlldy5jb3JyZWN0X3Jldmlld3N9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5JbmNvcnJlY3Q6PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+e2RhdGEucmV2aWV3LmluY29ycmVjdF9yZWFkaW5nc308L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57ZGF0YS5yZXZpZXcuaW5jb3JyZWN0X21lYW5pbmdzfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntkYXRhLnJldmlldy5pbmNvcnJlY3RfcmV2aWV3c308L1RhYmxlLkNlbGw+XG4gICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPkFjY3VyYWN5OjwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPnsoZGF0YS5hY2N1cmFjeS5yZWFkaW5ncyAqIDEwMCkudG9GaXhlZCgyKX0lPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+eyhkYXRhLmFjY3VyYWN5Lm1lYW5pbmdzICogMTAwKS50b0ZpeGVkKDIpfSU8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57KGRhdGEuYWNjdXJhY3kudG90YWwgKiAxMDApLnRvRml4ZWQoMil9JTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgPC9UYWJsZS5Cb2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbi8vIEFjY3VyYWN5IHRhYmxlLlxuZXhwb3J0IGNvbnN0IFdhbmlLYW5pQWNjdXJhY3k6IFJlYWN0LkZDPFdLUHJvZmlsZUludGVyZmFjZT4gPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRvcnN9Pk92ZXJhbGwgQWNjdXJhY3k6PC9zcGFuPlxuICAgICAgPFRhYmxlIGNlbGxlZCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBpbnZlcnRlZCBjb2xvcj1cImJsYWNrXCIgY29tcGFjdD5cbiAgICAgICAgPFRhYmxlLkhlYWRlcj5cbiAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+PC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+UmVhZGluZzwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPk1lYW5pbmc8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5Ub3RhbDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgPC9UYWJsZS5IZWFkZXI+XG4gICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5SYWRpY2Fsczo8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD4tLS08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57KGRhdGEuYWNjdXJhY3kucmFkaWNhbC5tZWFuaW5ncyAqIDEwMCkudG9GaXhlZCgyKX0lPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+eyhkYXRhLmFjY3VyYWN5LnJhZGljYWwudG90YWwgKiAxMDApLnRvRml4ZWQoMil9JTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+S2Fuamk6PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+eyhkYXRhLmFjY3VyYWN5LmthbmppLnJlYWRpbmdzICogMTAwKS50b0ZpeGVkKDIpfSU8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57KGRhdGEuYWNjdXJhY3kua2FuamkubWVhbmluZ3MgKiAxMDApLnRvRml4ZWQoMil9JTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPnsoZGF0YS5hY2N1cmFjeS5rYW5qaS50b3RhbCAqIDEwMCkudG9GaXhlZCgyKX0lPC9UYWJsZS5DZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5Wb2NhYnVsYXJ5OjwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPnsoZGF0YS5hY2N1cmFjeS52b2NhYnVsYXJ5LnJlYWRpbmdzICogMTAwKS50b0ZpeGVkKDIpfSU8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57KGRhdGEuYWNjdXJhY3kudm9jYWJ1bGFyeS5tZWFuaW5ncyAqIDEwMCkudG9GaXhlZCgyKX0lPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+eyhkYXRhLmFjY3VyYWN5LnZvY2FidWxhcnkudG90YWwgKiAxMDApLnRvRml4ZWQoMil9JTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgPC9UYWJsZS5Cb2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBXYW5pS2FuaVByb2ZpbGUsXG4gIFdhbmlLYW5pUmV2aWV3cyxcbiAgV2FuaUthbmlBY2N1cmFjeSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9