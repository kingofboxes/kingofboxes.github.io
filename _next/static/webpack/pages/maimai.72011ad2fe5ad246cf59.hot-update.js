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
      setQuery = _React$useState8[1]; // UseEffect hook for infinite scroll.


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
  }, [query, list, results]); // Set name.

  var setName = function setName(event) {
    console.log(event.target.value);
    setQuery(_objectSpread(_objectSpread({}, query), {}, {
      name: event.target.value
    }));
    console.log(query);
    filter();
  };

  var filter = function filter() {
    var newList;

    if (query.name === '') {
      newList = data.record;
    } else {
      var pattern = new RegExp(query.name);
      newList = data.record.filter(function (song) {
        return pattern.test(song.song);
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
      lineNumber: 90,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
      children: "Song List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [query.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        icon: "search",
        placeholder: "Search by song name...",
        value: query.name,
        onChange: function onChange(e) {
          return setName(e);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        icon: "search",
        placeholder: "Search by artist..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this), list && list.map(function (song, idx) {
      if (idx < results) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongComponent"], {
          song: song
        }, song.id, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 20
        }, _this);
      }
    }), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongLoader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS50c3giXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY29udGVudFByb3BzIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwiTWFpbWFpRFgiLCJkYXRhIiwib3B0aW9ucyIsIm5hbWUiLCJhcnRpc3QiLCJsZXZlbCIsImdlbnJlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJyZWNvcmQiLCJsaXN0Iiwic2V0TGlzdCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ1c2VFZmZlY3QiLCJjaGVja1Njcm9sbCIsImhlaWdodCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbEhlaWdodCIsImN1cnIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXROYW1lIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXIiLCJuZXdMaXN0IiwicGF0dGVybiIsIlJlZ0V4cCIsInNvbmciLCJ0ZXN0IiwiZSIsIm1hcCIsImlkeCIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0IiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtDQUlBOztBQUNBLElBQU1BLEdBQWtCLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUN0Q0MsU0FBTyxFQUFFO0FBRDZCLENBQWIsQ0FBM0I7QUFJQSxJQUFNQyxZQUEwQixHQUFHO0FBQ2pDQyxTQUFPLEVBQUUsV0FEd0I7QUFFakNDLGFBQVcsRUFBRTtBQUZvQixDQUFuQzs7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QUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNQdkQsR0FBRyxDQUFDd0QsR0FBSixDQUFRLFNBQVIsQ0FETzs7QUFBQTtBQUNuQkMsYUFEbUI7QUFFbkJqRCxjQUZtQixHQUVFaUQsR0FBRyxDQUFDakQsSUFGTjtBQUFBLDJDQUdsQkEsSUFIa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBM0I7QUFNZUQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbWFpLjcyMDExYWQyZmU1YWQyNDZjZjU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmltcG9ydCBDb250ZW50SGVhZGVyIGZyb20gJy4uLy4uL2NvbW1vbi9Db250ZW50SGVhZGVyJztcbmltcG9ydCBQdWJsaWNTaGVsbCBmcm9tICcuLi8uLi9jb21tb24vUHVibGljU2hlbGwnO1xuaW1wb3J0IHsgTU1QbGF5ZXJEYXRhLCBNTVNvbmdSZWNvcmQsIENvbnRlbnRQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IE1haW1haVNvbmdDb21wb25lbnQsIE1haW1haVNvbmdMb2FkZXIgfSBmcm9tICcuL01haW1haS5kYXRhJztcblxuLy8gQ3JlYXRlIEF4aW9zIGluc3RhbmNlLlxuY29uc3QgYXBpOiBBeGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHBzOi8va2luZ29mYm94ZXMubXhibHVlLm5ldC5hdTo0MDAwLycsXG59KTtcblxuY29uc3QgY29udGVudFByb3BzOiBDb250ZW50UHJvcHMgPSB7XG4gIGhlYWRpbmc6ICdNYWltYWkgRFgnLFxuICBkZXNjcmlwdGlvbjogW1xuICAgIGBNYWltYWkgRFggaXMgYW4gYXJjYWRlIHJoeXRobSBnYW1lIHdpdGggZWlnaHQgYnV0dG9ucyBzcGFjZWQgYXJvdW5kIGluIGEgY2lyY2xlLiBcbiAgQmVsb3cgYXJlIGEgbGlzdCBvZiBzb25ncyBhdmFpbGFibGUgb24gdGhlIG1hY2hpbmUgKHRoZSBpbnRlcm5hdGlvbmFsIHZlcnNpb24pLCBcbiAgYXMgdGhlIHNvbmcgbGlzdCBvbiB0aGUgb2ZmaWNpYWwgc2l0ZSBpcyBub3QgdXAtdG8tZGF0ZS5gLFxuICAgIGBFdmVyeSBzb25nIGlzIGVpdGhlciBhIFwiRGVsdXhlXCIgb3IgXCJTdGFuZGFyZFwiIHNvbmcsIGFuZCBpcyBzcGVjaWZpZWQgYnkgdGhlIGxvZ28uIElmIGl0IGlzIGEgRGVsdXhlIHNvbmcsXG4gIHRoZSBmb250IGNvbG9yIGlzIHJhaW5ib3csIGFuZCBpZiBpdCBpcyBhIFN0YW5kYXJkIHNvbmcsIHRoZSBmb250IGNvbG9yIGlzIHdoaXRlLiBEZWx1eGUgc29uZ3NcbiAgYXJlIGV4Y2x1c2l2ZSB0byBNYWltYWkgRFgsIGFuZCBzb21lIHNvbmdzIG1heSBldmVuIGhhdmUgYm90aCBEZWx1eGUgYW5kIFN0YW5kYXJkIHZlcnNpb25zISBUaGUgZ2VucmVcbiAgZm9yIGVhY2ggc29uZyBpcyBsb2NhdGVkIGluIHRoZSB0b3AgcmlnaHQgY29ybmVyLmAsXG4gICAgYEVhY2ggc29uZyBoYXMgYSBtaW5pbXVtIG9mIGZvdXIgZGlmZmljdWx0aWVzOiBCQVNJQywgQURWQU5DRUQsIEVYUEVSVCBhbmQgTUFTVEVSLlxuICBTb21lIHNvbmdzIGhhdmUgYSBmaWZ0aCBkaWZmaWN1bHR5LCBSRTpNQVNURVIsIHdoaWNoIGlzIGhhcmRlciB0aGFuIE1BU1RFUi4gVGhlIGRpZmZpY3VsdHkgbGV2ZWxzXG4gIG9mIHRoZSBzb25ncyByYW5nZSBmcm9tIDEgdG8gMTUsIGFuZCB0aGVyZSBpcyBvbmx5IGN1cnJlbnRseSBvbmUgc29uZyB0aGF0IGlzIExldmVsIDE1LmAsXG4gICAgYEkgZG8gbm90IG93biBhbnkgb2YgdGhlIGltYWdlcyBvciBzb25ncywgYWxsIG93bmVyc2hpcCBiZWxvbmdzIHRvIFNFR0EuYCxcbiAgXSxcbn07XG5cbmNvbnN0IE1haW1haURYOiBOZXh0UGFnZTxNTVBsYXllckRhdGE+ID0gKGRhdGEpID0+IHtcblxuICBjb25zdCBvcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgIG5hbWU6ICcnLFxuICAgIGFydGlzdDogJycsXG4gICAgbGV2ZWw6ICcnLFxuICAgIGdlbnJlOiAnJyxcbiAgfVxuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPig1KTtcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gUmVhY3QudXNlU3RhdGU8TU1Tb25nUmVjb3JkW10+KGRhdGEucmVjb3JkKTtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSBSZWFjdC51c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PihvcHRpb25zKTtcblxuICAvLyBVc2VFZmZlY3QgaG9vayBmb3IgaW5maW5pdGUgc2Nyb2xsLlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQ7XG4gICAgICBjb25zdCBjdXJyID0gd2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBpZiAoY3VyciA+PSBoZWlnaHQpIHtcbiAgICAgICAgaWYgKGxpc3QgJiYgcmVzdWx0cyA8IGxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0UmVzdWx0cyhyZXN1bHRzICsgMTApO1xuICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbCk7XG4gICAgfTtcbiAgfSwgW3F1ZXJ5LCBsaXN0LCByZXN1bHRzXSk7XG5cbiAgLy8gU2V0IG5hbWUuXG4gIGNvbnN0IHNldE5hbWUgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIHNldFF1ZXJ5KHsuLi5xdWVyeSwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgY29uc29sZS5sb2cocXVlcnkpO1xuICAgIGZpbHRlcigpO1xuICB9XG5cbiAgY29uc3QgZmlsdGVyID0gKCkgPT4ge1xuICAgIGxldCBuZXdMaXN0O1xuICAgIGlmIChxdWVyeS5uYW1lID09PSAnJykge1xuICAgICAgbmV3TGlzdCA9IGRhdGEucmVjb3JkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cChxdWVyeS5uYW1lKTtcbiAgICAgIG5ld0xpc3QgPSBkYXRhLnJlY29yZC5maWx0ZXIoKHNvbmcpID0+IHBhdHRlcm4udGVzdChzb25nLnNvbmcpKTtcbiAgICB9XG4gICAgc2V0TGlzdChuZXdMaXN0KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFB1YmxpY1NoZWxsIHRpdGxlPVwiTWFpbWFpIERYIFNvbmcgTGlzdCB8IEp1c3RpbidzIFdlYnNpdGVcIj5cbiAgICAgIDxDb250ZW50SGVhZGVyIGRhdGE9e2NvbnRlbnRQcm9wc30gLz5cbiAgICAgIDxoMj5Tb25nIExpc3Q8L2gyPlxuICAgICAgPGRpdj5cbiAgICAgICAge3F1ZXJ5Lm5hbWV9XG4gICAgICAgIDxJbnB1dCBpY29uPSdzZWFyY2gnIHBsYWNlaG9sZGVyPSdTZWFyY2ggYnkgc29uZyBuYW1lLi4uJyB2YWx1ZT17cXVlcnkubmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUpfSAvPlxuICAgICAgICA8SW5wdXQgaWNvbj0nc2VhcmNoJyBwbGFjZWhvbGRlcj0nU2VhcmNoIGJ5IGFydGlzdC4uLicgLz5cbiAgICAgIDwvZGl2PlxuICAgICAge2xpc3QgJiZcbiAgICAgICAgbGlzdC5tYXAoKHNvbmc6IE1NU29uZ1JlY29yZCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBpZiAoaWR4IDwgcmVzdWx0cykge1xuICAgICAgICAgICAgcmV0dXJuIDxNYWltYWlTb25nQ29tcG9uZW50IHNvbmc9e3Nvbmd9IGtleT17c29uZy5pZH0gLz47XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgIHtsb2FkaW5nICYmIDxNYWltYWlTb25nTG9hZGVyIC8+fVxuICAgIDwvUHVibGljU2hlbGw+XG4gICk7XG59O1xuXG4vLyBGZXRjaCBkYXRhIGJlZm9yZSBsb2FkLlxuTWFpbWFpRFguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0KCcvbWFpbWFpJyk7XG4gIGNvbnN0IGRhdGE6IE1NUGxheWVyRGF0YSA9IHJlcy5kYXRhO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW1haURYO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==