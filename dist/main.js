/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/main.less":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/main.less ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_fonts_quicksand_Quicksand_Regular_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/fonts/quicksand/Quicksand-Regular.eot */ \"./src/assets/fonts/quicksand/Quicksand-Regular.eot\");\n/* harmony import */ var _assets_fonts_quicksand_Quicksand_Regular_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/fonts/quicksand/Quicksand-Regular.woff */ \"./src/assets/fonts/quicksand/Quicksand-Regular.woff\");\n/* harmony import */ var _assets_fonts_quicksand_Quicksand_Regular_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/fonts/quicksand/Quicksand-Regular.ttf */ \"./src/assets/fonts/quicksand/Quicksand-Regular.ttf\");\n/* harmony import */ var _assets_fonts_quicksand_Quicksand_Regular_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/fonts/quicksand/Quicksand-Regular.svg */ \"./src/assets/fonts/quicksand/Quicksand-Regular.svg\");\n/* harmony import */ var _assets_fonts_quicksand_Quicksand_Bold_eot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/fonts/quicksand/Quicksand-Bold.eot */ \"./src/assets/fonts/quicksand/Quicksand-Bold.eot\");\n/* harmony import */ var _assets_fonts_quicksand_Quicksand_Bold_woff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/fonts/quicksand/Quicksand-Bold.woff */ \"./src/assets/fonts/quicksand/Quicksand-Bold.woff\");\n/* harmony import */ var _assets_fonts_quicksand_Quicksand_Bold_ttf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/fonts/quicksand/Quicksand-Bold.ttf */ \"./src/assets/fonts/quicksand/Quicksand-Bold.ttf\");\n/* harmony import */ var _assets_fonts_quicksand_Quicksand_Bold_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/fonts/quicksand/Quicksand-Bold.svg */ \"./src/assets/fonts/quicksand/Quicksand-Bold.svg\");\n/* harmony import */ var _assets_fonts_montserrat_Montserrat_Regular_eot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/fonts/montserrat/Montserrat-Regular.eot */ \"./src/assets/fonts/montserrat/Montserrat-Regular.eot\");\n/* harmony import */ var _assets_fonts_montserrat_Montserrat_Regular_woff__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/fonts/montserrat/Montserrat-Regular.woff */ \"./src/assets/fonts/montserrat/Montserrat-Regular.woff\");\n/* harmony import */ var _assets_fonts_montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/fonts/montserrat/Montserrat-Regular.ttf */ \"./src/assets/fonts/montserrat/Montserrat-Regular.ttf\");\n/* harmony import */ var _assets_fonts_montserrat_Montserrat_Regular_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/fonts/montserrat/Montserrat-Regular.svg */ \"./src/assets/fonts/montserrat/Montserrat-Regular.svg\");\n/* harmony import */ var _assets_fonts_montserrat_Montserrat_Bold_eot__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/fonts/montserrat/Montserrat-Bold.eot */ \"./src/assets/fonts/montserrat/Montserrat-Bold.eot\");\n/* harmony import */ var _assets_fonts_montserrat_Montserrat_Bold_woff__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/fonts/montserrat/Montserrat-Bold.woff */ \"./src/assets/fonts/montserrat/Montserrat-Bold.woff\");\n/* harmony import */ var _assets_fonts_montserrat_Montserrat_Bold_ttf__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/fonts/montserrat/Montserrat-Bold.ttf */ \"./src/assets/fonts/montserrat/Montserrat-Bold.ttf\");\n/* harmony import */ var _assets_fonts_montserrat_Montserrat_Bold_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/fonts/montserrat/Montserrat-Bold.svg */ \"./src/assets/fonts/montserrat/Montserrat-Bold.svg\");\n/* harmony import */ var _assets_img_uikit_form_elements_check_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/img/uikit/form-elements/check.svg */ \"./src/assets/img/uikit/form-elements/check.svg\");\n// Imports\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_quicksand_Quicksand_Regular_eot__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_quicksand_Quicksand_Regular_woff__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_quicksand_Quicksand_Regular_ttf__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_quicksand_Quicksand_Regular_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_quicksand_Quicksand_Bold_eot__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_quicksand_Quicksand_Bold_woff__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_quicksand_Quicksand_Bold_ttf__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_quicksand_Quicksand_Bold_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_montserrat_Montserrat_Regular_eot__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_montserrat_Montserrat_Regular_woff__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_montserrat_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_12__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_montserrat_Montserrat_Regular_svg__WEBPACK_IMPORTED_MODULE_13__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_montserrat_Montserrat_Bold_eot__WEBPACK_IMPORTED_MODULE_14__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_montserrat_Montserrat_Bold_woff__WEBPACK_IMPORTED_MODULE_15__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_montserrat_Montserrat_Bold_ttf__WEBPACK_IMPORTED_MODULE_16__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_fonts_montserrat_Montserrat_Bold_svg__WEBPACK_IMPORTED_MODULE_17__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_img_uikit_form_elements_check_svg__WEBPACK_IMPORTED_MODULE_18__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n  box-sizing: border-box;\\n}\\nhtml {\\n  scroll-behavior: smooth;\\n}\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  width: 100%;\\n  height: 100%;\\n}\\na,\\na:hover {\\n  text-decoration: none;\\n}\\nul {\\n  list-style-type: none;\\n}\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nul,\\nlabel,\\ninput {\\n  margin: 0;\\n  padding: 0;\\n}\\nimg {\\n  display: block;\\n  max-width: 100%;\\n  height: auto;\\n}\\nbutton,\\ninput {\\n  cursor: pointer;\\n  border: none;\\n  padding: 0;\\n  background: transparent;\\n}\\ntextarea,\\nbutton,\\ninput {\\n  outline: none;\\n}\\n.none {\\n  display: none !important;\\n}\\n@font-face {\\n  font-family: 'Quicksand';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  src: local('☺'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('truetype'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('svg');\\n  font-weight: 400;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: 'Quicksand';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  src: local('☺'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \") format('woff'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \") format('truetype'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \") format('svg');\\n  font-weight: 700;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: 'Montserrat';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \");\\n  src: local('☺'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \") format('woff'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \") format('truetype'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \") format('svg');\\n  font-weight: 400;\\n  font-style: normal;\\n}\\n@font-face {\\n  font-family: 'Montserrat';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \");\\n  src: local('☺'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \") format('woff'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \") format('truetype'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_15___ + \") format('svg');\\n  font-weight: 700;\\n  font-style: normal;\\n}\\n:root {\\n  --main-font: Montserrat;\\n  --title-font: Quicksand;\\n  --main-fs: 14px;\\n  --dark-shade-100: #1f2041;\\n  --dark-shade-75: rgba(31, 32, 65, 0.75);\\n  --dark-shade-50: rgba(31, 32, 65, 0.5);\\n  --dark-shade-25: rgba(31, 32, 65, 0.25);\\n  --dark-shade-5: rgba(31, 32, 65, 0.05);\\n  --purple: #bc9cff;\\n  --green: #6fcf97;\\n  --pur-grad: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);\\n}\\nbody {\\n  font-family: var(--main-font);\\n  font-weight: 400;\\n  font-size: var(--main-fs);\\n  color: var(--dark-shade-75);\\n}\\n.logo-wrapper {\\n  position: fixed;\\n  left: 30px;\\n  top: 30px;\\n}\\n.container {\\n  margin: 0 auto;\\n  width: 1160px;\\n}\\n.colors-type {\\n  display: flex;\\n  justify-content: center;\\n  padding: 145px 0;\\n}\\n.colors-type__content {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.colors-type__colors {\\n  padding-left: 120px;\\n}\\n.colors-type__type {\\n  padding-right: 40px;\\n}\\n.colors-type__colors-item {\\n  position: relative;\\n  padding-top: 7px;\\n  margin-bottom: 25px;\\n  font-family: var(--title-font);\\n  font-weight: 700;\\n  font-size: 19px;\\n  line-height: 29px;\\n  color: var(--dark-shade-100);\\n}\\n.colors-type__colors-item .font400 {\\n  font-family: var(--title-font);\\n  font-weight: 400;\\n}\\n.colors-type__colors-item:last-child {\\n  margin-bottom: 0;\\n}\\n.colors-type__colors-item::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  left: -110px;\\n  top: 0;\\n  width: 70px;\\n  height: 70px;\\n  border-radius: 6px;\\n}\\n.dark-shade-100.colors-type__colors-item::before {\\n  background-color: var(--dark-shade-100);\\n}\\n.dark-shade-75.colors-type__colors-item::before {\\n  background-color: var(--dark-shade-75);\\n}\\n.dark-shade-50.colors-type__colors-item::before {\\n  background-color: var(--dark-shade-50);\\n}\\n.dark-shade-25.colors-type__colors-item::before {\\n  background-color: var(--dark-shade-25);\\n}\\n.dark-shade-5.colors-type__colors-item::before {\\n  background-color: var(--dark-shade-5);\\n}\\n.purple.colors-type__colors-item::before {\\n  background-color: var(--purple);\\n}\\n.green.colors-type__colors-item::before {\\n  background-color: var(--green);\\n}\\n.widget-title {\\n  font-family: var(--title-font);\\n  font-weight: 700;\\n  font-size: 24px;\\n  line-height: 30px;\\n  color: var(--dark-shade-100);\\n}\\n.widget-subtitle {\\n  font-family: var(--title-font);\\n  font-weight: 700;\\n  font-size: 19px;\\n  line-height: 24px;\\n  color: var(--dark-shade-100);\\n}\\n.label-text {\\n  font-weight: 700;\\n  font-size: 12px;\\n  line-height: 15px;\\n  text-transform: uppercase;\\n  color: var(--dark-shade-100);\\n}\\n.colors-type__type-item {\\n  position: relative;\\n  display: flex;\\n  align-items: flex-start;\\n  margin-bottom: 50px;\\n}\\n.type-item__h1-tag {\\n  font-size: 24px;\\n  color: var(--dark-shade-25);\\n  text-transform: uppercase;\\n  margin-right: 30px;\\n}\\n.type-item__h1-text {\\n  max-width: 350px;\\n}\\n.type-item__h2-tag {\\n  width: 30px;\\n  text-align: right;\\n  font-size: 19px;\\n  color: var(--dark-shade-25);\\n  text-transform: uppercase;\\n  margin-right: 30px;\\n}\\n.type-item__h2-text {\\n  max-width: 295px;\\n}\\n.type-item__h3-tag {\\n  width: 30px;\\n  font-size: 12px;\\n  line-height: 15px;\\n  text-align: right;\\n  text-transform: uppercase;\\n  color: var(--dark-shade-25);\\n  margin-right: 30px;\\n}\\n.type-item__body-tag {\\n  position: absolute;\\n  top: 0;\\n  left: -6px;\\n  font-size: 14px;\\n  line-height: 24px;\\n  text-align: right;\\n  color: var(--dark-shade-25);\\n  margin-right: 30px;\\n}\\n.type-item__body-text {\\n  max-width: 320px;\\n  margin-left: 60px;\\n  font-size: 14px;\\n  line-height: 24px;\\n}\\n.form-elements {\\n  display: flex;\\n  justify-content: center;\\n  padding: 145px 0;\\n}\\n.form-elements__content {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.mr130 {\\n  margin-right: 130px;\\n}\\n.mb0 {\\n  margin-bottom: 0;\\n}\\n.text-field {\\n  width: 320px;\\n  height: 44px;\\n  padding: 0 15px;\\n  background: #FFFFFF;\\n  border: 1px solid var(--dark-shade-25);\\n  border-radius: 4px;\\n  color: var(--dark-shade-75);\\n  font-family: var(--main-font);\\n  font-weight: 400;\\n  font-size: var(--main-fs);\\n}\\n.text-field::placeholder {\\n  color: var(--dark-shade-25);\\n}\\n.text-field:hover,\\n.text-field:focus,\\n.text-field.hover {\\n  border: 1px solid var(--dark-shade-50);\\n}\\n.text-field.small {\\n  width: 150px;\\n}\\n.text-field.medium {\\n  width: 265px;\\n}\\n.input-wrapper-for-dropdown {\\n  position: relative;\\n  display: inline-block;\\n}\\n.input-wrapper-for-dropdown::after {\\n  content: \\\"\\\";\\n  display: block;\\n  position: absolute;\\n  top: 50%;\\n  right: 15px;\\n  transform: translateY(-50%) rotate(-45deg);\\n  width: 7px;\\n  height: 7px;\\n  border-bottom: 2px solid var(--dark-shade-50);\\n  border-left: 2px solid var(--dark-shade-50);\\n  pointer-events: none;\\n}\\n.input-wrapper-for-subscription {\\n  position: relative;\\n  display: inline-block;\\n}\\n.input-wrapper-for-subscription::after {\\n  content: \\\"\\\";\\n  display: block;\\n  position: absolute;\\n  top: 50%;\\n  right: 15px;\\n  width: 15px;\\n  height: 2px;\\n  background: var(--pur-grad);\\n  pointer-events: none;\\n}\\n.input-wrapper-for-subscription::before {\\n  content: \\\"\\\";\\n  display: block;\\n  position: absolute;\\n  top: 39%;\\n  right: 15px;\\n  width: 10px;\\n  height: 10px;\\n  border-bottom: 2px solid var(--purple);\\n  border-left: 2px solid var(--purple);\\n  border-image: var(--pur-grad);\\n  border-image-slice: 1;\\n  transform: rotate(225deg);\\n  pointer-events: none;\\n}\\n.text-field-title {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-bottom: 5px;\\n}\\n.text-field-title span {\\n  font-size: 12px;\\n  text-transform: uppercase;\\n  color: var(--dark-shade-50);\\n}\\n.text-field-wrapper {\\n  margin-bottom: 20px;\\n}\\n.masked-text-field-wrapper {\\n  margin-bottom: 40px;\\n}\\n.date-dropdown-wrapper {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-bottom: 40px;\\n}\\n.top-middle-col__item {\\n  margin-bottom: 40px;\\n}\\n.top-middle-col__item-title {\\n  margin-bottom: 16px;\\n}\\n.item__toggle-wrapper {\\n  margin-bottom: 10px;\\n}\\n.item__like-btns-wrapper {\\n  display: flex;\\n}\\n.item__like-btn-wrapper {\\n  margin-right: 10px;\\n}\\n.item__star-rating-wrapper {\\n  margin-right: 20px;\\n  display: inline-flex;\\n}\\n.label-checkbox {\\n  display: flex;\\n  margin-bottom: 15px;\\n  cursor: pointer;\\n}\\n.label-checkbox .checkbox-text {\\n  width: 190px;\\n}\\n.real-checkbox {\\n  width: 0;\\n  height: 0;\\n  opacity: 0;\\n  position: absolute;\\n  z-index: -1;\\n}\\n.custom-checkbox {\\n  position: relative;\\n  display: inline-block;\\n  width: 20px;\\n  height: 20px;\\n  margin-right: 10px;\\n  background: #FFFFFF;\\n  border: 1px solid var(--dark-shade-25);\\n  border-radius: 4px;\\n  vertical-align: middle;\\n}\\n.custom-checkbox::before {\\n  content: \\\"\\\";\\n  width: 12px;\\n  height: 12px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_16___ + \");\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%) scale(0);\\n  transition: 0.2s ease-in;\\n}\\n.real-checkbox:checked + .custom-checkbox::before {\\n  transform: translate(-50%, -50%) scale(1);\\n}\\n.label-radio {\\n  cursor: pointer;\\n  margin-right: 20px;\\n}\\n.real-radio {\\n  width: 0;\\n  height: 0;\\n  position: absolute;\\n  opacity: 0;\\n  z-index: -1;\\n}\\n.custom-radio {\\n  position: relative;\\n  display: inline-block;\\n  width: 20px;\\n  height: 20px;\\n  background: #ffffff;\\n  border: 1px solid #BC9CFF;\\n  border-radius: 50%;\\n  vertical-align: text-top;\\n  margin-right: 10px;\\n}\\n.custom-radio::before {\\n  content: '';\\n  display: inline-block;\\n  width: 12px;\\n  height: 12px;\\n  background: var(--pur-grad);\\n  border-radius: 50%;\\n  position: absolute;\\n  left: 50%;\\n  top: 50%;\\n  transform: translate(-50%, -50%) scale(0);\\n  transition: 0.2s ease-in;\\n}\\n.real-radio:checked + .custom-radio::before {\\n  transform: translate(-50%, -50%) scale(1);\\n}\\n.toggle-btn-wrapper {\\n  display: flex;\\n  align-items: center;\\n}\\n.toggle-btn {\\n  position: relative;\\n  display: inline-block;\\n  width: 40px;\\n  height: 20px;\\n  background: #FFFFFF;\\n  border: 1px solid var(--dark-shade-25);\\n  border-radius: 10px;\\n  margin-right: 15px;\\n  cursor: pointer;\\n  z-index: 0;\\n  transition-duration: 300ms;\\n}\\n.toggle-btn::after {\\n  content: \\\"\\\";\\n  width: 12px;\\n  height: 12px;\\n  border-radius: 10px;\\n  background: var(--dark-shade-25);\\n  position: absolute;\\n  top: 3px;\\n  left: 3px;\\n  z-index: 1;\\n  transition-duration: 300ms;\\n}\\n.toggle {\\n  border: 1px solid var(--purple);\\n}\\n.toggle::after {\\n  background: var(--pur-grad);\\n  left: 24px;\\n}\\n.like-btn {\\n  width: 40px;\\n  height: 20px;\\n  cursor: pointer;\\n  background: #FFFFFF;\\n  border: 1px solid var(--dark-shade-25);\\n  border-radius: 10px;\\n  color: var(--dark-shade-25);\\n  font-size: 10px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n.like-btn.liked {\\n  color: var(--purple);\\n  border: 1px solid var(--purple);\\n}\\n.star-fill {\\n  display: none;\\n}\\n.rating {\\n  display: inline-flex;\\n  cursor: pointer;\\n}\\n.rating-item {\\n  display: inline-flex;\\n}\\n.top-right-col__range-slider {\\n  margin-bottom: 40px;\\n}\\n.buttons__title {\\n  margin-bottom: 15px;\\n}\\n.buttons__btns-background,\\n.buttons__btns-border,\\n.buttons__btns-text {\\n  display: flex;\\n  width: 220px;\\n  justify-content: space-between;\\n  margin-bottom: 30px;\\n}\\n.buttons__btns-border,\\n.buttons__btns-text {\\n  margin-bottom: 15px;\\n}\\n.buttons__btns-large {\\n  margin-bottom: 40px;\\n}\\n.slider__wrapper {\\n  display: inline-block;\\n}\\n.slider__title-and-price {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.slider__price-range {\\n  display: block;\\n  text-align: right;\\n  margin-bottom: 20px;\\n  font-size: 12px;\\n  line-height: 15px;\\n  text-transform: uppercase;\\n  color: rgba(31, 32, 65, 0.5);\\n}\\n.slider {\\n  position: relative;\\n  width: 266px;\\n  height: 6px;\\n  border: 1px solid rgba(31, 32, 65, 0.25);\\n  border-radius: 3px;\\n}\\n.slider__btn-1,\\n.slider__btn-2 {\\n  position: absolute;\\n  top: 50%;\\n  left: -1px;\\n  transform: translateY(-50%);\\n  width: 16px;\\n  height: 16px;\\n  border-radius: 50%;\\n  border: 2px solid #FFFFFF;\\n  background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);\\n  cursor: pointer;\\n}\\n.slider__btn-2 {\\n  margin-left: 252px;\\n}\\n.slider__between {\\n  position: absolute;\\n  top: 50%;\\n  left: -1px;\\n  transform: translateY(-50%);\\n  height: 6px;\\n  width: 268px;\\n  background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);\\n  border-radius: 3px;\\n}\\n.button {\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  min-width: 100px;\\n  height: 44px;\\n  padding: 15px;\\n  border-radius: 22px;\\n  font-family: var(--main-font);\\n  font-weight: 800;\\n  font-size: 12px;\\n  text-transform: uppercase;\\n  color: var(--purple);\\n  background: #fff;\\n  background-clip: padding-box;\\n  border: solid 2px transparent;\\n}\\n.button::before {\\n  content: '';\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: -1;\\n  margin: -2px;\\n  border-radius: inherit;\\n  background: var(--pur-grad);\\n}\\n.button:hover::before,\\n.button:hover::after {\\n  opacity: 0.5;\\n}\\n.button.bg {\\n  overflow: hidden;\\n  border: none;\\n  background: transparent;\\n  color: #fff;\\n}\\n.button.bg::before {\\n  content: none;\\n}\\n.button.bg::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  background: var(--pur-grad);\\n  z-index: -1;\\n}\\n.button.text::before {\\n  content: none;\\n}\\n.button.text:hover {\\n  color: rgba(31, 32, 65, 0.5);\\n}\\n.button.large {\\n  min-width: 320px;\\n}\\n.btn-arrow::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 50%;\\n  right: 15px;\\n  width: 15px;\\n  height: 2px;\\n  background: #fff;\\n  pointer-events: none;\\n}\\n.btn-arrow::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 39%;\\n  right: 15px;\\n  width: 10px;\\n  height: 10px;\\n  border-bottom: 2px solid #fff;\\n  border-left: 2px solid #fff;\\n  transform: rotate(225deg);\\n  pointer-events: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/main.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Bold.eot":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Bold.eot ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"555bdf5e257a575fcb15e9e2053b1e5e.eot\");\n\n//# sourceURL=webpack:///./src/assets/fonts/montserrat/Montserrat-Bold.eot?");

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Bold.svg":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Bold.svg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"Montserrat-Bold.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/montserrat/Montserrat-Bold.svg?");

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Bold.ttf":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Bold.ttf ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"079ca05d3ded9bc107ab8a8da013be22.ttf\");\n\n//# sourceURL=webpack:///./src/assets/fonts/montserrat/Montserrat-Bold.ttf?");

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Bold.woff":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Bold.woff ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f640db97b237e5bc5c37ab8b7e7caac0.woff\");\n\n//# sourceURL=webpack:///./src/assets/fonts/montserrat/Montserrat-Bold.woff?");

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Regular.eot":
/*!************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Regular.eot ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"5ce9af918dfe272afe4bf0fbe8db8f4f.eot\");\n\n//# sourceURL=webpack:///./src/assets/fonts/montserrat/Montserrat-Regular.eot?");

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Regular.svg":
/*!************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Regular.svg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"Montserrat-Regular.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/montserrat/Montserrat-Regular.svg?");

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Regular.ttf":
/*!************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Regular.ttf ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3cd786652b8a2e9d41f210cb1a527ff6.ttf\");\n\n//# sourceURL=webpack:///./src/assets/fonts/montserrat/Montserrat-Regular.ttf?");

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Regular.woff":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Regular.woff ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"929a1f2cbab1f8f1b806600765953dae.woff\");\n\n//# sourceURL=webpack:///./src/assets/fonts/montserrat/Montserrat-Regular.woff?");

/***/ }),

