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
  genre: '',
  difficulty: ''
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS5jb25zdGFudHMudHMiXSwibmFtZXMiOlsiZ2V0R2VucmVzIiwibGlzdCIsImdlbnJlcyIsImdlbnJlTGlzdCIsImZvckVhY2giLCJzb25nIiwiaW5jbHVkZXMiLCJnZW5yZSIsInB1c2giLCJtYXAiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJnZXRMZXZlbHMiLCJsZXZlbHMiLCJzdHJMZXZlbHMiLCJmbG9hdExldmVscyIsImxldmVsc0xpc3QiLCJPYmplY3QiLCJrZXlzIiwiZGF0YSIsImRpZmYiLCJsZXZlbCIsInRlbXAiLCJyZXBsYWNlIiwiTnVtYmVyIiwic29ydCIsImEiLCJiIiwiU3RyaW5nIiwiZ2V0RGlmZmljdWx0aWVzIiwiZGlmZmljdWx0aWVzTGlzdCIsImRpZmZpY3VsdGllcyIsImRlZmF1bHRPcHRpb25zIiwibmFtZSIsImFydGlzdCIsImRpZmZpY3VsdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBb0Q7QUFDM0UsTUFBTUMsTUFBZ0IsR0FBRyxFQUF6QjtBQUNBLE1BQU1DLFNBQW1DLEdBQUcsRUFBNUMsQ0FGMkUsQ0FJM0U7O0FBQ0FGLE1BQUksQ0FBQ0csT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBd0I7QUFDbkMsUUFBSSxDQUFDSCxNQUFNLENBQUNJLFFBQVAsQ0FBZ0JELElBQUksQ0FBQ0UsS0FBckIsQ0FBTCxFQUFrQztBQUNoQ0wsWUFBTSxDQUFDTSxJQUFQLENBQVlILElBQUksQ0FBQ0UsS0FBakI7QUFDRDtBQUNGLEdBSkQ7QUFNQUwsUUFBTSxDQUFDTyxHQUFQLENBQVcsVUFBQ0YsS0FBRCxFQUFtQjtBQUM1QkosYUFBUyxDQUFDSyxJQUFWLENBQWU7QUFDYkUsU0FBRyxFQUFFSCxLQURRO0FBRWJJLFVBQUksRUFBRUosS0FGTztBQUdiSyxXQUFLLEVBQUVMO0FBSE0sS0FBZjtBQUtELEdBTkQ7QUFPQSxTQUFPSixTQUFQO0FBQ0QsQ0FuQk0sQyxDQXFCUDs7QUFDTyxJQUFNVSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDWixJQUFELEVBQW9EO0FBQzNFLE1BQU1hLE1BQWdCLEdBQUcsRUFBekI7QUFDQSxNQUFNQyxTQUFtQixHQUFHLEVBQTVCO0FBQ0EsTUFBTUMsV0FBcUIsR0FBRyxFQUE5QjtBQUNBLE1BQU1DLFVBQW9DLEdBQUcsRUFBN0MsQ0FKMkUsQ0FNM0U7O0FBQ0FoQixNQUFJLENBQUNHLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQXdCO0FBQ25DYSxVQUFNLENBQUNDLElBQVAsQ0FBWWQsSUFBSSxDQUFDZSxJQUFqQixFQUF1QlgsR0FBdkIsQ0FBMkIsVUFBQ1ksSUFBRCxFQUFrQjtBQUMzQyxVQUFJLENBQUNQLE1BQU0sQ0FBQ1IsUUFBUCxDQUFnQkQsSUFBSSxDQUFDZSxJQUFMLENBQVVDLElBQVYsRUFBb0NDLEtBQXBELENBQUwsRUFBaUU7QUFDL0QsWUFBTUMsSUFBSSxHQUFHbEIsSUFBSSxDQUFDZSxJQUFMLENBQVVDLElBQVYsRUFBb0NDLEtBQXBDLENBQTBDRSxPQUExQyxDQUFrRCxHQUFsRCxFQUF1RCxJQUF2RCxDQUFiO0FBQ0FSLG1CQUFXLENBQUNSLElBQVosQ0FBaUJpQixNQUFNLENBQUNGLElBQUQsQ0FBdkI7QUFDQVQsY0FBTSxDQUFDTixJQUFQLENBQVlILElBQUksQ0FBQ2UsSUFBTCxDQUFVQyxJQUFWLEVBQW9DQyxLQUFoRDtBQUNEO0FBQ0YsS0FORDtBQU9ELEdBUkQsRUFQMkUsQ0FpQjNFOztBQUNBTixhQUFXLENBQUNVLElBQVosQ0FBaUIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVUQsQ0FBQyxHQUFHQyxDQUFkO0FBQUEsR0FBakI7QUFDQVosYUFBVyxDQUFDWixPQUFaLENBQW9CLFVBQUNrQixLQUFELEVBQVc7QUFDN0IsUUFBTUMsSUFBSSxHQUFHTSxNQUFNLENBQUNQLEtBQUQsQ0FBTixDQUFjRSxPQUFkLENBQXNCLElBQXRCLEVBQTRCLEdBQTVCLENBQWI7QUFDQVQsYUFBUyxDQUFDUCxJQUFWLENBQWVlLElBQWY7QUFDRCxHQUhELEVBbkIyRSxDQXdCM0U7O0FBQ0FSLFdBQVMsQ0FBQ04sR0FBVixDQUFjLFVBQUNhLEtBQUQsRUFBbUI7QUFDL0JMLGNBQVUsQ0FBQ1QsSUFBWCxDQUFnQjtBQUNkRSxTQUFHLEVBQUVZLEtBRFM7QUFFZFgsVUFBSSxFQUFFVyxLQUZRO0FBR2RWLFdBQUssRUFBRVU7QUFITyxLQUFoQjtBQUtELEdBTkQ7QUFPQSxTQUFPTCxVQUFQO0FBQ0QsQ0FqQ00sQyxDQW1DUDs7QUFDTyxJQUFNYSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQWdDO0FBQzdELE1BQU1DLGdCQUEwQyxHQUFHLEVBQW5EO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLENBQUMsT0FBRCxFQUFVLFVBQVYsRUFBc0IsUUFBdEIsRUFBZ0MsUUFBaEMsRUFBMEMsVUFBMUMsQ0FBckI7QUFDQUEsY0FBWSxDQUFDdkIsR0FBYixDQUFpQixVQUFDYSxLQUFELEVBQW1CO0FBQ2xDUyxvQkFBZ0IsQ0FBQ3ZCLElBQWpCLENBQXNCO0FBQ3BCRSxTQUFHLEVBQUVZLEtBRGU7QUFFcEJYLFVBQUksRUFBRVcsS0FGYztBQUdwQlYsV0FBSyxFQUFFVTtBQUhhLEtBQXRCO0FBS0QsR0FORDtBQU9BLFNBQU9TLGdCQUFQO0FBQ0QsQ0FYTSxDLENBYVA7O0FBQ08sSUFBTUUsY0FBc0MsR0FBRztBQUNwREMsTUFBSSxFQUFFLEVBRDhDO0FBRXBEQyxRQUFNLEVBQUUsRUFGNEM7QUFHcERiLE9BQUssRUFBRSxFQUg2QztBQUlwRGYsT0FBSyxFQUFFLEVBSjZDO0FBS3BENkIsWUFBVSxFQUFFO0FBTHdDLENBQS9DIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW1haS4xYTZmZTFhMjE1ODVlNTVhMWE1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cbmltcG9ydCB7IE1NU29uZ1JlY29yZCwgTU1Tb25nRGF0YSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuLy8gR2VucmUgbGlzdCBmb3IgbWFpbWFpLlxuZXhwb3J0IGNvbnN0IGdldEdlbnJlcyA9IChsaXN0OiBNTVNvbmdSZWNvcmRbXSk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9PiB7XG4gIGNvbnN0IGdlbnJlczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgZ2VucmVMaXN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10gPSBbXTtcblxuICAvLyBNYXAgb3V0IGRyb3Bkb3duIGZyb20gbGlzdCBvZiB1bmlxdWUgZ2VucmVzLlxuICBsaXN0LmZvckVhY2goKHNvbmc6IE1NU29uZ1JlY29yZCkgPT4ge1xuICAgIGlmICghZ2VucmVzLmluY2x1ZGVzKHNvbmcuZ2VucmUpKSB7XG4gICAgICBnZW5yZXMucHVzaChzb25nLmdlbnJlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGdlbnJlcy5tYXAoKGdlbnJlOiBzdHJpbmcpID0+IHtcbiAgICBnZW5yZUxpc3QucHVzaCh7XG4gICAgICBrZXk6IGdlbnJlLFxuICAgICAgdGV4dDogZ2VucmUsXG4gICAgICB2YWx1ZTogZ2VucmUsXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZ2VucmVMaXN0O1xufTtcblxuLy8gTGV2ZWwgbGlzdCBmb3IgbWFpbWFpLlxuZXhwb3J0IGNvbnN0IGdldExldmVscyA9IChsaXN0OiBNTVNvbmdSZWNvcmRbXSk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9PiB7XG4gIGNvbnN0IGxldmVsczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3Qgc3RyTGV2ZWxzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBmbG9hdExldmVsczogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgbGV2ZWxzTGlzdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0gW107XG5cbiAgLy8gR2V0IGEgbGlzdCBvZiB1bmlxdWUgbGV2ZWxzIGFuZCB0dXJuIGFueSAnWCsnIGludG8gJ1guNSdzLlxuICBsaXN0LmZvckVhY2goKHNvbmc6IE1NU29uZ1JlY29yZCkgPT4ge1xuICAgIE9iamVjdC5rZXlzKHNvbmcuZGF0YSkubWFwKChkaWZmOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghbGV2ZWxzLmluY2x1ZGVzKHNvbmcuZGF0YVtkaWZmIGFzIGtleW9mIE1NU29uZ0RhdGFdLmxldmVsKSkge1xuICAgICAgICBjb25zdCB0ZW1wID0gc29uZy5kYXRhW2RpZmYgYXMga2V5b2YgTU1Tb25nRGF0YV0ubGV2ZWwucmVwbGFjZSgnKycsICcuNScpO1xuICAgICAgICBmbG9hdExldmVscy5wdXNoKE51bWJlcih0ZW1wKSk7XG4gICAgICAgIGxldmVscy5wdXNoKHNvbmcuZGF0YVtkaWZmIGFzIGtleW9mIE1NU29uZ0RhdGFdLmxldmVsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gU29ydCB0aGUgbmV3IGFycmF5IG9mIGZsb2F0cywgdGhlbiB0dXJuIGFsbCBvZiB0aGVtIGJhY2sgaW50byBzdGFuZGFyZCBsZXZlbHMuXG4gIGZsb2F0TGV2ZWxzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgZmxvYXRMZXZlbHMuZm9yRWFjaCgobGV2ZWwpID0+IHtcbiAgICBjb25zdCB0ZW1wID0gU3RyaW5nKGxldmVsKS5yZXBsYWNlKCcuNScsICcrJyk7XG4gICAgc3RyTGV2ZWxzLnB1c2godGVtcCk7XG4gIH0pO1xuXG4gIC8vIE1hcCBvdXQgZHJvcGRvd24gZnJvbSBsaXN0IG9mIGxldmVscy5cbiAgc3RyTGV2ZWxzLm1hcCgobGV2ZWw6IHN0cmluZykgPT4ge1xuICAgIGxldmVsc0xpc3QucHVzaCh7XG4gICAgICBrZXk6IGxldmVsLFxuICAgICAgdGV4dDogbGV2ZWwsXG4gICAgICB2YWx1ZTogbGV2ZWwsXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbGV2ZWxzTGlzdDtcbn07XG5cbi8vIEdldCBkaWZmaWN1bHRpZXMuXG5leHBvcnQgY29uc3QgZ2V0RGlmZmljdWx0aWVzID0gKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9PiB7XG4gIGNvbnN0IGRpZmZpY3VsdGllc0xpc3Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9IFtdO1xuICBjb25zdCBkaWZmaWN1bHRpZXMgPSBbJ0JBU0lDJywgJ0FEVkFOQ0VEJywgJ0VYUEVSVCcsICdNQVNURVInLCAnUkVNQVNURVInXTtcbiAgZGlmZmljdWx0aWVzLm1hcCgobGV2ZWw6IHN0cmluZykgPT4ge1xuICAgIGRpZmZpY3VsdGllc0xpc3QucHVzaCh7XG4gICAgICBrZXk6IGxldmVsLFxuICAgICAgdGV4dDogbGV2ZWwsXG4gICAgICB2YWx1ZTogbGV2ZWwsXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZGlmZmljdWx0aWVzTGlzdDtcbn1cblxuLy8gRGVmYXVsdCBvcHRpb25zLlxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBuYW1lOiAnJyxcbiAgYXJ0aXN0OiAnJyxcbiAgbGV2ZWw6ICcnLFxuICBnZW5yZTogJycsXG4gIGRpZmZpY3VsdHk6ICcnLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=