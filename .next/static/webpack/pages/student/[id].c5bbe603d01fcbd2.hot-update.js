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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/Paper/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar Summary = function(props) {\n    var money = function(value) {\n        var format = parseFloat(value).toFixed(2);\n        return \"$ \".concat(format);\n    };\n    var name = props.name, cohort = props.cohort, amount = props.amount;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        sx: {\n            marginY: \"20px\",\n            paddingY: \"12px\",\n            paddingX: 2\n        },\n        elevation: 0,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                display: \"grid\",\n                gridTemplateColumns: \"repeat(12, 1fr)\",\n                gap: 2,\n                sx: {\n                    marginBottom: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        gridColumn: \"span 6\",\n                        sx: {\n                            textAlign: \"left\",\n                            fontSize: \"1\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                            lineNumber: 19,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        gridColumn: \"span 6\",\n                        sx: {\n                            textAlign: \"right\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: cohort\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                display: \"grid\",\n                gridTemplateColumns: \"repeat(12, 1fr)\",\n                gap: 2,\n                sx: {\n                    marginTop: \"5px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        gridColumn: \"span 6\",\n                        sx: {\n                            textAlign: \"left\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"Total a Pagar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        gridColumn: \"span 6\",\n                        sx: {\n                            textAlign: \"right\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: money(amount)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\components\\\\Summary\\\\Summary.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, _this);\n};\n_c = Summary;\nSummary.propTypes = {\n    name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),\n    cohort: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),\n    amount: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Summary);\nvar _c;\n$RefreshReg$(_c, \"Summary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N1bW1hcnkvU3VtbWFyeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDUztBQUNKO0FBQ0Q7QUFDbkMsSUFBTUksT0FBTyxHQUFHLFNBQUNDLEtBQUssRUFBSztJQUN2QixJQUFNQyxLQUFLLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO1FBQ3JCLElBQU1DLE1BQU0sR0FBR0MsVUFBVSxDQUFDRixLQUFLLENBQUMsQ0FBQ0csT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzQyxPQUFNLElBQUcsQ0FBUyxPQUFQRixNQUFNLENBQUU7S0FDdEI7SUFDRCxJQUFRRyxJQUFJLEdBQXFCTixLQUFLLENBQTlCTSxJQUFJLEVBQUVDLE1BQU0sR0FBYVAsS0FBSyxDQUF4Qk8sTUFBTSxFQUFFQyxNQUFNLEdBQUtSLEtBQUssQ0FBaEJRLE1BQU07SUFDNUIscUJBQ0ksOERBQUNaLDJEQUFLO1FBQUNhLEVBQUUsRUFBRTtZQUFFQyxPQUFPLEVBQUUsTUFBTTtZQUFFQyxRQUFRLEVBQUMsTUFBTTtZQUFHQyxRQUFRLEVBQUUsQ0FBQztTQUFFO1FBQUVDLFNBQVMsRUFBRSxDQUFDOzswQkFDdkUsOERBQUNoQix5REFBRztnQkFBQ2lCLE9BQU8sRUFBQyxNQUFNO2dCQUFDQyxtQkFBbUIsRUFBQyxpQkFBaUI7Z0JBQUNDLEdBQUcsRUFBRSxDQUFDO2dCQUM1RFAsRUFBRSxFQUFFO29CQUNBUSxZQUFZLEVBQUUsTUFBTTtpQkFDdkI7O2tDQUVELDhEQUFDcEIseURBQUc7d0JBQUNxQixVQUFVLEVBQUMsUUFBUTt3QkFBQ1QsRUFBRSxFQUFFOzRCQUFFVSxTQUFTLEVBQUUsTUFBTTs0QkFBRUMsUUFBUSxFQUFFLEdBQUc7eUJBQUU7a0NBQzdELDRFQUFDQyxLQUFHO3NDQUFFZixJQUFJOzs7OztpQ0FBTzs7Ozs7NkJBQ2Y7a0NBQ04sOERBQUNULHlEQUFHO3dCQUFDcUIsVUFBVSxFQUFDLFFBQVE7d0JBQUNULEVBQUUsRUFBRTs0QkFBRVUsU0FBUyxFQUFFLE9BQU87eUJBQUU7a0NBQy9DLDRFQUFDRSxLQUFHO3NDQUFFZCxNQUFNOzs7OztpQ0FBTzs7Ozs7NkJBQ2pCOzs7Ozs7cUJBQ0o7MEJBQ04sOERBQUNWLHlEQUFHO2dCQUFDaUIsT0FBTyxFQUFDLE1BQU07Z0JBQUNDLG1CQUFtQixFQUFDLGlCQUFpQjtnQkFBQ0MsR0FBRyxFQUFFLENBQUM7Z0JBQzVEUCxFQUFFLEVBQUU7b0JBQ0FhLFNBQVMsRUFBRSxLQUFLO2lCQUNuQjs7a0NBRUQsOERBQUN6Qix5REFBRzt3QkFBQ3FCLFVBQVUsRUFBQyxRQUFRO3dCQUFDVCxFQUFFLEVBQUU7NEJBQUVVLFNBQVMsRUFBRSxNQUFNO3lCQUFFO2tDQUM5Qyw0RUFBQ0UsS0FBRztzQ0FBQyxlQUFhOzs7OztpQ0FBTTs7Ozs7NkJBQ3RCO2tDQUNOLDhEQUFDeEIseURBQUc7d0JBQUNxQixVQUFVLEVBQUMsUUFBUTt3QkFBQ1QsRUFBRSxFQUFFOzRCQUFFVSxTQUFTLEVBQUUsT0FBTzt5QkFBRTtrQ0FDL0MsNEVBQUNFLEtBQUc7c0NBQUVwQixLQUFLLENBQUNPLE1BQU0sQ0FBQzs7Ozs7aUNBQU87Ozs7OzZCQUN4Qjs7Ozs7O3FCQUNKOzs7Ozs7YUFDRixDQUNYO0NBQ0o7QUFsQ0tULEtBQUFBLE9BQU87QUFtQ2JBLE9BQU8sQ0FBQ3dCLFNBQVMsR0FBRztJQUNoQmpCLElBQUksRUFBRVIscUVBQTJCO0lBQ2pDUyxNQUFNLEVBQUVULDBEQUFnQjtJQUN4QlUsTUFBTSxFQUFFViwwREFBZ0I7Q0FDM0I7QUFDRCwrREFBZUMsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3VtbWFyeS9TdW1tYXJ5LmpzPzRlMzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9QYXBlcic7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5jb25zdCBTdW1tYXJ5ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBtb25leSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IHBhcnNlRmxvYXQodmFsdWUpLnRvRml4ZWQoMilcclxuICAgICAgICByZXR1cm5gJCAke2Zvcm1hdH1gXHJcbiAgICB9O1xyXG4gICAgY29uc3QgeyBuYW1lLCBjb2hvcnQsIGFtb3VudCB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQYXBlciBzeD17eyBtYXJnaW5ZOiAnMjBweCcsIHBhZGRpbmdZOicxMnB4JyAsIHBhZGRpbmdYOiAyIH19IGVsZXZhdGlvbj17MH0+XHJcbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImdyaWRcIiBncmlkVGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KDEyLCAxZnIpXCIgZ2FwPXsyfVxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPiBcclxuICAgICAgICAgICAgICAgIDxCb3ggZ3JpZENvbHVtbj1cInNwYW4gNlwiIHN4PXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzEnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDxCb3ggZ3JpZENvbHVtbj1cInNwYW4gNlwiIHN4PXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pntjb2hvcnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImdyaWRcIiBncmlkVGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KDEyLCAxZnIpXCIgZ2FwPXsyfVxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICc1cHgnXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+IFxyXG4gICAgICAgICAgICAgICAgPEJveCBncmlkQ29sdW1uPVwic3BhbiA2XCIgc3g9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Ub3RhbCBhIFBhZ2FyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDxCb3ggZ3JpZENvbHVtbj1cInNwYW4gNlwiIHN4PXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pnttb25leShhbW91bnQpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvUGFwZXI+IFxyXG4gICAgKVxyXG59XHJcblN1bW1hcnkucHJvcFR5cGVzID0ge1xyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgY29ob3J0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYW1vdW50OiBQcm9wVHlwZXMubnVtYmVyXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3VtbWFyeTsiXSwibmFtZXMiOlsiUmVhY3QiLCJQYXBlciIsIkJveCIsIlByb3BUeXBlcyIsIlN1bW1hcnkiLCJwcm9wcyIsIm1vbmV5IiwidmFsdWUiLCJmb3JtYXQiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIm5hbWUiLCJjb2hvcnQiLCJhbW91bnQiLCJzeCIsIm1hcmdpblkiLCJwYWRkaW5nWSIsInBhZGRpbmdYIiwiZWxldmF0aW9uIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJnYXAiLCJtYXJnaW5Cb3R0b20iLCJncmlkQ29sdW1uIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJkaXYiLCJtYXJnaW5Ub3AiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Summary/Summary.js\n");

/***/ })

});