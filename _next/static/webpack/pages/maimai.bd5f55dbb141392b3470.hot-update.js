webpackHotUpdate_N_E("pages/maimai",{

/***/ "./components/public/Maimai/Maimai.constants.ts":
/*!******************************************************!*\
  !*** ./components/public/Maimai/Maimai.constants.ts ***!
  \******************************************************/
/*! exports provided: genreList, defaultOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genreList", function() { return genreList; });
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
}); // Default options.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS5jb25zdGFudHMudHMiXSwibmFtZXMiOlsiZ2VucmVMaXN0IiwiZ2VucmVzIiwibWFwIiwiZ2VucmUiLCJwdXNoIiwia2V5IiwidGV4dCIsInZhbHVlIiwiZGVmYXVsdE9wdGlvbnMiLCJuYW1lIiwiYXJ0aXN0IiwibGV2ZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLElBQU1BLFNBQW1DLEdBQUcsRUFBNUM7QUFFUCxJQUFNQyxNQUFnQixHQUFHLENBQ3ZCLGNBRHVCLEVBRXZCLHNCQUZ1QixFQUd2QixXQUh1QixFQUl2QixjQUp1QixFQUt2QixRQUx1QixFQU12QixlQU51QixDQUF6QjtBQVNBQSxNQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQW1CO0FBQzVCSCxXQUFTLENBQUNJLElBQVYsQ0FBZTtBQUNiQyxPQUFHLEVBQUVGLEtBRFE7QUFFYkcsUUFBSSxFQUFFSCxLQUZPO0FBR2JJLFNBQUssRUFBRUo7QUFITSxHQUFmO0FBS0QsQ0FORCxFLENBUUE7O0FBQ08sSUFBTUssY0FBc0MsR0FBRztBQUNwREMsTUFBSSxFQUFFLEVBRDhDO0FBRXBEQyxRQUFNLEVBQUUsRUFGNEM7QUFHcERDLE9BQUssRUFBRSxFQUg2QztBQUlwRFIsT0FBSyxFQUFFO0FBSjZDLENBQS9DIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW1haS5iZDVmNTVkYmIxNDEzOTJiMzQ3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VucmUgbGlzdCBmb3IgbWFpbWFpLlxuZXhwb3J0IGNvbnN0IGdlbnJlTGlzdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0gW107XG5cbmNvbnN0IGdlbnJlczogc3RyaW5nW10gPSBbXG4gICdQT1BTICYgQU5JTUUnLFxuICAnbmljb25pY28g77yGIFZPQ0FMT0lE4oSiJyxcbiAgJ+adseaWuVByb2plY3QnLFxuICAnR0FNRe+8hlZBUklFVFknLFxuICAnbWFpbWFpJyxcbiAgJ+OCquODs+OCsuOCre+8hkNIVU5JVEhNJyxcbl07XG5cbmdlbnJlcy5tYXAoKGdlbnJlOiBzdHJpbmcpID0+IHtcbiAgZ2VucmVMaXN0LnB1c2goe1xuICAgIGtleTogZ2VucmUsXG4gICAgdGV4dDogZ2VucmUsXG4gICAgdmFsdWU6IGdlbnJlLFxuICB9KTtcbn0pO1xuXG4vLyBEZWZhdWx0IG9wdGlvbnMuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIG5hbWU6ICcnLFxuICBhcnRpc3Q6ICcnLFxuICBsZXZlbDogJycsXG4gIGdlbnJlOiAnJyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9