/***/ "./src/assets/fonts/quicksand/Quicksand-Bold.eot":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/quicksand/Quicksand-Bold.eot ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1cc9912706b4226313e8bc495e781918.eot\");\n\n//# sourceURL=webpack:///./src/assets/fonts/quicksand/Quicksand-Bold.eot?");

/***/ }),

/***/ "./src/assets/fonts/quicksand/Quicksand-Bold.svg":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/quicksand/Quicksand-Bold.svg ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"Quicksand-Bold.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/quicksand/Quicksand-Bold.svg?");

/***/ }),

/***/ "./src/assets/fonts/quicksand/Quicksand-Bold.ttf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/quicksand/Quicksand-Bold.ttf ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"dcaf6c926a64fa307e00d890920ebc13.ttf\");\n\n//# sourceURL=webpack:///./src/assets/fonts/quicksand/Quicksand-Bold.ttf?");

/***/ }),

/***/ "./src/assets/fonts/quicksand/Quicksand-Bold.woff":
/*!********************************************************!*\
  !*** ./src/assets/fonts/quicksand/Quicksand-Bold.woff ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7d763529eb6680f61f940542bcdd1b9a.woff\");\n\n//# sourceURL=webpack:///./src/assets/fonts/quicksand/Quicksand-Bold.woff?");

/***/ }),

