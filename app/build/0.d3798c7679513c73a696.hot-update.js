webpackHotUpdate(0,{

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getStudentsEnrolled = exports.GET_STUDENTS_ENROLLED = exports.ACTIVE_COURSE = exports.COURSES_ENROLLED = undefined;
exports.addEnrolledCourses = addEnrolledCourses;
exports.addActiveCourse = addActiveCourse;
exports.createRepositories = createRepositories;

var _dispatcher = __webpack_require__(102);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _axios = __webpack_require__(27);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// actions
var COURSES_ENROLLED = exports.COURSES_ENROLLED = 'COURSES_ENROLLED';

var ACTIVE_COURSE = exports.ACTIVE_COURSE = 'ACTIVE_COURSE';

var GET_STUDENTS_ENROLLED = exports.GET_STUDENTS_ENROLLED = 'GET_STUDENTS_ENROLLED';

// action creators
function addEnrolledCourses(enrolledCourses) // will be an array of courses #lame
{
	return { type: COURSES_ENROLLED, enrolledCourses: enrolledCourses };
}

function addActiveCourse(activeCourse) {
	return { type: ACTIVE_COURSE, activeCourse: activeCourse };
}

var getStudentsEnrolled = exports.getStudentsEnrolled = function getStudentsEnrolled(course) {
	console.log('getting students enrolled...');
	console.log(course);
	return function (dispatch) {
		return _axios2.default.post('/loginI/instructor/course/roster', course);
	};
};

function createRepositories(courseName, studentsEnrolled) {}

/***/ })

})