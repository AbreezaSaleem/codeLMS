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
    key: "render",
    value: function render() {
      console.log('results are');
      var data = this.props.location.report;
      console.log(pls);
      /*const data = [{
        name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        }
      },
      {
      	name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        }
      }
      ]*/

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
      }, {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: function accessor(d) {
          return d.friend.name;
        } // Custom value accessors!
      }, {
        Header: function Header(props) {
          return _react2.default.createElement(
            "span",
            null,
            "Friend Age"
          );
        }, // Custom header components!
        accessor: 'friend.age'
      }];

      return _react2.default.createElement(_reactTable2.default, { className: "-striped -highlight",
        minRows: 3,
        data: data,
        columns: columns });
    }
  }]);

  return Report;
}(_react2.default.Component);

exports.default = Report;

/***/ })

})