/***/ "./src/assets/fonts/quicksand/Quicksand-Regular.eot":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/quicksand/Quicksand-Regular.eot ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"34d30e47d102aaadadb0591ba7418db1.eot\");\n\n//# sourceURL=webpack:///./src/assets/fonts/quicksand/Quicksand-Regular.eot?");

/***/ }),

/***/ "./src/assets/fonts/quicksand/Quicksand-Regular.svg":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/quicksand/Quicksand-Regular.svg ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"Quicksand-Regular.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/quicksand/Quicksand-Regular.svg?");

/***/ }),

/***/ "./src/assets/fonts/quicksand/Quicksand-Regular.ttf":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/quicksand/Quicksand-Regular.ttf ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"cffc279022b0d87c571dff78071828f9.ttf\");\n\n//# sourceURL=webpack:///./src/assets/fonts/quicksand/Quicksand-Regular.ttf?");

/***/ }),

/***/ "./src/assets/fonts/quicksand/Quicksand-Regular.woff":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/quicksand/Quicksand-Regular.woff ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"33d1cd822f98a8f07cc989c8c5e6c54a.woff\");\n\n//# sourceURL=webpack:///./src/assets/fonts/quicksand/Quicksand-Regular.woff?");

/***/ }),

/***/ "./src/assets/img/uikit/form-elements/check.svg":
/*!******************************************************!*\
  !*** ./src/assets/img/uikit/form-elements/check.svg ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"check.svg\");\n\n//# sourceURL=webpack:///./src/assets/img/uikit/form-elements/check.svg?");

/***/ }),

