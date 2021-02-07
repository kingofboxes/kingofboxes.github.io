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

  var setArtist = function setArtist(event) {
    var options = _objectSpread(_objectSpread({}, query), {}, {
      artist: event.target.value
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
      newList = newList.filter(function (song) {
        return pattern.test(song.song);
      });
    }

    if (options.artist !== '') {
      pattern = new RegExp(options.artist);
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
      lineNumber: 106,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
      children: "Song List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [query.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        icon: "search",
        placeholder: "Search by song name...",
        value: query.name,
        onChange: setName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        icon: "search",
        placeholder: "Search by artist...",
        value: query.artist,
        onChange: setArtist
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this), list && list.map(function (song, idx) {
      if (idx < results) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongComponent"], {
          song: song
        }, song.id, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 20
        }, _this);
      }
    }), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Maimai_data__WEBPACK_IMPORTED_MODULE_10__["MaimaiSongLoader"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTWFpbWFpL01haW1haS50c3giXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiY29udGVudFByb3BzIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwiTWFpbWFpRFgiLCJkYXRhIiwib3B0aW9ucyIsIm5hbWUiLCJhcnRpc3QiLCJsZXZlbCIsImdlbnJlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJyZWNvcmQiLCJsaXN0Iiwic2V0TGlzdCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ1c2VFZmZlY3QiLCJjaGVja1Njcm9sbCIsImhlaWdodCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbEhlaWdodCIsImN1cnIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaW5uZXJIZWlnaHQiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXROYW1lIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJzZXRBcnRpc3QiLCJwYXR0ZXJuIiwibmV3TGlzdCIsIlJlZ0V4cCIsInNvbmciLCJ0ZXN0IiwibWFwIiwiaWR4IiwiaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXQiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0NBSUE7O0FBQ0EsSUFBTUEsR0FBa0IsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQ3RDQyxTQUFPLEVBQUU7QUFENkIsQ0FBYixDQUEzQjtBQUlBLElBQU1DLFlBQTBCLEdBQUc7QUFDakNDLFNBQU8sRUFBRSxXQUR3QjtBQUVqQ0MsYUFBVyxFQUFFO0FBRm9C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QUksRUFBQyxRQUFaO0FBQXFCLG1CQUFXLEVBQUMscUJBQWpDO0FBQXVELGFBQUssRUFBRWhCLEtBQUssQ0FBQ1osTUFBcEU7QUFBNEUsZ0JBQVEsRUFBRW1DO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixFQVFHekIsSUFBSSxJQUNIQSxJQUFJLENBQUMrQixHQUFMLENBQVMsVUFBQ0YsSUFBRCxFQUFxQkcsR0FBckIsRUFBcUM7QUFDNUMsVUFBSUEsR0FBRyxHQUFHbkMsT0FBVixFQUFtQjtBQUNqQiw0QkFBTyxxRUFBQyxpRUFBRDtBQUFxQixjQUFJLEVBQUVnQztBQUEzQixXQUFzQ0EsSUFBSSxDQUFDSSxFQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0Q7QUFDRixLQUpELENBVEosRUFjR3RDLE9BQU8saUJBQUkscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBeEZELEMsQ0EwRkE7OztHQTFGTVQsUTs7S0FBQUEsUTtBQTJGTkEsUUFBUSxDQUFDZ0QsZUFBVCwrU0FBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUHZELEdBQUcsQ0FBQ3dELEdBQUosQ0FBUSxTQUFSLENBRE87O0FBQUE7QUFDbkJDLGFBRG1CO0FBRW5CakQsY0FGbUIsR0FFRWlELEdBQUcsQ0FBQ2pELElBRk47QUFBQSwyQ0FHbEJBLElBSGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTNCO0FBTWVELHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW1haS5mZjE4Y2Q5NDgwMDdkZTBkMDc2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgQ29udGVudEhlYWRlciBmcm9tICcuLi8uLi9jb21tb24vQ29udGVudEhlYWRlcic7XG5pbXBvcnQgUHVibGljU2hlbGwgZnJvbSAnLi4vLi4vY29tbW9uL1B1YmxpY1NoZWxsJztcbmltcG9ydCB7IE1NUGxheWVyRGF0YSwgTU1Tb25nUmVjb3JkLCBDb250ZW50UHJvcHMgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBNYWltYWlTb25nQ29tcG9uZW50LCBNYWltYWlTb25nTG9hZGVyIH0gZnJvbSAnLi9NYWltYWkuZGF0YSc7XG5cbi8vIENyZWF0ZSBBeGlvcyBpbnN0YW5jZS5cbmNvbnN0IGFwaTogQXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6ICdodHRwczovL2tpbmdvZmJveGVzLm14Ymx1ZS5uZXQuYXU6NDAwMC8nLFxufSk7XG5cbmNvbnN0IGNvbnRlbnRQcm9wczogQ29udGVudFByb3BzID0ge1xuICBoZWFkaW5nOiAnTWFpbWFpIERYJyxcbiAgZGVzY3JpcHRpb246IFtcbiAgICBgTWFpbWFpIERYIGlzIGFuIGFyY2FkZSByaHl0aG0gZ2FtZSB3aXRoIGVpZ2h0IGJ1dHRvbnMgc3BhY2VkIGFyb3VuZCBpbiBhIGNpcmNsZS4gXG4gIEJlbG93IGFyZSBhIGxpc3Qgb2Ygc29uZ3MgYXZhaWxhYmxlIG9uIHRoZSBtYWNoaW5lICh0aGUgaW50ZXJuYXRpb25hbCB2ZXJzaW9uKSwgXG4gIGFzIHRoZSBzb25nIGxpc3Qgb24gdGhlIG9mZmljaWFsIHNpdGUgaXMgbm90IHVwLXRvLWRhdGUuYCxcbiAgICBgRXZlcnkgc29uZyBpcyBlaXRoZXIgYSBcIkRlbHV4ZVwiIG9yIFwiU3RhbmRhcmRcIiBzb25nLCBhbmQgaXMgc3BlY2lmaWVkIGJ5IHRoZSBsb2dvLiBJZiBpdCBpcyBhIERlbHV4ZSBzb25nLFxuICB0aGUgZm9udCBjb2xvciBpcyByYWluYm93LCBhbmQgaWYgaXQgaXMgYSBTdGFuZGFyZCBzb25nLCB0aGUgZm9udCBjb2xvciBpcyB3aGl0ZS4gRGVsdXhlIHNvbmdzXG4gIGFyZSBleGNsdXNpdmUgdG8gTWFpbWFpIERYLCBhbmQgc29tZSBzb25ncyBtYXkgZXZlbiBoYXZlIGJvdGggRGVsdXhlIGFuZCBTdGFuZGFyZCB2ZXJzaW9ucyEgVGhlIGdlbnJlXG4gIGZvciBlYWNoIHNvbmcgaXMgbG9jYXRlZCBpbiB0aGUgdG9wIHJpZ2h0IGNvcm5lci5gLFxuICAgIGBFYWNoIHNvbmcgaGFzIGEgbWluaW11bSBvZiBmb3VyIGRpZmZpY3VsdGllczogQkFTSUMsIEFEVkFOQ0VELCBFWFBFUlQgYW5kIE1BU1RFUi5cbiAgU29tZSBzb25ncyBoYXZlIGEgZmlmdGggZGlmZmljdWx0eSwgUkU6TUFTVEVSLCB3aGljaCBpcyBoYXJkZXIgdGhhbiBNQVNURVIuIFRoZSBkaWZmaWN1bHR5IGxldmVsc1xuICBvZiB0aGUgc29uZ3MgcmFuZ2UgZnJvbSAxIHRvIDE1LCBhbmQgdGhlcmUgaXMgb25seSBjdXJyZW50bHkgb25lIHNvbmcgdGhhdCBpcyBMZXZlbCAxNS5gLFxuICAgIGBJIGRvIG5vdCBvd24gYW55IG9mIHRoZSBpbWFnZXMgb3Igc29uZ3MsIGFsbCBvd25lcnNoaXAgYmVsb25ncyB0byBTRUdBLmAsXG4gIF0sXG59O1xuXG5jb25zdCBNYWltYWlEWDogTmV4dFBhZ2U8TU1QbGF5ZXJEYXRhPiA9IChkYXRhKSA9PiB7XG5cbiAgY29uc3Qgb3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBhcnRpc3Q6ICcnLFxuICAgIGxldmVsOiAnJyxcbiAgICBnZW5yZTogJycsXG4gIH1cblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oNSk7XG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPE1NU29uZ1JlY29yZFtdPihkYXRhLnJlY29yZCk7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gUmVhY3QudXNlU3RhdGU8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4ob3B0aW9ucyk7XG5cbiAgLy8gVXNlRWZmZWN0IGhvb2sgZm9yIGluZmluaXRlIHNjcm9sbC5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVja1Njcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0O1xuICAgICAgY29uc3QgY3VyciA9IHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgaWYgKGN1cnIgPj0gaGVpZ2h0KSB7XG4gICAgICAgIGlmIChsaXN0ICYmIHJlc3VsdHMgPCBsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldFJlc3VsdHMocmVzdWx0cyArIDEwKTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtsaXN0LCByZXN1bHRzXSk7XG5cbiAgLy8gU2V0IG5hbWUuXG4gIGNvbnN0IHNldE5hbWUgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5xdWVyeSwgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfVxuICAgIHNldFF1ZXJ5KG9wdGlvbnMpO1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgICBmaWx0ZXIob3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IHNldEFydGlzdCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gey4uLnF1ZXJ5LCBhcnRpc3Q6IGV2ZW50LnRhcmdldC52YWx1ZX1cbiAgICBzZXRRdWVyeShvcHRpb25zKTtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgZmlsdGVyKG9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBmaWx0ZXIgPSAob3B0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPT4ge1xuXG4gICAgbGV0IHBhdHRlcm46IFJlZ0V4cDtcbiAgICBsZXQgbmV3TGlzdCA9IGRhdGEucmVjb3JkO1xuXG4gICAgaWYgKG9wdGlvbnMubmFtZSAhPT0gJycpIHtcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG9wdGlvbnMubmFtZSk7XG4gICAgICBuZXdMaXN0ID0gbmV3TGlzdC5maWx0ZXIoKHNvbmcpID0+IHBhdHRlcm4udGVzdChzb25nLnNvbmcpKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5hcnRpc3QgIT09ICcnKSB7XG4gICAgICBwYXR0ZXJuID0gbmV3IFJlZ0V4cChvcHRpb25zLmFydGlzdCk7XG4gICAgICBuZXdMaXN0ID0gbmV3TGlzdC5maWx0ZXIoKHNvbmcpID0+IHBhdHRlcm4udGVzdChzb25nLmFydGlzdCkpO1xuICAgIH1cblxuICAgIHNldExpc3QobmV3TGlzdCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQdWJsaWNTaGVsbCB0aXRsZT1cIk1haW1haSBEWCBTb25nIExpc3QgfCBKdXN0aW4ncyBXZWJzaXRlXCI+XG4gICAgICA8Q29udGVudEhlYWRlciBkYXRhPXtjb250ZW50UHJvcHN9IC8+XG4gICAgICA8aDI+U29uZyBMaXN0PC9oMj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtxdWVyeS5uYW1lfVxuICAgICAgICA8SW5wdXQgaWNvbj0nc2VhcmNoJyBwbGFjZWhvbGRlcj0nU2VhcmNoIGJ5IHNvbmcgbmFtZS4uLicgdmFsdWU9e3F1ZXJ5Lm5hbWV9IG9uQ2hhbmdlPXtzZXROYW1lfSAvPlxuICAgICAgICA8SW5wdXQgaWNvbj0nc2VhcmNoJyBwbGFjZWhvbGRlcj0nU2VhcmNoIGJ5IGFydGlzdC4uLicgdmFsdWU9e3F1ZXJ5LmFydGlzdH0gb25DaGFuZ2U9e3NldEFydGlzdH0vPlxuICAgICAgPC9kaXY+XG4gICAgICB7bGlzdCAmJlxuICAgICAgICBsaXN0Lm1hcCgoc29uZzogTU1Tb25nUmVjb3JkLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmIChpZHggPCByZXN1bHRzKSB7XG4gICAgICAgICAgICByZXR1cm4gPE1haW1haVNvbmdDb21wb25lbnQgc29uZz17c29uZ30ga2V5PXtzb25nLmlkfSAvPjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAge2xvYWRpbmcgJiYgPE1haW1haVNvbmdMb2FkZXIgLz59XG4gICAgPC9QdWJsaWNTaGVsbD5cbiAgKTtcbn07XG5cbi8vIEZldGNoIGRhdGEgYmVmb3JlIGxvYWQuXG5NYWltYWlEWC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXQoJy9tYWltYWknKTtcbiAgY29uc3QgZGF0YTogTU1QbGF5ZXJEYXRhID0gcmVzLmRhdGE7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbWFpRFg7XG4iXSwic291cmNlUm9vdCI6IiJ9