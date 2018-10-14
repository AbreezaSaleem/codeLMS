webpackHotUpdate(0,{

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navbar = __webpack_require__(10);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _ReactAce = __webpack_require__(106);

var _ReactAce2 = _interopRequireDefault(_ReactAce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeEditor = function (_React$Component) {
	_inherits(CodeEditor, _React$Component);

	function CodeEditor() {
		_classCallCheck(this, CodeEditor);

		return _possibleConstructorReturn(this, (CodeEditor.__proto__ || Object.getPrototypeOf(CodeEditor)).apply(this, arguments));
	}

	_createClass(CodeEditor, [{
		key: 'render',
		value: function render() {
			var PageStyle = {
				height: 'auto',
				width: '30%',
				display: 'inline-block',
				background: 'rgba(225,225,225, 0.3)',
				// padding: 0,
				margin: 3
			};

			var Chatbox = {
				height: '83%',
				width: '100%',
				display: 'inline-block'
			};

			var buttonStyle = {
				margin: 'auto',
				width: '15%',
				float: 'center'
			};

			console.log('CoursePage props');
			console.log("back againnnn");
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Navbar2.default, null),
				_react2.default.createElement(
					'form',
					{ align: 'center' },
					_react2.default.createElement(
						'fieldset',
						{ align: 'center' },
						_react2.default.createElement(
							'legend',
							null,
							'Assignment 1'
						),
						_react2.default.createElement(
							'div',
							{ className: 'row', align: 'center' },
							_react2.default.createElement(
								'div',
								{ className: 'column', align: 'center', style: PageStyle },
								_react2.default.createElement(
									'h3',
									null,
									'Instructions'
								),
								_react2.default.createElement(
									'div',
									{ className: 'panel-group', role: 'tablist' },
									_react2.default.createElement(
										'div',
										{ className: 'panel panel-default' },
										_react2.default.createElement(
											'div',
											{ className: 'panel-heading', role: 'tab', id: 'collapseListGroupHeading1' },
											_react2.default.createElement(
												'h4',
												{ className: 'panel-title' },
												_react2.default.createElement(
													'a',
													{ className: 'collapsed', 'data-toggle': 'collapse', href: '#collapseListGroup1', 'aria-expanded': 'false', 'aria-controls': 'collapseListGroup1' },
													'Questions'
												)
											)
										),
										_react2.default.createElement(
											'div',
											{ id: 'collapseListGroup1', className: 'panel-collapse collapse', role: 'tabpanel', 'aria-labelledby': 'collapseListGroupHeading1' },
											_react2.default.createElement(
												'p',
												null,
												'Write a function for Fibonacci'
											)
										)
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'panel-group', role: 'tablist' },
									_react2.default.createElement(
										'div',
										{ className: 'panel panel-default' },
										_react2.default.createElement(
											'div',
											{ className: 'panel-heading', role: 'tab', id: 'collapseListGroupHeading1' },
											_react2.default.createElement(
												'h4',
												{ className: 'panel-title' },
												_react2.default.createElement(
													'a',
													{ className: 'collapsed', 'data-toggle': 'collapse', href: '#collapseListGroup1', 'aria-expanded': 'false', 'aria-controls': 'collapseListGroup1' },
													'Instructions'
												)
											)
										),
										_react2.default.createElement(
											'div',
											{ id: 'collapseListGroup1', className: 'panel-collapse collapse', role: 'tabpanel', 'aria-labelledby': 'collapseListGroupHeading1' },
											_react2.default.createElement(
												'p',
												null,
												'Write a code in using code editor'
											)
										)
									)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'column', align: 'center', style: PageStyle },
								_react2.default.createElement(
									'h3',
									null,
									'Code Editor'
								),
								_react2.default.createElement(_ReactAce2.default, null),
								_react2.default.createElement(
									'div',
									{ className: 'row eq', align: 'left' },
									_react2.default.createElement('input', { type: 'button', style: buttonStyle, defaultValue: 'Run', onClick: function onClick() {
											console.log('Run Clicked');
										} }),
									_react2.default.createElement('input', { type: 'button', style: buttonStyle, defaultValue: 'Submit', onClick: function onClick() {
											console.log('Submit Clicked');
										} })
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'column', align: 'center', style: PageStyle },
								_react2.default.createElement(
									'h3',
									null,
									'Chat Box'
								),
								_react2.default.createElement('textarea', { placeholder: 'Type your comment here...', style: Chatbox }),
								_react2.default.createElement(
									'div',
									{ className: 'row eq', align: 'left' },
									_react2.default.createElement('input', { type: 'button', style: buttonStyle, defaultValue: 'Post', onClick: function onClick() {
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

exports.default = CodeEditor;

/***/ })

})