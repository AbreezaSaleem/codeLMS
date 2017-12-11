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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import rootReducer from '../reducers/FinalReducer'

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
	return (0, _redux.createStore)(rootReducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
}

/***/ })

})