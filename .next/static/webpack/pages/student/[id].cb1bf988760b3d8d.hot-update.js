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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Navbar/Navbar */ \"./components/Navbar/Navbar.js\");\n/* harmony import */ var _components_Bottombar_Bottombar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Bottombar/Bottombar */ \"./components/Bottombar/Bottombar.js\");\n/* harmony import */ var _components_Summary_Summary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Summary/Summary */ \"./components/Summary/Summary.js\");\n/* harmony import */ var _components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Payment/Status */ \"./components/Payment/Status.js\");\n/* harmony import */ var _components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Payment/ItemPayment */ \"./components/Payment/ItemPayment.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Student = function() {\n    var _this1 = _this;\n    var ref, ref1;\n    _s();\n    // date\n    var now = new Date();\n    //state\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), student1 = ref2[0], setStudent = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), payments1 = ref3[0], setPayments = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cart = ref4[0], setCart = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), amount = ref5[0], setAmount = ref5[1];\n    // router - query - slug - id\n    var ref6 = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(), id = ref6.query.id;\n    //apis\n    var requestOptions = {\n        method: \"GET\",\n        headers: {\n            \"hash\": \"OcJn4jYChW\"\n        }\n    };\n    var fetchStudent = function() {\n        var _ref = _asyncToGenerator(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, student;\n            return C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!id) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return window.fetch(\"http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/\".concat(id, \"/\"), requestOptions);\n                    case 3:\n                        response = _ctx.sent;\n                        if (!(response.status === 200)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        student = _ctx.sent;\n                        setStudent(student);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchStudent() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchPayments = function() {\n        var _ref = _asyncToGenerator(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, payments;\n            return C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!id) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return window.fetch(\"http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/\".concat(id, \"/orders/\"), requestOptions);\n                    case 3:\n                        response = _ctx.sent;\n                        if (!(response.status === 200)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        payments = _ctx.sent;\n                        setPayments(payments);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchPayments() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchPayments();\n        fetchStudent();\n    }, [\n        id\n    ]);\n    // computed o reactive methods\n    var getStatusPayments = function(val) {\n        if (id && payments1 !== undefined) {\n            var payment = payments1.filter(function(item) {\n                return item.status === val;\n            });\n            return payment;\n        } else {\n            return [];\n        }\n    };\n    // PAID\n    var paid = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"PAID\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // DUE\n    var due = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"DUE\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // OUTSTANDING\n    var outstanding = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"OUTSTANDING\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // LOGIC PAYMENT\n    var handleCart = function(item, checked) {\n        console.log(\"checked\", checked);\n        if (checked) {\n            var checkIndex = cart.findIndex(function(val) {\n                return val.id === item.id;\n            });\n            checkIndex > -1 ? cart.splice(checkIndex, 1) : cart.push(item);\n            getTotal();\n        }\n    };\n    var getTotal = function() {\n        var total = (cart || []).reduce(function(currentValue, nextValue) {\n            return parseInt(currentValue) + parseInt(nextValue.price);\n        }, 0);\n        setAmount(total);\n    };\n    var handlePayment = function() {\n        var paymentArr = JSON.parse(JSON.stringify(payments1));\n        var cartD = JSON.parse(JSON.stringify(cart));\n        cartD.forEach(function(item) {\n            if (item.status !== \"PAID\") {\n                var checkIndex = paymentArr.findIndex(function(val) {\n                    return val.id === item.id;\n                });\n                if (checkIndex > -1) {\n                    paymentArr.splice(checkIndex, 1);\n                    item.status = \"PAID\";\n                    item.payin = {\n                        \"created\": \"25-04-17\",\n                        \"id\": \"2d724299-e12d-4153-aa86-61636f0f441d\",\n                        \"status\": \"approved\"\n                    };\n                    paymentArr.push(item);\n                    handleCart(item, true);\n                }\n            }\n        });\n        setPayments(paymentArr);\n    };\n    // RETURNS VIEWS\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                school: student1 === null || student1 === void 0 ? void 0 : (ref = student1.school) === null || ref === void 0 ? void 0 : ref.name,\n                logo: student1 === null || student1 === void 0 ? void 0 : (ref1 = student1.school) === null || ref1 === void 0 ? void 0 : ref1.logo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 119,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                sx: {\n                    flexGrow: 1,\n                    marginY: \"70px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Summary_Summary__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        name: (student1 === null || student1 === void 0 ? void 0 : student1.first_name) + \" \" + (student1 === null || student1 === void 0 ? void 0 : student1.last_name),\n                        cohort: student1 === null || student1 === void 0 ? void 0 : student1.cohort,\n                        amount: amount\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 122,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Pagadas\",\n                        status: \"PAID\",\n                        children: paid === null || paid === void 0 ? void 0 : paid.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 126,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 125,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 123,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Pendientes\",\n                        status: \"DUE\",\n                        children: due === null || due === void 0 ? void 0 : due.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment,\n                                    handleCart: handleCart\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 133,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 132,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 130,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Futuras\",\n                        status: \"OUTSTANDING\",\n                        children: outstanding === null || outstanding === void 0 ? void 0 : outstanding.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment,\n                                    handleCart: handleCart\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 140,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 139,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 137,\n                        columnNumber: 15\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, _this),\n            amount > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Bottombar_Bottombar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                handlePayment: handlePayment\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 147,\n                columnNumber: 15\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n        lineNumber: 118,\n        columnNumber: 9\n    }, _this);\n};\n_s(Student, \"ao+6X+Eagvt07oAqHTY/RNrs60c=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Student;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Student);\nvar _c;\n$RefreshReg$(_c, \"Student\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHOytCQUQvQ2tDLEdBQUc7Ozs7c0NBRVA7eUJBQ1QsQ0FBQzs7Ozs7NkJBQ0s7Ozs7OztxQkFDTDtZQUVKekQsTUFBTSxHQUFHLENBQUMsa0JBQ1YsOERBQUNiLHVFQUFTO2dCQUFDbUQsYUFBYSxFQUFFQSxhQUFhOzs7OztxQkFBRzs7Ozs7O2FBRTFDLENBQ1Q7Q0FDSjtHQTdJTS9DLE9BQU87O1FBVWNQLGtEQUFTOzs7QUFWOUJPLEtBQUFBLE9BQU87QUErSWQsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdHVkZW50L1tpZF0uanM/M2Q3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIkBjb21wb25lbnRzL05hdmJhci9OYXZiYXJcIjtcclxuaW1wb3J0IEJvdHRvbWJhciBmcm9tIFwiQGNvbXBvbmVudHMvQm90dG9tYmFyL0JvdHRvbWJhclwiO1xyXG5pbXBvcnQgU3VtbWFyeSBmcm9tIFwiQGNvbXBvbmVudHMvU3VtbWFyeS9TdW1tYXJ5XCI7XHJcbmltcG9ydCBTdGF0dXMgZnJvbSBcIkBjb21wb25lbnRzL1BheW1lbnQvU3RhdHVzXCI7XHJcbmltcG9ydCBJdGVtUGF5bWVudCBmcm9tIFwiQGNvbXBvbmVudHMvUGF5bWVudC9JdGVtUGF5bWVudFwiO1xyXG5cclxuIGNvbnN0IFN0dWRlbnQgPSAoKSA9PiB7XHJcbiAgICAvLyBkYXRlXHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy9zdGF0ZVxyXG4gICAgY29uc3QgW3N0dWRlbnQsIHNldFN0dWRlbnRdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW3BheW1lbnRzLCBzZXRQYXltZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBcclxuICAgIC8vIHJvdXRlciAtIHF1ZXJ5IC0gc2x1ZyAtIGlkXHJcbiAgICBjb25zdCB7IHF1ZXJ5IDoge2lkfX0gPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIC8vYXBpc1xyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7J2hhc2gnOiAnT2NKbjRqWUNoVyd9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZmV0Y2hTdHVkZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3cuZmV0Y2goYGh0dHA6Ly9lYzItMy0yMzktMjIxLTc0LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tOjgwMDAvYXBpL3YxL3N0dWRlbnRzLyR7aWR9L2AsIHJlcXVlc3RPcHRpb25zKTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHVkZW50ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRTdHVkZW50KHN0dWRlbnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBmZXRjaFBheW1lbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3cuZmV0Y2goYGh0dHA6Ly9lYzItMy0yMzktMjIxLTc0LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tOjgwMDAvYXBpL3YxL3N0dWRlbnRzLyR7aWR9L29yZGVycy9gLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY29uc3QgcGF5bWVudHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldFBheW1lbnRzKHBheW1lbnRzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBmZXRjaFBheW1lbnRzKCk7XHJcbiAgICAgIGZldGNoU3R1ZGVudCgpO1xyXG4gICAgfSwgW2lkXSk7XHJcblxyXG4gICAgLy8gY29tcHV0ZWQgbyByZWFjdGl2ZSBtZXRob2RzXHJcbiAgICBjb25zdCBnZXRTdGF0dXNQYXltZW50cyA9ICh2YWwpID0+IHtcclxuICAgICAgaWYoaWQgJiYgcGF5bWVudHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnQgPSBwYXltZW50cy5maWx0ZXIoaXRlbSA9PiBpdGVtLnN0YXR1cyA9PT0gdmFsKVxyXG4gICAgICAgIHJldHVybiBwYXltZW50XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFBBSURcclxuICAgIGNvbnN0IHBhaWQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBjb25zdCBwYXltZW50ID0gZ2V0U3RhdHVzUGF5bWVudHMoJ1BBSUQnKVxyXG4gICAgICAgIHJldHVybiBwYXltZW50XHJcbiAgICB9LCBbcGF5bWVudHNdKTtcclxuICAgIFxyXG4gICAgLy8gRFVFXHJcbiAgICBjb25zdCBkdWUgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgY29uc3QgcGF5bWVudCA9IGdldFN0YXR1c1BheW1lbnRzKCdEVUUnKVxyXG4gICAgICByZXR1cm4gcGF5bWVudFxyXG4gICAgfSwgW3BheW1lbnRzXSk7XHJcblxyXG4gICAgLy8gT1VUU1RBTkRJTkdcclxuICAgIGNvbnN0IG91dHN0YW5kaW5nID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBheW1lbnQgPSBnZXRTdGF0dXNQYXltZW50cygnT1VUU1RBTkRJTkcnKVxyXG4gICAgICByZXR1cm4gcGF5bWVudFxyXG4gICAgfSwgW3BheW1lbnRzXSk7XHJcblxyXG4gICAgLy8gTE9HSUMgUEFZTUVOVFxyXG4gICAgY29uc3QgaGFuZGxlQ2FydCA9IChpdGVtLCBjaGVja2VkKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjaGVja2VkJywgY2hlY2tlZCkgXHJcbiAgICAgIGlmKGNoZWNrZWQpIHtcclxuICAgICAgICBjb25zdCBjaGVja0luZGV4ID0gY2FydC5maW5kSW5kZXgodmFsID0+IHZhbC5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBjaGVja0luZGV4ID4gLTEgPyBjYXJ0LnNwbGljZShjaGVja0luZGV4LCAxKSA6IGNhcnQucHVzaChpdGVtKVxyXG4gICAgICAgIGdldFRvdGFsKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgZ2V0VG90YWwgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRvdGFsID0gKGNhcnQgfHwgW10pLnJlZHVjZSgoY3VycmVudFZhbHVlLCBuZXh0VmFsdWUpID0+IHtcclxuICAgICAgICAgIHJldHVybiBwYXJzZUludChjdXJyZW50VmFsdWUpICsgcGFyc2VJbnQobmV4dFZhbHVlLnByaWNlKTtcclxuICAgICAgfSwgMClcclxuICAgICAgc2V0QW1vdW50KHRvdGFsKVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlUGF5bWVudCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgcGF5bWVudEFyciA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocGF5bWVudHMpKVxyXG4gICAgICBjb25zdCBjYXJ0RCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY2FydCkpXHJcbiAgICAgIGNhcnRELmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5zdGF0dXMgIT09ICdQQUlEJykge1xyXG4gICAgICAgICAgbGV0IGNoZWNrSW5kZXggPSBwYXltZW50QXJyLmZpbmRJbmRleCh2YWwgPT4gdmFsLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgICAgaWYoY2hlY2tJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHBheW1lbnRBcnIuc3BsaWNlKGNoZWNrSW5kZXgsIDEpXHJcbiAgICAgICAgICAgIGl0ZW0uc3RhdHVzID0gJ1BBSUQnXHJcbiAgICAgICAgICAgIGl0ZW0ucGF5aW4gPSB7XHJcbiAgICAgICAgICAgICAgJ2NyZWF0ZWQnOiAnMjUtMDQtMTcnLFxyXG4gICAgICAgICAgICAgICdpZCc6IFwiMmQ3MjQyOTktZTEyZC00MTUzLWFhODYtNjE2MzZmMGY0NDFkXCIsXHJcbiAgICAgICAgICAgICAgJ3N0YXR1cyc6IFwiYXBwcm92ZWRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBheW1lbnRBcnIucHVzaChpdGVtKVxyXG4gICAgICAgICAgICBoYW5kbGVDYXJ0KGl0ZW0sIHRydWUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgc2V0UGF5bWVudHMocGF5bWVudEFycik7XHJcbiAgICB9XHJcbiAgICAvLyBSRVRVUk5TIFZJRVdTXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgc2Nob29sPXtzdHVkZW50Py5zY2hvb2w/Lm5hbWV9IGxvZ289e3N0dWRlbnQ/LnNjaG9vbD8ubG9nb30gLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEsIG1hcmdpblk6ICc3MHB4JyB9fT5cclxuICAgICAgICAgICAgICA8U3VtbWFyeSBuYW1lPXtzdHVkZW50Py5maXJzdF9uYW1lICsgJyAnICtzdHVkZW50Py5sYXN0X25hbWUgfSBjb2hvcnQ9e3N0dWRlbnQ/LmNvaG9ydH0gYW1vdW50PXthbW91bnR9IC8+XHJcbiAgICAgICAgICAgICAgPFN0YXR1cyBuYW1lPVwiQ3VvdGFzIFBhZ2FkYXNcIiBzdGF0dXM9XCJQQUlEXCI+XHJcbiAgICAgICAgICAgICAgICB7cGFpZD8ubWFwKChwYXltZW50LCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1QYXltZW50IGl0ZW09e3BheW1lbnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvU3RhdHVzPlxyXG4gICAgICAgICAgICAgIDxTdGF0dXMgbmFtZT1cIkN1b3RhcyBQZW5kaWVudGVzXCIgc3RhdHVzPVwiRFVFXCI+XHJcbiAgICAgICAgICAgICAgICB7ZHVlPy5tYXAoKHBheW1lbnQsIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVBheW1lbnQgaXRlbT17cGF5bWVudH0gaGFuZGxlQ2FydD17aGFuZGxlQ2FydH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9TdGF0dXM+XHJcbiAgICAgICAgICAgICAgPFN0YXR1cyBuYW1lPVwiQ3VvdGFzIEZ1dHVyYXNcIiBzdGF0dXM9XCJPVVRTVEFORElOR1wiPlxyXG4gICAgICAgICAgICAgICAge291dHN0YW5kaW5nPy5tYXAoKHBheW1lbnQsIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVBheW1lbnQgaXRlbT17cGF5bWVudH0gaGFuZGxlQ2FydD17aGFuZGxlQ2FydH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9TdGF0dXM+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYW1vdW50ID4gMCAmJlxyXG4gICAgICAgICAgICAgIDxCb3R0b21iYXIgaGFuZGxlUGF5bWVudD17aGFuZGxlUGF5bWVudH0vPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0dWRlbnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwidXNlUm91dGVyIiwiQm94IiwiTmF2YmFyIiwiQm90dG9tYmFyIiwiU3VtbWFyeSIsIlN0YXR1cyIsIkl0ZW1QYXltZW50IiwiU3R1ZGVudCIsInN0dWRlbnQiLCJub3ciLCJEYXRlIiwic2V0U3R1ZGVudCIsInBheW1lbnRzIiwic2V0UGF5bWVudHMiLCJjYXJ0Iiwic2V0Q2FydCIsImFtb3VudCIsInNldEFtb3VudCIsInF1ZXJ5IiwiaWQiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJmZXRjaFN0dWRlbnQiLCJyZXNwb25zZSIsIndpbmRvdyIsImZldGNoIiwic3RhdHVzIiwianNvbiIsImZldGNoUGF5bWVudHMiLCJnZXRTdGF0dXNQYXltZW50cyIsInZhbCIsInVuZGVmaW5lZCIsInBheW1lbnQiLCJmaWx0ZXIiLCJpdGVtIiwicGFpZCIsImR1ZSIsIm91dHN0YW5kaW5nIiwiaGFuZGxlQ2FydCIsImNoZWNrZWQiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tJbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsInB1c2giLCJnZXRUb3RhbCIsInRvdGFsIiwicmVkdWNlIiwiY3VycmVudFZhbHVlIiwibmV4dFZhbHVlIiwicGFyc2VJbnQiLCJwcmljZSIsImhhbmRsZVBheW1lbnQiLCJwYXltZW50QXJyIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiY2FydEQiLCJmb3JFYWNoIiwicGF5aW4iLCJkaXYiLCJzY2hvb2wiLCJuYW1lIiwibG9nbyIsInN4IiwiZmxleEdyb3ciLCJtYXJnaW5ZIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImNvaG9ydCIsIm1hcCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/student/[id].js\n");

/***/ })

});