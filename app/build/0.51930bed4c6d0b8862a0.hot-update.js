webpackHotUpdate(0,{

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

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

		return _possibleConstructorReturn(this, (NewGradeComponent.__proto__ || Object.getPrototypeOf(NewGradeComponent)).apply(this, arguments));
	}

	_createClass(NewGradeComponent, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'h1',
				null,
				' ',
				this.props.location.state.courseTitle.activeCourse,
				' '
			);
		}
	}]);

	return NewGradeComponent;
}(_react2.default.Component);

exports.default = NewGradeComponent;

/***/ })

})