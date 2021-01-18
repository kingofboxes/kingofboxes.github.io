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

  var setLevel = function setLevel(_event, data) {
    var level = String(data.value);

    var options = _objectSpread(_objectSpread({}, query), {}, {
      level: level
    });

    setQuery(options);
    filter(options);
  };

  var checkLevel = function checkLevel(list, level) {
    var newList = [];
    var pattern = new RegExp("^".concat(level, "$"), 'i');
    list.forEach(function (song) {
      Object.keys(song.data).map(function (diff) {
        if (pattern.test(song.data[diff].level)) {
          newList.push(song);
        }
      });
    });
    console.log(newList);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS50c3giXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY29udGVudFByb3BzIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwiTWFpbWFpRFgiLCJkYXRhIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJyZWNvcmQiLCJsaXN0Iiwic2V0TGlzdCIsImRlZmF1bHRPcHRpb25zIiwicXVlcnkiLCJzZXRRdWVyeSIsImdlbnJlTGlzdCIsImdldEdlbnJlcyIsImxldmVsc0xpc3QiLCJnZXRMZXZlbHMiLCJ1c2VFZmZlY3QiLCJjaGVja1Njcm9sbCIsImhlaWdodCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbEhlaWdodCIsImN1cnIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXROYW1lIiwiZXZlbnQiLCJvcHRpb25zIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyIiwic2V0QXJ0aXN0IiwiYXJ0aXN0Iiwic2V0R2VucmUiLCJfZXZlbnQiLCJnZW5yZSIsIlN0cmluZyIsInNldExldmVsIiwibGV2ZWwiLCJjaGVja0xldmVsIiwibmV3TGlzdCIsInBhdHRlcm4iLCJSZWdFeHAiLCJmb3JFYWNoIiwic29uZyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJkaWZmIiwidGVzdCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwic2VhcmNoIiwiaWR4IiwiaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXQiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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b3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBEcm9wZG93blByb3BzLCBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCBDb250ZW50SGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbi9Db250ZW50SGVhZGVyJztcbmltcG9ydCBQdWJsaWNTaGVsbCBmcm9tICcuLi8uLi9jb21tb24vUHVibGljU2hlbGwnO1xuaW1wb3J0IHsgTU1QbGF5ZXJEYXRhLCBNTVNvbmdSZWNvcmQsIENvbnRlbnRQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IE1haW1haVNvbmdDb21wb25lbnQsIE1haW1haVNvbmdMb2FkZXIgfSBmcm9tICcuL01haW1haS5kYXRhJztcbmltcG9ydCB7IGdldEdlbnJlcywgZ2V0TGV2ZWxzLCBkZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vTWFpbWFpLmNvbnN0YW50cyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGluZy9NYWltYWkubW9kdWxlLmNzcyc7XG5cbi8vIENyZWF0ZSBBeGlvcyBpbnN0YW5jZS5cbmNvbnN0IGFwaTogQXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6ICdodHRwczovL2tpbmdvZmJveGVzLm14Ymx1ZS5uZXQuYXU6NDAwMC8nLFxufSk7XG5cbmNvbnN0IGNvbnRlbnRQcm9wczogQ29udGVudFByb3BzID0ge1xuICBoZWFkaW5nOiAnTWFpbWFpIERYJyxcbiAgZGVzY3JpcHRpb246IFtcbiAgICBgTWFpbWFpIERYIGlzIGFuIGFyY2FkZSByaHl0aG0gZ2FtZSB3aXRoIGVpZ2h0IGJ1dHRvbnMgc3BhY2VkIGFyb3VuZCBpbiBhIGNpcmNsZS4gXG4gIEJlbG93IGFyZSBhIGxpc3Qgb2Ygc29uZ3MgYXZhaWxhYmxlIG9uIHRoZSBtYWNoaW5lICh0aGUgaW50ZXJuYXRpb25hbCB2ZXJzaW9uKSwgXG4gIGFzIHRoZSBzb25nIGxpc3Qgb24gdGhlIG9mZmljaWFsIHNpdGUgaXMgbm90IHVwLXRvLWRhdGUuYCxcbiAgICBgRXZlcnkgc29uZyBpcyBlaXRoZXIgYSBcIkRlbHV4ZVwiIG9yIFwiU3RhbmRhcmRcIiBzb25nLCBhbmQgaXMgc3BlY2lmaWVkIGJ5IHRoZSBsb2dvLiBJZiBpdCBpcyBhIERlbHV4ZSBzb25nLFxuICB0aGUgZm9udCBjb2xvciBpcyByYWluYm93LCBhbmQgaWYgaXQgaXMgYSBTdGFuZGFyZCBzb25nLCB0aGUgZm9udCBjb2xvciBpcyB3aGl0ZS4gRGVsdXhlIHNvbmdzXG4gIGFyZSBleGNsdXNpdmUgdG8gTWFpbWFpIERYLCBhbmQgc29tZSBzb25ncyBtYXkgZXZlbiBoYXZlIGJvdGggRGVsdXhlIGFuZCBTdGFuZGFyZCB2ZXJzaW9ucyEgVGhlIGdlbnJlXG4gIGZvciBlYWNoIHNvbmcgaXMgbG9jYXRlZCBpbiB0aGUgdG9wIHJpZ2h0IGNvcm5lci5gLFxuICAgIGBFYWNoIHNvbmcgaGFzIGEgbWluaW11bSBvZiBmb3VyIGRpZmZpY3VsdGllczogQkFTSUMsIEFEVkFOQ0VELCBFWFBFUlQgYW5kIE1BU1RFUi5cbiAgU29tZSBzb25ncyBoYXZlIGEgZmlmdGggZGlmZmljdWx0eSwgUkU6TUFTVEVSLCB3aGljaCBpcyBoYXJkZXIgdGhhbiBNQVNURVIuIFRoZSBkaWZmaWN1bHR5IGxldmVsc1xuICBvZiB0aGUgc29uZ3MgcmFuZ2UgZnJvbSAxIHRvIDE1LCBhbmQgdGhlcmUgaXMgb25seSBjdXJyZW50bHkgb25lIHNvbmcgdGhhdCBpcyBMZXZlbCAxNS5gLFxuICAgIGBJIGRvIG5vdCBvd24gYW55IG9mIHRoZSBpbWFnZXMgb3Igc29uZ3MsIGFsbCBvd25lcnNoaXAgYmVsb25ncyB0byBTRUdBLmAsXG4gIF0sXG59O1xuXG5jb25zdCBNYWltYWlEWDogTmV4dFBhZ2U8TU1QbGF5ZXJEYXRhPiA9IChkYXRhKSA9PiB7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDUpO1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxNTVNvbmdSZWNvcmRbXT4oZGF0YS5yZWNvcmQpO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IFJlYWN0LnVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KGRlZmF1bHRPcHRpb25zKTtcbiAgY29uc3QgZ2VucmVMaXN0ID0gZ2V0R2VucmVzKGRhdGEucmVjb3JkKTtcbiAgY29uc3QgbGV2ZWxzTGlzdCA9IGdldExldmVscyhkYXRhLnJlY29yZCk7XG5cbiAgLy8gVXNlRWZmZWN0IGhvb2sgZm9yIGluZmluaXRlIHNjcm9sbC5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVja1Njcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0O1xuICAgICAgY29uc3QgY3VyciA9IHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgaWYgKGN1cnIgPj0gaGVpZ2h0KSB7XG4gICAgICAgIGlmIChsaXN0ICYmIHJlc3VsdHMgPCBsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFJlc3VsdHMocmVzdWx0cyArIDEwKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtsaXN0LCByZXN1bHRzXSk7XG5cbiAgLy8gU2V0IG5hbWUuXG4gIGNvbnN0IHNldE5hbWUgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5xdWVyeSwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfVxuICAgIHNldFF1ZXJ5KG9wdGlvbnMpO1xuICAgIGZpbHRlcihvcHRpb25zKVxuICB9XG5cbiAgY29uc3Qgc2V0QXJ0aXN0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4ucXVlcnksIGFydGlzdDogZXZlbnQudGFyZ2V0LnZhbHVlfVxuICAgIHNldFF1ZXJ5KG9wdGlvbnMpO1xuICAgIGZpbHRlcihvcHRpb25zKVxuICB9XG5cbiAgY29uc3Qgc2V0R2VucmUgPSAoX2V2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4sIGRhdGE6IERyb3Bkb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCBnZW5yZSA9IFN0cmluZyhkYXRhLnZhbHVlKTtcbiAgICBjb25zdCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gey4uLnF1ZXJ5LCBnZW5yZTogZ2VucmV9XG4gICAgc2V0UXVlcnkob3B0aW9ucyk7XG4gICAgZmlsdGVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBzZXRMZXZlbCA9IChfZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PiwgZGF0YTogRHJvcGRvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IGxldmVsID0gU3RyaW5nKGRhdGEudmFsdWUpO1xuICAgIGNvbnN0IG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7Li4ucXVlcnksIGxldmVsOiBsZXZlbH1cbiAgICBzZXRRdWVyeShvcHRpb25zKTtcbiAgICBmaWx0ZXIob3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IGNoZWNrTGV2ZWwgPSAobGlzdCwgbGV2ZWwpID0+IHtcbiAgICBjb25zdCBuZXdMaXN0ID0gW107XG4gICAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoYF4ke2xldmVsfSRgLCAnaScpO1xuICAgIGxpc3QuZm9yRWFjaCgoc29uZykgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoc29uZy5kYXRhKS5tYXAoKGRpZmYpID0+IHtcbiAgICAgICAgaWYgKHBhdHRlcm4udGVzdChzb25nLmRhdGFbZGlmZl0ubGV2ZWwpKSB7XG4gICAgICAgICAgbmV3TGlzdC5wdXNoKHNvbmcpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gICAgY29uc29sZS5sb2cobmV3TGlzdCk7XG4gICAgcmV0dXJuIG5ld0xpc3Q7XG4gIH1cblxuICBjb25zdCBmaWx0ZXIgPSAob3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPT4ge1xuXG4gICAgbGV0IHBhdHRlcm46IFJlZ0V4cDtcbiAgICBsZXQgbmV3TGlzdCA9IGRhdGEucmVjb3JkO1xuXG4gICAgaWYgKG9wdGlvbnMubmFtZSAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG9wdGlvbnMubmFtZSwgJ2knKTtcbiAgICAgIG5ld0xpc3QgPSBuZXdMaXN0LmZpbHRlcigoc29uZykgPT4gcGF0dGVybi50ZXN0KHNvbmcuc29uZykpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFydGlzdCAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG9wdGlvbnMuYXJ0aXN0LCAnaScpO1xuICAgICAgbmV3TGlzdCA9IG5ld0xpc3QuZmlsdGVyKChzb25nKSA9PiBwYXR0ZXJuLnRlc3Qoc29uZy5hcnRpc3QpKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5nZW5yZSAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG9wdGlvbnMuZ2VucmUsICdpJyk7XG4gICAgICBuZXdMaXN0ID0gbmV3TGlzdC5maWx0ZXIoKHNvbmcpID0+IHBhdHRlcm4udGVzdChzb25nLmdlbnJlKSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubGV2ZWwgIT09ICcnKSB7XG4gICAgICBuZXdMaXN0ID0gY2hlY2tMZXZlbChuZXdMaXN0LCBvcHRpb25zLmxldmVsKTtcbiAgICB9XG5cbiAgICBzZXRMaXN0KG5ld0xpc3QpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UHVibGljU2hlbGwgdGl0bGU9XCJNYWltYWkgRFggU29uZyBMaXN0IHwgSnVzdGluJ3MgV2Vic2l0ZVwiPlxuICAgICAgPENvbnRlbnRIZWFkZXIgZGF0YT17Y29udGVudFByb3BzfSAvPlxuICAgICAgPGgyPlNvbmcgTGlzdDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XG4gICAgICAgIDxGb3JtIGludmVydGVkPlxuICAgICAgICAgIDxGb3JtLkdyb3VwPlxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9J1NvbmcgTmFtZTonIHBsYWNlaG9sZGVyPSdTZWFyY2ggYnkgc29uZyBuYW1lLi4uJyB2YWx1ZT17cXVlcnkubmFtZX0gb25DaGFuZ2U9e3NldE5hbWV9IC8+XG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD0nQXJ0aXN0OicgcGxhY2Vob2xkZXI9J1NlYXJjaCBieSBhcnRpc3QuLi4nIHZhbHVlPXtxdWVyeS5hcnRpc3R9IG9uQ2hhbmdlPXtzZXRBcnRpc3R9Lz5cbiAgICAgICAgICAgIDxGb3JtLkRyb3Bkb3duIGxhYmVsPSdHZW5yZTonIHNlbGVjdGlvbiBwbGFjZWhvbGRlcj0nRmlsdGVyIGJ5IGdlbnJlLi4uJyBvcHRpb25zPXtnZW5yZUxpc3R9IG9uQ2hhbmdlPXtzZXRHZW5yZX0gLz5cbiAgICAgICAgICAgIDxGb3JtLkRyb3Bkb3duIGxhYmVsPSdMZXZlbDonIHNlbGVjdGlvbiBwbGFjZWhvbGRlcj0nRmlsdGVyIGJ5IGxldmVsLi4uJyBvcHRpb25zPXtsZXZlbHNMaXN0fSBvbkNoYW5nZT17c2V0TGV2ZWx9IC8+XG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsaXN0ICYmXG4gICAgICAgIGxpc3QubWFwKChzb25nOiBNTVNvbmdSZWNvcmQsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgaWYgKGlkeCA8IHJlc3VsdHMpIHtcbiAgICAgICAgICAgIHJldHVybiA8TWFpbWFpU29uZ0NvbXBvbmVudCBzb25nPXtzb25nfSBrZXk9e3NvbmcuaWR9IC8+O1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICB7bG9hZGluZyAmJiA8TWFpbWFpU29uZ0xvYWRlciAvPn1cbiAgICA8L1B1YmxpY1NoZWxsPlxuICApO1xufTtcblxuLy8gRmV0Y2ggZGF0YSBiZWZvcmUgbG9hZC5cbk1haW1haURYLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCgnL21haW1haScpO1xuICBjb25zdCBkYXRhOiBNTVBsYXllckRhdGEgPSByZXMuZGF0YTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWltYWlEWDtcbiJdLCJzb3VyY2VSb290IjoiIn0=