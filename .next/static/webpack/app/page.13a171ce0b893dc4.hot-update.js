"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Navbar.jsx":
/*!***************************************!*\
  !*** ./src/app/components/Navbar.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _heroicons_react_24_solid_esm_Bars3Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/solid/esm/Bars3Icon */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/Bars3Icon.js\");\n/* harmony import */ var _heroicons_react_24_solid_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/solid/esm/XMarkIcon */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MenuOverlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuOverlay */ \"(app-pages-browser)/./src/app/components/MenuOverlay.jsx\");\n/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavLink */ \"(app-pages-browser)/./src/app/components/NavLink.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst navLinks = [\n    {\n        title: \"About\",\n        path: \"#about\"\n    },\n    {\n        title: \"Projects\",\n        path: \"#projects\"\n    },\n    {\n        title: \"Contact\",\n        path: \"#contact\"\n    }\n];\nconst Navbar = ()=>{\n    _s();\n    const [navbarOpen, setNavbarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        className: \"text-2xl md:text-5xl text-white font-semibold\",\n                        children: \"Vitor Latorraca\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/Navbar.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mobile-menu block md:hidden\",\n                        children: !navbarOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setNavbarOpen(true),\n                            className: \"flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid_esm_Bars3Icon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"h-5 w-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/Navbar.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/Navbar.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setNavbarOpen(false),\n                            className: \"flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"h-5 w-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/Navbar.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/Navbar.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/Navbar.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"menu hidden md:block md:w-auto\",\n                        id: \"navbar\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0\",\n                            children: navLinks.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        href: link.path,\n                                        title: link.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/Navbar.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/Navbar.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/Navbar.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/Navbar.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/Navbar.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            navbarOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuOverlay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                links: navLinks\n            }, void 0, false, {\n                fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/Navbar.jsx\",\n                lineNumber: 62,\n                columnNumber: 21\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/Navbar.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"15c5sM/hZYq2eTRu58QbId6xljA=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNpRTtBQUFBO0FBQ3BDO0FBQ0k7QUFDTztBQUNSO0FBRWhDLE1BQU1NLFdBQVc7SUFDZjtRQUNFQyxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO0lBQ1I7Q0FDRDtBQUVELE1BQU1DLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBRTdDLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDWCxrREFBSUE7d0JBQ0hhLE1BQU07d0JBQ05GLFdBQVU7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ1osQ0FBQ0gsMkJBQ0EsOERBQUNNOzRCQUNDQyxTQUFTLElBQU1OLGNBQWM7NEJBQzdCRSxXQUFVO3NDQUVWLDRFQUFDYiwrRUFBU0E7Z0NBQUNhLFdBQVU7Ozs7Ozs7Ozs7c0RBR3ZCLDhEQUFDRzs0QkFDQ0MsU0FBUyxJQUFNTixjQUFjOzRCQUM3QkUsV0FBVTtzQ0FFViw0RUFBQ1osK0VBQVNBO2dDQUFDWSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUkzQiw4REFBQ0M7d0JBQUlELFdBQVU7d0JBQWlDSyxJQUFHO2tDQUNqRCw0RUFBQ0M7NEJBQUdOLFdBQVU7c0NBQ1hQLFNBQVNjLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbkIsOERBQUNDOzhDQUNDLDRFQUFDbEIsZ0RBQU9BO3dDQUFDVSxNQUFNTSxLQUFLYixJQUFJO3dDQUFFRCxPQUFPYyxLQUFLZCxLQUFLOzs7Ozs7bUNBRHBDZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT2hCWiwyQkFBYSw4REFBQ04sb0RBQVdBO2dCQUFDb0IsT0FBT2xCOzs7Ozs0QkFBZTs7Ozs7OztBQUd2RDtHQTFDTUc7S0FBQUE7QUE0Q04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL05hdmJhci5qc3g/MTk3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IEJhcnMzSWNvbiwgWE1hcmtJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvc29saWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWVudU92ZXJsYXkgZnJvbSBcIi4vTWVudU92ZXJsYXlcIjtcbmltcG9ydCBOYXZMaW5rIGZyb20gXCIuL05hdkxpbmtcIjtcblxuY29uc3QgbmF2TGlua3MgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJBYm91dFwiLFxuICAgIHBhdGg6IFwiI2Fib3V0XCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQcm9qZWN0c1wiLFxuICAgIHBhdGg6IFwiI3Byb2plY3RzXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDb250YWN0XCIsXG4gICAgcGF0aDogXCIjY29udGFjdFwiLFxuICB9LFxuXTtcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCBbbmF2YmFyT3Blbiwgc2V0TmF2YmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZpeGVkIG14LWF1dG8gYm9yZGVyIGJvcmRlci1bIzMzMzUzRl0gdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei0xMCBiZy1bIzEyMTIxMl0gYmctb3BhY2l0eS0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjb250YWluZXIgbGc6cHktNCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBteC1hdXRvIHB4LTQgcHktMlwiPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9e1wiL1wifVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgID5cbiAgICAgICAgICBWaXRvciBMYXRvcnJhY2FcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51IGJsb2NrIG1kOmhpZGRlblwiPlxuICAgICAgICAgIHshbmF2YmFyT3BlbiA/IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2YmFyT3Blbih0cnVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkIGJvcmRlci1zbGF0ZS0yMDAgdGV4dC1zbGF0ZS0yMDAgaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItd2hpdGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QmFyczNJY29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2YmFyT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZCBib3JkZXItc2xhdGUtMjAwIHRleHQtc2xhdGUtMjAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLXdoaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFhNYXJrSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgaGlkZGVuIG1kOmJsb2NrIG1kOnctYXV0b1wiIGlkPVwibmF2YmFyXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggcC00IG1kOnAtMCBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTggbXQtMFwiPlxuICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9e2xpbmsucGF0aH0gdGl0bGU9e2xpbmsudGl0bGV9IC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge25hdmJhck9wZW4gPyA8TWVudU92ZXJsYXkgbGlua3M9e25hdkxpbmtzfSAvPiA6IG51bGx9XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsiQmFyczNJY29uIiwiWE1hcmtJY29uIiwiTGluayIsInVzZVN0YXRlIiwiTWVudU92ZXJsYXkiLCJOYXZMaW5rIiwibmF2TGlua3MiLCJ0aXRsZSIsInBhdGgiLCJOYXZiYXIiLCJuYXZiYXJPcGVuIiwic2V0TmF2YmFyT3BlbiIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiLCJ1bCIsIm1hcCIsImxpbmsiLCJpbmRleCIsImxpIiwibGlua3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Navbar.jsx\n"));

/***/ })

});