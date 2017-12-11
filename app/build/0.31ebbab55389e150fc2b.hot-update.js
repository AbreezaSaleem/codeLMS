webpackHotUpdate(0,{

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var sendCodeToTheServer = exports.sendCodeToTheServer = function sendCodeToTheServer(socket, code) {
	return function (dispatch) {
		socket.emit('CodeToRun', code);
		console.log('Sending Code...');
	};
};

/***/ })

})