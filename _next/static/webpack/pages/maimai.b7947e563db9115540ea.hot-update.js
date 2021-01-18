webpackHotUpdate_N_E("pages/maimai",{

/***/ "./components/public/Maimai/Maimai.constants.ts":
/*!******************************************************!*\
  !*** ./components/public/Maimai/Maimai.constants.ts ***!
  \******************************************************/
/*! exports provided: getGenres, getLevels, getDifficulties, defaultOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGenres", function() { return getGenres; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLevels", function() { return getLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDifficulties", function() { return getDifficulties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* eslint-disable prettier/prettier */
// Genre list for maimai.
var getGenres = function getGenres(list) {
  var genres = [];
  var genreList = []; // Map out dropdown from list of unique genres.

  list.forEach(function (song) {
    if (!genres.includes(song.genre)) {
      genres.push(song.genre);
    }
  });
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
}; // Get difficulties.

var getDifficulties = function getDifficulties() {
  var difficultiesList = [];
  var difficulties = ['BASIC', 'ADVANCED', 'EXPERT', 'MASTER', 'REMASTER'];
  difficulties.map(function (level) {
    difficultiesList.push({
      key: level,
      text: level,
      value: level
    });
  });
  return difficultiesList;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS5jb25zdGFudHMudHMiXSwibmFtZXMiOlsiZ2V0R2VucmVzIiwibGlzdCIsImdlbnJlcyIsImdlbnJlTGlzdCIsImZvckVhY2giLCJzb25nIiwiaW5jbHVkZXMiLCJnZW5yZSIsInB1c2giLCJtYXAiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJnZXRMZXZlbHMiLCJsZXZlbHMiLCJzdHJMZXZlbHMiLCJmbG9hdExldmVscyIsImxldmVsc0xpc3QiLCJPYmplY3QiLCJrZXlzIiwiZGF0YSIsImRpZmYiLCJsZXZlbCIsInRlbXAiLCJyZXBsYWNlIiwiTnVtYmVyIiwic29ydCIsImEiLCJiIiwiU3RyaW5nIiwiZ2V0RGlmZmljdWx0aWVzIiwiZGlmZmljdWx0aWVzTGlzdCIsImRpZmZpY3VsdGllcyIsImRlZmF1bHRPcHRpb25zIiwibmFtZSIsImFydGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ08sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFvRDtBQUMzRSxNQUFNQyxNQUFnQixHQUFHLEVBQXpCO0FBQ0EsTUFBTUMsU0FBbUMsR0FBRyxFQUE1QyxDQUYyRSxDQUkzRTs7QUFDQUYsTUFBSSxDQUFDRyxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUF3QjtBQUNuQyxRQUFJLENBQUNILE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQkQsSUFBSSxDQUFDRSxLQUFyQixDQUFMLEVBQWtDO0FBQ2hDTCxZQUFNLENBQUNNLElBQVAsQ0FBWUgsSUFBSSxDQUFDRSxLQUFqQjtBQUNEO0FBQ0YsR0FKRDtBQU1BTCxRQUFNLENBQUNPLEdBQVAsQ0FBVyxVQUFDRixLQUFELEVBQW1CO0FBQzVCSixhQUFTLENBQUNLLElBQVYsQ0FBZTtBQUNiRSxTQUFHLEVBQUVILEtBRFE7QUFFYkksVUFBSSxFQUFFSixLQUZPO0FBR2JLLFdBQUssRUFBRUw7QUFITSxLQUFmO0FBS0QsR0FORDtBQU9BLFNBQU9KLFNBQVA7QUFDRCxDQW5CTSxDLENBcUJQOztBQUNPLElBQU1VLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNaLElBQUQsRUFBb0Q7QUFDM0UsTUFBTWEsTUFBZ0IsR0FBRyxFQUF6QjtBQUNBLE1BQU1DLFNBQW1CLEdBQUcsRUFBNUI7QUFDQSxNQUFNQyxXQUFxQixHQUFHLEVBQTlCO0FBQ0EsTUFBTUMsVUFBb0MsR0FBRyxFQUE3QyxDQUoyRSxDQU0zRTs7QUFDQWhCLE1BQUksQ0FBQ0csT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBd0I7QUFDbkNhLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZZCxJQUFJLENBQUNlLElBQWpCLEVBQXVCWCxHQUF2QixDQUEyQixVQUFDWSxJQUFELEVBQWtCO0FBQzNDLFVBQUksQ0FBQ1AsTUFBTSxDQUFDUixRQUFQLENBQWdCRCxJQUFJLENBQUNlLElBQUwsQ0FBVUMsSUFBVixFQUFvQ0MsS0FBcEQsQ0FBTCxFQUFpRTtBQUMvRCxZQUFNQyxJQUFJLEdBQUdsQixJQUFJLENBQUNlLElBQUwsQ0FBVUMsSUFBVixFQUFvQ0MsS0FBcEMsQ0FBMENFLE9BQTFDLENBQWtELEdBQWxELEVBQXVELElBQXZELENBQWI7QUFDQVIsbUJBQVcsQ0FBQ1IsSUFBWixDQUFpQmlCLE1BQU0sQ0FBQ0YsSUFBRCxDQUF2QjtBQUNBVCxjQUFNLENBQUNOLElBQVAsQ0FBWUgsSUFBSSxDQUFDZSxJQUFMLENBQVVDLElBQVYsRUFBb0NDLEtBQWhEO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0FSRCxFQVAyRSxDQWlCM0U7O0FBQ0FOLGFBQVcsQ0FBQ1UsSUFBWixDQUFpQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVRCxDQUFDLEdBQUdDLENBQWQ7QUFBQSxHQUFqQjtBQUNBWixhQUFXLENBQUNaLE9BQVosQ0FBb0IsVUFBQ2tCLEtBQUQsRUFBVztBQUM3QixRQUFNQyxJQUFJLEdBQUdNLE1BQU0sQ0FBQ1AsS0FBRCxDQUFOLENBQWNFLE9BQWQsQ0FBc0IsSUFBdEIsRUFBNEIsR0FBNUIsQ0FBYjtBQUNBVCxhQUFTLENBQUNQLElBQVYsQ0FBZWUsSUFBZjtBQUNELEdBSEQsRUFuQjJFLENBd0IzRTs7QUFDQVIsV0FBUyxDQUFDTixHQUFWLENBQWMsVUFBQ2EsS0FBRCxFQUFtQjtBQUMvQkwsY0FBVSxDQUFDVCxJQUFYLENBQWdCO0FBQ2RFLFNBQUcsRUFBRVksS0FEUztBQUVkWCxVQUFJLEVBQUVXLEtBRlE7QUFHZFYsV0FBSyxFQUFFVTtBQUhPLEtBQWhCO0FBS0QsR0FORDtBQU9BLFNBQU9MLFVBQVA7QUFDRCxDQWpDTSxDLENBbUNQOztBQUNPLElBQU1hLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBZ0M7QUFDN0QsTUFBTUMsZ0JBQTBDLEdBQUcsRUFBbkQ7QUFDQSxNQUFNQyxZQUFZLEdBQUcsQ0FBQyxPQUFELEVBQVUsVUFBVixFQUFzQixRQUF0QixFQUFnQyxRQUFoQyxFQUEwQyxVQUExQyxDQUFyQjtBQUNBQSxjQUFZLENBQUN2QixHQUFiLENBQWlCLFVBQUNhLEtBQUQsRUFBbUI7QUFDbENTLG9CQUFnQixDQUFDdkIsSUFBakIsQ0FBc0I7QUFDcEJFLFNBQUcsRUFBRVksS0FEZTtBQUVwQlgsVUFBSSxFQUFFVyxLQUZjO0FBR3BCVixXQUFLLEVBQUVVO0FBSGEsS0FBdEI7QUFLRCxHQU5EO0FBT0EsU0FBT1MsZ0JBQVA7QUFDRCxDQVhNLEMsQ0FhUDs7QUFDTyxJQUFNRSxjQUFzQyxHQUFHO0FBQ3BEQyxNQUFJLEVBQUUsRUFEOEM7QUFFcERDLFFBQU0sRUFBRSxFQUY0QztBQUdwRGIsT0FBSyxFQUFFLEVBSDZDO0FBSXBEZixPQUFLLEVBQUU7QUFKNkMsQ0FBL0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbWFpLmI3OTQ3ZTU2M2RiOTExNTU0MGVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuaW1wb3J0IHsgTU1Tb25nUmVjb3JkLCBNTVNvbmdEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuXG4vLyBHZW5yZSBsaXN0IGZvciBtYWltYWkuXG5leHBvcnQgY29uc3QgZ2V0R2VucmVzID0gKGxpc3Q6IE1NU29uZ1JlY29yZFtdKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0+IHtcbiAgY29uc3QgZ2VucmVzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBnZW5yZUxpc3Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9IFtdO1xuXG4gIC8vIE1hcCBvdXQgZHJvcGRvd24gZnJvbSBsaXN0IG9mIHVuaXF1ZSBnZW5yZXMuXG4gIGxpc3QuZm9yRWFjaCgoc29uZzogTU1Tb25nUmVjb3JkKSA9PiB7XG4gICAgaWYgKCFnZW5yZXMuaW5jbHVkZXMoc29uZy5nZW5yZSkpIHtcbiAgICAgIGdlbnJlcy5wdXNoKHNvbmcuZ2VucmUpO1xuICAgIH1cbiAgfSk7XG5cbiAgZ2VucmVzLm1hcCgoZ2VucmU6IHN0cmluZykgPT4ge1xuICAgIGdlbnJlTGlzdC5wdXNoKHtcbiAgICAgIGtleTogZ2VucmUsXG4gICAgICB0ZXh0OiBnZW5yZSxcbiAgICAgIHZhbHVlOiBnZW5yZSxcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBnZW5yZUxpc3Q7XG59O1xuXG4vLyBMZXZlbCBsaXN0IGZvciBtYWltYWkuXG5leHBvcnQgY29uc3QgZ2V0TGV2ZWxzID0gKGxpc3Q6IE1NU29uZ1JlY29yZFtdKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0+IHtcbiAgY29uc3QgbGV2ZWxzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBzdHJMZXZlbHM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IGZsb2F0TGV2ZWxzOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBsZXZlbHNMaXN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10gPSBbXTtcblxuICAvLyBHZXQgYSBsaXN0IG9mIHVuaXF1ZSBsZXZlbHMgYW5kIHR1cm4gYW55ICdYKycgaW50byAnWC41J3MuXG4gIGxpc3QuZm9yRWFjaCgoc29uZzogTU1Tb25nUmVjb3JkKSA9PiB7XG4gICAgT2JqZWN0LmtleXMoc29uZy5kYXRhKS5tYXAoKGRpZmY6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCFsZXZlbHMuaW5jbHVkZXMoc29uZy5kYXRhW2RpZmYgYXMga2V5b2YgTU1Tb25nRGF0YV0ubGV2ZWwpKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBzb25nLmRhdGFbZGlmZiBhcyBrZXlvZiBNTVNvbmdEYXRhXS5sZXZlbC5yZXBsYWNlKCcrJywgJy41Jyk7XG4gICAgICAgIGZsb2F0TGV2ZWxzLnB1c2goTnVtYmVyKHRlbXApKTtcbiAgICAgICAgbGV2ZWxzLnB1c2goc29uZy5kYXRhW2RpZmYgYXMga2V5b2YgTU1Tb25nRGF0YV0ubGV2ZWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICAvLyBTb3J0IHRoZSBuZXcgYXJyYXkgb2YgZmxvYXRzLCB0aGVuIHR1cm4gYWxsIG9mIHRoZW0gYmFjayBpbnRvIHN0YW5kYXJkIGxldmVscy5cbiAgZmxvYXRMZXZlbHMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICBmbG9hdExldmVscy5mb3JFYWNoKChsZXZlbCkgPT4ge1xuICAgIGNvbnN0IHRlbXAgPSBTdHJpbmcobGV2ZWwpLnJlcGxhY2UoJy41JywgJysnKTtcbiAgICBzdHJMZXZlbHMucHVzaCh0ZW1wKTtcbiAgfSk7XG5cbiAgLy8gTWFwIG91dCBkcm9wZG93biBmcm9tIGxpc3Qgb2YgbGV2ZWxzLlxuICBzdHJMZXZlbHMubWFwKChsZXZlbDogc3RyaW5nKSA9PiB7XG4gICAgbGV2ZWxzTGlzdC5wdXNoKHtcbiAgICAgIGtleTogbGV2ZWwsXG4gICAgICB0ZXh0OiBsZXZlbCxcbiAgICAgIHZhbHVlOiBsZXZlbCxcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBsZXZlbHNMaXN0O1xufTtcblxuLy8gR2V0IGRpZmZpY3VsdGllcy5cbmV4cG9ydCBjb25zdCBnZXREaWZmaWN1bHRpZXMgPSAoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0+IHtcbiAgY29uc3QgZGlmZmljdWx0aWVzTGlzdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0gW107XG4gIGNvbnN0IGRpZmZpY3VsdGllcyA9IFsnQkFTSUMnLCAnQURWQU5DRUQnLCAnRVhQRVJUJywgJ01BU1RFUicsICdSRU1BU1RFUiddO1xuICBkaWZmaWN1bHRpZXMubWFwKChsZXZlbDogc3RyaW5nKSA9PiB7XG4gICAgZGlmZmljdWx0aWVzTGlzdC5wdXNoKHtcbiAgICAgIGtleTogbGV2ZWwsXG4gICAgICB0ZXh0OiBsZXZlbCxcbiAgICAgIHZhbHVlOiBsZXZlbCxcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBkaWZmaWN1bHRpZXNMaXN0O1xufVxuXG4vLyBEZWZhdWx0IG9wdGlvbnMuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIG5hbWU6ICcnLFxuICBhcnRpc3Q6ICcnLFxuICBsZXZlbDogJycsXG4gIGdlbnJlOiAnJyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9