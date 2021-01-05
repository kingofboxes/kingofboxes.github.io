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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _common_PublicShell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/PublicShell */ "./components/common/PublicShell.tsx");
/* harmony import */ var _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styling/WaniKani.module.css */ "./components/styling/WaniKani.module.css");
/* harmony import */ var _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "/home/kingofboxes/projects/website-project/components/public/WaniKani/WaniKani.tsx",
    _this = undefined;







 // Create Axios instance.

var api = axios__WEBPACK_IMPORTED_MODULE_4___default.a.create({
  baseURL: 'http://localhost:4000/'
});

var WaniKani = function WaniKani(data) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_common_PublicShell__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "WaniKani Progression | kingofboxes's Website",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        children: "This page is to show off my progress for WaniKani!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.profile,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.avatar,
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
          className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.progress,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              href: data.user.profile,
              children: data.user.username
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["Level: ", data.user.level]
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
            className: _styling_WaniKani_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.time,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["Date Started: ", data.user.date_started]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["Last Updated: ", data.user.time_updated]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: ["Items learnt: ", data.items.radical, " radicals, ", data.items.kanji, " kanji,", ' ', data.items.vocabulary, " vocabulary.", ' ']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"], {
            celled: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Header, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Row, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].HeaderCell, {
                  children: "Header"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].HeaderCell, {
                  children: "Header"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].HeaderCell, {
                  children: "Header"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Body, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Row, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Label"], {
                    ribbon: true,
                    children: "First"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, {
                  children: "Cell"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, {
                  children: "Cell"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Row, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, {
                  children: "Cell"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, {
                  children: "Cell"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, {
                  children: "Cell"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Row, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, {
                  children: "Cell"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, {
                  children: "Cell"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, {
                  children: "Cell"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvV2FuaUthbmkvV2FuaUthbmkudHN4Il0sIm5hbWVzIjpbImFwaSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIldhbmlLYW5pIiwiZGF0YSIsInN0eWxlcyIsImNvbnRhaW5lciIsInByb2ZpbGUiLCJhdmF0YXIiLCJBdmF0YXIiLCJ3cmFwcGVyIiwicHJvZ3Jlc3MiLCJ1c2VyIiwidXNlcm5hbWUiLCJsZXZlbCIsInRpbWUiLCJkYXRlX3N0YXJ0ZWQiLCJ0aW1lX3VwZGF0ZWQiLCJpdGVtcyIsInJhZGljYWwiLCJrYW5qaSIsInZvY2FidWxhcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXQiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0NBSUE7O0FBQ0EsSUFBTUEsR0FBa0IsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQ3RDQyxTQUFPLEVBQUU7QUFENkIsQ0FBYixDQUEzQjs7QUFJQSxJQUFNQyxRQUE2QixHQUFHLFNBQWhDQSxRQUFnQyxDQUFDQyxJQUFELEVBQXFCO0FBQ3pELHNCQUNFLHFFQUFDLDJEQUFEO0FBQWEsU0FBSyxFQUFDLDhDQUFuQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQyxtRUFBTSxDQUFDQyxTQUF2QjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUVELG1FQUFNLENBQUNFLE9BQXZCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFRixtRUFBTSxDQUFDRyxNQUF2QjtBQUFBLGlDQUNFLHFFQUFDLHlEQUFEO0FBQUssZUFBRyxFQUFFQyx5REFBVjtBQUFrQixpQkFBSyxFQUFFLENBQUMsR0FBRCxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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dURBQUQsQ0FBTyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUUscUVBQUMsdURBQUQsQ0FBTyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLGVBR0UscUVBQUMsdURBQUQsQ0FBTyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1REQsQ0F4REQsQyxDQTBEQTs7O0tBMURNbEIsUTtBQTJETkEsUUFBUSxDQUFDbUIsZUFBVCwrU0FBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUHZCLEdBQUcsQ0FBQ3dCLEdBQUosQ0FBUSxXQUFSLENBRE87O0FBQUE7QUFDbkJDLGFBRG1CO0FBRW5CcEIsY0FGbUIsR0FFRG9CLEdBQUcsQ0FBQ3BCLElBRkg7QUFBQSwyQ0FHbEJBLElBSGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTNCO0FBTWVELHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3dhbmlrYW5pLjFmMmUyNTliZjJkZjU2MDI5OGFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgSW1nIH0gZnJvbSAncmVhY3Qtb3B0aW1pemVkLWltYWdlJztcblxuaW1wb3J0IHsgV0tQcm9maWxlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi8uLi9hc3NldHMvYXZhdGFyLnBuZyc7XG5cbmltcG9ydCB7IEljb24sIExhYmVsLCBNZW51LCBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBQdWJsaWNTaGVsbCBmcm9tICcuLi8uLi9jb21tb24vUHVibGljU2hlbGwnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxpbmcvV2FuaUthbmkubW9kdWxlLmNzcyc7XG5cbi8vIENyZWF0ZSBBeGlvcyBpbnN0YW5jZS5cbmNvbnN0IGFwaTogQXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvJyxcbn0pO1xuXG5jb25zdCBXYW5pS2FuaTogTmV4dFBhZ2U8V0tQcm9maWxlPiA9IChkYXRhOiBXS1Byb2ZpbGUpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UHVibGljU2hlbGwgdGl0bGU9XCJXYW5pS2FuaSBQcm9ncmVzc2lvbiB8IGtpbmdvZmJveGVzJ3MgV2Vic2l0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8aDE+VGhpcyBwYWdlIGlzIHRvIHNob3cgb2ZmIG15IHByb2dyZXNzIGZvciBXYW5pS2FuaSE8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfT5cbiAgICAgICAgICAgIDxJbWcgc3JjPXtBdmF0YXJ9IHNpemVzPXtbMTI4XX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc30+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2RhdGEudXNlci5wcm9maWxlfT57ZGF0YS51c2VyLnVzZXJuYW1lfTwvYT5cbiAgICAgICAgICAgICAgPHA+TGV2ZWw6IHtkYXRhLnVzZXIubGV2ZWx9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxuICAgICAgICAgICAgICA8cD5EYXRlIFN0YXJ0ZWQ6IHtkYXRhLnVzZXIuZGF0ZV9zdGFydGVkfTwvcD5cbiAgICAgICAgICAgICAgPHA+TGFzdCBVcGRhdGVkOiB7ZGF0YS51c2VyLnRpbWVfdXBkYXRlZH08L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEl0ZW1zIGxlYXJudDoge2RhdGEuaXRlbXMucmFkaWNhbH0gcmFkaWNhbHMsIHtkYXRhLml0ZW1zLmthbmppfSBrYW5qaSx7JyAnfVxuICAgICAgICAgICAgICAgIHtkYXRhLml0ZW1zLnZvY2FidWxhcnl9IHZvY2FidWxhcnkueycgJ31cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8VGFibGUgY2VsbGVkPlxuICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5IZWFkZXI8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5IZWFkZXI8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5IZWFkZXI8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyPlxuXG4gICAgICAgICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJpYmJvbj5GaXJzdDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD5DZWxsPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+Q2VsbDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+Q2VsbDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPkNlbGw8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD5DZWxsPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD5DZWxsPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+Q2VsbDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPkNlbGw8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICAgIDwvVGFibGUuQm9keT5cbiAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9QdWJsaWNTaGVsbD5cbiAgKTtcbn07XG5cbi8vIEZldGNoIGRhdGEgYmVmb3JlIGxvYWQuXG5XYW5pS2FuaS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXQoJy93YW5pa2FuaScpO1xuICBjb25zdCBkYXRhOiBXS1Byb2ZpbGUgPSByZXMuZGF0YTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYW5pS2FuaTtcbiJdLCJzb3VyY2VSb290IjoiIn0=