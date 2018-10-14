webpackHotUpdate(0,{

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _CoursesActions = __webpack_require__(19);

var _History = __webpack_require__(9);

var _History2 = _interopRequireDefault(_History);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewGradeComponent = function (_React$Component) {
	_inherits(NewGradeComponent, _React$Component);

	function NewGradeComponent() {
		_classCallCheck(this, NewGradeComponent);

		var _this = _possibleConstructorReturn(this, (NewGradeComponent.__proto__ || Object.getPrototypeOf(NewGradeComponent)).call(this));

		_this.state = {
			studentsEnrolled: [],
			courseCode: '',
			courseTitle: ''
		};
		_this.onCreate = _this.onCreate.bind(_this);
		return _this;
	}

	_createClass(NewGradeComponent, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			window.addEventListener("hashchange", function (e) {
				_History2.default.goBack();
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var CourseTitle = this.props.location.state.courseTitle.activeCourse;

			this.setState({
				courseCode: CourseTitle.split('|')[0],
				courseTitle: CourseTitle.split('|')[1]
			}, function () {
				/*this.props.getStudentsEnrolled({courseCode: this.state.courseCode})
    .then(response =>
    {
    	this.setState(
    	{
    		studentsEnrolled: response.data.studentList.students_enrolled,
    	})
    	console.log('students enrolled are!!!')
    	console.log(this.state.studentsEnrolled)
    })*/
				_this2.setState( // uhhh u gotta do the spilliting here!
				{
					studentsEnrolled: "14100047"
				});
			});
		}
	}, {
		key: 'onCreate',
		value: function onCreate(event) {
			event.preventDefault();
			this.props.createRepos(this.state.courseCode, this.state.studentsEnrolled).then(function (response) {
				return console.log('bleh)');
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h1',
					null,
					' ',
					this.props.location.state.courseTitle.activeCourse,
					' '
				),
				_react2.default.createElement(
					'button',
					{ className: 'btn-custom', onClick: this.onCreate },
					' Create! '
				)
			);
		}
	}]);

	return NewGradeComponent;
}(_react2.default.Component);

var mapDisptachToProps = function mapDisptachToProps(dispatch) {
	return {
		getStudentsEnrolled: function getStudentsEnrolled(course) {
			return dispatch((0, _CoursesActions.getStudentsEnrolled)(course));
		},
		createRepos: function createRepos(course, students) {
			return dispatch((0, _CoursesActions.createRepositories)(course, students));
		}
	};
};

exports.default = (0, _reactRedux.connect)(null, mapDisptachToProps)(NewGradeComponent);

/***/ })

})