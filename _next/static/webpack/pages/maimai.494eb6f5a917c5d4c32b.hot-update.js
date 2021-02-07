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
    var levelPattern = level.replace('+', "+");
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
      lineNumber: 136,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
      children: "Song List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
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
            lineNumber: 141,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
            label: "Artist:",
            placeholder: "Search by artist...",
            value: query.artist,
            onChange: setArtist
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Dropdown, {
            label: "Genre:",
            selection: true,
            placeholder: "Filter by genre...",
            options: genreList,
            onChange: setGenre
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Dropdown, {
            label: "Level:",
            selection: true,
            placeholder: "Filter by level...",
            options: levelsList,
            onChange: setLevel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, _this), list && list.map(function (song, idx) {
      if (idx < results) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongComponent"], {
          song: song
        }, song.id, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 20
        }, _this);
      }
    }), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongLoader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 19
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 135,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS50c3giXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY29udGVudFByb3BzIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwiTWFpbWFpRFgiLCJkYXRhIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJyZWNvcmQiLCJsaXN0Iiwic2V0TGlzdCIsImRlZmF1bHRPcHRpb25zIiwicXVlcnkiLCJzZXRRdWVyeSIsImdlbnJlTGlzdCIsImdldEdlbnJlcyIsImxldmVsc0xpc3QiLCJnZXRMZXZlbHMiLCJ1c2VFZmZlY3QiLCJjaGVja1Njcm9sbCIsImhlaWdodCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbEhlaWdodCIsImN1cnIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXROYW1lIiwiZXZlbnQiLCJvcHRpb25zIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyIiwic2V0QXJ0aXN0IiwiYXJ0aXN0Iiwic2V0R2VucmUiLCJfZXZlbnQiLCJnZW5yZSIsIlN0cmluZyIsInNldExldmVsIiwibGV2ZWwiLCJjaGVja0xldmVsIiwibGV2ZWxQYXR0ZXJuIiwicmVwbGFjZSIsIm5ld0xpc3QiLCJwYXR0ZXJuIiwiUmVnRXhwIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJzb25nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImRpZmYiLCJ0ZXN0IiwicHVzaCIsInN0eWxlcyIsInNlYXJjaCIsImlkeCIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0IiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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N2M1ZDRjMzJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IERyb3Bkb3duUHJvcHMsIEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IENvbnRlbnRIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9uL0NvbnRlbnRIZWFkZXInO1xuaW1wb3J0IFB1YmxpY1NoZWxsIGZyb20gJy4uLy4uL2NvbW1vbi9QdWJsaWNTaGVsbCc7XG5pbXBvcnQgeyBNTVBsYXllckRhdGEsIE1NU29uZ1JlY29yZCwgQ29udGVudFByb3BzLCBNTVNvbmdEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgTWFpbWFpU29uZ0NvbXBvbmVudCwgTWFpbWFpU29uZ0xvYWRlciB9IGZyb20gJy4vTWFpbWFpLmRhdGEnO1xuaW1wb3J0IHsgZ2V0R2VucmVzLCBnZXRMZXZlbHMsIGRlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi9NYWltYWkuY29uc3RhbnRzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsaW5nL01haW1haS5tb2R1bGUuY3NzJztcblxuLy8gQ3JlYXRlIEF4aW9zIGluc3RhbmNlLlxuY29uc3QgYXBpOiBBeGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHBzOi8va2luZ29mYm94ZXMubXhibHVlLm5ldC5hdTo0MDAwLycsXG59KTtcblxuY29uc3QgY29udGVudFByb3BzOiBDb250ZW50UHJvcHMgPSB7XG4gIGhlYWRpbmc6ICdNYWltYWkgRFgnLFxuICBkZXNjcmlwdGlvbjogW1xuICAgIGBNYWltYWkgRFggaXMgYW4gYXJjYWRlIHJoeXRobSBnYW1lIHdpdGggZWlnaHQgYnV0dG9ucyBzcGFjZWQgYXJvdW5kIGluIGEgY2lyY2xlLiBcbiAgQmVsb3cgYXJlIGEgbGlzdCBvZiBzb25ncyBhdmFpbGFibGUgb24gdGhlIG1hY2hpbmUgKHRoZSBpbnRlcm5hdGlvbmFsIHZlcnNpb24pLCBcbiAgYXMgdGhlIHNvbmcgbGlzdCBvbiB0aGUgb2ZmaWNpYWwgc2l0ZSBpcyBub3QgdXAtdG8tZGF0ZS5gLFxuICAgIGBFdmVyeSBzb25nIGlzIGVpdGhlciBhIFwiRGVsdXhlXCIgb3IgXCJTdGFuZGFyZFwiIHNvbmcsIGFuZCBpcyBzcGVjaWZpZWQgYnkgdGhlIGxvZ28uIElmIGl0IGlzIGEgRGVsdXhlIHNvbmcsXG4gIHRoZSBmb250IGNvbG9yIGlzIHJhaW5ib3csIGFuZCBpZiBpdCBpcyBhIFN0YW5kYXJkIHNvbmcsIHRoZSBmb250IGNvbG9yIGlzIHdoaXRlLiBEZWx1eGUgc29uZ3NcbiAgYXJlIGV4Y2x1c2l2ZSB0byBNYWltYWkgRFgsIGFuZCBzb21lIHNvbmdzIG1heSBldmVuIGhhdmUgYm90aCBEZWx1eGUgYW5kIFN0YW5kYXJkIHZlcnNpb25zISBUaGUgZ2VucmVcbiAgZm9yIGVhY2ggc29uZyBpcyBsb2NhdGVkIGluIHRoZSB0b3AgcmlnaHQgY29ybmVyLmAsXG4gICAgYEVhY2ggc29uZyBoYXMgYSBtaW5pbXVtIG9mIGZvdXIgZGlmZmljdWx0aWVzOiBCQVNJQywgQURWQU5DRUQsIEVYUEVSVCBhbmQgTUFTVEVSLlxuICBTb21lIHNvbmdzIGhhdmUgYSBmaWZ0aCBkaWZmaWN1bHR5LCBSRTpNQVNURVIsIHdoaWNoIGlzIGhhcmRlciB0aGFuIE1BU1RFUi4gVGhlIGRpZmZpY3VsdHkgbGV2ZWxzXG4gIG9mIHRoZSBzb25ncyByYW5nZSBmcm9tIDEgdG8gMTUsIGFuZCB0aGVyZSBpcyBvbmx5IGN1cnJlbnRseSBvbmUgc29uZyB0aGF0IGlzIExldmVsIDE1LmAsXG4gICAgYEkgZG8gbm90IG93biBhbnkgb2YgdGhlIGltYWdlcyBvciBzb25ncywgYWxsIG93bmVyc2hpcCBiZWxvbmdzIHRvIFNFR0EuYCxcbiAgXSxcbn07XG5cbmNvbnN0IE1haW1haURYOiBOZXh0UGFnZTxNTVBsYXllckRhdGE+ID0gKGRhdGEpID0+IHtcblxuICAvLyBWYXJpYWJsZXMgZm9yIGNvbnRyb2xsaW5nIHN0YXRlIG9uIHRoaXMgcGFnZS5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDUpO1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxNTVNvbmdSZWNvcmRbXT4oZGF0YS5yZWNvcmQpO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IFJlYWN0LnVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KGRlZmF1bHRPcHRpb25zKTtcbiAgY29uc3QgZ2VucmVMaXN0ID0gZ2V0R2VucmVzKGRhdGEucmVjb3JkKTtcbiAgY29uc3QgbGV2ZWxzTGlzdCA9IGdldExldmVscyhkYXRhLnJlY29yZCk7XG5cbiAgLy8gVXNlRWZmZWN0IGhvb2sgZm9yIGluZmluaXRlIHNjcm9sbC5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVja1Njcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0O1xuICAgICAgY29uc3QgY3VyciA9IHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgaWYgKGN1cnIgPj0gaGVpZ2h0KSB7XG4gICAgICAgIGlmIChsaXN0ICYmIHJlc3VsdHMgPCBsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFJlc3VsdHMocmVzdWx0cyArIDEwKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtsaXN0LCByZXN1bHRzXSk7XG5cbiAgLy8gSGFuZGxlIGZpbHRlcmluZyBieSBuYW1lLCBhcnRpc3QsIGdlbnJlIGFuZCBsZXZlbC5cbiAgY29uc3Qgc2V0TmFtZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gey4uLnF1ZXJ5LCBuYW1lOiBldmVudC50YXJnZXQudmFsdWV9XG4gICAgZmlsdGVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBzZXRBcnRpc3QgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5xdWVyeSwgYXJ0aXN0OiBldmVudC50YXJnZXQudmFsdWV9XG4gICAgZmlsdGVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBzZXRHZW5yZSA9IChfZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PiwgZGF0YTogRHJvcGRvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IGdlbnJlID0gU3RyaW5nKGRhdGEudmFsdWUpO1xuICAgIGNvbnN0IG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7Li4ucXVlcnksIGdlbnJlOiBnZW5yZX1cbiAgICBmaWx0ZXIob3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IHNldExldmVsID0gKF9ldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTEVsZW1lbnQ+LCBkYXRhOiBEcm9wZG93blByb3BzKSA9PiB7XG4gICAgY29uc3QgbGV2ZWwgPSBTdHJpbmcoZGF0YS52YWx1ZSk7XG4gICAgY29uc3Qgb3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHsuLi5xdWVyeSwgbGV2ZWw6IGxldmVsfVxuICAgIGZpbHRlcihvcHRpb25zKVxuICB9XG5cbiAgY29uc3QgY2hlY2tMZXZlbCA9IChsaXN0OiBNTVNvbmdSZWNvcmRbXSwgbGV2ZWw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGxldmVsUGF0dGVybiA9IGxldmVsLnJlcGxhY2UoJysnLCBgXFwrYCk7XG4gICAgY29uc3QgbmV3TGlzdDogTU1Tb25nUmVjb3JkW10gPSBbXTtcbiAgICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cChgXiR7bGV2ZWxQYXR0ZXJufSRgLCAnaScpO1xuICAgIGNvbnNvbGUubG9nKHBhdHRlcm4pO1xuICAgIGxpc3QuZm9yRWFjaCgoc29uZzogTU1Tb25nUmVjb3JkKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhzb25nLmRhdGEpLm1hcCgoZGlmZjogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChwYXR0ZXJuLnRlc3Qoc29uZy5kYXRhW2RpZmYgYXMga2V5b2YgTU1Tb25nRGF0YV0ubGV2ZWwpKSB7XG4gICAgICAgICAgbmV3TGlzdC5wdXNoKHNvbmcpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0xpc3Q7XG4gIH1cblxuICBjb25zdCBmaWx0ZXIgPSAob3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPT4ge1xuXG4gICAgbGV0IHBhdHRlcm46IFJlZ0V4cDtcbiAgICBsZXQgbmV3TGlzdCA9IGRhdGEucmVjb3JkO1xuXG4gICAgaWYgKG9wdGlvbnMubmFtZSAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG9wdGlvbnMubmFtZSwgJ2knKTtcbiAgICAgIG5ld0xpc3QgPSBuZXdMaXN0LmZpbHRlcigoc29uZykgPT4gcGF0dGVybi50ZXN0KHNvbmcuc29uZykpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFydGlzdCAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG9wdGlvbnMuYXJ0aXN0LCAnaScpO1xuICAgICAgbmV3TGlzdCA9IG5ld0xpc3QuZmlsdGVyKChzb25nKSA9PiBwYXR0ZXJuLnRlc3Qoc29uZy5hcnRpc3QpKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5nZW5yZSAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG9wdGlvbnMuZ2VucmUsICdpJyk7XG4gICAgICBuZXdMaXN0ID0gbmV3TGlzdC5maWx0ZXIoKHNvbmcpID0+IHBhdHRlcm4udGVzdChzb25nLmdlbnJlKSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubGV2ZWwgIT09ICcnKSB7XG4gICAgICBuZXdMaXN0ID0gY2hlY2tMZXZlbChuZXdMaXN0LCBvcHRpb25zLmxldmVsKTtcbiAgICB9XG5cbiAgICBzZXRMaXN0KG5ld0xpc3QpO1xuICAgIHNldFF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UHVibGljU2hlbGwgdGl0bGU9XCJNYWltYWkgRFggU29uZyBMaXN0IHwgSnVzdGluJ3MgV2Vic2l0ZVwiPlxuICAgICAgPENvbnRlbnRIZWFkZXIgZGF0YT17Y29udGVudFByb3BzfSAvPlxuICAgICAgPGgyPlNvbmcgTGlzdDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XG4gICAgICAgIDxGb3JtIGludmVydGVkPlxuICAgICAgICAgIDxGb3JtLkdyb3VwPlxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9J1NvbmcgTmFtZTonIHBsYWNlaG9sZGVyPSdTZWFyY2ggYnkgc29uZyBuYW1lLi4uJyB2YWx1ZT17cXVlcnkubmFtZX0gb25DaGFuZ2U9e3NldE5hbWV9IC8+XG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD0nQXJ0aXN0OicgcGxhY2Vob2xkZXI9J1NlYXJjaCBieSBhcnRpc3QuLi4nIHZhbHVlPXtxdWVyeS5hcnRpc3R9IG9uQ2hhbmdlPXtzZXRBcnRpc3R9Lz5cbiAgICAgICAgICAgIDxGb3JtLkRyb3Bkb3duIGxhYmVsPSdHZW5yZTonIHNlbGVjdGlvbiBwbGFjZWhvbGRlcj0nRmlsdGVyIGJ5IGdlbnJlLi4uJyBvcHRpb25zPXtnZW5yZUxpc3R9IG9uQ2hhbmdlPXtzZXRHZW5yZX0gLz5cbiAgICAgICAgICAgIDxGb3JtLkRyb3Bkb3duIGxhYmVsPSdMZXZlbDonIHNlbGVjdGlvbiBwbGFjZWhvbGRlcj0nRmlsdGVyIGJ5IGxldmVsLi4uJyBvcHRpb25zPXtsZXZlbHNMaXN0fSBvbkNoYW5nZT17c2V0TGV2ZWx9IC8+XG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsaXN0ICYmXG4gICAgICAgIGxpc3QubWFwKChzb25nOiBNTVNvbmdSZWNvcmQsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgaWYgKGlkeCA8IHJlc3VsdHMpIHtcbiAgICAgICAgICAgIHJldHVybiA8TWFpbWFpU29uZ0NvbXBvbmVudCBzb25nPXtzb25nfSBrZXk9e3NvbmcuaWR9IC8+O1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICB7bG9hZGluZyAmJiA8TWFpbWFpU29uZ0xvYWRlciAvPn1cbiAgICA8L1B1YmxpY1NoZWxsPlxuICApO1xufTtcblxuLy8gRmV0Y2ggZGF0YSBiZWZvcmUgbG9hZC5cbk1haW1haURYLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCgnL21haW1haScpO1xuICBjb25zdCBkYXRhOiBNTVBsYXllckRhdGEgPSByZXMuZGF0YTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWltYWlEWDtcbiJdLCJzb3VyY2VSb290IjoiIn0=