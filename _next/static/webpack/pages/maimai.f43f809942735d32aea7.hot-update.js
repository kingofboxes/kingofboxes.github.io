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
  var floatLevels = [];
  list.forEach(function (song) {
    Object.keys(song.data).map(function (diff) {
      if (!levels.includes(song.data[diff].level)) {
        var temp = song.data[diff].level.replace('+', '.5');
        floatLevels.push(Number(temp));
        levels.push(song.data[diff].level);
      }
    });
  });
  floatLevels.sort(function (a, b) {
    return a - b;
  });
  var strLevels = [];
  floatLevels.forEach(function (level) {
    var temp = String(level).replace('.5', '+');
    strLevels.push(temp);
  }); // Map out dropdown from list of genres.

  var levelsList = [];
  strLevels.map(function (genre) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS5jb25zdGFudHMudHMiXSwibmFtZXMiOlsiZ2V0R2VucmVzIiwibGlzdCIsImdlbnJlcyIsImZvckVhY2giLCJzb25nIiwiaW5jbHVkZXMiLCJnZW5yZSIsInB1c2giLCJnZW5yZUxpc3QiLCJtYXAiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJnZXRMZXZlbHMiLCJsZXZlbHMiLCJmbG9hdExldmVscyIsIk9iamVjdCIsImtleXMiLCJkYXRhIiwiZGlmZiIsImxldmVsIiwidGVtcCIsInJlcGxhY2UiLCJOdW1iZXIiLCJzb3J0IiwiYSIsImIiLCJzdHJMZXZlbHMiLCJTdHJpbmciLCJsZXZlbHNMaXN0IiwiZGVmYXVsdE9wdGlvbnMiLCJuYW1lIiwiYXJ0aXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBb0Q7QUFDM0U7QUFDQSxNQUFNQyxNQUFnQixHQUFHLEVBQXpCO0FBQ0FELE1BQUksQ0FBQ0UsT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBd0I7QUFDbkMsUUFBSSxDQUFDRixNQUFNLENBQUNHLFFBQVAsQ0FBZ0JELElBQUksQ0FBQ0UsS0FBckIsQ0FBTCxFQUFrQztBQUNoQ0osWUFBTSxDQUFDSyxJQUFQLENBQVlILElBQUksQ0FBQ0UsS0FBakI7QUFDRDtBQUNGLEdBSkQsRUFIMkUsQ0FTM0U7O0FBQ0EsTUFBTUUsU0FBbUMsR0FBRyxFQUE1QztBQUNBTixRQUFNLENBQUNPLEdBQVAsQ0FBVyxVQUFDSCxLQUFELEVBQW1CO0FBQzVCRSxhQUFTLENBQUNELElBQVYsQ0FBZTtBQUNiRyxTQUFHLEVBQUVKLEtBRFE7QUFFYkssVUFBSSxFQUFFTCxLQUZPO0FBR2JNLFdBQUssRUFBRU47QUFITSxLQUFmO0FBS0QsR0FORDtBQU9BLFNBQU9FLFNBQVA7QUFDRCxDQW5CTSxDLENBcUJQOztBQUNPLElBQU1LLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNaLElBQUQsRUFBb0Q7QUFDM0U7QUFDQSxNQUFNYSxNQUFnQixHQUFHLEVBQXpCO0FBQ0EsTUFBTUMsV0FBcUIsR0FBRyxFQUE5QjtBQUVBZCxNQUFJLENBQUNFLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQXdCO0FBQ25DWSxVQUFNLENBQUNDLElBQVAsQ0FBWWIsSUFBSSxDQUFDYyxJQUFqQixFQUF1QlQsR0FBdkIsQ0FBMkIsVUFBQ1UsSUFBRCxFQUFVO0FBQ25DLFVBQUksQ0FBQ0wsTUFBTSxDQUFDVCxRQUFQLENBQWdCRCxJQUFJLENBQUNjLElBQUwsQ0FBVUMsSUFBVixFQUFnQkMsS0FBaEMsQ0FBTCxFQUE2QztBQUMzQyxZQUFNQyxJQUFJLEdBQUdqQixJQUFJLENBQUNjLElBQUwsQ0FBVUMsSUFBVixFQUFnQkMsS0FBaEIsQ0FBc0JFLE9BQXRCLENBQThCLEdBQTlCLEVBQW1DLElBQW5DLENBQWI7QUFDQVAsbUJBQVcsQ0FBQ1IsSUFBWixDQUFpQmdCLE1BQU0sQ0FBQ0YsSUFBRCxDQUF2QjtBQUNBUCxjQUFNLENBQUNQLElBQVAsQ0FBWUgsSUFBSSxDQUFDYyxJQUFMLENBQVVDLElBQVYsRUFBZ0JDLEtBQTVCO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0FSRDtBQVVBTCxhQUFXLENBQUNTLElBQVosQ0FBaUIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVUQsQ0FBQyxHQUFHQyxDQUFkO0FBQUEsR0FBakI7QUFFQSxNQUFNQyxTQUFTLEdBQUcsRUFBbEI7QUFDQVosYUFBVyxDQUFDWixPQUFaLENBQW9CLFVBQUNpQixLQUFELEVBQVc7QUFDN0IsUUFBTUMsSUFBSSxHQUFHTyxNQUFNLENBQUNSLEtBQUQsQ0FBTixDQUFjRSxPQUFkLENBQXNCLElBQXRCLEVBQTRCLEdBQTVCLENBQWI7QUFDQUssYUFBUyxDQUFDcEIsSUFBVixDQUFlYyxJQUFmO0FBQ0QsR0FIRCxFQWxCMkUsQ0F1QjNFOztBQUNBLE1BQU1RLFVBQW9DLEdBQUcsRUFBN0M7QUFDQUYsV0FBUyxDQUFDbEIsR0FBVixDQUFjLFVBQUNILEtBQUQsRUFBbUI7QUFDL0J1QixjQUFVLENBQUN0QixJQUFYLENBQWdCO0FBQ2RHLFNBQUcsRUFBRUosS0FEUztBQUVkSyxVQUFJLEVBQUVMLEtBRlE7QUFHZE0sV0FBSyxFQUFFTjtBQUhPLEtBQWhCO0FBS0QsR0FORDtBQU9BLFNBQU91QixVQUFQO0FBQ0QsQ0FqQ00sQyxDQW1DUDs7QUFDTyxJQUFNQyxjQUFzQyxHQUFHO0FBQ3BEQyxNQUFJLEVBQUUsRUFEOEM7QUFFcERDLFFBQU0sRUFBRSxFQUY0QztBQUdwRFosT0FBSyxFQUFFLEVBSDZDO0FBSXBEZCxPQUFLLEVBQUU7QUFKNkMsQ0FBL0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbWFpLmY0M2Y4MDk5NDI3MzVkMzJhZWE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNTVNvbmdSZWNvcmQgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbi8vIEdlbnJlIGxpc3QgZm9yIG1haW1haS5cbmV4cG9ydCBjb25zdCBnZXRHZW5yZXMgPSAobGlzdDogTU1Tb25nUmVjb3JkW10pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10gPT4ge1xuICAvLyBHZXQgYSBsaXN0IG9mIGdlbnJlcy5cbiAgY29uc3QgZ2VucmVzOiBzdHJpbmdbXSA9IFtdO1xuICBsaXN0LmZvckVhY2goKHNvbmc6IE1NU29uZ1JlY29yZCkgPT4ge1xuICAgIGlmICghZ2VucmVzLmluY2x1ZGVzKHNvbmcuZ2VucmUpKSB7XG4gICAgICBnZW5yZXMucHVzaChzb25nLmdlbnJlKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1hcCBvdXQgZHJvcGRvd24gZnJvbSBsaXN0IG9mIGdlbnJlcy5cbiAgY29uc3QgZ2VucmVMaXN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10gPSBbXTtcbiAgZ2VucmVzLm1hcCgoZ2VucmU6IHN0cmluZykgPT4ge1xuICAgIGdlbnJlTGlzdC5wdXNoKHtcbiAgICAgIGtleTogZ2VucmUsXG4gICAgICB0ZXh0OiBnZW5yZSxcbiAgICAgIHZhbHVlOiBnZW5yZSxcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBnZW5yZUxpc3Q7XG59O1xuXG4vLyBMZXZlbCBsaXN0IGZvciBtYWltYWkuXG5leHBvcnQgY29uc3QgZ2V0TGV2ZWxzID0gKGxpc3Q6IE1NU29uZ1JlY29yZFtdKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0+IHtcbiAgLy8gR2V0IGEgbGlzdCBvZiBnZW5yZXMuXG4gIGNvbnN0IGxldmVsczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgZmxvYXRMZXZlbHM6IG51bWJlcltdID0gW107XG5cbiAgbGlzdC5mb3JFYWNoKChzb25nOiBNTVNvbmdSZWNvcmQpID0+IHtcbiAgICBPYmplY3Qua2V5cyhzb25nLmRhdGEpLm1hcCgoZGlmZikgPT4ge1xuICAgICAgaWYgKCFsZXZlbHMuaW5jbHVkZXMoc29uZy5kYXRhW2RpZmZdLmxldmVsKSkge1xuICAgICAgICBjb25zdCB0ZW1wID0gc29uZy5kYXRhW2RpZmZdLmxldmVsLnJlcGxhY2UoJysnLCAnLjUnKTtcbiAgICAgICAgZmxvYXRMZXZlbHMucHVzaChOdW1iZXIodGVtcCkpO1xuICAgICAgICBsZXZlbHMucHVzaChzb25nLmRhdGFbZGlmZl0ubGV2ZWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBmbG9hdExldmVscy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG5cbiAgY29uc3Qgc3RyTGV2ZWxzID0gW107XG4gIGZsb2F0TGV2ZWxzLmZvckVhY2goKGxldmVsKSA9PiB7XG4gICAgY29uc3QgdGVtcCA9IFN0cmluZyhsZXZlbCkucmVwbGFjZSgnLjUnLCAnKycpO1xuICAgIHN0ckxldmVscy5wdXNoKHRlbXApO1xuICB9KTtcblxuICAvLyBNYXAgb3V0IGRyb3Bkb3duIGZyb20gbGlzdCBvZiBnZW5yZXMuXG4gIGNvbnN0IGxldmVsc0xpc3Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9IFtdO1xuICBzdHJMZXZlbHMubWFwKChnZW5yZTogc3RyaW5nKSA9PiB7XG4gICAgbGV2ZWxzTGlzdC5wdXNoKHtcbiAgICAgIGtleTogZ2VucmUsXG4gICAgICB0ZXh0OiBnZW5yZSxcbiAgICAgIHZhbHVlOiBnZW5yZSxcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBsZXZlbHNMaXN0O1xufTtcblxuLy8gRGVmYXVsdCBvcHRpb25zLlxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBuYW1lOiAnJyxcbiAgYXJ0aXN0OiAnJyxcbiAgbGV2ZWw6ICcnLFxuICBnZW5yZTogJycsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==