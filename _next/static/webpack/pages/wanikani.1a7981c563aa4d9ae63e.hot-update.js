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

var WaniKani = function WaniKani(props) {
  var username = props.username,
      level = props.level,
      profile = props.profile,
      date_started = props.date_started,
      time_updated = props.time_updated;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_common_PublicShell__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "WaniKani Progression | kingofboxes's Website",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        children: "This page is to show off my progress for WaniKani!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
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
            lineNumber: 26,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.progress,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              href: profile,
              children: username
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["Level: ", level]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.time,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["Date Started: ", date_started]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["Last Updated: ", time_updated]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
            username: 'kingofboxes',
            level: 3,
            profile: 'a',
            date_started: 'b',
            time_updated: 'c'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvV2FuaUthbmkvV2FuaUthbmkudHN4Il0sIm5hbWVzIjpbImFwaSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIldhbmlLYW5pIiwicHJvcHMiLCJ1c2VybmFtZSIsImxldmVsIiwicHJvZmlsZSIsImRhdGVfc3RhcnRlZCIsInRpbWVfdXBkYXRlZCIsInN0eWxlcyIsImNvbnRhaW5lciIsImF2YXRhciIsIkF2YXRhciIsIndyYXBwZXIiLCJwcm9ncmVzcyIsInRpbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXQiLCJyZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUdBO0FBRUE7Q0FJQTs7QUFDQSxJQUFNQSxHQUFrQixHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDdENDLFNBQU8sRUFBRTtBQUQ2QixDQUFiLENBQTNCOztBQUlBLElBQU1DLFFBQTJCLEdBQUcsU0FBOUJBLFFBQThCLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ3JDQyxRQURxQyxHQUNvQkQsS0FEcEIsQ0FDckNDLFFBRHFDO0FBQUEsTUFDM0JDLEtBRDJCLEdBQ29CRixLQURwQixDQUMzQkUsS0FEMkI7QUFBQSxNQUNwQkMsT0FEb0IsR0FDb0JILEtBRHBCLENBQ3BCRyxPQURvQjtBQUFBLE1BQ1hDLFlBRFcsR0FDb0JKLEtBRHBCLENBQ1hJLFlBRFc7QUFBQSxNQUNHQyxZQURILEdBQ29CTCxLQURwQixDQUNHSyxZQURIO0FBRTdDLHNCQUNFLHFFQUFDLDJEQUFEO0FBQWEsU0FBSyxFQUFDLDhDQUFuQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQyxtRUFBTSxDQUFDQyxTQUF2QjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUVELG1FQUFNLENBQUNILE9BQXZCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFRyxtRUFBTSxDQUFDRSxNQUF2QjtBQUFBLGlDQUNFLHFFQUFDLHlEQUFEO0FBQUssZUFBRyxFQUFFQyx5REFBVjtBQUFrQixpQkFBSyxFQUFFLENBQUMsR0FBRCxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUVILG1FQUFNLENBQUNJLE9BQXZCO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFFSixtRUFBTSxDQUFDSyxRQUF2QjtBQUFBLG9DQUNFO0FBQUcsa0JBQUksRUFBRVIsT0FBVDtBQUFBLHdCQUFtQkY7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsb0NBQVdDLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUsscUJBQVMsRUFBRUksbUVBQU0sQ0FBQ00sSUFBdkI7QUFBQSxvQ0FDRTtBQUFBLDJDQUFrQlIsWUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQSwyQ0FBa0JDLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNCRCxDQXhCRCxDLENBMEJBOzs7S0ExQk1OLFE7QUEyQk5BLFFBQVEsQ0FBQ2MsZUFBVCwrU0FBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUGxCLEdBQUcsQ0FBQ21CLEdBQUosQ0FBUSxXQUFSLENBRE87O0FBQUE7QUFDbkJDLGFBRG1CO0FBRW5CQyxjQUZtQixHQUVaRCxHQUFHLENBQUNDLElBRlE7QUFJekJDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUp5QiwyQ0FNbEI7QUFDTGYsb0JBQVEsRUFBRSxhQURMO0FBRUxDLGlCQUFLLEVBQUUsQ0FGRjtBQUdMQyxtQkFBTyxFQUFFLEdBSEo7QUFJTEMsd0JBQVksRUFBRSxHQUpUO0FBS0xDLHdCQUFZLEVBQUU7QUFMVCxXQU5rQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUEzQjtBQWVlTix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93YW5pa2FuaS4xYTc5ODFjNTYzYWE0ZDlhZTYzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEltZyB9IGZyb20gJ3JlYWN0LW9wdGltaXplZC1pbWFnZSc7XG5cbmltcG9ydCB7IFdLU3RhdHMgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9hdmF0YXIucG5nJztcblxuaW1wb3J0IFB1YmxpY1NoZWxsIGZyb20gJy4uLy4uL2NvbW1vbi9QdWJsaWNTaGVsbCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGluZy9XYW5pS2FuaS5tb2R1bGUuY3NzJztcblxuLy8gQ3JlYXRlIEF4aW9zIGluc3RhbmNlLlxuY29uc3QgYXBpOiBBeGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC8nLFxufSk7XG5cbmNvbnN0IFdhbmlLYW5pOiBOZXh0UGFnZTxXS1N0YXRzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHVzZXJuYW1lLCBsZXZlbCwgcHJvZmlsZSwgZGF0ZV9zdGFydGVkLCB0aW1lX3VwZGF0ZWQgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxQdWJsaWNTaGVsbCB0aXRsZT1cIldhbmlLYW5pIFByb2dyZXNzaW9uIHwga2luZ29mYm94ZXMncyBXZWJzaXRlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxoMT5UaGlzIHBhZ2UgaXMgdG8gc2hvdyBvZmYgbXkgcHJvZ3Jlc3MgZm9yIFdhbmlLYW5pITwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9PlxuICAgICAgICAgICAgPEltZyBzcmM9e0F2YXRhcn0gc2l6ZXM9e1sxMjhdfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfT5cbiAgICAgICAgICAgICAgPGEgaHJlZj17cHJvZmlsZX0+e3VzZXJuYW1lfTwvYT5cbiAgICAgICAgICAgICAgPHA+TGV2ZWw6IHtsZXZlbH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+XG4gICAgICAgICAgICAgIDxwPkRhdGUgU3RhcnRlZDoge2RhdGVfc3RhcnRlZH08L3A+XG4gICAgICAgICAgICAgIDxwPkxhc3QgVXBkYXRlZDoge3RpbWVfdXBkYXRlZH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1B1YmxpY1NoZWxsPlxuICApO1xufTtcblxuLy8gRmV0Y2ggZGF0YSBiZWZvcmUgbG9hZC5cbldhbmlLYW5pLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCgnL3dhbmlrYW5pJyk7XG4gIGNvbnN0IGRhdGEgPSByZXMuZGF0YTtcblxuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICByZXR1cm4ge1xuICAgIHVzZXJuYW1lOiAna2luZ29mYm94ZXMnLFxuICAgIGxldmVsOiAzLFxuICAgIHByb2ZpbGU6ICdhJyxcbiAgICBkYXRlX3N0YXJ0ZWQ6ICdiJyxcbiAgICB0aW1lX3VwZGF0ZWQ6ICdjJyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhbmlLYW5pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==