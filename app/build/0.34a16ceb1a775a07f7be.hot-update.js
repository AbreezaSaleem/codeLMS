webpackHotUpdate(0,{

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navbar = __webpack_require__(14);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _ReactAce = __webpack_require__(434);

var _ReactAce2 = _interopRequireDefault(_ReactAce);

var _ConsolePageActions = __webpack_require__(457);

var _reactRedux = __webpack_require__(11);

var _socket = __webpack_require__(458);

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var socket = void 0;

var CodeEditor = function (_React$Component) {
	_inherits(CodeEditor, _React$Component);

	function CodeEditor() {
		_classCallCheck(this, CodeEditor);

		var _this = _possibleConstructorReturn(this, (CodeEditor.__proto__ || Object.getPrototypeOf(CodeEditor)).call(this));

		socket = _socket2.default.connect('http://localhost:8080');
		_this.state = {
			submitButtonClicked: false,
			runButtonClicked: false
		};
		_this.submitButton = _this.submitButton.bind(_this);
		_this.runButton = _this.runButton.bind(_this);

		return _this;
	}

	_createClass(CodeEditor, [{
		key: 'submitButton',
		value: function submitButton(event) {
			event.preventDefault();
			console.log("Submit Button Clicked");
			this.setState({
				submitButtonClicked: true
			});
		}
	}, {
		key: 'runButton',
		value: function runButton(event) {
			event.preventDefault();
			console.log("Run Button Clicked");
			this.setState({
				runButtonClicked: true
			});

			this.props.sendCode(socket, "heyy");
		}
	}, {
		key: 'render',
		value: function render() {
			var sendCode = this.props.sendCode;

			console.log('CoursePage props');
			console.log("back againnnn");
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Navbar2.default, null),
				_react2.default.createElement(
					'form',
					null,
					_react2.default.createElement(
						'fieldset',
						null,
						_react2.default.createElement(
							'legend',
							{ align: 'left' },
							' ',
							this.props.location.state.GradeComponentName
						),
						_react2.default.createElement(
							'div',
							{ className: 'modal-body row' },
							_react2.default.createElement(
								'div',
								{ className: 'col-lg-2 col-md-4 col-sm-6' },
								_react2.default.createElement(
									'h3',
									{ align: 'left' },
									'Instructions'
								),
								_react2.default.createElement('input', { type: 'text',
									id: 'myText',
									defaultValue: 'Write a function for Sum' })
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-lg-4 col-md-6 col-sm-8' },
								_react2.default.createElement(
									'h3',
									null,
									'Code Editor'
								),
								_react2.default.createElement(_ReactAce2.default, { runButtonClicked: this.state.runButtonClicked, submitButtonClicked: this.state.submitButtonClicked }),
								_react2.default.createElement(
									'div',
									{ className: 'row eq' },
									_react2.default.createElement('input', { type: 'button', defaultValue: 'Run', onClick: this.runButton }),
									_react2.default.createElement('input', { type: 'button', defaultValue: 'Submit', onClick: this.submitButton })
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-lg-6 col-md-8 col-sm-10' },
								_react2.default.createElement(
									'h3',
									null,
									'Chat Box'
								),
								_react2.default.createElement('textarea', { id: 'myTextArea',
									rows: '10',
									cols: '20',
									defaultValue: 'Type your comment...' }),
								_react2.default.createElement(
									'div',
									{ className: 'row eq' },
									_react2.default.createElement('input', { type: 'button', defaultValue: 'Post', onClick: function onClick() {
											console.log('Post Clicked');
										} })
								)
							)
						)
					)
				)
			);
		}
	}]);

	return CodeEditor;
}(_react2.default.Component);

CodeEditor.propTypes = {
	userCode: PropTypes.object.isRequired,
	sendCode: PropTypes.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		sendCode: function sendCode(socket, code) {
			return dispatch((0, _ConsolePageActions.sendCodeToTheServer)(socket, code));
		}
	};
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(CodeEditor);

/***/ })

})