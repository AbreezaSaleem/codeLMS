webpackHotUpdate(0,{

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(42);

var _LoginReducer = __webpack_require__(357);

var _CoursesReducer = __webpack_require__(376);

var _ConsolePageReducer = __webpack_require__(492);

exports.default = (0, _redux.combineReducers)({
	loggedIn: _LoginReducer.loggedIn,
	errorOccured: _LoginReducer.errorOccured,
	isLoading: _LoginReducer.isLoading,
	dataFetched: _LoginReducer.dataFetched,
	enrolledCourses: _CoursesReducer.enrolledCourses,
	activeCourse: _CoursesReducer.activeCourse,
	userCode: _ConsolePageReducer.userCode
});

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.userCode = undefined;

var _ConsolePageActions = __webpack_require__(299);

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

/***/ })

})