webpackHotUpdate(0,{

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactTable = __webpack_require__(499);

var _reactTable2 = _interopRequireDefault(_reactTable);

__webpack_require__(505);

var _Navbar = __webpack_require__(11);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = __webpack_require__(38);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Report = function (_React$Component) {
	_inherits(Report, _React$Component);

	function Report() {
		_classCallCheck(this, Report);

		var _this = _possibleConstructorReturn(this, (Report.__proto__ || Object.getPrototypeOf(Report)).call(this));

		_this.state = {
			data: '',
			testCasesResults: '',
			username: '',
			courseCode: '',
			courseTitle: ''
		};
		return _this;
	}

	_createClass(Report, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			var feedback = this.props.location.state;
			this.setState({
				data: feedback.report,
				testCasesResults: feedback.testCases,
				username: feedback.username,
				courseCode: feedback.course.split('|')[0],
				courseTitle: feedback.course.split('|')[1]
			});
		}
	}, {
		key: "render",
		value: function render() {
			console.log('results are');
			var data = this.props.location.state.report;
			console.log(this.props.location);
			console.log(data);
			console.log('arsehole');
			console.log(this.state);

			/*return(
     <ReactTable className = '-striped -highlight'
   	 minRows={3}
   	 data={data}
   	 columns={columns}
   	 getTrProps={(state, rowInfo, column) => {
   	 return {
   		style: {
   		  background: rowInfo.row.Offset > 20 ? '#cc443b' : void 0
   		}
   	 };
     }}/>);*/
			var columns = [{
				Header: 'Name',
				accessor: 'Name' // String-based value accessors!
			}, {
				Header: 'Offset',
				accessor: 'Offset',
				Cell: function Cell(props) {
					return _react2.default.createElement(
						"span",
						{ className: "number" },
						props.value
					);
				} // Custom cell components!
			}];

			var numCases = Object.keys(data[0]).length - 2;
			var temp = [].concat(_toConsumableArray(Array(numCases).keys())).map(function (x) {
				return ++x;
			});
			console.log(temp);
			temp.map(function (num) {
				return columns.push({ id: 'Test Case ' + num, Header: 'Test Case ' + num, accessor: function accessor(d) {
						return d[num];
					} });
			});

			var createTestCasesResults = function createTestCasesResults(data, index) {
				return _react2.default.createElement(
					"li",
					{ style: styles.listStyle, key: index },
					" Test Case ",
					data.TestCase,
					": ",
					data.result,
					"  "
				);
			};

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h3",
					{ style: styles.headingStyle },
					" Report for Assignment 1 "
				),
				_react2.default.createElement(
					"h3",
					{ style: styles.headingStyle },
					" ",
					this.state.username,
					" "
				),
				_react2.default.createElement(
					"h3",
					{ style: styles.headingStyle },
					" ",
					this.state.courseTitle,
					" "
				),
				_react2.default.createElement(
					"h3",
					{ style: styles.headingStyle },
					" ",
					this.state.courseCode,
					" "
				),
				_react2.default.createElement(_reactTable2.default, { className: "-striped -highlight",
					minRows: this.state.data.length,
					showPaginationBottom: false,
					data: this.state.data,
					columns: columns,
					getTrProps: function getTrProps(state, rowInfo, column) {
						return {
							style: {
								background: rowInfo.row.Offset > 20 ? '#cc443b' : void 0
							}
						};
					} }),
				this.state.testCasesResults.map(createTestCasesResults)
			);
		}
	}]);

	return Report;
}(_react2.default.Component);

exports.default = Report;


var styles = {
	headingStyle: {
		color: '#b48608',
		fontFamily: 'Droid serif',
		fontSize: 24,
		fontWeight: 400,
		fontStyle: 'italic',
		textAlign: 'center'
	},
	listStyle: {
		color: '#b48608',
		fontFamily: 'Droid serif',
		fontSize: 18,
		fontWeight: 400,
		fontStyle: 'italic',
		textAlign: 'center'
	}
};

/***/ })

})