webpackHotUpdate(0,{

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactAceEditor = __webpack_require__(435);

var _reactAceEditor2 = _interopRequireDefault(_reactAceEditor);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(11);

var _ConsolePageActions = __webpack_require__(457);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeEditorTextArea = function (_Component) {
  _inherits(CodeEditorTextArea, _Component);

  function CodeEditorTextArea() {
    _classCallCheck(this, CodeEditorTextArea);

    var _this = _possibleConstructorReturn(this, (CodeEditorTextArea.__proto__ || Object.getPrototypeOf(CodeEditorTextArea)).call(this));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(CodeEditorTextArea, [{
    key: 'onChange',
    value: function onChange(newValue, e) {
      console.log(newValue, e);

      var editor = this.ace.editor; // The editor object is from Ace's API
      console.log(editor.getValue()); // Outputs the value of the editor
      this.props.addCode(editor.getValue());
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.runButtonClicked) {
        console.log("run Button Clicked in Console");
      }

      if (this.props.submitButtonClicked) {
        console.log("submit Button Clicked in Console");
      }

      return _react2.default.createElement(_reactAceEditor2.default, {
        mode: 'javascript',
        theme: 'eclipse',
        onChange: this.onChange,
        style: { height: '400px' },
        ref: function ref(instance) {
          _this2.ace = instance;
        } // Let's put things into scope
      });
    }
  }]);

  return CodeEditorTextArea;
}(_react.Component);

CodeEditorTextArea.propTypes = {
  addCode: _propTypes2.default.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCode: function addCode(code) {
      return dispatch((0, _ConsolePageActions.addUserCode)(code));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(CodeEditorTextArea);

/***/ })

})