/***/ "./src/components/uikit/form-elements/like-btn/like-btn.js":
/*!*****************************************************************!*\
  !*** ./src/components/uikit/form-elements/like-btn/like-btn.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const likeBtns = document.getElementsByClassName('like-btn')\r\n\r\nArray.from(likeBtns).forEach(btn => {\r\n        btn.addEventListener('click', function() {\r\n            let count = parseInt(btn.children[1].innerText)\r\n\r\n            if (btn.classList.contains('liked')) {\r\n                btn.classList.remove('liked')\r\n                btn.children[0].innerHTML = `<i class=\"far fa-heart\"></i>`\r\n                count -= 1\r\n            } else {\r\n                btn.classList.add('liked')\r\n                btn.children[0].innerHTML = `<i class=\"fas fa-heart\"></i>`\r\n                count += 1\r\n            }\r\n            btn.children[1].innerText = count\r\n    })\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/uikit/form-elements/like-btn/like-btn.js?");

/***/ }),

/***/ "./src/components/uikit/form-elements/range-slider/range-slider.js":
/*!*************************************************************************!*\
  !*** ./src/components/uikit/form-elements/range-slider/range-slider.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const sliderWrapper = document.querySelectorAll('.slider__wrapper')\r\nArray.from(sliderWrapper).forEach(i => {\r\n    i.onmouseover = function(e) {\r\n        const slider = i.children[1]\r\n        const between =  slider.children[0]\r\n        const btn1 = slider.children[1]\r\n        const btn2 = slider.children[2]\r\n        const rightEdge = slider.offsetWidth - btn1.offsetWidth + 2\r\n        const lowPrice = i.children[0].children[1].children[0]\r\n        const tallPrice = i.children[0].children[1].children[1]\r\n        const maxPrice = 15000\r\n\r\n        const btn1CoordsLeft = getCoords(btn1).left\r\n        const btn2CoordsLeft = getCoords(btn2).left\r\n        let lowPriceNum\r\n        let tallPriceNum\r\n\r\n        if (btn1CoordsLeft > btn2CoordsLeft) {\r\n            lowPriceNum = tallPrice.innerText\r\n            tallPriceNum = lowPrice.innerText\r\n        } else {\r\n            lowPriceNum = lowPrice.innerText\r\n            tallPriceNum = tallPrice.innerText\r\n        }\r\n\r\n        btn1.onmousedown = function(e) {\r\n            const sliderCoords = getCoords(slider)\r\n            const btn1Coords = getCoords(btn1)\r\n            const btn2Coords = getCoords(btn2)\r\n            const left2 = btn2Coords.left - sliderCoords.left\r\n            const shiftX1 = e.pageX - btn1Coords.left\r\n        \r\n            document.onmousemove = function(e) {\r\n                let left1 = e.pageX - shiftX1 - sliderCoords.left\r\n        \r\n                if (left1 < 0) left1 = 0\r\n                if (left1 > rightEdge) left1 = rightEdge\r\n                btn1.style.marginLeft = left1 + 'px'\r\n        \r\n                if (left1 > left2) {\r\n                    between.style.width = (left1 - left2 + 2) + 'px'  \r\n                    between.style.marginLeft = left2 + 'px'  \r\n                } else {\r\n                    between.style.width = (left2 - left1 + 2) + 'px'  \r\n                    between.style.marginLeft = left1 + 'px'\r\n                }\r\n                \r\n                const percent = left1 * 100 / rightEdge\r\n                const changedLowPrice = Math.round(percent * maxPrice / 100)\r\n                lowPrice.innerText = formateNum(changedLowPrice)\r\n                lowPriceNum = lowPrice.innerText\r\n                \r\n                if (strToNum(lowPrice.innerText) >= strToNum(tallPriceNum)) {\r\n                    lowPrice.innerText = formateNum(tallPriceNum) \r\n                    tallPrice.innerText = formateNum(changedLowPrice) \r\n                }\r\n            }\r\n        \r\n            document.onmouseup = function() {\r\n                document.onmousemove = document.onmouseup = null\r\n            }\r\n        }\r\n        \r\n        btn2.onmousedown = function(e) {\r\n            const sliderCoords = getCoords(slider)\r\n            const btn1Coords = getCoords(btn1)\r\n            const btn2Coords = getCoords(btn2)\r\n            const left1 = btn1Coords.left - sliderCoords.left\r\n            const shiftX2 = e.pageX - btn2Coords.left\r\n        \r\n            document.onmousemove = function(e) {\r\n                let left2 = e.pageX - shiftX2 - sliderCoords.left\r\n        \r\n                if (left2 < 0) left2 = 0\r\n                if (left2 > rightEdge) left2 = rightEdge\r\n                btn2.style.marginLeft = left2 + 'px'\r\n        \r\n                if (left1 > left2) {\r\n                    between.style.width = (left1 - left2 + 2) + 'px'  \r\n                    between.style.marginLeft = left2 + 'px'  \r\n                } else {\r\n                    between.style.width = (left2 - left1 + 2) + 'px'  \r\n                    between.style.marginLeft = left1 + 'px'\r\n                }\r\n        \r\n                const percent = left2 * 100 / rightEdge\r\n                const changedTallPrice = Math.round(percent * maxPrice / 100)\r\n                tallPrice.innerText = formateNum(changedTallPrice)\r\n                tallPriceNum = tallPrice.innerText\r\n        \r\n                if (strToNum(tallPrice.innerText) <= strToNum(lowPriceNum)) {\r\n                    tallPrice.innerText = formateNum(lowPriceNum) \r\n                    lowPrice.innerText = formateNum(changedTallPrice) \r\n                } \r\n            }\r\n        \r\n            document.onmouseup = function() {\r\n                document.onmousemove = document.onmouseup = null\r\n            }\r\n        }\r\n        \r\n        btn1.ondragstart = function() {\r\n            return false\r\n        } \r\n        \r\n        btn2.ondragstart = function() {\r\n            return false\r\n        }\r\n        \r\n        function getCoords(elem) {\r\n            const box = elem.getBoundingClientRect();\r\n            return {\r\n                top: box.top + pageYOffset,\r\n                left: box.left + pageXOffset\r\n            }\r\n        }\r\n        \r\n        function strToNum(str) {\r\n            return parseInt(str.split(' ').join(''))\r\n            \r\n        }\r\n        \r\n        function formateNum(num) {\r\n            const str = num.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ')\r\n            return str\r\n        }\r\n    }\r\n})\n\n//# sourceURL=webpack:///./src/components/uikit/form-elements/range-slider/range-slider.js?");

/***/ }),

