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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Navbar/Navbar */ \"./components/Navbar/Navbar.js\");\n/* harmony import */ var _components_Bottombar_Bottombar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Bottombar/Bottombar */ \"./components/Bottombar/Bottombar.js\");\n/* harmony import */ var _components_Summary_Summary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Summary/Summary */ \"./components/Summary/Summary.js\");\n/* harmony import */ var _components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Payment/Status */ \"./components/Payment/Status.js\");\n/* harmony import */ var _components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Payment/ItemPayment */ \"./components/Payment/ItemPayment.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Student = function() {\n    var _this1 = _this;\n    var ref, ref1;\n    _s();\n    // date\n    var now = new Date();\n    //state\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), student1 = ref2[0], setStudent = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), payments1 = ref3[0], setPayments = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cart = ref4[0], setCart = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), amount = ref5[0], setAmount = ref5[1];\n    // router - query - slug - id\n    var ref6 = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(), id = ref6.query.id;\n    //apis\n    var requestOptions = {\n        method: \"GET\",\n        headers: {\n            \"hash\": \"OcJn4jYChW\"\n        }\n    };\n    var fetchStudent = function() {\n        var _ref = _asyncToGenerator(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, student;\n            return C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!id) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return window.fetch(\"http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/\".concat(id, \"/\"), requestOptions);\n                    case 3:\n                        response = _ctx.sent;\n                        if (!(response.status === 200)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        student = _ctx.sent;\n                        setStudent(student);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchStudent() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchPayments = function() {\n        var _ref = _asyncToGenerator(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, payments;\n            return C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!id) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return window.fetch(\"http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/\".concat(id, \"/orders/\"), requestOptions);\n                    case 3:\n                        response = _ctx.sent;\n                        if (!(response.status === 200)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        payments = _ctx.sent;\n                        setPayments(payments);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchPayments() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchPayments();\n        fetchStudent();\n    }, [\n        id\n    ]);\n    // computed o reactive methods\n    var getStatusPayments = function(val) {\n        if (id && payments1 !== undefined) {\n            var payment = payments1.filter(function(item) {\n                return item.status === val;\n            });\n            return payment;\n        } else {\n            return [];\n        }\n    };\n    // PAID\n    var paid = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"PAID\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // DUE\n    var due = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"DUE\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // OUTSTANDING\n    var outstanding = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"OUTSTANDING\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // LOGIC PAYMENT\n    var handleCart = function(item) {\n        var checkIndex = cart.findIndex(function(val) {\n            return val.id === item.id;\n        });\n        checkIndex > -1 ? cart.splice(checkIndex, 1) : cart.push(item);\n        getTotal();\n    };\n    var getTotal = function() {\n        var total = (cart || []).reduce(function(currentValue, nextValue) {\n            return parseInt(currentValue) + parseInt(nextValue.price);\n        }, 0);\n        setAmount(total);\n    };\n    var handlePayment = function() {\n        cart.forEach(function(item, index) {\n            if (item.status !== \"PAID\") {\n                var paymentArr = JSON.parse(JSON.stringify(payments1));\n                var checkIndex = paymentArr.findIndex(function(val) {\n                    return val.id === item.id;\n                });\n                if (checkIndex > -1) {\n                    paymentArr.splice(checkIndex, 1);\n                    item.status = \"PAID\";\n                    item.payin = {\n                        \"created\": \"25-04-17\",\n                        \"id\": \"2d724299-e12d-4153-aa86-61636f0f441d\",\n                        \"status\": \"approved\"\n                    };\n                    paymentArr.push(item);\n                    setPayments(paymentArr);\n                    handleCart;\n                    cart.splice(index, 1);\n                }\n            }\n        });\n    };\n    // RETURNS VIEWS\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                school: student1 === null || student1 === void 0 ? void 0 : (ref = student1.school) === null || ref === void 0 ? void 0 : ref.name,\n                logo: student1 === null || student1 === void 0 ? void 0 : (ref1 = student1.school) === null || ref1 === void 0 ? void 0 : ref1.logo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                sx: {\n                    flexGrow: 1,\n                    marginY: \"70px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Summary_Summary__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        name: (student1 === null || student1 === void 0 ? void 0 : student1.first_name) + \" \" + (student1 === null || student1 === void 0 ? void 0 : student1.last_name),\n                        cohort: student1 === null || student1 === void 0 ? void 0 : student1.cohort,\n                        amount: amount\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 119,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Pagadas\",\n                        status: \"PAID\",\n                        children: paid === null || paid === void 0 ? void 0 : paid.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 123,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 122,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 120,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Pendientes\",\n                        status: \"DUE\",\n                        children: due === null || due === void 0 ? void 0 : due.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment,\n                                    handleCart: handleCart\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 130,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 129,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 127,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Futuras\",\n                        status: \"OUTSTANDING\",\n                        children: outstanding === null || outstanding === void 0 ? void 0 : outstanding.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment,\n                                    handleCart: handleCart\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 137,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 136,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 134,\n                        columnNumber: 15\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 118,\n                columnNumber: 13\n            }, _this),\n            amount > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Bottombar_Bottombar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                handlePayment: handlePayment\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 144,\n                columnNumber: 15\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n        lineNumber: 115,\n        columnNumber: 9\n    }, _this);\n};\n_s(Student, \"ao+6X+Eagvt07oAqHTY/RNrs60c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Student;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Student);\nvar _c;\n$RefreshReg$(_c, \"Student\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUJBQUc7Ozs7OzthQUUxQyxDQUNUO0NBQ0o7R0ExSU01QyxPQUFPOztRQVVjUCxrREFBUzs7O0FBVjlCTyxLQUFBQSxPQUFPO0FBNElkLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R1ZGVudC9baWRdLmpzPzNkNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJAY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyXCI7XHJcbmltcG9ydCBCb3R0b21iYXIgZnJvbSBcIkBjb21wb25lbnRzL0JvdHRvbWJhci9Cb3R0b21iYXJcIjtcclxuaW1wb3J0IFN1bW1hcnkgZnJvbSBcIkBjb21wb25lbnRzL1N1bW1hcnkvU3VtbWFyeVwiO1xyXG5pbXBvcnQgU3RhdHVzIGZyb20gXCJAY29tcG9uZW50cy9QYXltZW50L1N0YXR1c1wiO1xyXG5pbXBvcnQgSXRlbVBheW1lbnQgZnJvbSBcIkBjb21wb25lbnRzL1BheW1lbnQvSXRlbVBheW1lbnRcIjtcclxuXHJcbiBjb25zdCBTdHVkZW50ID0gKCkgPT4ge1xyXG4gICAgLy8gZGF0ZVxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIC8vc3RhdGVcclxuICAgIGNvbnN0IFtzdHVkZW50LCBzZXRTdHVkZW50XSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtwYXltZW50cywgc2V0UGF5bWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgXHJcbiAgICAvLyByb3V0ZXIgLSBxdWVyeSAtIHNsdWcgLSBpZFxyXG4gICAgY29uc3QgeyBxdWVyeSA6IHtpZH19ID0gdXNlUm91dGVyKClcclxuXHJcbiAgICAvL2FwaXNcclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczogeydoYXNoJzogJ09jSm40allDaFcnfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGZldGNoU3R1ZGVudCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LmZldGNoKGBodHRwOi8vZWMyLTMtMjM5LTIyMS03NC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbTo4MDAwL2FwaS92MS9zdHVkZW50cy8ke2lkfS9gLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3R1ZGVudCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgc2V0U3R1ZGVudChzdHVkZW50KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZmV0Y2hQYXltZW50cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LmZldGNoKGBodHRwOi8vZWMyLTMtMjM5LTIyMS03NC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbTo4MDAwL2FwaS92MS9zdHVkZW50cy8ke2lkfS9vcmRlcnMvYCwgcmVxdWVzdE9wdGlvbnMpO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBheW1lbnRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRQYXltZW50cyhwYXltZW50cyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZmV0Y2hQYXltZW50cygpO1xyXG4gICAgICBmZXRjaFN0dWRlbnQoKTtcclxuICAgIH0sIFtpZF0pO1xyXG5cclxuICAgIC8vIGNvbXB1dGVkIG8gcmVhY3RpdmUgbWV0aG9kc1xyXG4gICAgY29uc3QgZ2V0U3RhdHVzUGF5bWVudHMgPSAodmFsKSA9PiB7XHJcbiAgICAgIGlmKGlkICYmIHBheW1lbnRzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBwYXltZW50ID0gcGF5bWVudHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zdGF0dXMgPT09IHZhbClcclxuICAgICAgICByZXR1cm4gcGF5bWVudFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBQQUlEXHJcbiAgICBjb25zdCBwYWlkID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGF5bWVudCA9IGdldFN0YXR1c1BheW1lbnRzKCdQQUlEJylcclxuICAgICAgICByZXR1cm4gcGF5bWVudFxyXG4gICAgfSwgW3BheW1lbnRzXSk7XHJcbiAgICBcclxuICAgIC8vIERVRVxyXG4gICAgY29uc3QgZHVlID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBheW1lbnQgPSBnZXRTdGF0dXNQYXltZW50cygnRFVFJylcclxuICAgICAgcmV0dXJuIHBheW1lbnRcclxuICAgIH0sIFtwYXltZW50c10pO1xyXG5cclxuICAgIC8vIE9VVFNUQU5ESU5HXHJcbiAgICBjb25zdCBvdXRzdGFuZGluZyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXltZW50ID0gZ2V0U3RhdHVzUGF5bWVudHMoJ09VVFNUQU5ESU5HJylcclxuICAgICAgcmV0dXJuIHBheW1lbnRcclxuICAgIH0sIFtwYXltZW50c10pO1xyXG5cclxuICAgIC8vIExPR0lDIFBBWU1FTlRcclxuICAgIGNvbnN0IGhhbmRsZUNhcnQgPSAoaXRlbSkgPT4geyBcclxuICAgICAgY29uc3QgY2hlY2tJbmRleCA9IGNhcnQuZmluZEluZGV4KHZhbCA9PiB2YWwuaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgIGNoZWNrSW5kZXggPiAtMSA/IGNhcnQuc3BsaWNlKGNoZWNrSW5kZXgsIDEpIDogY2FydC5wdXNoKGl0ZW0pXHJcbiAgICAgIGdldFRvdGFsKClcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGdldFRvdGFsID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB0b3RhbCA9IChjYXJ0IHx8IFtdKS5yZWR1Y2UoKGN1cnJlbnRWYWx1ZSwgbmV4dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoY3VycmVudFZhbHVlKSArIHBhcnNlSW50KG5leHRWYWx1ZS5wcmljZSk7XHJcbiAgICAgIH0sIDApXHJcbiAgICAgIHNldEFtb3VudCh0b3RhbClcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVBheW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgIGNhcnQuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5zdGF0dXMgIT09ICdQQUlEJykge1xyXG4gICAgICAgICAgY29uc3QgcGF5bWVudEFyciA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocGF5bWVudHMpKVxyXG4gICAgICAgICAgbGV0IGNoZWNrSW5kZXggPSBwYXltZW50QXJyLmZpbmRJbmRleCh2YWwgPT4gdmFsLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgICAgaWYoY2hlY2tJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHBheW1lbnRBcnIuc3BsaWNlKGNoZWNrSW5kZXgsIDEpXHJcbiAgICAgICAgICAgIGl0ZW0uc3RhdHVzID0gJ1BBSUQnXHJcbiAgICAgICAgICAgIGl0ZW0ucGF5aW4gPSB7XHJcbiAgICAgICAgICAgICAgJ2NyZWF0ZWQnOiAnMjUtMDQtMTcnLFxyXG4gICAgICAgICAgICAgICdpZCc6IFwiMmQ3MjQyOTktZTEyZC00MTUzLWFhODYtNjE2MzZmMGY0NDFkXCIsXHJcbiAgICAgICAgICAgICAgJ3N0YXR1cyc6IFwiYXBwcm92ZWRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBheW1lbnRBcnIucHVzaChpdGVtKVxyXG4gICAgICAgICAgICBzZXRQYXltZW50cyhwYXltZW50QXJyKTtcclxuICAgICAgICAgICAgaGFuZGxlQ2FydFxyXG4gICAgICAgICAgICBjYXJ0LnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gUkVUVVJOUyBWSUVXU1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TmF2YmFyIHNjaG9vbD17c3R1ZGVudD8uc2Nob29sPy5uYW1lfSBsb2dvPXtzdHVkZW50Py5zY2hvb2w/LmxvZ299IC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxLCBtYXJnaW5ZOiAnNzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgPFN1bW1hcnkgbmFtZT17c3R1ZGVudD8uZmlyc3RfbmFtZSArICcgJyArc3R1ZGVudD8ubGFzdF9uYW1lIH0gY29ob3J0PXtzdHVkZW50Py5jb2hvcnR9IGFtb3VudD17YW1vdW50fSAvPlxyXG4gICAgICAgICAgICAgIDxTdGF0dXMgbmFtZT1cIkN1b3RhcyBQYWdhZGFzXCIgc3RhdHVzPVwiUEFJRFwiPlxyXG4gICAgICAgICAgICAgICAge3BhaWQ/Lm1hcCgocGF5bWVudCwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtUGF5bWVudCBpdGVtPXtwYXltZW50fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1N0YXR1cz5cclxuICAgICAgICAgICAgICA8U3RhdHVzIG5hbWU9XCJDdW90YXMgUGVuZGllbnRlc1wiIHN0YXR1cz1cIkRVRVwiPlxyXG4gICAgICAgICAgICAgICAge2R1ZT8ubWFwKChwYXltZW50LCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1QYXltZW50IGl0ZW09e3BheW1lbnR9IGhhbmRsZUNhcnQ9e2hhbmRsZUNhcnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvU3RhdHVzPlxyXG4gICAgICAgICAgICAgIDxTdGF0dXMgbmFtZT1cIkN1b3RhcyBGdXR1cmFzXCIgc3RhdHVzPVwiT1VUU1RBTkRJTkdcIj5cclxuICAgICAgICAgICAgICAgIHtvdXRzdGFuZGluZz8ubWFwKChwYXltZW50LCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1QYXltZW50IGl0ZW09e3BheW1lbnR9IGhhbmRsZUNhcnQ9e2hhbmRsZUNhcnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvU3RhdHVzPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGFtb3VudCA+IDAgJiZcclxuICAgICAgICAgICAgICA8Qm90dG9tYmFyIGhhbmRsZVBheW1lbnQ9e2hhbmRsZVBheW1lbnR9Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsInVzZVJvdXRlciIsIkJveCIsIk5hdmJhciIsIkJvdHRvbWJhciIsIlN1bW1hcnkiLCJTdGF0dXMiLCJJdGVtUGF5bWVudCIsIlN0dWRlbnQiLCJzdHVkZW50Iiwibm93IiwiRGF0ZSIsInNldFN0dWRlbnQiLCJwYXltZW50cyIsInNldFBheW1lbnRzIiwiY2FydCIsInNldENhcnQiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJxdWVyeSIsImlkIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiZmV0Y2hTdHVkZW50IiwicmVzcG9uc2UiLCJ3aW5kb3ciLCJmZXRjaCIsInN0YXR1cyIsImpzb24iLCJmZXRjaFBheW1lbnRzIiwiZ2V0U3RhdHVzUGF5bWVudHMiLCJ2YWwiLCJ1bmRlZmluZWQiLCJwYXltZW50IiwiZmlsdGVyIiwiaXRlbSIsInBhaWQiLCJkdWUiLCJvdXRzdGFuZGluZyIsImhhbmRsZUNhcnQiLCJjaGVja0luZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwicHVzaCIsImdldFRvdGFsIiwidG90YWwiLCJyZWR1Y2UiLCJjdXJyZW50VmFsdWUiLCJuZXh0VmFsdWUiLCJwYXJzZUludCIsInByaWNlIiwiaGFuZGxlUGF5bWVudCIsImZvckVhY2giLCJpbmRleCIsInBheW1lbnRBcnIiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJwYXlpbiIsImRpdiIsInNjaG9vbCIsIm5hbWUiLCJsb2dvIiwic3giLCJmbGV4R3JvdyIsIm1hcmdpblkiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiY29ob3J0IiwibWFwIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/student/[id].js\n");

/***/ })

});