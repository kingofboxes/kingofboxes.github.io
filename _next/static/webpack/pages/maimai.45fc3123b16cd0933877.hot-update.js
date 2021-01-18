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
      if (pattern.test(song.data[difficulty].level)) {
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
            fluid: true,
            label: "Difficulty:",
            selection: true,
            placeholder: "Filter by difficulty...",
            options: difficultiesList,
            onChange: setGenre
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Dropdown, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS50c3giXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY29udGVudFByb3BzIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwiTWFpbWFpRFgiLCJkYXRhIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJyZWNvcmQiLCJsaXN0Iiwic2V0TGlzdCIsImRlZmF1bHRPcHRpb25zIiwicXVlcnkiLCJzZXRRdWVyeSIsImdlbnJlTGlzdCIsImdldEdlbnJlcyIsImxldmVsc0xpc3QiLCJnZXRMZXZlbHMiLCJkaWZmaWN1bHRpZXNMaXN0IiwiZ2V0RGlmZmljdWx0aWVzIiwidXNlRWZmZWN0IiwiY2hlY2tTY3JvbGwiLCJoZWlnaHQiLCJkb2N1bWVudCIsImJvZHkiLCJzY3JvbGxIZWlnaHQiLCJjdXJyIiwid2luZG93Iiwic2Nyb2xsWSIsImlubmVySGVpZ2h0IiwibGVuZ3RoIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0TmFtZSIsImV2ZW50Iiwib3B0aW9ucyIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlciIsInNldEFydGlzdCIsImFydGlzdCIsInNldEdlbnJlIiwiX2V2ZW50IiwiZ2VucmUiLCJTdHJpbmciLCJzZXRMZXZlbCIsImxldmVsIiwic2V0RGlmZmljdWx0eSIsImRpZmZpY3VsdHkiLCJjaGVja0xldmVsIiwibGV2ZWxQYXR0ZXJuIiwicmVwbGFjZSIsIm5ld0xpc3QiLCJwYXR0ZXJuIiwiUmVnRXhwIiwiZm9yRWFjaCIsInNvbmciLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZGlmZiIsInRlc3QiLCJwdXNoIiwiaWR4IiwiaW5kZXhPZiIsImNoZWNrTGV2ZWxEaWZmaWN1bHR5Iiwic3R5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QU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixFQWdCR3RDLElBQUksSUFDSEEsSUFBSSxDQUFDb0QsR0FBTCxDQUFTLFVBQUNILElBQUQsRUFBcUJPLEdBQXJCLEVBQXFDO0FBQzVDLFVBQUlBLEdBQUcsR0FBRzNELE9BQVYsRUFBbUI7QUFDakIsNEJBQU8scUVBQUMsaUVBQUQ7QUFBcUIsY0FBSSxFQUFFb0Q7QUFBM0IsV0FBc0NBLElBQUksQ0FBQ1ksRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEO0FBQ0YsS0FKRCxDQWpCSixFQXNCR2xFLE9BQU8saUJBQUkscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQXpKRCxDLENBMkpBOzs7R0EzSk1KLFE7O0tBQUFBLFE7QUE0Sk5BLFFBQVEsQ0FBQ3VFLGVBQVQsK1NBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1A5RSxHQUFHLENBQUMrRSxHQUFKLENBQVEsU0FBUixDQURPOztBQUFBO0FBQ25CQyxhQURtQjtBQUVuQnhFLGNBRm1CLEdBRUV3RSxHQUFHLENBQUN4RSxJQUZOO0FBQUEsMkNBR2xCQSxJQUhrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUEzQjtBQU1lRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWltYWkuNDVmYzMxMjNiMTZjZDA5MzM4NzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRHJvcGRvd25Qcm9wcywgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgQ29udGVudEhlYWRlciBmcm9tICcuLi8uLi9jb21tb24vQ29udGVudEhlYWRlcic7XG5pbXBvcnQgUHVibGljU2hlbGwgZnJvbSAnLi4vLi4vY29tbW9uL1B1YmxpY1NoZWxsJztcbmltcG9ydCB7IE1NUGxheWVyRGF0YSwgTU1Tb25nUmVjb3JkLCBDb250ZW50UHJvcHMsIE1NU29uZ0RhdGEgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBNYWltYWlTb25nQ29tcG9uZW50LCBNYWltYWlTb25nTG9hZGVyIH0gZnJvbSAnLi9NYWltYWkuZGF0YSc7XG5pbXBvcnQgeyBnZXRHZW5yZXMsIGdldExldmVscywgZ2V0RGlmZmljdWx0aWVzLCBkZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vTWFpbWFpLmNvbnN0YW50cyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGluZy9NYWltYWkubW9kdWxlLmNzcyc7XG5cbi8vIENyZWF0ZSBBeGlvcyBpbnN0YW5jZS5cbmNvbnN0IGFwaTogQXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6ICdodHRwczovL2tpbmdvZmJveGVzLm14Ymx1ZS5uZXQuYXU6NDAwMC8nLFxufSk7XG5cbmNvbnN0IGNvbnRlbnRQcm9wczogQ29udGVudFByb3BzID0ge1xuICBoZWFkaW5nOiAnTWFpbWFpIERYJyxcbiAgZGVzY3JpcHRpb246IFtcbiAgICBgTWFpbWFpIERYIGlzIGFuIGFyY2FkZSByaHl0aG0gZ2FtZSB3aXRoIGVpZ2h0IGJ1dHRvbnMgc3BhY2VkIGFyb3VuZCBpbiBhIGNpcmNsZS4gXG4gIEJlbG93IGFyZSBhIGxpc3Qgb2Ygc29uZ3MgYXZhaWxhYmxlIG9uIHRoZSBtYWNoaW5lICh0aGUgaW50ZXJuYXRpb25hbCB2ZXJzaW9uKSwgXG4gIGFzIHRoZSBzb25nIGxpc3Qgb24gdGhlIG9mZmljaWFsIHNpdGUgaXMgbm90IHVwLXRvLWRhdGUuYCxcbiAgICBgRXZlcnkgc29uZyBpcyBlaXRoZXIgYSBcIkRlbHV4ZVwiIG9yIFwiU3RhbmRhcmRcIiBzb25nLCBhbmQgaXMgc3BlY2lmaWVkIGJ5IHRoZSBsb2dvLiBJZiBpdCBpcyBhIERlbHV4ZSBzb25nLFxuICB0aGUgZm9udCBjb2xvciBpcyByYWluYm93LCBhbmQgaWYgaXQgaXMgYSBTdGFuZGFyZCBzb25nLCB0aGUgZm9udCBjb2xvciBpcyB3aGl0ZS4gRGVsdXhlIHNvbmdzXG4gIGFyZSBleGNsdXNpdmUgdG8gTWFpbWFpIERYLCBhbmQgc29tZSBzb25ncyBtYXkgZXZlbiBoYXZlIGJvdGggRGVsdXhlIGFuZCBTdGFuZGFyZCB2ZXJzaW9ucyEgVGhlIGdlbnJlXG4gIGZvciBlYWNoIHNvbmcgaXMgbG9jYXRlZCBpbiB0aGUgdG9wIHJpZ2h0IGNvcm5lci5gLFxuICAgIGBFYWNoIHNvbmcgaGFzIGEgbWluaW11bSBvZiBmb3VyIGRpZmZpY3VsdGllczogQkFTSUMsIEFEVkFOQ0VELCBFWFBFUlQgYW5kIE1BU1RFUi5cbiAgU29tZSBzb25ncyBoYXZlIGEgZmlmdGggZGlmZmljdWx0eSwgUkU6TUFTVEVSLCB3aGljaCBpcyBoYXJkZXIgdGhhbiBNQVNURVIuIFRoZSBkaWZmaWN1bHR5IGxldmVsc1xuICBvZiB0aGUgc29uZ3MgcmFuZ2UgZnJvbSAxIHRvIDE1LCBhbmQgdGhlcmUgaXMgb25seSBjdXJyZW50bHkgb25lIHNvbmcgdGhhdCBpcyBMZXZlbCAxNS5gLFxuICAgIGBJIGRvIG5vdCBvd24gYW55IG9mIHRoZSBpbWFnZXMgb3Igc29uZ3MsIGFsbCBvd25lcnNoaXAgYmVsb25ncyB0byBTRUdBLmAsXG4gIF0sXG59O1xuXG5jb25zdCBNYWltYWlEWDogTmV4dFBhZ2U8TU1QbGF5ZXJEYXRhPiA9IChkYXRhKSA9PiB7XG5cbiAgLy8gVmFyaWFibGVzIGZvciBjb250cm9sbGluZyBzdGF0ZSBvbiB0aGlzIHBhZ2UuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPig1KTtcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gUmVhY3QudXNlU3RhdGU8TU1Tb25nUmVjb3JkW10+KGRhdGEucmVjb3JkKTtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSBSZWFjdC51c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PihkZWZhdWx0T3B0aW9ucyk7XG4gIGNvbnN0IGdlbnJlTGlzdCA9IGdldEdlbnJlcyhkYXRhLnJlY29yZCk7XG4gIGNvbnN0IGxldmVsc0xpc3QgPSBnZXRMZXZlbHMoZGF0YS5yZWNvcmQpO1xuICBjb25zdCBkaWZmaWN1bHRpZXNMaXN0ID0gZ2V0RGlmZmljdWx0aWVzKCk7XG5cbiAgLy8gVXNlRWZmZWN0IGhvb2sgZm9yIGluZmluaXRlIHNjcm9sbC5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVja1Njcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0O1xuICAgICAgY29uc3QgY3VyciA9IHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgaWYgKGN1cnIgPj0gaGVpZ2h0KSB7XG4gICAgICAgIGlmIChsaXN0ICYmIHJlc3VsdHMgPCBsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFJlc3VsdHMocmVzdWx0cyArIDEwKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtsaXN0LCByZXN1bHRzXSk7XG5cbiAgLy8gSGFuZGxlIGZpbHRlcmluZyBieSBuYW1lLCBhcnRpc3QsIGdlbnJlIGFuZCBsZXZlbC5cbiAgY29uc3Qgc2V0TmFtZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gey4uLnF1ZXJ5LCBuYW1lOiBldmVudC50YXJnZXQudmFsdWV9XG4gICAgZmlsdGVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBzZXRBcnRpc3QgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5xdWVyeSwgYXJ0aXN0OiBldmVudC50YXJnZXQudmFsdWV9XG4gICAgZmlsdGVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBzZXRHZW5yZSA9IChfZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PiwgZGF0YTogRHJvcGRvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IGdlbnJlID0gU3RyaW5nKGRhdGEudmFsdWUpO1xuICAgIGNvbnN0IG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7Li4ucXVlcnksIGdlbnJlOiBnZW5yZX1cbiAgICBmaWx0ZXIob3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IHNldExldmVsID0gKF9ldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTEVsZW1lbnQ+LCBkYXRhOiBEcm9wZG93blByb3BzKSA9PiB7XG4gICAgY29uc3QgbGV2ZWwgPSBTdHJpbmcoZGF0YS52YWx1ZSk7XG4gICAgY29uc3Qgb3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHsuLi5xdWVyeSwgbGV2ZWw6IGxldmVsfVxuICAgIGZpbHRlcihvcHRpb25zKVxuICB9XG5cbiAgY29uc3Qgc2V0RGlmZmljdWx0eSA9IChfZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PiwgZGF0YTogRHJvcGRvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IGRpZmZpY3VsdHkgPSBTdHJpbmcoZGF0YS52YWx1ZSk7XG4gICAgY29uc3Qgb3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHsuLi5xdWVyeSwgZGlmZmljdWx0eTogZGlmZmljdWx0eX07XG4gICAgZmlsdGVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBjaGVja0xldmVsID0gKGxpc3Q6IE1NU29uZ1JlY29yZFtdLCBsZXZlbDogc3RyaW5nKSA9PiB7XG4gICAgLy8gVGFrZSBjYXJlIG9mIG1ldGEgY2hhcmFjdGVyIGZvciByZWdleC5cbiAgICBjb25zdCBsZXZlbFBhdHRlcm4gPSBsZXZlbC5yZXBsYWNlKCcrJywgYFxcXFwrYCk7XG4gICAgbGV0IG5ld0xpc3Q6IE1NU29uZ1JlY29yZFtdID0gW107XG4gICAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoYF4ke2xldmVsUGF0dGVybn0kYCwgJ2knKTtcbiAgICBsaXN0LmZvckVhY2goKHNvbmc6IE1NU29uZ1JlY29yZCkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoc29uZy5kYXRhKS5tYXAoKGRpZmY6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAocGF0dGVybi50ZXN0KHNvbmcuZGF0YVtkaWZmIGFzIGtleW9mIE1NU29uZ0RhdGFdLmxldmVsKSkge1xuICAgICAgICAgIG5ld0xpc3QucHVzaChzb25nKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gRmlsdGVyIG91dCBkdXBsaWNhdGUgc29uZ3Mgd2l0aCBzYW1lIGxldmVscyBmb3IgbXVsdGlwbGUgZGlmZmljdWx0aWVzLlxuICAgIG5ld0xpc3QgPSBuZXdMaXN0LmZpbHRlcigoc29uZywgaWR4KSA9PiBuZXdMaXN0LmluZGV4T2Yoc29uZykgPT09IGlkeCk7XG4gICAgcmV0dXJuIG5ld0xpc3Q7XG4gIH1cblxuICBjb25zdCBjaGVja0xldmVsRGlmZmljdWx0eSA9IChsaXN0OiBNTVNvbmdSZWNvcmRbXSwgbGV2ZWw6IHN0cmluZywgZGlmZmljdWx0eTogc3RyaW5nKSA9PiB7XG4gICAgLy8gVGFrZSBjYXJlIG9mIG1ldGEgY2hhcmFjdGVyIGZvciByZWdleC5cbiAgICBjb25zdCBsZXZlbFBhdHRlcm4gPSBsZXZlbC5yZXBsYWNlKCcrJywgYFxcXFwrYCk7XG4gICAgbGV0IG5ld0xpc3Q6IE1NU29uZ1JlY29yZFtdID0gW107XG4gICAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoYF4ke2xldmVsUGF0dGVybn0kYCwgJ2knKTtcbiAgICBsaXN0LmZvckVhY2goKHNvbmc6IE1NU29uZ1JlY29yZCkgPT4ge1xuICAgICAgaWYgKHBhdHRlcm4udGVzdChzb25nLmRhdGFbZGlmZmljdWx0eV0ubGV2ZWwpKSB7XG4gICAgICAgIG5ld0xpc3QucHVzaChzb25nKTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gRmlsdGVyIG91dCBkdXBsaWNhdGUgc29uZ3Mgd2l0aCBzYW1lIGxldmVscyBmb3IgbXVsdGlwbGUgZGlmZmljdWx0aWVzLlxuICAgIG5ld0xpc3QgPSBuZXdMaXN0LmZpbHRlcigoc29uZywgaWR4KSA9PiBuZXdMaXN0LmluZGV4T2Yoc29uZykgPT09IGlkeCk7XG4gICAgcmV0dXJuIG5ld0xpc3Q7XG4gIH1cblxuICBjb25zdCBmaWx0ZXIgPSAob3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPT4ge1xuXG4gICAgbGV0IHBhdHRlcm46IFJlZ0V4cDtcbiAgICBsZXQgbmV3TGlzdCA9IGRhdGEucmVjb3JkO1xuXG4gICAgaWYgKG9wdGlvbnMubmFtZSAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG9wdGlvbnMubmFtZSwgJ2knKTtcbiAgICAgIG5ld0xpc3QgPSBuZXdMaXN0LmZpbHRlcigoc29uZykgPT4gcGF0dGVybi50ZXN0KHNvbmcuc29uZykpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFydGlzdCAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG9wdGlvbnMuYXJ0aXN0LCAnaScpO1xuICAgICAgbmV3TGlzdCA9IG5ld0xpc3QuZmlsdGVyKChzb25nKSA9PiBwYXR0ZXJuLnRlc3Qoc29uZy5hcnRpc3QpKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5nZW5yZSAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG9wdGlvbnMuZ2VucmUsICdpJyk7XG4gICAgICBuZXdMaXN0ID0gbmV3TGlzdC5maWx0ZXIoKHNvbmcpID0+IHBhdHRlcm4udGVzdChzb25nLmdlbnJlKSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubGV2ZWwgIT09ICcnKSB7XG4gICAgICBuZXdMaXN0ID0gY2hlY2tMZXZlbChuZXdMaXN0LCBvcHRpb25zLmxldmVsKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5sZXZlbCAhPT0gJycgJiYgb3B0aW9ucy5kaWZmaWN1bHR5ICE9PSAnJykge1xuICAgICAgbmV3TGlzdCA9IGNoZWNrTGV2ZWxEaWZmaWN1bHR5KG5ld0xpc3QsIG9wdGlvbnMubGV2ZWwsIG9wdGlvbnMuZGlmZmljdWx0eSk7XG4gICAgfVxuXG4gICAgc2V0TGlzdChuZXdMaXN0KTtcbiAgICBzZXRRdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFB1YmxpY1NoZWxsIHRpdGxlPVwiTWFpbWFpIERYIFNvbmcgTGlzdCB8IEp1c3RpbidzIFdlYnNpdGVcIj5cbiAgICAgIDxDb250ZW50SGVhZGVyIGRhdGE9e2NvbnRlbnRQcm9wc30gLz5cbiAgICAgIDxoMj5Tb25nIExpc3Q8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxuICAgICAgICA8Rm9ybSBpbnZlcnRlZD5cbiAgICAgICAgICA8Rm9ybS5Hcm91cCB3aWR0aHM9J2VxdWFsJz5cbiAgICAgICAgICAgIDxGb3JtLklucHV0IGZsdWlkIGxhYmVsPSdTb25nIE5hbWU6JyBwbGFjZWhvbGRlcj0nU2VhcmNoIGJ5IHNvbmcgbmFtZS4uLicgdmFsdWU9e3F1ZXJ5Lm5hbWV9IG9uQ2hhbmdlPXtzZXROYW1lfSAvPlxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgZmx1aWQgbGFiZWw9J0FydGlzdDonIHBsYWNlaG9sZGVyPSdTZWFyY2ggYnkgYXJ0aXN0Li4uJyB2YWx1ZT17cXVlcnkuYXJ0aXN0fSBvbkNoYW5nZT17c2V0QXJ0aXN0fS8+XG4gICAgICAgICAgICA8Rm9ybS5Ecm9wZG93biBmbHVpZCBsYWJlbD0nR2VucmU6JyBzZWxlY3Rpb24gcGxhY2Vob2xkZXI9J0ZpbHRlciBieSBnZW5yZS4uLicgb3B0aW9ucz17Z2VucmVMaXN0fSBvbkNoYW5nZT17c2V0R2VucmV9IC8+XG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz0nZXF1YWwnPlxuICAgICAgICAgICAgPEZvcm0uRHJvcGRvd24gZmx1aWQgbGFiZWw9J0RpZmZpY3VsdHk6JyBzZWxlY3Rpb24gcGxhY2Vob2xkZXI9J0ZpbHRlciBieSBkaWZmaWN1bHR5Li4uJyBvcHRpb25zPXtkaWZmaWN1bHRpZXNMaXN0fSBvbkNoYW5nZT17c2V0R2VucmV9IC8+XG4gICAgICAgICAgICA8Rm9ybS5Ecm9wZG93biBmbHVpZCBsYWJlbD0nTGV2ZWw6JyBzZWxlY3Rpb24gcGxhY2Vob2xkZXI9J0ZpbHRlciBieSBsZXZlbC4uLicgb3B0aW9ucz17bGV2ZWxzTGlzdH0gb25DaGFuZ2U9e3NldExldmVsfSAvPlxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICB7bGlzdCAmJlxuICAgICAgICBsaXN0Lm1hcCgoc29uZzogTU1Tb25nUmVjb3JkLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmIChpZHggPCByZXN1bHRzKSB7XG4gICAgICAgICAgICByZXR1cm4gPE1haW1haVNvbmdDb21wb25lbnQgc29uZz17c29uZ30ga2V5PXtzb25nLmlkfSAvPjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAge2xvYWRpbmcgJiYgPE1haW1haVNvbmdMb2FkZXIgLz59XG4gICAgPC9QdWJsaWNTaGVsbD5cbiAgKTtcbn07XG5cbi8vIEZldGNoIGRhdGEgYmVmb3JlIGxvYWQuXG5NYWltYWlEWC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXQoJy9tYWltYWknKTtcbiAgY29uc3QgZGF0YTogTU1QbGF5ZXJEYXRhID0gcmVzLmRhdGE7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbWFpRFg7XG4iXSwic291cmNlUm9vdCI6IiJ9