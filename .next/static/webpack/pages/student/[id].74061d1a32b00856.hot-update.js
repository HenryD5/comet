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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Navbar/Navbar */ \"./components/Navbar/Navbar.js\");\n/* harmony import */ var _components_Bottombar_Bottombar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Bottombar/Bottombar */ \"./components/Bottombar/Bottombar.js\");\n/* harmony import */ var _components_Summary_Summary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Summary/Summary */ \"./components/Summary/Summary.js\");\n/* harmony import */ var _components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Payment/Status */ \"./components/Payment/Status.js\");\n/* harmony import */ var _components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Payment/ItemPayment */ \"./components/Payment/ItemPayment.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Student = function() {\n    var _this1 = _this;\n    var ref, ref1;\n    _s();\n    //state\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), student1 = ref2[0], setStudent = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), payments1 = ref3[0], setPayments = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cart = ref4[0], setCart = ref4[1];\n    // router - query - slug - id\n    var ref5 = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(), id = ref5.query.id;\n    //apis\n    var requestOptions = {\n        method: \"GET\",\n        headers: {\n            \"hash\": \"OcJn4jYChW\"\n        }\n    };\n    var fetchStudent = function() {\n        var _ref = _asyncToGenerator(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, student;\n            return C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!id) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return window.fetch(\"http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/\".concat(id, \"/\"), requestOptions);\n                    case 3:\n                        response = _ctx.sent;\n                        if (!(response.status === 200)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        student = _ctx.sent;\n                        setStudent(student);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchStudent() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchPayments = function() {\n        var _ref = _asyncToGenerator(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, payments;\n            return C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!id) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return window.fetch(\"http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/\".concat(id, \"/orders/\"), requestOptions);\n                    case 3:\n                        response = _ctx.sent;\n                        if (!(response.status === 200)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        payments = _ctx.sent;\n                        setPayments(payments);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchPayments() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var suma = function() {\n        var data = [\n            {\n                title: \"One\",\n                prix: \"100\"\n            },\n            {\n                title: \"Two\",\n                prix: \"200\"\n            },\n            {\n                title: \"Three\",\n                prix: \"300\"\n            }\n        ];\n        console.log(data.reduce(function(a, v) {\n            return a = parseInt(a) + parseInt(v.prix);\n        }, 0));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchPayments();\n        fetchStudent();\n        suma();\n    }, [\n        id\n    ]);\n    // computed o reactive methods\n    var getStatusPayments = function(val) {\n        if (id && payments1 !== undefined) {\n            var payment = payments1.filter(function(item) {\n                return item.status === val;\n            });\n            return payment;\n        } else {\n            return [];\n        }\n    };\n    // PAID\n    var paid = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"PAID\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // DUE\n    var due = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"DUE\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // OUTSTANDING\n    var outstanding = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"OUTSTANDING\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // EMITS\n    var handleCart = function(item) {\n        var cartD = cart;\n        //console.log('ITEM:', item) \n        var checkIndex;\n        checkIndex = cart.findIndex(function(val) {\n            return val.id === item.id;\n        });\n        if (checkIndex > -1) {\n            cartD.splice(checkIndex, 1);\n            setCart(cartD);\n        } else {\n            //cartD.push(item)\n            setCart({\n                item: item\n            });\n        }\n        console.log(\"CART:\", cart);\n        console.log(\"amount\", amount);\n    };\n    var getTotal = function() {\n        return (cart || []).reduce(function(currentValue, nextValue) {\n            return currentValue + nextValue.price;\n        }, 0);\n    };\n    //const ul = (cart || []).reduce((a,v) =>  a = parseInt(a) + parseInt(v.price) , 0 )\n    var amount = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = 10;\n        return payment;\n    }, [\n        cart\n    ]);\n    var getCart = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = cart;\n        return payment;\n    }, [\n        cart\n    ]);\n    // RETURNS VIEWS\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                school: student1 === null || student1 === void 0 ? void 0 : (ref = student1.school) === null || ref === void 0 ? void 0 : ref.name,\n                logo: student1 === null || student1 === void 0 ? void 0 : (ref1 = student1.school) === null || ref1 === void 0 ? void 0 : ref1.logo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 120,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                sx: {\n                    flexGrow: 1,\n                    marginY: \"70px\"\n                },\n                children: [\n                    amount,\n                    \" \",\n                    getCart[0],\n                    \" \",\n                    getTotal,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Summary_Summary__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        name: (student1 === null || student1 === void 0 ? void 0 : student1.first_name) + \" \" + (student1 === null || student1 === void 0 ? void 0 : student1.last_name),\n                        cohort: student1 === null || student1 === void 0 ? void 0 : student1.cohort,\n                        amount: amount\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 124,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Pagadas\",\n                        status: \"PAID\",\n                        children: paid === null || paid === void 0 ? void 0 : paid.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 128,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 127,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 125,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Pendientes\",\n                        status: \"DUE\",\n                        children: due === null || due === void 0 ? void 0 : due.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment,\n                                    handleCart: handleCart\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 135,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 134,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 132,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Futuras\",\n                        status: \"OUTSTANDING\",\n                        children: outstanding === null || outstanding === void 0 ? void 0 : outstanding.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment,\n                                    handleCart: handleCart\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 142,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 141,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 139,\n                        columnNumber: 15\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 122,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Bottombar_Bottombar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 147,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n        lineNumber: 119,\n        columnNumber: 9\n    }, _this);\n};\n_s(Student, \"SsyLPct9mb5Ggl7WZgU59UzlSlI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Student;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Student);\nvar _c;\n$RefreshReg$(_c, \"Student\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Uzs7O0FBUDlCTyxLQUFBQSxPQUFPO0FBOElkLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R1ZGVudC9baWRdLmpzPzNkNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJAY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyXCI7XHJcbmltcG9ydCBCb3R0b21iYXIgZnJvbSBcIkBjb21wb25lbnRzL0JvdHRvbWJhci9Cb3R0b21iYXJcIjtcclxuaW1wb3J0IFN1bW1hcnkgZnJvbSBcIkBjb21wb25lbnRzL1N1bW1hcnkvU3VtbWFyeVwiO1xyXG5pbXBvcnQgU3RhdHVzIGZyb20gXCJAY29tcG9uZW50cy9QYXltZW50L1N0YXR1c1wiO1xyXG5pbXBvcnQgSXRlbVBheW1lbnQgZnJvbSBcIkBjb21wb25lbnRzL1BheW1lbnQvSXRlbVBheW1lbnRcIjtcclxuXHJcbiBjb25zdCBTdHVkZW50ID0gKCkgPT4ge1xyXG4gICAgLy9zdGF0ZVxyXG4gICAgY29uc3QgW3N0dWRlbnQsIHNldFN0dWRlbnRdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW3BheW1lbnRzLCBzZXRQYXltZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBcclxuICAgIC8vIHJvdXRlciAtIHF1ZXJ5IC0gc2x1ZyAtIGlkXHJcbiAgICBjb25zdCB7IHF1ZXJ5IDoge2lkfX0gPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIC8vYXBpc1xyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7J2hhc2gnOiAnT2NKbjRqWUNoVyd9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZmV0Y2hTdHVkZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3cuZmV0Y2goYGh0dHA6Ly9lYzItMy0yMzktMjIxLTc0LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tOjgwMDAvYXBpL3YxL3N0dWRlbnRzLyR7aWR9L2AsIHJlcXVlc3RPcHRpb25zKTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHVkZW50ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRTdHVkZW50KHN0dWRlbnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBmZXRjaFBheW1lbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3cuZmV0Y2goYGh0dHA6Ly9lYzItMy0yMzktMjIxLTc0LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tOjgwMDAvYXBpL3YxL3N0dWRlbnRzLyR7aWR9L29yZGVycy9gLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY29uc3QgcGF5bWVudHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldFBheW1lbnRzKHBheW1lbnRzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgIFxyXG4gICAgY29uc3Qgc3VtYSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICB7dGl0bGUgOiBcIk9uZVwiLHByaXg6IFwiMTAwXCJ9LFxyXG4gICAgICAgIHt0aXRsZSA6IFwiVHdvXCIscHJpeDpcIjIwMFwifSxcclxuICAgICAgICB7dGl0bGUgOiBcIlRocmVlXCIscHJpeDpcIjMwMFwifVxyXG4gICAgICBdXHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygoZGF0YS5yZWR1Y2UoKGEsdikgPT4gIGEgPSBwYXJzZUludChhKSArIHBhcnNlSW50KHYucHJpeCkgLCAwICkpKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBmZXRjaFBheW1lbnRzKCk7XHJcbiAgICAgIGZldGNoU3R1ZGVudCgpO1xyXG4gICAgICBzdW1hKClcclxuICAgIH0sIFtpZF0pO1xyXG5cclxuICAgIC8vIGNvbXB1dGVkIG8gcmVhY3RpdmUgbWV0aG9kc1xyXG4gICAgY29uc3QgZ2V0U3RhdHVzUGF5bWVudHMgPSAodmFsKSA9PiB7XHJcbiAgICAgIGlmKGlkICYmIHBheW1lbnRzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBwYXltZW50ID0gcGF5bWVudHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zdGF0dXMgPT09IHZhbClcclxuICAgICAgICByZXR1cm4gcGF5bWVudFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBQQUlEXHJcbiAgICBjb25zdCBwYWlkID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGF5bWVudCA9IGdldFN0YXR1c1BheW1lbnRzKCdQQUlEJylcclxuICAgICAgICByZXR1cm4gcGF5bWVudFxyXG4gICAgfSwgW3BheW1lbnRzXSk7XHJcbiAgICBcclxuICAgIC8vIERVRVxyXG4gICAgY29uc3QgZHVlID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBheW1lbnQgPSBnZXRTdGF0dXNQYXltZW50cygnRFVFJylcclxuICAgICAgcmV0dXJuIHBheW1lbnRcclxuICAgIH0sIFtwYXltZW50c10pO1xyXG5cclxuICAgIC8vIE9VVFNUQU5ESU5HXHJcbiAgICBjb25zdCBvdXRzdGFuZGluZyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXltZW50ID0gZ2V0U3RhdHVzUGF5bWVudHMoJ09VVFNUQU5ESU5HJylcclxuICAgICAgcmV0dXJuIHBheW1lbnRcclxuICAgIH0sIFtwYXltZW50c10pO1xyXG4gICAgLy8gRU1JVFNcclxuICAgIGNvbnN0IGhhbmRsZUNhcnQgPSAoaXRlbSkgPT4geyBcclxuICAgICAgY29uc3QgY2FydEQgPSBjYXJ0XHJcbiAgICAgIC8vY29uc29sZS5sb2coJ0lURU06JywgaXRlbSkgXHJcbiAgICAgIGxldCBjaGVja0luZGV4XHJcblxyXG4gICAgICBjaGVja0luZGV4ID0gY2FydC5maW5kSW5kZXgodmFsID0+IHZhbC5pZCA9PT0gaXRlbS5pZClcclxuXHJcbiAgICAgIGlmIChjaGVja0luZGV4ID4gLTEpIHtcclxuICAgICAgICBjYXJ0RC5zcGxpY2UoY2hlY2tJbmRleCwgMSlcclxuICAgICAgICBzZXRDYXJ0KGNhcnREKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vY2FydEQucHVzaChpdGVtKVxyXG4gICAgICAgIHNldENhcnQoe2l0ZW19KVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCdDQVJUOicsIGNhcnQpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdhbW91bnQnLCBhbW91bnQpIFxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0VG90YWwgPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiAoY2FydCB8fCBbXSkucmVkdWNlKChjdXJyZW50VmFsdWUsIG5leHRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnRWYWx1ZSArIG5leHRWYWx1ZS5wcmljZTtcclxuICAgICAgfSwgMClcclxuICAgIH07XHJcbiAgICAvL2NvbnN0IHVsID0gKGNhcnQgfHwgW10pLnJlZHVjZSgoYSx2KSA9PiAgYSA9IHBhcnNlSW50KGEpICsgcGFyc2VJbnQodi5wcmljZSkgLCAwIClcclxuICAgIGNvbnN0IGFtb3VudCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXltZW50ID0gMTBcclxuICAgICAgcmV0dXJuIHBheW1lbnRcclxuICAgIH0sIFtjYXJ0XSk7XHJcbiAgICBjb25zdCBnZXRDYXJ0ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBheW1lbnQgPSBjYXJ0XHJcbiAgICAgIHJldHVybiBwYXltZW50XHJcbiAgICB9LCBbY2FydF0pO1xyXG4gICAgLy8gUkVUVVJOUyBWSUVXU1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TmF2YmFyIHNjaG9vbD17c3R1ZGVudD8uc2Nob29sPy5uYW1lfSBsb2dvPXtzdHVkZW50Py5zY2hvb2w/LmxvZ299IC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxLCBtYXJnaW5ZOiAnNzBweCcgfX0+XHJcbiAgICAgICAgICAgIHthbW91bnR9IHtnZXRDYXJ0WzBdfSB7Z2V0VG90YWx9XHJcbiAgICAgICAgICAgICAgPFN1bW1hcnkgbmFtZT17c3R1ZGVudD8uZmlyc3RfbmFtZSArICcgJyArc3R1ZGVudD8ubGFzdF9uYW1lIH0gY29ob3J0PXtzdHVkZW50Py5jb2hvcnR9IGFtb3VudD17YW1vdW50fSAvPlxyXG4gICAgICAgICAgICAgIDxTdGF0dXMgbmFtZT1cIkN1b3RhcyBQYWdhZGFzXCIgc3RhdHVzPVwiUEFJRFwiPlxyXG4gICAgICAgICAgICAgICAge3BhaWQ/Lm1hcCgocGF5bWVudCwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtUGF5bWVudCBpdGVtPXtwYXltZW50fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1N0YXR1cz5cclxuICAgICAgICAgICAgICA8U3RhdHVzIG5hbWU9XCJDdW90YXMgUGVuZGllbnRlc1wiIHN0YXR1cz1cIkRVRVwiPlxyXG4gICAgICAgICAgICAgICAge2R1ZT8ubWFwKChwYXltZW50LCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1QYXltZW50IGl0ZW09e3BheW1lbnR9IGhhbmRsZUNhcnQ9e2hhbmRsZUNhcnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvU3RhdHVzPlxyXG4gICAgICAgICAgICAgIDxTdGF0dXMgbmFtZT1cIkN1b3RhcyBGdXR1cmFzXCIgc3RhdHVzPVwiT1VUU1RBTkRJTkdcIj5cclxuICAgICAgICAgICAgICAgIHtvdXRzdGFuZGluZz8ubWFwKChwYXltZW50LCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1QYXltZW50IGl0ZW09e3BheW1lbnR9IGhhbmRsZUNhcnQ9e2hhbmRsZUNhcnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvU3RhdHVzPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJvdHRvbWJhci8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0dWRlbnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwidXNlUm91dGVyIiwiQm94IiwiTmF2YmFyIiwiQm90dG9tYmFyIiwiU3VtbWFyeSIsIlN0YXR1cyIsIkl0ZW1QYXltZW50IiwiU3R1ZGVudCIsInN0dWRlbnQiLCJzZXRTdHVkZW50IiwicGF5bWVudHMiLCJzZXRQYXltZW50cyIsImNhcnQiLCJzZXRDYXJ0IiwicXVlcnkiLCJpZCIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImZldGNoU3R1ZGVudCIsInJlc3BvbnNlIiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2hQYXltZW50cyIsInN1bWEiLCJkYXRhIiwidGl0bGUiLCJwcml4IiwiY29uc29sZSIsImxvZyIsInJlZHVjZSIsImEiLCJ2IiwicGFyc2VJbnQiLCJnZXRTdGF0dXNQYXltZW50cyIsInZhbCIsInVuZGVmaW5lZCIsInBheW1lbnQiLCJmaWx0ZXIiLCJpdGVtIiwicGFpZCIsImR1ZSIsIm91dHN0YW5kaW5nIiwiaGFuZGxlQ2FydCIsImNhcnREIiwiY2hlY2tJbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsImFtb3VudCIsImdldFRvdGFsIiwiY3VycmVudFZhbHVlIiwibmV4dFZhbHVlIiwicHJpY2UiLCJnZXRDYXJ0IiwiZGl2Iiwic2Nob29sIiwibmFtZSIsImxvZ28iLCJzeCIsImZsZXhHcm93IiwibWFyZ2luWSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJjb2hvcnQiLCJtYXAiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/student/[id].js\n");

/***/ })

});