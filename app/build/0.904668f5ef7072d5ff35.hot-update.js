webpackHotUpdate(0,{

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.sendCodeToTheServer = exports.USER_CODE = undefined;
exports.addUserCode = addUserCode;

var _dispatcher = __webpack_require__(397);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

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

/***/ })

})