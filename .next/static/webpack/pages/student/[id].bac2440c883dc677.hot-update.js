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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar Summary = function(props) {\n    var money = function(value) {\n        return parseFloat(value / 100).toFixed(2);\n    };\n    var name = props.name, cohort = props.cohort, amount = props.amount;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        sx: {\n            marginY: \"20px\",\n            paddingY: \"12px\",\n            paddingX: 2\n        },\n        elevation: 0,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                display: \"grid\",\n                gridTemplateColumns: \"repeat(12, 1fr)\",\n                gap: 2,\n                sx: {\n                    marginBottom: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        gridColumn: \"span 6\",\n                        sx: {\n                            textAlign: \"left\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        gridColumn: \"span 6\",\n                        sx: {\n                            textAlign: \"right\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: cohort\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                display: \"grid\",\n                gridTemplateColumns: \"repeat(12, 1fr)\",\n                gap: 2,\n                sx: {\n                    marginTop: \"5px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        gridColumn: \"span 6\",\n                        sx: {\n                            textAlign: \"left\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"Total a Pagar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        gridColumn: \"span 6\",\n                        sx: {\n                            textAlign: \"right\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"$ \",\n                                money\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, _this);\n};\n_c = Summary;\nSummary.propTypes = {\n    name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),\n    cohort: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),\n    amount: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Summary);\nvar _c;\n$RefreshReg$(_c, \"Summary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N1bW1hcnkvU3VtbWFyeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDUztBQUNKO0FBQ0Q7QUFDbkMsSUFBTUksT0FBTyxHQUFHLFNBQUNDLEtBQUssRUFBSztJQUN2QixJQUFNQyxLQUFLLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO1FBQ3JCLE9BQU9DLFVBQVUsQ0FBQ0QsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQzVDO0lBQ0QsSUFBUUMsSUFBSSxHQUFxQkwsS0FBSyxDQUE5QkssSUFBSSxFQUFFQyxNQUFNLEdBQWFOLEtBQUssQ0FBeEJNLE1BQU0sRUFBRUMsTUFBTSxHQUFLUCxLQUFLLENBQWhCTyxNQUFNO0lBQzVCLHFCQUNJLDhEQUFDWCwyREFBSztRQUFDWSxFQUFFLEVBQUU7WUFBRUMsT0FBTyxFQUFFLE1BQU07WUFBRUMsUUFBUSxFQUFDLE1BQU07WUFBR0MsUUFBUSxFQUFFLENBQUM7U0FBRTtRQUFFQyxTQUFTLEVBQUUsQ0FBQzs7MEJBQ3ZFLDhEQUFDZix5REFBRztnQkFBQ2dCLE9BQU8sRUFBQyxNQUFNO2dCQUFDQyxtQkFBbUIsRUFBQyxpQkFBaUI7Z0JBQUNDLEdBQUcsRUFBRSxDQUFDO2dCQUM1RFAsRUFBRSxFQUFFO29CQUNBUSxZQUFZLEVBQUUsTUFBTTtpQkFDdkI7O2tDQUVELDhEQUFDbkIseURBQUc7d0JBQUNvQixVQUFVLEVBQUMsUUFBUTt3QkFBQ1QsRUFBRSxFQUFFOzRCQUFFVSxTQUFTLEVBQUUsTUFBTTt5QkFBRTtrQ0FDOUMsNEVBQUNDLEtBQUc7c0NBQUVkLElBQUk7Ozs7O2lDQUFPOzs7Ozs2QkFDZjtrQ0FDTiw4REFBQ1IseURBQUc7d0JBQUNvQixVQUFVLEVBQUMsUUFBUTt3QkFBQ1QsRUFBRSxFQUFFOzRCQUFFVSxTQUFTLEVBQUUsT0FBTzt5QkFBRTtrQ0FDL0MsNEVBQUNDLEtBQUc7c0NBQUViLE1BQU07Ozs7O2lDQUFPOzs7Ozs2QkFDakI7Ozs7OztxQkFDSjswQkFDTiw4REFBQ1QseURBQUc7Z0JBQUNnQixPQUFPLEVBQUMsTUFBTTtnQkFBQ0MsbUJBQW1CLEVBQUMsaUJBQWlCO2dCQUFDQyxHQUFHLEVBQUUsQ0FBQztnQkFDNURQLEVBQUUsRUFBRTtvQkFDQVksU0FBUyxFQUFFLEtBQUs7aUJBQ25COztrQ0FFRCw4REFBQ3ZCLHlEQUFHO3dCQUFDb0IsVUFBVSxFQUFDLFFBQVE7d0JBQUNULEVBQUUsRUFBRTs0QkFBRVUsU0FBUyxFQUFFLE1BQU07eUJBQUU7a0NBQzlDLDRFQUFDQyxLQUFHO3NDQUFDLGVBQWE7Ozs7O2lDQUFNOzs7Ozs2QkFDdEI7a0NBQ04sOERBQUN0Qix5REFBRzt3QkFBQ29CLFVBQVUsRUFBQyxRQUFRO3dCQUFDVCxFQUFFLEVBQUU7NEJBQUVVLFNBQVMsRUFBRSxPQUFPO3lCQUFFO2tDQUMvQyw0RUFBQ0MsS0FBRzs7Z0NBQUMsSUFBRTtnQ0FBQ2xCLEtBQUs7Ozs7OztpQ0FBTzs7Ozs7NkJBQ2xCOzs7Ozs7cUJBQ0o7Ozs7OzthQUNGLENBQ1g7Q0FDSjtBQWpDS0YsS0FBQUEsT0FBTztBQWtDYkEsT0FBTyxDQUFDc0IsU0FBUyxHQUFHO0lBQ2hCaEIsSUFBSSxFQUFFUCxxRUFBMkI7SUFDakNRLE1BQU0sRUFBRVIsMERBQWdCO0lBQ3hCUyxNQUFNLEVBQUVULDBEQUFnQjtDQUMzQjtBQUNELCtEQUFlQyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdW1tYXJ5L1N1bW1hcnkuanM/NGUzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJztcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmNvbnN0IFN1bW1hcnkgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IG1vbmV5ID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUgLyAxMDApLnRvRml4ZWQoMilcclxuICAgIH07XHJcbiAgICBjb25zdCB7IG5hbWUsIGNvaG9ydCwgYW1vdW50IH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBhcGVyIHN4PXt7IG1hcmdpblk6ICcyMHB4JywgcGFkZGluZ1k6JzEycHgnICwgcGFkZGluZ1g6IDIgfX0gZWxldmF0aW9uPXswfT5cclxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZ3JpZFwiIGdyaWRUZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoMTIsIDFmcilcIiBnYXA9ezJ9XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+IFxyXG4gICAgICAgICAgICAgICAgPEJveCBncmlkQ29sdW1uPVwic3BhbiA2XCIgc3g9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPEJveCBncmlkQ29sdW1uPVwic3BhbiA2XCIgc3g9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e2NvaG9ydH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZ3JpZFwiIGdyaWRUZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoMTIsIDFmcilcIiBnYXA9ezJ9XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzVweCdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID4gXHJcbiAgICAgICAgICAgICAgICA8Qm94IGdyaWRDb2x1bW49XCJzcGFuIDZcIiBzeD17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRvdGFsIGEgUGFnYXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPEJveCBncmlkQ29sdW1uPVwic3BhbiA2XCIgc3g9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+JCB7bW9uZXl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9QYXBlcj4gXHJcbiAgICApXHJcbn1cclxuU3VtbWFyeS5wcm9wVHlwZXMgPSB7XHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBjb2hvcnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBhbW91bnQ6IFByb3BUeXBlcy5udW1iZXJcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdW1tYXJ5OyJdLCJuYW1lcyI6WyJSZWFjdCIsIlBhcGVyIiwiQm94IiwiUHJvcFR5cGVzIiwiU3VtbWFyeSIsInByb3BzIiwibW9uZXkiLCJ2YWx1ZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwibmFtZSIsImNvaG9ydCIsImFtb3VudCIsInN4IiwibWFyZ2luWSIsInBhZGRpbmdZIiwicGFkZGluZ1giLCJlbGV2YXRpb24iLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdhcCIsIm1hcmdpbkJvdHRvbSIsImdyaWRDb2x1bW4iLCJ0ZXh0QWxpZ24iLCJkaXYiLCJtYXJnaW5Ub3AiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Summary/Summary.js\n");

/***/ })

});