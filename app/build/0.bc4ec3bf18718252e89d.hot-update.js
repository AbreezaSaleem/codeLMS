webpackHotUpdate(0,{

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(36);

var _reactRouterDom = __webpack_require__(17);

var _reactRedux = __webpack_require__(7);

var _History = __webpack_require__(9);

var _History2 = _interopRequireDefault(_History);

var _CoursesActions = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThumbNail = function (_React$Component) {
	_inherits(ThumbNail, _React$Component);

	function ThumbNail() {
		_classCallCheck(this, ThumbNail);

		var _this = _possibleConstructorReturn(this, (ThumbNail.__proto__ || Object.getPrototypeOf(ThumbNail)).call(this));

		_this.state = {
			courseSubComponents: {}
		};

		_this.onClick = _this.onClick.bind(_this);
		return _this;
	}

	_createClass(ThumbNail, [{
		key: 'onClick',
		value: function onClick(event) {
			var _this2 = this;

			var courseCode = this.props.CourseTitle.split('|')[0];
			var Semester = this.props.SemesterName;
			console.log(Semester);
			this.props.getSubcomponents({ CourseCode: courseCode, SemesterName: Semester }).then(function (response) {
				_this2.setState({
					courseSubComponents: response.data
				});

				var courseCode = _this2.props.CourseTitle.split('|')[0]; // repetition here.... alina pls fix this -abreeza
				var courseTitle = _this2.props.CourseTitle.split('|')[1];

				_History2.default.push({
					pathname: '/loginS/student/course',
					state: { CourseCode: courseCode, CourseTitle: courseTitle, SubComponents: _this2.state.courseSubComponents }
				});
			});
			event.preventDefault();
		}
	}, {
		key: 'render',
		value: function render() {
			var ThumbNailStyle = {
				width: 200,
				height: 300,
				margin: 40,
				fontSize: 20,
				overflow: 'hidden',
				verticalalign: 'top',
				float: 'left',
				background: "#f1f4d8"
			};

			var ImageStyle = {
				height: 'auto'

				//console.log('thumbnail')
				//console.log(this.props)
			};var courseCode = this.props.CourseTitle.split('|')[0];
			var courseTitle = this.props.CourseTitle.split('|')[1];
			return _react2.default.createElement(
				'div',
				{ style: ThumbNailStyle, display: 'inline-block', onClick: this.onClick, className: 'thumbnail' },
				_react2.default.createElement('img', { src: '/images/icon.png', className: 'img-circle' }),
				_react2.default.createElement(
					'p',
					null,
					courseCode
				),
				_react2.default.createElement(
					'p',
					null,
					courseTitle
				)
			);
		}
	}]);

	return ThumbNail;
}(_react2.default.Component);

exports.default = ThumbNail;

/***/ })

})