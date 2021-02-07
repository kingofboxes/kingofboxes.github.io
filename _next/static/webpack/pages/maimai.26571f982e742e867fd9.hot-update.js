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
/* harmony import */ var _styling_Maimai_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styling/Maimai.module.css */ "./components/styling/Maimai.module.css");
/* harmony import */ var _styling_Maimai_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styling_Maimai_module_css__WEBPACK_IMPORTED_MODULE_11__);






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

  var options = {
    name: '',
    artist: '',
    level: '',
    genre: ''
  };

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

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(options),
      _React$useState8 = Object(_home_kingofboxes_projects_website_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState7, 2),
      query = _React$useState8[0],
      setQuery = _React$useState8[1];

  var genres = [{
    key: 'POPS & ANIME',
    text: 'POPS & ANIME',
    value: 'POPS & ANIME'
  }, {
    key: 'niconico ＆ VOCALOID™',
    text: 'niconico ＆ VOCALOID™',
    value: 'niconico ＆ VOCALOID™'
  }, {
    key: '東方Project',
    text: '東方Project',
    value: '東方Project'
  }, {
    key: 'GAME＆VARIETY',
    text: 'GAME＆VARIETY',
    value: 'GAME＆VARIETY'
  }, {
    key: 'maimai',
    text: 'maimai',
    value: 'maimai'
  }, {
    key: 'オンゲキ＆CHUNITHM',
    text: 'オンゲキ＆CHUNITHM',
    value: 'オンゲキ＆CHUNITHM'
  }]; // UseEffect hook for infinite scroll.

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

  var setGenre = function setGenre(event, data) {
    console.log(data); // const options = {...query, genre: event.target.value}
    // setQuery(options);
    // filter(options)
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

    setList(newList);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_PublicShell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Maimai DX Song List | Justin's Website",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_common_ContentHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: contentProps
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
      children: "Song List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: _styling_Maimai_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.search,
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
            lineNumber: 150,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Input, {
            label: "Artist:",
            placeholder: "Search by artist...",
            value: query.artist,
            onChange: setArtist
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Dropdown, {
            label: "Genre:",
            selection: true,
            placeholder: "Filter by genre...",
            options: genres,
            onChange: setGenre
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }, _this), list && list.map(function (song, idx) {
      if (idx < results) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongComponent"], {
          song: song
        }, song.id, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 20
        }, _this);
      }
    }), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongLoader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 19
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 144,
    columnNumber: 5
  }, _this);
}; // Fetch data before load.


