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
  }, [list, results]); // Set name.

  var setName = function setName(event) {
    var options = _objectSpread(_objectSpread({}, query), {}, {
      name: event.target.value
    });

    setQuery(options);
    console.log(options);
    console.log(query);
    filter(options);
  };

  var filter = function filter(options) {
    var pattern;
    var newList = data.record;

    if (options.name !== '') {
      pattern = new RegExp(options.name);
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
      lineNumber: 93,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
      children: "Song List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [query.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        icon: "search",
        placeholder: "Search by song name...",
        value: query.name,
        onChange: setName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        icon: "search",
        placeholder: "Search by artist..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, _this), list && list.map(function (song, idx) {
      if (idx < results) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongComponent"], {
          song: song
        }, song.id, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 20
        }, _this);
      }
    }), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongLoader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS50c3giXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY29udGVudFByb3BzIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwiTWFpbWFpRFgiLCJkYXRhIiwib3B0aW9ucyIsIm5hbWUiLCJhcnRpc3QiLCJsZXZlbCIsImdlbnJlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJyZWNvcmQiLCJsaXN0Iiwic2V0TGlzdCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ1c2VFZmZlY3QiLCJjaGVja1Njcm9sbCIsImhlaWdodCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbEhlaWdodCIsImN1cnIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXROYW1lIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJwYXR0ZXJuIiwibmV3TGlzdCIsIlJlZ0V4cCIsInNvbmciLCJ0ZXN0IiwibWFwIiwiaWR4IiwiaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXQiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0NBSUE7O0FBQ0EsSUFBTUEsR0FBa0IsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQ3RDQyxTQUFPLEVBQUU7QUFENkIsQ0FBYixDQUEzQjtBQUlBLElBQU1DLFlBQTBCLEdBQUc7QUFDakNDLFNBQU8sRUFBRSxXQUR3QjtBQUVqQ0MsYUFBVyxFQUFFO0FBRm9CLENBQW5DOztBQWlC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O0FBQUEsaUJBQ1B0RCxHQUFHLENBQUN1RCxHQUFKLENBQVEsU0FBUixDQURPOztBQUFBO0FBQ25CQyxhQURtQjtBQUVuQmhELGNBRm1CLEdBRUVnRCxHQUFHLENBQUNoRCxJQUZOO0FBQUEsMkNBR2xCQSxJQUhrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUEzQjtBQU1lRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWltYWkuM2ZhZGYzZTI3NTMwYWQ1NjVjNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuaW1wb3J0IENvbnRlbnRIZWFkZXIgZnJvbSAnLi4vLi4vY29tbW9uL0NvbnRlbnRIZWFkZXInO1xuaW1wb3J0IFB1YmxpY1NoZWxsIGZyb20gJy4uLy4uL2NvbW1vbi9QdWJsaWNTaGVsbCc7XG5pbXBvcnQgeyBNTVBsYXllckRhdGEsIE1NU29uZ1JlY29yZCwgQ29udGVudFByb3BzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgTWFpbWFpU29uZ0NvbXBvbmVudCwgTWFpbWFpU29uZ0xvYWRlciB9IGZyb20gJy4vTWFpbWFpLmRhdGEnO1xuXG4vLyBDcmVhdGUgQXhpb3MgaW5zdGFuY2UuXG5jb25zdCBhcGk6IEF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiAnaHR0cHM6Ly9raW5nb2Zib3hlcy5teGJsdWUubmV0LmF1OjQwMDAvJyxcbn0pO1xuXG5jb25zdCBjb250ZW50UHJvcHM6IENvbnRlbnRQcm9wcyA9IHtcbiAgaGVhZGluZzogJ01haW1haSBEWCcsXG4gIGRlc2NyaXB0aW9uOiBbXG4gICAgYE1haW1haSBEWCBpcyBhbiBhcmNhZGUgcmh5dGhtIGdhbWUgd2l0aCBlaWdodCBidXR0b25zIHNwYWNlZCBhcm91bmQgaW4gYSBjaXJjbGUuIFxuICBCZWxvdyBhcmUgYSBsaXN0IG9mIHNvbmdzIGF2YWlsYWJsZSBvbiB0aGUgbWFjaGluZSAodGhlIGludGVybmF0aW9uYWwgdmVyc2lvbiksIFxuICBhcyB0aGUgc29uZyBsaXN0IG9uIHRoZSBvZmZpY2lhbCBzaXRlIGlzIG5vdCB1cC10by1kYXRlLmAsXG4gICAgYEV2ZXJ5IHNvbmcgaXMgZWl0aGVyIGEgXCJEZWx1eGVcIiBvciBcIlN0YW5kYXJkXCIgc29uZywgYW5kIGlzIHNwZWNpZmllZCBieSB0aGUgbG9nby4gSWYgaXQgaXMgYSBEZWx1eGUgc29uZyxcbiAgdGhlIGZvbnQgY29sb3IgaXMgcmFpbmJvdywgYW5kIGlmIGl0IGlzIGEgU3RhbmRhcmQgc29uZywgdGhlIGZvbnQgY29sb3IgaXMgd2hpdGUuIERlbHV4ZSBzb25nc1xuICBhcmUgZXhjbHVzaXZlIHRvIE1haW1haSBEWCwgYW5kIHNvbWUgc29uZ3MgbWF5IGV2ZW4gaGF2ZSBib3RoIERlbHV4ZSBhbmQgU3RhbmRhcmQgdmVyc2lvbnMhIFRoZSBnZW5yZVxuICBmb3IgZWFjaCBzb25nIGlzIGxvY2F0ZWQgaW4gdGhlIHRvcCByaWdodCBjb3JuZXIuYCxcbiAgICBgRWFjaCBzb25nIGhhcyBhIG1pbmltdW0gb2YgZm91ciBkaWZmaWN1bHRpZXM6IEJBU0lDLCBBRFZBTkNFRCwgRVhQRVJUIGFuZCBNQVNURVIuXG4gIFNvbWUgc29uZ3MgaGF2ZSBhIGZpZnRoIGRpZmZpY3VsdHksIFJFOk1BU1RFUiwgd2hpY2ggaXMgaGFyZGVyIHRoYW4gTUFTVEVSLiBUaGUgZGlmZmljdWx0eSBsZXZlbHNcbiAgb2YgdGhlIHNvbmdzIHJhbmdlIGZyb20gMSB0byAxNSwgYW5kIHRoZXJlIGlzIG9ubHkgY3VycmVudGx5IG9uZSBzb25nIHRoYXQgaXMgTGV2ZWwgMTUuYCxcbiAgICBgSSBkbyBub3Qgb3duIGFueSBvZiB0aGUgaW1hZ2VzIG9yIHNvbmdzLCBhbGwgb3duZXJzaGlwIGJlbG9uZ3MgdG8gU0VHQS5gLFxuICBdLFxufTtcblxuY29uc3QgTWFpbWFpRFg6IE5leHRQYWdlPE1NUGxheWVyRGF0YT4gPSAoZGF0YSkgPT4ge1xuXG4gIGNvbnN0IG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgbmFtZTogJycsXG4gICAgYXJ0aXN0OiAnJyxcbiAgICBsZXZlbDogJycsXG4gICAgZ2VucmU6ICcnLFxuICB9XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDUpO1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxNTVNvbmdSZWNvcmRbXT4oZGF0YS5yZWNvcmQpO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IFJlYWN0LnVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KG9wdGlvbnMpO1xuXG4gIC8vIFVzZUVmZmVjdCBob29rIGZvciBpbmZpbml0ZSBzY3JvbGwuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoZWlnaHQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodDtcbiAgICAgIGNvbnN0IGN1cnIgPSB3aW5kb3cuc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGlmIChjdXJyID49IGhlaWdodCkge1xuICAgICAgICBpZiAobGlzdCAmJiByZXN1bHRzIDwgbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRSZXN1bHRzKHJlc3VsdHMgKyAxMCk7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbbGlzdCwgcmVzdWx0c10pO1xuXG4gIC8vIFNldCBuYW1lLlxuICBjb25zdCBzZXROYW1lID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4ucXVlcnksIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX1cbiAgICBzZXRRdWVyeShvcHRpb25zKTtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgZmlsdGVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBmaWx0ZXIgPSAob3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPT4ge1xuXG4gICAgbGV0IHBhdHRlcm46IFJlZ0V4cDtcbiAgICBsZXQgbmV3TGlzdCA9IGRhdGEucmVjb3JkO1xuXG4gICAgaWYgKG9wdGlvbnMubmFtZSAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG9wdGlvbnMubmFtZSk7XG4gICAgICBuZXdMaXN0ID0gZGF0YS5yZWNvcmQuZmlsdGVyKChzb25nKSA9PiBwYXR0ZXJuLnRlc3Qoc29uZy5zb25nKSk7XG4gICAgfVxuXG4gICAgc2V0TGlzdChuZXdMaXN0KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFB1YmxpY1NoZWxsIHRpdGxlPVwiTWFpbWFpIERYIFNvbmcgTGlzdCB8IEp1c3RpbidzIFdlYnNpdGVcIj5cbiAgICAgIDxDb250ZW50SGVhZGVyIGRhdGE9e2NvbnRlbnRQcm9wc30gLz5cbiAgICAgIDxoMj5Tb25nIExpc3Q8L2gyPlxuICAgICAgPGRpdj5cbiAgICAgICAge3F1ZXJ5Lm5hbWV9XG4gICAgICAgIDxJbnB1dCBpY29uPSdzZWFyY2gnIHBsYWNlaG9sZGVyPSdTZWFyY2ggYnkgc29uZyBuYW1lLi4uJyB2YWx1ZT17cXVlcnkubmFtZX0gb25DaGFuZ2U9e3NldE5hbWV9IC8+XG4gICAgICAgIDxJbnB1dCBpY29uPSdzZWFyY2gnIHBsYWNlaG9sZGVyPSdTZWFyY2ggYnkgYXJ0aXN0Li4uJyAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7bGlzdCAmJlxuICAgICAgICBsaXN0Lm1hcCgoc29uZzogTU1Tb25nUmVjb3JkLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmIChpZHggPCByZXN1bHRzKSB7XG4gICAgICAgICAgICByZXR1cm4gPE1haW1haVNvbmdDb21wb25lbnQgc29uZz17c29uZ30ga2V5PXtzb25nLmlkfSAvPjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAge2xvYWRpbmcgJiYgPE1haW1haVNvbmdMb2FkZXIgLz59XG4gICAgPC9QdWJsaWNTaGVsbD5cbiAgKTtcbn07XG5cbi8vIEZldGNoIGRhdGEgYmVmb3JlIGxvYWQuXG5NYWltYWlEWC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXQoJy9tYWltYWknKTtcbiAgY29uc3QgZGF0YTogTU1QbGF5ZXJEYXRhID0gcmVzLmRhdGE7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbWFpRFg7XG4iXSwic291cmNlUm9vdCI6IiJ9