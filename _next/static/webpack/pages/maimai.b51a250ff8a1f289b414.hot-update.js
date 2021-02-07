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
    var newList = [];
    var pattern = new RegExp("^".concat(level, "$"), 'i');
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
      lineNumber: 135,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
      children: "Song List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
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
            lineNumber: 140,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
            label: "Artist:",
            placeholder: "Search by artist...",
            value: query.artist,
            onChange: setArtist
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Dropdown, {
            label: "Genre:",
            selection: true,
            placeholder: "Filter by genre...",
            options: genreList,
            onChange: setGenre
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Dropdown, {
            label: "Level:",
            selection: true,
            placeholder: "Filter by level...",
            options: levelsList,
            onChange: setLevel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, _this), list && list.map(function (song, idx) {
      if (idx < results) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongComponent"], {
          song: song
        }, song.id, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 20
        }, _this);
      }
    }), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongLoader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 19
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 134,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS50c3giXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY29udGVudFByb3BzIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwiTWFpbWFpRFgiLCJkYXRhIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJyZWNvcmQiLCJsaXN0Iiwic2V0TGlzdCIsImRlZmF1bHRPcHRpb25zIiwicXVlcnkiLCJzZXRRdWVyeSIsImdlbnJlTGlzdCIsImdldEdlbnJlcyIsImxldmVsc0xpc3QiLCJnZXRMZXZlbHMiLCJ1c2VFZmZlY3QiLCJjaGVja1Njcm9sbCIsImhlaWdodCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbEhlaWdodCIsImN1cnIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXROYW1lIiwiZXZlbnQiLCJvcHRpb25zIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyIiwic2V0QXJ0aXN0IiwiYXJ0aXN0Iiwic2V0R2VucmUiLCJfZXZlbnQiLCJnZW5yZSIsIlN0cmluZyIsInNldExldmVsIiwibGV2ZWwiLCJjaGVja0xldmVsIiwibmV3TGlzdCIsInBhdHRlcm4iLCJSZWdFeHAiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsInNvbmciLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZGlmZiIsInRlc3QiLCJwdXNoIiwic3R5bGVzIiwic2VhcmNoIiwiaWR4IiwiaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXQiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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dkM7QUFBd0MsdUJBQVcsRUFBQyxvQkFBcEQ7QUFBeUUsbUJBQU8sRUFBRXpCLFVBQWxGO0FBQThGLG9CQUFRLEVBQUU2QjtBQUF4RztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsRUFhR3BDLElBQUksSUFDSEEsSUFBSSxDQUFDZ0QsR0FBTCxDQUFTLFVBQUNILElBQUQsRUFBcUJTLEdBQXJCLEVBQXFDO0FBQzVDLFVBQUlBLEdBQUcsR0FBR3pELE9BQVYsRUFBbUI7QUFDakIsNEJBQU8scUVBQUMsaUVBQUQ7QUFBcUIsY0FBSSxFQUFFZ0Q7QUFBM0IsV0FBc0NBLElBQUksQ0FBQ1UsRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEO0FBQ0YsS0FKRCxDQWRKLEVBbUJHNUQsT0FBTyxpQkFBSSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBdkhELEMsQ0F5SEE7OztHQXpITUosUTs7S0FBQUEsUTtBQTBITkEsUUFBUSxDQUFDaUUsZUFBVCwrU0FBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUHhFLEdBQUcsQ0FBQ3lFLEdBQUosQ0FBUSxTQUFSLENBRE87O0FBQUE7QUFDbkJDLGFBRG1CO0FBRW5CbEUsY0FGbUIsR0FFRWtFLEdBQUcsQ0FBQ2xFLElBRk47QUFBQSwyQ0FHbEJBLElBSGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTNCO0FBTWVELHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW1haS5iNTFhMjUwZmY4YTFmMjg5YjQxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBEcm9wZG93blByb3BzLCBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCBDb250ZW50SGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbi9Db250ZW50SGVhZGVyJztcbmltcG9ydCBQdWJsaWNTaGVsbCBmcm9tICcuLi8uLi9jb21tb24vUHVibGljU2hlbGwnO1xuaW1wb3J0IHsgTU1QbGF5ZXJEYXRhLCBNTVNvbmdSZWNvcmQsIENvbnRlbnRQcm9wcywgTU1Tb25nRGF0YSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IE1haW1haVNvbmdDb21wb25lbnQsIE1haW1haVNvbmdMb2FkZXIgfSBmcm9tICcuL01haW1haS5kYXRhJztcbmltcG9ydCB7IGdldEdlbnJlcywgZ2V0TGV2ZWxzLCBkZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vTWFpbWFpLmNvbnN0YW50cyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGluZy9NYWltYWkubW9kdWxlLmNzcyc7XG5cbi8vIENyZWF0ZSBBeGlvcyBpbnN0YW5jZS5cbmNvbnN0IGFwaTogQXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6ICdodHRwczovL2tpbmdvZmJveGVzLm14Ymx1ZS5uZXQuYXU6NDAwMC8nLFxufSk7XG5cbmNvbnN0IGNvbnRlbnRQcm9wczogQ29udGVudFByb3BzID0ge1xuICBoZWFkaW5nOiAnTWFpbWFpIERYJyxcbiAgZGVzY3JpcHRpb246IFtcbiAgICBgTWFpbWFpIERYIGlzIGFuIGFyY2FkZSByaHl0aG0gZ2FtZSB3aXRoIGVpZ2h0IGJ1dHRvbnMgc3BhY2VkIGFyb3VuZCBpbiBhIGNpcmNsZS4gXG4gIEJlbG93IGFyZSBhIGxpc3Qgb2Ygc29uZ3MgYXZhaWxhYmxlIG9uIHRoZSBtYWNoaW5lICh0aGUgaW50ZXJuYXRpb25hbCB2ZXJzaW9uKSwgXG4gIGFzIHRoZSBzb25nIGxpc3Qgb24gdGhlIG9mZmljaWFsIHNpdGUgaXMgbm90IHVwLXRvLWRhdGUuYCxcbiAgICBgRXZlcnkgc29uZyBpcyBlaXRoZXIgYSBcIkRlbHV4ZVwiIG9yIFwiU3RhbmRhcmRcIiBzb25nLCBhbmQgaXMgc3BlY2lmaWVkIGJ5IHRoZSBsb2dvLiBJZiBpdCBpcyBhIERlbHV4ZSBzb25nLFxuICB0aGUgZm9udCBjb2xvciBpcyByYWluYm93LCBhbmQgaWYgaXQgaXMgYSBTdGFuZGFyZCBzb25nLCB0aGUgZm9udCBjb2xvciBpcyB3aGl0ZS4gRGVsdXhlIHNvbmdzXG4gIGFyZSBleGNsdXNpdmUgdG8gTWFpbWFpIERYLCBhbmQgc29tZSBzb25ncyBtYXkgZXZlbiBoYXZlIGJvdGggRGVsdXhlIGFuZCBTdGFuZGFyZCB2ZXJzaW9ucyEgVGhlIGdlbnJlXG4gIGZvciBlYWNoIHNvbmcgaXMgbG9jYXRlZCBpbiB0aGUgdG9wIHJpZ2h0IGNvcm5lci5gLFxuICAgIGBFYWNoIHNvbmcgaGFzIGEgbWluaW11bSBvZiBmb3VyIGRpZmZpY3VsdGllczogQkFTSUMsIEFEVkFOQ0VELCBFWFBFUlQgYW5kIE1BU1RFUi5cbiAgU29tZSBzb25ncyBoYXZlIGEgZmlmdGggZGlmZmljdWx0eSwgUkU6TUFTVEVSLCB3aGljaCBpcyBoYXJkZXIgdGhhbiBNQVNURVIuIFRoZSBkaWZmaWN1bHR5IGxldmVsc1xuICBvZiB0aGUgc29uZ3MgcmFuZ2UgZnJvbSAxIHRvIDE1LCBhbmQgdGhlcmUgaXMgb25seSBjdXJyZW50bHkgb25lIHNvbmcgdGhhdCBpcyBMZXZlbCAxNS5gLFxuICAgIGBJIGRvIG5vdCBvd24gYW55IG9mIHRoZSBpbWFnZXMgb3Igc29uZ3MsIGFsbCBvd25lcnNoaXAgYmVsb25ncyB0byBTRUdBLmAsXG4gIF0sXG59O1xuXG5jb25zdCBNYWltYWlEWDogTmV4dFBhZ2U8TU1QbGF5ZXJEYXRhPiA9IChkYXRhKSA9PiB7XG5cbiAgLy8gVmFyaWFibGVzIGZvciBjb250cm9sbGluZyBzdGF0ZSBvbiB0aGlzIHBhZ2UuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPig1KTtcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gUmVhY3QudXNlU3RhdGU8TU1Tb25nUmVjb3JkW10+KGRhdGEucmVjb3JkKTtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSBSZWFjdC51c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PihkZWZhdWx0T3B0aW9ucyk7XG4gIGNvbnN0IGdlbnJlTGlzdCA9IGdldEdlbnJlcyhkYXRhLnJlY29yZCk7XG4gIGNvbnN0IGxldmVsc0xpc3QgPSBnZXRMZXZlbHMoZGF0YS5yZWNvcmQpO1xuXG4gIC8vIFVzZUVmZmVjdCBob29rIGZvciBpbmZpbml0ZSBzY3JvbGwuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoZWlnaHQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodDtcbiAgICAgIGNvbnN0IGN1cnIgPSB3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGlmIChjdXJyID49IGhlaWdodCkge1xuICAgICAgICBpZiAobGlzdCAmJiByZXN1bHRzIDwgbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRSZXN1bHRzKHJlc3VsdHMgKyAxMCk7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbbGlzdCwgcmVzdWx0c10pO1xuXG4gIC8vIEhhbmRsZSBmaWx0ZXJpbmcgYnkgbmFtZSwgYXJ0aXN0LCBnZW5yZSBhbmQgbGV2ZWwuXG4gIGNvbnN0IHNldE5hbWUgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5xdWVyeSwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfVxuICAgIGZpbHRlcihvcHRpb25zKVxuICB9XG5cbiAgY29uc3Qgc2V0QXJ0aXN0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4ucXVlcnksIGFydGlzdDogZXZlbnQudGFyZ2V0LnZhbHVlfVxuICAgIGZpbHRlcihvcHRpb25zKVxuICB9XG5cbiAgY29uc3Qgc2V0R2VucmUgPSAoX2V2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4sIGRhdGE6IERyb3Bkb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCBnZW5yZSA9IFN0cmluZyhkYXRhLnZhbHVlKTtcbiAgICBjb25zdCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gey4uLnF1ZXJ5LCBnZW5yZTogZ2VucmV9XG4gICAgZmlsdGVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBzZXRMZXZlbCA9IChfZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PiwgZGF0YTogRHJvcGRvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IGxldmVsID0gU3RyaW5nKGRhdGEudmFsdWUpO1xuICAgIGNvbnN0IG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7Li4ucXVlcnksIGxldmVsOiBsZXZlbH1cbiAgICBmaWx0ZXIob3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IGNoZWNrTGV2ZWwgPSAobGlzdDogTU1Tb25nUmVjb3JkW10sIGxldmVsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBuZXdMaXN0OiBNTVNvbmdSZWNvcmRbXSA9IFtdO1xuICAgIGNvbnN0IHBhdHRlcm4gPSBuZXcgUmVnRXhwKGBeJHtsZXZlbH0kYCwgJ2knKTtcbiAgICBjb25zb2xlLmxvZyhwYXR0ZXJuKTtcbiAgICBsaXN0LmZvckVhY2goKHNvbmc6IE1NU29uZ1JlY29yZCkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoc29uZy5kYXRhKS5tYXAoKGRpZmY6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAocGF0dGVybi50ZXN0KHNvbmcuZGF0YVtkaWZmIGFzIGtleW9mIE1NU29uZ0RhdGFdLmxldmVsKSkge1xuICAgICAgICAgIG5ld0xpc3QucHVzaChzb25nKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0O1xuICB9XG5cbiAgY29uc3QgZmlsdGVyID0gKG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pID0+IHtcblxuICAgIGxldCBwYXR0ZXJuOiBSZWdFeHA7XG4gICAgbGV0IG5ld0xpc3QgPSBkYXRhLnJlY29yZDtcblxuICAgIGlmIChvcHRpb25zLm5hbWUgIT09ICcnKSB7XG4gICAgICBwYXR0ZXJuID0gbmV3IFJlZ0V4cChvcHRpb25zLm5hbWUsICdpJyk7XG4gICAgICBuZXdMaXN0ID0gbmV3TGlzdC5maWx0ZXIoKHNvbmcpID0+IHBhdHRlcm4udGVzdChzb25nLnNvbmcpKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5hcnRpc3QgIT09ICcnKSB7XG4gICAgICBwYXR0ZXJuID0gbmV3IFJlZ0V4cChvcHRpb25zLmFydGlzdCwgJ2knKTtcbiAgICAgIG5ld0xpc3QgPSBuZXdMaXN0LmZpbHRlcigoc29uZykgPT4gcGF0dGVybi50ZXN0KHNvbmcuYXJ0aXN0KSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZ2VucmUgIT09ICcnKSB7XG4gICAgICBwYXR0ZXJuID0gbmV3IFJlZ0V4cChvcHRpb25zLmdlbnJlLCAnaScpO1xuICAgICAgbmV3TGlzdCA9IG5ld0xpc3QuZmlsdGVyKChzb25nKSA9PiBwYXR0ZXJuLnRlc3Qoc29uZy5nZW5yZSkpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmxldmVsICE9PSAnJykge1xuICAgICAgbmV3TGlzdCA9IGNoZWNrTGV2ZWwobmV3TGlzdCwgb3B0aW9ucy5sZXZlbCk7XG4gICAgfVxuXG4gICAgc2V0TGlzdChuZXdMaXN0KTtcbiAgICBzZXRRdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFB1YmxpY1NoZWxsIHRpdGxlPVwiTWFpbWFpIERYIFNvbmcgTGlzdCB8IEp1c3RpbidzIFdlYnNpdGVcIj5cbiAgICAgIDxDb250ZW50SGVhZGVyIGRhdGE9e2NvbnRlbnRQcm9wc30gLz5cbiAgICAgIDxoMj5Tb25nIExpc3Q8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9PlxuICAgICAgICA8Rm9ybSBpbnZlcnRlZD5cbiAgICAgICAgICA8Rm9ybS5Hcm91cD5cbiAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPSdTb25nIE5hbWU6JyBwbGFjZWhvbGRlcj0nU2VhcmNoIGJ5IHNvbmcgbmFtZS4uLicgdmFsdWU9e3F1ZXJ5Lm5hbWV9IG9uQ2hhbmdlPXtzZXROYW1lfSAvPlxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9J0FydGlzdDonIHBsYWNlaG9sZGVyPSdTZWFyY2ggYnkgYXJ0aXN0Li4uJyB2YWx1ZT17cXVlcnkuYXJ0aXN0fSBvbkNoYW5nZT17c2V0QXJ0aXN0fS8+XG4gICAgICAgICAgICA8Rm9ybS5Ecm9wZG93biBsYWJlbD0nR2VucmU6JyBzZWxlY3Rpb24gcGxhY2Vob2xkZXI9J0ZpbHRlciBieSBnZW5yZS4uLicgb3B0aW9ucz17Z2VucmVMaXN0fSBvbkNoYW5nZT17c2V0R2VucmV9IC8+XG4gICAgICAgICAgICA8Rm9ybS5Ecm9wZG93biBsYWJlbD0nTGV2ZWw6JyBzZWxlY3Rpb24gcGxhY2Vob2xkZXI9J0ZpbHRlciBieSBsZXZlbC4uLicgb3B0aW9ucz17bGV2ZWxzTGlzdH0gb25DaGFuZ2U9e3NldExldmVsfSAvPlxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICB7bGlzdCAmJlxuICAgICAgICBsaXN0Lm1hcCgoc29uZzogTU1Tb25nUmVjb3JkLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmIChpZHggPCByZXN1bHRzKSB7XG4gICAgICAgICAgICByZXR1cm4gPE1haW1haVNvbmdDb21wb25lbnQgc29uZz17c29uZ30ga2V5PXtzb25nLmlkfSAvPjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAge2xvYWRpbmcgJiYgPE1haW1haVNvbmdMb2FkZXIgLz59XG4gICAgPC9QdWJsaWNTaGVsbD5cbiAgKTtcbn07XG5cbi8vIEZldGNoIGRhdGEgYmVmb3JlIGxvYWQuXG5NYWltYWlEWC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXQoJy9tYWltYWknKTtcbiAgY29uc3QgZGF0YTogTU1QbGF5ZXJEYXRhID0gcmVzLmRhdGE7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbWFpRFg7XG4iXSwic291cmNlUm9vdCI6IiJ9