webpackHotUpdate_N_E("pages/maimai",{

/***/ "./components/public/Maimai/Maimai.constants.ts":
/*!******************************************************!*\
  !*** ./components/public/Maimai/Maimai.constants.ts ***!
  \******************************************************/
/*! exports provided: genreList, getGenres, defaultOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genreList", function() { return genreList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGenres", function() { return getGenres; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
// Genre list for maimai.
var genreList = [];
var genres = ['POPS & ANIME', 'niconico ＆ VOCALOID™', '東方Project', 'GAME＆VARIETY', 'maimai', 'オンゲキ＆CHUNITHM'];
genres.map(function (genre) {
  genreList.push({
    key: genre,
    text: genre,
    value: genre
  });
});
var getGenres = function getGenres(list) {
  var genres = [];
  list.forEach(function (song) {
    if (!genres.includes(song.genre)) {
      genres.push(song.genre);
    }
  });
  var genreList = [];
  genres.map(function (genre) {
    genreList.push({
      key: genre,
      text: genre,
      value: genre
    });
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS5jb25zdGFudHMudHMiXSwibmFtZXMiOlsiZ2VucmVMaXN0IiwiZ2VucmVzIiwibWFwIiwiZ2VucmUiLCJwdXNoIiwia2V5IiwidGV4dCIsInZhbHVlIiwiZ2V0R2VucmVzIiwibGlzdCIsImZvckVhY2giLCJzb25nIiwiaW5jbHVkZXMiLCJkZWZhdWx0T3B0aW9ucyIsIm5hbWUiLCJhcnRpc3QiLCJsZXZlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxJQUFNQSxTQUFtQyxHQUFHLEVBQTVDO0FBRVAsSUFBTUMsTUFBZ0IsR0FBRyxDQUN2QixjQUR1QixFQUV2QixzQkFGdUIsRUFHdkIsV0FIdUIsRUFJdkIsY0FKdUIsRUFLdkIsUUFMdUIsRUFNdkIsZUFOdUIsQ0FBekI7QUFTQUEsTUFBTSxDQUFDQyxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFtQjtBQUM1QkgsV0FBUyxDQUFDSSxJQUFWLENBQWU7QUFDYkMsT0FBRyxFQUFFRixLQURRO0FBRWJHLFFBQUksRUFBRUgsS0FGTztBQUdiSSxTQUFLLEVBQUVKO0FBSE0sR0FBZjtBQUtELENBTkQ7QUFRTyxJQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQVU7QUFDakMsTUFBTVIsTUFBTSxHQUFHLEVBQWY7QUFDQVEsTUFBSSxDQUFDQyxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ3JCLFFBQUksQ0FBQ1YsTUFBTSxDQUFDVyxRQUFQLENBQWdCRCxJQUFJLENBQUNSLEtBQXJCLENBQUwsRUFBa0M7QUFDaENGLFlBQU0sQ0FBQ0csSUFBUCxDQUFZTyxJQUFJLENBQUNSLEtBQWpCO0FBQ0Q7QUFDRixHQUpEO0FBS0EsTUFBTUgsU0FBUyxHQUFHLEVBQWxCO0FBQ0FDLFFBQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBbUI7QUFDNUJILGFBQVMsQ0FBQ0ksSUFBVixDQUFlO0FBQ2JDLFNBQUcsRUFBRUYsS0FEUTtBQUViRyxVQUFJLEVBQUVILEtBRk87QUFHYkksV0FBSyxFQUFFSjtBQUhNLEtBQWY7QUFLRCxHQU5EO0FBT0QsQ0FmTSxDLENBaUJQOztBQUNPLElBQU1VLGNBQXNDLEdBQUc7QUFDcERDLE1BQUksRUFBRSxFQUQ4QztBQUVwREMsUUFBTSxFQUFFLEVBRjRDO0FBR3BEQyxPQUFLLEVBQUUsRUFINkM7QUFJcERiLE9BQUssRUFBRTtBQUo2QyxDQUEvQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWltYWkuMTE1Y2RlYzY2ZjJiNDE2MjgzZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbnJlIGxpc3QgZm9yIG1haW1haS5cbmV4cG9ydCBjb25zdCBnZW5yZUxpc3Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9IFtdO1xuXG5jb25zdCBnZW5yZXM6IHN0cmluZ1tdID0gW1xuICAnUE9QUyAmIEFOSU1FJyxcbiAgJ25pY29uaWNvIO+8hiBWT0NBTE9JROKEoicsXG4gICfmnbHmlrlQcm9qZWN0JyxcbiAgJ0dBTUXvvIZWQVJJRVRZJyxcbiAgJ21haW1haScsXG4gICfjgqrjg7PjgrLjgq3vvIZDSFVOSVRITScsXG5dO1xuXG5nZW5yZXMubWFwKChnZW5yZTogc3RyaW5nKSA9PiB7XG4gIGdlbnJlTGlzdC5wdXNoKHtcbiAgICBrZXk6IGdlbnJlLFxuICAgIHRleHQ6IGdlbnJlLFxuICAgIHZhbHVlOiBnZW5yZSxcbiAgfSk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGdldEdlbnJlcyA9IChsaXN0KSA9PiB7XG4gIGNvbnN0IGdlbnJlcyA9IFtdO1xuICBsaXN0LmZvckVhY2goKHNvbmcpID0+IHtcbiAgICBpZiAoIWdlbnJlcy5pbmNsdWRlcyhzb25nLmdlbnJlKSkge1xuICAgICAgZ2VucmVzLnB1c2goc29uZy5nZW5yZSk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgZ2VucmVMaXN0ID0gW107XG4gIGdlbnJlcy5tYXAoKGdlbnJlOiBzdHJpbmcpID0+IHtcbiAgICBnZW5yZUxpc3QucHVzaCh7XG4gICAgICBrZXk6IGdlbnJlLFxuICAgICAgdGV4dDogZ2VucmUsXG4gICAgICB2YWx1ZTogZ2VucmUsXG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gRGVmYXVsdCBvcHRpb25zLlxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBuYW1lOiAnJyxcbiAgYXJ0aXN0OiAnJyxcbiAgbGV2ZWw6ICcnLFxuICBnZW5yZTogJycsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==