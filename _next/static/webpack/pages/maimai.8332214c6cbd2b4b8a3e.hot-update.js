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

  // Variables for controlling state on this page.
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

  var genreList = Object(_Maimai_constants__WEBPACK_IMPORTED_MODULE_11__["getGenres"])(data.record);
  var levelsList = Object(_Maimai_constants__WEBPACK_IMPORTED_MODULE_11__["getLevels"])(data.record); // UseEffect hook for infinite scroll.

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
  }, [list, results]); // Handle filtering by name, artist, genre and level.

  var setName = function setName(event) {
    var options = _objectSpread(_objectSpread({}, query), {}, {
      name: event.target.value
    });

    filter(options);
  };

  var setArtist = function setArtist(event) {
    var options = _objectSpread(_objectSpread({}, query), {}, {
      artist: event.target.value
    });

    filter(options);
  };

  var setGenre = function setGenre(_event, data) {
    var genre = String(data.value);

    var options = _objectSpread(_objectSpread({}, query), {}, {
      genre: genre
    });

    filter(options);
  };

  var setLevel = function setLevel(_event, data) {
    var level = String(data.value);

    var options = _objectSpread(_objectSpread({}, query), {}, {
      level: level
    });

    filter(options);
  };

  var checkLevel = function checkLevel(list, level) {
    var levelPattern = level.replace('+', "\\+");
    var newList = [];
    var pattern = new RegExp("^".concat(levelPattern, "$"), 'i');
    console.log(pattern);
    list.forEach(function (song) {
      Object.keys(song.data).map(function (diff) {
        if (pattern.test(song.data[diff].level)) {
          newList.push(song);
        }
      });
    });
    newList = newList.filter(function (song, idx) {
      return newList.indexOf(song) === idx;
    });
    return newList;
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

    if (options.level !== '') {
      newList = checkLevel(newList, options.level);
    }

    setList(newList);
    setQuery(options);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_PublicShell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Maimai DX Song List | Justin's Website",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_ContentHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: contentProps
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
      children: "Song List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
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
            lineNumber: 142,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
            label: "Artist:",
            placeholder: "Search by artist...",
            value: query.artist,
            onChange: setArtist
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Dropdown, {
            label: "Genre:",
            selection: true,
            placeholder: "Filter by genre...",
            options: genreList,
            onChange: setGenre
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Dropdown, {
            label: "Level:",
            selection: true,
            placeholder: "Filter by level...",
            options: levelsList,
            onChange: setLevel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, _this), list && list.map(function (song, idx) {
      if (idx < results) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongComponent"], {
          song: song
        }, song.id, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 20
        }, _this);
      }
    }), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongLoader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 19
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 136,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS50c3giXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY29udGVudFByb3BzIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwiTWFpbWFpRFgiLCJkYXRhIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJyZWNvcmQiLCJsaXN0Iiwic2V0TGlzdCIsImRlZmF1bHRPcHRpb25zIiwicXVlcnkiLCJzZXRRdWVyeSIsImdlbnJlTGlzdCIsImdldEdlbnJlcyIsImxldmVsc0xpc3QiLCJnZXRMZXZlbHMiLCJ1c2VFZmZlY3QiLCJjaGVja1Njcm9sbCIsImhlaWdodCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbEhlaWdodCIsImN1cnIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXROYW1lIiwiZXZlbnQiLCJvcHRpb25zIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyIiwic2V0QXJ0aXN0IiwiYXJ0aXN0Iiwic2V0R2VucmUiLCJfZXZlbnQiLCJnZW5yZSIsIlN0cmluZyIsInNldExldmVsIiwibGV2ZWwiLCJjaGVja0xldmVsIiwibGV2ZWxQYXR0ZXJuIiwicmVwbGFjZSIsIm5ld0xpc3QiLCJwYXR0ZXJuIiwiUmVnRXhwIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJzb25nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImRpZmYiLCJ0ZXN0IiwicHVzaCIsImlkeCIsImluZGV4T2YiLCJzdHlsZXMiLCJzZWFyY2giLCJpZCIsImdldEluaXRpYWxQcm9wcyIsImdldCIsInJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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RSxHQUFHLENBQUNyRSxJQUZOO0FBQUEsMkNBR2xCQSxJQUhrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUEzQjtBQU1lRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWltYWkuODMzMjIxNGM2Y2JkMmI0YjhhM2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRHJvcGRvd25Qcm9wcywgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgQ29udGVudEhlYWRlciBmcm9tICcuLi8uLi9jb21tb24vQ29udGVudEhlYWRlcic7XG5pbXBvcnQgUHVibGljU2hlbGwgZnJvbSAnLi4vLi4vY29tbW9uL1B1YmxpY1NoZWxsJztcbmltcG9ydCB7IE1NUGxheWVyRGF0YSwgTU1Tb25nUmVjb3JkLCBDb250ZW50UHJvcHMsIE1NU29uZ0RhdGEgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBNYWltYWlTb25nQ29tcG9uZW50LCBNYWltYWlTb25nTG9hZGVyIH0gZnJvbSAnLi9NYWltYWkuZGF0YSc7XG5pbXBvcnQgeyBnZXRHZW5yZXMsIGdldExldmVscywgZGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL01haW1haS5jb25zdGFudHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxpbmcvTWFpbWFpLm1vZHVsZS5jc3MnO1xuXG4vLyBDcmVhdGUgQXhpb3MgaW5zdGFuY2UuXG5jb25zdCBhcGk6IEF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiAnaHR0cHM6Ly9raW5nb2Zib3hlcy5teGJsdWUubmV0LmF1OjQwMDAvJyxcbn0pO1xuXG5jb25zdCBjb250ZW50UHJvcHM6IENvbnRlbnRQcm9wcyA9IHtcbiAgaGVhZGluZzogJ01haW1haSBEWCcsXG4gIGRlc2NyaXB0aW9uOiBbXG4gICAgYE1haW1haSBEWCBpcyBhbiBhcmNhZGUgcmh5dGhtIGdhbWUgd2l0aCBlaWdodCBidXR0b25zIHNwYWNlZCBhcm91bmQgaW4gYSBjaXJjbGUuIFxuICBCZWxvdyBhcmUgYSBsaXN0IG9mIHNvbmdzIGF2YWlsYWJsZSBvbiB0aGUgbWFjaGluZSAodGhlIGludGVybmF0aW9uYWwgdmVyc2lvbiksIFxuICBhcyB0aGUgc29uZyBsaXN0IG9uIHRoZSBvZmZpY2lhbCBzaXRlIGlzIG5vdCB1cC10by1kYXRlLmAsXG4gICAgYEV2ZXJ5IHNvbmcgaXMgZWl0aGVyIGEgXCJEZWx1eGVcIiBvciBcIlN0YW5kYXJkXCIgc29uZywgYW5kIGlzIHNwZWNpZmllZCBieSB0aGUgbG9nby4gSWYgaXQgaXMgYSBEZWx1eGUgc29uZyxcbiAgdGhlIGZvbnQgY29sb3IgaXMgcmFpbmJvdywgYW5kIGlmIGl0IGlzIGEgU3RhbmRhcmQgc29uZywgdGhlIGZvbnQgY29sb3IgaXMgd2hpdGUuIERlbHV4ZSBzb25nc1xuICBhcmUgZXhjbHVzaXZlIHRvIE1haW1haSBEWCwgYW5kIHNvbWUgc29uZ3MgbWF5IGV2ZW4gaGF2ZSBib3RoIERlbHV4ZSBhbmQgU3RhbmRhcmQgdmVyc2lvbnMhIFRoZSBnZW5yZVxuICBmb3IgZWFjaCBzb25nIGlzIGxvY2F0ZWQgaW4gdGhlIHRvcCByaWdodCBjb3JuZXIuYCxcbiAgICBgRWFjaCBzb25nIGhhcyBhIG1pbmltdW0gb2YgZm91ciBkaWZmaWN1bHRpZXM6IEJBU0lDLCBBRFZBTkNFRCwgRVhQRVJUIGFuZCBNQVNURVIuXG4gIFNvbWUgc29uZ3MgaGF2ZSBhIGZpZnRoIGRpZmZpY3VsdHksIFJFOk1BU1RFUiwgd2hpY2ggaXMgaGFyZGVyIHRoYW4gTUFTVEVSLiBUaGUgZGlmZmljdWx0eSBsZXZlbHNcbiAgb2YgdGhlIHNvbmdzIHJhbmdlIGZyb20gMSB0byAxNSwgYW5kIHRoZXJlIGlzIG9ubHkgY3VycmVudGx5IG9uZSBzb25nIHRoYXQgaXMgTGV2ZWwgMTUuYCxcbiAgICBgSSBkbyBub3Qgb3duIGFueSBvZiB0aGUgaW1hZ2VzIG9yIHNvbmdzLCBhbGwgb3duZXJzaGlwIGJlbG9uZ3MgdG8gU0VHQS5gLFxuICBdLFxufTtcblxuY29uc3QgTWFpbWFpRFg6IE5leHRQYWdlPE1NUGxheWVyRGF0YT4gPSAoZGF0YSkgPT4ge1xuXG4gIC8vIFZhcmlhYmxlcyBmb3IgY29udHJvbGxpbmcgc3RhdGUgb24gdGhpcyBwYWdlLlxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oNSk7XG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPE1NU29uZ1JlY29yZFtdPihkYXRhLnJlY29yZCk7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gUmVhY3QudXNlU3RhdGU8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4oZGVmYXVsdE9wdGlvbnMpO1xuICBjb25zdCBnZW5yZUxpc3QgPSBnZXRHZW5yZXMoZGF0YS5yZWNvcmQpO1xuICBjb25zdCBsZXZlbHNMaXN0ID0gZ2V0TGV2ZWxzKGRhdGEucmVjb3JkKTtcblxuICAvLyBVc2VFZmZlY3QgaG9vayBmb3IgaW5maW5pdGUgc2Nyb2xsLlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQ7XG4gICAgICBjb25zdCBjdXJyID0gd2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBpZiAoY3VyciA+PSBoZWlnaHQpIHtcbiAgICAgICAgaWYgKGxpc3QgJiYgcmVzdWx0cyA8IGxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0UmVzdWx0cyhyZXN1bHRzICsgMTApO1xuICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbCk7XG4gICAgfTtcbiAgfSwgW2xpc3QsIHJlc3VsdHNdKTtcblxuICAvLyBIYW5kbGUgZmlsdGVyaW5nIGJ5IG5hbWUsIGFydGlzdCwgZ2VucmUgYW5kIGxldmVsLlxuICBjb25zdCBzZXROYW1lID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4ucXVlcnksIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX1cbiAgICBmaWx0ZXIob3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IHNldEFydGlzdCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gey4uLnF1ZXJ5LCBhcnRpc3Q6IGV2ZW50LnRhcmdldC52YWx1ZX1cbiAgICBmaWx0ZXIob3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IHNldEdlbnJlID0gKF9ldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTEVsZW1lbnQ+LCBkYXRhOiBEcm9wZG93blByb3BzKSA9PiB7XG4gICAgY29uc3QgZ2VucmUgPSBTdHJpbmcoZGF0YS52YWx1ZSk7XG4gICAgY29uc3Qgb3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHsuLi5xdWVyeSwgZ2VucmU6IGdlbnJlfVxuICAgIGZpbHRlcihvcHRpb25zKVxuICB9XG5cbiAgY29uc3Qgc2V0TGV2ZWwgPSAoX2V2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4sIGRhdGE6IERyb3Bkb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCBsZXZlbCA9IFN0cmluZyhkYXRhLnZhbHVlKTtcbiAgICBjb25zdCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gey4uLnF1ZXJ5LCBsZXZlbDogbGV2ZWx9XG4gICAgZmlsdGVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBjaGVja0xldmVsID0gKGxpc3Q6IE1NU29uZ1JlY29yZFtdLCBsZXZlbDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbGV2ZWxQYXR0ZXJuID0gbGV2ZWwucmVwbGFjZSgnKycsIGBcXFxcK2ApO1xuICAgIGxldCBuZXdMaXN0OiBNTVNvbmdSZWNvcmRbXSA9IFtdO1xuICAgIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeJHtsZXZlbFBhdHRlcm59JGAsICdpJyk7XG4gICAgY29uc29sZS5sb2cocGF0dGVybik7XG4gICAgbGlzdC5mb3JFYWNoKChzb25nOiBNTVNvbmdSZWNvcmQpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHNvbmcuZGF0YSkubWFwKChkaWZmOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHBhdHRlcm4udGVzdChzb25nLmRhdGFbZGlmZiBhcyBrZXlvZiBNTVNvbmdEYXRhXS5sZXZlbCkpIHtcbiAgICAgICAgICBuZXdMaXN0LnB1c2goc29uZyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgICBuZXdMaXN0ID0gbmV3TGlzdC5maWx0ZXIoKHNvbmcsIGlkeCkgPT4gbmV3TGlzdC5pbmRleE9mKHNvbmcpID09PSBpZHgpO1xuICAgIHJldHVybiBuZXdMaXN0O1xuICB9XG5cbiAgY29uc3QgZmlsdGVyID0gKG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pID0+IHtcblxuICAgIGxldCBwYXR0ZXJuOiBSZWdFeHA7XG4gICAgbGV0IG5ld0xpc3QgPSBkYXRhLnJlY29yZDtcblxuICAgIGlmIChvcHRpb25zLm5hbWUgIT09ICcnKSB7XG4gICAgICBwYXR0ZXJuID0gbmV3IFJlZ0V4cChvcHRpb25zLm5hbWUsICdpJyk7XG4gICAgICBuZXdMaXN0ID0gbmV3TGlzdC5maWx0ZXIoKHNvbmcpID0+IHBhdHRlcm4udGVzdChzb25nLnNvbmcpKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5hcnRpc3QgIT09ICcnKSB7XG4gICAgICBwYXR0ZXJuID0gbmV3IFJlZ0V4cChvcHRpb25zLmFydGlzdCwgJ2knKTtcbiAgICAgIG5ld0xpc3QgPSBuZXdMaXN0LmZpbHRlcigoc29uZykgPT4gcGF0dGVybi50ZXN0KHNvbmcuYXJ0aXN0KSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZ2VucmUgIT09ICcnKSB7XG4gICAgICBwYXR0ZXJuID0gbmV3IFJlZ0V4cChvcHRpb25zLmdlbnJlLCAnaScpO1xuICAgICAgbmV3TGlzdCA9IG5ld0xpc3QuZmlsdGVyKChzb25nKSA9PiBwYXR0ZXJuLnRlc3Qoc29uZy5nZW5yZSkpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmxldmVsICE9PSAnJykge1xuICAgICAgbmV3TGlzdCA9IGNoZWNrTGV2ZWwobmV3TGlzdCwgb3B0aW9ucy5sZXZlbCk7XG4gICAgfVxuXG4gICAgc2V0TGlzdChuZXdMaXN0KTtcbiAgICBzZXRRdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFB1YmxpY1NoZWxsIHRpdGxlPVwiTWFpbWFpIERYIFNvbmcgTGlzdCB8IEp1c3RpbidzIFdlYnNpdGVcIj5cbiAgICAgIDxDb250ZW50SGVhZGVyIGRhdGE9e2NvbnRlbnRQcm9wc30gLz5cbiAgICAgIDxoMj5Tb25nIExpc3Q8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxuICAgICAgICA8Rm9ybSBpbnZlcnRlZD5cbiAgICAgICAgICA8Rm9ybS5Hcm91cD5cbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPSdTb25nIE5hbWU6JyBwbGFjZWhvbGRlcj0nU2VhcmNoIGJ5IHNvbmcgbmFtZS4uLicgdmFsdWU9e3F1ZXJ5Lm5hbWV9IG9uQ2hhbmdlPXtzZXROYW1lfSAvPlxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9J0FydGlzdDonIHBsYWNlaG9sZGVyPSdTZWFyY2ggYnkgYXJ0aXN0Li4uJyB2YWx1ZT17cXVlcnkuYXJ0aXN0fSBvbkNoYW5nZT17c2V0QXJ0aXN0fS8+XG4gICAgICAgICAgICA8Rm9ybS5Ecm9wZG93biBsYWJlbD0nR2VucmU6JyBzZWxlY3Rpb24gcGxhY2Vob2xkZXI9J0ZpbHRlciBieSBnZW5yZS4uLicgb3B0aW9ucz17Z2VucmVMaXN0fSBvbkNoYW5nZT17c2V0R2VucmV9IC8+XG4gICAgICAgICAgICA8Rm9ybS5Ecm9wZG93biBsYWJlbD0nTGV2ZWw6JyBzZWxlY3Rpb24gcGxhY2Vob2xkZXI9J0ZpbHRlciBieSBsZXZlbC4uLicgb3B0aW9ucz17bGV2ZWxzTGlzdH0gb25DaGFuZ2U9e3NldExldmVsfSAvPlxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICB7bGlzdCAmJlxuICAgICAgICBsaXN0Lm1hcCgoc29uZzogTU1Tb25nUmVjb3JkLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmIChpZHggPCByZXN1bHRzKSB7XG4gICAgICAgICAgICByZXR1cm4gPE1haW1haVNvbmdDb21wb25lbnQgc29uZz17c29uZ30ga2V5PXtzb25nLmlkfSAvPjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAge2xvYWRpbmcgJiYgPE1haW1haVNvbmdMb2FkZXIgLz59XG4gICAgPC9QdWJsaWNTaGVsbD5cbiAgKTtcbn07XG5cbi8vIEZldGNoIGRhdGEgYmVmb3JlIGxvYWQuXG5NYWltYWlEWC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXQoJy9tYWltYWknKTtcbiAgY29uc3QgZGF0YTogTU1QbGF5ZXJEYXRhID0gcmVzLmRhdGE7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbWFpRFg7XG4iXSwic291cmNlUm9vdCI6IiJ9