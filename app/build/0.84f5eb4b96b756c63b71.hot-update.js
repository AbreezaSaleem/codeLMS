webpackHotUpdate(0,{

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.registerStudent = exports.registerInstructor = undefined;

var _axios = __webpack_require__(27);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// action creators

var registerInstructor = exports.registerInstructor = function registerInstructor(data) {
	return function (dispatch) {
		console.log('here...');
		console.log(data);
		return _axios2.default.post('/signupI', data);
	};
};

var registerStudent = exports.registerStudent = function registerStudent(data) {
	return function (dispatch) {
		console.log('here...');
		console.log(data);
		return _axios2.default.post('/signupS', data);
	};
};

/***/ })

})