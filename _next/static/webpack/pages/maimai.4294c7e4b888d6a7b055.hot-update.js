webpackHotUpdate_N_E("pages/maimai",{

/***/ "./components/public/Maimai/Maimai.tsx":
/*!*********************************************!*\
  !*** ./components/public/Maimai/Maimai.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _common_ContentHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ContentHeader */ "./components/common/ContentHeader.tsx");
/* harmony import */ var _common_PublicShell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/PublicShell */ "./components/common/PublicShell.tsx");
/* harmony import */ var _Maimai_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Maimai.data */ "./components/public/Maimai/Maimai.data.tsx");
/* harmony import */ var _Maimai_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Maimai_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Maimai.constants */ "./components/public/Maimai/Maimai.constants.ts");
/* harmony import */ var _styling_Maimai_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styling/Maimai.module.css */ "./components/styling/Maimai.module.css");
/* harmony import */ var _styling_Maimai_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styling_Maimai_module_css__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "/home/kingofboxes/projects/website-project/components/public/Maimai/Maimai.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable prettier/prettier */







 // Create Axios instance.

var api = axios__WEBPACK_IMPORTED_MODULE_6___default.a.create({
  baseURL: 'https://kingofboxes.mxblue.net.au:4000/'
});
var contentProps = {
  heading: 'Maimai DX',
  description: ["Maimai DX is an arcade rhythm game with eight buttons spaced around in a circle. \n  Below are a list of songs available on the machine (the international version), \n  as the song list on the official site is not up-to-date.", "Every song is either a \"Deluxe\" or \"Standard\" song, and is specified by the logo. If it is a Deluxe song,\n  the font color is rainbow, and if it is a Standard song, the font color is white. Deluxe songs\n  are exclusive to Maimai DX, and some songs may even have both Deluxe and Standard versions! The genre\n  for each song is located in the top right corner.", "Each song has a minimum of four difficulties: BASIC, ADVANCED, EXPERT and MASTER.\n  Some songs have a fifth difficulty, RE:MASTER, which is harder than MASTER. The difficulty levels\n  of the songs range from 1 to 15, and there is only currently one song that is Level 15.", "I do not own any of the images or songs, all ownership belongs to SEGA."]
};

var MaimaiDX = function MaimaiDX(data) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(false),
      _React$useState2 = Object(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(5),
      _React$useState4 = Object(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      results = _React$useState4[0],
      setResults = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(data.record),
      _React$useState6 = Object(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      list = _React$useState6[0],
      setList = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(_Maimai_constants__WEBPACK_IMPORTED_MODULE_11__["defaultOptions"]),
      _React$useState8 = Object(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState7, 2),
      query = _React$useState8[0],
      setQuery = _React$useState8[1];

  var genreList = Object(_Maimai_constants__WEBPACK_IMPORTED_MODULE_11__["getGenres"])(data.record); // UseEffect hook for infinite scroll.

  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(function () {
    var checkScroll = function checkScroll() {
      var height = document.body.scrollHeight;
      var curr = window.scrollY + window.innerHeight;

      if (curr >= height) {
        if (list && results < list.length) {
          setLoading(true);
          setTimeout(function () {
            setLoading(false);
            setResults(results + 10);
          }, 500);
        }
      }
    };

    window.addEventListener('scroll', checkScroll);
    return function () {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [list, results]); // Set name.

  var setName = function setName(event) {
    var options = _objectSpread(_objectSpread({}, query), {}, {
      name: event.target.value
    });

    setQuery(options);
    filter(options);
  };

  var setArtist = function setArtist(event) {
    var options = _objectSpread(_objectSpread({}, query), {}, {
      artist: event.target.value
    });

    setQuery(options);
    filter(options);
  };

  var setGenre = function setGenre(_event, data) {
    var genre = String(data.value);

    var options = _objectSpread(_objectSpread({}, query), {}, {
      genre: genre
    });

    setQuery(options);
    filter(options);
  };

  var filter = function filter(options) {
    var pattern;
    var newList = data.record;

    if (options.name !== '') {
      pattern = new RegExp(options.name, 'i');
      newList = newList.filter(function (song) {
        return pattern.test(song.song);
      });
    }

    if (options.artist !== '') {
      pattern = new RegExp(options.artist, 'i');
      newList = newList.filter(function (song) {
        return pattern.test(song.artist);
      });
    }

    if (options.genre !== '') {
      pattern = new RegExp(options.genre, 'i');
      newList = newList.filter(function (song) {
        return pattern.test(song.genre);
      });
    }

    setList(newList);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_PublicShell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Maimai DX Song List | Justin's Website",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_ContentHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: contentProps
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
      children: "Song List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: _styling_Maimai_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.search,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
        inverted: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
            label: "Song Name:",
            placeholder: "Search by song name...",
            value: query.name,
            onChange: setName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
            label: "Artist:",
            placeholder: "Search by artist...",
            value: query.artist,
            onChange: setArtist
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Dropdown, {
            label: "Genre:",
            selection: true,
            placeholder: "Filter by genre...",
            options: genreList,
            onChange: setGenre
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, _this), list && list.map(function (song, idx) {
      if (idx < results) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongComponent"], {
          song: song
        }, song.id, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 20
        }, _this);
      }
    }), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongLoader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 5
  }, _this);
}; // Fetch data before load.


