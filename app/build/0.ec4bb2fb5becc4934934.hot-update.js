webpackHotUpdate(0,{

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _History = __webpack_require__(8);

var _History2 = _interopRequireDefault(_History);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GradeComponentItemNumber = function (_React$Component) {
	_inherits(GradeComponentItemNumber, _React$Component);

	function GradeComponentItemNumber() {
		_classCallCheck(this, GradeComponentItemNumber);

		var _this = _possibleConstructorReturn(this, (GradeComponentItemNumber.__proto__ || Object.getPrototypeOf(GradeComponentItemNumber)).call(this));

		_this.onClick = _this.onClick.bind(_this);
		return _this;
	}

	_createClass(GradeComponentItemNumber, [{
		key: 'onClick',
		value: function onClick(event) {
			_History2.default.push({
				pathname: '/loginI/instructor/course/roster',
				state: { courseTitle: this.props.activeCourse }
			});
			event.preventDefault();
		}
	}, {
		key: 'onNew',
		value: function onNew(event) {
			console.log("new assignement");
			event.preventDefault();
		}
	}, {
		key: 'render',
		value: function render() {
			//console.log('GradeComponentItemNumber')
			//console.log(this.props.activeCourse)
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'pull-left' },
					_react2.default.createElement(
						'li',
						{ className: 'list-group-item' },
						this.props.GradeComponentName
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'pull-right' },
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'button',
							{ className: 'btn-custom', onClick: this.onNew },
							' New '
						),
						_react2.default.createElement(
							'button',
							{ className: 'btn-custom', onClick: this.onClick },
							' Solution '
						),
						_react2.default.createElement(
							'button',
							{ className: 'btn-custom btn-custom btn-hover' },
							' Mean '
						),
						_react2.default.createElement(
							'button',
							{ className: 'btn-custom hover' },
							' Edit '
						)
					)
				)
			);
		}
	}]);

	return GradeComponentItemNumber;
}(_react2.default.Component);

GradeComponentItemNumber.propTypes = {
	activeCourse: _propTypes2.default.string.isRequired
};

function mapStateToProps(state) {
	return { activeCourse: state.activeCourse };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(GradeComponentItemNumber);

/***/ })

})