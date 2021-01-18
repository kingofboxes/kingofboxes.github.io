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
  var newLevels = [];
  levels.forEach(function (level) {
    var temp = level.replace('+', '.5');
    console.log(temp);
    newLevels.push(Number(temp));
  });
  newLevels.sort(function (a, b) {
    return a - b;
  });
  console.log(newLevels); // Map out dropdown from list of genres.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS5jb25zdGFudHMudHMiXSwibmFtZXMiOlsiZ2V0R2VucmVzIiwibGlzdCIsImdlbnJlcyIsImZvckVhY2giLCJzb25nIiwiaW5jbHVkZXMiLCJnZW5yZSIsInB1c2giLCJnZW5yZUxpc3QiLCJtYXAiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJnZXRMZXZlbHMiLCJsZXZlbHMiLCJPYmplY3QiLCJrZXlzIiwiZGF0YSIsImRpZmYiLCJsZXZlbCIsIm5ld0xldmVscyIsInRlbXAiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsIk51bWJlciIsInNvcnQiLCJhIiwiYiIsImxldmVsc0xpc3QiLCJkZWZhdWx0T3B0aW9ucyIsIm5hbWUiLCJhcnRpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFvRDtBQUMzRTtBQUNBLE1BQU1DLE1BQWdCLEdBQUcsRUFBekI7QUFDQUQsTUFBSSxDQUFDRSxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUF3QjtBQUNuQyxRQUFJLENBQUNGLE1BQU0sQ0FBQ0csUUFBUCxDQUFnQkQsSUFBSSxDQUFDRSxLQUFyQixDQUFMLEVBQWtDO0FBQ2hDSixZQUFNLENBQUNLLElBQVAsQ0FBWUgsSUFBSSxDQUFDRSxLQUFqQjtBQUNEO0FBQ0YsR0FKRCxFQUgyRSxDQVMzRTs7QUFDQSxNQUFNRSxTQUFtQyxHQUFHLEVBQTVDO0FBQ0FOLFFBQU0sQ0FBQ08sR0FBUCxDQUFXLFVBQUNILEtBQUQsRUFBbUI7QUFDNUJFLGFBQVMsQ0FBQ0QsSUFBVixDQUFlO0FBQ2JHLFNBQUcsRUFBRUosS0FEUTtBQUViSyxVQUFJLEVBQUVMLEtBRk87QUFHYk0sV0FBSyxFQUFFTjtBQUhNLEtBQWY7QUFLRCxHQU5EO0FBT0EsU0FBT0UsU0FBUDtBQUNELENBbkJNLEMsQ0FxQlA7O0FBQ08sSUFBTUssU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1osSUFBRCxFQUFvRDtBQUMzRTtBQUNBLE1BQU1hLE1BQWdCLEdBQUcsRUFBekI7QUFDQWIsTUFBSSxDQUFDRSxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUF3QjtBQUNuQ1csVUFBTSxDQUFDQyxJQUFQLENBQVlaLElBQUksQ0FBQ2EsSUFBakIsRUFBdUJSLEdBQXZCLENBQTJCLFVBQUNTLElBQUQsRUFBVTtBQUNuQyxVQUFJLENBQUNKLE1BQU0sQ0FBQ1QsUUFBUCxDQUFnQkQsSUFBSSxDQUFDYSxJQUFMLENBQVVDLElBQVYsRUFBZ0JDLEtBQWhDLENBQUwsRUFBNkM7QUFDM0NMLGNBQU0sQ0FBQ1AsSUFBUCxDQUFZSCxJQUFJLENBQUNhLElBQUwsQ0FBVUMsSUFBVixFQUFnQkMsS0FBNUI7QUFDRDtBQUNGLEtBSkQ7QUFLRCxHQU5EO0FBUUEsTUFBTUMsU0FBUyxHQUFHLEVBQWxCO0FBQ0FOLFFBQU0sQ0FBQ1gsT0FBUCxDQUFlLFVBQUNnQixLQUFELEVBQVc7QUFDeEIsUUFBTUUsSUFBSSxHQUFHRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxHQUFkLEVBQW1CLElBQW5CLENBQWI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQUQsYUFBUyxDQUFDYixJQUFWLENBQWVrQixNQUFNLENBQUNKLElBQUQsQ0FBckI7QUFDRCxHQUpEO0FBS0FELFdBQVMsQ0FBQ00sSUFBVixDQUFlLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVELENBQUMsR0FBR0MsQ0FBZDtBQUFBLEdBQWY7QUFFQUwsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFNBQVosRUFuQjJFLENBcUIzRTs7QUFDQSxNQUFNUyxVQUFvQyxHQUFHLEVBQTdDO0FBQ0FmLFFBQU0sQ0FBQ0wsR0FBUCxDQUFXLFVBQUNILEtBQUQsRUFBbUI7QUFDNUJ1QixjQUFVLENBQUN0QixJQUFYLENBQWdCO0FBQ2RHLFNBQUcsRUFBRUosS0FEUztBQUVkSyxVQUFJLEVBQUVMLEtBRlE7QUFHZE0sV0FBSyxFQUFFTjtBQUhPLEtBQWhCO0FBS0QsR0FORDtBQU9BLFNBQU91QixVQUFQO0FBQ0QsQ0EvQk0sQyxDQWlDUDs7QUFDTyxJQUFNQyxjQUFzQyxHQUFHO0FBQ3BEQyxNQUFJLEVBQUUsRUFEOEM7QUFFcERDLFFBQU0sRUFBRSxFQUY0QztBQUdwRGIsT0FBSyxFQUFFLEVBSDZDO0FBSXBEYixPQUFLLEVBQUU7QUFKNkMsQ0FBL0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbWFpLjRiZTYxZmMzM2Y2YmJhYmIwMzZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNTVNvbmdSZWNvcmQgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbi8vIEdlbnJlIGxpc3QgZm9yIG1haW1haS5cbmV4cG9ydCBjb25zdCBnZXRHZW5yZXMgPSAobGlzdDogTU1Tb25nUmVjb3JkW10pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10gPT4ge1xuICAvLyBHZXQgYSBsaXN0IG9mIGdlbnJlcy5cbiAgY29uc3QgZ2VucmVzOiBzdHJpbmdbXSA9IFtdO1xuICBsaXN0LmZvckVhY2goKHNvbmc6IE1NU29uZ1JlY29yZCkgPT4ge1xuICAgIGlmICghZ2VucmVzLmluY2x1ZGVzKHNvbmcuZ2VucmUpKSB7XG4gICAgICBnZW5yZXMucHVzaChzb25nLmdlbnJlKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIE1hcCBvdXQgZHJvcGRvd24gZnJvbSBsaXN0IG9mIGdlbnJlcy5cbiAgY29uc3QgZ2VucmVMaXN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10gPSBbXTtcbiAgZ2VucmVzLm1hcCgoZ2VucmU6IHN0cmluZykgPT4ge1xuICAgIGdlbnJlTGlzdC5wdXNoKHtcbiAgICAgIGtleTogZ2VucmUsXG4gICAgICB0ZXh0OiBnZW5yZSxcbiAgICAgIHZhbHVlOiBnZW5yZSxcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBnZW5yZUxpc3Q7XG59O1xuXG4vLyBMZXZlbCBsaXN0IGZvciBtYWltYWkuXG5leHBvcnQgY29uc3QgZ2V0TGV2ZWxzID0gKGxpc3Q6IE1NU29uZ1JlY29yZFtdKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0+IHtcbiAgLy8gR2V0IGEgbGlzdCBvZiBnZW5yZXMuXG4gIGNvbnN0IGxldmVsczogc3RyaW5nW10gPSBbXTtcbiAgbGlzdC5mb3JFYWNoKChzb25nOiBNTVNvbmdSZWNvcmQpID0+IHtcbiAgICBPYmplY3Qua2V5cyhzb25nLmRhdGEpLm1hcCgoZGlmZikgPT4ge1xuICAgICAgaWYgKCFsZXZlbHMuaW5jbHVkZXMoc29uZy5kYXRhW2RpZmZdLmxldmVsKSkge1xuICAgICAgICBsZXZlbHMucHVzaChzb25nLmRhdGFbZGlmZl0ubGV2ZWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBuZXdMZXZlbHMgPSBbXTtcbiAgbGV2ZWxzLmZvckVhY2goKGxldmVsKSA9PiB7XG4gICAgY29uc3QgdGVtcCA9IGxldmVsLnJlcGxhY2UoJysnLCAnLjUnKTtcbiAgICBjb25zb2xlLmxvZyh0ZW1wKTtcbiAgICBuZXdMZXZlbHMucHVzaChOdW1iZXIodGVtcCkpO1xuICB9KTtcbiAgbmV3TGV2ZWxzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcblxuICBjb25zb2xlLmxvZyhuZXdMZXZlbHMpO1xuXG4gIC8vIE1hcCBvdXQgZHJvcGRvd24gZnJvbSBsaXN0IG9mIGdlbnJlcy5cbiAgY29uc3QgbGV2ZWxzTGlzdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0gW107XG4gIGxldmVscy5tYXAoKGdlbnJlOiBzdHJpbmcpID0+IHtcbiAgICBsZXZlbHNMaXN0LnB1c2goe1xuICAgICAga2V5OiBnZW5yZSxcbiAgICAgIHRleHQ6IGdlbnJlLFxuICAgICAgdmFsdWU6IGdlbnJlLFxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGxldmVsc0xpc3Q7XG59O1xuXG4vLyBEZWZhdWx0IG9wdGlvbnMuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIG5hbWU6ICcnLFxuICBhcnRpc3Q6ICcnLFxuICBsZXZlbDogJycsXG4gIGdlbnJlOiAnJyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9