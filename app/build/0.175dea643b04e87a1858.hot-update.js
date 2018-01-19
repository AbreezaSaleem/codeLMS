webpackHotUpdate(0,{

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navbar = __webpack_require__(13);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _ReactAce = __webpack_require__(437);

var _ReactAce2 = _interopRequireDefault(_ReactAce);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _socket = __webpack_require__(460);

var _socket2 = _interopRequireDefault(_socket);

var _ConsolePageActions = __webpack_require__(56);

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
			codeOutput: 'wtf',
			submitButtonClicked: false,
			runButtonClicked: false
		};
		_this.submitButton = _this.submitButton.bind(_this);
		_this.runButton = _this.runButton.bind(_this);
		_this.uploadButton = _this.uploadButton.bind(_this);
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
			console.log('user code is');
			console.log(this.props.state.userCode);
			/*this.props.sendCodeToSever(this.props.userCode).then( response => 
   {
   	console.log('here')
   	console.log( response.data.output )
   	this.setState({ codeOutput: response.data.output, errors: response.data.errors }) 
   console.log('updated state')
   console.log(this.state)
   })*/
			this.props.sendCode(socket, this.props.state.userCode);
			socket.on('returnOutput', function (ret) {
				console.log(ret.output);
				console.log(ret.errors);
			});
		}
	}, {
		key: 'runButton',
		value: function runButton(event) {
			var _this2 = this;

			event.preventDefault();
			console.log("Run Button Clicked");
			this.setState({
				runButtonClicked: true
			});
			this.props.sendCodeToSever(this.props.userCode).then(function (response) {
				return _this2.setState({ codeOutput: response.data.effoff });
			});

			//this.props.sendCode(socket, "heyy");
		}
	}, {
		key: 'uploadButton',
		value: function uploadButton(event) {
			event.preventDefault();
			// send code, username and dir name
			var data = this.props.state;
			console.log('uploading');
			console.log(data);
			courseCode = data.activeCourse.activeCourse.split('|')[0];
			this.props.uploadCode(socket, data.userCode.userCode, data.currentUsername.currentUsername, courseCode);
		}
	}, {
		key: 'render',
		value: function render() {
			var sendCode = this.props.sendCode;
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('input', { type: 'button', defaultValue: 'Upload code', onClick: this.uploadButton }),
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
									_react2.default.createElement('input', { type: 'button', defaultValue: 'Submit', onClick: this.submitButton }),
									_react2.default.createElement('input', { type: 'button', defaultValue: 'Run', onClick: this.runButton })
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
								),
								_react2.default.createElement(
									'h1',
									null,
									this.state.codeOutput
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
	state: _propTypes2.default.object.isRequired,
	sendCode: _propTypes2.default.func.isRequired,
	uploadCode: _propTypes2.default.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		sendCode: function sendCode(socket, code) {
			return dispatch((0, _ConsolePageActions.sendCodeToTheServer)(socket, code));
		},
		uploadCode: function uploadCode(socket, code, name, dirname) {
			return dispatch((0, _ConsolePageActions.uploadCodeToGitlab)(socket, code, name, dirname));
		}
	};
};

function mapStateToProps(state) {
	console.log(state);
	return { state: state // TAKE ONLY THE THINGS U NEED >:(
	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CodeEditor);

/***/ })

})