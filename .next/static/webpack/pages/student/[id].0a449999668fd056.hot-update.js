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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Navbar/Navbar */ \"./components/Navbar/Navbar.js\");\n/* harmony import */ var _components_Bottombar_Bottombar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Bottombar/Bottombar */ \"./components/Bottombar/Bottombar.js\");\n/* harmony import */ var _components_Summary_Summary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Summary/Summary */ \"./components/Summary/Summary.js\");\n/* harmony import */ var _components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Payment/Status */ \"./components/Payment/Status.js\");\n/* harmony import */ var _components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Payment/ItemPayment */ \"./components/Payment/ItemPayment.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Student = function() {\n    var _this1 = _this;\n    var ref, ref1;\n    _s();\n    //state\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), student1 = ref2[0], setStudent = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), payments1 = ref3[0], setPayments = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cart = ref4[0], setCart = ref4[1];\n    // router - query - slug - id\n    var ref5 = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(), id = ref5.query.id;\n    //apis\n    var requestOptions = {\n        method: \"GET\",\n        headers: {\n            \"hash\": \"OcJn4jYChW\"\n        }\n    };\n    var fetchStudent = function() {\n        var _ref = _asyncToGenerator(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, student;\n            return C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!id) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return window.fetch(\"http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/\".concat(id, \"/\"), requestOptions);\n                    case 3:\n                        response = _ctx.sent;\n                        if (!(response.status === 200)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        student = _ctx.sent;\n                        setStudent(student);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchStudent() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchPayments = function() {\n        var _ref = _asyncToGenerator(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, payments;\n            return C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!id) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return window.fetch(\"http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/\".concat(id, \"/orders/\"), requestOptions);\n                    case 3:\n                        response = _ctx.sent;\n                        if (!(response.status === 200)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        payments = _ctx.sent;\n                        setPayments(payments);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchPayments() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var suma = function() {\n        var data = [\n            {\n                title: \"One\",\n                prix: \"100\"\n            },\n            {\n                title: \"Two\",\n                prix: \"200\"\n            },\n            {\n                title: \"Three\",\n                prix: \"300\"\n            }\n        ];\n        console.log(data.reduce(function(a, v) {\n            return a = parseInt(a) + parseInt(v.prix);\n        }, 0));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchPayments();\n        fetchStudent();\n        suma();\n    }, [\n        id\n    ]);\n    // computed o reactive methods\n    var getStatusPayments = function(val) {\n        if (id && payments1 !== undefined) {\n            var payment = payments1.filter(function(item) {\n                return item.status === val;\n            });\n            return payment;\n        } else {\n            return [];\n        }\n    };\n    // PAID\n    var paid = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"PAID\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // DUE\n    var due = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"DUE\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // OUTSTANDING\n    var outstanding = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"OUTSTANDING\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // EMITS\n    var handleCart = function(item) {\n        var cartD = cart;\n        //console.log('ITEM:', item) \n        var checkIndex;\n        checkIndex = cart.findIndex(function(val) {\n            return val.id === item.id;\n        });\n        if (checkIndex > -1) {\n            cartD.splice(checkIndex, 1);\n            setCart(cartD);\n        } else {\n            cartD.push(item);\n            setCart(cartD);\n        }\n        getTotal();\n        console.log(\"CART:\", cart);\n        console.log(\"amount\", amount, getTotal);\n    };\n    var getTotal = function() {\n        return (cart || []).reduce(function(currentValue, nextValue) {\n            return currentValue + nextValue.price;\n        }, 0);\n    };\n    //const ul = (cart || []).reduce((a,v) =>  a = parseInt(a) + parseInt(v.price) , 0 )\n    var amount = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = 10;\n        return payment;\n    }, [\n        cart\n    ]);\n    var getCart = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = cart;\n        return payment;\n    }, [\n        cart\n    ]);\n    // RETURNS VIEWS\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                school: student1 === null || student1 === void 0 ? void 0 : (ref = student1.school) === null || ref === void 0 ? void 0 : ref.name,\n                logo: student1 === null || student1 === void 0 ? void 0 : (ref1 = student1.school) === null || ref1 === void 0 ? void 0 : ref1.logo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                sx: {\n                    flexGrow: 1,\n                    marginY: \"70px\"\n                },\n                children: [\n                    amount,\n                    \" \",\n                    getCart[0],\n                    \" \",\n                    getTotal,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Summary_Summary__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        name: (student1 === null || student1 === void 0 ? void 0 : student1.first_name) + \" \" + (student1 === null || student1 === void 0 ? void 0 : student1.last_name),\n                        cohort: student1 === null || student1 === void 0 ? void 0 : student1.cohort,\n                        amount: amount\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 125,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Pagadas\",\n                        status: \"PAID\",\n                        children: paid === null || paid === void 0 ? void 0 : paid.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 129,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 128,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 126,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Pendientes\",\n                        status: \"DUE\",\n                        children: due === null || due === void 0 ? void 0 : due.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment,\n                                    handleCart: handleCart\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 136,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 135,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 133,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Futuras\",\n                        status: \"OUTSTANDING\",\n                        children: outstanding === null || outstanding === void 0 ? void 0 : outstanding.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment,\n                                    handleCart: handleCart\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 143,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 142,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 140,\n                        columnNumber: 15\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 123,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Bottombar_Bottombar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 148,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n        lineNumber: 120,\n        columnNumber: 9\n    }, _this);\n};\n_s(Student, \"SsyLPct9mb5Ggl7WZgU59UzlSlI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Student;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Student);\nvar _c;\n$RefreshReg$(_c, \"Student\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1Q7Q0FDSjtHQTdJTUksT0FBTzs7UUFPY1Asa0RBQVM7OztBQVA5Qk8sS0FBQUEsT0FBTztBQStJZCwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0dWRlbnQvW2lkXS5qcz8zZDc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiQGNvbXBvbmVudHMvTmF2YmFyL05hdmJhclwiO1xyXG5pbXBvcnQgQm90dG9tYmFyIGZyb20gXCJAY29tcG9uZW50cy9Cb3R0b21iYXIvQm90dG9tYmFyXCI7XHJcbmltcG9ydCBTdW1tYXJ5IGZyb20gXCJAY29tcG9uZW50cy9TdW1tYXJ5L1N1bW1hcnlcIjtcclxuaW1wb3J0IFN0YXR1cyBmcm9tIFwiQGNvbXBvbmVudHMvUGF5bWVudC9TdGF0dXNcIjtcclxuaW1wb3J0IEl0ZW1QYXltZW50IGZyb20gXCJAY29tcG9uZW50cy9QYXltZW50L0l0ZW1QYXltZW50XCI7XHJcblxyXG4gY29uc3QgU3R1ZGVudCA9ICgpID0+IHtcclxuICAgIC8vc3RhdGVcclxuICAgIGNvbnN0IFtzdHVkZW50LCBzZXRTdHVkZW50XSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtwYXltZW50cywgc2V0UGF5bWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbiAgICAvLyByb3V0ZXIgLSBxdWVyeSAtIHNsdWcgLSBpZFxyXG4gICAgY29uc3QgeyBxdWVyeSA6IHtpZH19ID0gdXNlUm91dGVyKClcclxuXHJcbiAgICAvL2FwaXNcclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczogeydoYXNoJzogJ09jSm40allDaFcnfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGZldGNoU3R1ZGVudCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LmZldGNoKGBodHRwOi8vZWMyLTMtMjM5LTIyMS03NC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbTo4MDAwL2FwaS92MS9zdHVkZW50cy8ke2lkfS9gLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3R1ZGVudCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgc2V0U3R1ZGVudChzdHVkZW50KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZmV0Y2hQYXltZW50cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LmZldGNoKGBodHRwOi8vZWMyLTMtMjM5LTIyMS03NC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbTo4MDAwL2FwaS92MS9zdHVkZW50cy8ke2lkfS9vcmRlcnMvYCwgcmVxdWVzdE9wdGlvbnMpO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBheW1lbnRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRQYXltZW50cyhwYXltZW50cyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgICBcclxuICAgIGNvbnN0IHN1bWEgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBbXHJcbiAgICAgICAge3RpdGxlIDogXCJPbmVcIixwcml4OiBcIjEwMFwifSxcclxuICAgICAgICB7dGl0bGUgOiBcIlR3b1wiLHByaXg6XCIyMDBcIn0sXHJcbiAgICAgICAge3RpdGxlIDogXCJUaHJlZVwiLHByaXg6XCIzMDBcIn1cclxuICAgICAgXVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coKGRhdGEucmVkdWNlKChhLHYpID0+ICBhID0gcGFyc2VJbnQoYSkgKyBwYXJzZUludCh2LnByaXgpICwgMCApKSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZmV0Y2hQYXltZW50cygpO1xyXG4gICAgICBmZXRjaFN0dWRlbnQoKTtcclxuICAgICAgc3VtYSgpXHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICAvLyBjb21wdXRlZCBvIHJlYWN0aXZlIG1ldGhvZHNcclxuICAgIGNvbnN0IGdldFN0YXR1c1BheW1lbnRzID0gKHZhbCkgPT4ge1xyXG4gICAgICBpZihpZCAmJiBwYXltZW50cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgcGF5bWVudCA9IHBheW1lbnRzLmZpbHRlcihpdGVtID0+IGl0ZW0uc3RhdHVzID09PSB2YWwpXHJcbiAgICAgICAgcmV0dXJuIHBheW1lbnRcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gUEFJRFxyXG4gICAgY29uc3QgcGFpZCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnQgPSBnZXRTdGF0dXNQYXltZW50cygnUEFJRCcpXHJcbiAgICAgICAgcmV0dXJuIHBheW1lbnRcclxuICAgIH0sIFtwYXltZW50c10pO1xyXG4gICAgXHJcbiAgICAvLyBEVUVcclxuICAgIGNvbnN0IGR1ZSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXltZW50ID0gZ2V0U3RhdHVzUGF5bWVudHMoJ0RVRScpXHJcbiAgICAgIHJldHVybiBwYXltZW50XHJcbiAgICB9LCBbcGF5bWVudHNdKTtcclxuXHJcbiAgICAvLyBPVVRTVEFORElOR1xyXG4gICAgY29uc3Qgb3V0c3RhbmRpbmcgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgY29uc3QgcGF5bWVudCA9IGdldFN0YXR1c1BheW1lbnRzKCdPVVRTVEFORElORycpXHJcbiAgICAgIHJldHVybiBwYXltZW50XHJcbiAgICB9LCBbcGF5bWVudHNdKTtcclxuICAgIC8vIEVNSVRTXHJcbiAgICBjb25zdCBoYW5kbGVDYXJ0ID0gKGl0ZW0pID0+IHsgXHJcbiAgICAgIGNvbnN0IGNhcnREID0gY2FydFxyXG4gICAgICAvL2NvbnNvbGUubG9nKCdJVEVNOicsIGl0ZW0pIFxyXG4gICAgICBsZXQgY2hlY2tJbmRleFxyXG5cclxuICAgICAgY2hlY2tJbmRleCA9IGNhcnQuZmluZEluZGV4KHZhbCA9PiB2YWwuaWQgPT09IGl0ZW0uaWQpXHJcblxyXG4gICAgICBpZiAoY2hlY2tJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgY2FydEQuc3BsaWNlKGNoZWNrSW5kZXgsIDEpXHJcbiAgICAgICAgc2V0Q2FydChjYXJ0RClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXJ0RC5wdXNoKGl0ZW0pXHJcbiAgICAgICAgc2V0Q2FydChjYXJ0RClcclxuICAgICAgfVxyXG4gICAgICBnZXRUb3RhbCgpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdDQVJUOicsIGNhcnQpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdhbW91bnQnLCBhbW91bnQsIGdldFRvdGFsKSBcclxuICAgIH1cclxuICAgIGNvbnN0IGdldFRvdGFsID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gKGNhcnQgfHwgW10pLnJlZHVjZSgoY3VycmVudFZhbHVlLCBuZXh0VmFsdWUpID0+IHtcclxuICAgICAgICAgIHJldHVybiBjdXJyZW50VmFsdWUgKyBuZXh0VmFsdWUucHJpY2U7XHJcbiAgICAgIH0sIDApXHJcbiAgICB9O1xyXG4gICAgLy9jb25zdCB1bCA9IChjYXJ0IHx8IFtdKS5yZWR1Y2UoKGEsdikgPT4gIGEgPSBwYXJzZUludChhKSArIHBhcnNlSW50KHYucHJpY2UpICwgMCApXHJcbiAgICBjb25zdCBhbW91bnQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgY29uc3QgcGF5bWVudCA9IDEwXHJcbiAgICAgIHJldHVybiBwYXltZW50XHJcbiAgICB9LCBbY2FydF0pO1xyXG4gICAgY29uc3QgZ2V0Q2FydCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXltZW50ID0gY2FydFxyXG4gICAgICByZXR1cm4gcGF5bWVudFxyXG4gICAgfSwgW2NhcnRdKTtcclxuICAgIC8vIFJFVFVSTlMgVklFV1NcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE5hdmJhciBzY2hvb2w9e3N0dWRlbnQ/LnNjaG9vbD8ubmFtZX0gbG9nbz17c3R1ZGVudD8uc2Nob29sPy5sb2dvfSAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgbWFyZ2luWTogJzcwcHgnIH19PlxyXG4gICAgICAgICAgICB7YW1vdW50fSB7Z2V0Q2FydFswXX0ge2dldFRvdGFsfVxyXG4gICAgICAgICAgICAgIDxTdW1tYXJ5IG5hbWU9e3N0dWRlbnQ/LmZpcnN0X25hbWUgKyAnICcgK3N0dWRlbnQ/Lmxhc3RfbmFtZSB9IGNvaG9ydD17c3R1ZGVudD8uY29ob3J0fSBhbW91bnQ9e2Ftb3VudH0gLz5cclxuICAgICAgICAgICAgICA8U3RhdHVzIG5hbWU9XCJDdW90YXMgUGFnYWRhc1wiIHN0YXR1cz1cIlBBSURcIj5cclxuICAgICAgICAgICAgICAgIHtwYWlkPy5tYXAoKHBheW1lbnQsIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVBheW1lbnQgaXRlbT17cGF5bWVudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9TdGF0dXM+XHJcbiAgICAgICAgICAgICAgPFN0YXR1cyBuYW1lPVwiQ3VvdGFzIFBlbmRpZW50ZXNcIiBzdGF0dXM9XCJEVUVcIj5cclxuICAgICAgICAgICAgICAgIHtkdWU/Lm1hcCgocGF5bWVudCwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtUGF5bWVudCBpdGVtPXtwYXltZW50fSBoYW5kbGVDYXJ0PXtoYW5kbGVDYXJ0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1N0YXR1cz5cclxuICAgICAgICAgICAgICA8U3RhdHVzIG5hbWU9XCJDdW90YXMgRnV0dXJhc1wiIHN0YXR1cz1cIk9VVFNUQU5ESU5HXCI+XHJcbiAgICAgICAgICAgICAgICB7b3V0c3RhbmRpbmc/Lm1hcCgocGF5bWVudCwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtUGF5bWVudCBpdGVtPXtwYXltZW50fSBoYW5kbGVDYXJ0PXtoYW5kbGVDYXJ0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1N0YXR1cz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3R0b21iYXIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsInVzZVJvdXRlciIsIkJveCIsIk5hdmJhciIsIkJvdHRvbWJhciIsIlN1bW1hcnkiLCJTdGF0dXMiLCJJdGVtUGF5bWVudCIsIlN0dWRlbnQiLCJzdHVkZW50Iiwic2V0U3R1ZGVudCIsInBheW1lbnRzIiwic2V0UGF5bWVudHMiLCJjYXJ0Iiwic2V0Q2FydCIsInF1ZXJ5IiwiaWQiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJmZXRjaFN0dWRlbnQiLCJyZXNwb25zZSIsIndpbmRvdyIsImZldGNoIiwic3RhdHVzIiwianNvbiIsImZldGNoUGF5bWVudHMiLCJzdW1hIiwiZGF0YSIsInRpdGxlIiwicHJpeCIsImNvbnNvbGUiLCJsb2ciLCJyZWR1Y2UiLCJhIiwidiIsInBhcnNlSW50IiwiZ2V0U3RhdHVzUGF5bWVudHMiLCJ2YWwiLCJ1bmRlZmluZWQiLCJwYXltZW50IiwiZmlsdGVyIiwiaXRlbSIsInBhaWQiLCJkdWUiLCJvdXRzdGFuZGluZyIsImhhbmRsZUNhcnQiLCJjYXJ0RCIsImNoZWNrSW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJwdXNoIiwiZ2V0VG90YWwiLCJhbW91bnQiLCJjdXJyZW50VmFsdWUiLCJuZXh0VmFsdWUiLCJwcmljZSIsImdldENhcnQiLCJkaXYiLCJzY2hvb2wiLCJuYW1lIiwibG9nbyIsInN4IiwiZmxleEdyb3ciLCJtYXJnaW5ZIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImNvaG9ydCIsIm1hcCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/student/[id].js\n");

/***/ })

});