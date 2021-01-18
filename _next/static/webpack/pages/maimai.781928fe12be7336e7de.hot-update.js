webpackHotUpdate_N_E("pages/maimai",{

/***/ "./components/public/Maimai/Maimai.constants.ts":
/*!******************************************************!*\
  !*** ./components/public/Maimai/Maimai.constants.ts ***!
  \******************************************************/
/*! exports provided: getGenres, getLevels, defaultOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGenres", function() { return getGenres; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLevels", function() { return getLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
// Genre list for maimai.
var getGenres = function getGenres(list) {
  // Get a list of genres.
  var genres = [];
  list.forEach(function (song) {
    if (!genres.includes(song.genre)) {
      genres.push(song.genre);
    }
  }); // Map out dropdown from list of genres.

  var genreList = [];
  genres.map(function (genre) {
    genreList.push({
      key: genre,
      text: genre,
      value: genre
    });
  });
  return genreList;
}; // Level list for maimai.

var getLevels = function getLevels(list) {
  // Get a list of genres.
  var levels = [];
  list.forEach(function (song) {
    Object.keys(song.data).map(function (diff) {
      if (!levels.includes(song.data[diff].level)) {
        levels.push(song.data[diff].level);
      }
    });
  });
  levels.sort(); // Map out dropdown from list of genres.

  var levelsList = [];
  levels.map(function (genre) {
    levelsList.push({
      key: genre,
      text: genre,
      value: genre
    });
  });
  return levelsList;
}; // Default options.

var defaultOptions = {
  name: '',
  artist: '',
  level: '',
  genre: ''
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS5jb25zdGFudHMudHMiXSwibmFtZXMiOlsiZ2V0R2VucmVzIiwibGlzdCIsImdlbnJlcyIsImZvckVhY2giLCJzb25nIiwiaW5jbHVkZXMiLCJnZW5yZSIsInB1c2giLCJnZW5yZUxpc3QiLCJtYXAiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJnZXRMZXZlbHMiLCJsZXZlbHMiLCJPYmplY3QiLCJrZXlzIiwiZGF0YSIsImRpZmYiLCJsZXZlbCIsInNvcnQiLCJsZXZlbHNMaXN0IiwiZGVmYXVsdE9wdGlvbnMiLCJuYW1lIiwiYXJ0aXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBb0Q7QUFDM0U7QUFDQSxNQUFNQyxNQUFnQixHQUFHLEVBQXpCO0FBQ0FELE1BQUksQ0FBQ0UsT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBd0I7QUFDbkMsUUFBSSxDQUFDRixNQUFNLENBQUNHLFFBQVAsQ0FBZ0JELElBQUksQ0FBQ0UsS0FBckIsQ0FBTCxFQUFrQztBQUNoQ0osWUFBTSxDQUFDSyxJQUFQLENBQVlILElBQUksQ0FBQ0UsS0FBakI7QUFDRDtBQUNGLEdBSkQsRUFIMkUsQ0FTM0U7O0FBQ0EsTUFBTUUsU0FBbUMsR0FBRyxFQUE1QztBQUNBTixRQUFNLENBQUNPLEdBQVAsQ0FBVyxVQUFDSCxLQUFELEVBQW1CO0FBQzVCRSxhQUFTLENBQUNELElBQVYsQ0FBZTtBQUNiRyxTQUFHLEVBQUVKLEtBRFE7QUFFYkssVUFBSSxFQUFFTCxLQUZPO0FBR2JNLFdBQUssRUFBRU47QUFITSxLQUFmO0FBS0QsR0FORDtBQU9BLFNBQU9FLFNBQVA7QUFDRCxDQW5CTSxDLENBcUJQOztBQUNPLElBQU1LLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNaLElBQUQsRUFBb0Q7QUFDM0U7QUFDQSxNQUFNYSxNQUFnQixHQUFHLEVBQXpCO0FBQ0FiLE1BQUksQ0FBQ0UsT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBd0I7QUFDbkNXLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZWixJQUFJLENBQUNhLElBQWpCLEVBQXVCUixHQUF2QixDQUEyQixVQUFDUyxJQUFELEVBQVU7QUFDbkMsVUFBSSxDQUFDSixNQUFNLENBQUNULFFBQVAsQ0FBZ0JELElBQUksQ0FBQ2EsSUFBTCxDQUFVQyxJQUFWLEVBQWdCQyxLQUFoQyxDQUFMLEVBQTZDO0FBQzNDTCxjQUFNLENBQUNQLElBQVAsQ0FBWUgsSUFBSSxDQUFDYSxJQUFMLENBQVVDLElBQVYsRUFBZ0JDLEtBQTVCO0FBQ0Q7QUFDRixLQUpEO0FBS0QsR0FORDtBQVFBTCxRQUFNLENBQUNNLElBQVAsR0FYMkUsQ0FhM0U7O0FBQ0EsTUFBTUMsVUFBb0MsR0FBRyxFQUE3QztBQUNBUCxRQUFNLENBQUNMLEdBQVAsQ0FBVyxVQUFDSCxLQUFELEVBQW1CO0FBQzVCZSxjQUFVLENBQUNkLElBQVgsQ0FBZ0I7QUFDZEcsU0FBRyxFQUFFSixLQURTO0FBRWRLLFVBQUksRUFBRUwsS0FGUTtBQUdkTSxXQUFLLEVBQUVOO0FBSE8sS0FBaEI7QUFLRCxHQU5EO0FBT0EsU0FBT2UsVUFBUDtBQUNELENBdkJNLEMsQ0F5QlA7O0FBQ08sSUFBTUMsY0FBc0MsR0FBRztBQUNwREMsTUFBSSxFQUFFLEVBRDhDO0FBRXBEQyxRQUFNLEVBQUUsRUFGNEM7QUFHcERMLE9BQUssRUFBRSxFQUg2QztBQUlwRGIsT0FBSyxFQUFFO0FBSjZDLENBQS9DIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW1haS43ODE5MjhmZTEyYmU3MzM2ZTdkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTU1Tb25nUmVjb3JkIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuXG4vLyBHZW5yZSBsaXN0IGZvciBtYWltYWkuXG5leHBvcnQgY29uc3QgZ2V0R2VucmVzID0gKGxpc3Q6IE1NU29uZ1JlY29yZFtdKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0+IHtcbiAgLy8gR2V0IGEgbGlzdCBvZiBnZW5yZXMuXG4gIGNvbnN0IGdlbnJlczogc3RyaW5nW10gPSBbXTtcbiAgbGlzdC5mb3JFYWNoKChzb25nOiBNTVNvbmdSZWNvcmQpID0+IHtcbiAgICBpZiAoIWdlbnJlcy5pbmNsdWRlcyhzb25nLmdlbnJlKSkge1xuICAgICAgZ2VucmVzLnB1c2goc29uZy5nZW5yZSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBNYXAgb3V0IGRyb3Bkb3duIGZyb20gbGlzdCBvZiBnZW5yZXMuXG4gIGNvbnN0IGdlbnJlTGlzdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0gW107XG4gIGdlbnJlcy5tYXAoKGdlbnJlOiBzdHJpbmcpID0+IHtcbiAgICBnZW5yZUxpc3QucHVzaCh7XG4gICAgICBrZXk6IGdlbnJlLFxuICAgICAgdGV4dDogZ2VucmUsXG4gICAgICB2YWx1ZTogZ2VucmUsXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZ2VucmVMaXN0O1xufTtcblxuLy8gTGV2ZWwgbGlzdCBmb3IgbWFpbWFpLlxuZXhwb3J0IGNvbnN0IGdldExldmVscyA9IChsaXN0OiBNTVNvbmdSZWNvcmRbXSk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9PiB7XG4gIC8vIEdldCBhIGxpc3Qgb2YgZ2VucmVzLlxuICBjb25zdCBsZXZlbHM6IHN0cmluZ1tdID0gW107XG4gIGxpc3QuZm9yRWFjaCgoc29uZzogTU1Tb25nUmVjb3JkKSA9PiB7XG4gICAgT2JqZWN0LmtleXMoc29uZy5kYXRhKS5tYXAoKGRpZmYpID0+IHtcbiAgICAgIGlmICghbGV2ZWxzLmluY2x1ZGVzKHNvbmcuZGF0YVtkaWZmXS5sZXZlbCkpIHtcbiAgICAgICAgbGV2ZWxzLnB1c2goc29uZy5kYXRhW2RpZmZdLmxldmVsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgbGV2ZWxzLnNvcnQoKTtcblxuICAvLyBNYXAgb3V0IGRyb3Bkb3duIGZyb20gbGlzdCBvZiBnZW5yZXMuXG4gIGNvbnN0IGxldmVsc0xpc3Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9IFtdO1xuICBsZXZlbHMubWFwKChnZW5yZTogc3RyaW5nKSA9PiB7XG4gICAgbGV2ZWxzTGlzdC5wdXNoKHtcbiAgICAgIGtleTogZ2VucmUsXG4gICAgICB0ZXh0OiBnZW5yZSxcbiAgICAgIHZhbHVlOiBnZW5yZSxcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBsZXZlbHNMaXN0O1xufTtcblxuLy8gRGVmYXVsdCBvcHRpb25zLlxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBuYW1lOiAnJyxcbiAgYXJ0aXN0OiAnJyxcbiAgbGV2ZWw6ICcnLFxuICBnZW5yZTogJycsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==