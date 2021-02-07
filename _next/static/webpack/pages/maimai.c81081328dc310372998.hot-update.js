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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS5jb25zdGFudHMudHMiXSwibmFtZXMiOlsiZ2V0R2VucmVzIiwibGlzdCIsImdlbnJlcyIsImdlbnJlTGlzdCIsImZvckVhY2giLCJzb25nIiwiaW5jbHVkZXMiLCJnZW5yZSIsInB1c2giLCJtYXAiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJnZXRMZXZlbHMiLCJsZXZlbHMiLCJzdHJMZXZlbHMiLCJmbG9hdExldmVscyIsImxldmVsc0xpc3QiLCJPYmplY3QiLCJrZXlzIiwiZGF0YSIsImRpZmYiLCJsZXZlbCIsInRlbXAiLCJyZXBsYWNlIiwiTnVtYmVyIiwic29ydCIsImEiLCJiIiwiU3RyaW5nIiwiZGVmYXVsdE9wdGlvbnMiLCJuYW1lIiwiYXJ0aXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ08sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFvRDtBQUMzRSxNQUFNQyxNQUFnQixHQUFHLEVBQXpCO0FBQ0EsTUFBTUMsU0FBbUMsR0FBRyxFQUE1QyxDQUYyRSxDQUkzRTs7QUFDQUYsTUFBSSxDQUFDRyxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUF3QjtBQUNuQyxRQUFJLENBQUNILE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQkQsSUFBSSxDQUFDRSxLQUFyQixDQUFMLEVBQWtDO0FBQ2hDTCxZQUFNLENBQUNNLElBQVAsQ0FBWUgsSUFBSSxDQUFDRSxLQUFqQjtBQUNEO0FBQ0YsR0FKRDtBQU1BTCxRQUFNLENBQUNPLEdBQVAsQ0FBVyxVQUFDRixLQUFELEVBQW1CO0FBQzVCSixhQUFTLENBQUNLLElBQVYsQ0FBZTtBQUNiRSxTQUFHLEVBQUVILEtBRFE7QUFFYkksVUFBSSxFQUFFSixLQUZPO0FBR2JLLFdBQUssRUFBRUw7QUFITSxLQUFmO0FBS0QsR0FORDtBQU9BLFNBQU9KLFNBQVA7QUFDRCxDQW5CTSxDLENBcUJQOztBQUNPLElBQU1VLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNaLElBQUQsRUFBb0Q7QUFDM0UsTUFBTWEsTUFBZ0IsR0FBRyxFQUF6QjtBQUNBLE1BQU1DLFNBQW1CLEdBQUcsRUFBNUI7QUFDQSxNQUFNQyxXQUFxQixHQUFHLEVBQTlCO0FBQ0EsTUFBTUMsVUFBb0MsR0FBRyxFQUE3QyxDQUoyRSxDQU0zRTs7QUFDQWhCLE1BQUksQ0FBQ0csT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBd0I7QUFDbkNhLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZZCxJQUFJLENBQUNlLElBQWpCLEVBQXVCWCxHQUF2QixDQUEyQixVQUFDWSxJQUFELEVBQWtCO0FBQzNDLFVBQUksQ0FBQ1AsTUFBTSxDQUFDUixRQUFQLENBQWdCRCxJQUFJLENBQUNlLElBQUwsQ0FBVUMsSUFBVixFQUFvQ0MsS0FBcEQsQ0FBTCxFQUFpRTtBQUMvRCxZQUFNQyxJQUFJLEdBQUdsQixJQUFJLENBQUNlLElBQUwsQ0FBVUMsSUFBVixFQUFvQ0MsS0FBcEMsQ0FBMENFLE9BQTFDLENBQWtELEdBQWxELEVBQXVELElBQXZELENBQWI7QUFDQVIsbUJBQVcsQ0FBQ1IsSUFBWixDQUFpQmlCLE1BQU0sQ0FBQ0YsSUFBRCxDQUF2QjtBQUNBVCxjQUFNLENBQUNOLElBQVAsQ0FBWUgsSUFBSSxDQUFDZSxJQUFMLENBQVVDLElBQVYsRUFBb0NDLEtBQWhEO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0FSRCxFQVAyRSxDQWlCM0U7O0FBQ0FOLGFBQVcsQ0FBQ1UsSUFBWixDQUFpQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVRCxDQUFDLEdBQUdDLENBQWQ7QUFBQSxHQUFqQjtBQUNBWixhQUFXLENBQUNaLE9BQVosQ0FBb0IsVUFBQ2tCLEtBQUQsRUFBVztBQUM3QixRQUFNQyxJQUFJLEdBQUdNLE1BQU0sQ0FBQ1AsS0FBRCxDQUFOLENBQWNFLE9BQWQsQ0FBc0IsSUFBdEIsRUFBNEIsR0FBNUIsQ0FBYjtBQUNBVCxhQUFTLENBQUNQLElBQVYsQ0FBZWUsSUFBZjtBQUNELEdBSEQsRUFuQjJFLENBd0IzRTs7QUFDQVIsV0FBUyxDQUFDTixHQUFWLENBQWMsVUFBQ2EsS0FBRCxFQUFtQjtBQUMvQkwsY0FBVSxDQUFDVCxJQUFYLENBQWdCO0FBQ2RFLFNBQUcsRUFBRVksS0FEUztBQUVkWCxVQUFJLEVBQUVXLEtBRlE7QUFHZFYsV0FBSyxFQUFFVTtBQUhPLEtBQWhCO0FBS0QsR0FORDtBQU9BLFNBQU9MLFVBQVA7QUFDRCxDQWpDTSxDLENBbUNQOztBQUNPLElBQU1hLGNBQXNDLEdBQUc7QUFDcERDLE1BQUksRUFBRSxFQUQ4QztBQUVwREMsUUFBTSxFQUFFLEVBRjRDO0FBR3BEVixPQUFLLEVBQUUsRUFINkM7QUFJcERmLE9BQUssRUFBRTtBQUo2QyxDQUEvQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWltYWkuYzgxMDgxMzI4ZGMzMTAzNzI5OTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXG5pbXBvcnQgeyBNTVNvbmdSZWNvcmQsIE1NU29uZ0RhdGEgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbi8vIEdlbnJlIGxpc3QgZm9yIG1haW1haS5cbmV4cG9ydCBjb25zdCBnZXRHZW5yZXMgPSAobGlzdDogTU1Tb25nUmVjb3JkW10pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10gPT4ge1xuICBjb25zdCBnZW5yZXM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IGdlbnJlTGlzdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0gW107XG5cbiAgLy8gTWFwIG91dCBkcm9wZG93biBmcm9tIGxpc3Qgb2YgdW5pcXVlIGdlbnJlcy5cbiAgbGlzdC5mb3JFYWNoKChzb25nOiBNTVNvbmdSZWNvcmQpID0+IHtcbiAgICBpZiAoIWdlbnJlcy5pbmNsdWRlcyhzb25nLmdlbnJlKSkge1xuICAgICAgZ2VucmVzLnB1c2goc29uZy5nZW5yZSk7XG4gICAgfVxuICB9KTtcblxuICBnZW5yZXMubWFwKChnZW5yZTogc3RyaW5nKSA9PiB7XG4gICAgZ2VucmVMaXN0LnB1c2goe1xuICAgICAga2V5OiBnZW5yZSxcbiAgICAgIHRleHQ6IGdlbnJlLFxuICAgICAgdmFsdWU6IGdlbnJlLFxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGdlbnJlTGlzdDtcbn07XG5cbi8vIExldmVsIGxpc3QgZm9yIG1haW1haS5cbmV4cG9ydCBjb25zdCBnZXRMZXZlbHMgPSAobGlzdDogTU1Tb25nUmVjb3JkW10pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10gPT4ge1xuICBjb25zdCBsZXZlbHM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHN0ckxldmVsczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgZmxvYXRMZXZlbHM6IG51bWJlcltdID0gW107XG4gIGNvbnN0IGxldmVsc0xpc3Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9IFtdO1xuXG4gIC8vIEdldCBhIGxpc3Qgb2YgdW5pcXVlIGxldmVscyBhbmQgdHVybiBhbnkgJ1grJyBpbnRvICdYLjUncy5cbiAgbGlzdC5mb3JFYWNoKChzb25nOiBNTVNvbmdSZWNvcmQpID0+IHtcbiAgICBPYmplY3Qua2V5cyhzb25nLmRhdGEpLm1hcCgoZGlmZjogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIWxldmVscy5pbmNsdWRlcyhzb25nLmRhdGFbZGlmZiBhcyBrZXlvZiBNTVNvbmdEYXRhXS5sZXZlbCkpIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IHNvbmcuZGF0YVtkaWZmIGFzIGtleW9mIE1NU29uZ0RhdGFdLmxldmVsLnJlcGxhY2UoJysnLCAnLjUnKTtcbiAgICAgICAgZmxvYXRMZXZlbHMucHVzaChOdW1iZXIodGVtcCkpO1xuICAgICAgICBsZXZlbHMucHVzaChzb25nLmRhdGFbZGlmZiBhcyBrZXlvZiBNTVNvbmdEYXRhXS5sZXZlbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIFNvcnQgdGhlIG5ldyBhcnJheSBvZiBmbG9hdHMsIHRoZW4gdHVybiBhbGwgb2YgdGhlbSBiYWNrIGludG8gc3RhbmRhcmQgbGV2ZWxzLlxuICBmbG9hdExldmVscy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gIGZsb2F0TGV2ZWxzLmZvckVhY2goKGxldmVsKSA9PiB7XG4gICAgY29uc3QgdGVtcCA9IFN0cmluZyhsZXZlbCkucmVwbGFjZSgnLjUnLCAnKycpO1xuICAgIHN0ckxldmVscy5wdXNoKHRlbXApO1xuICB9KTtcblxuICAvLyBNYXAgb3V0IGRyb3Bkb3duIGZyb20gbGlzdCBvZiBsZXZlbHMuXG4gIHN0ckxldmVscy5tYXAoKGxldmVsOiBzdHJpbmcpID0+IHtcbiAgICBsZXZlbHNMaXN0LnB1c2goe1xuICAgICAga2V5OiBsZXZlbCxcbiAgICAgIHRleHQ6IGxldmVsLFxuICAgICAgdmFsdWU6IGxldmVsLFxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGxldmVsc0xpc3Q7XG59O1xuXG4vLyBEZWZhdWx0IG9wdGlvbnMuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIG5hbWU6ICcnLFxuICBhcnRpc3Q6ICcnLFxuICBsZXZlbDogJycsXG4gIGdlbnJlOiAnJyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9