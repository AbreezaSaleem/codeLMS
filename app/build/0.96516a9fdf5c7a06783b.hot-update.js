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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Report = function (_React$Component) {
	_inherits(Report, _React$Component);

	function Report() {
		_classCallCheck(this, Report);

		return _possibleConstructorReturn(this, (Report.__proto__ || Object.getPrototypeOf(Report)).apply(this, arguments));
	}

	_createClass(Report, [{
		key: 'render',
		value: function render() {
			var totalRows = 5;
			var cellsInRow = 5;
			var min = 1;
			var max = 10;

			function drawTable() {
				// get the reference for the body
				var div1 = document.getElementById('div1');

				// creates a <table> element
				var tbl = document.createElement("table");

				// creating rows
				for (var r = 0; r < totalRows; r++) {
					var row = document.createElement("tr");

					// create cells in row
					for (var c = 0; c < cellsInRow; c++) {
						var cell = document.createElement("td");
						cell.appendChild('pls');
						row.appendChild(cell);
					}

					tbl.appendChild(row); // add the row to the end of the table body
				}

				div1.appendChild(tbl); // appends <table> into <div1>
			}
			return _react2.default.createElement('div1', null);
		}
	}]);

	return Report;
}(_react2.default.Component);

exports.default = Report;

/***/ })

})