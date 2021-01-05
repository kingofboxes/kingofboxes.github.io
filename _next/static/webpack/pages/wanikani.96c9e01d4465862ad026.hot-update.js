webpackHotUpdate_N_E("pages/wanikani",{

/***/ "./components/public/WaniKani/WaniKani.tsx":
/*!*************************************************!*\
  !*** ./components/public/WaniKani/WaniKani.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_optimized_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-optimized-image */ "./node_modules/react-optimized-image/lib/index.js");
/* harmony import */ var react_optimized_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_optimized_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_avatar_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/avatar.png */ "./assets/avatar.png");
/* harmony import */ var _assets_avatar_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_avatar_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_PublicShell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/PublicShell */ "./components/common/PublicShell.tsx");
/* harmony import */ var _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styling/WaniKani.module.css */ "./components/styling/WaniKani.module.css");
/* harmony import */ var _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "/home/kingofboxes/projects/website-project/components/public/WaniKani/WaniKani.tsx",
    _this = undefined;






 // Create Axios instance.

var api = axios__WEBPACK_IMPORTED_MODULE_4___default.a.create({
  baseURL: 'http://localhost:4000/'
});

var WaniKani = function WaniKani(data) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_common_PublicShell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "WaniKani Progression | kingofboxes's Website",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.wkcontainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.profile,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.avatar,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_optimized_image__WEBPACK_IMPORTED_MODULE_5__["Img"], {
              src: _assets_avatar_png__WEBPACK_IMPORTED_MODULE_6___default.a,
              sizes: [128],
              webp: true,
              rawSrc: {
                fallback: {
                  128: {
                    1: __webpack_require__(/*! ../../../assets/avatar.png?url&width=128 */ "./assets/avatar.png?url&width=128")
                  }
                },
                webp: {
                  128: {
                    1: __webpack_require__(/*! ../../../assets/avatar.png?webp&width=128 */ "./assets/avatar.png?webp&width=128")
                  }
                }
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.wrapper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.progress,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                href: data.user.profile,
                children: data.user.username
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                children: ["Level: ", data.user.level]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.summary,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                children: ["Date Started: ", data.user.date_started]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                children: ["Last Updated: ", data.user.time_updated]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                children: ["Items learnt: ", data.items.radical, " radicals, ", data.items.kanji, " kanji,", ' ', data.items.vocabulary, " vocabulary.", ' ']
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
}; // Fetch data before load.


_c = WaniKani;
WaniKani.getInitialProps = /*#__PURE__*/Object(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return api.get('/wanikani');

        case 2:
          res = _context.sent;
          data = res.data;
          return _context.abrupt("return", data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (WaniKani);

var _c;

$RefreshReg$(_c, "WaniKani");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvV2FuaUthbmkvV2FuaUthbmkudHN4Il0sIm5hbWVzIjpbImFwaSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIldhbmlLYW5pIiwiZGF0YSIsInN0eWxlcyIsImNvbnRhaW5lciIsIndrY29udGFpbmVyIiwicHJvZmlsZSIsImF2YXRhciIsIkF2YXRhciIsIndyYXBwZXIiLCJwcm9ncmVzcyIsInVzZXIiLCJ1c2VybmFtZSIsImxldmVsIiwic3VtbWFyeSIsImRhdGVfc3RhcnRlZCIsInRpbWVfdXBkYXRlZCIsIml0ZW1zIiwicmFkaWNhbCIsImthbmppIiwidm9jYWJ1bGFyeSIsImdldEluaXRpYWxQcm9wcyIsImdldCIsInJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUdBO0FBRUE7Q0FJQTs7QUFDQSxJQUFNQSxHQUFrQixHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDdENDLFNBQU8sRUFBRTtBQUQ2QixDQUFiLENBQTNCOztBQUlBLElBQU1DLFFBQTZCLEdBQUcsU0FBaENBLFFBQWdDLENBQUNDLElBQUQsRUFBcUI7QUFDekQsc0JBQ0UscUVBQUMsMkRBQUQ7QUFBYSxTQUFLLEVBQUMsOENBQW5CO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVDLG1FQUFNLENBQUNDLFNBQXZCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFRCxtRUFBTSxDQUFDRSxXQUF2QjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRUYsbUVBQU0sQ0FBQ0csT0FBdkI7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUVILG1FQUFNLENBQUNJLE1BQXZCO0FBQUEsbUNBQ0UscUVBQUMseURBQUQ7QUFBSyxpQkFBRyxFQUFFQyx5REFBVjtBQUFrQixtQkFBSyxFQUFFLENBQUMsR0FBRCxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFLLHFCQUFTLEVBQUVMLG1FQUFNLENBQUNNLE9BQXZCO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFFTixtRUFBTSxDQUFDTyxRQUF2QjtBQUFBLHNDQUNFO0FBQUcsb0JBQUksRUFBRVIsSUFBSSxDQUFDUyxJQUFMLENBQVVMLE9BQW5CO0FBQUEsMEJBQTZCSixJQUFJLENBQUNTLElBQUwsQ0FBVUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUEsc0NBQVdWLElBQUksQ0FBQ1MsSUFBTCxDQUFVRSxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBS0U7QUFBSyx1QkFBUyxFQUFFVixtRUFBTSxDQUFDVyxPQUF2QjtBQUFBLHNDQUNFO0FBQUEsNkNBQWtCWixJQUFJLENBQUNTLElBQUwsQ0FBVUksWUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBQSw2Q0FBa0JiLElBQUksQ0FBQ1MsSUFBTCxDQUFVSyxZQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsZUFHRTtBQUFBLDZDQUNpQmQsSUFBSSxDQUFDZSxLQUFMLENBQVdDLE9BRDVCLGlCQUNnRGhCLElBQUksQ0FBQ2UsS0FBTCxDQUFXRSxLQUQzRCxhQUN5RSxHQUR6RSxFQUVHakIsSUFBSSxDQUFDZSxLQUFMLENBQVdHLFVBRmQsa0JBRXNDLEdBRnRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkJELENBNUJELEMsQ0E4QkE7OztLQTlCTW5CLFE7QUErQk5BLFFBQVEsQ0FBQ29CLGVBQVQsK1NBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1B4QixHQUFHLENBQUN5QixHQUFKLENBQVEsV0FBUixDQURPOztBQUFBO0FBQ25CQyxhQURtQjtBQUVuQnJCLGNBRm1CLEdBRURxQixHQUFHLENBQUNyQixJQUZIO0FBQUEsMkNBR2xCQSxJQUhrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUEzQjtBQU1lRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93YW5pa2FuaS45NmM5ZTAxZDQ0NjU4NjJhZDAyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEltZyB9IGZyb20gJ3JlYWN0LW9wdGltaXplZC1pbWFnZSc7XG5cbmltcG9ydCB7IFdLUHJvZmlsZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2F2YXRhci5wbmcnO1xuXG5pbXBvcnQgUHVibGljU2hlbGwgZnJvbSAnLi4vLi4vY29tbW9uL1B1YmxpY1NoZWxsJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsaW5nL1dhbmlLYW5pLm1vZHVsZS5jc3MnO1xuXG4vLyBDcmVhdGUgQXhpb3MgaW5zdGFuY2UuXG5jb25zdCBhcGk6IEF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDo0MDAwLycsXG59KTtcblxuY29uc3QgV2FuaUthbmk6IE5leHRQYWdlPFdLUHJvZmlsZT4gPSAoZGF0YTogV0tQcm9maWxlKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFB1YmxpY1NoZWxsIHRpdGxlPVwiV2FuaUthbmkgUHJvZ3Jlc3Npb24gfCBraW5nb2Zib3hlcydzIFdlYnNpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53a2NvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cbiAgICAgICAgICAgICAgPEltZyBzcmM9e0F2YXRhcn0gc2l6ZXM9e1sxMjhdfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtkYXRhLnVzZXIucHJvZmlsZX0+e2RhdGEudXNlci51c2VybmFtZX08L2E+XG4gICAgICAgICAgICAgICAgPHA+TGV2ZWw6IHtkYXRhLnVzZXIubGV2ZWx9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5fT5cbiAgICAgICAgICAgICAgICA8cD5EYXRlIFN0YXJ0ZWQ6IHtkYXRhLnVzZXIuZGF0ZV9zdGFydGVkfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5MYXN0IFVwZGF0ZWQ6IHtkYXRhLnVzZXIudGltZV91cGRhdGVkfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIEl0ZW1zIGxlYXJudDoge2RhdGEuaXRlbXMucmFkaWNhbH0gcmFkaWNhbHMsIHtkYXRhLml0ZW1zLmthbmppfSBrYW5qaSx7JyAnfVxuICAgICAgICAgICAgICAgICAge2RhdGEuaXRlbXMudm9jYWJ1bGFyeX0gdm9jYWJ1bGFyeS57JyAnfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1B1YmxpY1NoZWxsPlxuICApO1xufTtcblxuLy8gRmV0Y2ggZGF0YSBiZWZvcmUgbG9hZC5cbldhbmlLYW5pLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCgnL3dhbmlrYW5pJyk7XG4gIGNvbnN0IGRhdGE6IFdLUHJvZmlsZSA9IHJlcy5kYXRhO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhbmlLYW5pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==