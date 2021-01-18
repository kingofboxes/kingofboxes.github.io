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
  var levelsList = Object(_Maimai_constants__WEBPACK_IMPORTED_MODULE_11__["getLevels"])(data.record);
  var difficultiesList = Object(_Maimai_constants__WEBPACK_IMPORTED_MODULE_11__["getDifficulties"])(); // UseEffect hook for infinite scroll.

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

  var setDifficulty = function setDifficulty(_event, data) {
    var difficulty = String(data.value);

    var options = _objectSpread(_objectSpread({}, query), {}, {
      difficulty: difficulty
    });

    filter(options);
  };

  var checkLevel = function checkLevel(list, level) {
    // Take care of meta character for regex.
    var levelPattern = level.replace('+', "\\+");
    var newList = [];
    var pattern = new RegExp("^".concat(levelPattern, "$"), 'i');
    list.forEach(function (song) {
      Object.keys(song.data).map(function (diff) {
        if (pattern.test(song.data[diff].level)) {
          newList.push(song);
        }
      });
    }); // Filter out duplicate songs with same levels for multiple difficulties.

    newList = newList.filter(function (song, idx) {
      return newList.indexOf(song) === idx;
    });
    return newList;
  };

  var checkLevelDifficulty = function checkLevelDifficulty(list, level, difficulty) {
    // Take care of meta character for regex.
    var levelPattern = level.replace('+', "\\+");
    var newList = [];
    var pattern = new RegExp("^".concat(levelPattern, "$"), 'i');
    list.forEach(function (song) {
      if (song.data[difficulty] && pattern.test(song.data[difficulty].level)) {
        newList.push(song);
      }
    }); // Filter out duplicate songs with same levels for multiple difficulties.

    newList = newList.filter(function (song, idx) {
      return newList.indexOf(song) === idx;
    });
    return newList;
  };

  var filter = function filter(options) {
    var pattern;
    var newList = data.record;

    if (options.name !== '') {
      pattern = new RegExp("^".concat(options.name), 'i');
      newList = newList.filter(function (song) {
        return pattern.test(song.song);
      });
    }

    if (options.artist !== '') {
      pattern = new RegExp("^".concat(options.artist), 'i');
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

    if (options.level !== '' && options.difficulty !== '') {
      newList = checkLevelDifficulty(newList, options.level, options.difficulty);
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
      lineNumber: 166,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
      children: "Song List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: _styling_Maimai_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.search,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
        inverted: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
          widths: "equal",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
            fluid: true,
            label: "Song Name:",
            placeholder: "Search by song name...",
            value: query.name,
            onChange: setName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
            fluid: true,
            label: "Artist:",
            placeholder: "Search by artist...",
            value: query.artist,
            onChange: setArtist
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Dropdown, {
            clearable: true,
            fluid: true,
            label: "Genre:",
            selection: true,
            placeholder: "Filter by genre...",
            options: genreList,
            onChange: setGenre
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
          widths: "equal",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Dropdown, {
            clearable: true,
            fluid: true,
            label: "Difficulty:",
            selection: true,
            placeholder: "Filter by difficulty...",
            options: difficultiesList,
            onChange: setDifficulty
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Dropdown, {
            clearable: true,
            fluid: true,
            label: "Level:",
            selection: true,
            placeholder: "Filter by level...",
            options: levelsList,
            onChange: setLevel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, _this), list && list.map(function (song, idx) {
      if (idx < results) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongComponent"], {
          song: song
        }, song.id, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 20
        }, _this);
      }
    }), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongLoader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 19
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 165,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS50c3giXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY29udGVudFByb3BzIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwiTWFpbWFpRFgiLCJkYXRhIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJyZWNvcmQiLCJsaXN0Iiwic2V0TGlzdCIsImRlZmF1bHRPcHRpb25zIiwicXVlcnkiLCJzZXRRdWVyeSIsImdlbnJlTGlzdCIsImdldEdlbnJlcyIsImxldmVsc0xpc3QiLCJnZXRMZXZlbHMiLCJkaWZmaWN1bHRpZXNMaXN0IiwiZ2V0RGlmZmljdWx0aWVzIiwidXNlRWZmZWN0IiwiY2hlY2tTY3JvbGwiLCJoZWlnaHQiLCJkb2N1bWVudCIsImJvZHkiLCJzY3JvbGxIZWlnaHQiLCJjdXJyIiwid2luZG93Iiwic2Nyb2xsWSIsImlubmVySGVpZ2h0IiwibGVuZ3RoIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0TmFtZSIsImV2ZW50Iiwib3B0aW9ucyIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlciIsInNldEFydGlzdCIsImFydGlzdCIsInNldEdlbnJlIiwiX2V2ZW50IiwiZ2VucmUiLCJTdHJpbmciLCJzZXRMZXZlbCIsImxldmVsIiwic2V0RGlmZmljdWx0eSIsImRpZmZpY3VsdHkiLCJjaGVja0xldmVsIiwibGV2ZWxQYXR0ZXJuIiwicmVwbGFjZSIsIm5ld0xpc3QiLCJwYXR0ZXJuIiwiUmVnRXhwIiwiZm9yRWFjaCIsInNvbmciLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZGlmZiIsInRlc3QiLCJwdXNoIiwiaWR4IiwiaW5kZXhPZiIsImNoZWNrTGV2ZWxEaWZmaWN1bHR5Iiwic3R5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RUFBRWpDLFVBQWxHO0FBQThHLG9CQUFRLEVBQUUrQjtBQUF4SDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsRUFnQkd0QyxJQUFJLElBQ0hBLElBQUksQ0FBQ29ELEdBQUwsQ0FBUyxVQUFDSCxJQUFELEVBQXFCTyxHQUFyQixFQUFxQztBQUM1QyxVQUFJQSxHQUFHLEdBQUczRCxPQUFWLEVBQW1CO0FBQ2pCLDRCQUFPLHFFQUFDLGlFQUFEO0FBQXFCLGNBQUksRUFBRW9EO0FBQTNCLFdBQXNDQSxJQUFJLENBQUNZLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDtBQUNGLEtBSkQsQ0FqQkosRUFzQkdsRSxPQUFPLGlCQUFJLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0F6SkQsQyxDQTJKQTs7O0dBM0pNSixROztLQUFBQSxRO0FBNEpOQSxRQUFRLENBQUN1RSxlQUFULCtTQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNQOUUsR0FBRyxDQUFDK0UsR0FBSixDQUFRLFNBQVIsQ0FETzs7QUFBQTtBQUNuQkMsYUFEbUI7QUFFbkJ4RSxjQUZtQixHQUVFd0UsR0FBRyxDQUFDeEUsSUFGTjtBQUFBLDJDQUdsQkEsSUFIa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBM0I7QUFNZUQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbWFpLmNkYjYxYzA1YWY5NjI4NjM0ZGUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IERyb3Bkb3duUHJvcHMsIEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IENvbnRlbnRIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9uL0NvbnRlbnRIZWFkZXInO1xuaW1wb3J0IFB1YmxpY1NoZWxsIGZyb20gJy4uLy4uL2NvbW1vbi9QdWJsaWNTaGVsbCc7XG5pbXBvcnQgeyBNTVBsYXllckRhdGEsIE1NU29uZ1JlY29yZCwgQ29udGVudFByb3BzLCBNTVNvbmdEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgTWFpbWFpU29uZ0NvbXBvbmVudCwgTWFpbWFpU29uZ0xvYWRlciB9IGZyb20gJy4vTWFpbWFpLmRhdGEnO1xuaW1wb3J0IHsgZ2V0R2VucmVzLCBnZXRMZXZlbHMsIGdldERpZmZpY3VsdGllcywgZGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL01haW1haS5jb25zdGFudHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxpbmcvTWFpbWFpLm1vZHVsZS5jc3MnO1xuXG4vLyBDcmVhdGUgQXhpb3MgaW5zdGFuY2UuXG5jb25zdCBhcGk6IEF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiAnaHR0cHM6Ly9raW5nb2Zib3hlcy5teGJsdWUubmV0LmF1OjQwMDAvJyxcbn0pO1xuXG5jb25zdCBjb250ZW50UHJvcHM6IENvbnRlbnRQcm9wcyA9IHtcbiAgaGVhZGluZzogJ01haW1haSBEWCcsXG4gIGRlc2NyaXB0aW9uOiBbXG4gICAgYE1haW1haSBEWCBpcyBhbiBhcmNhZGUgcmh5dGhtIGdhbWUgd2l0aCBlaWdodCBidXR0b25zIHNwYWNlZCBhcm91bmQgaW4gYSBjaXJjbGUuIFxuICBCZWxvdyBhcmUgYSBsaXN0IG9mIHNvbmdzIGF2YWlsYWJsZSBvbiB0aGUgbWFjaGluZSAodGhlIGludGVybmF0aW9uYWwgdmVyc2lvbiksIFxuICBhcyB0aGUgc29uZyBsaXN0IG9uIHRoZSBvZmZpY2lhbCBzaXRlIGlzIG5vdCB1cC10by1kYXRlLmAsXG4gICAgYEV2ZXJ5IHNvbmcgaXMgZWl0aGVyIGEgXCJEZWx1eGVcIiBvciBcIlN0YW5kYXJkXCIgc29uZywgYW5kIGlzIHNwZWNpZmllZCBieSB0aGUgbG9nby4gSWYgaXQgaXMgYSBEZWx1eGUgc29uZyxcbiAgdGhlIGZvbnQgY29sb3IgaXMgcmFpbmJvdywgYW5kIGlmIGl0IGlzIGEgU3RhbmRhcmQgc29uZywgdGhlIGZvbnQgY29sb3IgaXMgd2hpdGUuIERlbHV4ZSBzb25nc1xuICBhcmUgZXhjbHVzaXZlIHRvIE1haW1haSBEWCwgYW5kIHNvbWUgc29uZ3MgbWF5IGV2ZW4gaGF2ZSBib3RoIERlbHV4ZSBhbmQgU3RhbmRhcmQgdmVyc2lvbnMhIFRoZSBnZW5yZVxuICBmb3IgZWFjaCBzb25nIGlzIGxvY2F0ZWQgaW4gdGhlIHRvcCByaWdodCBjb3JuZXIuYCxcbiAgICBgRWFjaCBzb25nIGhhcyBhIG1pbmltdW0gb2YgZm91ciBkaWZmaWN1bHRpZXM6IEJBU0lDLCBBRFZBTkNFRCwgRVhQRVJUIGFuZCBNQVNURVIuXG4gIFNvbWUgc29uZ3MgaGF2ZSBhIGZpZnRoIGRpZmZpY3VsdHksIFJFOk1BU1RFUiwgd2hpY2ggaXMgaGFyZGVyIHRoYW4gTUFTVEVSLiBUaGUgZGlmZmljdWx0eSBsZXZlbHNcbiAgb2YgdGhlIHNvbmdzIHJhbmdlIGZyb20gMSB0byAxNSwgYW5kIHRoZXJlIGlzIG9ubHkgY3VycmVudGx5IG9uZSBzb25nIHRoYXQgaXMgTGV2ZWwgMTUuYCxcbiAgICBgSSBkbyBub3Qgb3duIGFueSBvZiB0aGUgaW1hZ2VzIG9yIHNvbmdzLCBhbGwgb3duZXJzaGlwIGJlbG9uZ3MgdG8gU0VHQS5gLFxuICBdLFxufTtcblxuY29uc3QgTWFpbWFpRFg6IE5leHRQYWdlPE1NUGxheWVyRGF0YT4gPSAoZGF0YSkgPT4ge1xuXG4gIC8vIFZhcmlhYmxlcyBmb3IgY29udHJvbGxpbmcgc3RhdGUgb24gdGhpcyBwYWdlLlxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oNSk7XG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPE1NU29uZ1JlY29yZFtdPihkYXRhLnJlY29yZCk7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gUmVhY3QudXNlU3RhdGU8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4oZGVmYXVsdE9wdGlvbnMpO1xuICBjb25zdCBnZW5yZUxpc3QgPSBnZXRHZW5yZXMoZGF0YS5yZWNvcmQpO1xuICBjb25zdCBsZXZlbHNMaXN0ID0gZ2V0TGV2ZWxzKGRhdGEucmVjb3JkKTtcbiAgY29uc3QgZGlmZmljdWx0aWVzTGlzdCA9IGdldERpZmZpY3VsdGllcygpO1xuXG4gIC8vIFVzZUVmZmVjdCBob29rIGZvciBpbmZpbml0ZSBzY3JvbGwuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoZWlnaHQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodDtcbiAgICAgIGNvbnN0IGN1cnIgPSB3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGlmIChjdXJyID49IGhlaWdodCkge1xuICAgICAgICBpZiAobGlzdCAmJiByZXN1bHRzIDwgbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRSZXN1bHRzKHJlc3VsdHMgKyAxMCk7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbbGlzdCwgcmVzdWx0c10pO1xuXG4gIC8vIEhhbmRsZSBmaWx0ZXJpbmcgYnkgbmFtZSwgYXJ0aXN0LCBnZW5yZSBhbmQgbGV2ZWwuXG4gIGNvbnN0IHNldE5hbWUgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5xdWVyeSwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfVxuICAgIGZpbHRlcihvcHRpb25zKVxuICB9XG5cbiAgY29uc3Qgc2V0QXJ0aXN0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4ucXVlcnksIGFydGlzdDogZXZlbnQudGFyZ2V0LnZhbHVlfVxuICAgIGZpbHRlcihvcHRpb25zKVxuICB9XG5cbiAgY29uc3Qgc2V0R2VucmUgPSAoX2V2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4sIGRhdGE6IERyb3Bkb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCBnZW5yZSA9IFN0cmluZyhkYXRhLnZhbHVlKTtcbiAgICBjb25zdCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gey4uLnF1ZXJ5LCBnZW5yZTogZ2VucmV9XG4gICAgZmlsdGVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBzZXRMZXZlbCA9IChfZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PiwgZGF0YTogRHJvcGRvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IGxldmVsID0gU3RyaW5nKGRhdGEudmFsdWUpO1xuICAgIGNvbnN0IG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7Li4ucXVlcnksIGxldmVsOiBsZXZlbH1cbiAgICBmaWx0ZXIob3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IHNldERpZmZpY3VsdHkgPSAoX2V2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4sIGRhdGE6IERyb3Bkb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCBkaWZmaWN1bHR5ID0gU3RyaW5nKGRhdGEudmFsdWUpO1xuICAgIGNvbnN0IG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7Li4ucXVlcnksIGRpZmZpY3VsdHk6IGRpZmZpY3VsdHl9O1xuICAgIGZpbHRlcihvcHRpb25zKVxuICB9XG5cbiAgY29uc3QgY2hlY2tMZXZlbCA9IChsaXN0OiBNTVNvbmdSZWNvcmRbXSwgbGV2ZWw6IHN0cmluZykgPT4ge1xuICAgIC8vIFRha2UgY2FyZSBvZiBtZXRhIGNoYXJhY3RlciBmb3IgcmVnZXguXG4gICAgY29uc3QgbGV2ZWxQYXR0ZXJuID0gbGV2ZWwucmVwbGFjZSgnKycsIGBcXFxcK2ApO1xuICAgIGxldCBuZXdMaXN0OiBNTVNvbmdSZWNvcmRbXSA9IFtdO1xuICAgIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeJHtsZXZlbFBhdHRlcm59JGAsICdpJyk7XG4gICAgbGlzdC5mb3JFYWNoKChzb25nOiBNTVNvbmdSZWNvcmQpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHNvbmcuZGF0YSkubWFwKChkaWZmOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHBhdHRlcm4udGVzdChzb25nLmRhdGFbZGlmZiBhcyBrZXlvZiBNTVNvbmdEYXRhXS5sZXZlbCkpIHtcbiAgICAgICAgICBuZXdMaXN0LnB1c2goc29uZyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIEZpbHRlciBvdXQgZHVwbGljYXRlIHNvbmdzIHdpdGggc2FtZSBsZXZlbHMgZm9yIG11bHRpcGxlIGRpZmZpY3VsdGllcy5cbiAgICBuZXdMaXN0ID0gbmV3TGlzdC5maWx0ZXIoKHNvbmcsIGlkeCkgPT4gbmV3TGlzdC5pbmRleE9mKHNvbmcpID09PSBpZHgpO1xuICAgIHJldHVybiBuZXdMaXN0O1xuICB9XG5cbiAgY29uc3QgY2hlY2tMZXZlbERpZmZpY3VsdHkgPSAobGlzdDogTU1Tb25nUmVjb3JkW10sIGxldmVsOiBzdHJpbmcsIGRpZmZpY3VsdHk6IHN0cmluZykgPT4ge1xuICAgIC8vIFRha2UgY2FyZSBvZiBtZXRhIGNoYXJhY3RlciBmb3IgcmVnZXguXG4gICAgY29uc3QgbGV2ZWxQYXR0ZXJuID0gbGV2ZWwucmVwbGFjZSgnKycsIGBcXFxcK2ApO1xuICAgIGxldCBuZXdMaXN0OiBNTVNvbmdSZWNvcmRbXSA9IFtdO1xuICAgIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeJHtsZXZlbFBhdHRlcm59JGAsICdpJyk7XG4gICAgbGlzdC5mb3JFYWNoKChzb25nOiBNTVNvbmdSZWNvcmQpID0+IHtcbiAgICAgIGlmIChzb25nLmRhdGFbZGlmZmljdWx0eSBhcyBrZXlvZiBNTVNvbmdEYXRhXSAmJiBwYXR0ZXJuLnRlc3Qoc29uZy5kYXRhW2RpZmZpY3VsdHkgYXMga2V5b2YgTU1Tb25nRGF0YV0ubGV2ZWwpKSB7XG4gICAgICAgIG5ld0xpc3QucHVzaChzb25nKTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gRmlsdGVyIG91dCBkdXBsaWNhdGUgc29uZ3Mgd2l0aCBzYW1lIGxldmVscyBmb3IgbXVsdGlwbGUgZGlmZmljdWx0aWVzLlxuICAgIG5ld0xpc3QgPSBuZXdMaXN0LmZpbHRlcigoc29uZywgaWR4KSA9PiBuZXdMaXN0LmluZGV4T2Yoc29uZykgPT09IGlkeCk7XG4gICAgcmV0dXJuIG5ld0xpc3Q7XG4gIH1cblxuICBjb25zdCBmaWx0ZXIgPSAob3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPT4ge1xuXG4gICAgbGV0IHBhdHRlcm46IFJlZ0V4cDtcbiAgICBsZXQgbmV3TGlzdCA9IGRhdGEucmVjb3JkO1xuXG4gICAgaWYgKG9wdGlvbnMubmFtZSAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeJHtvcHRpb25zLm5hbWV9YCwgJ2knKTtcbiAgICAgIG5ld0xpc3QgPSBuZXdMaXN0LmZpbHRlcigoc29uZykgPT4gcGF0dGVybi50ZXN0KHNvbmcuc29uZykpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFydGlzdCAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeJHtvcHRpb25zLmFydGlzdH1gLCAnaScpO1xuICAgICAgbmV3TGlzdCA9IG5ld0xpc3QuZmlsdGVyKChzb25nKSA9PiBwYXR0ZXJuLnRlc3Qoc29uZy5hcnRpc3QpKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5nZW5yZSAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG9wdGlvbnMuZ2VucmUsICdpJyk7XG4gICAgICBuZXdMaXN0ID0gbmV3TGlzdC5maWx0ZXIoKHNvbmcpID0+IHBhdHRlcm4udGVzdChzb25nLmdlbnJlKSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubGV2ZWwgIT09ICcnKSB7XG4gICAgICBuZXdMaXN0ID0gY2hlY2tMZXZlbChuZXdMaXN0LCBvcHRpb25zLmxldmVsKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5sZXZlbCAhPT0gJycgJiYgb3B0aW9ucy5kaWZmaWN1bHR5ICE9PSAnJykge1xuICAgICAgbmV3TGlzdCA9IGNoZWNrTGV2ZWxEaWZmaWN1bHR5KG5ld0xpc3QsIG9wdGlvbnMubGV2ZWwsIG9wdGlvbnMuZGlmZmljdWx0eSk7XG4gICAgfVxuXG4gICAgc2V0TGlzdChuZXdMaXN0KTtcbiAgICBzZXRRdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFB1YmxpY1NoZWxsIHRpdGxlPVwiTWFpbWFpIERYIFNvbmcgTGlzdCB8IEp1c3RpbidzIFdlYnNpdGVcIj5cbiAgICAgIDxDb250ZW50SGVhZGVyIGRhdGE9e2NvbnRlbnRQcm9wc30gLz5cbiAgICAgIDxoMj5Tb25nIExpc3Q8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxuICAgICAgICA8Rm9ybSBpbnZlcnRlZD5cbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9J2VxdWFsJz5cbiAgICAgICAgICAgIDxGb3JtLklucHV0IGZsdWlkIGxhYmVsPSdTb25nIE5hbWU6JyBwbGFjZWhvbGRlcj0nU2VhcmNoIGJ5IHNvbmcgbmFtZS4uLicgdmFsdWU9e3F1ZXJ5Lm5hbWV9IG9uQ2hhbmdlPXtzZXROYW1lfSAvPlxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgZmx1aWQgbGFiZWw9J0FydGlzdDonIHBsYWNlaG9sZGVyPSdTZWFyY2ggYnkgYXJ0aXN0Li4uJyB2YWx1ZT17cXVlcnkuYXJ0aXN0fSBvbkNoYW5nZT17c2V0QXJ0aXN0fS8+XG4gICAgICAgICAgICA8Rm9ybS5Ecm9wZG93biBjbGVhcmFibGUgZmx1aWQgbGFiZWw9J0dlbnJlOicgc2VsZWN0aW9uIHBsYWNlaG9sZGVyPSdGaWx0ZXIgYnkgZ2VucmUuLi4nIG9wdGlvbnM9e2dlbnJlTGlzdH0gb25DaGFuZ2U9e3NldEdlbnJlfSAvPlxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9J2VxdWFsJz5cbiAgICAgICAgICAgIDxGb3JtLkRyb3Bkb3duIGNsZWFyYWJsZSBmbHVpZCBsYWJlbD0nRGlmZmljdWx0eTonIHNlbGVjdGlvbiBwbGFjZWhvbGRlcj0nRmlsdGVyIGJ5IGRpZmZpY3VsdHkuLi4nIG9wdGlvbnM9e2RpZmZpY3VsdGllc0xpc3R9IG9uQ2hhbmdlPXtzZXREaWZmaWN1bHR5fSAvPlxuICAgICAgICAgICAgPEZvcm0uRHJvcGRvd24gY2xlYXJhYmxlIGZsdWlkIGxhYmVsPSdMZXZlbDonIHNlbGVjdGlvbiBwbGFjZWhvbGRlcj0nRmlsdGVyIGJ5IGxldmVsLi4uJyBvcHRpb25zPXtsZXZlbHNMaXN0fSBvbkNoYW5nZT17c2V0TGV2ZWx9IC8+XG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsaXN0ICYmXG4gICAgICAgIGxpc3QubWFwKChzb25nOiBNTVNvbmdSZWNvcmQsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgaWYgKGlkeCA8IHJlc3VsdHMpIHtcbiAgICAgICAgICAgIHJldHVybiA8TWFpbWFpU29uZ0NvbXBvbmVudCBzb25nPXtzb25nfSBrZXk9e3NvbmcuaWR9IC8+O1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICB7bG9hZGluZyAmJiA8TWFpbWFpU29uZ0xvYWRlciAvPn1cbiAgICA8L1B1YmxpY1NoZWxsPlxuICApO1xufTtcblxuLy8gRmV0Y2ggZGF0YSBiZWZvcmUgbG9hZC5cbk1haW1haURYLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCgnL21haW1haScpO1xuICBjb25zdCBkYXRhOiBNTVBsYXllckRhdGEgPSByZXMuZGF0YTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWltYWlEWDtcbiJdLCJzb3VyY2VSb290IjoiIn0=