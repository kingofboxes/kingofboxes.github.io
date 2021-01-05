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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        children: "This page is to show off my progress for WaniKani!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
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
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.progress,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              href: data.profile,
              children: data.username
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["Level: ", data.level]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.time,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["Date Started: ", data.date_started]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["Last Updated: ", data.time_updated]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
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
          console.log(data);
          return _context.abrupt("return", {
            props: {
              data: data
            }
          });

        case 6:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvV2FuaUthbmkvV2FuaUthbmkudHN4Il0sIm5hbWVzIjpbImFwaSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIldhbmlLYW5pIiwiZGF0YSIsInN0eWxlcyIsImNvbnRhaW5lciIsInByb2ZpbGUiLCJhdmF0YXIiLCJBdmF0YXIiLCJ3cmFwcGVyIiwicHJvZ3Jlc3MiLCJ1c2VybmFtZSIsImxldmVsIiwidGltZSIsImRhdGVfc3RhcnRlZCIsInRpbWVfdXBkYXRlZCIsImdldEluaXRpYWxQcm9wcyIsImdldCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUdBO0FBRUE7Q0FJQTs7QUFDQSxJQUFNQSxHQUFrQixHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDdENDLFNBQU8sRUFBRTtBQUQ2QixDQUFiLENBQTNCOztBQUlBLElBQU1DLFFBQTZCLEdBQUcsU0FBaENBLFFBQWdDLENBQUNDLElBQUQsRUFBcUI7QUFDekQsc0JBQ0UscUVBQUMsMkRBQUQ7QUFBYSxTQUFLLEVBQUMsOENBQW5CO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVDLG1FQUFNLENBQUNDLFNBQXZCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUssaUJBQVMsRUFBRUQsbUVBQU0sQ0FBQ0UsT0FBdkI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVGLG1FQUFNLENBQUNHLE1BQXZCO0FBQUEsaUNBQ0UscUVBQUMseURBQUQ7QUFBSyxlQUFHLEVBQUVDLHlEQUFWO0FBQWtCLGlCQUFLLEVBQUUsQ0FBQyxHQUFELENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUssbUJBQVMsRUFBRUosbUVBQU0sQ0FBQ0ssT0FBdkI7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUVMLG1FQUFNLENBQUNNLFFBQXZCO0FBQUEsb0NBQ0U7QUFBRyxrQkFBSSxFQUFFUCxJQUFJLENBQUNHLE9BQWQ7QUFBQSx3QkFBd0JILElBQUksQ0FBQ1E7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsb0NBQVdSLElBQUksQ0FBQ1MsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUsscUJBQVMsRUFBRVIsbUVBQU0sQ0FBQ1MsSUFBdkI7QUFBQSxvQ0FDRTtBQUFBLDJDQUFrQlYsSUFBSSxDQUFDVyxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLDJDQUFrQlgsSUFBSSxDQUFDWSxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0F2QkQsQyxDQXlCQTs7O0tBekJNYixRO0FBMEJOQSxRQUFRLENBQUNjLGVBQVQsK1NBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1BsQixHQUFHLENBQUNtQixHQUFKLENBQVEsV0FBUixDQURPOztBQUFBO0FBQ25CQyxhQURtQjtBQUVuQmYsY0FGbUIsR0FFRGUsR0FBRyxDQUFDZixJQUZIO0FBSXpCZ0IsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZakIsSUFBWjtBQUp5QiwyQ0FNbEI7QUFDTGtCLGlCQUFLLEVBQUU7QUFBRWxCLGtCQUFJLEVBQUpBO0FBQUY7QUFERixXQU5rQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUEzQjtBQVdlRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93YW5pa2FuaS4wYjBiNDAwODMzMWJlNzdhNzIzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEltZyB9IGZyb20gJ3JlYWN0LW9wdGltaXplZC1pbWFnZSc7XG5cbmltcG9ydCB7IFdLUHJvZmlsZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2F2YXRhci5wbmcnO1xuXG5pbXBvcnQgUHVibGljU2hlbGwgZnJvbSAnLi4vLi4vY29tbW9uL1B1YmxpY1NoZWxsJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsaW5nL1dhbmlLYW5pLm1vZHVsZS5jc3MnO1xuXG4vLyBDcmVhdGUgQXhpb3MgaW5zdGFuY2UuXG5jb25zdCBhcGk6IEF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDo0MDAwLycsXG59KTtcblxuY29uc3QgV2FuaUthbmk6IE5leHRQYWdlPFdLUHJvZmlsZT4gPSAoZGF0YTogV0tQcm9maWxlKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFB1YmxpY1NoZWxsIHRpdGxlPVwiV2FuaUthbmkgUHJvZ3Jlc3Npb24gfCBraW5nb2Zib3hlcydzIFdlYnNpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGgxPlRoaXMgcGFnZSBpcyB0byBzaG93IG9mZiBteSBwcm9ncmVzcyBmb3IgV2FuaUthbmkhPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XG4gICAgICAgICAgICA8SW1nIHNyYz17QXZhdGFyfSBzaXplcz17WzEyOF19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxuICAgICAgICAgICAgICA8YSBocmVmPXtkYXRhLnByb2ZpbGV9PntkYXRhLnVzZXJuYW1lfTwvYT5cbiAgICAgICAgICAgICAgPHA+TGV2ZWw6IHtkYXRhLmxldmVsfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cbiAgICAgICAgICAgICAgPHA+RGF0ZSBTdGFydGVkOiB7ZGF0YS5kYXRlX3N0YXJ0ZWR9PC9wPlxuICAgICAgICAgICAgICA8cD5MYXN0IFVwZGF0ZWQ6IHtkYXRhLnRpbWVfdXBkYXRlZH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1B1YmxpY1NoZWxsPlxuICApO1xufTtcblxuLy8gRmV0Y2ggZGF0YSBiZWZvcmUgbG9hZC5cbldhbmlLYW5pLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCgnL3dhbmlrYW5pJyk7XG4gIGNvbnN0IGRhdGE6IFdLUHJvZmlsZSA9IHJlcy5kYXRhO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZGF0YSB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2FuaUthbmk7XG4iXSwic291cmNlUm9vdCI6IiJ9