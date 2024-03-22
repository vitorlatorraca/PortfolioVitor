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

/***/ "(app-pages-browser)/./src/app/components/ProjectsSection.jsx":
/*!************************************************!*\
  !*** ./src/app/components/ProjectsSection.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./src/app/components/ProjectTag.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"Time Tracker\",\n        description: \"A school project done in a group with the aim of creating a Time Tracker that monitors the entry and exit of employees in a company.\",\n        image: \"/images/projects/1.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/vitorlatorraca/futeGram\",\n        previewUrl: \"https://globo.com\"\n    },\n    {\n        id: 2,\n        title: \"Apple Clone Website\",\n        description: \"I replicated the Apple website to better understand the concepts of React.\",\n        image: \"/images/projects/2.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/vitorlatorraca/AppleCloneVitorLatorraca\",\n        previewUrl: \"https://globo.com\"\n    },\n    {\n        id: 3,\n        title: \"Nike Website\",\n        description: \"I replicated the Apple website to better understand the concepts of React.\",\n        image: \"/images/projects/3.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/vitorlatorraca/NikeWebsiteVitor\",\n        previewUrl: \"https://globo.com\"\n    },\n    {\n        id: 4,\n        title: \"Corinthians Website\",\n        description: \"I created this website to talk a bit about Corinthians along with a store using only HTML, CSS, and JS.\",\n        image: \"/images/projects/4.png\",\n        tag: [\n            \"All\",\n            \"Mobile\"\n        ],\n        gitUrl: \"https://github.com/vitorlatorraca/CorinthiansHTML\",\n        previewUrl: \"https://globo.com\"\n    },\n    {\n        id: 5,\n        title: \"Password Generator\",\n        description: \"Authentication and CRUD operations\",\n        image: \"/images/projects/5.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"https://globo.com\"\n    },\n    {\n        id: 6,\n        title: \"Password Generator\",\n        description: \"Authentication and CRUD operations\",\n        image: \"/images/projects/5.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"https://globo.com\"\n    }\n];\nconst ProjectsSection = ()=>{\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(ref, {\n        once: true\n    });\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex flex-row justify-center items-center gap-2 py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"All\",\n                        isSelected: tag === \"All\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Web\",\n                        isSelected: tag === \"Web\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Mobile\",\n                        isSelected: tag === \"Mobile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                ref: ref,\n                className: \"grid md:grid-cols-3 gap-8 md:gap-12\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: cardVariants,\n                        initial: \"initial\",\n                        animate: isInView ? \"animate\" : \"initial\",\n                        transition: {\n                            duration: 0.3,\n                            delay: index * 0.4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: project.title,\n                            description: project.description,\n                            imgUrl: project.image,\n                            gitUrl: project.gitUrl,\n                            previewUrl: project.previewUrl\n                        }, project.id, false, {\n                            fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/ProjectsSection.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vitorlatorraca/Desktop/PortfolioVItor/src/app/components/ProjectsSection.jsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsSection, \"ewpVNcDKztYQKj1IVUkFVZNx3ec=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = ProjectsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDa0Q7QUFDVDtBQUNEO0FBQ0Y7QUFFdEMsTUFBTU0sZUFBZTtJQUNuQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQVM7UUFDdEJDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7Q0FDRDtBQUVELE1BQU1DLGtCQUFrQjs7SUFDdEIsTUFBTSxDQUFDSCxLQUFLSSxPQUFPLEdBQUdaLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU1hLE1BQU1kLDZDQUFNQSxDQUFDO0lBQ25CLE1BQU1lLFdBQVdoQix3REFBU0EsQ0FBQ2UsS0FBSztRQUFFRSxNQUFNO0lBQUs7SUFFN0MsTUFBTUMsa0JBQWtCLENBQUNDO1FBQ3ZCTCxPQUFPSztJQUNUO0lBRUEsTUFBTUMsbUJBQW1CZixhQUFhZ0IsTUFBTSxDQUFDLENBQUNDLFVBQzVDQSxRQUFRWixHQUFHLENBQUNhLFFBQVEsQ0FBQ2I7SUFHdkIsTUFBTWMsZUFBZTtRQUNuQkMsU0FBUztZQUFFQyxHQUFHO1lBQUlDLFNBQVM7UUFBRTtRQUM3QkMsU0FBUztZQUFFRixHQUFHO1lBQUdDLFNBQVM7UUFBRTtJQUM5QjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFRdkIsSUFBRzs7MEJBQ1YsOERBQUN3QjtnQkFBR0MsV0FBVTswQkFBK0Q7Ozs7OzswQkFHN0UsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQzNCLG1EQUFVQTt3QkFDVDZCLFNBQVNmO3dCQUNUZ0IsTUFBSzt3QkFDTEMsWUFBWXpCLFFBQVE7Ozs7OztrQ0FFdEIsOERBQUNOLG1EQUFVQTt3QkFDVDZCLFNBQVNmO3dCQUNUZ0IsTUFBSzt3QkFDTEMsWUFBWXpCLFFBQVE7Ozs7OztrQ0FFdEIsOERBQUNOLG1EQUFVQTt3QkFDVDZCLFNBQVNmO3dCQUNUZ0IsTUFBSzt3QkFDTEMsWUFBWXpCLFFBQVE7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUMwQjtnQkFBR3JCLEtBQUtBO2dCQUFLZ0IsV0FBVTswQkFDckJYLGlCQUFpQmlCLEdBQUcsQ0FBQyxDQUFDZixTQUFTZ0Isc0JBQzlCLDhEQUFDdkMsaURBQU1BLENBQUN3QyxFQUFFO3dCQUVSQyxVQUFVaEI7d0JBQ1ZDLFNBQVE7d0JBQ1JHLFNBQVNaLFdBQVcsWUFBWTt3QkFDaEN5QixZQUFZOzRCQUFFQyxVQUFVOzRCQUFLQyxPQUFPTCxRQUFRO3dCQUFJO2tDQUVoRCw0RUFBQ25DLG9EQUFXQTs0QkFFVkksT0FBT2UsUUFBUWYsS0FBSzs0QkFDcEJDLGFBQWFjLFFBQVFkLFdBQVc7NEJBQ2hDb0MsUUFBUXRCLFFBQVFiLEtBQUs7NEJBQ3JCRSxRQUFRVyxRQUFRWCxNQUFNOzRCQUN0QkMsWUFBWVUsUUFBUVYsVUFBVTsyQkFMekJVLFFBQVFoQixFQUFFOzs7Ozt1QkFQWmdDOzs7Ozs7Ozs7Ozs7Ozs7O0FBbUJqQjtHQTlETXpCOztRQUdhYixvREFBU0E7OztLQUh0QmE7QUFnRU4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1Byb2plY3RzU2VjdGlvbi5qc3g/MzcwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlSW5WaWV3IH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiLi9Qcm9qZWN0Q2FyZFwiO1xuaW1wb3J0IFByb2plY3RUYWcgZnJvbSBcIi4vUHJvamVjdFRhZ1wiO1xuXG5jb25zdCBwcm9qZWN0c0RhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogXCJUaW1lIFRyYWNrZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIHNjaG9vbCBwcm9qZWN0IGRvbmUgaW4gYSBncm91cCB3aXRoIHRoZSBhaW0gb2YgY3JlYXRpbmcgYSBUaW1lIFRyYWNrZXIgdGhhdCBtb25pdG9ycyB0aGUgZW50cnkgYW5kIGV4aXQgb2YgZW1wbG95ZWVzIGluIGEgY29tcGFueS5cIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzEucG5nXCIsXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXG4gICAgZ2l0VXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92aXRvcmxhdG9ycmFjYS9mdXRlR3JhbVwiLFxuICAgIHByZXZpZXdVcmw6IFwiaHR0cHM6Ly9nbG9iby5jb21cIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiBcIkFwcGxlIENsb25lIFdlYnNpdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJJIHJlcGxpY2F0ZWQgdGhlIEFwcGxlIHdlYnNpdGUgdG8gYmV0dGVyIHVuZGVyc3RhbmQgdGhlIGNvbmNlcHRzIG9mIFJlYWN0LlwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvMi5wbmdcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcbiAgICBnaXRVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZpdG9ybGF0b3JyYWNhL0FwcGxlQ2xvbmVWaXRvckxhdG9ycmFjYVwiLFxuICAgIHByZXZpZXdVcmw6IFwiaHR0cHM6Ly9nbG9iby5jb21cIixcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiBcIk5pa2UgV2Vic2l0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkkgcmVwbGljYXRlZCB0aGUgQXBwbGUgd2Vic2l0ZSB0byBiZXR0ZXIgdW5kZXJzdGFuZCB0aGUgY29uY2VwdHMgb2YgUmVhY3QuXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy8zLnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxuICAgIGdpdFVybDogXCJodHRwczovL2dpdGh1Yi5jb20vdml0b3JsYXRvcnJhY2EvTmlrZVdlYnNpdGVWaXRvclwiLFxuICAgIHByZXZpZXdVcmw6IFwiaHR0cHM6Ly9nbG9iby5jb21cIixcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiBcIkNvcmludGhpYW5zIFdlYnNpdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJJIGNyZWF0ZWQgdGhpcyB3ZWJzaXRlIHRvIHRhbGsgYSBiaXQgYWJvdXQgQ29yaW50aGlhbnMgYWxvbmcgd2l0aCBhIHN0b3JlIHVzaW5nIG9ubHkgSFRNTCwgQ1NTLCBhbmQgSlMuXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy80LnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiTW9iaWxlXCJdLFxuICAgIGdpdFVybDogXCJodHRwczovL2dpdGh1Yi5jb20vdml0b3JsYXRvcnJhY2EvQ29yaW50aGlhbnNIVE1MXCIsXG4gICAgcHJldmlld1VybDogXCJodHRwczovL2dsb2JvLmNvbVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgdGl0bGU6IFwiUGFzc3dvcmQgR2VuZXJhdG9yXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQXV0aGVudGljYXRpb24gYW5kIENSVUQgb3BlcmF0aW9uc1wiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvNS5wbmdcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcbiAgICBnaXRVcmw6IFwiL1wiLFxuICAgIHByZXZpZXdVcmw6IFwiaHR0cHM6Ly9nbG9iby5jb21cIixcbiAgfSxcbiAge1xuICAgIGlkOiA2LFxuICAgIHRpdGxlOiBcIlBhc3N3b3JkIEdlbmVyYXRvclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkF1dGhlbnRpY2F0aW9uIGFuZCBDUlVEIG9wZXJhdGlvbnNcIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzUucG5nXCIsXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXG4gICAgZ2l0VXJsOiBcIi9cIixcbiAgICBwcmV2aWV3VXJsOiBcImh0dHBzOi8vZ2xvYm8uY29tXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBQcm9qZWN0c1NlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShcIkFsbFwiKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBpc0luVmlldyA9IHVzZUluVmlldyhyZWYsIHsgb25jZTogdHJ1ZSB9KTtcblxuICBjb25zdCBoYW5kbGVUYWdDaGFuZ2UgPSAobmV3VGFnKSA9PiB7XG4gICAgc2V0VGFnKG5ld1RhZyk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzRGF0YS5maWx0ZXIoKHByb2plY3QpID0+XG4gICAgcHJvamVjdC50YWcuaW5jbHVkZXModGFnKVxuICApO1xuXG4gIGNvbnN0IGNhcmRWYXJpYW50cyA9IHtcbiAgICBpbml0aWFsOiB7IHk6IDUwLCBvcGFjaXR5OiAwIH0sXG4gICAgYW5pbWF0ZTogeyB5OiAwLCBvcGFjaXR5OiAxIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cInByb2plY3RzXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC00eGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbXQtNCBtYi04IG1kOm1iLTEyXCI+XG4gICAgICAgIE15IFByb2plY3RzXG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yIHB5LTZcIj5cbiAgICAgICAgPFByb2plY3RUYWdcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9XG4gICAgICAgICAgbmFtZT1cIkFsbFwiXG4gICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIkFsbFwifVxuICAgICAgICAvPlxuICAgICAgICA8UHJvamVjdFRhZ1xuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cbiAgICAgICAgICBuYW1lPVwiV2ViXCJcbiAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiV2ViXCJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9qZWN0VGFnXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJNb2JpbGVcIlxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJNb2JpbGVcIn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIHJlZj17cmVmfSBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIGdhcC04IG1kOmdhcC0xMlwiPlxuICAgICAgICB7ZmlsdGVyZWRQcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHZhcmlhbnRzPXtjYXJkVmFyaWFudHN9XG4gICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgICAgICBhbmltYXRlPXtpc0luVmlldyA/IFwiYW5pbWF0ZVwiIDogXCJpbml0aWFsXCJ9XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMsIGRlbGF5OiBpbmRleCAqIDAuNCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICBrZXk9e3Byb2plY3QuaWR9XG4gICAgICAgICAgICAgIHRpdGxlPXtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgaW1nVXJsPXtwcm9qZWN0LmltYWdlfVxuICAgICAgICAgICAgICBnaXRVcmw9e3Byb2plY3QuZ2l0VXJsfVxuICAgICAgICAgICAgICBwcmV2aWV3VXJsPXtwcm9qZWN0LnByZXZpZXdVcmx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbW90aW9uLmxpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNTZWN0aW9uO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInVzZUluVmlldyIsInVzZVJlZiIsInVzZVN0YXRlIiwiUHJvamVjdENhcmQiLCJQcm9qZWN0VGFnIiwicHJvamVjdHNEYXRhIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWciLCJnaXRVcmwiLCJwcmV2aWV3VXJsIiwiUHJvamVjdHNTZWN0aW9uIiwic2V0VGFnIiwicmVmIiwiaXNJblZpZXciLCJvbmNlIiwiaGFuZGxlVGFnQ2hhbmdlIiwibmV3VGFnIiwiZmlsdGVyZWRQcm9qZWN0cyIsImZpbHRlciIsInByb2plY3QiLCJpbmNsdWRlcyIsImNhcmRWYXJpYW50cyIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJzZWN0aW9uIiwiaDIiLCJjbGFzc05hbWUiLCJkaXYiLCJvbkNsaWNrIiwibmFtZSIsImlzU2VsZWN0ZWQiLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJ2YXJpYW50cyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwiaW1nVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectsSection.jsx\n"));

/***/ })

});