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
  var levels = [];
  var strLevels = [];
  var floatLevels = [];
  var levelsList = []; // Get a list of unique levels and turn any 'X+' into 'X.5's.

  list.forEach(function (song) {
    Object.keys(song.data).map(function (diff) {
      if (!levels.includes(song.data[diff].level)) {
        var temp = song.data[diff].level.replace('+', '.5');
        floatLevels.push(Number(temp));
        levels.push(song.data[diff].level);
      }
    });
  }); // Sort the new array of floats, then turn all of them back into standard levels.

  floatLevels.sort(function (a, b) {
    return a - b;
  });
  floatLevels.forEach(function (level) {
    var temp = String(level).replace('.5', '+');
    strLevels.push(temp);
  }); // Map out dropdown from list of levels.

  strLevels.map(function (level) {
    levelsList.push({
      key: level,
      text: level,
      value: level
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS5jb25zdGFudHMudHMiXSwibmFtZXMiOlsiZ2V0R2VucmVzIiwibGlzdCIsImdlbnJlcyIsImZvckVhY2giLCJzb25nIiwiaW5jbHVkZXMiLCJnZW5yZSIsInB1c2giLCJnZW5yZUxpc3QiLCJtYXAiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJnZXRMZXZlbHMiLCJsZXZlbHMiLCJzdHJMZXZlbHMiLCJmbG9hdExldmVscyIsImxldmVsc0xpc3QiLCJPYmplY3QiLCJrZXlzIiwiZGF0YSIsImRpZmYiLCJsZXZlbCIsInRlbXAiLCJyZXBsYWNlIiwiTnVtYmVyIiwic29ydCIsImEiLCJiIiwiU3RyaW5nIiwiZGVmYXVsdE9wdGlvbnMiLCJuYW1lIiwiYXJ0aXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBb0Q7QUFDM0U7QUFDQSxNQUFNQyxNQUFnQixHQUFHLEVBQXpCO0FBQ0FELE1BQUksQ0FBQ0UsT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBd0I7QUFDbkMsUUFBSSxDQUFDRixNQUFNLENBQUNHLFFBQVAsQ0FBZ0JELElBQUksQ0FBQ0UsS0FBckIsQ0FBTCxFQUFrQztBQUNoQ0osWUFBTSxDQUFDSyxJQUFQLENBQVlILElBQUksQ0FBQ0UsS0FBakI7QUFDRDtBQUNGLEdBSkQsRUFIMkUsQ0FTM0U7O0FBQ0EsTUFBTUUsU0FBbUMsR0FBRyxFQUE1QztBQUNBTixRQUFNLENBQUNPLEdBQVAsQ0FBVyxVQUFDSCxLQUFELEVBQW1CO0FBQzVCRSxhQUFTLENBQUNELElBQVYsQ0FBZTtBQUNiRyxTQUFHLEVBQUVKLEtBRFE7QUFFYkssVUFBSSxFQUFFTCxLQUZPO0FBR2JNLFdBQUssRUFBRU47QUFITSxLQUFmO0FBS0QsR0FORDtBQU9BLFNBQU9FLFNBQVA7QUFDRCxDQW5CTSxDLENBcUJQOztBQUNPLElBQU1LLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNaLElBQUQsRUFBb0Q7QUFDM0UsTUFBTWEsTUFBZ0IsR0FBRyxFQUF6QjtBQUNBLE1BQU1DLFNBQW1CLEdBQUcsRUFBNUI7QUFDQSxNQUFNQyxXQUFxQixHQUFHLEVBQTlCO0FBQ0EsTUFBTUMsVUFBb0MsR0FBRyxFQUE3QyxDQUoyRSxDQU0zRTs7QUFDQWhCLE1BQUksQ0FBQ0UsT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBd0I7QUFDbkNjLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZZixJQUFJLENBQUNnQixJQUFqQixFQUF1QlgsR0FBdkIsQ0FBMkIsVUFBQ1ksSUFBRCxFQUFVO0FBQ25DLFVBQUksQ0FBQ1AsTUFBTSxDQUFDVCxRQUFQLENBQWdCRCxJQUFJLENBQUNnQixJQUFMLENBQVVDLElBQVYsRUFBZ0JDLEtBQWhDLENBQUwsRUFBNkM7QUFDM0MsWUFBTUMsSUFBSSxHQUFHbkIsSUFBSSxDQUFDZ0IsSUFBTCxDQUFVQyxJQUFWLEVBQWdCQyxLQUFoQixDQUFzQkUsT0FBdEIsQ0FBOEIsR0FBOUIsRUFBbUMsSUFBbkMsQ0FBYjtBQUNBUixtQkFBVyxDQUFDVCxJQUFaLENBQWlCa0IsTUFBTSxDQUFDRixJQUFELENBQXZCO0FBQ0FULGNBQU0sQ0FBQ1AsSUFBUCxDQUFZSCxJQUFJLENBQUNnQixJQUFMLENBQVVDLElBQVYsRUFBZ0JDLEtBQTVCO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0FSRCxFQVAyRSxDQWlCM0U7O0FBQ0FOLGFBQVcsQ0FBQ1UsSUFBWixDQUFpQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVRCxDQUFDLEdBQUdDLENBQWQ7QUFBQSxHQUFqQjtBQUNBWixhQUFXLENBQUNiLE9BQVosQ0FBb0IsVUFBQ21CLEtBQUQsRUFBVztBQUM3QixRQUFNQyxJQUFJLEdBQUdNLE1BQU0sQ0FBQ1AsS0FBRCxDQUFOLENBQWNFLE9BQWQsQ0FBc0IsSUFBdEIsRUFBNEIsR0FBNUIsQ0FBYjtBQUNBVCxhQUFTLENBQUNSLElBQVYsQ0FBZWdCLElBQWY7QUFDRCxHQUhELEVBbkIyRSxDQXdCM0U7O0FBQ0FSLFdBQVMsQ0FBQ04sR0FBVixDQUFjLFVBQUNhLEtBQUQsRUFBbUI7QUFDL0JMLGNBQVUsQ0FBQ1YsSUFBWCxDQUFnQjtBQUNkRyxTQUFHLEVBQUVZLEtBRFM7QUFFZFgsVUFBSSxFQUFFVyxLQUZRO0FBR2RWLFdBQUssRUFBRVU7QUFITyxLQUFoQjtBQUtELEdBTkQ7QUFPQSxTQUFPTCxVQUFQO0FBQ0QsQ0FqQ00sQyxDQW1DUDs7QUFDTyxJQUFNYSxjQUFzQyxHQUFHO0FBQ3BEQyxNQUFJLEVBQUUsRUFEOEM7QUFFcERDLFFBQU0sRUFBRSxFQUY0QztBQUdwRFYsT0FBSyxFQUFFLEVBSDZDO0FBSXBEaEIsT0FBSyxFQUFFO0FBSjZDLENBQS9DIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW1haS5hMGI1ZWY0MWY1YzEyMTRkMzk3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTU1Tb25nUmVjb3JkIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuXG4vLyBHZW5yZSBsaXN0IGZvciBtYWltYWkuXG5leHBvcnQgY29uc3QgZ2V0R2VucmVzID0gKGxpc3Q6IE1NU29uZ1JlY29yZFtdKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0+IHtcbiAgLy8gR2V0IGEgbGlzdCBvZiBnZW5yZXMuXG4gIGNvbnN0IGdlbnJlczogc3RyaW5nW10gPSBbXTtcbiAgbGlzdC5mb3JFYWNoKChzb25nOiBNTVNvbmdSZWNvcmQpID0+IHtcbiAgICBpZiAoIWdlbnJlcy5pbmNsdWRlcyhzb25nLmdlbnJlKSkge1xuICAgICAgZ2VucmVzLnB1c2goc29uZy5nZW5yZSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBNYXAgb3V0IGRyb3Bkb3duIGZyb20gbGlzdCBvZiBnZW5yZXMuXG4gIGNvbnN0IGdlbnJlTGlzdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0gW107XG4gIGdlbnJlcy5tYXAoKGdlbnJlOiBzdHJpbmcpID0+IHtcbiAgICBnZW5yZUxpc3QucHVzaCh7XG4gICAgICBrZXk6IGdlbnJlLFxuICAgICAgdGV4dDogZ2VucmUsXG4gICAgICB2YWx1ZTogZ2VucmUsXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZ2VucmVMaXN0O1xufTtcblxuLy8gTGV2ZWwgbGlzdCBmb3IgbWFpbWFpLlxuZXhwb3J0IGNvbnN0IGdldExldmVscyA9IChsaXN0OiBNTVNvbmdSZWNvcmRbXSk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9PiB7XG4gIGNvbnN0IGxldmVsczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3Qgc3RyTGV2ZWxzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBmbG9hdExldmVsczogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgbGV2ZWxzTGlzdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0gW107XG5cbiAgLy8gR2V0IGEgbGlzdCBvZiB1bmlxdWUgbGV2ZWxzIGFuZCB0dXJuIGFueSAnWCsnIGludG8gJ1guNSdzLlxuICBsaXN0LmZvckVhY2goKHNvbmc6IE1NU29uZ1JlY29yZCkgPT4ge1xuICAgIE9iamVjdC5rZXlzKHNvbmcuZGF0YSkubWFwKChkaWZmKSA9PiB7XG4gICAgICBpZiAoIWxldmVscy5pbmNsdWRlcyhzb25nLmRhdGFbZGlmZl0ubGV2ZWwpKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBzb25nLmRhdGFbZGlmZl0ubGV2ZWwucmVwbGFjZSgnKycsICcuNScpO1xuICAgICAgICBmbG9hdExldmVscy5wdXNoKE51bWJlcih0ZW1wKSk7XG4gICAgICAgIGxldmVscy5wdXNoKHNvbmcuZGF0YVtkaWZmXS5sZXZlbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIFNvcnQgdGhlIG5ldyBhcnJheSBvZiBmbG9hdHMsIHRoZW4gdHVybiBhbGwgb2YgdGhlbSBiYWNrIGludG8gc3RhbmRhcmQgbGV2ZWxzLlxuICBmbG9hdExldmVscy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gIGZsb2F0TGV2ZWxzLmZvckVhY2goKGxldmVsKSA9PiB7XG4gICAgY29uc3QgdGVtcCA9IFN0cmluZyhsZXZlbCkucmVwbGFjZSgnLjUnLCAnKycpO1xuICAgIHN0ckxldmVscy5wdXNoKHRlbXApO1xuICB9KTtcblxuICAvLyBNYXAgb3V0IGRyb3Bkb3duIGZyb20gbGlzdCBvZiBsZXZlbHMuXG4gIHN0ckxldmVscy5tYXAoKGxldmVsOiBzdHJpbmcpID0+IHtcbiAgICBsZXZlbHNMaXN0LnB1c2goe1xuICAgICAga2V5OiBsZXZlbCxcbiAgICAgIHRleHQ6IGxldmVsLFxuICAgICAgdmFsdWU6IGxldmVsLFxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGxldmVsc0xpc3Q7XG59O1xuXG4vLyBEZWZhdWx0IG9wdGlvbnMuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIG5hbWU6ICcnLFxuICBhcnRpc3Q6ICcnLFxuICBsZXZlbDogJycsXG4gIGdlbnJlOiAnJyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9