/***/ "./src/components/uikit/form-elements/star-rating/star-rating.js":
/*!***********************************************************************!*\
  !*** ./src/components/uikit/form-elements/star-rating/star-rating.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const rating = document.querySelectorAll('.rating')\r\n\r\nArray.from(rating).forEach(function(i) {\r\n    const ratingItems = Array.from(i.children)\r\n    \r\n    i.addEventListener('click', function(e) {\r\n        const ratingItem = e.target.closest('.rating-item')\r\n        if (ratingItem) {\r\n            removeClass(ratingItems, 'current-rated')\r\n            ratingItem.classList.add('rated', 'current-rated')\r\n            isRated(ratingItems)\r\n        }\r\n    })\r\n\r\n    i.addEventListener('mouseover', function(e) {\r\n        const ratingItem = e.target.closest('.rating-item')\r\n        if (ratingItem) {\r\n            removeClass(ratingItems, 'rated')\r\n            ratingItem.classList.add('rated')\r\n            mouseOverRatedClass(ratingItems)\r\n            isRated(ratingItems)\r\n        }\r\n    })\r\n\r\n    i.addEventListener('mouseout', function() {\r\n        addClass(ratingItems, 'rated')\r\n        mouseOutRatedClass(ratingItems)\r\n        isRated(ratingItems)\r\n    })\r\n\r\n})\r\n\r\nfunction removeClass(arr) {\r\n    for (let i = 0; i < arr.length; i++){\r\n        for (let j = 1; j < arguments.length; j++){\r\n            arr[i].classList.remove(arguments[j])\r\n        }\r\n    }\r\n}\r\n\r\nfunction addClass(arr) {\r\n    for (let i = 0; i < arr.length; i++){\r\n        for (let j = 1; j < arguments.length; j++){\r\n            arr[i].classList.add(arguments[j])\r\n        }\r\n    }\r\n}\r\n\r\nfunction mouseOverRatedClass(arr) {\r\n    for(let i = 0; i < arr.length; i++) {\r\n        if (arr[i].classList.contains('rated')) {\r\n            break\r\n        } else {\r\n            arr[i].classList.add('rated')\r\n        }\r\n    }\r\n}\r\n\r\nfunction mouseOutRatedClass(arr) {\r\n    for(let i = arr.length - 1; i >= 0; i--) {\r\n        if (arr[i].classList.contains('current-rated')) {\r\n            break\r\n        } else {\r\n            arr[i].classList.remove('rated')\r\n        }\r\n    }\r\n}\r\n\r\nfunction isRated (arr) {\r\n    arr.forEach(i => {\r\n        if (i.classList.contains('rated')) {\r\n            i.children[0].children[1].style.display = 'block'\r\n        } else {\r\n            i.children[0].children[1].style.display = 'none'\r\n        }\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/uikit/form-elements/star-rating/star-rating.js?");

/***/ }),

