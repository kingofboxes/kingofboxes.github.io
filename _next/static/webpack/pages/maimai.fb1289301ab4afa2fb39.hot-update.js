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
          return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Popup, {
            content: "",
            trigger: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
              className: _MaimaiModule["default"][diff],
              children: song.data[diff] && song.data[diff].level
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 19
            }, _this)
          }, "".concat(song.id, "-").concat(diff), false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 17
          }, _this);
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
        lineNumber: 61,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Image, {
      src: "https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Image, {
      src: "https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_semanticUiReact.Image, {
      src: "https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS5kYXRhLnRzeCJdLCJuYW1lcyI6WyJNYWltYWlTb25nQ29tcG9uZW50Iiwic29uZyIsInN0eWxlcyIsImNvbnRhaW5lciIsImFsYnVtIiwiY292ZXIiLCJpbmZvIiwiaGVhZGVyIiwidmVyc2lvbiIsImdlbnJlIiwiZGV0YWlscyIsInNvbmduYW1lIiwiYXJ0aXN0IiwiZGlmZmljdWx0eSIsIk9iamVjdCIsImtleXMiLCJkYXRhIiwibWFwIiwiZGlmZiIsImxldmVsIiwiaWQiLCJNYWltYWlTb25nTG9hZGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBSUE7Ozs7O0FBT0E7QUFDTyxJQUFNQSxtQkFBb0QsR0FBRyxTQUF2REEsbUJBQXVELE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDaEYsc0JBQ0U7QUFBbUIsYUFBUyxFQUFFQyx5QkFBT0MsU0FBckM7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUQseUJBQU9FLEtBQXZCO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUVILElBQUksQ0FBQ0ksS0FBZjtBQUFzQixXQUFHLFlBQUtKLElBQUksQ0FBQ0EsSUFBVjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVDLHlCQUFPSSxJQUF2QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUoseUJBQU9LLE1BQXZCO0FBQUEsbUJBQ0dOLElBQUksQ0FBQ08sT0FBTCxLQUFpQixRQUFqQixpQkFDQztBQUFLLG1CQUFTLEVBQUVOLHlCQUFPTSxPQUF2QjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosRUFNR1AsSUFBSSxDQUFDTyxPQUFMLEtBQWlCLFVBQWpCLGlCQUNDO0FBQUssbUJBQVMsRUFBRU4seUJBQU9NLE9BQXZCO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSixlQVdFO0FBQU0sbUJBQVMsRUFBRU4seUJBQU9PLEtBQXhCO0FBQUEsb0JBQWdDUixJQUFJLENBQUNRO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFjRTtBQUFLLGlCQUFTLEVBQUVQLHlCQUFPUSxPQUF2QjtBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBRVIseUJBQU9TLFFBQXhCO0FBQUEsb0JBQW1DVixJQUFJLENBQUNBO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBTSxtQkFBUyxFQUFFQyx5QkFBT1UsTUFBeEI7QUFBQSxvQkFBaUNYLElBQUksQ0FBQ1c7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRixlQW1CRTtBQUFLLGlCQUFTLEVBQUVWLHlCQUFPVyxVQUF2QjtBQUFBLGtCQUNHQyxNQUFNLENBQUNDLElBQVAsQ0FBWWQsSUFBSSxDQUFDZSxJQUFqQixFQUF1QkMsR0FBdkIsQ0FBMkIsVUFBQ0MsSUFBRCxFQUFrQjtBQUMxQyw4QkFDRSwyQkFBQyxzQkFBRDtBQUFrQyxtQkFBTyxFQUFDLEVBQTFDO0FBQTZDLG1CQUFPLGVBQ2xEO0FBQUssdUJBQVMsRUFBRWhCLHlCQUFPZ0IsSUFBUCxDQUFoQjtBQUFBLHdCQUNHakIsSUFBSSxDQUFDZSxJQUFMLENBQVVFLElBQVYsS0FBdUNqQixJQUFJLENBQUNlLElBQUwsQ0FBVUUsSUFBVixFQUFvQ0M7QUFEOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHVCQUFlbEIsSUFBSSxDQUFDbUIsRUFBcEIsY0FBMEJGLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFRSCxTQVRBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBLEtBQVVqQixJQUFJLENBQUNtQixFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVDRCxDQXhDTTs7O0tBQU1wQixtQjs7QUEwQ04sSUFBTXFCLGdCQUEwQixHQUFHLFNBQTdCQSxnQkFBNkIsR0FBTTtBQUM5QyxzQkFDRSwyQkFBQyx3QkFBRDtBQUFBLDRCQUNFLDJCQUFDLHVCQUFEO0FBQVEsWUFBTSxNQUFkO0FBQUEsNkJBQ0UsMkJBQUMsdUJBQUQ7QUFBUSxZQUFJLEVBQUMsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLDJCQUFDLHNCQUFEO0FBQU8sU0FBRyxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0UsMkJBQUMsc0JBQUQ7QUFBTyxTQUFHLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFNRSwyQkFBQyxzQkFBRDtBQUFPLFNBQUcsRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBWE07OztNQUFNQSxnQjtBQWFiQyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZnZCLHFCQUFtQixFQUFuQkEsbUJBRGU7QUFFZnFCLGtCQUFnQixFQUFoQkE7QUFGZSxDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWltYWkuZmIxMjg5MzAxYWI0YWZhMmZiMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGltbWVyLCBMb2FkZXIsIEltYWdlLCBTZWdtZW50LCBQb3B1cCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgeyBNTVNvbmdSZWNvcmQsIE1NU29uZ0RhdGEgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGluZy9NYWltYWkubW9kdWxlLmNzcyc7XG5cbi8vIEludGVyZmFjZSBmb3IgcGFnZS5cbmludGVyZmFjZSBNTVNvbmdSZWNvcmRJbnRlcmZhY2Uge1xuICBzb25nOiBNTVNvbmdSZWNvcmQ7XG59XG5cbi8vIFByb2ZpbGUgaGVhZGVyLlxuZXhwb3J0IGNvbnN0IE1haW1haVNvbmdDb21wb25lbnQ6IFJlYWN0LkZDPE1NU29uZ1JlY29yZEludGVyZmFjZT4gPSAoeyBzb25nIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17c29uZy5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxidW19PlxuICAgICAgICA8aW1nIHNyYz17c29uZy5jb3Zlcn0gYWx0PXtgJHtzb25nLnNvbmd9LWFsYnVtLWNvdmVyYH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgIHtzb25nLnZlcnNpb24gPT09ICdERUxVWEUnICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmVyc2lvbn0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tYWltYWlkeC1lbmcuY29tL21haW1haS1tb2JpbGUvaW1nL211c2ljX2R4LnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzb25nLnZlcnNpb24gPT09ICdTVEFOREFSRCcgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52ZXJzaW9ufT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL21haW1haWR4LWVuZy5jb20vbWFpbWFpLW1vYmlsZS9pbWcvbXVzaWNfc3RhbmRhcmQucG5nXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZ2VucmV9Pntzb25nLmdlbnJlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc29uZ25hbWV9Pntzb25nLnNvbmd9PC9zcGFuPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmFydGlzdH0+e3NvbmcuYXJ0aXN0fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGlmZmljdWx0eX0+XG4gICAgICAgICAge09iamVjdC5rZXlzKHNvbmcuZGF0YSkubWFwKChkaWZmOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UG9wdXAga2V5PXtgJHtzb25nLmlkfS0ke2RpZmZ9YH0gY29udGVudD1cIlwiIHRyaWdnZXI9e1xuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tkaWZmXX0+XG4gICAgICAgICAgICAgICAgICAgIHtzb25nLmRhdGFbZGlmZiBhcyBrZXlvZiBNTVNvbmdEYXRhXSAmJiBzb25nLmRhdGFbZGlmZiBhcyBrZXlvZiBNTVNvbmdEYXRhXS5sZXZlbH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH0vPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IE1haW1haVNvbmdMb2FkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTZWdtZW50PlxuICAgICAgPERpbW1lciBhY3RpdmU+XG4gICAgICAgIDxMb2FkZXIgc2l6ZT0nYmlnJz5Mb2FkaW5nPC9Mb2FkZXI+XG4gICAgICA8L0RpbW1lcj5cbiAgICAgIDxJbWFnZSBzcmM9J2h0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL2ltYWdlcy93aXJlZnJhbWUvc2hvcnQtcGFyYWdyYXBoLnBuZycgLz5cbiAgICAgIDxJbWFnZSBzcmM9J2h0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL2ltYWdlcy93aXJlZnJhbWUvc2hvcnQtcGFyYWdyYXBoLnBuZycgLz5cbiAgICAgIDxJbWFnZSBzcmM9J2h0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL2ltYWdlcy93aXJlZnJhbWUvc2hvcnQtcGFyYWdyYXBoLnBuZycgLz5cbiAgICA8L1NlZ21lbnQ+XG4gIClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIE1haW1haVNvbmdDb21wb25lbnQsXG4gIE1haW1haVNvbmdMb2FkZXIsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==