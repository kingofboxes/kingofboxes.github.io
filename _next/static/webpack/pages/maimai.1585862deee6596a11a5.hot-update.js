webpackHotUpdate_N_E("pages/maimai",{

/***/ "./components/public/Maimai/Maimai.data.tsx":
/*!**************************************************!*\
  !*** ./components/public/Maimai/Maimai.data.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaimaiSongLoader = exports.MaimaiSongComponent = void 0;

var _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var _MaimaiModule = _interopRequireDefault(__webpack_require__(/*! ../../styling/Maimai.module.css */ "./components/styling/Maimai.module.css"));

var _jsxFileName = "/home/kingofboxes/projects/website-project/components/public/Maimai/Maimai.data.tsx",
    _this = void 0;

// Profile header.
var MaimaiSongComponent = function MaimaiSongComponent(_ref) {
  var song = _ref.song;
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
    className: _MaimaiModule["default"].container,
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: _MaimaiModule["default"].album,
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("img", {
        src: song.cover,
        alt: "".concat(song.song, "-album-cover")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
      className: _MaimaiModule["default"].info,
      children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: _MaimaiModule["default"].header,
        children: [song.version === 'DELUXE' && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          className: _MaimaiModule["default"].version,
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("img", {
            src: "https://maimaidx-eng.com/maimai-mobile/img/music_dx.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, _this), song.version === 'STANDARD' && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          className: _MaimaiModule["default"].version,
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("img", {
            src: "https://maimaidx-eng.com/maimai-mobile/img/music_standard.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
          className: _MaimaiModule["default"].genre,
          children: song.genre
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: _MaimaiModule["default"].details,
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
          className: _MaimaiModule["default"].songname,
          children: song.song
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
          className: _MaimaiModule["default"].artist,
          children: song.artist
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: _MaimaiModule["default"].difficulty,
        children: Object.keys(song.data).map(function (diff) {
          var content = song.data[diff].score ? "PB: ".concat(song.data[diff].score.toFixed(4), " (").concat(song.data[diff].rank, ")") : '';

          if (content) {
            return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Popup, {
              content: content,
              trigger: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                className: _MaimaiModule["default"][diff],
                children: song.data[diff] && song.data[diff].level
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 19
              }, _this)
            }, "".concat(song.id, "-").concat(diff), false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }, _this);
          } else {
            return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
              className: _MaimaiModule["default"][diff],
              children: song.data[diff] && song.data[diff].level
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 19
            }, _this);
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)]
  }, song.id, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, _this);
};

exports.MaimaiSongComponent = MaimaiSongComponent;
_c = MaimaiSongComponent;

