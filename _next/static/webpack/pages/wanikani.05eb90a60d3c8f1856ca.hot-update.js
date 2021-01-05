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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvV2FuaUthbmkvV2FuaUthbmkudHN4Il0sIm5hbWVzIjpbImFwaSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIldhbmlLYW5pIiwicHJvcHMiLCJ1c2VybmFtZSIsImxldmVsIiwicHJvZmlsZSIsImRhdGVfc3RhcnRlZCIsInRpbWVfdXBkYXRlZCIsInN0eWxlcyIsImNvbnRhaW5lciIsImF2YXRhciIsIkF2YXRhciIsIndyYXBwZXIiLCJwcm9ncmVzcyIsInRpbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXQiLCJyZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUdBO0FBRUE7Q0FJQTs7QUFDQSxJQUFNQSxHQUFrQixHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDdENDLFNBQU8sRUFBRTtBQUQ2QixDQUFiLENBQTNCOztBQUlBLElBQU1DLFFBQTZCLEdBQUcsU0FBaENBLFFBQWdDLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ3ZDQyxRQUR1QyxHQUNrQkQsS0FEbEIsQ0FDdkNDLFFBRHVDO0FBQUEsTUFDN0JDLEtBRDZCLEdBQ2tCRixLQURsQixDQUM3QkUsS0FENkI7QUFBQSxNQUN0QkMsT0FEc0IsR0FDa0JILEtBRGxCLENBQ3RCRyxPQURzQjtBQUFBLE1BQ2JDLFlBRGEsR0FDa0JKLEtBRGxCLENBQ2JJLFlBRGE7QUFBQSxNQUNDQyxZQURELEdBQ2tCTCxLQURsQixDQUNDSyxZQUREO0FBRS9DLHNCQUNFLHFFQUFDLDJEQUFEO0FBQWEsU0FBSyxFQUFDLDhDQUFuQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQyxtRUFBTSxDQUFDQyxTQUF2QjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUVELG1FQUFNLENBQUNILE9BQXZCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFRyxtRUFBTSxDQUFDRSxNQUF2QjtBQUFBLGlDQUNFLHFFQUFDLHlEQUFEO0FBQUssZUFBRyxFQUFFQyx5REFBVjtBQUFrQixpQkFBSyxFQUFFLENBQUMsR0FBRCxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUVILG1FQUFNLENBQUNJLE9BQXZCO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFFSixtRUFBTSxDQUFDSyxRQUF2QjtBQUFBLG9DQUNFO0FBQUcsa0JBQUksRUFBRVIsT0FBVDtBQUFBLHdCQUFtQkY7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsb0NBQVdDLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUsscUJBQVMsRUFBRUksbUVBQU0sQ0FBQ00sSUFBdkI7QUFBQSxvQ0FDRTtBQUFBLDJDQUFrQlIsWUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQSwyQ0FBa0JDLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNCRCxDQXhCRCxDLENBMEJBOzs7S0ExQk1OLFE7QUEyQk5BLFFBQVEsQ0FBQ2MsZUFBVCwrU0FBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUGxCLEdBQUcsQ0FBQ21CLEdBQUosQ0FBUSxXQUFSLENBRE87O0FBQUE7QUFDbkJDLGFBRG1CO0FBRW5CQyxjQUZtQixHQUVaRCxHQUFHLENBQUNDLElBRlE7QUFJekJDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUp5QiwyQ0FNbEI7QUFDTGhCLGlCQUFLLEVBQUU7QUFBRWdCLGtCQUFJLEVBQUpBO0FBQUY7QUFERixXQU5rQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUEzQjtBQVdlakIsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd2FuaWthbmkuMDVlYjkwYTYwZDNjOGYxODU2Y2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBJbWcgfSBmcm9tICdyZWFjdC1vcHRpbWl6ZWQtaW1hZ2UnO1xuXG5pbXBvcnQgeyBXS1Byb2ZpbGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9hdmF0YXIucG5nJztcblxuaW1wb3J0IFB1YmxpY1NoZWxsIGZyb20gJy4uLy4uL2NvbW1vbi9QdWJsaWNTaGVsbCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGluZy9XYW5pS2FuaS5tb2R1bGUuY3NzJztcblxuLy8gQ3JlYXRlIEF4aW9zIGluc3RhbmNlLlxuY29uc3QgYXBpOiBBeGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC8nLFxufSk7XG5cbmNvbnN0IFdhbmlLYW5pOiBOZXh0UGFnZTxXS1Byb2ZpbGU+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdXNlcm5hbWUsIGxldmVsLCBwcm9maWxlLCBkYXRlX3N0YXJ0ZWQsIHRpbWVfdXBkYXRlZCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPFB1YmxpY1NoZWxsIHRpdGxlPVwiV2FuaUthbmkgUHJvZ3Jlc3Npb24gfCBraW5nb2Zib3hlcydzIFdlYnNpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGgxPlRoaXMgcGFnZSBpcyB0byBzaG93IG9mZiBteSBwcm9ncmVzcyBmb3IgV2FuaUthbmkhPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XG4gICAgICAgICAgICA8SW1nIHNyYz17QXZhdGFyfSBzaXplcz17WzEyOF19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxuICAgICAgICAgICAgICA8YSBocmVmPXtwcm9maWxlfT57dXNlcm5hbWV9PC9hPlxuICAgICAgICAgICAgICA8cD5MZXZlbDoge2xldmVsfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cbiAgICAgICAgICAgICAgPHA+RGF0ZSBTdGFydGVkOiB7ZGF0ZV9zdGFydGVkfTwvcD5cbiAgICAgICAgICAgICAgPHA+TGFzdCBVcGRhdGVkOiB7dGltZV91cGRhdGVkfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUHVibGljU2hlbGw+XG4gICk7XG59O1xuXG4vLyBGZXRjaCBkYXRhIGJlZm9yZSBsb2FkLlxuV2FuaUthbmkuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0KCcvd2FuaWthbmknKTtcbiAgY29uc3QgZGF0YSA9IHJlcy5kYXRhO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZGF0YSB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2FuaUthbmk7XG4iXSwic291cmNlUm9vdCI6IiJ9