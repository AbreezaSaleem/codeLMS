webpackHotUpdate(0,{

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(43);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__(5);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Navbar = __webpack_require__(8);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Logo = __webpack_require__(14);

var _Logo2 = _interopRequireDefault(_Logo);

var _History = __webpack_require__(4);

var _History2 = _interopRequireDefault(_History);

var _SignupActions = __webpack_require__(221);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_React$Component) {
	_inherits(Signup, _React$Component);

	_createClass(Signup, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			window.addEventListener("hashchange", function (e) {
				_History2.default.goBack();
			});
		}
	}]);

	function Signup() {
		_classCallCheck(this, Signup);

		var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));

		_this.state = {
			name: '',
			email: '',
			password: '',
			user_type: '?',
			confirm_password: '',
			error_email: '',
			error_password: '',
			error_username: ''
		};

		_this.onChange = _this.onChange.bind(_this);
		_this.onButtonClick = _this.onButtonClick.bind(_this);
		return _this;
	}

	_createClass(Signup, [{
		key: 'onChange',
		value: function onChange(event) {
			var _setState;

			this.setState((_setState = {}, _defineProperty(_setState, event.target.name, event.target.value), _defineProperty(_setState, 'error_email', ''), _defineProperty(_setState, 'error_password', ''), _defineProperty(_setState, 'error_username', ''), _setState));
			//console.log(this.state)
			event.preventDefault();
		}
	}, {
		key: 'onButtonClick',
		value: function onButtonClick(event) {
			var type = event.target.name;
			this.setState({ user_type: type });
			if (this.state.password != this.state.confirm_password) this.setState({ error_password: 'Passwords dont match.' });
			console.log(type);
			if (this.state.name && this.state.email && this.state.password && this.state.confirm_password) {
				if (type == 'Instructor') {
					console.log('here!!');
					this.props.instructorSignup({
						username: this.state.name,
						password: this.state.password,
						email: this.state.email,
						name: this.state.name
					}).then(function (response) {
						_History2.default.push({
							pathname: '/'
						});
					});
				} else {
					console.log('student signing up~');
					this.props.studentSignup({
						username: this.state.email.substring(0, email.lastIndexOf("@")),
						password: this.state.password,
						email: this.state.email,
						name: this.state.name
					}).then(function (response) {
						_History2.default.push({
							pathname: '/'
						});
					});
				}
			} else {
				this.setState({
					error_password: 'Please fill all the required fields',
					error_username: 'Please fill all the required fields',
					error_email: 'Please fill all the required fields'
				});
			}
			event.preventDefault();
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
				_react2.default.createElement(_Navbar2.default, null),
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-md-4 col-md-offset-4' },
						_react2.default.createElement(_Logo2.default, null),
						_react2.default.createElement(
							'div',
							{ className: 'header clearfix' },
							_react2.default.createElement(
								'h3',
								{ className: 'text-muted text-center page-header' },
								' Signup'
							)
						),
						_react2.default.createElement(
							'form',
							{ name: 'lps' },
							_react2.default.createElement(
								'div',
								_defineProperty({ className: 'form-group' }, 'className', (0, _classnames2.default)('form-group', { 'has-error': this.state.error_username })),
								_react2.default.createElement(
									'label',
									null,
									'Name'
								),
								_react2.default.createElement('input', {
									type: 'text',
									className: 'form-control',
									placeholder: 'Name',
									name: 'name',
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
								_defineProperty({ className: 'form-group' }, 'className', (0, _classnames2.default)('form-group', { 'has-error': this.state.error_email })),
								_react2.default.createElement(
									'label',
									null,
									'Email'
								),
								_react2.default.createElement('input', {
									type: 'email',
									className: 'form-control',
									placeholder: 'Email',
									name: 'email',
									onChange: this.onChange
								}),
								this.state.error_email && _react2.default.createElement(
									'span',
									{ className: 'help-block' },
									' ',
									this.state.error_email,
									' '
								)
							),
							_react2.default.createElement(
								'div',
								_defineProperty({ className: 'form-group' }, 'className', (0, _classnames2.default)('form-group', { 'has-error': this.state.error_password })),
								_react2.default.createElement(
									'label',
									null,
									'Password'
								),
								_react2.default.createElement('input', {
									type: 'password',
									className: 'form-control',
									placeholder: 'Password',
									name: 'password',
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
								_defineProperty({ className: 'form-group' }, 'className', (0, _classnames2.default)('form-group', { 'has-error': this.state.error_password })),
								_react2.default.createElement(
									'label',
									null,
									'Confirm Password'
								),
								_react2.default.createElement('input', {
									type: 'password',
									className: 'form-control',
									placeholder: 'Password',
									name: 'confirm_password',
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
								null,
								_react2.default.createElement(
									'div',
									{ className: 'float-left' },
									_react2.default.createElement(
										'button',
										{ className: 'btn btn-lg btn-success', onClick: this.onButtonClick, name: 'Student' },
										' Register as Student '
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'float-right' },
									_react2.default.createElement(
										'button',
										{ className: 'btn btn-lg btn-success', onClick: this.onButtonClick, name: 'Instructor' },
										' Register as Instructor '
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Signup;
}(_react2.default.Component);

Signup.propTypes = {
	instructorSignup: _propTypes2.default.func.isRequired,
	studentSignup: _propTypes2.default.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		instructorSignup: function instructorSignup(x) {
			return dispatch((0, _SignupActions.registerInstructor)(x));
		},
		studentSignup: function studentSignup(x) {
			return dispatch((0, _SignupActions.registerStudent)(x));
		}
	};
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Signup);

/***/ })

})