var MaimaiSongLoader = function MaimaiSongLoader() {
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Segment, {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Dimmer, {
      active: true,
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Loader, {
        size: "big",
        children: "Loading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Image, {
      src: "https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Image, {
      src: "https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Image, {
      src: "https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, _this);
};

exports.MaimaiSongLoader = MaimaiSongLoader;
_c2 = MaimaiSongLoader;
module.exports = {
  MaimaiSongComponent: MaimaiSongComponent,
  MaimaiSongLoader: MaimaiSongLoader
};

var _c, _c2;

$RefreshReg$(_c, "MaimaiSongComponent");
$RefreshReg$(_c2, "MaimaiSongLoader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS5kYXRhLnRzeCJdLCJuYW1lcyI6WyJNYWltYWlTb25nQ29tcG9uZW50Iiwic29uZyIsInN0eWxlcyIsImNvbnRhaW5lciIsImFsYnVtIiwiY292ZXIiLCJpbmZvIiwiaGVhZGVyIiwidmVyc2lvbiIsImdlbnJlIiwiZGV0YWlscyIsInNvbmduYW1lIiwiYXJ0aXN0IiwiZGlmZmljdWx0eSIsIk9iamVjdCIsImtleXMiLCJkYXRhIiwibWFwIiwiZGlmZiIsImNvbnRlbnQiLCJzY29yZSIsInRvRml4ZWQiLCJyYW5rIiwibGV2ZWwiLCJpZCIsIk1haW1haVNvbmdMb2FkZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFJQTs7Ozs7QUFPQTtBQUNPLElBQU1BLG1CQUFvRCxHQUFHLFNBQXZEQSxtQkFBdUQsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNoRixzQkFDRTtBQUFtQixhQUFTLEVBQUVDLHlCQUFPQyxTQUFyQztBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCx5QkFBT0UsS0FBdkI7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRUgsSUFBSSxDQUFDSSxLQUFmO0FBQXNCLFdBQUcsWUFBS0osSUFBSSxDQUFDQSxJQUFWO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFLLGVBQVMsRUFBRUMseUJBQU9JLElBQXZCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFSix5QkFBT0ssTUFBdkI7QUFBQSxtQkFDR04sSUFBSSxDQUFDTyxPQUFMLEtBQWlCLFFBQWpCLGlCQUNDO0FBQUssbUJBQVMsRUFBRU4seUJBQU9NLE9BQXZCO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtB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QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0UsMkJBQUMsc0JBQUQ7QUFBTyxTQUFHLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFNRSwyQkFBQyxzQkFBRDtBQUFPLFNBQUcsRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBWE07OztNQUFNQSxnQjtBQWFiQyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZjNCLHFCQUFtQixFQUFuQkEsbUJBRGU7QUFFZnlCLGtCQUFnQixFQUFoQkE7QUFGZSxDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWltYWkuMTU4NTg2MmRlZWU2NTk2YTExYTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGltbWVyLCBMb2FkZXIsIEltYWdlLCBTZWdtZW50LCBQb3B1cCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgeyBNTVNvbmdSZWNvcmQsIE1NU29uZ0RhdGEgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGluZy9NYWltYWkubW9kdWxlLmNzcyc7XG5cbi8vIEludGVyZmFjZSBmb3IgcGFnZS5cbmludGVyZmFjZSBNTVNvbmdSZWNvcmRJbnRlcmZhY2Uge1xuICBzb25nOiBNTVNvbmdSZWNvcmQ7XG59XG5cbi8vIFByb2ZpbGUgaGVhZGVyLlxuZXhwb3J0IGNvbnN0IE1haW1haVNvbmdDb21wb25lbnQ6IFJlYWN0LkZDPE1NU29uZ1JlY29yZEludGVyZmFjZT4gPSAoeyBzb25nIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17c29uZy5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxidW19PlxuICAgICAgICA8aW1nIHNyYz17c29uZy5jb3Zlcn0gYWx0PXtgJHtzb25nLnNvbmd9LWFsYnVtLWNvdmVyYH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgIHtzb25nLnZlcnNpb24gPT09ICdERUxVWEUnICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmVyc2lvbn0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tYWltYWlkeC1lbmcuY29tL21haW1haS1tb2JpbGUvaW1nL211c2ljX2R4LnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzb25nLnZlcnNpb24gPT09ICdTVEFOREFSRCcgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52ZXJzaW9ufT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL21haW1haWR4LWVuZy5jb20vbWFpbWFpLW1vYmlsZS9pbWcvbXVzaWNfc3RhbmRhcmQucG5nXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZ2VucmV9Pntzb25nLmdlbnJlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc29uZ25hbWV9Pntzb25nLnNvbmd9PC9zcGFuPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmFydGlzdH0+e3NvbmcuYXJ0aXN0fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGlmZmljdWx0eX0+XG4gICAgICAgICAge09iamVjdC5rZXlzKHNvbmcuZGF0YSkubWFwKChkaWZmOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzb25nLmRhdGFbZGlmZl0uc2NvcmUgPyBgUEI6ICR7c29uZy5kYXRhW2RpZmZdLnNjb3JlLnRvRml4ZWQoNCl9ICgke3NvbmcuZGF0YVtkaWZmXS5yYW5rfSlgIDogJyc7XG4gICAgICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxQb3B1cCBrZXk9e2Ake3NvbmcuaWR9LSR7ZGlmZn1gfSBjb250ZW50PXtjb250ZW50fSB0cmlnZ2VyPXtcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbZGlmZl19PlxuICAgICAgICAgICAgICAgICAgICB7c29uZy5kYXRhW2RpZmYgYXMga2V5b2YgTU1Tb25nRGF0YV0gJiYgc29uZy5kYXRhW2RpZmYgYXMga2V5b2YgTU1Tb25nRGF0YV0ubGV2ZWx9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9Lz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2RpZmZdfT5cbiAgICAgICAgICAgICAgICAgICAge3NvbmcuZGF0YVtkaWZmIGFzIGtleW9mIE1NU29uZ0RhdGFdICYmIHNvbmcuZGF0YVtkaWZmIGFzIGtleW9mIE1NU29uZ0RhdGFdLmxldmVsfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgTWFpbWFpU29uZ0xvYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFNlZ21lbnQ+XG4gICAgICA8RGltbWVyIGFjdGl2ZT5cbiAgICAgICAgPExvYWRlciBzaXplPSdiaWcnPkxvYWRpbmc8L0xvYWRlcj5cbiAgICAgIDwvRGltbWVyPlxuICAgICAgPEltYWdlIHNyYz0naHR0cHM6Ly9yZWFjdC5zZW1hbnRpYy11aS5jb20vaW1hZ2VzL3dpcmVmcmFtZS9zaG9ydC1wYXJhZ3JhcGgucG5nJyAvPlxuICAgICAgPEltYWdlIHNyYz0naHR0cHM6Ly9yZWFjdC5zZW1hbnRpYy11aS5jb20vaW1hZ2VzL3dpcmVmcmFtZS9zaG9ydC1wYXJhZ3JhcGgucG5nJyAvPlxuICAgICAgPEltYWdlIHNyYz0naHR0cHM6Ly9yZWFjdC5zZW1hbnRpYy11aS5jb20vaW1hZ2VzL3dpcmVmcmFtZS9zaG9ydC1wYXJhZ3JhcGgucG5nJyAvPlxuICAgIDwvU2VnbWVudD5cbiAgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgTWFpbWFpU29uZ0NvbXBvbmVudCxcbiAgTWFpbWFpU29uZ0xvYWRlcixcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9