webpackHotUpdate(0,{

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getCoursesAfterLoginSuccess = exports.getInstructorCourses = exports.instructorLoginRequest = exports.studentLoginRequest = exports.dataFetched = exports.errorOccured = exports.isLoading = exports.ACTIVE_USERNAME = exports.USER_LOGGED_IN = undefined;
exports.loggedIn = loggedIn;

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// actions
var USER_LOGGED_IN = exports.USER_LOGGED_IN = 'USER_LOGGED_IN';

var ACTIVE_USERNAME = exports.ACTIVE_USERNAME = 'ACTIVE_USERNAME';

// action creators

var isLoading = exports.isLoading = function isLoading(bool) {
	return {
		type: 'LOADING',
		isLoading: bool
	};
};

function loggedIn(input) // and you dont need any argument here...?
{
	//console.log('user logged in!')
	//console.log(input)
	return { type: USER_LOGGED_IN, input: input };
}

var errorOccured = exports.errorOccured = function errorOccured(error) {
	return {
		type: 'ERROR_OCCURED',
		errorOccured: bool
	};
};

var dataFetched = exports.dataFetched = function dataFetched(data) {
	return {
		type: 'DATA_FETCHED',
		data: data
	};
};

var studentLoginRequest = exports.studentLoginRequest = function studentLoginRequest(userData) {
	return function (dispatch) {
		return _axios2.default.post('/loginS', userData);
	};
};

var instructorLoginRequest = exports.instructorLoginRequest = function instructorLoginRequest(userData) {
	return function (dispatch) {
		return _axios2.default.post('/loginI', userData);
	};
};

var getInstructorCourses = exports.getInstructorCourses = function getInstructorCourses(userData) {
	return function (dispatch) {
		return _axios2.default.post('/loginI/instructor', userData);
	};
};

var getCoursesAfterLoginSuccess = exports.getCoursesAfterLoginSuccess = function getCoursesAfterLoginSuccess(username) {
	return function (dispatch) {
		return _axios2.default.post('/loginS/student', username);
	};
};

/***/ })

})