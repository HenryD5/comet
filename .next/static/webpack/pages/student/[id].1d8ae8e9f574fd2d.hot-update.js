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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Navbar/Navbar */ \"./components/Navbar/Navbar.js\");\n/* harmony import */ var _components_Bottombar_Bottombar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Bottombar/Bottombar */ \"./components/Bottombar/Bottombar.js\");\n/* harmony import */ var _components_Summary_Summary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Summary/Summary */ \"./components/Summary/Summary.js\");\n/* harmony import */ var _components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Payment/Status */ \"./components/Payment/Status.js\");\n/* harmony import */ var _components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Payment/ItemPayment */ \"./components/Payment/ItemPayment.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Student = function() {\n    var _this1 = _this;\n    var ref, ref1;\n    _s();\n    //state\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), student1 = ref2[0], setStudent = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), payments1 = ref3[0], setPayments = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cart = ref4[0], setCart = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), amount = ref5[0], setAmount = ref5[1];\n    // router - query - slug - id\n    var ref6 = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(), id = ref6.query.id;\n    //apis\n    var requestOptions = {\n        method: \"GET\",\n        headers: {\n            \"hash\": \"OcJn4jYChW\"\n        }\n    };\n    var fetchStudent = function() {\n        var _ref = _asyncToGenerator(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, student;\n            return C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!id) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return window.fetch(\"http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/\".concat(id, \"/\"), requestOptions);\n                    case 3:\n                        response = _ctx.sent;\n                        if (!(response.status === 200)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        student = _ctx.sent;\n                        setStudent(student);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchStudent() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchPayments = function() {\n        var _ref = _asyncToGenerator(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, payments;\n            return C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!id) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return window.fetch(\"http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/\".concat(id, \"/orders/\"), requestOptions);\n                    case 3:\n                        response = _ctx.sent;\n                        if (!(response.status === 200)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        payments = _ctx.sent;\n                        setPayments(payments);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchPayments() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchPayments();\n        fetchStudent();\n    }, [\n        id\n    ]);\n    // computed o reactive methods\n    var getStatusPayments = function(val) {\n        if (id && payments1 !== undefined) {\n            var payment = payments1.filter(function(item) {\n                return item.status === val;\n            });\n            return payment;\n        } else {\n            return [];\n        }\n    };\n    // PAID\n    var paid = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"PAID\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // DUE\n    var due = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"DUE\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // OUTSTANDING\n    var outstanding = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"OUTSTANDING\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // LOGIC PAYMENT\n    var handleCart = function(item) {\n        var checkIndex = cart.findIndex(function(val) {\n            return val.id === item.id;\n        });\n        checkIndex > -1 ? cart.splice(checkIndex, 1) : cart.push(item);\n        getTotal();\n    };\n    var getTotal = function() {\n        var total = (cart || []).reduce(function(currentValue, nextValue) {\n            return parseInt(currentValue) + parseInt(nextValue.price);\n        }, 0);\n        setAmount(total);\n    };\n    var handlePayment = function() {\n        cart.forEach(function(item) {\n            if (item.status !== \"PAID\") {\n                var checkIndex = payments1.findIndex(function(val) {\n                    return val.id === item.id;\n                });\n                console.log(\"checkIndex\", checkIndex);\n                if (checkIndex > -1) {\n                    console.log(\"aquiiii\");\n                    payments1.splice(checkIndex, 1);\n                    //payments[checkIndex].status = 'PAID'\n                    item.status = \"PAID\";\n                    setPayments({});\n                }\n            //item.quantity -= 1;\n            }\n        });\n        due;\n        console.log(\"IR A PAGAR!!\");\n        console.log(\"CART :\", cart);\n        console.log(\"PAYMENTS :\", payments1);\n        console.log(\"due\", due);\n    };\n    // RETURNS VIEWS\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                school: student1 === null || student1 === void 0 ? void 0 : (ref = student1.school) === null || ref === void 0 ? void 0 : ref.name,\n                logo: student1 === null || student1 === void 0 ? void 0 : (ref1 = student1.school) === null || ref1 === void 0 ? void 0 : ref1.logo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 114,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                sx: {\n                    flexGrow: 1,\n                    marginY: \"70px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Summary_Summary__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        name: (student1 === null || student1 === void 0 ? void 0 : student1.first_name) + \" \" + (student1 === null || student1 === void 0 ? void 0 : student1.last_name),\n                        cohort: student1 === null || student1 === void 0 ? void 0 : student1.cohort,\n                        amount: amount\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 117,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Pagadas\",\n                        status: \"PAID\",\n                        children: paid === null || paid === void 0 ? void 0 : paid.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 121,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 120,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 118,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Pendientes\",\n                        status: \"DUE\",\n                        children: due === null || due === void 0 ? void 0 : due.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment,\n                                    handleCart: handleCart\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 128,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 127,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 125,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Futuras\",\n                        status: \"OUTSTANDING\",\n                        children: outstanding === null || outstanding === void 0 ? void 0 : outstanding.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment,\n                                    handleCart: handleCart\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 135,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 134,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 132,\n                        columnNumber: 15\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, _this),\n            amount > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Bottombar_Bottombar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                handlePayment: handlePayment\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 142,\n                columnNumber: 15\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n        lineNumber: 113,\n        columnNumber: 9\n    }, _this);\n};\n_s(Student, \"ao+6X+Eagvt07oAqHTY/RNrs60c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Student;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Student);\nvar _c;\n$RefreshReg$(_c, \"Student\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Tzs7UUFRY1Asa0RBQVM7OztBQVI5Qk8sS0FBQUEsT0FBTztBQTBJZCwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0dWRlbnQvW2lkXS5qcz8zZDc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiQGNvbXBvbmVudHMvTmF2YmFyL05hdmJhclwiO1xyXG5pbXBvcnQgQm90dG9tYmFyIGZyb20gXCJAY29tcG9uZW50cy9Cb3R0b21iYXIvQm90dG9tYmFyXCI7XHJcbmltcG9ydCBTdW1tYXJ5IGZyb20gXCJAY29tcG9uZW50cy9TdW1tYXJ5L1N1bW1hcnlcIjtcclxuaW1wb3J0IFN0YXR1cyBmcm9tIFwiQGNvbXBvbmVudHMvUGF5bWVudC9TdGF0dXNcIjtcclxuaW1wb3J0IEl0ZW1QYXltZW50IGZyb20gXCJAY29tcG9uZW50cy9QYXltZW50L0l0ZW1QYXltZW50XCI7XHJcblxyXG4gY29uc3QgU3R1ZGVudCA9ICgpID0+IHtcclxuICAgIC8vc3RhdGVcclxuICAgIGNvbnN0IFtzdHVkZW50LCBzZXRTdHVkZW50XSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtwYXltZW50cywgc2V0UGF5bWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgXHJcbiAgICAvLyByb3V0ZXIgLSBxdWVyeSAtIHNsdWcgLSBpZFxyXG4gICAgY29uc3QgeyBxdWVyeSA6IHtpZH19ID0gdXNlUm91dGVyKClcclxuXHJcbiAgICAvL2FwaXNcclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczogeydoYXNoJzogJ09jSm40allDaFcnfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGZldGNoU3R1ZGVudCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LmZldGNoKGBodHRwOi8vZWMyLTMtMjM5LTIyMS03NC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbTo4MDAwL2FwaS92MS9zdHVkZW50cy8ke2lkfS9gLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3R1ZGVudCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgc2V0U3R1ZGVudChzdHVkZW50KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZmV0Y2hQYXltZW50cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LmZldGNoKGBodHRwOi8vZWMyLTMtMjM5LTIyMS03NC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbTo4MDAwL2FwaS92MS9zdHVkZW50cy8ke2lkfS9vcmRlcnMvYCwgcmVxdWVzdE9wdGlvbnMpO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBheW1lbnRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRQYXltZW50cyhwYXltZW50cyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZmV0Y2hQYXltZW50cygpO1xyXG4gICAgICBmZXRjaFN0dWRlbnQoKTtcclxuICAgIH0sIFtpZF0pO1xyXG5cclxuICAgIC8vIGNvbXB1dGVkIG8gcmVhY3RpdmUgbWV0aG9kc1xyXG4gICAgY29uc3QgZ2V0U3RhdHVzUGF5bWVudHMgPSAodmFsKSA9PiB7XHJcbiAgICAgIGlmKGlkICYmIHBheW1lbnRzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBwYXltZW50ID0gcGF5bWVudHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zdGF0dXMgPT09IHZhbClcclxuICAgICAgICByZXR1cm4gcGF5bWVudFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBQQUlEXHJcbiAgICBjb25zdCBwYWlkID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGF5bWVudCA9IGdldFN0YXR1c1BheW1lbnRzKCdQQUlEJylcclxuICAgICAgICByZXR1cm4gcGF5bWVudFxyXG4gICAgfSwgW3BheW1lbnRzXSk7XHJcbiAgICBcclxuICAgIC8vIERVRVxyXG4gICAgY29uc3QgZHVlID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBheW1lbnQgPSBnZXRTdGF0dXNQYXltZW50cygnRFVFJylcclxuICAgICAgcmV0dXJuIHBheW1lbnRcclxuICAgIH0sIFtwYXltZW50c10pO1xyXG5cclxuICAgIC8vIE9VVFNUQU5ESU5HXHJcbiAgICBjb25zdCBvdXRzdGFuZGluZyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXltZW50ID0gZ2V0U3RhdHVzUGF5bWVudHMoJ09VVFNUQU5ESU5HJylcclxuICAgICAgcmV0dXJuIHBheW1lbnRcclxuICAgIH0sIFtwYXltZW50c10pO1xyXG5cclxuICAgIC8vIExPR0lDIFBBWU1FTlRcclxuICAgIGNvbnN0IGhhbmRsZUNhcnQgPSAoaXRlbSkgPT4geyBcclxuICAgICAgY29uc3QgY2hlY2tJbmRleCA9IGNhcnQuZmluZEluZGV4KHZhbCA9PiB2YWwuaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgIGNoZWNrSW5kZXggPiAtMSA/IGNhcnQuc3BsaWNlKGNoZWNrSW5kZXgsIDEpIDpjYXJ0LnB1c2goaXRlbSlcclxuICAgICAgZ2V0VG90YWwoKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgZ2V0VG90YWwgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRvdGFsID0gKGNhcnQgfHwgW10pLnJlZHVjZSgoY3VycmVudFZhbHVlLCBuZXh0VmFsdWUpID0+IHtcclxuICAgICAgICAgIHJldHVybiBwYXJzZUludChjdXJyZW50VmFsdWUpICsgcGFyc2VJbnQobmV4dFZhbHVlLnByaWNlKTtcclxuICAgICAgfSwgMClcclxuICAgICAgc2V0QW1vdW50KHRvdGFsKVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlUGF5bWVudCA9ICgpID0+IHtcclxuICAgICAgY2FydC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uc3RhdHVzICE9PSAnUEFJRCcpIHtcclxuICAgICAgICAgIGxldCBjaGVja0luZGV4ID0gcGF5bWVudHMuZmluZEluZGV4KHZhbCA9PiB2YWwuaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tJbmRleCcsIGNoZWNrSW5kZXgpXHJcbiAgICAgICAgICBpZihjaGVja0luZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FxdWlpaWknKVxyXG4gICAgICAgICAgICBwYXltZW50cy5zcGxpY2UoY2hlY2tJbmRleCwgMSlcclxuICAgICAgICAgICAgLy9wYXltZW50c1tjaGVja0luZGV4XS5zdGF0dXMgPSAnUEFJRCdcclxuICAgICAgICAgICAgaXRlbS5zdGF0dXMgPSAnUEFJRCdcclxuICAgICAgICAgICAgc2V0UGF5bWVudHMoe30pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy9pdGVtLnF1YW50aXR5IC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZHVlXHJcbiAgICAgIGNvbnNvbGUubG9nKCdJUiBBIFBBR0FSISEnKVxyXG4gICAgICBjb25zb2xlLmxvZygnQ0FSVCA6JywgY2FydClcclxuICAgICAgY29uc29sZS5sb2coJ1BBWU1FTlRTIDonLCBwYXltZW50cylcclxuICAgICAgY29uc29sZS5sb2coJ2R1ZScsIGR1ZSlcclxuICAgIH1cclxuICAgIC8vIFJFVFVSTlMgVklFV1NcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE5hdmJhciBzY2hvb2w9e3N0dWRlbnQ/LnNjaG9vbD8ubmFtZX0gbG9nbz17c3R1ZGVudD8uc2Nob29sPy5sb2dvfSAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgbWFyZ2luWTogJzcwcHgnIH19PlxyXG4gICAgICAgICAgICAgIDxTdW1tYXJ5IG5hbWU9e3N0dWRlbnQ/LmZpcnN0X25hbWUgKyAnICcgK3N0dWRlbnQ/Lmxhc3RfbmFtZSB9IGNvaG9ydD17c3R1ZGVudD8uY29ob3J0fSBhbW91bnQ9e2Ftb3VudH0gLz5cclxuICAgICAgICAgICAgICA8U3RhdHVzIG5hbWU9XCJDdW90YXMgUGFnYWRhc1wiIHN0YXR1cz1cIlBBSURcIj5cclxuICAgICAgICAgICAgICAgIHtwYWlkPy5tYXAoKHBheW1lbnQsIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVBheW1lbnQgaXRlbT17cGF5bWVudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9TdGF0dXM+XHJcbiAgICAgICAgICAgICAgPFN0YXR1cyBuYW1lPVwiQ3VvdGFzIFBlbmRpZW50ZXNcIiBzdGF0dXM9XCJEVUVcIj5cclxuICAgICAgICAgICAgICAgIHtkdWU/Lm1hcCgocGF5bWVudCwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtUGF5bWVudCBpdGVtPXtwYXltZW50fSBoYW5kbGVDYXJ0PXtoYW5kbGVDYXJ0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1N0YXR1cz5cclxuICAgICAgICAgICAgICA8U3RhdHVzIG5hbWU9XCJDdW90YXMgRnV0dXJhc1wiIHN0YXR1cz1cIk9VVFNUQU5ESU5HXCI+XHJcbiAgICAgICAgICAgICAgICB7b3V0c3RhbmRpbmc/Lm1hcCgocGF5bWVudCwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtUGF5bWVudCBpdGVtPXtwYXltZW50fSBoYW5kbGVDYXJ0PXtoYW5kbGVDYXJ0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1N0YXR1cz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBhbW91bnQgPiAwICYmXHJcbiAgICAgICAgICAgICAgPEJvdHRvbWJhciBoYW5kbGVQYXltZW50PXtoYW5kbGVQYXltZW50fS8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJ1c2VSb3V0ZXIiLCJCb3giLCJOYXZiYXIiLCJCb3R0b21iYXIiLCJTdW1tYXJ5IiwiU3RhdHVzIiwiSXRlbVBheW1lbnQiLCJTdHVkZW50Iiwic3R1ZGVudCIsInNldFN0dWRlbnQiLCJwYXltZW50cyIsInNldFBheW1lbnRzIiwiY2FydCIsInNldENhcnQiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJxdWVyeSIsImlkIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiZmV0Y2hTdHVkZW50IiwicmVzcG9uc2UiLCJ3aW5kb3ciLCJmZXRjaCIsInN0YXR1cyIsImpzb24iLCJmZXRjaFBheW1lbnRzIiwiZ2V0U3RhdHVzUGF5bWVudHMiLCJ2YWwiLCJ1bmRlZmluZWQiLCJwYXltZW50IiwiZmlsdGVyIiwiaXRlbSIsInBhaWQiLCJkdWUiLCJvdXRzdGFuZGluZyIsImhhbmRsZUNhcnQiLCJjaGVja0luZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwicHVzaCIsImdldFRvdGFsIiwidG90YWwiLCJyZWR1Y2UiLCJjdXJyZW50VmFsdWUiLCJuZXh0VmFsdWUiLCJwYXJzZUludCIsInByaWNlIiwiaGFuZGxlUGF5bWVudCIsImZvckVhY2giLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic2Nob29sIiwibmFtZSIsImxvZ28iLCJzeCIsImZsZXhHcm93IiwibWFyZ2luWSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJjb2hvcnQiLCJtYXAiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/student/[id].js\n");

/***/ })

});