_s(MaimaiDX, "cHrQ3y3MQvHeIKg8eBribY9wplU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS50c3giXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY29udGVudFByb3BzIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwiTWFpbWFpRFgiLCJkYXRhIiwib3B0aW9ucyIsIm5hbWUiLCJhcnRpc3QiLCJsZXZlbCIsImdlbnJlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJyZWNvcmQiLCJsaXN0Iiwic2V0TGlzdCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJnZW5yZXMiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJjaGVja1Njcm9sbCIsImhlaWdodCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbEhlaWdodCIsImN1cnIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXROYW1lIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWx0ZXIiLCJzZXRBcnRpc3QiLCJzZXRHZW5yZSIsImNvbnNvbGUiLCJsb2ciLCJwYXR0ZXJuIiwibmV3TGlzdCIsIlJlZ0V4cCIsInNvbmciLCJ0ZXN0Iiwic3R5bGVzIiwic2VhcmNoIiwibWFwIiwiaWR4IiwiaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXQiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtDQUlBOztBQUNBLElBQU1BLEdBQWtCLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUN0Q0MsU0FBTyxFQUFFO0FBRDZCLENBQWIsQ0FBM0I7QUFJQSxJQUFNQyxZQUEwQixHQUFHO0FBQ2pDQyxTQUFPLEVBQUUsV0FEd0I7QUFFakNDLGFBQVcsRUFBRTtBQUZvQixDQUFuQzs7QUFpQkEsSUFBTUMsUUFBZ0MsR0FBRyxTQUFuQ0EsUUFBbUMsQ0FBQ0MsSUFBRCxFQUFVO0FBQUE7O0FBRWpELE1BQU1DLE9BQStCLEdBQUc7QUFDdENDLFFBQUksRUFBRSxFQURnQztBQUV0Q0MsVUFBTSxFQUFFLEVBRjhCO0FBR3RDQyxTQUFLLEVBQUUsRUFIK0I7QUFJdENDLFNBQUssRUFBRTtBQUorQixHQUF4Qzs7QUFGaUQsd0JBU25CQyw0Q0FBSyxDQUFDQyxRQUFOLENBQXdCLEtBQXhCLENBVG1CO0FBQUE7QUFBQSxNQVMxQ0MsT0FUMEM7QUFBQSxNQVNqQ0MsVUFUaUM7O0FBQUEseUJBVW5CSCw0Q0FBSyxDQUFDQyxRQUFOLENBQXVCLENBQXZCLENBVm1CO0FBQUE7QUFBQSxNQVUxQ0csT0FWMEM7QUFBQSxNQVVqQ0MsVUFWaUM7O0FBQUEseUJBV3pCTCw0Q0FBSyxDQUFDQyxRQUFOLENBQStCUCxJQUFJLENBQUNZLE1BQXBDLENBWHlCO0FBQUE7QUFBQSxNQVcxQ0MsSUFYMEM7QUFBQSxNQVdwQ0MsT0FYb0M7O0FBQUEseUJBWXZCUiw0Q0FBSyxDQUFDQyxRQUFOLENBQXVDTixPQUF2QyxDQVp1QjtBQUFBO0FBQUEsTUFZMUNjLEtBWjBDO0FBQUEsTUFZbkNDLFFBWm1DOztBQWNqRCxNQUFNQyxNQUFNLEdBQUcsQ0FDYjtBQUNFQyxPQUFHLEVBQUUsY0FEUDtBQUVFQyxRQUFJLEVBQUUsY0FGUjtBQUdFQyxTQUFLLEVBQUU7QUFIVCxHQURhLEVBTWI7QUFDRUYsT0FBRyxFQUFFLHNCQURQO0FBRUVDLFFBQUksRUFBRSxzQkFGUjtBQUdFQyxTQUFLLEVBQUU7QUFIVCxHQU5hLEVBV2I7QUFDRUYsT0FBRyxFQUFFLFdBRFA7QUFFRUMsUUFBSSxFQUFFLFdBRlI7QUFHRUMsU0FBSyxFQUFFO0FBSFQsR0FYYSxFQWdCYjtBQUNFRixPQUFHLEVBQUUsY0FEUDtBQUVFQyxRQUFJLEVBQUUsY0FGUjtBQUdFQyxTQUFLLEVBQUU7QUFIVCxHQWhCYSxFQXFCYjtBQUNFRixPQUFHLEVBQUUsUUFEUDtBQUVFQyxRQUFJLEVBQUUsUUFGUjtBQUdFQyxTQUFLLEVBQUU7QUFIVCxHQXJCYSxFQTBCYjtBQUNFRixPQUFHLEVBQUUsZUFEUDtBQUVFQyxRQUFJLEVBQUUsZUFGUjtBQUdFQyxTQUFLLEVBQUU7QUFIVCxHQTFCYSxDQUFmLENBZGlELENBZ0RqRDs7QUFDQWQsOENBQUssQ0FBQ2UsU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsVUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsWUFBN0I7QUFDQSxVQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkQsTUFBTSxDQUFDRSxXQUFyQzs7QUFDQSxVQUFJSCxJQUFJLElBQUlKLE1BQVosRUFBb0I7QUFDbEIsWUFBSVYsSUFBSSxJQUFJSCxPQUFPLEdBQUdHLElBQUksQ0FBQ2tCLE1BQTNCLEVBQW1DO0FBQ2pDdEIsb0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQXVCLG9CQUFVLENBQUMsWUFBTTtBQUNmdkIsc0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQUUsc0JBQVUsQ0FBQ0QsT0FBTyxHQUFHLEVBQVgsQ0FBVjtBQUNELFdBSFMsRUFHUCxHQUhPLENBQVY7QUFJRDtBQUNGO0FBQ0YsS0FaRDs7QUFhQWtCLFVBQU0sQ0FBQ0ssZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NYLFdBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1hNLFlBQU0sQ0FBQ00sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNaLFdBQXJDO0FBQ0QsS0FGRDtBQUdELEdBbEJELEVBa0JHLENBQUNULElBQUQsRUFBT0gsT0FBUCxDQWxCSCxFQWpEaUQsQ0FxRWpEOztBQUNBLE1BQU15QixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQWdEO0FBQzlELFFBQU1uQyxPQUFPLG1DQUFPYyxLQUFQO0FBQWNiLFVBQUksRUFBRWtDLEtBQUssQ0FBQ0MsTUFBTixDQUFhakI7QUFBakMsTUFBYjs7QUFDQUosWUFBUSxDQUFDZixPQUFELENBQVI7QUFDQXFDLFVBQU0sQ0FBQ3JDLE9BQUQsQ0FBTjtBQUNELEdBSkQ7O0FBTUEsTUFBTXNDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNILEtBQUQsRUFBZ0Q7QUFDaEUsUUFBTW5DLE9BQU8sbUNBQU9jLEtBQVA7QUFBY1osWUFBTSxFQUFFaUMsS0FBSyxDQUFDQyxNQUFOLENBQWFqQjtBQUFuQyxNQUFiOztBQUNBSixZQUFRLENBQUNmLE9BQUQsQ0FBUjtBQUNBcUMsVUFBTSxDQUFDckMsT0FBRCxDQUFOO0FBQ0QsR0FKRDs7QUFNQSxNQUFNdUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0osS0FBRCxFQUEyQ3BDLElBQTNDLEVBQW1FO0FBQ2xGeUMsV0FBTyxDQUFDQyxHQUFSLENBQVkxQyxJQUFaLEVBRGtGLENBRWxGO0FBQ0E7QUFDQTtBQUNELEdBTEQ7O0FBT0EsTUFBTXNDLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNyQyxPQUFELEVBQXFDO0FBRWxELFFBQUkwQyxPQUFKO0FBQ0EsUUFBSUMsT0FBTyxHQUFHNUMsSUFBSSxDQUFDWSxNQUFuQjs7QUFFQSxRQUFJWCxPQUFPLENBQUNDLElBQVIsS0FBaUIsRUFBckIsRUFBeUI7QUFDdkJ5QyxhQUFPLEdBQUcsSUFBSUUsTUFBSixDQUFXNUMsT0FBTyxDQUFDQyxJQUFuQixFQUF5QixHQUF6QixDQUFWO0FBQ0EwQyxhQUFPLEdBQUdBLE9BQU8sQ0FBQ04sTUFBUixDQUFlLFVBQUNRLElBQUQ7QUFBQSxlQUFVSCxPQUFPLENBQUNJLElBQVIsQ0FBYUQsSUFBSSxDQUFDQSxJQUFsQixDQUFWO0FBQUEsT0FBZixDQUFWO0FBQ0Q7O0FBRUQsUUFBSTdDLE9BQU8sQ0FBQ0UsTUFBUixLQUFtQixFQUF2QixFQUEyQjtBQUN6QndDLGFBQU8sR0FBRyxJQUFJRSxNQUFKLENBQVc1QyxPQUFPLENBQUNFLE1BQW5CLEVBQTJCLEdBQTNCLENBQVY7QUFDQXlDLGFBQU8sR0FBR0EsT0FBTyxDQUFDTixNQUFSLENBQWUsVUFBQ1EsSUFBRDtBQUFBLGVBQVVILE9BQU8sQ0FBQ0ksSUFBUixDQUFhRCxJQUFJLENBQUMzQyxNQUFsQixDQUFWO0FBQUEsT0FBZixDQUFWO0FBQ0Q7O0FBRURXLFdBQU8sQ0FBQzhCLE9BQUQsQ0FBUDtBQUNELEdBaEJEOztBQWtCQSxzQkFDRSxxRUFBQywyREFBRDtBQUFhLFNBQUssRUFBQyx3Q0FBbkI7QUFBQSw0QkFDRSxxRUFBQyw2REFBRDtBQUFlLFVBQUksRUFBRWhEO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFLLGVBQVMsRUFBRW9ELGtFQUFNLENBQUNDLE1BQXZCO0FBQUEsNkJBQ0UscUVBQUMsc0RBQUQ7QUFBTSxnQkFBUSxNQUFkO0FBQUEsK0JBQ0UscUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQUEsa0NBQ0UscUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksaUJBQUssRUFBQyxZQUFsQjtBQUErQix1QkFBVyxFQUFDLHdCQUEzQztBQUFvRSxpQkFBSyxFQUFFbEMsS0FBSyxDQUFDYixJQUFqRjtBQUF1RixvQkFBUSxFQUFFaUM7QUFBakc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLGlCQUFLLEVBQUMsU0FBbEI7QUFBNEIsdUJBQVcsRUFBQyxxQkFBeEM7QUFBOEQsaUJBQUssRUFBRXBCLEtBQUssQ0FBQ1osTUFBM0U7QUFBbUYsb0JBQVEsRUFBRW9DO0FBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRSxxRUFBQyxzREFBRCxDQUFNLFFBQU47QUFBZSxpQkFBSyxFQUFDLFFBQXJCO0FBQThCLHFCQUFTLE1BQXZDO0FBQXdDLHVCQUFXLEVBQUMsb0JBQXBEO0FBQXlFLG1CQUFPLEVBQUV0QixNQUFsRjtBQUEwRixvQkFBUSxFQUFFdUI7QUFBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLEVBWUczQixJQUFJLElBQ0hBLElBQUksQ0FBQ3FDLEdBQUwsQ0FBUyxVQUFDSixJQUFELEVBQXFCSyxHQUFyQixFQUFxQztBQUM1QyxVQUFJQSxHQUFHLEdBQUd6QyxPQUFWLEVBQW1CO0FBQ2pCLDRCQUFPLHFFQUFDLGlFQUFEO0FBQXFCLGNBQUksRUFBRW9DO0FBQTNCLFdBQXNDQSxJQUFJLENBQUNNLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDtBQUNGLEtBSkQsQ0FiSixFQWtCRzVDLE9BQU8saUJBQUkscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNCRCxDQWpJRCxDLENBbUlBOzs7R0FuSU1ULFE7O0tBQUFBLFE7QUFvSU5BLFFBQVEsQ0FBQ3NELGVBQVQsK1NBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1A3RCxHQUFHLENBQUM4RCxHQUFKLENBQVEsU0FBUixDQURPOztBQUFBO0FBQ25CQyxhQURtQjtBQUVuQnZELGNBRm1CLEdBRUV1RCxHQUFHLENBQUN2RCxJQUZOO0FBQUEsMkNBR2xCQSxJQUhrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUEzQjtBQU1lRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWltYWkuMjY1NzFmOTgyZTc0MmU4NjdmZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRm9ybSwgRHJvcGRvd24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IENvbnRlbnRIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9uL0NvbnRlbnRIZWFkZXInO1xuaW1wb3J0IFB1YmxpY1NoZWxsIGZyb20gJy4uLy4uL2NvbW1vbi9QdWJsaWNTaGVsbCc7XG5pbXBvcnQgeyBNTVBsYXllckRhdGEsIE1NU29uZ1JlY29yZCwgQ29udGVudFByb3BzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgTWFpbWFpU29uZ0NvbXBvbmVudCwgTWFpbWFpU29uZ0xvYWRlciB9IGZyb20gJy4vTWFpbWFpLmRhdGEnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxpbmcvTWFpbWFpLm1vZHVsZS5jc3MnO1xuXG4vLyBDcmVhdGUgQXhpb3MgaW5zdGFuY2UuXG5jb25zdCBhcGk6IEF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiAnaHR0cHM6Ly9raW5nb2Zib3hlcy5teGJsdWUubmV0LmF1OjQwMDAvJyxcbn0pO1xuXG5jb25zdCBjb250ZW50UHJvcHM6IENvbnRlbnRQcm9wcyA9IHtcbiAgaGVhZGluZzogJ01haW1haSBEWCcsXG4gIGRlc2NyaXB0aW9uOiBbXG4gICAgYE1haW1haSBEWCBpcyBhbiBhcmNhZGUgcmh5dGhtIGdhbWUgd2l0aCBlaWdodCBidXR0b25zIHNwYWNlZCBhcm91bmQgaW4gYSBjaXJjbGUuIFxuICBCZWxvdyBhcmUgYSBsaXN0IG9mIHNvbmdzIGF2YWlsYWJsZSBvbiB0aGUgbWFjaGluZSAodGhlIGludGVybmF0aW9uYWwgdmVyc2lvbiksIFxuICBhcyB0aGUgc29uZyBsaXN0IG9uIHRoZSBvZmZpY2lhbCBzaXRlIGlzIG5vdCB1cC10by1kYXRlLmAsXG4gICAgYEV2ZXJ5IHNvbmcgaXMgZWl0aGVyIGEgXCJEZWx1eGVcIiBvciBcIlN0YW5kYXJkXCIgc29uZywgYW5kIGlzIHNwZWNpZmllZCBieSB0aGUgbG9nby4gSWYgaXQgaXMgYSBEZWx1eGUgc29uZyxcbiAgdGhlIGZvbnQgY29sb3IgaXMgcmFpbmJvdywgYW5kIGlmIGl0IGlzIGEgU3RhbmRhcmQgc29uZywgdGhlIGZvbnQgY29sb3IgaXMgd2hpdGUuIERlbHV4ZSBzb25nc1xuICBhcmUgZXhjbHVzaXZlIHRvIE1haW1haSBEWCwgYW5kIHNvbWUgc29uZ3MgbWF5IGV2ZW4gaGF2ZSBib3RoIERlbHV4ZSBhbmQgU3RhbmRhcmQgdmVyc2lvbnMhIFRoZSBnZW5yZVxuICBmb3IgZWFjaCBzb25nIGlzIGxvY2F0ZWQgaW4gdGhlIHRvcCByaWdodCBjb3JuZXIuYCxcbiAgICBgRWFjaCBzb25nIGhhcyBhIG1pbmltdW0gb2YgZm91ciBkaWZmaWN1bHRpZXM6IEJBU0lDLCBBRFZBTkNFRCwgRVhQRVJUIGFuZCBNQVNURVIuXG4gIFNvbWUgc29uZ3MgaGF2ZSBhIGZpZnRoIGRpZmZpY3VsdHksIFJFOk1BU1RFUiwgd2hpY2ggaXMgaGFyZGVyIHRoYW4gTUFTVEVSLiBUaGUgZGlmZmljdWx0eSBsZXZlbHNcbiAgb2YgdGhlIHNvbmdzIHJhbmdlIGZyb20gMSB0byAxNSwgYW5kIHRoZXJlIGlzIG9ubHkgY3VycmVudGx5IG9uZSBzb25nIHRoYXQgaXMgTGV2ZWwgMTUuYCxcbiAgICBgSSBkbyBub3Qgb3duIGFueSBvZiB0aGUgaW1hZ2VzIG9yIHNvbmdzLCBhbGwgb3duZXJzaGlwIGJlbG9uZ3MgdG8gU0VHQS5gLFxuICBdLFxufTtcblxuY29uc3QgTWFpbWFpRFg6IE5leHRQYWdlPE1NUGxheWVyRGF0YT4gPSAoZGF0YSkgPT4ge1xuXG4gIGNvbnN0IG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgbmFtZTogJycsXG4gICAgYXJ0aXN0OiAnJyxcbiAgICBsZXZlbDogJycsXG4gICAgZ2VucmU6ICcnLFxuICB9XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDUpO1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxNTVNvbmdSZWNvcmRbXT4oZGF0YS5yZWNvcmQpO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IFJlYWN0LnVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KG9wdGlvbnMpO1xuXG4gIGNvbnN0IGdlbnJlcyA9IFtcbiAgICB7XG4gICAgICBrZXk6ICdQT1BTICYgQU5JTUUnLFxuICAgICAgdGV4dDogJ1BPUFMgJiBBTklNRScsXG4gICAgICB2YWx1ZTogJ1BPUFMgJiBBTklNRScsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICduaWNvbmljbyDvvIYgVk9DQUxPSUTihKInLFxuICAgICAgdGV4dDogJ25pY29uaWNvIO+8hiBWT0NBTE9JROKEoicsXG4gICAgICB2YWx1ZTogJ25pY29uaWNvIO+8hiBWT0NBTE9JROKEoicsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICfmnbHmlrlQcm9qZWN0JyxcbiAgICAgIHRleHQ6ICfmnbHmlrlQcm9qZWN0JyxcbiAgICAgIHZhbHVlOiAn5p2x5pa5UHJvamVjdCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICdHQU1F77yGVkFSSUVUWScsXG4gICAgICB0ZXh0OiAnR0FNRe+8hlZBUklFVFknLFxuICAgICAgdmFsdWU6ICdHQU1F77yGVkFSSUVUWScsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICdtYWltYWknLFxuICAgICAgdGV4dDogJ21haW1haScsXG4gICAgICB2YWx1ZTogJ21haW1haScsXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICfjgqrjg7PjgrLjgq3vvIZDSFVOSVRITScsXG4gICAgICB0ZXh0OiAn44Kq44Oz44Ky44Kt77yGQ0hVTklUSE0nLFxuICAgICAgdmFsdWU6ICfjgqrjg7PjgrLjgq3vvIZDSFVOSVRITScsXG4gICAgfSxcbiAgXVxuXG5cbiAgLy8gVXNlRWZmZWN0IGhvb2sgZm9yIGluZmluaXRlIHNjcm9sbC5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVja1Njcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0O1xuICAgICAgY29uc3QgY3VyciA9IHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgaWYgKGN1cnIgPj0gaGVpZ2h0KSB7XG4gICAgICAgIGlmIChsaXN0ICYmIHJlc3VsdHMgPCBsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFJlc3VsdHMocmVzdWx0cyArIDEwKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtsaXN0LCByZXN1bHRzXSk7XG5cbiAgLy8gU2V0IG5hbWUuXG4gIGNvbnN0IHNldE5hbWUgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5xdWVyeSwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfVxuICAgIHNldFF1ZXJ5KG9wdGlvbnMpO1xuICAgIGZpbHRlcihvcHRpb25zKVxuICB9XG5cbiAgY29uc3Qgc2V0QXJ0aXN0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4ucXVlcnksIGFydGlzdDogZXZlbnQudGFyZ2V0LnZhbHVlfVxuICAgIHNldFF1ZXJ5KG9wdGlvbnMpO1xuICAgIGZpbHRlcihvcHRpb25zKVxuICB9XG5cbiAgY29uc3Qgc2V0R2VucmUgPSAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PiwgZGF0YTogRHJvcGRvd25Qcm9wcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vIGNvbnN0IG9wdGlvbnMgPSB7Li4ucXVlcnksIGdlbnJlOiBldmVudC50YXJnZXQudmFsdWV9XG4gICAgLy8gc2V0UXVlcnkob3B0aW9ucyk7XG4gICAgLy8gZmlsdGVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBmaWx0ZXIgPSAob3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPT4ge1xuXG4gICAgbGV0IHBhdHRlcm46IFJlZ0V4cDtcbiAgICBsZXQgbmV3TGlzdCA9IGRhdGEucmVjb3JkO1xuXG4gICAgaWYgKG9wdGlvbnMubmFtZSAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG9wdGlvbnMubmFtZSwgJ2knKTtcbiAgICAgIG5ld0xpc3QgPSBuZXdMaXN0LmZpbHRlcigoc29uZykgPT4gcGF0dGVybi50ZXN0KHNvbmcuc29uZykpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFydGlzdCAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG9wdGlvbnMuYXJ0aXN0LCAnaScpO1xuICAgICAgbmV3TGlzdCA9IG5ld0xpc3QuZmlsdGVyKChzb25nKSA9PiBwYXR0ZXJuLnRlc3Qoc29uZy5hcnRpc3QpKTtcbiAgICB9XG5cbiAgICBzZXRMaXN0KG5ld0xpc3QpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UHVibGljU2hlbGwgdGl0bGU9XCJNYWltYWkgRFggU29uZyBMaXN0IHwgSnVzdGluJ3MgV2Vic2l0ZVwiPlxuICAgICAgPENvbnRlbnRIZWFkZXIgZGF0YT17Y29udGVudFByb3BzfSAvPlxuICAgICAgPGgyPlNvbmcgTGlzdDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XG4gICAgICAgIDxGb3JtIGludmVydGVkPlxuICAgICAgICAgIDxGb3JtLkdyb3VwPlxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgbGFiZWw9J1NvbmcgTmFtZTonIHBsYWNlaG9sZGVyPSdTZWFyY2ggYnkgc29uZyBuYW1lLi4uJyB2YWx1ZT17cXVlcnkubmFtZX0gb25DaGFuZ2U9e3NldE5hbWV9IC8+XG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD0nQXJ0aXN0OicgcGxhY2Vob2xkZXI9J1NlYXJjaCBieSBhcnRpc3QuLi4nIHZhbHVlPXtxdWVyeS5hcnRpc3R9IG9uQ2hhbmdlPXtzZXRBcnRpc3R9Lz5cbiAgICAgICAgICAgIDxGb3JtLkRyb3Bkb3duIGxhYmVsPSdHZW5yZTonIHNlbGVjdGlvbiBwbGFjZWhvbGRlcj0nRmlsdGVyIGJ5IGdlbnJlLi4uJyBvcHRpb25zPXtnZW5yZXN9IG9uQ2hhbmdlPXtzZXRHZW5yZX0gLz5cbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAge2xpc3QgJiZcbiAgICAgICAgbGlzdC5tYXAoKHNvbmc6IE1NU29uZ1JlY29yZCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBpZiAoaWR4IDwgcmVzdWx0cykge1xuICAgICAgICAgICAgcmV0dXJuIDxNYWltYWlTb25nQ29tcG9uZW50IHNvbmc9e3Nvbmd9IGtleT17c29uZy5pZH0gLz47XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgIHtsb2FkaW5nICYmIDxNYWltYWlTb25nTG9hZGVyIC8+fVxuICAgIDwvUHVibGljU2hlbGw+XG4gICk7XG59O1xuXG4vLyBGZXRjaCBkYXRhIGJlZm9yZSBsb2FkLlxuTWFpbWFpRFguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0KCcvbWFpbWFpJyk7XG4gIGNvbnN0IGRhdGE6IE1NUGxheWVyRGF0YSA9IHJlcy5kYXRhO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW1haURYO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==