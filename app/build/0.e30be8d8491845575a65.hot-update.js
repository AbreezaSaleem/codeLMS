webpackHotUpdate(0,{

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.uploadCodeToGitlab = exports.sendCode = exports.sendCodeToTheServer = exports.USER_CODE = undefined;
exports.addUserCode = addUserCode;

var _dispatcher = __webpack_require__(102);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// actions
var USER_CODE = exports.USER_CODE = 'USER_CODE';

// action creators
function addUserCode(userCode) // will be an array of courses #lame
{
	return { type: USER_CODE, userCode: userCode };
}

var sendCodeToTheServer = exports.sendCodeToTheServer = function sendCodeToTheServer(socket, code) {
	return function (dispatch) {
		socket.emit('CodeToRun', code);
		console.log('Sending Code...');
	};
};

var sendCode = exports.sendCode = function sendCode(code) {
	console.log("going to send code!");
	console.log(code);
	return function (dispatch) {
		return _axios2.default.post('/loginS/student/course/console', code);
	};
};

var uploadCodeToGitlab = exports.uploadCodeToGitlab = function uploadCodeToGitlab(socket, code, name, dirname) {
	return function (dispatch) {
		socket.emit('uploadCode', { code: code, name: name, dirname: dirname });
	};
};

/***/ })

})