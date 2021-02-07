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
    level.replace('+', '.5');
    newLevels.push(Number(level));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS5jb25zdGFudHMudHMiXSwibmFtZXMiOlsiZ2V0R2VucmVzIiwibGlzdCIsImdlbnJlcyIsImZvckVhY2giLCJzb25nIiwiaW5jbHVkZXMiLCJnZW5yZSIsInB1c2giLCJnZW5yZUxpc3QiLCJtYXAiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJnZXRMZXZlbHMiLCJsZXZlbHMiLCJPYmplY3QiLCJrZXlzIiwiZGF0YSIsImRpZmYiLCJsZXZlbCIsIm5ld0xldmVscyIsInJlcGxhY2UiLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwibGV2ZWxzTGlzdCIsImRlZmF1bHRPcHRpb25zIiwibmFtZSIsImFydGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQW9EO0FBQzNFO0FBQ0EsTUFBTUMsTUFBZ0IsR0FBRyxFQUF6QjtBQUNBRCxNQUFJLENBQUNFLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQXdCO0FBQ25DLFFBQUksQ0FBQ0YsTUFBTSxDQUFDRyxRQUFQLENBQWdCRCxJQUFJLENBQUNFLEtBQXJCLENBQUwsRUFBa0M7QUFDaENKLFlBQU0sQ0FBQ0ssSUFBUCxDQUFZSCxJQUFJLENBQUNFLEtBQWpCO0FBQ0Q7QUFDRixHQUpELEVBSDJFLENBUzNFOztBQUNBLE1BQU1FLFNBQW1DLEdBQUcsRUFBNUM7QUFDQU4sUUFBTSxDQUFDTyxHQUFQLENBQVcsVUFBQ0gsS0FBRCxFQUFtQjtBQUM1QkUsYUFBUyxDQUFDRCxJQUFWLENBQWU7QUFDYkcsU0FBRyxFQUFFSixLQURRO0FBRWJLLFVBQUksRUFBRUwsS0FGTztBQUdiTSxXQUFLLEVBQUVOO0FBSE0sS0FBZjtBQUtELEdBTkQ7QUFPQSxTQUFPRSxTQUFQO0FBQ0QsQ0FuQk0sQyxDQXFCUDs7QUFDTyxJQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDWixJQUFELEVBQW9EO0FBQzNFO0FBQ0EsTUFBTWEsTUFBZ0IsR0FBRyxFQUF6QjtBQUNBYixNQUFJLENBQUNFLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQXdCO0FBQ25DVyxVQUFNLENBQUNDLElBQVAsQ0FBWVosSUFBSSxDQUFDYSxJQUFqQixFQUF1QlIsR0FBdkIsQ0FBMkIsVUFBQ1MsSUFBRCxFQUFVO0FBQ25DLFVBQUksQ0FBQ0osTUFBTSxDQUFDVCxRQUFQLENBQWdCRCxJQUFJLENBQUNhLElBQUwsQ0FBVUMsSUFBVixFQUFnQkMsS0FBaEMsQ0FBTCxFQUE2QztBQUMzQ0wsY0FBTSxDQUFDUCxJQUFQLENBQVlILElBQUksQ0FBQ2EsSUFBTCxDQUFVQyxJQUFWLEVBQWdCQyxLQUE1QjtBQUNEO0FBQ0YsS0FKRDtBQUtELEdBTkQ7QUFRQSxNQUFNQyxTQUFTLEdBQUcsRUFBbEI7QUFDQU4sUUFBTSxDQUFDWCxPQUFQLENBQWUsVUFBQ2dCLEtBQUQsRUFBVztBQUN4QkEsU0FBSyxDQUFDRSxPQUFOLENBQWMsR0FBZCxFQUFtQixJQUFuQjtBQUNBRCxhQUFTLENBQUNiLElBQVYsQ0FBZWUsTUFBTSxDQUFDSCxLQUFELENBQXJCO0FBQ0QsR0FIRDtBQUlBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWUosU0FBWixFQWhCMkUsQ0FrQjNFOztBQUNBLE1BQU1LLFVBQW9DLEdBQUcsRUFBN0M7QUFDQVgsUUFBTSxDQUFDTCxHQUFQLENBQVcsVUFBQ0gsS0FBRCxFQUFtQjtBQUM1Qm1CLGNBQVUsQ0FBQ2xCLElBQVgsQ0FBZ0I7QUFDZEcsU0FBRyxFQUFFSixLQURTO0FBRWRLLFVBQUksRUFBRUwsS0FGUTtBQUdkTSxXQUFLLEVBQUVOO0FBSE8sS0FBaEI7QUFLRCxHQU5EO0FBT0EsU0FBT21CLFVBQVA7QUFDRCxDQTVCTSxDLENBOEJQOztBQUNPLElBQU1DLGNBQXNDLEdBQUc7QUFDcERDLE1BQUksRUFBRSxFQUQ4QztBQUVwREMsUUFBTSxFQUFFLEVBRjRDO0FBR3BEVCxPQUFLLEVBQUUsRUFINkM7QUFJcERiLE9BQUssRUFBRTtBQUo2QyxDQUEvQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWltYWkuNmM3YmM3YzhmMDBkNGQ1MTQ4N2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1NU29uZ1JlY29yZCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuLy8gR2VucmUgbGlzdCBmb3IgbWFpbWFpLlxuZXhwb3J0IGNvbnN0IGdldEdlbnJlcyA9IChsaXN0OiBNTVNvbmdSZWNvcmRbXSk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9PiB7XG4gIC8vIEdldCBhIGxpc3Qgb2YgZ2VucmVzLlxuICBjb25zdCBnZW5yZXM6IHN0cmluZ1tdID0gW107XG4gIGxpc3QuZm9yRWFjaCgoc29uZzogTU1Tb25nUmVjb3JkKSA9PiB7XG4gICAgaWYgKCFnZW5yZXMuaW5jbHVkZXMoc29uZy5nZW5yZSkpIHtcbiAgICAgIGdlbnJlcy5wdXNoKHNvbmcuZ2VucmUpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gTWFwIG91dCBkcm9wZG93biBmcm9tIGxpc3Qgb2YgZ2VucmVzLlxuICBjb25zdCBnZW5yZUxpc3Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9IFtdO1xuICBnZW5yZXMubWFwKChnZW5yZTogc3RyaW5nKSA9PiB7XG4gICAgZ2VucmVMaXN0LnB1c2goe1xuICAgICAga2V5OiBnZW5yZSxcbiAgICAgIHRleHQ6IGdlbnJlLFxuICAgICAgdmFsdWU6IGdlbnJlLFxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGdlbnJlTGlzdDtcbn07XG5cbi8vIExldmVsIGxpc3QgZm9yIG1haW1haS5cbmV4cG9ydCBjb25zdCBnZXRMZXZlbHMgPSAobGlzdDogTU1Tb25nUmVjb3JkW10pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10gPT4ge1xuICAvLyBHZXQgYSBsaXN0IG9mIGdlbnJlcy5cbiAgY29uc3QgbGV2ZWxzOiBzdHJpbmdbXSA9IFtdO1xuICBsaXN0LmZvckVhY2goKHNvbmc6IE1NU29uZ1JlY29yZCkgPT4ge1xuICAgIE9iamVjdC5rZXlzKHNvbmcuZGF0YSkubWFwKChkaWZmKSA9PiB7XG4gICAgICBpZiAoIWxldmVscy5pbmNsdWRlcyhzb25nLmRhdGFbZGlmZl0ubGV2ZWwpKSB7XG4gICAgICAgIGxldmVscy5wdXNoKHNvbmcuZGF0YVtkaWZmXS5sZXZlbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IG5ld0xldmVscyA9IFtdO1xuICBsZXZlbHMuZm9yRWFjaCgobGV2ZWwpID0+IHtcbiAgICBsZXZlbC5yZXBsYWNlKCcrJywgJy41Jyk7XG4gICAgbmV3TGV2ZWxzLnB1c2goTnVtYmVyKGxldmVsKSk7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhuZXdMZXZlbHMpO1xuXG4gIC8vIE1hcCBvdXQgZHJvcGRvd24gZnJvbSBsaXN0IG9mIGdlbnJlcy5cbiAgY29uc3QgbGV2ZWxzTGlzdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0gW107XG4gIGxldmVscy5tYXAoKGdlbnJlOiBzdHJpbmcpID0+IHtcbiAgICBsZXZlbHNMaXN0LnB1c2goe1xuICAgICAga2V5OiBnZW5yZSxcbiAgICAgIHRleHQ6IGdlbnJlLFxuICAgICAgdmFsdWU6IGdlbnJlLFxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGxldmVsc0xpc3Q7XG59O1xuXG4vLyBEZWZhdWx0IG9wdGlvbnMuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIG5hbWU6ICcnLFxuICBhcnRpc3Q6ICcnLFxuICBsZXZlbDogJycsXG4gIGdlbnJlOiAnJyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9