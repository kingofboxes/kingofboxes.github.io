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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS5jb25zdGFudHMudHMiXSwibmFtZXMiOlsiZ2V0R2VucmVzIiwibGlzdCIsImdlbnJlcyIsImZvckVhY2giLCJzb25nIiwiaW5jbHVkZXMiLCJnZW5yZSIsInB1c2giLCJnZW5yZUxpc3QiLCJtYXAiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJnZXRMZXZlbHMiLCJsZXZlbHMiLCJPYmplY3QiLCJrZXlzIiwiZGF0YSIsImRpZmYiLCJsZXZlbCIsIm5ld0xldmVscyIsInRlbXAiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsIk51bWJlciIsImxldmVsc0xpc3QiLCJkZWZhdWx0T3B0aW9ucyIsIm5hbWUiLCJhcnRpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFvRDtBQUMzRTtBQUNBLE1BQU1DLE1BQWdCLEdBQUcsRUFBekI7QUFDQUQsTUFBSSxDQUFDRSxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUF3QjtBQUNuQyxRQUFJLENBQUNGLE1BQU0sQ0FBQ0csUUFBUCxDQUFnQkQsSUFBSSxDQUFDRSxLQUFyQixDQUFMLEVBQWtDO0FBQ2hDSixZQUFNLENBQUNLLElBQVAsQ0FBWUgsSUFBSSxDQUFDRSxLQUFqQjtBQUNEO0FBQ0YsR0FKRCxFQUgyRSxDQVMzRTs7QUFDQSxNQUFNRSxTQUFtQyxHQUFHLEVBQTVDO0FBQ0FOLFFBQU0sQ0FBQ08sR0FBUCxDQUFXLFVBQUNILEtBQUQsRUFBbUI7QUFDNUJFLGFBQVMsQ0FBQ0QsSUFBVixDQUFlO0FBQ2JHLFNBQUcsRUFBRUosS0FEUTtBQUViSyxVQUFJLEVBQUVMLEtBRk87QUFHYk0sV0FBSyxFQUFFTjtBQUhNLEtBQWY7QUFLRCxHQU5EO0FBT0EsU0FBT0UsU0FBUDtBQUNELENBbkJNLEMsQ0FxQlA7O0FBQ08sSUFBTUssU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1osSUFBRCxFQUFvRDtBQUMzRTtBQUNBLE1BQU1hLE1BQWdCLEdBQUcsRUFBekI7QUFDQWIsTUFBSSxDQUFDRSxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUF3QjtBQUNuQ1csVUFBTSxDQUFDQyxJQUFQLENBQVlaLElBQUksQ0FBQ2EsSUFBakIsRUFBdUJSLEdBQXZCLENBQTJCLFVBQUNTLElBQUQsRUFBVTtBQUNuQyxVQUFJLENBQUNKLE1BQU0sQ0FBQ1QsUUFBUCxDQUFnQkQsSUFBSSxDQUFDYSxJQUFMLENBQVVDLElBQVYsRUFBZ0JDLEtBQWhDLENBQUwsRUFBNkM7QUFDM0NMLGNBQU0sQ0FBQ1AsSUFBUCxDQUFZSCxJQUFJLENBQUNhLElBQUwsQ0FBVUMsSUFBVixFQUFnQkMsS0FBNUI7QUFDRDtBQUNGLEtBSkQ7QUFLRCxHQU5EO0FBUUEsTUFBTUMsU0FBUyxHQUFHLEVBQWxCO0FBQ0FOLFFBQU0sQ0FBQ1gsT0FBUCxDQUFlLFVBQUNnQixLQUFELEVBQVc7QUFDeEIsUUFBTUUsSUFBSSxHQUFHRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxHQUFkLEVBQW1CLElBQW5CLENBQWI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQUQsYUFBUyxDQUFDYixJQUFWLENBQWVrQixNQUFNLENBQUNKLElBQUQsQ0FBckI7QUFDRCxHQUpEO0FBS0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixTQUFaLEVBakIyRSxDQW1CM0U7O0FBQ0EsTUFBTU0sVUFBb0MsR0FBRyxFQUE3QztBQUNBWixRQUFNLENBQUNMLEdBQVAsQ0FBVyxVQUFDSCxLQUFELEVBQW1CO0FBQzVCb0IsY0FBVSxDQUFDbkIsSUFBWCxDQUFnQjtBQUNkRyxTQUFHLEVBQUVKLEtBRFM7QUFFZEssVUFBSSxFQUFFTCxLQUZRO0FBR2RNLFdBQUssRUFBRU47QUFITyxLQUFoQjtBQUtELEdBTkQ7QUFPQSxTQUFPb0IsVUFBUDtBQUNELENBN0JNLEMsQ0ErQlA7O0FBQ08sSUFBTUMsY0FBc0MsR0FBRztBQUNwREMsTUFBSSxFQUFFLEVBRDhDO0FBRXBEQyxRQUFNLEVBQUUsRUFGNEM7QUFHcERWLE9BQUssRUFBRSxFQUg2QztBQUlwRGIsT0FBSyxFQUFFO0FBSjZDLENBQS9DIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW1haS4zZmI4NjRkOTdlNGMxZWYzOTM1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTU1Tb25nUmVjb3JkIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuXG4vLyBHZW5yZSBsaXN0IGZvciBtYWltYWkuXG5leHBvcnQgY29uc3QgZ2V0R2VucmVzID0gKGxpc3Q6IE1NU29uZ1JlY29yZFtdKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0+IHtcbiAgLy8gR2V0IGEgbGlzdCBvZiBnZW5yZXMuXG4gIGNvbnN0IGdlbnJlczogc3RyaW5nW10gPSBbXTtcbiAgbGlzdC5mb3JFYWNoKChzb25nOiBNTVNvbmdSZWNvcmQpID0+IHtcbiAgICBpZiAoIWdlbnJlcy5pbmNsdWRlcyhzb25nLmdlbnJlKSkge1xuICAgICAgZ2VucmVzLnB1c2goc29uZy5nZW5yZSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBNYXAgb3V0IGRyb3Bkb3duIGZyb20gbGlzdCBvZiBnZW5yZXMuXG4gIGNvbnN0IGdlbnJlTGlzdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0gW107XG4gIGdlbnJlcy5tYXAoKGdlbnJlOiBzdHJpbmcpID0+IHtcbiAgICBnZW5yZUxpc3QucHVzaCh7XG4gICAgICBrZXk6IGdlbnJlLFxuICAgICAgdGV4dDogZ2VucmUsXG4gICAgICB2YWx1ZTogZ2VucmUsXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZ2VucmVMaXN0O1xufTtcblxuLy8gTGV2ZWwgbGlzdCBmb3IgbWFpbWFpLlxuZXhwb3J0IGNvbnN0IGdldExldmVscyA9IChsaXN0OiBNTVNvbmdSZWNvcmRbXSk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9PiB7XG4gIC8vIEdldCBhIGxpc3Qgb2YgZ2VucmVzLlxuICBjb25zdCBsZXZlbHM6IHN0cmluZ1tdID0gW107XG4gIGxpc3QuZm9yRWFjaCgoc29uZzogTU1Tb25nUmVjb3JkKSA9PiB7XG4gICAgT2JqZWN0LmtleXMoc29uZy5kYXRhKS5tYXAoKGRpZmYpID0+IHtcbiAgICAgIGlmICghbGV2ZWxzLmluY2x1ZGVzKHNvbmcuZGF0YVtkaWZmXS5sZXZlbCkpIHtcbiAgICAgICAgbGV2ZWxzLnB1c2goc29uZy5kYXRhW2RpZmZdLmxldmVsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgbmV3TGV2ZWxzID0gW107XG4gIGxldmVscy5mb3JFYWNoKChsZXZlbCkgPT4ge1xuICAgIGNvbnN0IHRlbXAgPSBsZXZlbC5yZXBsYWNlKCcrJywgJy41Jyk7XG4gICAgY29uc29sZS5sb2codGVtcCk7XG4gICAgbmV3TGV2ZWxzLnB1c2goTnVtYmVyKHRlbXApKTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKG5ld0xldmVscyk7XG5cbiAgLy8gTWFwIG91dCBkcm9wZG93biBmcm9tIGxpc3Qgb2YgZ2VucmVzLlxuICBjb25zdCBsZXZlbHNMaXN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10gPSBbXTtcbiAgbGV2ZWxzLm1hcCgoZ2VucmU6IHN0cmluZykgPT4ge1xuICAgIGxldmVsc0xpc3QucHVzaCh7XG4gICAgICBrZXk6IGdlbnJlLFxuICAgICAgdGV4dDogZ2VucmUsXG4gICAgICB2YWx1ZTogZ2VucmUsXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbGV2ZWxzTGlzdDtcbn07XG5cbi8vIERlZmF1bHQgb3B0aW9ucy5cbmV4cG9ydCBjb25zdCBkZWZhdWx0T3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgbmFtZTogJycsXG4gIGFydGlzdDogJycsXG4gIGxldmVsOiAnJyxcbiAgZ2VucmU6ICcnLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=