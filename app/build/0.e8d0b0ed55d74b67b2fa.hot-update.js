webpackHotUpdate(0,{

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(17);

var _reactRedux = __webpack_require__(8);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Login = __webpack_require__(404);

var _Login2 = _interopRequireDefault(_Login);

var _Login3 = __webpack_require__(431);

var _Login4 = _interopRequireDefault(_Login3);

var _Dashboard = __webpack_require__(433);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _StudentsHandle = __webpack_require__(434);

var _StudentsHandle2 = _interopRequireDefault(_StudentsHandle);

var _CourseItem = __webpack_require__(112);

var _CourseItem2 = _interopRequireDefault(_CourseItem);

var _SemesterItem = __webpack_require__(111);

var _SemesterItem2 = _interopRequireDefault(_SemesterItem);

var _Logo = __webpack_require__(21);

var _Logo2 = _interopRequireDefault(_Logo);

var _Tiles = __webpack_require__(59);

var _Tiles2 = _interopRequireDefault(_Tiles);

var _ConsolePage = __webpack_require__(436);

var _ConsolePage2 = _interopRequireDefault(_ConsolePage);

var _Tiles3 = __webpack_require__(484);

var _Tiles4 = _interopRequireDefault(_Tiles3);

var _CoursePage = __webpack_require__(488);

var _CoursePage2 = _interopRequireDefault(_CoursePage);

var _CoursePage3 = __webpack_require__(489);

var _CoursePage4 = _interopRequireDefault(_CoursePage3);

var _NewGradeComponent = __webpack_require__(496);

var _NewGradeComponent2 = _interopRequireDefault(_NewGradeComponent);

var _Roster = __webpack_require__(492);

var _Roster2 = _interopRequireDefault(_Roster);

var _SignUp = __webpack_require__(493);

var _SignUp2 = _interopRequireDefault(_SignUp);

var _ThumbNail = __webpack_require__(113);

var _ThumbNail2 = _interopRequireDefault(_ThumbNail);

var _AssignmentEdit = __webpack_require__(495);

var _AssignmentEdit2 = _interopRequireDefault(_AssignmentEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Routes = function (_React$Component) {
	_inherits(Routes, _React$Component);

	function Routes() {
		_classCallCheck(this, Routes);

		return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
	}

	_createClass(Routes, [{
		key: 'render',
		value: function render() // protected routes, should you display tiles page if the user isnt logged in? no, duh  https://www.youtube.com/watch?v=UVQ0ATR0vpI&t=678s
		{
			console.log('ROUTESSSSSSSSSSSSSSSSSSSSS');
			return _react2.default.createElement(
				_reactRouterDom.Switch,
				null,
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Dashboard2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/signup', component: _SignUp2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/loginS', component: _Login2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/loginS/student', component: _Tiles2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/loginS/student/course', component: _CoursePage2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/loginS/student/course/console', component: _ConsolePage2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/loginI', component: _Login4.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/loginI/instructor', component: _Tiles4.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/loginI/instructor/course', component: _CoursePage4.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/loginI/instructor/new', component: _NewGradeComponent2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/loginI/instructor/course/roster', component: _Roster2.default })
			);
		}
	}]);

	return Routes;
}(_react2.default.Component);

// here you'll access the store...
// check if logged in is true
// if it is, do the shit
// i. hope. im. right

Routes.propTypes = {
	loggedIn: _propTypes2.default.bool.isRequired
};

function mapStateToProps(state) {
	console.log('HERE');
	console.log(state);
	return { loggedIn: state.loggedIn };
}

//connect(mapStateToProps, null) 
exports.default = Routes;

/***/ })

})