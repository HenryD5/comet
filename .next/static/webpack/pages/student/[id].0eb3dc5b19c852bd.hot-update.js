"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/student/[id]",{

/***/ "./components/Summary/Summary.js":
/*!***************************************!*\
  !*** ./components/Summary/Summary.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utility_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility/filters */ \"./utility/filters.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar Summary = function(props) {\n    var monto = money(amount).monto;\n    var name = props.name, cohort = props.cohort, amount = props.amount;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sx: {\n            marginY: \"20px\",\n            paddingY: \"12px\",\n            paddingX: 2\n        },\n        elevation: 0,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                display: \"grid\",\n                gridTemplateColumns: \"repeat(12, 1fr)\",\n                gap: 2,\n                sx: {\n                    marginBottom: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        gridColumn: \"span 6\",\n                        sx: {\n                            textAlign: \"left\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        gridColumn: \"span 6\",\n                        sx: {\n                            textAlign: \"right\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: cohort\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                display: \"grid\",\n                gridTemplateColumns: \"repeat(12, 1fr)\",\n                gap: 2,\n                sx: {\n                    marginTop: \"5px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        gridColumn: \"span 6\",\n                        sx: {\n                            textAlign: \"left\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"Total a Pagar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        gridColumn: \"span 6\",\n                        sx: {\n                            textAlign: \"right\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"$ \",\n                                money(monto)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, _this);\n};\n_c = Summary;\nSummary.propTypes = {\n    name: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),\n    cohort: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),\n    amount: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Summary);\nvar _c;\n$RefreshReg$(_c, \"Summary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N1bW1hcnkvU3VtbWFyeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQStCO0FBQ1M7QUFDSjtBQUNEO0FBQ087QUFDMUMsSUFBTUssT0FBTyxHQUFHLFNBQUNDLEtBQUssRUFBSztJQUN6QixJQUFNLEtBQU8sR0FBS0UsS0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBdkJGLEtBQUs7SUFDWCxJQUFRRyxJQUFJLEdBQXFCSixLQUFLLENBQTlCSSxJQUFJLEVBQUVDLE1BQU0sR0FBYUwsS0FBSyxDQUF4QkssTUFBTSxFQUFFRixNQUFNLEdBQUtILEtBQUssQ0FBaEJHLE1BQU07SUFDNUIscUJBQ0ksOERBQUNSLDJEQUFLO1FBQUNXLEVBQUUsRUFBRTtZQUFFQyxPQUFPLEVBQUUsTUFBTTtZQUFFQyxRQUFRLEVBQUMsTUFBTTtZQUFHQyxRQUFRLEVBQUUsQ0FBQztTQUFFO1FBQUVDLFNBQVMsRUFBRSxDQUFDOzswQkFDdkUsOERBQUNkLHlEQUFHO2dCQUFDZSxPQUFPLEVBQUMsTUFBTTtnQkFBQ0MsbUJBQW1CLEVBQUMsaUJBQWlCO2dCQUFDQyxHQUFHLEVBQUUsQ0FBQztnQkFDNURQLEVBQUUsRUFBRTtvQkFDQVEsWUFBWSxFQUFFLE1BQU07aUJBQ3ZCOztrQ0FFRCw4REFBQ2xCLHlEQUFHO3dCQUFDbUIsVUFBVSxFQUFDLFFBQVE7d0JBQUNULEVBQUUsRUFBRTs0QkFBRVUsU0FBUyxFQUFFLE1BQU07eUJBQUU7a0NBQzlDLDRFQUFDQyxLQUFHO3NDQUFFYixJQUFJOzs7OztpQ0FBTzs7Ozs7NkJBQ2Y7a0NBQ04sOERBQUNSLHlEQUFHO3dCQUFDbUIsVUFBVSxFQUFDLFFBQVE7d0JBQUNULEVBQUUsRUFBRTs0QkFBRVUsU0FBUyxFQUFFLE9BQU87eUJBQUU7a0NBQy9DLDRFQUFDQyxLQUFHO3NDQUFFWixNQUFNOzs7OztpQ0FBTzs7Ozs7NkJBQ2pCOzs7Ozs7cUJBQ0o7MEJBQ04sOERBQUNULHlEQUFHO2dCQUFDZSxPQUFPLEVBQUMsTUFBTTtnQkFBQ0MsbUJBQW1CLEVBQUMsaUJBQWlCO2dCQUFDQyxHQUFHLEVBQUUsQ0FBQztnQkFDNURQLEVBQUUsRUFBRTtvQkFDQVksU0FBUyxFQUFFLEtBQUs7aUJBQ25COztrQ0FFRCw4REFBQ3RCLHlEQUFHO3dCQUFDbUIsVUFBVSxFQUFDLFFBQVE7d0JBQUNULEVBQUUsRUFBRTs0QkFBRVUsU0FBUyxFQUFFLE1BQU07eUJBQUU7a0NBQzlDLDRFQUFDQyxLQUFHO3NDQUFDLGVBQWE7Ozs7O2lDQUFNOzs7Ozs2QkFDdEI7a0NBQ04sOERBQUNyQix5REFBRzt3QkFBQ21CLFVBQVUsRUFBQyxRQUFRO3dCQUFDVCxFQUFFLEVBQUU7NEJBQUVVLFNBQVMsRUFBRSxPQUFPO3lCQUFFO2tDQUMvQyw0RUFBQ0MsS0FBRzs7Z0NBQUMsSUFBRTtnQ0FBQ2YsS0FBSyxDQUFDRCxLQUFLLENBQUM7Ozs7OztpQ0FBTzs7Ozs7NkJBQ3pCOzs7Ozs7cUJBQ0o7Ozs7OzthQUNGLENBQ1g7Q0FDSjtBQS9CS0YsS0FBQUEsT0FBTztBQWdDYkEsT0FBTyxDQUFDb0IsU0FBUyxHQUFHO0lBQ2hCZixJQUFJLEVBQUVQLHFFQUEyQjtJQUNqQ1EsTUFBTSxFQUFFUiwwREFBZ0I7SUFDeEJNLE1BQU0sRUFBRU4sMERBQWdCO0NBQzNCO0FBQ0QsK0RBQWVFLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N1bW1hcnkvU3VtbWFyeS5qcz80ZTM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGZpbHRlciBmcm9tICcuLi8uLi91dGlsaXR5L2ZpbHRlcnMnXHJcbmNvbnN0IFN1bW1hcnkgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG1vbnRvIH0gPSBtb25leShhbW91bnQpO1xyXG4gICAgY29uc3QgeyBuYW1lLCBjb2hvcnQsIGFtb3VudCB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQYXBlciBzeD17eyBtYXJnaW5ZOiAnMjBweCcsIHBhZGRpbmdZOicxMnB4JyAsIHBhZGRpbmdYOiAyIH19IGVsZXZhdGlvbj17MH0+XHJcbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImdyaWRcIiBncmlkVGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KDEyLCAxZnIpXCIgZ2FwPXsyfVxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPiBcclxuICAgICAgICAgICAgICAgIDxCb3ggZ3JpZENvbHVtbj1cInNwYW4gNlwiIHN4PXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDxCb3ggZ3JpZENvbHVtbj1cInNwYW4gNlwiIHN4PXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pntjb2hvcnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImdyaWRcIiBncmlkVGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KDEyLCAxZnIpXCIgZ2FwPXsyfVxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICc1cHgnXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+IFxyXG4gICAgICAgICAgICAgICAgPEJveCBncmlkQ29sdW1uPVwic3BhbiA2XCIgc3g9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Ub3RhbCBhIFBhZ2FyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDxCb3ggZ3JpZENvbHVtbj1cInNwYW4gNlwiIHN4PXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiQge21vbmV5KG1vbnRvKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1BhcGVyPiBcclxuICAgIClcclxufVxyXG5TdW1tYXJ5LnByb3BUeXBlcyA9IHtcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGNvaG9ydDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGFtb3VudDogUHJvcFR5cGVzLm51bWJlclxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN1bW1hcnk7Il0sIm5hbWVzIjpbIlJlYWN0IiwiUGFwZXIiLCJCb3giLCJQcm9wVHlwZXMiLCJmaWx0ZXIiLCJTdW1tYXJ5IiwicHJvcHMiLCJtb250byIsIm1vbmV5IiwiYW1vdW50IiwibmFtZSIsImNvaG9ydCIsInN4IiwibWFyZ2luWSIsInBhZGRpbmdZIiwicGFkZGluZ1giLCJlbGV2YXRpb24iLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdhcCIsIm1hcmdpbkJvdHRvbSIsImdyaWRDb2x1bW4iLCJ0ZXh0QWxpZ24iLCJkaXYiLCJtYXJnaW5Ub3AiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Summary/Summary.js\n");

/***/ })

});