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

/***/ "./pages/student/[id].js":
/*!*******************************!*\
  !*** ./pages/student/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Navbar/Navbar */ \"./components/Navbar/Navbar.js\");\n/* harmony import */ var _components_Bottombar_Bottombar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Bottombar/Bottombar */ \"./components/Bottombar/Bottombar.js\");\n/* harmony import */ var _components_Summary_Summary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Summary/Summary */ \"./components/Summary/Summary.js\");\n/* harmony import */ var _components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Payment/Status */ \"./components/Payment/Status.js\");\n/* harmony import */ var _components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Payment/ItemPayment */ \"./components/Payment/ItemPayment.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Student = function() {\n    var _this1 = _this;\n    var ref, ref1;\n    _s();\n    //state\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), student1 = ref2[0], setStudent = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), payments1 = ref3[0], setPayments = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cart = ref4[0], setCart = ref4[1];\n    // router - query - slug - id\n    var ref5 = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(), id = ref5.query.id;\n    //apis\n    var requestOptions = {\n        method: \"GET\",\n        headers: {\n            \"hash\": \"OcJn4jYChW\"\n        }\n    };\n    var fetchStudent = function() {\n        var _ref = _asyncToGenerator(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, student;\n            return C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!id) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return window.fetch(\"http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/\".concat(id, \"/\"), requestOptions);\n                    case 3:\n                        response = _ctx.sent;\n                        if (!(response.status === 200)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        student = _ctx.sent;\n                        setStudent(student);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchStudent() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchPayments = function() {\n        var _ref = _asyncToGenerator(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, payments;\n            return C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!id) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return window.fetch(\"http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/\".concat(id, \"/orders/\"), requestOptions);\n                    case 3:\n                        response = _ctx.sent;\n                        if (!(response.status === 200)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        payments = _ctx.sent;\n                        setPayments(payments);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchPayments() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var suma = function() {\n        var data = [\n            {\n                title: \"One\",\n                prix: \"100\"\n            },\n            {\n                title: \"Two\",\n                prix: \"200\"\n            },\n            {\n                title: \"Three\",\n                prix: 300\n            }\n        ];\n        console.log(data.reduce(function(a, v) {\n            return a = a + v.prix;\n        }, 0));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchPayments();\n        fetchStudent();\n        suma();\n    }, [\n        id\n    ]);\n    // computed o reactive methods\n    var getStatusPayments = function(val) {\n        if (id && payments1 !== undefined) {\n            var payment = payments1.filter(function(item) {\n                return item.status === val;\n            });\n            return payment;\n        } else {\n            return [];\n        }\n    };\n    // PAID\n    var paid = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"PAID\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // DUE\n    var due = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"DUE\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // OUTSTANDING\n    var outstanding = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"OUTSTANDING\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // EMITS\n    var handleCart = function(item) {\n        var cartD = cart;\n        //console.log('ITEM:', item) \n        var checkIndex;\n        checkIndex = cart.findIndex(function(val) {\n            return val.id === item.id;\n        });\n        if (checkIndex > -1) {\n            cartD.splice(checkIndex, 1);\n            setCart(cartD);\n        } else {\n            //cartD.push(item)\n            setCart({\n                item: item\n            });\n        }\n        console.log(\"CART:\", cart);\n        console.log(\"amount\", amount);\n    };\n    var amount = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = 10;\n        return payment;\n    }, [\n        cart\n    ]);\n    var getCart = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = cart;\n        return payment;\n    }, [\n        cart\n    ]);\n    // RETURNS VIEWS\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                school: student1 === null || student1 === void 0 ? void 0 : (ref = student1.school) === null || ref === void 0 ? void 0 : ref.name,\n                logo: student1 === null || student1 === void 0 ? void 0 : (ref1 = student1.school) === null || ref1 === void 0 ? void 0 : ref1.logo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 114,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                sx: {\n                    flexGrow: 1,\n                    marginY: \"70px\"\n                },\n                children: [\n                    amount,\n                    \" \",\n                    getCart[0],\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Summary_Summary__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        name: (student1 === null || student1 === void 0 ? void 0 : student1.first_name) + \" \" + (student1 === null || student1 === void 0 ? void 0 : student1.last_name),\n                        cohort: student1 === null || student1 === void 0 ? void 0 : student1.cohort,\n                        amount: amount\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 118,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Pagadas\",\n                        status: \"PAID\",\n                        children: paid === null || paid === void 0 ? void 0 : paid.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 122,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 121,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 119,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Pendientes\",\n                        status: \"DUE\",\n                        children: due === null || due === void 0 ? void 0 : due.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment,\n                                    handleCart: handleCart\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 129,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 128,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 126,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Futuras\",\n                        status: \"OUTSTANDING\",\n                        children: outstanding === null || outstanding === void 0 ? void 0 : outstanding.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment,\n                                    handleCart: handleCart\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 136,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 135,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 133,\n                        columnNumber: 15\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Bottombar_Bottombar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 141,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n        lineNumber: 113,\n        columnNumber: 9\n    }, _this);\n};\n_s(Student, \"SsyLPct9mb5Ggl7WZgU59UzlSlI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Student;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Student);\nvar _c;\n$RefreshReg$(_c, \"Student\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOUIsTUFBTSxFQUFDLEtBQUs7a0NBQzFDbUIsR0FBRyxhQUFIQSxHQUFHLFdBQUssR0FBUkEsS0FBQUEsQ0FBUSxHQUFSQSxHQUFHLENBQUVtQixHQUFHLENBQUMsU0FBQ3ZCLE9BQU8sRUFBRXdCLEdBQUc7aURBQ25CLDhEQUFDWCxLQUFHOzBDQUNBLDRFQUFDN0MsdUVBQVc7b0NBQUNrQyxJQUFJLEVBQUVGLE9BQU87b0NBQUVNLFVBQVUsRUFBRUEsVUFBVTs7Ozs7MENBQUc7K0JBRC9Da0IsR0FBRzs7OztzQ0FFUDt5QkFDVCxDQUFDOzs7Ozs2QkFDSztrQ0FDVCw4REFBQ3pELGtFQUFNO3dCQUFDZ0QsSUFBSSxFQUFDLGdCQUFnQjt3QkFBQzlCLE1BQU0sRUFBQyxhQUFhO2tDQUMvQ29CLFdBQVcsYUFBWEEsV0FBVyxXQUFLLEdBQWhCQSxLQUFBQSxDQUFnQixHQUFoQkEsV0FBVyxDQUFFa0IsR0FBRyxDQUFDLFNBQUN2QixPQUFPLEVBQUV3QixHQUFHO2lEQUMzQiw4REFBQ1gsS0FBRzswQ0FDQSw0RUFBQzdDLHVFQUFXO29DQUFDa0MsSUFBSSxFQUFFRixPQUFPO29DQUFFTSxVQUFVLEVBQUVBLFVBQVU7Ozs7OzBDQUFHOytCQUQvQ2tCLEdBQUc7Ozs7c0NBRVA7eUJBQ1QsQ0FBQzs7Ozs7NkJBQ0s7Ozs7OztxQkFDTDswQkFDTiw4REFBQzNELHVFQUFTOzs7O3FCQUFFOzs7Ozs7YUFDVixDQUNUO0NBQ0o7R0F0SU1JLE9BQU87O1FBT2NQLGtEQUFTOzs7QUFQOUJPLEtBQUFBLE9BQU87QUF3SWQsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdHVkZW50L1tpZF0uanM/M2Q3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIkBjb21wb25lbnRzL05hdmJhci9OYXZiYXJcIjtcclxuaW1wb3J0IEJvdHRvbWJhciBmcm9tIFwiQGNvbXBvbmVudHMvQm90dG9tYmFyL0JvdHRvbWJhclwiO1xyXG5pbXBvcnQgU3VtbWFyeSBmcm9tIFwiQGNvbXBvbmVudHMvU3VtbWFyeS9TdW1tYXJ5XCI7XHJcbmltcG9ydCBTdGF0dXMgZnJvbSBcIkBjb21wb25lbnRzL1BheW1lbnQvU3RhdHVzXCI7XHJcbmltcG9ydCBJdGVtUGF5bWVudCBmcm9tIFwiQGNvbXBvbmVudHMvUGF5bWVudC9JdGVtUGF5bWVudFwiO1xyXG5cclxuIGNvbnN0IFN0dWRlbnQgPSAoKSA9PiB7XHJcbiAgICAvL3N0YXRlXHJcbiAgICBjb25zdCBbc3R1ZGVudCwgc2V0U3R1ZGVudF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbcGF5bWVudHMsIHNldFBheW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgLy8gcm91dGVyIC0gcXVlcnkgLSBzbHVnIC0gaWRcclxuICAgIGNvbnN0IHsgcXVlcnkgOiB7aWR9fSA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgLy9hcGlzXHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsnaGFzaCc6ICdPY0puNGpZQ2hXJ31cclxuICAgIH07XHJcbiAgICBjb25zdCBmZXRjaFN0dWRlbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvdy5mZXRjaChgaHR0cDovL2VjMi0zLTIzOS0yMjEtNzQuY29tcHV0ZS0xLmFtYXpvbmF3cy5jb206ODAwMC9hcGkvdjEvc3R1ZGVudHMvJHtpZH0vYCwgcmVxdWVzdE9wdGlvbnMpO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0dWRlbnQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldFN0dWRlbnQoc3R1ZGVudCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGZldGNoUGF5bWVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvdy5mZXRjaChgaHR0cDovL2VjMi0zLTIzOS0yMjEtNzQuY29tcHV0ZS0xLmFtYXpvbmF3cy5jb206ODAwMC9hcGkvdjEvc3R1ZGVudHMvJHtpZH0vb3JkZXJzL2AsIHJlcXVlc3RPcHRpb25zKTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgc2V0UGF5bWVudHMocGF5bWVudHMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAgXHJcbiAgICBjb25zdCBzdW1hID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgIHt0aXRsZSA6IFwiT25lXCIscHJpeDogXCIxMDBcIn0sXHJcbiAgICAgICAge3RpdGxlIDogXCJUd29cIixwcml4OlwiMjAwXCJ9LFxyXG4gICAgICAgIHt0aXRsZSA6IFwiVGhyZWVcIixwcml4OjMwMH1cclxuICAgICAgXVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coKGRhdGEucmVkdWNlKChhLHYpID0+ICBhID0gYSArIHYucHJpeCAsIDAgKSkpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGZldGNoUGF5bWVudHMoKTtcclxuICAgICAgZmV0Y2hTdHVkZW50KCk7XHJcbiAgICAgIHN1bWEoKVxyXG4gICAgfSwgW2lkXSk7XHJcblxyXG4gICAgLy8gY29tcHV0ZWQgbyByZWFjdGl2ZSBtZXRob2RzXHJcbiAgICBjb25zdCBnZXRTdGF0dXNQYXltZW50cyA9ICh2YWwpID0+IHtcclxuICAgICAgaWYoaWQgJiYgcGF5bWVudHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnQgPSBwYXltZW50cy5maWx0ZXIoaXRlbSA9PiBpdGVtLnN0YXR1cyA9PT0gdmFsKVxyXG4gICAgICAgIHJldHVybiBwYXltZW50XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFBBSURcclxuICAgIGNvbnN0IHBhaWQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBjb25zdCBwYXltZW50ID0gZ2V0U3RhdHVzUGF5bWVudHMoJ1BBSUQnKVxyXG4gICAgICAgIHJldHVybiBwYXltZW50XHJcbiAgICB9LCBbcGF5bWVudHNdKTtcclxuICAgIFxyXG4gICAgLy8gRFVFXHJcbiAgICBjb25zdCBkdWUgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgY29uc3QgcGF5bWVudCA9IGdldFN0YXR1c1BheW1lbnRzKCdEVUUnKVxyXG4gICAgICByZXR1cm4gcGF5bWVudFxyXG4gICAgfSwgW3BheW1lbnRzXSk7XHJcblxyXG4gICAgLy8gT1VUU1RBTkRJTkdcclxuICAgIGNvbnN0IG91dHN0YW5kaW5nID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBheW1lbnQgPSBnZXRTdGF0dXNQYXltZW50cygnT1VUU1RBTkRJTkcnKVxyXG4gICAgICByZXR1cm4gcGF5bWVudFxyXG4gICAgfSwgW3BheW1lbnRzXSk7XHJcbiAgICAvLyBFTUlUU1xyXG4gICAgY29uc3QgaGFuZGxlQ2FydCA9IChpdGVtKSA9PiB7IFxyXG4gICAgICBjb25zdCBjYXJ0RCA9IGNhcnRcclxuICAgICAgLy9jb25zb2xlLmxvZygnSVRFTTonLCBpdGVtKSBcclxuICAgICAgbGV0IGNoZWNrSW5kZXhcclxuXHJcbiAgICAgIGNoZWNrSW5kZXggPSBjYXJ0LmZpbmRJbmRleCh2YWwgPT4gdmFsLmlkID09PSBpdGVtLmlkKVxyXG5cclxuICAgICAgaWYgKGNoZWNrSW5kZXggPiAtMSkge1xyXG4gICAgICAgIGNhcnRELnNwbGljZShjaGVja0luZGV4LCAxKVxyXG4gICAgICAgIHNldENhcnQoY2FydEQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9jYXJ0RC5wdXNoKGl0ZW0pXHJcbiAgICAgICAgc2V0Q2FydCh7aXRlbX0pXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ0NBUlQ6JywgY2FydClcclxuICAgICAgY29uc29sZS5sb2coJ2Ftb3VudCcsIGFtb3VudCkgXHJcbiAgICB9XHJcbiAgICBjb25zdCBhbW91bnQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgY29uc3QgcGF5bWVudCA9IDEwXHJcbiAgICAgIHJldHVybiBwYXltZW50XHJcbiAgICB9LCBbY2FydF0pO1xyXG4gICAgY29uc3QgZ2V0Q2FydCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXltZW50ID0gY2FydFxyXG4gICAgICByZXR1cm4gcGF5bWVudFxyXG4gICAgfSwgW2NhcnRdKTtcclxuICAgIC8vIFJFVFVSTlMgVklFV1NcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE5hdmJhciBzY2hvb2w9e3N0dWRlbnQ/LnNjaG9vbD8ubmFtZX0gbG9nbz17c3R1ZGVudD8uc2Nob29sPy5sb2dvfSAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgbWFyZ2luWTogJzcwcHgnIH19PlxyXG4gICAgICAgICAgICB7YW1vdW50fSB7Z2V0Q2FydFswXX1cclxuICAgICAgICAgICAgICA8U3VtbWFyeSBuYW1lPXtzdHVkZW50Py5maXJzdF9uYW1lICsgJyAnICtzdHVkZW50Py5sYXN0X25hbWUgfSBjb2hvcnQ9e3N0dWRlbnQ/LmNvaG9ydH0gYW1vdW50PXthbW91bnR9IC8+XHJcbiAgICAgICAgICAgICAgPFN0YXR1cyBuYW1lPVwiQ3VvdGFzIFBhZ2FkYXNcIiBzdGF0dXM9XCJQQUlEXCI+XHJcbiAgICAgICAgICAgICAgICB7cGFpZD8ubWFwKChwYXltZW50LCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1QYXltZW50IGl0ZW09e3BheW1lbnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvU3RhdHVzPlxyXG4gICAgICAgICAgICAgIDxTdGF0dXMgbmFtZT1cIkN1b3RhcyBQZW5kaWVudGVzXCIgc3RhdHVzPVwiRFVFXCI+XHJcbiAgICAgICAgICAgICAgICB7ZHVlPy5tYXAoKHBheW1lbnQsIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVBheW1lbnQgaXRlbT17cGF5bWVudH0gaGFuZGxlQ2FydD17aGFuZGxlQ2FydH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9TdGF0dXM+XHJcbiAgICAgICAgICAgICAgPFN0YXR1cyBuYW1lPVwiQ3VvdGFzIEZ1dHVyYXNcIiBzdGF0dXM9XCJPVVRTVEFORElOR1wiPlxyXG4gICAgICAgICAgICAgICAge291dHN0YW5kaW5nPy5tYXAoKHBheW1lbnQsIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVBheW1lbnQgaXRlbT17cGF5bWVudH0gaGFuZGxlQ2FydD17aGFuZGxlQ2FydH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9TdGF0dXM+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm90dG9tYmFyLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJ1c2VSb3V0ZXIiLCJCb3giLCJOYXZiYXIiLCJCb3R0b21iYXIiLCJTdW1tYXJ5IiwiU3RhdHVzIiwiSXRlbVBheW1lbnQiLCJTdHVkZW50Iiwic3R1ZGVudCIsInNldFN0dWRlbnQiLCJwYXltZW50cyIsInNldFBheW1lbnRzIiwiY2FydCIsInNldENhcnQiLCJxdWVyeSIsImlkIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiZmV0Y2hTdHVkZW50IiwicmVzcG9uc2UiLCJ3aW5kb3ciLCJmZXRjaCIsInN0YXR1cyIsImpzb24iLCJmZXRjaFBheW1lbnRzIiwic3VtYSIsImRhdGEiLCJ0aXRsZSIsInByaXgiLCJjb25zb2xlIiwibG9nIiwicmVkdWNlIiwiYSIsInYiLCJnZXRTdGF0dXNQYXltZW50cyIsInZhbCIsInVuZGVmaW5lZCIsInBheW1lbnQiLCJmaWx0ZXIiLCJpdGVtIiwicGFpZCIsImR1ZSIsIm91dHN0YW5kaW5nIiwiaGFuZGxlQ2FydCIsImNhcnREIiwiY2hlY2tJbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsImFtb3VudCIsImdldENhcnQiLCJkaXYiLCJzY2hvb2wiLCJuYW1lIiwibG9nbyIsInN4IiwiZmxleEdyb3ciLCJtYXJnaW5ZIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImNvaG9ydCIsIm1hcCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/student/[id].js\n");

/***/ })

});