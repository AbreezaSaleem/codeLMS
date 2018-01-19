webpackHotUpdate(0,{

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(51);

var _LoginReducer = __webpack_require__(381);

var _CoursesReducer = __webpack_require__(400);

var _ConsolePageReducer = __webpack_require__(403);

exports.default = (0, _redux.combineReducers)({
	loggedIn: _LoginReducer.loggedIn,
	errorOccured: _LoginReducer.errorOccured,
	isLoading: _LoginReducer.isLoading,
	dataFetched: _LoginReducer.dataFetched,
	enrolledCourses: _CoursesReducer.enrolledCourses,
	activeCourse: _CoursesReducer.activeCourse,
	userCode: _ConsolePageReducer.userCode,
	currentUsername: _LoginReducer.currentUsername
});

/***/ })

})