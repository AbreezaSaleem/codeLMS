webpackHotUpdate(0,{

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = configureStore;

var _reduxThunk = __webpack_require__(354);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _redux = __webpack_require__(77);

var _FinalReducer = __webpack_require__(443);

var _FinalReducer2 = _interopRequireDefault(_FinalReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	loggedIn: false,
	isLoading: false, // miss
	errorOccured: false, // miss
	dataFetched: {}, // miss
	enrolledCourses: [],
	activeCourse: ''
};

function configureStore() {
	//console.log(initialState)
	return (0, _redux.createStore)(_FinalReducer2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
}

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(77);

var _LoginReducer = __webpack_require__(444);

var _CoursesReducer = __webpack_require__(445);

exports.default = (0, _redux.combineReducers)({
	loggedIn: _LoginReducer.loggedIn,
	errorOccured: _LoginReducer.errorOccured,
	isLoading: _LoginReducer.isLoading,
	dataFetched: _LoginReducer.dataFetched,
	enrolledCourses: _CoursesReducer.enrolledCourses,
	activeCourse: _CoursesReducer.activeCourse
});

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.dataFetched = exports.isLoading = exports.errorOccured = exports.loggedIn = undefined;

var _LoginActions = __webpack_require__(101);

var loggedIn = exports.loggedIn = function loggedIn() // state should NOT be false by default :(
{
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	var action = arguments[1];

	switch (action.type) {
		case _LoginActions.USER_LOGGED_IN:
			//return action.input;
			//console.log('reducer activated!')
			//console.log(action.input)
			return Object.assign({}, state, {
				loggedIn: action.input
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

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.activeCourse = exports.enrolledCourses = undefined;

var _CoursesActions = __webpack_require__(31);

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

/***/ })

})