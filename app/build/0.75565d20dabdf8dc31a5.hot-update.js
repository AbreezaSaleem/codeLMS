webpackHotUpdate(0,{

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCenter = __webpack_require__(34);

var _reactCenter2 = _interopRequireDefault(_reactCenter);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(57);

var _classnames2 = _interopRequireDefault(_classnames);

var _isEmpty = __webpack_require__(103);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _reactRouter = __webpack_require__(36);

var _reactRouterDom = __webpack_require__(17);

var _Logo = __webpack_require__(22);

var _Logo2 = _interopRequireDefault(_Logo);

var _Routes = __webpack_require__(56);

var _Routes2 = _interopRequireDefault(_Routes);

var _Tiles = __webpack_require__(59);

var _Tiles2 = _interopRequireDefault(_Tiles);

var _History = __webpack_require__(9);

var _History2 = _interopRequireDefault(_History);

var _LoginActions = __webpack_require__(53);

var _LoginActions2 = _interopRequireDefault(_LoginActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_React$Component) {
	_inherits(LoginForm, _React$Component);

	function LoginForm() {
		_classCallCheck(this, LoginForm);

		var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this));

		_this.state = {
			username: '',
			password: '',
			student: false,
			instructor: false,
			error_password: '',
			error_username: '',
			courses: [],
			CoursesReceived: false
		};

		_this.onChange = _this.onChange.bind(_this);
		_this.onSubmit = _this.onSubmit.bind(_this);
		return _this;
	}

	_createClass(LoginForm, [{
		key: 'onChange',
		value: function onChange(event) {
			this.setState(_defineProperty({ error_username: '', error_password: '' }, event.target.name, event.target.value));
			event.preventDefault();
		}
	}, {
		key: 'onSubmit',
		value: function onSubmit(event) {
			var _this2 = this;

			event.preventDefault();
			if (this.state.username && this.state.password) {
				this.props.studentLoginRequest({ username: this.state.username, password: this.state.password }).then(function (response) /// ctx.body's data will be available HERE in reponse variable
				{
					console.log(_this2.state.username);
					_this2.setState({
						student: response.data.student, // response should be the list of courses student is enrollrd in
						error_username: response.data.error_username,
						error_password: response.data.error_password
					});

					if (_this2.state.student) {
						_this2.props.getCourses({ username: _this2.state.username }).then(function (response) {
							_this2.setState({
								courses: response.data.courses,
								CoursesReceived: true
							});

							_History2.default.push({
								pathname: '/loginS/student',
								state: { StudentCourses: _this2.state.courses }
							});
						});
					}
				});
			} else this.setState({ error_username: 'Please enter username', error_password: 'Please enter password.' });
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			window.addEventListener("hashchange", function (e) {
				_History2.default.goBack();
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = {
				buttonStyle: {
					margin: 'auto',
					width: '83'
				}
			};

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Logo2.default, null),
				_react2.default.createElement(
					'div',
					{ className: 'header clearfix' },
					_react2.default.createElement(
						'h3',
						{ className: 'text-muted text-center page-header' },
						' Student Login'
					)
				),
				_react2.default.createElement(
					'form',
					{ onSubmit: this.onSubmit },
					_react2.default.createElement(
						'div',
						{ className: (0, _classnames2.default)('form-group', { 'has-error': this.state.error_username }) },
						_react2.default.createElement(
							'label',
							{ className: 'control-label' },
							' Username '
						),
						_react2.default.createElement('input', {
							type: 'text',
							name: 'username',
							className: 'form-control',
							onChange: this.onChange
						}),
						this.state.error_username && _react2.default.createElement(
							'span',
							{ className: 'help-block' },
							' ',
							this.state.error_username,
							' '
						)
					),
					_react2.default.createElement(
						'div',
						{ className: (0, _classnames2.default)('form-group', { 'has-error': this.state.error_password }) },
						_react2.default.createElement(
							'label',
							{ className: 'control-label' },
							' Password '
						),
						_react2.default.createElement('input', {
							type: 'password',
							name: 'password',
							className: 'form-control',
							onChange: this.onChange
						}),
						this.state.error_password && _react2.default.createElement(
							'span',
							{ className: 'help-block' },
							' ',
							this.state.error_password,
							' '
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group', style: styles.buttonStyle },
						_react2.default.createElement(
							'button',
							{ className: 'btn btn-lg btn-success' },
							' Login '
						)
					)
				)
			);
		}
	}]);

	return LoginForm;
}(_react2.default.Component);

exports.default = LoginForm;


LoginForm.propTypes = {
	studentLoginRequest: _propTypes2.default.func.isRequired,
	instructorLoginRequest: _propTypes2.default.func.isRequired,
	getCourses: _propTypes2.default.func.isRequired
};

/***/ })

})