_s(MaimaiDX, "aVvq9rJry8H+pYrnexo3WBdhYrs=");

_c = MaimaiDX;
MaimaiDX.getInitialProps = /*#__PURE__*/Object(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _home_kingofboxes_projects_website_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return api.get('/maimai');

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
/* harmony default export */ __webpack_exports__["default"] = (MaimaiDX);

var _c;

$RefreshReg$(_c, "MaimaiDX");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS50c3giXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY29udGVudFByb3BzIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwiTWFpbWFpRFgiLCJkYXRhIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJyZWNvcmQiLCJsaXN0Iiwic2V0TGlzdCIsImRlZmF1bHRPcHRpb25zIiwicXVlcnkiLCJzZXRRdWVyeSIsImdlbnJlTGlzdCIsImdldEdlbnJlcyIsInVzZUVmZmVjdCIsImNoZWNrU2Nyb2xsIiwiaGVpZ2h0IiwiZG9jdW1lbnQiLCJib2R5Iiwic2Nyb2xsSGVpZ2h0IiwiY3VyciIsIndpbmRvdyIsInNjcm9sbFkiLCJpbm5lckhlaWdodCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldE5hbWUiLCJldmVudCIsIm9wdGlvbnMiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXIiLCJzZXRBcnRpc3QiLCJhcnRpc3QiLCJzZXRHZW5yZSIsIl9ldmVudCIsImdlbnJlIiwiU3RyaW5nIiwicGF0dGVybiIsIm5ld0xpc3QiLCJSZWdFeHAiLCJzb25nIiwidGVzdCIsInN0eWxlcyIsInNlYXJjaCIsIm1hcCIsImlkeCIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0IiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Q0FJQTs7QUFDQSxJQUFNQSxHQUFrQixHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDdENDLFNBQU8sRUFBRTtBQUQ2QixD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UyxVQUFDSixJQUFELEVBQXFCSyxHQUFyQixFQUFxQztBQUM1QyxVQUFJQSxHQUFHLEdBQUc3QyxPQUFWLEVBQW1CO0FBQ2pCLDRCQUFPLHFFQUFDLGlFQUFEO0FBQXFCLGNBQUksRUFBRXdDO0FBQTNCLFdBQXNDQSxJQUFJLENBQUNNLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDtBQUNGLEtBSkQsQ0FiSixFQWtCR2hELE9BQU8saUJBQUkscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNCRCxDQS9GRCxDLENBaUdBOzs7R0FqR01KLFE7O0tBQUFBLFE7QUFrR05BLFFBQVEsQ0FBQ3FELGVBQVQsK1NBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1A1RCxHQUFHLENBQUM2RCxHQUFKLENBQVEsU0FBUixDQURPOztBQUFBO0FBQ25CQyxhQURtQjtBQUVuQnRELGNBRm1CLEdBRUVzRCxHQUFHLENBQUN0RCxJQUZOO0FBQUEsMkNBR2xCQSxJQUhrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUEzQjtBQU1lRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWltYWkuNDI5NGM3ZTRiODg4ZDZhN2IwNTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRHJvcGRvd25Qcm9wcywgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgQ29udGVudEhlYWRlciBmcm9tICcuLi8uLi9jb21tb24vQ29udGVudEhlYWRlcic7XG5pbXBvcnQgUHVibGljU2hlbGwgZnJvbSAnLi4vLi4vY29tbW9uL1B1YmxpY1NoZWxsJztcbmltcG9ydCB7IE1NUGxheWVyRGF0YSwgTU1Tb25nUmVjb3JkLCBDb250ZW50UHJvcHMgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBNYWltYWlTb25nQ29tcG9uZW50LCBNYWltYWlTb25nTG9hZGVyIH0gZnJvbSAnLi9NYWltYWkuZGF0YSc7XG5pbXBvcnQgeyBnZXRHZW5yZXMsIGRlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi9NYWltYWkuY29uc3RhbnRzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsaW5nL01haW1haS5tb2R1bGUuY3NzJztcblxuLy8gQ3JlYXRlIEF4aW9zIGluc3RhbmNlLlxuY29uc3QgYXBpOiBBeGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHBzOi8va2luZ29mYm94ZXMubXhibHVlLm5ldC5hdTo0MDAwLycsXG59KTtcblxuY29uc3QgY29udGVudFByb3BzOiBDb250ZW50UHJvcHMgPSB7XG4gIGhlYWRpbmc6ICdNYWltYWkgRFgnLFxuICBkZXNjcmlwdGlvbjogW1xuICAgIGBNYWltYWkgRFggaXMgYW4gYXJjYWRlIHJoeXRobSBnYW1lIHdpdGggZWlnaHQgYnV0dG9ucyBzcGFjZWQgYXJvdW5kIGluIGEgY2lyY2xlLiBcbiAgQmVsb3cgYXJlIGEgbGlzdCBvZiBzb25ncyBhdmFpbGFibGUgb24gdGhlIG1hY2hpbmUgKHRoZSBpbnRlcm5hdGlvbmFsIHZlcnNpb24pLCBcbiAgYXMgdGhlIHNvbmcgbGlzdCBvbiB0aGUgb2ZmaWNpYWwgc2l0ZSBpcyBub3QgdXAtdG8tZGF0ZS5gLFxuICAgIGBFdmVyeSBzb25nIGlzIGVpdGhlciBhIFwiRGVsdXhlXCIgb3IgXCJTdGFuZGFyZFwiIHNvbmcsIGFuZCBpcyBzcGVjaWZpZWQgYnkgdGhlIGxvZ28uIElmIGl0IGlzIGEgRGVsdXhlIHNvbmcsXG4gIHRoZSBmb250IGNvbG9yIGlzIHJhaW5ib3csIGFuZCBpZiBpdCBpcyBhIFN0YW5kYXJkIHNvbmcsIHRoZSBmb250IGNvbG9yIGlzIHdoaXRlLiBEZWx1eGUgc29uZ3NcbiAgYXJlIGV4Y2x1c2l2ZSB0byBNYWltYWkgRFgsIGFuZCBzb21lIHNvbmdzIG1heSBldmVuIGhhdmUgYm90aCBEZWx1eGUgYW5kIFN0YW5kYXJkIHZlcnNpb25zISBUaGUgZ2VucmVcbiAgZm9yIGVhY2ggc29uZyBpcyBsb2NhdGVkIGluIHRoZSB0b3AgcmlnaHQgY29ybmVyLmAsXG4gICAgYEVhY2ggc29uZyBoYXMgYSBtaW5pbXVtIG9mIGZvdXIgZGlmZmljdWx0aWVzOiBCQVNJQywgQURWQU5DRUQsIEVYUEVSVCBhbmQgTUFTVEVSLlxuICBTb21lIHNvbmdzIGhhdmUgYSBmaWZ0aCBkaWZmaWN1bHR5LCBSRTpNQVNURVIsIHdoaWNoIGlzIGhhcmRlciB0aGFuIE1BU1RFUi4gVGhlIGRpZmZpY3VsdHkgbGV2ZWxzXG4gIG9mIHRoZSBzb25ncyByYW5nZSBmcm9tIDEgdG8gMTUsIGFuZCB0aGVyZSBpcyBvbmx5IGN1cnJlbnRseSBvbmUgc29uZyB0aGF0IGlzIExldmVsIDE1LmAsXG4gICAgYEkgZG8gbm90IG93biBhbnkgb2YgdGhlIGltYWdlcyBvciBzb25ncywgYWxsIG93bmVyc2hpcCBiZWxvbmdzIHRvIFNFR0EuYCxcbiAgXSxcbn07XG5cbmNvbnN0IE1haW1haURYOiBOZXh0UGFnZTxNTVBsYXllckRhdGE+ID0gKGRhdGEpID0+IHtcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oNSk7XG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPE1NU29uZ1JlY29yZFtdPihkYXRhLnJlY29yZCk7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gUmVhY3QudXNlU3RhdGU8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4oZGVmYXVsdE9wdGlvbnMpO1xuXG4gIGNvbnN0IGdlbnJlTGlzdCA9IGdldEdlbnJlcyhkYXRhLnJlY29yZCk7XG5cbiAgLy8gVXNlRWZmZWN0IGhvb2sgZm9yIGluZmluaXRlIHNjcm9sbC5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVja1Njcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0O1xuICAgICAgY29uc3QgY3VyciA9IHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgaWYgKGN1cnIgPj0gaGVpZ2h0KSB7XG4gICAgICAgIGlmIChsaXN0ICYmIHJlc3VsdHMgPCBsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFJlc3VsdHMocmVzdWx0cyArIDEwKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtsaXN0LCByZXN1bHRzXSk7XG5cbiAgLy8gU2V0IG5hbWUuXG4gIGNvbnN0IHNldE5hbWUgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5xdWVyeSwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfVxuICAgIHNldFF1ZXJ5KG9wdGlvbnMpO1xuICAgIGZpbHRlcihvcHRpb25zKVxuICB9XG5cbiAgY29uc3Qgc2V0QXJ0aXN0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4ucXVlcnksIGFydGlzdDogZXZlbnQudGFyZ2V0LnZhbHVlfVxuICAgIHNldFF1ZXJ5KG9wdGlvbnMpO1xuICAgIGZpbHRlcihvcHRpb25zKVxuICB9XG5cbiAgY29uc3Qgc2V0R2VucmUgPSAoX2V2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4sIGRhdGE6IERyb3Bkb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCBnZW5yZSA9IFN0cmluZyhkYXRhLnZhbHVlKTtcbiAgICBjb25zdCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gey4uLnF1ZXJ5LCBnZW5yZTogZ2VucmV9XG4gICAgc2V0UXVlcnkob3B0aW9ucyk7XG4gICAgZmlsdGVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBmaWx0ZXIgPSAob3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPT4ge1xuXG4gICAgbGV0IHBhdHRlcm46IFJlZ0V4cDtcbiAgICBsZXQgbmV3TGlzdCA9IGRhdGEucmVjb3JkO1xuXG4gICAgaWYgKG9wdGlvbnMubmFtZSAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG9wdGlvbnMubmFtZSwgJ2knKTtcbiAgICAgIG5ld0xpc3QgPSBuZXdMaXN0LmZpbHRlcigoc29uZykgPT4gcGF0dGVybi50ZXN0KHNvbmcuc29uZykpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFydGlzdCAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG9wdGlvbnMuYXJ0aXN0LCAnaScpO1xuICAgICAgbmV3TGlzdCA9IG5ld0xpc3QuZmlsdGVyKChzb25nKSA9PiBwYXR0ZXJuLnRlc3Qoc29uZy5hcnRpc3QpKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5nZW5yZSAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG9wdGlvbnMuZ2VucmUsICdpJyk7XG4gICAgICBuZXdMaXN0ID0gbmV3TGlzdC5maWx0ZXIoKHNvbmcpID0+IHBhdHRlcm4udGVzdChzb25nLmdlbnJlKSk7XG4gICAgfVxuXG4gICAgc2V0TGlzdChuZXdMaXN0KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFB1YmxpY1NoZWxsIHRpdGxlPVwiTWFpbWFpIERYIFNvbmcgTGlzdCB8IEp1c3RpbidzIFdlYnNpdGVcIj5cbiAgICAgIDxDb250ZW50SGVhZGVyIGRhdGE9e2NvbnRlbnRQcm9wc30gLz5cbiAgICAgIDxoMj5Tb25nIExpc3Q8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxuICAgICAgICA8Rm9ybSBpbnZlcnRlZD5cbiAgICAgICAgICA8Rm9ybS5Hcm91cD5cbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPSdTb25nIE5hbWU6JyBwbGFjZWhvbGRlcj0nU2VhcmNoIGJ5IHNvbmcgbmFtZS4uLicgdmFsdWU9e3F1ZXJ5Lm5hbWV9IG9uQ2hhbmdlPXtzZXROYW1lfSAvPlxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9J0FydGlzdDonIHBsYWNlaG9sZGVyPSdTZWFyY2ggYnkgYXJ0aXN0Li4uJyB2YWx1ZT17cXVlcnkuYXJ0aXN0fSBvbkNoYW5nZT17c2V0QXJ0aXN0fS8+XG4gICAgICAgICAgICA8Rm9ybS5Ecm9wZG93biBsYWJlbD0nR2VucmU6JyBzZWxlY3Rpb24gcGxhY2Vob2xkZXI9J0ZpbHRlciBieSBnZW5yZS4uLicgb3B0aW9ucz17Z2VucmVMaXN0fSBvbkNoYW5nZT17c2V0R2VucmV9IC8+XG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsaXN0ICYmXG4gICAgICAgIGxpc3QubWFwKChzb25nOiBNTVNvbmdSZWNvcmQsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgaWYgKGlkeCA8IHJlc3VsdHMpIHtcbiAgICAgICAgICAgIHJldHVybiA8TWFpbWFpU29uZ0NvbXBvbmVudCBzb25nPXtzb25nfSBrZXk9e3NvbmcuaWR9IC8+O1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICB7bG9hZGluZyAmJiA8TWFpbWFpU29uZ0xvYWRlciAvPn1cbiAgICA8L1B1YmxpY1NoZWxsPlxuICApO1xufTtcblxuLy8gRmV0Y2ggZGF0YSBiZWZvcmUgbG9hZC5cbk1haW1haURYLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCgnL21haW1haScpO1xuICBjb25zdCBkYXRhOiBNTVBsYXllckRhdGEgPSByZXMuZGF0YTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWltYWlEWDtcbiJdLCJzb3VyY2VSb290IjoiIn0=