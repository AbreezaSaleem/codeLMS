webpackHotUpdate(0,{

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(53);

var _LoginReducer = __webpack_require__(383);

var _CoursesReducer = __webpack_require__(404);

var _ConsolePageReducer = __webpack_require__(405);

var _GCReducer = __webpack_require__(510);

exports.default = (0, _redux.combineReducers)({
	loggedIn: _LoginReducer.loggedIn,
	errorOccured: _LoginReducer.errorOccured,
	isLoading: _LoginReducer.isLoading,
	dataFetched: _LoginReducer.dataFetched,
	enrolledCourses: _CoursesReducer.enrolledCourses,
	activeCourse: _CoursesReducer.activeCourse,
	userCode: _ConsolePageReducer.userCode,
	currentUsername: _LoginReducer.currentUsername,
	activeAssignment: _GCReducer.activeAssignment
});

/***/ }),

/***/ 383:
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

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.activeCourse = exports.enrolledCourses = undefined;

var _CoursesActions = __webpack_require__(19);

var enrolledCourses = exports.enrolledCourses = function enrolledCourses() // state should NOT be false by default :(
{
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	var action = arguments[1];

	console.log(action.type);
	switch (action.type) {
		case _CoursesActions.COURSES_ENROLLED:
			//console.log('u wanna add courses?')
			//console.log(action.enrolledCourses)
			return Object.assign({}, state, {
				enrolledCourses: action.enrolledCourses
			});
		default:
			return state;
	}
};

var activeCourse = exports.activeCourse = function activeCourse() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	var action = arguments[1];

	switch (action.type) {
		case _CoursesActions.ACTIVE_COURSE:
			console.log('reducer for activate courses!');
			console.log(action.activeCourse);
			return Object.assign({}, state, {
				activeCourse: action.activeCourse
			});
		default:
			return state;
	}
};

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.userCode = undefined;

var _ConsolePageActions = __webpack_require__(57);

var userCode = exports.userCode = function userCode() // state should NOT be false by default :(
{
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	var action = arguments[1];

	switch (action.type) {
		case _ConsolePageActions.USER_CODE:
			//console.log('u wanna add courses?')
			//console.log(action.enrolledCourses)
			return Object.assign({}, state, {
				userCode: action.userCode
			});
		default:
			return state;
	}
};

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.activeCourse = undefined;

var _GCActions = __webpack_require__(511);

var activeCourse = exports.activeCourse = function activeCourse() // state should NOT be false by default :(
{
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	var action = arguments[1];

	console.log(action.type);
	switch (action.type) {
		case _GCActions.ACTIVE_ASSIGNMENT:
			return Object.assign({}, state, {
				activeAssignment: action.activeAssignment
			});
		default:
			return state;
	}
};

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addActiveAssignment = addActiveAssignment;
// actions
var ACTIVE_ASSIGNMENT = exports.ACTIVE_ASSIGNMENT = 'ACTIVE_ASSIGNMENT';

function addActiveAssignment(activeAssignment) {
	return { type: ACTIVE_ASSIGNMENT, activeAssignment: activeAssignment };
}

/***/ })

})