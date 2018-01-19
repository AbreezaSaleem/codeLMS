webpackHotUpdate(0,{

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.dataFetched = exports.isLoading = exports.errorOccured = exports.currentUsername = exports.loggedIn = undefined;

var _LoginActions = __webpack_require__(34);

var loggedIn = exports.loggedIn = function loggedIn() // state should NOT be false by default :(
{
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	var action = arguments[1];

	switch (action.type) {
		case _LoginActions.USER_LOGGED_IN:
			//return action.input;
			console.log('gonna add username!');
			console.log(action.input);
			return Object.assign({}, state, {
				loggedIn: action.input
			});
		default:
			return state;
	}
};

var currentUsername = exports.currentUsername = function currentUsername() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	var action = arguments[1];

	switch (action.type) {
		case _LoginActions.ACTIVE_USERNAME:
			console.log('action for username add');
			console.log(action.username);
			return Object.assign({}, state, {
				currentUsername: action.username
			});
		default:
			return state;
	}
};

var errorOccured = exports.errorOccured = function errorOccured() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	var action = arguments[1];

	switch (action.type) {
		case 'ERROR_OCCURED':
			return action.errorOccured;
		default:
			return state;
	}
};

var isLoading = exports.isLoading = function isLoading() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	var action = arguments[1];

	switch (action.type) {
		case 'LOADING':
			return action.isLoading;
		default:
			return state;
	}
};

var dataFetched = exports.dataFetched = function dataFetched() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case 'DATA_FETCHED':
			return action.data;
		default:
			return state;
	}
};

/***/ })

})