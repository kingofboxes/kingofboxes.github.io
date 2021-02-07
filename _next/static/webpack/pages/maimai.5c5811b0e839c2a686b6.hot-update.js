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
          var content = song.data[diff].score ? "Rank: ".concat(song.data[diff].rank, "\r\n \n            Score: ").concat(song.data[diff].score.toFixed(4)) : '';

          if (content) {
            return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Popup, {
              content: content,
              trigger: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
                className: _MaimaiModule["default"][diff],
                children: song.data[diff] && song.data[diff].level
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 19
              }, _this)
            }, "".concat(song.id, "-").concat(diff), false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 17
            }, _this);
          } else {
            return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
              className: _MaimaiModule["default"][diff],
              children: song.data[diff] && song.data[diff].level
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
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
        lineNumber: 70,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
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
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Image, {
      src: "https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS5kYXRhLnRzeCJdLCJuYW1lcyI6WyJNYWltYWlTb25nQ29tcG9uZW50Iiwic29uZyIsInN0eWxlcyIsImNvbnRhaW5lciIsImFsYnVtIiwiY292ZXIiLCJpbmZvIiwiaGVhZGVyIiwidmVyc2lvbiIsImdlbnJlIiwiZGV0YWlscyIsInNvbmduYW1lIiwiYXJ0aXN0IiwiZGlmZmljdWx0eSIsIk9iamVjdCIsImtleXMiLCJkYXRhIiwibWFwIiwiZGlmZiIsImNvbnRlbnQiLCJzY29yZSIsInJhbmsiLCJ0b0ZpeGVkIiwibGV2ZWwiLCJpZCIsIk1haW1haVNvbmdMb2FkZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFJQTs7Ozs7QUFPQTtBQUNPLElBQU1BLG1CQUFvRCxHQUFHLFNBQXZEQSxtQkFBdUQsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNoRixzQkFDRTtBQUFtQixhQUFTLEVBQUVDLHlCQUFPQyxTQUFyQztBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCx5QkFBT0UsS0FBdkI7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRUgsSUFBSSxDQUFDSSxLQUFmO0FBQXNCLFdBQUcsWUFBS0osSUFBSSxDQUFDQSxJQUFWO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFLLGVBQVMsRUFBRUMseUJBQU9JLElBQXZCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFSix5QkFBT0ssTUFBdkI7QUFBQSxtQkFDR04sSUFBSSxDQUFDTyxPQUFMLEtBQWlCLFFBQWpCLGlCQUNDO0FBQUssbUJBQVMsRUFBRU4seUJBQU9NLE9BQXZCO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtB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QUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRSwyQkFBQyxzQkFBRDtBQUFPLFNBQUcsRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQU1FLDJCQUFDLHNCQUFEO0FBQU8sU0FBRyxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FYTTs7O01BQU1BLGdCO0FBYWJDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmM0IscUJBQW1CLEVBQW5CQSxtQkFEZTtBQUVmeUIsa0JBQWdCLEVBQWhCQTtBQUZlLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW1haS41YzU4MTFiMGU4MzljMmE2ODZiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEaW1tZXIsIExvYWRlciwgSW1hZ2UsIFNlZ21lbnQsIFBvcHVwIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCB7IE1NU29uZ1JlY29yZCwgTU1Tb25nRGF0YSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsaW5nL01haW1haS5tb2R1bGUuY3NzJztcblxuLy8gSW50ZXJmYWNlIGZvciBwYWdlLlxuaW50ZXJmYWNlIE1NU29uZ1JlY29yZEludGVyZmFjZSB7XG4gIHNvbmc6IE1NU29uZ1JlY29yZDtcbn1cblxuLy8gUHJvZmlsZSBoZWFkZXIuXG5leHBvcnQgY29uc3QgTWFpbWFpU29uZ0NvbXBvbmVudDogUmVhY3QuRkM8TU1Tb25nUmVjb3JkSW50ZXJmYWNlPiA9ICh7IHNvbmcgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYga2V5PXtzb25nLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbGJ1bX0+XG4gICAgICAgIDxpbWcgc3JjPXtzb25nLmNvdmVyfSBhbHQ9e2Ake3Nvbmcuc29uZ30tYWxidW0tY292ZXJgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAge3NvbmcudmVyc2lvbiA9PT0gJ0RFTFVYRScgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52ZXJzaW9ufT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL21haW1haWR4LWVuZy5jb20vbWFpbWFpLW1vYmlsZS9pbWcvbXVzaWNfZHgucG5nXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3NvbmcudmVyc2lvbiA9PT0gJ1NUQU5EQVJEJyAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZlcnNpb259PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbWFpbWFpZHgtZW5nLmNvbS9tYWltYWktbW9iaWxlL2ltZy9tdXNpY19zdGFuZGFyZC5wbmdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5nZW5yZX0+e3NvbmcuZ2VucmV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zb25nbmFtZX0+e3Nvbmcuc29uZ308L3NwYW4+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aXN0fT57c29uZy5hcnRpc3R9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWZmaWN1bHR5fT5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoc29uZy5kYXRhKS5tYXAoKGRpZmY6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHNvbmcuZGF0YVtkaWZmXS5zY29yZSA/IGBSYW5rOiAke3NvbmcuZGF0YVtkaWZmXS5yYW5rfVxcclxcbiBcbiAgICAgICAgICAgIFNjb3JlOiAke3NvbmcuZGF0YVtkaWZmXS5zY29yZS50b0ZpeGVkKDQpfWAgOiAnJztcbiAgICAgICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFBvcHVwIGtleT17YCR7c29uZy5pZH0tJHtkaWZmfWB9IGNvbnRlbnQ9e2NvbnRlbnR9IHRyaWdnZXI9e1xuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tkaWZmXX0+XG4gICAgICAgICAgICAgICAgICAgIHtzb25nLmRhdGFbZGlmZiBhcyBrZXlvZiBNTVNvbmdEYXRhXSAmJiBzb25nLmRhdGFbZGlmZiBhcyBrZXlvZiBNTVNvbmdEYXRhXS5sZXZlbH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH0vPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbZGlmZl19PlxuICAgICAgICAgICAgICAgICAgICB7c29uZy5kYXRhW2RpZmYgYXMga2V5b2YgTU1Tb25nRGF0YV0gJiYgc29uZy5kYXRhW2RpZmYgYXMga2V5b2YgTU1Tb25nRGF0YV0ubGV2ZWx9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBNYWltYWlTb25nTG9hZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U2VnbWVudD5cbiAgICAgIDxEaW1tZXIgYWN0aXZlPlxuICAgICAgICA8TG9hZGVyIHNpemU9J2JpZyc+TG9hZGluZzwvTG9hZGVyPlxuICAgICAgPC9EaW1tZXI+XG4gICAgICA8SW1hZ2Ugc3JjPSdodHRwczovL3JlYWN0LnNlbWFudGljLXVpLmNvbS9pbWFnZXMvd2lyZWZyYW1lL3Nob3J0LXBhcmFncmFwaC5wbmcnIC8+XG4gICAgICA8SW1hZ2Ugc3JjPSdodHRwczovL3JlYWN0LnNlbWFudGljLXVpLmNvbS9pbWFnZXMvd2lyZWZyYW1lL3Nob3J0LXBhcmFncmFwaC5wbmcnIC8+XG4gICAgICA8SW1hZ2Ugc3JjPSdodHRwczovL3JlYWN0LnNlbWFudGljLXVpLmNvbS9pbWFnZXMvd2lyZWZyYW1lL3Nob3J0LXBhcmFncmFwaC5wbmcnIC8+XG4gICAgPC9TZWdtZW50PlxuICApXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBNYWltYWlTb25nQ29tcG9uZW50LFxuICBNYWltYWlTb25nTG9hZGVyLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=