/***/ "./src/components/uikit/form-elements/toggle-btn/toggle-btn.js":
/*!*********************************************************************!*\
  !*** ./src/components/uikit/form-elements/toggle-btn/toggle-btn.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const toggleBtns = document.querySelectorAll('.toggle-btn')\r\n\r\nArray.from(toggleBtns).forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n        btn.classList.toggle('toggle')\r\n    })\r\n});\r\n\n\n//# sourceURL=webpack:///./src/components/uikit/form-elements/toggle-btn/toggle-btn.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.less */ \"./src/main.less\");\n/* harmony import */ var _main_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_uikit_form_elements_toggle_btn_toggle_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/uikit/form-elements/toggle-btn/toggle-btn */ \"./src/components/uikit/form-elements/toggle-btn/toggle-btn.js\");\n/* harmony import */ var _components_uikit_form_elements_toggle_btn_toggle_btn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_uikit_form_elements_toggle_btn_toggle_btn__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_uikit_form_elements_like_btn_like_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/uikit/form-elements/like-btn/like-btn */ \"./src/components/uikit/form-elements/like-btn/like-btn.js\");\n/* harmony import */ var _components_uikit_form_elements_like_btn_like_btn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_uikit_form_elements_like_btn_like_btn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_uikit_form_elements_star_rating_star_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/uikit/form-elements/star-rating/star-rating */ \"./src/components/uikit/form-elements/star-rating/star-rating.js\");\n/* harmony import */ var _components_uikit_form_elements_star_rating_star_rating__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_uikit_form_elements_star_rating_star_rating__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_uikit_form_elements_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/uikit/form-elements/range-slider/range-slider */ \"./src/components/uikit/form-elements/range-slider/range-slider.js\");\n/* harmony import */ var _components_uikit_form_elements_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_uikit_form_elements_range_slider_range_slider__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.less":
/*!***********************!*\
  !*** ./src/main.less ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./main.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/main.less\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/main.less?");

/***/ })

/******/ });