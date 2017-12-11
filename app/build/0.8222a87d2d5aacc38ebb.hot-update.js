webpackHotUpdate(0,{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = configureStore;

var _reduxThunk = __webpack_require__(148);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _redux = __webpack_require__(66);

var _FinalReducer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../reducers/FinalReducer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
	return (0, _redux.createStore)(
	//rootReducer,
	initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
}

/***/ })

})