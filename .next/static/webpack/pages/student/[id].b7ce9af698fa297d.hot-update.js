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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Navbar/Navbar */ \"./components/Navbar/Navbar.js\");\n/* harmony import */ var _components_Bottombar_Bottombar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Bottombar/Bottombar */ \"./components/Bottombar/Bottombar.js\");\n/* harmony import */ var _components_Summary_Summary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Summary/Summary */ \"./components/Summary/Summary.js\");\n/* harmony import */ var _components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Payment/Status */ \"./components/Payment/Status.js\");\n/* harmony import */ var _components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Payment/ItemPayment */ \"./components/Payment/ItemPayment.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Student = function() {\n    var _this1 = _this;\n    var ref, ref1;\n    _s();\n    //state\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), student1 = ref2[0], setStudent = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), payments1 = ref3[0], setPayments = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cart = ref4[0], setCart = ref4[1];\n    // router - query - slug - id\n    var ref5 = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(), id = ref5.query.id;\n    //apis\n    var requestOptions = {\n        method: \"GET\",\n        headers: {\n            \"hash\": \"OcJn4jYChW\"\n        }\n    };\n    var fetchStudent = function() {\n        var _ref = _asyncToGenerator(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, student;\n            return C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!id) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return window.fetch(\"http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/\".concat(id, \"/\"), requestOptions);\n                    case 3:\n                        response = _ctx.sent;\n                        if (!(response.status === 200)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        student = _ctx.sent;\n                        setStudent(student);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchStudent() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchPayments = function() {\n        var _ref = _asyncToGenerator(C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, payments;\n            return C_Users_Henry_Documents_PROJECTS_comet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!id) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return window.fetch(\"http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/\".concat(id, \"/orders/\"), requestOptions);\n                    case 3:\n                        response = _ctx.sent;\n                        if (!(response.status === 200)) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        payments = _ctx.sent;\n                        setPayments(payments);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchPayments() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var suma = function() {\n        var data = [\n            {\n                title: \"One\",\n                prix: \"100\"\n            },\n            {\n                title: \"Two\",\n                prix: \"200\"\n            },\n            {\n                title: \"Three\",\n                prix: \"300\"\n            }\n        ];\n        console.log(data.reduce(function(a, v) {\n            return a = parseInt(a) + parseInt(v.prix);\n        }, 0));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchPayments();\n        fetchStudent();\n        suma();\n    }, [\n        id\n    ]);\n    // computed o reactive methods\n    var getStatusPayments = function(val) {\n        if (id && payments1 !== undefined) {\n            var payment = payments1.filter(function(item) {\n                return item.status === val;\n            });\n            return payment;\n        } else {\n            return [];\n        }\n    };\n    // PAID\n    var paid = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"PAID\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // DUE\n    var due = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"DUE\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // OUTSTANDING\n    var outstanding = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = getStatusPayments(\"OUTSTANDING\");\n        return payment;\n    }, [\n        payments1\n    ]);\n    // EMITS\n    var handleCart = function(item) {\n        var cartD = cart;\n        //console.log('ITEM:', item) \n        var checkIndex;\n        checkIndex = cart.findIndex(function(val) {\n            return val.id === item.id;\n        });\n        if (checkIndex > -1) {\n            cartD.splice(checkIndex, 1);\n            setCart(cartD);\n        } else {\n            //cartD.push(item)\n            setCart({\n                item: item\n            });\n        }\n        console.log(\"CART:\", cart);\n        console.log(\"amount\", amount);\n    };\n    var getTotal = function() {\n        return (cart || []).reduce(function(currentValue, nextValue) {\n            return currentValue + nextValue.quantity * nextValue.price;\n        }, 0);\n    };\n    //const ul = (cart || []).reduce((a,v) =>  a = parseInt(a) + parseInt(v.price) , 0 )\n    var amount = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = 10;\n        return payment;\n    }, [\n        cart\n    ]);\n    var getCart = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        var payment = cart;\n        return payment;\n    }, [\n        cart\n    ]);\n    // RETURNS VIEWS\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                school: student1 === null || student1 === void 0 ? void 0 : (ref = student1.school) === null || ref === void 0 ? void 0 : ref.name,\n                logo: student1 === null || student1 === void 0 ? void 0 : (ref1 = student1.school) === null || ref1 === void 0 ? void 0 : ref1.logo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 120,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                sx: {\n                    flexGrow: 1,\n                    marginY: \"70px\"\n                },\n                children: [\n                    amount,\n                    \" \",\n                    getCart[0],\n                    \" \",\n                    ul,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Summary_Summary__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        name: (student1 === null || student1 === void 0 ? void 0 : student1.first_name) + \" \" + (student1 === null || student1 === void 0 ? void 0 : student1.last_name),\n                        cohort: student1 === null || student1 === void 0 ? void 0 : student1.cohort,\n                        amount: amount\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 124,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Pagadas\",\n                        status: \"PAID\",\n                        children: paid === null || paid === void 0 ? void 0 : paid.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 128,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 127,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 125,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Pendientes\",\n                        status: \"DUE\",\n                        children: due === null || due === void 0 ? void 0 : due.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment,\n                                    handleCart: handleCart\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 135,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 134,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 132,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_Status__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        name: \"Cuotas Futuras\",\n                        status: \"OUTSTANDING\",\n                        children: outstanding === null || outstanding === void 0 ? void 0 : outstanding.map(function(payment, key) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Payment_ItemPayment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    item: payment,\n                                    handleCart: handleCart\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                    lineNumber: 142,\n                                    columnNumber: 25\n                                }, _this1)\n                            }, key, false, {\n                                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                                lineNumber: 141,\n                                columnNumber: 21\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                        lineNumber: 139,\n                        columnNumber: 15\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 122,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Bottombar_Bottombar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n                lineNumber: 147,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Henry\\\\Documents\\\\PROJECTS\\\\comet\\\\pages\\\\student\\\\[id].js\",\n        lineNumber: 119,\n        columnNumber: 9\n    }, _this);\n};\n_s(Student, \"SsyLPct9mb5Ggl7WZgU59UzlSlI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Student;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Student);\nvar _c;\n$RefreshReg$(_c, \"Student\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdHVkZW50L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJEO0FBQ25CO0FBQ0o7QUFDVztBQUNTO0FBQ047QUFDRjtBQUNVOztBQUV6RCxJQUFNVyxPQUFPLEdBQUcsV0FBTTs7UUE4R0tDLEdBQWUsRUFBY0EsSUFBZTs7SUE3R3BFLE9BQU87SUFDUCxJQUE4QlYsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVg5QyxRQVdrQixHQUFnQkEsSUFBWSxHQUE1QixFQVhsQixVQVc4QixHQUFJQSxJQUFZLEdBQWhCO0lBQzFCLElBQWdDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBWmhELFNBWW1CLEdBQWlCQSxJQUFZLEdBQTdCLEVBWm5CLFdBWWdDLEdBQUlBLElBQVksR0FBaEI7SUFDNUIsSUFBd0JBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFieEMsSUFhZSxHQUFhQSxJQUFZLEdBQXpCLEVBYmYsT0Fhd0IsR0FBSUEsSUFBWSxHQUFoQjtJQUVwQiw2QkFBNkI7SUFDN0IsSUFBd0JFLElBQVcsR0FBWEEsc0RBQVMsRUFBRSxFQUEzQmMsRUFBVyxHQUFLZCxJQUFXLENBQTNCYyxLQUFLLENBQUlDLEVBQUU7SUFFbkIsTUFBTTtJQUNOLElBQU1DLGNBQWMsR0FBRztRQUNuQkMsTUFBTSxFQUFFLEtBQUs7UUFDYkMsT0FBTyxFQUFFO1lBQUMsTUFBTSxFQUFFLFlBQVk7U0FBQztLQUNsQztJQUNELElBQU1DLFlBQVk7bUJBQUcsdUxBQVk7Z0JBRXJCQyxRQUFRLEVBRU5aLE9BQU87Ozs7NEJBSGJPLENBQUFBLEVBQUU7Ozs7OytCQUNtQk0sTUFBTSxDQUFDQyxLQUFLLENBQUMsdUVBQXNFLENBQUssTUFBQyxDQUFKUCxFQUFFLEVBQUMsR0FBQyxDQUFDLEVBQUVDLGNBQWMsQ0FBQzs7d0JBQTVISSxRQUFRLFlBQW9IOzRCQUM5SEEsQ0FBQUEsQ0FBQUEsUUFBUSxDQUFDRyxNQUFNLEtBQUssR0FBRzs7Ozs7K0JBQ0hILFFBQVEsQ0FBQ0ksSUFBSSxFQUFFOzt3QkFBL0JoQixPQUFPLFlBQXdCO3dCQUNyQ0MsVUFBVSxDQUFDRCxPQUFPLENBQUMsQ0FBQzs7Ozs7O1NBRzNCO3dCQVJLVyxZQUFZOzs7T0FRakI7SUFDRCxJQUFNTSxhQUFhO21CQUFHLHVMQUFZO2dCQUV0QkwsUUFBUSxFQUVOVixRQUFROzs7OzRCQUhkSyxDQUFBQSxFQUFFOzs7OzsrQkFDbUJNLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLHVFQUFzRSxDQUFLLE1BQVEsQ0FBWFAsRUFBRSxFQUFDLFVBQVEsQ0FBQyxFQUFFQyxjQUFjLENBQUM7O3dCQUFuSUksUUFBUSxZQUEySDs0QkFDcklBLENBQUFBLENBQUFBLFFBQVEsQ0FBQ0csTUFBTSxLQUFLLEdBQUc7Ozs7OytCQUNGSCxRQUFRLENBQUNJLElBQUksRUFBRTs7d0JBQWhDZCxRQUFRLFlBQXdCO3dCQUN0Q0MsV0FBVyxDQUFDRCxRQUFRLENBQUMsQ0FBQzs7Ozs7O1NBRzdCO3dCQVJLZSxhQUFhOzs7T0FRbEI7SUFFRCxJQUFNQyxJQUFJLEdBQUcsV0FBTTtRQUNqQixJQUFNQyxJQUFJLEdBQUc7WUFDWDtnQkFBQ0MsS0FBSyxFQUFHLEtBQUs7Z0JBQUNDLElBQUksRUFBRSxLQUFLO2FBQUM7WUFDM0I7Z0JBQUNELEtBQUssRUFBRyxLQUFLO2dCQUFDQyxJQUFJLEVBQUMsS0FBSzthQUFDO1lBQzFCO2dCQUFDRCxLQUFLLEVBQUcsT0FBTztnQkFBQ0MsSUFBSSxFQUFDLEtBQUs7YUFBQztTQUM3QjtRQUVEQyxPQUFPLENBQUNDLEdBQUcsQ0FBRUosSUFBSSxDQUFDSyxNQUFNLENBQUMsU0FBQ0MsQ0FBQyxFQUFDQyxDQUFDO21CQUFNRCxDQUFDLEdBQUdFLFFBQVEsQ0FBQ0YsQ0FBQyxDQUFDLEdBQUdFLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDTCxJQUFJLENBQUM7U0FBQSxFQUFHLENBQUMsQ0FBRSxDQUFFO0tBQzlFO0lBRURoQyxnREFBUyxDQUFDLFdBQU07UUFDZDRCLGFBQWEsRUFBRSxDQUFDO1FBQ2hCTixZQUFZLEVBQUUsQ0FBQztRQUNmTyxJQUFJLEVBQUU7S0FDUCxFQUFFO1FBQUNYLEVBQUU7S0FBQyxDQUFDLENBQUM7SUFFVCw4QkFBOEI7SUFDOUIsSUFBTXFCLGlCQUFpQixHQUFHLFNBQUNDLEdBQUcsRUFBSztRQUNqQyxJQUFHdEIsRUFBRSxJQUFJTCxTQUFRLEtBQUs0QixTQUFTLEVBQUU7WUFDL0IsSUFBTUMsT0FBTyxHQUFHN0IsU0FBUSxDQUFDOEIsTUFBTSxDQUFDQyxTQUFBQSxJQUFJO3VCQUFJQSxJQUFJLENBQUNsQixNQUFNLEtBQUtjLEdBQUc7YUFBQSxDQUFDO1lBQzVELE9BQU9FLE9BQU87U0FDZixNQUFNO1lBQ0wsT0FBTyxFQUFFO1NBQ1Y7S0FDRjtJQUNELE9BQU87SUFDUCxJQUFNRyxJQUFJLEdBQUczQyw4Q0FBTyxDQUFDLFdBQU07UUFDdkIsSUFBTXdDLE9BQU8sR0FBR0gsaUJBQWlCLENBQUMsTUFBTSxDQUFDO1FBQ3pDLE9BQU9HLE9BQU87S0FDakIsRUFBRTtRQUFDN0IsU0FBUTtLQUFDLENBQUM7SUFFZCxNQUFNO0lBQ04sSUFBTWlDLEdBQUcsR0FBRzVDLDhDQUFPLENBQUMsV0FBTTtRQUN4QixJQUFNd0MsT0FBTyxHQUFHSCxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7UUFDeEMsT0FBT0csT0FBTztLQUNmLEVBQUU7UUFBQzdCLFNBQVE7S0FBQyxDQUFDO0lBRWQsY0FBYztJQUNkLElBQU1rQyxXQUFXLEdBQUc3Qyw4Q0FBTyxDQUFDLFdBQU07UUFDaEMsSUFBTXdDLE9BQU8sR0FBR0gsaUJBQWlCLENBQUMsYUFBYSxDQUFDO1FBQ2hELE9BQU9HLE9BQU87S0FDZixFQUFFO1FBQUM3QixTQUFRO0tBQUMsQ0FBQztJQUNkLFFBQVE7SUFDUixJQUFNbUMsVUFBVSxHQUFHLFNBQUNKLElBQUksRUFBSztRQUMzQixJQUFNSyxLQUFLLEdBQUdsQyxJQUFJO1FBQ2xCLDZCQUE2QjtRQUM3QixJQUFJbUMsVUFBVTtRQUVkQSxVQUFVLEdBQUduQyxJQUFJLENBQUNvQyxTQUFTLENBQUNYLFNBQUFBLEdBQUc7bUJBQUlBLEdBQUcsQ0FBQ3RCLEVBQUUsS0FBSzBCLElBQUksQ0FBQzFCLEVBQUU7U0FBQSxDQUFDO1FBRXRELElBQUlnQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDbkJELEtBQUssQ0FBQ0csTUFBTSxDQUFDRixVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQzNCbEMsT0FBTyxDQUFDaUMsS0FBSyxDQUFDO1NBQ2YsTUFBTTtZQUNMLGtCQUFrQjtZQUNsQmpDLE9BQU8sQ0FBQztnQkFBQzRCLElBQUksRUFBSkEsSUFBSTthQUFDLENBQUM7U0FDaEI7UUFDRFgsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFbkIsSUFBSSxDQUFDO1FBQzFCa0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFbUIsTUFBTSxDQUFDO0tBQzlCO0lBQ0QsSUFBTUMsUUFBUSxHQUFHLFdBQU07UUFDckIsT0FBTyxDQUFDdkMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDb0IsTUFBTSxDQUFDLFNBQUNvQixZQUFZLEVBQUVDLFNBQVMsRUFBSztZQUNwRCxPQUFPRCxZQUFZLEdBQUdDLFNBQVMsQ0FBQ0MsUUFBUSxHQUFHRCxTQUFTLENBQUNFLEtBQUssQ0FBQztTQUM5RCxFQUFFLENBQUMsQ0FBQztLQUNSO0lBQ0Msb0ZBQW9GO0lBQ3BGLElBQU1MLE1BQU0sR0FBR25ELDhDQUFPLENBQUMsV0FBTTtRQUMzQixJQUFNd0MsT0FBTyxHQUFHLEVBQUU7UUFDbEIsT0FBT0EsT0FBTztLQUNmLEVBQUU7UUFBQzNCLElBQUk7S0FBQyxDQUFDO0lBQ1YsSUFBTTRDLE9BQU8sR0FBR3pELDhDQUFPLENBQUMsV0FBTTtRQUM1QixJQUFNd0MsT0FBTyxHQUFHM0IsSUFBSTtRQUNwQixPQUFPMkIsT0FBTztLQUNmLEVBQUU7UUFBQzNCLElBQUk7S0FBQyxDQUFDO0lBQ1YsZ0JBQWdCO0lBQ2hCLHFCQUNJLDhEQUFDNkMsS0FBRzs7MEJBQ0EsOERBQUN2RCxpRUFBTTtnQkFBQ3dELE1BQU0sRUFBRWxELFFBQU8sYUFBUEEsUUFBTyxXQUFRLEdBQWZBLEtBQUFBLENBQWUsR0FBZkEsQ0FBQUEsR0FBZSxHQUFmQSxRQUFPLENBQUVrRCxNQUFNLGNBQWZsRCxHQUFlLGNBQWZBLEtBQUFBLENBQWUsR0FBZkEsR0FBZSxDQUFFbUQsSUFBSTtnQkFBRUMsSUFBSSxFQUFFcEQsUUFBTyxhQUFQQSxRQUFPLFdBQVEsR0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxDQUFBQSxJQUFlLEdBQWZBLFFBQU8sQ0FBRWtELE1BQU0sY0FBZmxELElBQWUsY0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxJQUFlLENBQUVvRCxJQUFJOzs7OztxQkFBSTswQkFFdEUsOERBQUMzRCx5REFBRztnQkFBQzRELEVBQUUsRUFBRTtvQkFBRUMsUUFBUSxFQUFFLENBQUM7b0JBQUVDLE9BQU8sRUFBRSxNQUFNO2lCQUFFOztvQkFDeENiLE1BQU07b0JBQUMsR0FBQztvQkFBQ00sT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFBQyxHQUFDO29CQUFDUSxFQUFFO2tDQUN2Qiw4REFBQzVELG1FQUFPO3dCQUFDdUQsSUFBSSxFQUFFbkQsQ0FBQUEsUUFBTyxhQUFQQSxRQUFPLFdBQVksR0FBbkJBLEtBQUFBLENBQW1CLEdBQW5CQSxRQUFPLENBQUV5RCxVQUFVLElBQUcsR0FBRyxHQUFFekQsQ0FBQUEsUUFBTyxhQUFQQSxRQUFPLFdBQVcsR0FBbEJBLEtBQUFBLENBQWtCLEdBQWxCQSxRQUFPLENBQUUwRCxTQUFTO3dCQUFHQyxNQUFNLEVBQUUzRCxRQUFPLGFBQVBBLFFBQU8sV0FBUSxHQUFmQSxLQUFBQSxDQUFlLEdBQWZBLFFBQU8sQ0FBRTJELE1BQU07d0JBQUVqQixNQUFNLEVBQUVBLE1BQU07Ozs7OzZCQUFJO2tDQUMxRyw4REFBQzdDLGtFQUFNO3dCQUFDc0QsSUFBSSxFQUFDLGdCQUFnQjt3QkFBQ3BDLE1BQU0sRUFBQyxNQUFNO2tDQUN4Q21CLElBQUksYUFBSkEsSUFBSSxXQUFLLEdBQVRBLEtBQUFBLENBQVMsR0FBVEEsSUFBSSxDQUFFMEIsR0FBRyxDQUFDLFNBQUM3QixPQUFPLEVBQUU4QixHQUFHO2lEQUNwQiw4REFBQ1osS0FBRzswQ0FDQSw0RUFBQ25ELHVFQUFXO29DQUFDbUMsSUFBSSxFQUFFRixPQUFPOzs7OzswQ0FBRzsrQkFEdkI4QixHQUFHOzs7O3NDQUVQO3lCQUNULENBQUM7Ozs7OzZCQUNLO2tDQUNULDhEQUFDaEUsa0VBQU07d0JBQUNzRCxJQUFJLEVBQUMsbUJBQW1CO3dCQUFDcEMsTUFBTSxFQUFDLEtBQUs7a0NBQzFDb0IsR0FBRyxhQUFIQSxHQUFHLFdBQUssR0FBUkEsS0FBQUEsQ0FBUSxHQUFSQSxHQUFHLENBQUV5QixHQUFHLENBQUMsU0FBQzdCLE9BQU8sRUFBRThCLEdBQUc7aURBQ25CLDhEQUFDWixLQUFHOzBDQUNBLDRFQUFDbkQsdUVBQVc7b0NBQUNtQyxJQUFJLEVBQUVGLE9BQU87b0NBQUVNLFVBQVUsRUFBRUEsVUFBVTs7Ozs7MENBQUc7K0JBRC9Dd0IsR0FBRzs7OztzQ0FFUDt5QkFDVCxDQUFDOzs7Ozs2QkFDSztrQ0FDVCw4REFBQ2hFLGtFQUFNO3dCQUFDc0QsSUFBSSxFQUFDLGdCQUFnQjt3QkFBQ3BDLE1BQU0sRUFBQyxhQUFhO2tDQUMvQ3FCLFdBQVcsYUFBWEEsV0FBVyxXQUFLLEdBQWhCQSxLQUFBQSxDQUFnQixHQUFoQkEsV0FBVyxDQUFFd0IsR0FBRyxDQUFDLFNBQUM3QixPQUFPLEVBQUU4QixHQUFHO2lEQUMzQiw4REFBQ1osS0FBRzswQ0FDQSw0RUFBQ25ELHVFQUFXO29DQUFDbUMsSUFBSSxFQUFFRixPQUFPO29DQUFFTSxVQUFVLEVBQUVBLFVBQVU7Ozs7OzBDQUFHOytCQUQvQ3dCLEdBQUc7Ozs7c0NBRVA7eUJBQ1QsQ0FBQzs7Ozs7NkJBQ0s7Ozs7OztxQkFDTDswQkFDTiw4REFBQ2xFLHVFQUFTOzs7O3FCQUFFOzs7Ozs7YUFDVixDQUNUO0NBQ0o7R0E1SU1JLE9BQU87O1FBT2NQLGtEQUFTOzs7QUFQOUJPLEtBQUFBLE9BQU87QUE4SWQsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdHVkZW50L1tpZF0uanM/M2Q3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIkBjb21wb25lbnRzL05hdmJhci9OYXZiYXJcIjtcclxuaW1wb3J0IEJvdHRvbWJhciBmcm9tIFwiQGNvbXBvbmVudHMvQm90dG9tYmFyL0JvdHRvbWJhclwiO1xyXG5pbXBvcnQgU3VtbWFyeSBmcm9tIFwiQGNvbXBvbmVudHMvU3VtbWFyeS9TdW1tYXJ5XCI7XHJcbmltcG9ydCBTdGF0dXMgZnJvbSBcIkBjb21wb25lbnRzL1BheW1lbnQvU3RhdHVzXCI7XHJcbmltcG9ydCBJdGVtUGF5bWVudCBmcm9tIFwiQGNvbXBvbmVudHMvUGF5bWVudC9JdGVtUGF5bWVudFwiO1xyXG5cclxuIGNvbnN0IFN0dWRlbnQgPSAoKSA9PiB7XHJcbiAgICAvL3N0YXRlXHJcbiAgICBjb25zdCBbc3R1ZGVudCwgc2V0U3R1ZGVudF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbcGF5bWVudHMsIHNldFBheW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgLy8gcm91dGVyIC0gcXVlcnkgLSBzbHVnIC0gaWRcclxuICAgIGNvbnN0IHsgcXVlcnkgOiB7aWR9fSA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgLy9hcGlzXHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsnaGFzaCc6ICdPY0puNGpZQ2hXJ31cclxuICAgIH07XHJcbiAgICBjb25zdCBmZXRjaFN0dWRlbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvdy5mZXRjaChgaHR0cDovL2VjMi0zLTIzOS0yMjEtNzQuY29tcHV0ZS0xLmFtYXpvbmF3cy5jb206ODAwMC9hcGkvdjEvc3R1ZGVudHMvJHtpZH0vYCwgcmVxdWVzdE9wdGlvbnMpO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0dWRlbnQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldFN0dWRlbnQoc3R1ZGVudCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGZldGNoUGF5bWVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvdy5mZXRjaChgaHR0cDovL2VjMi0zLTIzOS0yMjEtNzQuY29tcHV0ZS0xLmFtYXpvbmF3cy5jb206ODAwMC9hcGkvdjEvc3R1ZGVudHMvJHtpZH0vb3JkZXJzL2AsIHJlcXVlc3RPcHRpb25zKTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgc2V0UGF5bWVudHMocGF5bWVudHMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAgXHJcbiAgICBjb25zdCBzdW1hID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgIHt0aXRsZSA6IFwiT25lXCIscHJpeDogXCIxMDBcIn0sXHJcbiAgICAgICAge3RpdGxlIDogXCJUd29cIixwcml4OlwiMjAwXCJ9LFxyXG4gICAgICAgIHt0aXRsZSA6IFwiVGhyZWVcIixwcml4OlwiMzAwXCJ9XHJcbiAgICAgIF1cclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKChkYXRhLnJlZHVjZSgoYSx2KSA9PiAgYSA9IHBhcnNlSW50KGEpICsgcGFyc2VJbnQodi5wcml4KSAsIDAgKSkpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGZldGNoUGF5bWVudHMoKTtcclxuICAgICAgZmV0Y2hTdHVkZW50KCk7XHJcbiAgICAgIHN1bWEoKVxyXG4gICAgfSwgW2lkXSk7XHJcblxyXG4gICAgLy8gY29tcHV0ZWQgbyByZWFjdGl2ZSBtZXRob2RzXHJcbiAgICBjb25zdCBnZXRTdGF0dXNQYXltZW50cyA9ICh2YWwpID0+IHtcclxuICAgICAgaWYoaWQgJiYgcGF5bWVudHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnQgPSBwYXltZW50cy5maWx0ZXIoaXRlbSA9PiBpdGVtLnN0YXR1cyA9PT0gdmFsKVxyXG4gICAgICAgIHJldHVybiBwYXltZW50XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFBBSURcclxuICAgIGNvbnN0IHBhaWQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBjb25zdCBwYXltZW50ID0gZ2V0U3RhdHVzUGF5bWVudHMoJ1BBSUQnKVxyXG4gICAgICAgIHJldHVybiBwYXltZW50XHJcbiAgICB9LCBbcGF5bWVudHNdKTtcclxuICAgIFxyXG4gICAgLy8gRFVFXHJcbiAgICBjb25zdCBkdWUgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgY29uc3QgcGF5bWVudCA9IGdldFN0YXR1c1BheW1lbnRzKCdEVUUnKVxyXG4gICAgICByZXR1cm4gcGF5bWVudFxyXG4gICAgfSwgW3BheW1lbnRzXSk7XHJcblxyXG4gICAgLy8gT1VUU1RBTkRJTkdcclxuICAgIGNvbnN0IG91dHN0YW5kaW5nID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBheW1lbnQgPSBnZXRTdGF0dXNQYXltZW50cygnT1VUU1RBTkRJTkcnKVxyXG4gICAgICByZXR1cm4gcGF5bWVudFxyXG4gICAgfSwgW3BheW1lbnRzXSk7XHJcbiAgICAvLyBFTUlUU1xyXG4gICAgY29uc3QgaGFuZGxlQ2FydCA9IChpdGVtKSA9PiB7IFxyXG4gICAgICBjb25zdCBjYXJ0RCA9IGNhcnRcclxuICAgICAgLy9jb25zb2xlLmxvZygnSVRFTTonLCBpdGVtKSBcclxuICAgICAgbGV0IGNoZWNrSW5kZXhcclxuXHJcbiAgICAgIGNoZWNrSW5kZXggPSBjYXJ0LmZpbmRJbmRleCh2YWwgPT4gdmFsLmlkID09PSBpdGVtLmlkKVxyXG5cclxuICAgICAgaWYgKGNoZWNrSW5kZXggPiAtMSkge1xyXG4gICAgICAgIGNhcnRELnNwbGljZShjaGVja0luZGV4LCAxKVxyXG4gICAgICAgIHNldENhcnQoY2FydEQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9jYXJ0RC5wdXNoKGl0ZW0pXHJcbiAgICAgICAgc2V0Q2FydCh7aXRlbX0pXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ0NBUlQ6JywgY2FydClcclxuICAgICAgY29uc29sZS5sb2coJ2Ftb3VudCcsIGFtb3VudCkgXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRUb3RhbCA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIChjYXJ0IHx8IFtdKS5yZWR1Y2UoKGN1cnJlbnRWYWx1ZSwgbmV4dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlICsgbmV4dFZhbHVlLnF1YW50aXR5ICogbmV4dFZhbHVlLnByaWNlO1xyXG4gICAgICB9LCAwKVxyXG4gIH07XHJcbiAgICAvL2NvbnN0IHVsID0gKGNhcnQgfHwgW10pLnJlZHVjZSgoYSx2KSA9PiAgYSA9IHBhcnNlSW50KGEpICsgcGFyc2VJbnQodi5wcmljZSkgLCAwIClcclxuICAgIGNvbnN0IGFtb3VudCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXltZW50ID0gMTBcclxuICAgICAgcmV0dXJuIHBheW1lbnRcclxuICAgIH0sIFtjYXJ0XSk7XHJcbiAgICBjb25zdCBnZXRDYXJ0ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBheW1lbnQgPSBjYXJ0XHJcbiAgICAgIHJldHVybiBwYXltZW50XHJcbiAgICB9LCBbY2FydF0pO1xyXG4gICAgLy8gUkVUVVJOUyBWSUVXU1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TmF2YmFyIHNjaG9vbD17c3R1ZGVudD8uc2Nob29sPy5uYW1lfSBsb2dvPXtzdHVkZW50Py5zY2hvb2w/LmxvZ299IC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxLCBtYXJnaW5ZOiAnNzBweCcgfX0+XHJcbiAgICAgICAgICAgIHthbW91bnR9IHtnZXRDYXJ0WzBdfSB7dWx9XHJcbiAgICAgICAgICAgICAgPFN1bW1hcnkgbmFtZT17c3R1ZGVudD8uZmlyc3RfbmFtZSArICcgJyArc3R1ZGVudD8ubGFzdF9uYW1lIH0gY29ob3J0PXtzdHVkZW50Py5jb2hvcnR9IGFtb3VudD17YW1vdW50fSAvPlxyXG4gICAgICAgICAgICAgIDxTdGF0dXMgbmFtZT1cIkN1b3RhcyBQYWdhZGFzXCIgc3RhdHVzPVwiUEFJRFwiPlxyXG4gICAgICAgICAgICAgICAge3BhaWQ/Lm1hcCgocGF5bWVudCwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtUGF5bWVudCBpdGVtPXtwYXltZW50fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1N0YXR1cz5cclxuICAgICAgICAgICAgICA8U3RhdHVzIG5hbWU9XCJDdW90YXMgUGVuZGllbnRlc1wiIHN0YXR1cz1cIkRVRVwiPlxyXG4gICAgICAgICAgICAgICAge2R1ZT8ubWFwKChwYXltZW50LCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1QYXltZW50IGl0ZW09e3BheW1lbnR9IGhhbmRsZUNhcnQ9e2hhbmRsZUNhcnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvU3RhdHVzPlxyXG4gICAgICAgICAgICAgIDxTdGF0dXMgbmFtZT1cIkN1b3RhcyBGdXR1cmFzXCIgc3RhdHVzPVwiT1VUU1RBTkRJTkdcIj5cclxuICAgICAgICAgICAgICAgIHtvdXRzdGFuZGluZz8ubWFwKChwYXltZW50LCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1QYXltZW50IGl0ZW09e3BheW1lbnR9IGhhbmRsZUNhcnQ9e2hhbmRsZUNhcnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvU3RhdHVzPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJvdHRvbWJhci8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0dWRlbnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwidXNlUm91dGVyIiwiQm94IiwiTmF2YmFyIiwiQm90dG9tYmFyIiwiU3VtbWFyeSIsIlN0YXR1cyIsIkl0ZW1QYXltZW50IiwiU3R1ZGVudCIsInN0dWRlbnQiLCJzZXRTdHVkZW50IiwicGF5bWVudHMiLCJzZXRQYXltZW50cyIsImNhcnQiLCJzZXRDYXJ0IiwicXVlcnkiLCJpZCIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImZldGNoU3R1ZGVudCIsInJlc3BvbnNlIiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2hQYXltZW50cyIsInN1bWEiLCJkYXRhIiwidGl0bGUiLCJwcml4IiwiY29uc29sZSIsImxvZyIsInJlZHVjZSIsImEiLCJ2IiwicGFyc2VJbnQiLCJnZXRTdGF0dXNQYXltZW50cyIsInZhbCIsInVuZGVmaW5lZCIsInBheW1lbnQiLCJmaWx0ZXIiLCJpdGVtIiwicGFpZCIsImR1ZSIsIm91dHN0YW5kaW5nIiwiaGFuZGxlQ2FydCIsImNhcnREIiwiY2hlY2tJbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsImFtb3VudCIsImdldFRvdGFsIiwiY3VycmVudFZhbHVlIiwibmV4dFZhbHVlIiwicXVhbnRpdHkiLCJwcmljZSIsImdldENhcnQiLCJkaXYiLCJzY2hvb2wiLCJuYW1lIiwibG9nbyIsInN4IiwiZmxleEdyb3ciLCJtYXJnaW5ZIiwidWwiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiY29ob3J0IiwibWFwIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/student/[id].js\n");

/***/ })

});