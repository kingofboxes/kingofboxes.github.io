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
          var content = song.data[diff].score ? "Rank: ".concat(song.data[diff].rank, "\n Score: ").concat(song.data[diff].score) : '';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS5kYXRhLnRzeCJdLCJuYW1lcyI6WyJNYWltYWlTb25nQ29tcG9uZW50Iiwic29uZyIsInN0eWxlcyIsImNvbnRhaW5lciIsImFsYnVtIiwiY292ZXIiLCJpbmZvIiwiaGVhZGVyIiwidmVyc2lvbiIsImdlbnJlIiwiZGV0YWlscyIsInNvbmduYW1lIiwiYXJ0aXN0IiwiZGlmZmljdWx0eSIsIk9iamVjdCIsImtleXMiLCJkYXRhIiwibWFwIiwiZGlmZiIsImNvbnRlbnQiLCJzY29yZSIsInJhbmsiLCJsZXZlbCIsImlkIiwiTWFpbWFpU29uZ0xvYWRlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUlBOzs7OztBQU9BO0FBQ08sSUFBTUEsbUJBQW9ELEdBQUcsU0FBdkRBLG1CQUF1RCxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2hGLHNCQUNFO0FBQW1CLGFBQVMsRUFBRUMseUJBQU9DLFNBQXJDO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVELHlCQUFPRSxLQUF2QjtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFFSCxJQUFJLENBQUNJLEtBQWY7QUFBc0IsV0FBRyxZQUFLSixJQUFJLENBQUNBLElBQVY7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFFQyx5QkFBT0ksSUFBdkI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVKLHlCQUFPSyxNQUF2QjtBQUFBLG1CQUNHTixJQUFJLENBQUNPLE9BQUwsS0FBaUIsUUFBakIsaUJBQ0M7QUFBSyxtQkFBUyxFQUFFTix5QkFBT00sT0FBdkI7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtB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RDtBQUFPLFNBQUcsRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQU1FLDJCQUFDLHNCQUFEO0FBQU8sU0FBRyxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FYTTs7O01BQU1BLGdCO0FBYWJDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmMUIscUJBQW1CLEVBQW5CQSxtQkFEZTtBQUVmd0Isa0JBQWdCLEVBQWhCQTtBQUZlLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW1haS4xZWM3ZGNhODM5YjI1YWM5Njk4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEaW1tZXIsIExvYWRlciwgSW1hZ2UsIFNlZ21lbnQsIFBvcHVwIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCB7IE1NU29uZ1JlY29yZCwgTU1Tb25nRGF0YSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsaW5nL01haW1haS5tb2R1bGUuY3NzJztcblxuLy8gSW50ZXJmYWNlIGZvciBwYWdlLlxuaW50ZXJmYWNlIE1NU29uZ1JlY29yZEludGVyZmFjZSB7XG4gIHNvbmc6IE1NU29uZ1JlY29yZDtcbn1cblxuLy8gUHJvZmlsZSBoZWFkZXIuXG5leHBvcnQgY29uc3QgTWFpbWFpU29uZ0NvbXBvbmVudDogUmVhY3QuRkM8TU1Tb25nUmVjb3JkSW50ZXJmYWNlPiA9ICh7IHNvbmcgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYga2V5PXtzb25nLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbGJ1bX0+XG4gICAgICAgIDxpbWcgc3JjPXtzb25nLmNvdmVyfSBhbHQ9e2Ake3Nvbmcuc29uZ30tYWxidW0tY292ZXJgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAge3NvbmcudmVyc2lvbiA9PT0gJ0RFTFVYRScgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52ZXJzaW9ufT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL21haW1haWR4LWVuZy5jb20vbWFpbWFpLW1vYmlsZS9pbWcvbXVzaWNfZHgucG5nXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3NvbmcudmVyc2lvbiA9PT0gJ1NUQU5EQVJEJyAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZlcnNpb259PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbWFpbWFpZHgtZW5nLmNvbS9tYWltYWktbW9iaWxlL2ltZy9tdXNpY19zdGFuZGFyZC5wbmdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5nZW5yZX0+e3NvbmcuZ2VucmV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zb25nbmFtZX0+e3Nvbmcuc29uZ308L3NwYW4+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aXN0fT57c29uZy5hcnRpc3R9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWZmaWN1bHR5fT5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoc29uZy5kYXRhKS5tYXAoKGRpZmY6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHNvbmcuZGF0YVtkaWZmXS5zY29yZSA/IGBSYW5rOiAke3NvbmcuZGF0YVtkaWZmXS5yYW5rfVxcbiBTY29yZTogJHtzb25nLmRhdGFbZGlmZl0uc2NvcmV9YCA6ICcnO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UG9wdXAga2V5PXtgJHtzb25nLmlkfS0ke2RpZmZ9YH0gY29udGVudD17Y29udGVudH0gdHJpZ2dlcj17XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW2RpZmZdfT5cbiAgICAgICAgICAgICAgICAgICAge3NvbmcuZGF0YVtkaWZmIGFzIGtleW9mIE1NU29uZ0RhdGFdICYmIHNvbmcuZGF0YVtkaWZmIGFzIGtleW9mIE1NU29uZ0RhdGFdLmxldmVsfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfS8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tkaWZmXX0+XG4gICAgICAgICAgICAgICAgICAgIHtzb25nLmRhdGFbZGlmZiBhcyBrZXlvZiBNTVNvbmdEYXRhXSAmJiBzb25nLmRhdGFbZGlmZiBhcyBrZXlvZiBNTVNvbmdEYXRhXS5sZXZlbH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IE1haW1haVNvbmdMb2FkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTZWdtZW50PlxuICAgICAgPERpbW1lciBhY3RpdmU+XG4gICAgICAgIDxMb2FkZXIgc2l6ZT0nYmlnJz5Mb2FkaW5nPC9Mb2FkZXI+XG4gICAgICA8L0RpbW1lcj5cbiAgICAgIDxJbWFnZSBzcmM9J2h0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL2ltYWdlcy93aXJlZnJhbWUvc2hvcnQtcGFyYWdyYXBoLnBuZycgLz5cbiAgICAgIDxJbWFnZSBzcmM9J2h0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL2ltYWdlcy93aXJlZnJhbWUvc2hvcnQtcGFyYWdyYXBoLnBuZycgLz5cbiAgICAgIDxJbWFnZSBzcmM9J2h0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL2ltYWdlcy93aXJlZnJhbWUvc2hvcnQtcGFyYWdyYXBoLnBuZycgLz5cbiAgICA8L1NlZ21lbnQ+XG4gIClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIE1haW1haVNvbmdDb21wb25lbnQsXG4gIE1haW1haVNvbmdMb2FkZXIsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==