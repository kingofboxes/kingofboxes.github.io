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
        lineNumber: 18,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
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
            lineNumber: 24,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, _this), song.version === 'STANDARD' && /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
          className: _MaimaiModule["default"].version,
          children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("img", {
            src: "https://maimaidx-eng.com/maimai-mobile/img/music_standard.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
          className: _MaimaiModule["default"].genre,
          children: song.genre
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: _MaimaiModule["default"].details,
        children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
          className: _MaimaiModule["default"].songname,
          children: song.song
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("span", {
          className: _MaimaiModule["default"].artist,
          children: song.artist
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
        className: _MaimaiModule["default"].difficulty,
        children: Object.keys(song.data).map(function (diff) {
          return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("div", {
            className: _MaimaiModule["default"][diff],
            children: song.data[diff] && song.data[diff].level
          }, "".concat(song.id, "-").concat(diff), false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)]
  }, song.id, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

exports.MaimaiSongComponent = MaimaiSongComponent;
_c = MaimaiSongComponent;

var MaimaiSongLoader = function MaimaiSongLoader() {
  /*#__PURE__*/
  (0, _jsxDevRuntime.jsxDEV)(Segment, {
    children: [/*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(Dimmer, {
      active: true,
      children: /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(Loader, {
        size: "big",
        children: "Loading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(Image, {
      src: "https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(Image, {
      src: "https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }, _this), /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(Image, {
      src: "https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 3
  }, _this);
};

exports.MaimaiSongLoader = MaimaiSongLoader;
_c2 = MaimaiSongLoader;
module.exports = {
  MaimaiSongComponent: MaimaiSongComponent
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS5kYXRhLnRzeCJdLCJuYW1lcyI6WyJNYWltYWlTb25nQ29tcG9uZW50Iiwic29uZyIsInN0eWxlcyIsImNvbnRhaW5lciIsImFsYnVtIiwiY292ZXIiLCJpbmZvIiwiaGVhZGVyIiwidmVyc2lvbiIsImdlbnJlIiwiZGV0YWlscyIsInNvbmduYW1lIiwiYXJ0aXN0IiwiZGlmZmljdWx0eSIsIk9iamVjdCIsImtleXMiLCJkYXRhIiwibWFwIiwiZGlmZiIsImxldmVsIiwiaWQiLCJNYWltYWlTb25nTG9hZGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBSUE7Ozs7O0FBT0E7QUFDTyxJQUFNQSxtQkFBb0QsR0FBRyxTQUF2REEsbUJBQXVELE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDaEYsc0JBQ0U7QUFBbUIsYUFBUyxFQUFFQyx5QkFBT0MsU0FBckM7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUQseUJBQU9FLEtBQXZCO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUVILElBQUksQ0FBQ0ksS0FBZjtBQUFzQixXQUFHLFlBQUtKLElBQUksQ0FBQ0EsSUFBVjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVDLHlCQUFPSSxJQUF2QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUoseUJBQU9LLE1BQXZCO0FBQUEsbUJBQ0dOLElBQUksQ0FBQ08sT0FBTCxLQUFpQixRQUFqQixpQkFDQztBQUFLLG1CQUFTLEVBQUVOLHlCQUFPTSxPQUF2QjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosRUFNR1AsSUFBSSxDQUFDTyxPQUFMLEtBQWlCLFVBQWpCLGlCQUNDO0FBQUssbUJBQVMsRUFBRU4seUJBQU9NLE9BQXZCO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSixlQVdFO0FBQU0sbUJBQVMsRUFBRU4seUJBQU9PLEtBQXhCO0FBQUEsb0JBQWdDUixJQUFJLENBQUNRO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFjRTtBQUFLLGlCQUFTLEVBQUVQLHlCQUFPUSxPQUF2QjtBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBRVIseUJBQU9TLFFBQXhCO0FBQUEsb0JBQW1DVixJQUFJLENBQUNBO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBTSxtQkFBUyxFQUFFQyx5QkFBT1UsTUFBeEI7QUFBQSxvQkFBaUNYLElBQUksQ0FBQ1c7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRixlQW1CRTtBQUFLLGlCQUFTLEVBQUVWLHlCQUFPVyxVQUF2QjtBQUFBLGtCQUNHQyxNQUFNLENBQUNDLElBQVAsQ0FBWWQsSUFBSSxDQUFDZSxJQUFqQixFQUF1QkMsR0FBdkIsQ0FBMkIsVUFBQ0MsSUFBRCxFQUFrQjtBQUMxQyw4QkFDRTtBQUFnQyxxQkFBUyxFQUFFaEIseUJBQU9nQixJQUFQLENBQTNDO0FBQUEsc0JBQ0dqQixJQUFJLENBQUNlLElBQUwsQ0FBVUUsSUFBVixLQUF1Q2pCLElBQUksQ0FBQ2UsSUFBTCxDQUFVRSxJQUFWLEVBQW9DQztBQUQ5RSx1QkFBYWxCLElBQUksQ0FBQ21CLEVBQWxCLGNBQXdCRixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBS0gsU0FOQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQSxLQUFVakIsSUFBSSxDQUFDbUIsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0FyQ007OztLQUFNcEIsbUI7O0FBdUNOLElBQU1xQixnQkFBMEIsR0FBRyxTQUE3QkEsZ0JBQTZCLEdBQU07QUFDOUM7QUFBQSw2QkFBQyxPQUFEO0FBQUEsNEJBQ1EsMkJBQUMsTUFBRDtBQUFRLFlBQU0sTUFBZDtBQUFBLDZCQUNFLDJCQUFDLE1BQUQ7QUFBUSxZQUFJLEVBQUMsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUixlQUlRLDJCQUFDLEtBQUQ7QUFBTyxTQUFHLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSlIsZUFLUSwyQkFBQyxLQUFEO0FBQU8sU0FBRyxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxSLGVBTVEsMkJBQUMsS0FBRDtBQUFPLFNBQUcsRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRRCxDQVRNOzs7TUFBTUEsZ0I7QUFXYkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2Z2QixxQkFBbUIsRUFBbkJBO0FBRGUsQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbWFpLjExM2YxMzU4Y2JmMTI2ZDM2NDM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTU1Tb25nUmVjb3JkLCBNTVNvbmdEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxpbmcvTWFpbWFpLm1vZHVsZS5jc3MnO1xuXG4vLyBJbnRlcmZhY2UgZm9yIHBhZ2UuXG5pbnRlcmZhY2UgTU1Tb25nUmVjb3JkSW50ZXJmYWNlIHtcbiAgc29uZzogTU1Tb25nUmVjb3JkO1xufVxuXG4vLyBQcm9maWxlIGhlYWRlci5cbmV4cG9ydCBjb25zdCBNYWltYWlTb25nQ29tcG9uZW50OiBSZWFjdC5GQzxNTVNvbmdSZWNvcmRJbnRlcmZhY2U+ID0gKHsgc29uZyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e3NvbmcuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFsYnVtfT5cbiAgICAgICAgPGltZyBzcmM9e3NvbmcuY292ZXJ9IGFsdD17YCR7c29uZy5zb25nfS1hbGJ1bS1jb3ZlcmB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICB7c29uZy52ZXJzaW9uID09PSAnREVMVVhFJyAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZlcnNpb259PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbWFpbWFpZHgtZW5nLmNvbS9tYWltYWktbW9iaWxlL2ltZy9tdXNpY19keC5wbmdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c29uZy52ZXJzaW9uID09PSAnU1RBTkRBUkQnICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmVyc2lvbn0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tYWltYWlkeC1lbmcuY29tL21haW1haS1tb2JpbGUvaW1nL211c2ljX3N0YW5kYXJkLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmdlbnJlfT57c29uZy5nZW5yZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNvbmduYW1lfT57c29uZy5zb25nfTwvc3Bhbj5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpc3R9Pntzb25nLmFydGlzdH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpZmZpY3VsdHl9PlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhzb25nLmRhdGEpLm1hcCgoZGlmZjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake3NvbmcuaWR9LSR7ZGlmZn1gfSBjbGFzc05hbWU9e3N0eWxlc1tkaWZmXX0+XG4gICAgICAgICAgICAgICAgICB7c29uZy5kYXRhW2RpZmYgYXMga2V5b2YgTU1Tb25nRGF0YV0gJiYgc29uZy5kYXRhW2RpZmYgYXMga2V5b2YgTU1Tb25nRGF0YV0ubGV2ZWx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgTWFpbWFpU29uZ0xvYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIDxTZWdtZW50PlxuICAgICAgICAgIDxEaW1tZXIgYWN0aXZlPlxuICAgICAgICAgICAgPExvYWRlciBzaXplPSdiaWcnPkxvYWRpbmc8L0xvYWRlcj5cbiAgICAgICAgICA8L0RpbW1lcj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPSdodHRwczovL3JlYWN0LnNlbWFudGljLXVpLmNvbS9pbWFnZXMvd2lyZWZyYW1lL3Nob3J0LXBhcmFncmFwaC5wbmcnIC8+XG4gICAgICAgICAgPEltYWdlIHNyYz0naHR0cHM6Ly9yZWFjdC5zZW1hbnRpYy11aS5jb20vaW1hZ2VzL3dpcmVmcmFtZS9zaG9ydC1wYXJhZ3JhcGgucG5nJyAvPlxuICAgICAgICAgIDxJbWFnZSBzcmM9J2h0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL2ltYWdlcy93aXJlZnJhbWUvc2hvcnQtcGFyYWdyYXBoLnBuZycgLz5cbiAgICAgICAgPC9TZWdtZW50PlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgTWFpbWFpU29uZ0NvbXBvbmVudCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9