(window["webpackJsonpcode-sandbox-examples"]=window["webpackJsonpcode-sandbox-examples"]||[]).push([[0],{11:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_haymomeran_Documents_repos_code_sandbox_examples_basic_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15),react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14),react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(23),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_this=void 0,apl=null;setTimeout((function(){apl=window.amplitude.getInstance(),console.log("Amplitude ready.")}),2e3);var Amplitude=function Amplitude(_ref){var children=_ref.children,_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),_useState2=Object(_Users_haymomeran_Documents_repos_code_sandbox_examples_basic_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),api=_useState2[0],setApi=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),_useState4=Object(_Users_haymomeran_Documents_repos_code_sandbox_examples_basic_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),eventCode=_useState4[0],setEventCode=_useState4[1],debounce=null,handleApi=function(_){clearTimeout(debounce),debounce=setTimeout((function(){setApi(api),apl.init(api),apl.setUserId("5657167e0f8b2c4cbe71c0ca"),apl.setUserProperties({email:"jt@jtec.at"}),console.log("Amplitude initialised with ",api)}),2e3)},handleEventCode=function(_){setEventCode(_.target.value)},executeCode=function executeCode(event){eval(eventCode),event.preventDefault()};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__.a.Group,{controlId:"apiKey"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__.a.Label,null,"Amplitude API Key"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__.a.Control,{type:"text",placeholder:"Amplitude API",onChange:handleApi.bind(_this)})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__.a.Group,{controlId:"apiKey"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__.a.Label,null,"Event Code"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__.a.Control,{as:"textarea",rows:"5",onChange:handleEventCode.bind(_this)})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__.a,{variant:"primary",type:"submit",onClick:executeCode.bind(_this)},"Test Event")))},App=function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__.a,{className:"p-3"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",{className:"header"},"Test Amplitude events"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Amplitude,{className:"toast"})))};__webpack_exports__.a=App},17:function(_,e,t){_.exports=t(18)},18:function(_,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(10),E=t.n(o),n=t(11);t(28);E.a.render(r.a.createElement(n.a,null),document.getElementById("root"))},23:function(_,e,t){}},[[17,1,2]]]);
//# sourceMappingURL=main.a9ee0d9f.chunk.js.map