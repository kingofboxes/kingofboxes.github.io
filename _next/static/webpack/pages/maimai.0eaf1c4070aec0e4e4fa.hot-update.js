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
      lineNumber: 160,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
      children: "Song List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
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
            lineNumber: 165,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
            fluid: true,
            label: "Artist:",
            placeholder: "Search by artist...",
            value: query.artist,
            onChange: setArtist
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
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
            lineNumber: 167,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
          widths: "equal",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Dropdown, {
            fluid: true,
            label: "Difficulty:",
            selection: true,
            placeholder: "Filter by difficulty...",
            options: genreList,
            onChange: setGenre
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
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
            lineNumber: 171,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, _this), list && list.map(function (song, idx) {
      if (idx < results) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongComponent"], {
          song: song
        }, song.id, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 20
        }, _this);
      }
    }), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongLoader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 19
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 159,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS50c3giXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY29udGVudFByb3BzIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwiTWFpbWFpRFgiLCJkYXRhIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJyZWNvcmQiLCJsaXN0Iiwic2V0TGlzdCIsImRlZmF1bHRPcHRpb25zIiwicXVlcnkiLCJzZXRRdWVyeSIsImdlbnJlTGlzdCIsImdldEdlbnJlcyIsImxldmVsc0xpc3QiLCJnZXRMZXZlbHMiLCJkaWZmaWN1bHRpZXNMaXN0IiwiZ2V0RGlmZmljdWx0aWVzIiwidXNlRWZmZWN0IiwiY2hlY2tTY3JvbGwiLCJoZWlnaHQiLCJkb2N1bWVudCIsImJvZHkiLCJzY3JvbGxIZWlnaHQiLCJjdXJyIiwid2luZG93Iiwic2Nyb2xsWSIsImlubmVySGVpZ2h0IiwibGVuZ3RoIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0TmFtZSIsImV2ZW50Iiwib3B0aW9ucyIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlciIsInNldEFydGlzdCIsImFydGlzdCIsInNldEdlbnJlIiwiX2V2ZW50IiwiZ2VucmUiLCJTdHJpbmciLCJzZXRMZXZlbCIsImxldmVsIiwiY2hlY2tMZXZlbCIsImxldmVsUGF0dGVybiIsInJlcGxhY2UiLCJuZXdMaXN0IiwicGF0dGVybiIsIlJlZ0V4cCIsImZvckVhY2giLCJzb25nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImRpZmYiLCJ0ZXN0IiwicHVzaCIsImlkeCIsImluZGV4T2YiLCJjaGVja0xldmVsRGlmZmljdWx0eSIsImRpZmZpY3VsdHkiLCJzdHlsZXMiLCJzZWFyY2giLCJp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QUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDtBQUNGLEtBSkQsQ0FqQkosRUFzQkdqRSxPQUFPLGlCQUFJLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0FuSkQsQyxDQXFKQTs7O0dBckpNSixROztLQUFBQSxRO0FBc0pOQSxRQUFRLENBQUNzRSxlQUFULCtTQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNQN0UsR0FBRyxDQUFDOEUsR0FBSixDQUFRLFNBQVIsQ0FETzs7QUFBQTtBQUNuQkMsYUFEbUI7QUFFbkJ2RSxjQUZtQixHQUVFdUUsR0FBRyxDQUFDdkUsSUFGTjtBQUFBLDJDQUdsQkEsSUFIa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBM0I7QUFNZUQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbWFpLjBlYWYxYzQwNzBhZWMwZTRlNGZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IERyb3Bkb3duUHJvcHMsIEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IENvbnRlbnRIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9uL0NvbnRlbnRIZWFkZXInO1xuaW1wb3J0IFB1YmxpY1NoZWxsIGZyb20gJy4uLy4uL2NvbW1vbi9QdWJsaWNTaGVsbCc7XG5pbXBvcnQgeyBNTVBsYXllckRhdGEsIE1NU29uZ1JlY29yZCwgQ29udGVudFByb3BzLCBNTVNvbmdEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgTWFpbWFpU29uZ0NvbXBvbmVudCwgTWFpbWFpU29uZ0xvYWRlciB9IGZyb20gJy4vTWFpbWFpLmRhdGEnO1xuaW1wb3J0IHsgZ2V0R2VucmVzLCBnZXRMZXZlbHMsIGdldERpZmZpY3VsdGllcywgZGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL01haW1haS5jb25zdGFudHMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxpbmcvTWFpbWFpLm1vZHVsZS5jc3MnO1xuXG4vLyBDcmVhdGUgQXhpb3MgaW5zdGFuY2UuXG5jb25zdCBhcGk6IEF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiAnaHR0cHM6Ly9raW5nb2Zib3hlcy5teGJsdWUubmV0LmF1OjQwMDAvJyxcbn0pO1xuXG5jb25zdCBjb250ZW50UHJvcHM6IENvbnRlbnRQcm9wcyA9IHtcbiAgaGVhZGluZzogJ01haW1haSBEWCcsXG4gIGRlc2NyaXB0aW9uOiBbXG4gICAgYE1haW1haSBEWCBpcyBhbiBhcmNhZGUgcmh5dGhtIGdhbWUgd2l0aCBlaWdodCBidXR0b25zIHNwYWNlZCBhcm91bmQgaW4gYSBjaXJjbGUuIFxuICBCZWxvdyBhcmUgYSBsaXN0IG9mIHNvbmdzIGF2YWlsYWJsZSBvbiB0aGUgbWFjaGluZSAodGhlIGludGVybmF0aW9uYWwgdmVyc2lvbiksIFxuICBhcyB0aGUgc29uZyBsaXN0IG9uIHRoZSBvZmZpY2lhbCBzaXRlIGlzIG5vdCB1cC10by1kYXRlLmAsXG4gICAgYEV2ZXJ5IHNvbmcgaXMgZWl0aGVyIGEgXCJEZWx1eGVcIiBvciBcIlN0YW5kYXJkXCIgc29uZywgYW5kIGlzIHNwZWNpZmllZCBieSB0aGUgbG9nby4gSWYgaXQgaXMgYSBEZWx1eGUgc29uZyxcbiAgdGhlIGZvbnQgY29sb3IgaXMgcmFpbmJvdywgYW5kIGlmIGl0IGlzIGEgU3RhbmRhcmQgc29uZywgdGhlIGZvbnQgY29sb3IgaXMgd2hpdGUuIERlbHV4ZSBzb25nc1xuICBhcmUgZXhjbHVzaXZlIHRvIE1haW1haSBEWCwgYW5kIHNvbWUgc29uZ3MgbWF5IGV2ZW4gaGF2ZSBib3RoIERlbHV4ZSBhbmQgU3RhbmRhcmQgdmVyc2lvbnMhIFRoZSBnZW5yZVxuICBmb3IgZWFjaCBzb25nIGlzIGxvY2F0ZWQgaW4gdGhlIHRvcCByaWdodCBjb3JuZXIuYCxcbiAgICBgRWFjaCBzb25nIGhhcyBhIG1pbmltdW0gb2YgZm91ciBkaWZmaWN1bHRpZXM6IEJBU0lDLCBBRFZBTkNFRCwgRVhQRVJUIGFuZCBNQVNURVIuXG4gIFNvbWUgc29uZ3MgaGF2ZSBhIGZpZnRoIGRpZmZpY3VsdHksIFJFOk1BU1RFUiwgd2hpY2ggaXMgaGFyZGVyIHRoYW4gTUFTVEVSLiBUaGUgZGlmZmljdWx0eSBsZXZlbHNcbiAgb2YgdGhlIHNvbmdzIHJhbmdlIGZyb20gMSB0byAxNSwgYW5kIHRoZXJlIGlzIG9ubHkgY3VycmVudGx5IG9uZSBzb25nIHRoYXQgaXMgTGV2ZWwgMTUuYCxcbiAgICBgSSBkbyBub3Qgb3duIGFueSBvZiB0aGUgaW1hZ2VzIG9yIHNvbmdzLCBhbGwgb3duZXJzaGlwIGJlbG9uZ3MgdG8gU0VHQS5gLFxuICBdLFxufTtcblxuY29uc3QgTWFpbWFpRFg6IE5leHRQYWdlPE1NUGxheWVyRGF0YT4gPSAoZGF0YSkgPT4ge1xuXG4gIC8vIFZhcmlhYmxlcyBmb3IgY29udHJvbGxpbmcgc3RhdGUgb24gdGhpcyBwYWdlLlxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oNSk7XG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPE1NU29uZ1JlY29yZFtdPihkYXRhLnJlY29yZCk7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gUmVhY3QudXNlU3RhdGU8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4oZGVmYXVsdE9wdGlvbnMpO1xuICBjb25zdCBnZW5yZUxpc3QgPSBnZXRHZW5yZXMoZGF0YS5yZWNvcmQpO1xuICBjb25zdCBsZXZlbHNMaXN0ID0gZ2V0TGV2ZWxzKGRhdGEucmVjb3JkKTtcbiAgY29uc3QgZGlmZmljdWx0aWVzTGlzdCA9IGdldERpZmZpY3VsdGllcygpO1xuXG4gIC8vIFVzZUVmZmVjdCBob29rIGZvciBpbmZpbml0ZSBzY3JvbGwuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoZWlnaHQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodDtcbiAgICAgIGNvbnN0IGN1cnIgPSB3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGlmIChjdXJyID49IGhlaWdodCkge1xuICAgICAgICBpZiAobGlzdCAmJiByZXN1bHRzIDwgbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRSZXN1bHRzKHJlc3VsdHMgKyAxMCk7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbbGlzdCwgcmVzdWx0c10pO1xuXG4gIC8vIEhhbmRsZSBmaWx0ZXJpbmcgYnkgbmFtZSwgYXJ0aXN0LCBnZW5yZSBhbmQgbGV2ZWwuXG4gIGNvbnN0IHNldE5hbWUgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5xdWVyeSwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfVxuICAgIGZpbHRlcihvcHRpb25zKVxuICB9XG5cbiAgY29uc3Qgc2V0QXJ0aXN0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4ucXVlcnksIGFydGlzdDogZXZlbnQudGFyZ2V0LnZhbHVlfVxuICAgIGZpbHRlcihvcHRpb25zKVxuICB9XG5cbiAgY29uc3Qgc2V0R2VucmUgPSAoX2V2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4sIGRhdGE6IERyb3Bkb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCBnZW5yZSA9IFN0cmluZyhkYXRhLnZhbHVlKTtcbiAgICBjb25zdCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gey4uLnF1ZXJ5LCBnZW5yZTogZ2VucmV9XG4gICAgZmlsdGVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBzZXRMZXZlbCA9IChfZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PiwgZGF0YTogRHJvcGRvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IGxldmVsID0gU3RyaW5nKGRhdGEudmFsdWUpO1xuICAgIGNvbnN0IG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7Li4ucXVlcnksIGxldmVsOiBsZXZlbH1cbiAgICBmaWx0ZXIob3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IGNoZWNrTGV2ZWwgPSAobGlzdDogTU1Tb25nUmVjb3JkW10sIGxldmVsOiBzdHJpbmcpID0+IHtcbiAgICAvLyBUYWtlIGNhcmUgb2YgbWV0YSBjaGFyYWN0ZXIgZm9yIHJlZ2V4LlxuICAgIGNvbnN0IGxldmVsUGF0dGVybiA9IGxldmVsLnJlcGxhY2UoJysnLCBgXFxcXCtgKTtcbiAgICBsZXQgbmV3TGlzdDogTU1Tb25nUmVjb3JkW10gPSBbXTtcbiAgICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cChgXiR7bGV2ZWxQYXR0ZXJufSRgLCAnaScpO1xuICAgIGxpc3QuZm9yRWFjaCgoc29uZzogTU1Tb25nUmVjb3JkKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhzb25nLmRhdGEpLm1hcCgoZGlmZjogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChwYXR0ZXJuLnRlc3Qoc29uZy5kYXRhW2RpZmYgYXMga2V5b2YgTU1Tb25nRGF0YV0ubGV2ZWwpKSB7XG4gICAgICAgICAgbmV3TGlzdC5wdXNoKHNvbmcpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBGaWx0ZXIgb3V0IGR1cGxpY2F0ZSBzb25ncyB3aXRoIHNhbWUgbGV2ZWxzIGZvciBtdWx0aXBsZSBkaWZmaWN1bHRpZXMuXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QuZmlsdGVyKChzb25nLCBpZHgpID0+IG5ld0xpc3QuaW5kZXhPZihzb25nKSA9PT0gaWR4KTtcbiAgICByZXR1cm4gbmV3TGlzdDtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrTGV2ZWxEaWZmaWN1bHR5ID0gKGxpc3Q6IE1NU29uZ1JlY29yZFtdLCBsZXZlbDogc3RyaW5nLCBkaWZmaWN1bHR5OiBzdHJpbmcpID0+IHtcbiAgICAvLyBUYWtlIGNhcmUgb2YgbWV0YSBjaGFyYWN0ZXIgZm9yIHJlZ2V4LlxuICAgIGNvbnN0IGxldmVsUGF0dGVybiA9IGxldmVsLnJlcGxhY2UoJysnLCBgXFxcXCtgKTtcbiAgICBsZXQgbmV3TGlzdDogTU1Tb25nUmVjb3JkW10gPSBbXTtcbiAgICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cChgXiR7bGV2ZWxQYXR0ZXJufSRgLCAnaScpO1xuICAgIGxpc3QuZm9yRWFjaCgoc29uZzogTU1Tb25nUmVjb3JkKSA9PiB7XG4gICAgICBpZiAocGF0dGVybi50ZXN0KHNvbmcuZGF0YVtkaWZmaWN1bHR5XS5sZXZlbCkpIHtcbiAgICAgICAgbmV3TGlzdC5wdXNoKHNvbmcpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBGaWx0ZXIgb3V0IGR1cGxpY2F0ZSBzb25ncyB3aXRoIHNhbWUgbGV2ZWxzIGZvciBtdWx0aXBsZSBkaWZmaWN1bHRpZXMuXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QuZmlsdGVyKChzb25nLCBpZHgpID0+IG5ld0xpc3QuaW5kZXhPZihzb25nKSA9PT0gaWR4KTtcbiAgICByZXR1cm4gbmV3TGlzdDtcbiAgfVxuXG4gIGNvbnN0IGZpbHRlciA9IChvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XG5cbiAgICBsZXQgcGF0dGVybjogUmVnRXhwO1xuICAgIGxldCBuZXdMaXN0ID0gZGF0YS5yZWNvcmQ7XG5cbiAgICBpZiAob3B0aW9ucy5uYW1lICE9PSAnJykge1xuICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAob3B0aW9ucy5uYW1lLCAnaScpO1xuICAgICAgbmV3TGlzdCA9IG5ld0xpc3QuZmlsdGVyKChzb25nKSA9PiBwYXR0ZXJuLnRlc3Qoc29uZy5zb25nKSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYXJ0aXN0ICE9PSAnJykge1xuICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAob3B0aW9ucy5hcnRpc3QsICdpJyk7XG4gICAgICBuZXdMaXN0ID0gbmV3TGlzdC5maWx0ZXIoKHNvbmcpID0+IHBhdHRlcm4udGVzdChzb25nLmFydGlzdCkpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmdlbnJlICE9PSAnJykge1xuICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAob3B0aW9ucy5nZW5yZSwgJ2knKTtcbiAgICAgIG5ld0xpc3QgPSBuZXdMaXN0LmZpbHRlcigoc29uZykgPT4gcGF0dGVybi50ZXN0KHNvbmcuZ2VucmUpKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5sZXZlbCAhPT0gJycpIHtcbiAgICAgIG5ld0xpc3QgPSBjaGVja0xldmVsKG5ld0xpc3QsIG9wdGlvbnMubGV2ZWwpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmxldmVsICE9PSAnJyAmJiBvcHRpb25zLmRpZmZpY3VsdHkgIT09ICcnKSB7XG4gICAgICBuZXdMaXN0ID0gY2hlY2tMZXZlbERpZmZpY3VsdHkobmV3TGlzdCwgb3B0aW9ucy5sZXZlbCwgb3B0aW9ucy5kaWZmaWN1bHR5KTtcbiAgICB9XG5cbiAgICBzZXRMaXN0KG5ld0xpc3QpO1xuICAgIHNldFF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UHVibGljU2hlbGwgdGl0bGU9XCJNYWltYWkgRFggU29uZyBMaXN0IHwgSnVzdGluJ3MgV2Vic2l0ZVwiPlxuICAgICAgPENvbnRlbnRIZWFkZXIgZGF0YT17Y29udGVudFByb3BzfSAvPlxuICAgICAgPGgyPlNvbmcgTGlzdDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XG4gICAgICAgIDxGb3JtIGludmVydGVkPlxuICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz0nZXF1YWwnPlxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgZmx1aWQgbGFiZWw9J1NvbmcgTmFtZTonIHBsYWNlaG9sZGVyPSdTZWFyY2ggYnkgc29uZyBuYW1lLi4uJyB2YWx1ZT17cXVlcnkubmFtZX0gb25DaGFuZ2U9e3NldE5hbWV9IC8+XG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBmbHVpZCBsYWJlbD0nQXJ0aXN0OicgcGxhY2Vob2xkZXI9J1NlYXJjaCBieSBhcnRpc3QuLi4nIHZhbHVlPXtxdWVyeS5hcnRpc3R9IG9uQ2hhbmdlPXtzZXRBcnRpc3R9Lz5cbiAgICAgICAgICAgIDxGb3JtLkRyb3Bkb3duIGZsdWlkIGxhYmVsPSdHZW5yZTonIHNlbGVjdGlvbiBwbGFjZWhvbGRlcj0nRmlsdGVyIGJ5IGdlbnJlLi4uJyBvcHRpb25zPXtnZW5yZUxpc3R9IG9uQ2hhbmdlPXtzZXRHZW5yZX0gLz5cbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPSdlcXVhbCc+XG4gICAgICAgICAgICA8Rm9ybS5Ecm9wZG93biBmbHVpZCBsYWJlbD0nRGlmZmljdWx0eTonIHNlbGVjdGlvbiBwbGFjZWhvbGRlcj0nRmlsdGVyIGJ5IGRpZmZpY3VsdHkuLi4nIG9wdGlvbnM9e2dlbnJlTGlzdH0gb25DaGFuZ2U9e3NldEdlbnJlfSAvPlxuICAgICAgICAgICAgPEZvcm0uRHJvcGRvd24gZmx1aWQgbGFiZWw9J0xldmVsOicgc2VsZWN0aW9uIHBsYWNlaG9sZGVyPSdGaWx0ZXIgYnkgbGV2ZWwuLi4nIG9wdGlvbnM9e2xldmVsc0xpc3R9IG9uQ2hhbmdlPXtzZXRMZXZlbH0gLz5cbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAge2xpc3QgJiZcbiAgICAgICAgbGlzdC5tYXAoKHNvbmc6IE1NU29uZ1JlY29yZCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBpZiAoaWR4IDwgcmVzdWx0cykge1xuICAgICAgICAgICAgcmV0dXJuIDxNYWltYWlTb25nQ29tcG9uZW50IHNvbmc9e3Nvbmd9IGtleT17c29uZy5pZH0gLz47XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgIHtsb2FkaW5nICYmIDxNYWltYWlTb25nTG9hZGVyIC8+fVxuICAgIDwvUHVibGljU2hlbGw+XG4gICk7XG59O1xuXG4vLyBGZXRjaCBkYXRhIGJlZm9yZSBsb2FkLlxuTWFpbWFpRFguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0KCcvbWFpbWFpJyk7XG4gIGNvbnN0IGRhdGE6IE1NUGxheWVyRGF0YSA9IHJlcy5kYXRhO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW1haURYO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==