webpackHotUpdate(0,[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(70)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(71)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for putting history on context.
 */

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: '/',
      url: '/',
      params: {},
      isExact: pathname === '/'
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(children == null || __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 1, 'A <Router> may have only one child element');

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(this.props.history === nextProps.history, 'You cannot change <Router history>');
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children) : null;
  };

  return Router;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Router.propTypes = {
  history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node
};
Router.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Router.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Router);

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore right clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ['replace', 'to', 'innerRef']); // eslint-disable-line no-unused-vars

    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, 'You should not use <Link> outside a <Router>');

    var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      createHref: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__(20);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var isEmptyChildren = function isEmptyChildren(children) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(router, 'You should not use <Route> or withRouter() outside a <Router>');

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return path ? Object(__WEBPACK_IMPORTED_MODULE_4__matchPath__["a" /* default */])(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }) : route.match;
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    return component ? // component prop gets first priority, only called if there's a match
    match ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
    match ? render(props) : null : children ? // children come last, always called
    typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children) : null : null;
  };

  return Route;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Route.propTypes = {
  computedMatch: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object, // private, from <Switch>
  path: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  exact: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  sensitive: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  component: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  render: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node]),
  location: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Route.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
    route: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
  })
};
Route.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Route);

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(18);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<BrowserRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { BrowserRouter as Router }`.');
  };

  BrowserRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

BrowserRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  forceRefresh: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (BrowserRouter);

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(18);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<HashRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { HashRouter as Router }`.');
  };

  HashRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

HashRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  hashType: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['hashbang', 'noslash', 'slash']),
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (HashRouter);

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(19);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = function (_React$Component) {
  _inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<MemoryRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { MemoryRouter as Router }`.');
  };

  MemoryRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

MemoryRouter.propTypes = {
  initialEntries: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
  initialIndex: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (MemoryRouter);

/***/ }),
/* 77 */,
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Route__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(35);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref.ariaCurrent,
      rest = _objectWithoutProperties(_ref, ['to', 'exact', 'strict', 'location', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive', 'ariaCurrent']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Route__["a" /* default */], {
    path: (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(' ') : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        'aria-current': isActive && ariaCurrent
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */].propTypes.to,
  exact: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  activeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  activeStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  isActive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  ariaCurrent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['page', 'step', 'location', 'true'])
};

NavLink.defaultProps = {
  activeClassName: 'active',
  ariaCurrent: 'true'
};

/* harmony default export */ __webpack_exports__["a"] = (NavLink);

/***/ }),
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt = function (_React$Component) {
  _inherits(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck(this, Prompt);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, 'You should not use <Prompt> outside a <Router>');

    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Prompt.propTypes = {
  when: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      block: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Prompt);

/***/ }),
/* 83 */,
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history__ = __webpack_require__(38);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for updating the location programmatically
 * with a component.
 */

var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_3_invariant___default()(this.context.router, 'You should not use <Redirect> outside a <Router>');

    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = Object(__WEBPACK_IMPORTED_MODULE_4_history__["createLocation"])(prevProps.to);
    var nextTo = Object(__WEBPACK_IMPORTED_MODULE_4_history__["createLocation"])(this.props.to);

    if (Object(__WEBPACK_IMPORTED_MODULE_4_history__["locationsAreEqual"])(prevTo, nextTo)) {
      __WEBPACK_IMPORTED_MODULE_2_warning___default()(false, 'You tried to redirect to the same route you\'re currently on: ' + ('"' + nextTo.pathname + nextTo.search + '"'));
      return;
    }

    this.perform();
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var _props = this.props,
        push = _props.push,
        to = _props.to;


    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Redirect.propTypes = {
  push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  from: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Redirect);

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Router__ = __webpack_require__(19);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var normalizeLocation = function normalizeLocation(object) {
  var _object$pathname = object.pathname,
      pathname = _object$pathname === undefined ? '/' : _object$pathname,
      _object$search = object.search,
      search = _object$search === undefined ? '' : _object$search,
      _object$hash = object.hash,
      hash = _object$hash === undefined ? '' : _object$hash;


  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends({}, location, {
    pathname: Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["addLeadingSlash"])(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["addLeadingSlash"])(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createLocation = function createLocation(location) {
  return typeof location === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["parsePath"])(location) : normalizeLocation(location);
};

var createURL = function createURL(location) {
  return typeof location === 'string' ? location : Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["createPath"])(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(false, 'You cannot %s with <StaticRouter>', methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["addLeadingSlash"])(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = 'PUSH';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = 'REPLACE';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<StaticRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { StaticRouter as Router }`.');
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ['basename', 'context', 'location']);

    var history = {
      createHref: this.createHref,
      action: 'POP',
      location: stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler('go'),
      goBack: staticHandler('goBack'),
      goForward: staticHandler('goForward'),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Router__["a" /* default */], _extends({}, props, { history: history }));
  };

  return StaticRouter;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

StaticRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  context: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object])
};
StaticRouter.defaultProps = {
  basename: '',
  location: '/'
};
StaticRouter.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (StaticRouter);

/***/ }),
/* 90 */,
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__(20);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_3_invariant___default()(this.context.router, 'You should not use <Switch> outside a <Router>');
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (element) {
      if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(element)) return;

      var _element$props = element.props,
          pathProp = _element$props.path,
          exact = _element$props.exact,
          strict = _element$props.strict,
          sensitive = _element$props.sensitive,
          from = _element$props.from;

      var path = pathProp || from;

      if (match == null) {
        child = element;
        match = path ? Object(__WEBPACK_IMPORTED_MODULE_4__matchPath__["a" /* default */])(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }) : route.match;
      }
    });

    return match ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Switch.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    route: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};


/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__(37);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ['wrappedComponentRef']);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Route__["a" /* default */], { render: function render(routeComponentProps) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, remainingProps, routeComponentProps, { ref: wrappedComponentRef }));
      } });
  };

  C.displayName = 'withRouter(' + (Component.displayName || Component.name) + ')';
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
  };

  return __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(C, Component);
};

/* harmony default export */ __webpack_exports__["a"] = (withRouter);

/***/ }),
/* 95 */,
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(22);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (process.env.NODE_ENV !== 'production') {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);

  return Provider;
}

/* harmony default export */ __webpack_exports__["b"] = (createProvider());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(68);

var _reactRedux = __webpack_require__(95);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Login = __webpack_require__(173);

var _Login2 = _interopRequireDefault(_Login);

var _Login3 = __webpack_require__(201);

var _Login4 = _interopRequireDefault(_Login3);

var _Dashboard = __webpack_require__(203);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _StudentsHandle = __webpack_require__(204);

var _StudentsHandle2 = _interopRequireDefault(_StudentsHandle);

var _CourseItem = __webpack_require__(170);

var _CourseItem2 = _interopRequireDefault(_CourseItem);

var _SemesterItem = __webpack_require__(169);

var _SemesterItem2 = _interopRequireDefault(_SemesterItem);

var _Logo = __webpack_require__(153);

var _Logo2 = _interopRequireDefault(_Logo);

var _Tiles = __webpack_require__(158);

var _Tiles2 = _interopRequireDefault(_Tiles);

var _ConsolePage = __webpack_require__(206);

var _ConsolePage2 = _interopRequireDefault(_ConsolePage);

var _Tiles3 = __webpack_require__(207);

var _Tiles4 = _interopRequireDefault(_Tiles3);

var _CoursePage = __webpack_require__(211);

var _CoursePage2 = _interopRequireDefault(_CoursePage);

var _CoursePage3 = __webpack_require__(212);

var _CoursePage4 = _interopRequireDefault(_CoursePage3);

var _Roster = __webpack_require__(215);

var _Roster2 = _interopRequireDefault(_Roster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Routes = function (_React$Component) {
	_inherits(Routes, _React$Component);

	function Routes() {
		_classCallCheck(this, Routes);

		return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
	}

	_createClass(Routes, [{
		key: 'render',
		value: function render() // protected routes, should you display tiles page if the user isnt logged in? no, duh  https://www.youtube.com/watch?v=UVQ0ATR0vpI&t=678s
		{
			return _react2.default.createElement(
				_reactRouterDom.Switch,
				null,
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Dashboard2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/loginS', component: _Login2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/loginS/student', component: _Tiles2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/loginS/student/course', component: _CoursePage2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/loginS/student/course/console', component: _ConsolePage2.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/loginI', component: _Login4.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/loginI/instructor', component: _Tiles4.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/loginI/instructor/course', component: _CoursePage4.default }),
				_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/loginI/instructor/course/roster', component: _Roster2.default })
			);
		}
	}]);

	return Routes;
}(_react2.default.Component);

// here you'll access the store...
// check if logged in is true
// if it is, do the shit
// i. hope. im. right

Routes.propTypes = {
	loggedIn: _propTypes2.default.bool.isRequired
};

function mapStateToProps(state) {
	console.log('HERE');
	console.log(state);
	return { loggedIn: state.loggedIn };
}

//connect(mapStateToProps, null) 
exports.default = Routes;

/***/ }),
/* 149 */,
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
	_inherits(Navbar, _React$Component);

	function Navbar() {
		_classCallCheck(this, Navbar);

		return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
	}

	_createClass(Navbar, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'nav',
				{ className: 'navbar navbar-expand-sm navbar-custom' },
				_react2.default.createElement(
					'a',
					{ href: '/', className: 'navbar-brand' },
					_react2.default.createElement(
						'div',
						{ className: 'header clearfix' },
						_react2.default.createElement(
							'h3',
							{ className: 'text-muted' },
							'Code LMS'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'navbar-collapse collapse navbar-brand', id: 'navbar4' },
					_react2.default.createElement(
						'ul',
						{ className: 'navbar-nav pull-right' },
						_react2.default.createElement(
							'li',
							{ className: 'nav-item' },
							_react2.default.createElement(
								'a',
								{ className: 'nav-link', href: '/loginS/student' },
								' ',
								_react2.default.createElement(
									'span',
									{ className: 'src-only' },
									'Profile'
								),
								' '
							)
						),
						_react2.default.createElement(
							'li',
							{ className: 'nav-item' },
							_react2.default.createElement(
								'a',
								{ className: 'nav-link', href: '/loginS/student' },
								' ',
								_react2.default.createElement(
									'span',
									{ className: 'src-only' },
									'Notifications'
								),
								' '
							)
						),
						_react2.default.createElement(
							'li',
							{ className: 'nav-item' },
							_react2.default.createElement(
								'a',
								{ className: 'nav-link', href: '/' },
								' ',
								_react2.default.createElement(
									'span',
									{ className: 'src-only' },
									'Logout'
								),
								' '
							)
						)
					)
				)
			);
		}
	}]);

	return Navbar;
}(_react2.default.Component // how will the session terminate when the user logs out?
);

exports.default = Navbar;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(165);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(180),
    getValue = __webpack_require__(185);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logo = function (_React$Component) {
	_inherits(Logo, _React$Component);

	function Logo() {
		_classCallCheck(this, Logo);

		return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
	}

	_createClass(Logo, [{
		key: 'render',
		value: function render() {
			var styles = {
				logoStyle: {
					margin: 'auto',
					width: '153'
				}
			};
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ style: styles.logoStyle },
					_react2.default.createElement('img', { src: '/images/Brown.png', className: 'center-block' })
				)
			);
		}
	}]);

	return Logo;
}(_react2.default.Component);

exports.default = Logo;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r(__webpack_require__(1)):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports.ReactCenter=r(require("react")):e.ReactCenter=r(e.React)}(this,function(e){return function(e){function r(t){if(i[t])return i[t].exports;var n=i[t]={exports:{},id:t,loaded:!1};return e[t].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}var i={};return r.m=e,r.c=i,r.p="",r(0)}([function(e,r,i){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var n=i(2),o=t(n);e.exports=o["default"]},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},e.exports=r["default"]},function(e,r,i){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(e,r){var i={};for(var t in e)r.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t]);return i}Object.defineProperty(r,"__esModule",{value:!0});var o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},a=i(20),s=t(a),l=i(5),u=t(l);r["default"]=function(e){var r=e.style,i=e.prefixer,t=void 0===i?new u["default"]:i,a=e.children,l=n(e,["style","prefixer","children"]),f={alignContent:"center",alignItems:"center",boxSizing:"border-box",display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"center"};return s["default"].createElement("div",o({style:o({},t.prefix(f),r)},l),a)}},function(e,r,i){var t,n;/*!
	  * Bowser - a browser detector
	  * https://github.com/ded/bowser
	  * MIT License | (c) Dustin Diaz 2015
	  */
!function(o,a){"undefined"!=typeof e&&e.exports?e.exports=a():(t=a,n="function"==typeof t?t.call(r,i,r,e):t,!(void 0!==n&&(e.exports=n)))}("bowser",function(){function e(e){function i(r){var i=e.match(r);return i&&i.length>1&&i[1]||""}function t(r){var i=e.match(r);return i&&i.length>1&&i[2]||""}var n,o=i(/(ipod|iphone|ipad)/i).toLowerCase(),a=/like android/i.test(e),s=!a&&/android/i.test(e),l=/CrOS/.test(e),u=i(/edge\/(\d+(\.\d+)?)/i),f=i(/version\/(\d+(\.\d+)?)/i),m=/tablet/i.test(e),c=!m&&/[^-]mobi/i.test(e);/opera|opr/i.test(e)?n={name:"Opera",opera:r,version:f||i(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(e)?n={name:"Yandex Browser",yandexbrowser:r,version:f||i(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(e)?(n={name:"Windows Phone",windowsphone:r},u?(n.msedge=r,n.version=u):(n.msie=r,n.version=i(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(e)?n={name:"Internet Explorer",msie:r,version:i(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:l?n={name:"Chrome",chromeBook:r,chrome:r,version:i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(e)?n={name:"Microsoft Edge",msedge:r,version:u}:/chrome|crios|crmo/i.test(e)?n={name:"Chrome",chrome:r,version:i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:o?(n={name:"iphone"==o?"iPhone":"ipad"==o?"iPad":"iPod"},f&&(n.version=f)):/sailfish/i.test(e)?n={name:"Sailfish",sailfish:r,version:i(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(e)?n={name:"SeaMonkey",seamonkey:r,version:i(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(e)?(n={name:"Firefox",firefox:r,version:i(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e)&&(n.firefoxos=r)):/silk/i.test(e)?n={name:"Amazon Silk",silk:r,version:i(/silk\/(\d+(\.\d+)?)/i)}:s?n={name:"Android",version:f}:/phantom/i.test(e)?n={name:"PhantomJS",phantom:r,version:i(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(e)||/rim\stablet/i.test(e)?n={name:"BlackBerry",blackberry:r,version:f||i(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(e)?(n={name:"WebOS",webos:r,version:f||i(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(e)&&(n.touchpad=r)):n=/bada/i.test(e)?{name:"Bada",bada:r,version:i(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(e)?{name:"Tizen",tizen:r,version:i(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||f}:/safari/i.test(e)?{name:"Safari",safari:r,version:f}:{name:i(/^(.*)\/(.*) /),version:t(/^(.*)\/(.*) /)},!n.msedge&&/(apple)?webkit/i.test(e)?(n.name=n.name||"Webkit",n.webkit=r,!n.version&&f&&(n.version=f)):!n.opera&&/gecko\//i.test(e)&&(n.name=n.name||"Gecko",n.gecko=r,n.version=n.version||i(/gecko\/(\d+(\.\d+)?)/i)),n.msedge||!s&&!n.silk?o&&(n[o]=r,n.ios=r):n.android=r;var d="";n.windowsphone?d=i(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):o?(d=i(/os (\d+([_\s]\d+)*) like mac os x/i),d=d.replace(/[_\s]/g,".")):s?d=i(/android[ \/-](\d+(\.\d+)*)/i):n.webos?d=i(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):n.blackberry?d=i(/rim\stablet\sos\s(\d+(\.\d+)*)/i):n.bada?d=i(/bada\/(\d+(\.\d+)*)/i):n.tizen&&(d=i(/tizen[\/\s](\d+(\.\d+)*)/i)),d&&(n.osversion=d);var p=d.split(".")[0];return m||"ipad"==o||s&&(3==p||4==p&&!c)||n.silk?n.tablet=r:(c||"iphone"==o||"ipod"==o||s||n.blackberry||n.webos||n.bada)&&(n.mobile=r),n.msedge||n.msie&&n.version>=10||n.yandexbrowser&&n.version>=15||n.chrome&&n.version>=20||n.firefox&&n.version>=20||n.safari&&n.version>=6||n.opera&&n.version>=10||n.ios&&n.osversion&&n.osversion.split(".")[0]>=6||n.blackberry&&n.version>=10.1?n.a=r:n.msie&&n.version<10||n.chrome&&n.version<20||n.firefox&&n.version<20||n.safari&&n.version<6||n.opera&&n.version<10||n.ios&&n.osversion&&n.osversion.split(".")[0]<6?n.c=r:n.x=r,n}var r=!0,i=e("undefined"!=typeof navigator?navigator.userAgent:"");return i.test=function(e){for(var r=0;r<e.length;++r){var t=e[r];if("string"==typeof t&&t in i)return!0}return!1},i._detect=e,i})},function(e,r,i){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var n=i(7),o=t(n),a=i(8),s=t(a),l=i(9),u=t(l),f=i(13),m=t(f),c=i(12),d=t(c),p=i(14),b=t(p),g=i(10),x=t(g),k=i(11),h=t(k);r["default"]=[o["default"],s["default"],m["default"],d["default"],b["default"],x["default"],h["default"],u["default"]],e.exports=r["default"]},function(e,r,i){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},s=function(){function e(e,r){for(var i=0;i<r.length;i++){var t=r[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,i,t){return i&&e(r.prototype,i),t&&e(r,t),r}}(),l=i(17),u=t(l),f=i(18),m=t(f),c=i(1),d=t(c),p=i(15),b=t(p),g=i(19),x=t(g),k=i(6),h=t(k),v=i(4),y=t(v),w=["phantom"],S=function(){function e(){var r=this,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];o(this,e);var t="undefined"!=typeof navigator?navigator.userAgent:void 0;if(this._userAgent=i.userAgent||t,this._keepUnprefixed=i.keepUnprefixed||!1,this._browserInfo=(0,u["default"])(this._userAgent),!this._browserInfo||!this._browserInfo.prefix)return this._hasPropsRequiringPrefix=!1,(0,x["default"])("Either the global navigator was undefined or an invalid userAgent was provided.","Using a valid userAgent? Please let us know and create an issue at https://github.com/rofrischmann/inline-style-prefixer/issues"),!1;this.cssPrefix=this._browserInfo.prefix.css,this.jsPrefix=this._browserInfo.prefix.inline,this.prefixedKeyframes=(0,m["default"])(this._browserInfo);var s=this._browserInfo.browser&&h["default"][this._browserInfo.browser];return s?(this._requiresPrefix=Object.keys(s).filter(function(e){return s[e]>=r._browserInfo.version}).reduce(function(e,r){return a({},e,n({},r,!0))},{}),void(this._hasPropsRequiringPrefix=Object.keys(this._requiresPrefix).length>0)):(w.forEach(function(e){r._browserInfo[e]&&(r._isWhitelisted=!0)}),this._hasPropsRequiringPrefix=!1,this._isWhitelisted?!0:((0,x["default"])("Your userAgent seems to be not supported by inline-style-prefixer. Feel free to open an issue."),!1))}return s(e,[{key:"prefix",value:function(e){var r=this;return this._hasPropsRequiringPrefix?(e=(0,b["default"])({},e),Object.keys(e).forEach(function(i){var t=e[i];t instanceof Object?e[i]=r.prefix(t):(r._requiresPrefix[i]&&(e[r.jsPrefix+(0,d["default"])(i)]=t,r._keepUnprefixed||delete e[i]),y["default"].forEach(function(n){var o=n({property:i,value:t,styles:e,browserInfo:r._browserInfo,prefix:{js:r.jsPrefix,css:r.cssPrefix,keyframes:r.prefixedKeyframes},keepUnprefixed:r._keepUnprefixed,requiresPrefix:r._requiresPrefix,forceRun:!1});(0,b["default"])(e,o)}))}),e):e}}],[{key:"prefixAll",value:function(r){var i={},t=(0,u["default"])("*");return t.browsers.forEach(function(e){var r=h["default"][e];r&&(0,b["default"])(i,r)}),!Object.keys(i).length>0?r:(r=(0,b["default"])({},r),Object.keys(r).forEach(function(n){var o=r[n];if(o instanceof Object)r[n]=e.prefixAll(o);else{var a=Object.keys(t.prefixes);a.forEach(function(e){var a=t.prefixes[e];i[n]&&(r[a.inline+(0,d["default"])(n)]=o),y["default"].forEach(function(t){var s=t({property:n,value:o,styles:r,browserInfo:{name:e,prefix:a,version:0},prefix:{},keepUnprefixed:!0,requiresPrefix:i,forceRun:!0});(0,b["default"])(r,s)})})}}),r)}}]),e}();r["default"]=S,e.exports=r["default"]},function(e,r){var i={chrome:{transform:35,transformOrigin:35,transformOriginX:35,transformOriginY:35,backfaceVisibility:35,perspective:35,perspectiveOrigin:35,transformStyle:35,transformOriginZ:35,animation:42,animationDelay:42,animationDirection:42,animationFillMode:42,animationDuration:42,animationIterationCount:42,animationName:42,animationPlayState:42,animationTimingFunction:42,appearance:50,userSelect:50,fontKerning:32,textEmphasisPosition:50,textEmphasis:50,textEmphasisStyle:50,textEmphasisColor:50,boxDecorationBreak:50,clipPath:50,maskImage:50,maskMode:50,maskRepeat:50,maskPosition:50,maskClip:50,maskOrigin:50,maskSize:50,maskComposite:50,mask:50,maskBorderSource:50,maskBorderMode:50,maskBorderSlice:50,maskBorderWidth:50,maskBorderOutset:50,maskBorderRepeat:50,maskBorder:50,maskType:50,textDecorationStyle:50,textDecorationSkip:50,textDecorationLine:50,textDecorationColor:50,filter:50,fontFeatureSettings:47,breakAfter:50,breakBefore:50,breakInside:50,columnCount:50,columnFill:50,columnGap:50,columnRule:50,columnRuleColor:50,columnRuleStyle:50,columnRuleWidth:50,columns:50,columnSpan:50,columnWidth:50},safari:{flex:8,flexBasis:8,flexDirection:8,flexGrow:8,flexFlow:8,flexShrink:8,flexWrap:8,alignContent:8,alignItems:8,alignSelf:8,justifyContent:8,order:8,transition:6,transitionDelay:6,transitionDuration:6,transitionProperty:6,transitionTimingFunction:6,transform:8,transformOrigin:8,transformOriginX:8,transformOriginY:8,backfaceVisibility:8,perspective:8,perspectiveOrigin:8,transformStyle:8,transformOriginZ:8,animation:8,animationDelay:8,animationDirection:8,animationFillMode:8,animationDuration:8,animationIterationCount:8,animationName:8,animationPlayState:8,animationTimingFunction:8,appearance:9.1,userSelect:9.1,backdropFilter:9.1,fontKerning:9.1,scrollSnapType:9.1,scrollSnapPointsX:9.1,scrollSnapPointsY:9.1,scrollSnapDestination:9.1,scrollSnapCoordinate:9.1,textEmphasisPosition:7,textEmphasis:7,textEmphasisStyle:7,textEmphasisColor:7,boxDecorationBreak:9.1,clipPath:9.1,maskImage:9.1,maskMode:9.1,maskRepeat:9.1,maskPosition:9.1,maskClip:9.1,maskOrigin:9.1,maskSize:9.1,maskComposite:9.1,mask:9.1,maskBorderSource:9.1,maskBorderMode:9.1,maskBorderSlice:9.1,maskBorderWidth:9.1,maskBorderOutset:9.1,maskBorderRepeat:9.1,maskBorder:9.1,maskType:9.1,textDecorationStyle:9.1,textDecorationSkip:9.1,textDecorationLine:9.1,textDecorationColor:9.1,shapeImageThreshold:9.1,shapeImageMargin:9.1,shapeImageOutside:9.1,filter:9,hyphens:9.1,flowInto:9.1,flowFrom:9.1,breakBefore:8,breakAfter:8,breakInside:8,regionFragment:9.1,columnCount:8,columnFill:8,columnGap:8,columnRule:8,columnRuleColor:8,columnRuleStyle:8,columnRuleWidth:8,columns:8,columnSpan:8,columnWidth:8},firefox:{appearance:46,userSelect:46,boxSizing:28,textAlignLast:46,textDecorationStyle:35,textDecorationSkip:35,textDecorationLine:35,textDecorationColor:35,tabSize:46,hyphens:42,fontFeatureSettings:33,breakAfter:46,breakBefore:46,breakInside:46,columnCount:46,columnFill:46,columnGap:46,columnRule:46,columnRuleColor:46,columnRuleStyle:46,columnRuleWidth:46,columns:46,columnSpan:46,columnWidth:46},opera:{flex:16,flexBasis:16,flexDirection:16,flexGrow:16,flexFlow:16,flexShrink:16,flexWrap:16,alignContent:16,alignItems:16,alignSelf:16,justifyContent:16,order:16,transform:22,transformOrigin:22,transformOriginX:22,transformOriginY:22,backfaceVisibility:22,perspective:22,perspectiveOrigin:22,transformStyle:22,transformOriginZ:22,animation:29,animationDelay:29,animationDirection:29,animationFillMode:29,animationDuration:29,animationIterationCount:29,animationName:29,animationPlayState:29,animationTimingFunction:29,appearance:36,userSelect:36,fontKerning:19,textEmphasisPosition:36,textEmphasis:36,textEmphasisStyle:36,textEmphasisColor:36,boxDecorationBreak:36,clipPath:36,maskImage:36,maskMode:36,maskRepeat:36,maskPosition:36,maskClip:36,maskOrigin:36,maskSize:36,maskComposite:36,mask:36,maskBorderSource:36,maskBorderMode:36,maskBorderSlice:36,maskBorderWidth:36,maskBorderOutset:36,maskBorderRepeat:36,maskBorder:36,maskType:36,filter:36,fontFeatureSettings:36,breakAfter:36,breakBefore:36,breakInside:36,columnCount:36,columnFill:36,columnGap:36,columnRule:36,columnRuleColor:36,columnRuleStyle:36,columnRuleWidth:36,columns:36,columnSpan:36,columnWidth:36},ie:{gridArea:11,gridGap:11,gridColumnStart:11,userSelect:11,grid:11,breakInside:11,hyphens:11,gridTemplateAreas:11,breakAfter:11,scrollSnapCoordinate:11,gridRowStart:11,gridAutoFlow:11,scrollSnapDestination:11,gridTemplate:11,gridTemplateColumns:11,transformOrigin:9,gridAutoRows:11,gridColumnEnd:11,transformOriginY:9,scrollSnapPointsY:11,breakBefore:11,gridRowGap:11,scrollSnapPointsX:11,regionFragment:11,flexWrap:10,wrapFlow:11,gridRowEnd:11,flex:10,flexDirection:10,flowInto:11,touchAction:10,gridColumn:11,transform:9,gridTemplateRows:11,flexFlow:10,transformOriginX:9,flowFrom:11,scrollSnapType:11,wrapMargin:11,gridColumnGap:11,gridRow:11,wrapThrough:11,gridAutoColumns:11,textSizeAdjust:11},edge:{userSelect:14,wrapFlow:14,wrapThrough:14,wrapMargin:14,scrollSnapType:14,scrollSnapPointsX:14,scrollSnapPointsY:14,scrollSnapDestination:14,scrollSnapCoordinate:14,hyphens:14,flowInto:14,flowFrom:14,breakBefore:14,breakAfter:14,breakInside:14,regionFragment:14,gridTemplateColumns:14,gridTemplateRows:14,gridTemplateAreas:14,gridTemplate:14,gridAutoColumns:14,gridAutoRows:14,gridAutoFlow:14,grid:14,gridRowStart:14,gridColumnStart:14,gridRowEnd:14,gridRow:14,gridColumn:14,gridColumnEnd:14,gridColumnGap:14,gridRowGap:14,gridArea:14,gridGap:14},ios_saf:{flex:8.1,flexBasis:8.1,flexDirection:8.1,flexGrow:8.1,flexFlow:8.1,flexShrink:8.1,flexWrap:8.1,alignContent:8.1,alignItems:8.1,alignSelf:8.1,justifyContent:8.1,order:8.1,transition:6,transitionDelay:6,transitionDuration:6,transitionProperty:6,transitionTimingFunction:6,transform:8.1,transformOrigin:8.1,transformOriginX:8.1,transformOriginY:8.1,backfaceVisibility:8.1,perspective:8.1,perspectiveOrigin:8.1,transformStyle:8.1,transformOriginZ:8.1,animation:8.1,animationDelay:8.1,animationDirection:8.1,animationFillMode:8.1,animationDuration:8.1,animationIterationCount:8.1,animationName:8.1,animationPlayState:8.1,animationTimingFunction:8.1,appearance:9.3,userSelect:9.3,backdropFilter:9.3,fontKerning:9.3,scrollSnapType:9.3,scrollSnapPointsX:9.3,scrollSnapPointsY:9.3,scrollSnapDestination:9.3,scrollSnapCoordinate:9.3,boxDecorationBreak:9.3,clipPath:9.3,maskImage:9.3,maskMode:9.3,maskRepeat:9.3,maskPosition:9.3,maskClip:9.3,maskOrigin:9.3,maskSize:9.3,maskComposite:9.3,mask:9.3,maskBorderSource:9.3,maskBorderMode:9.3,maskBorderSlice:9.3,maskBorderWidth:9.3,maskBorderOutset:9.3,maskBorderRepeat:9.3,maskBorder:9.3,maskType:9.3,textSizeAdjust:9.3,textDecorationStyle:9.3,textDecorationSkip:9.3,textDecorationLine:9.3,textDecorationColor:9.3,shapeImageThreshold:9.3,shapeImageMargin:9.3,shapeImageOutside:9.3,filter:9,hyphens:9.3,flowInto:9.3,flowFrom:9.3,breakBefore:8.1,breakAfter:8.1,breakInside:8.1,regionFragment:9.3,columnCount:8.1,columnFill:8.1,columnGap:8.1,columnRule:8.1,columnRuleColor:8.1,columnRuleStyle:8.1,columnRuleWidth:8.1,columns:8.1,columnSpan:8.1,columnWidth:8.1},android:{borderImage:4.2,borderImageOutset:4.2,borderImageRepeat:4.2,borderImageSlice:4.2,borderImageSource:4.2,borderImageWidth:4.2,flex:4.2,flexBasis:4.2,flexDirection:4.2,flexGrow:4.2,flexFlow:4.2,flexShrink:4.2,flexWrap:4.2,alignContent:4.2,alignItems:4.2,alignSelf:4.2,justifyContent:4.2,order:4.2,transition:4.2,transitionDelay:4.2,transitionDuration:4.2,transitionProperty:4.2,transitionTimingFunction:4.2,transform:4.4,transformOrigin:4.4,transformOriginX:4.4,transformOriginY:4.4,backfaceVisibility:4.4,perspective:4.4,perspectiveOrigin:4.4,transformStyle:4.4,transformOriginZ:4.4,animation:4.4,animationDelay:4.4,animationDirection:4.4,animationFillMode:4.4,animationDuration:4.4,animationIterationCount:4.4,animationName:4.4,animationPlayState:4.4,animationTimingFunction:4.4,appearance:46,userSelect:46,fontKerning:4.4,textEmphasisPosition:46,textEmphasis:46,textEmphasisStyle:46,textEmphasisColor:46,boxDecorationBreak:46,clipPath:46,maskImage:46,maskMode:46,maskRepeat:46,maskPosition:46,maskClip:46,maskOrigin:46,maskSize:46,maskComposite:46,mask:46,maskBorderSource:46,maskBorderMode:46,maskBorderSlice:46,maskBorderWidth:46,maskBorderOutset:46,maskBorderRepeat:46,maskBorder:46,maskType:46,filter:46,fontFeatureSettings:46,breakAfter:46,breakBefore:46,breakInside:46,columnCount:46,columnFill:46,columnGap:46,columnRule:46,columnRuleColor:46,columnRuleStyle:46,columnRuleWidth:46,columns:46,columnSpan:46,columnWidth:46},and_chr:{appearance:47,userSelect:47,textEmphasisPosition:47,textEmphasis:47,textEmphasisStyle:47,textEmphasisColor:47,boxDecorationBreak:47,clipPath:47,maskImage:47,maskMode:47,maskRepeat:47,maskPosition:47,maskClip:47,maskOrigin:47,maskSize:47,maskComposite:47,mask:47,maskBorderSource:47,maskBorderMode:47,maskBorderSlice:47,maskBorderWidth:47,maskBorderOutset:47,maskBorderRepeat:47,maskBorder:47,maskType:47,textDecorationStyle:47,textDecorationSkip:47,textDecorationLine:47,textDecorationColor:47,filter:47,fontFeatureSettings:47,breakAfter:47,breakBefore:47,breakInside:47,columnCount:47,columnFill:47,columnGap:47,columnRule:47,columnRuleColor:47,columnRuleStyle:47,columnRuleWidth:47,columns:47,columnSpan:47,columnWidth:47},and_uc:{flex:9.9,flexBasis:9.9,flexDirection:9.9,flexGrow:9.9,flexFlow:9.9,flexShrink:9.9,flexWrap:9.9,alignContent:9.9,alignItems:9.9,alignSelf:9.9,justifyContent:9.9,order:9.9,transition:9.9,transitionDelay:9.9,transitionDuration:9.9,transitionProperty:9.9,transitionTimingFunction:9.9,transform:9.9,transformOrigin:9.9,transformOriginX:9.9,transformOriginY:9.9,backfaceVisibility:9.9,perspective:9.9,perspectiveOrigin:9.9,transformStyle:9.9,transformOriginZ:9.9,animation:9.9,animationDelay:9.9,animationDirection:9.9,animationFillMode:9.9,animationDuration:9.9,animationIterationCount:9.9,animationName:9.9,animationPlayState:9.9,animationTimingFunction:9.9,appearance:9.9,userSelect:9.9,fontKerning:9.9,textEmphasisPosition:9.9,textEmphasis:9.9,textEmphasisStyle:9.9,textEmphasisColor:9.9,maskImage:9.9,maskMode:9.9,maskRepeat:9.9,maskPosition:9.9,maskClip:9.9,maskOrigin:9.9,maskSize:9.9,maskComposite:9.9,mask:9.9,maskBorderSource:9.9,maskBorderMode:9.9,maskBorderSlice:9.9,maskBorderWidth:9.9,maskBorderOutset:9.9,maskBorderRepeat:9.9,maskBorder:9.9,maskType:9.9,textSizeAdjust:9.9,filter:9.9,hyphens:9.9,flowInto:9.9,flowFrom:9.9,breakBefore:9.9,breakAfter:9.9,breakInside:9.9,regionFragment:9.9,fontFeatureSettings:9.9,columnCount:9.9,columnFill:9.9,columnGap:9.9,columnRule:9.9,columnRuleColor:9.9,columnRuleStyle:9.9,columnRuleWidth:9.9,columns:9.9,columnSpan:9.9,columnWidth:9.9},op_mini:{borderImage:5,borderImageOutset:5,borderImageRepeat:5,borderImageSlice:5,borderImageSource:5,borderImageWidth:5,tabSize:5,objectFit:5,objectPosition:5}};e.exports=i},function(e,r){"use strict";function i(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function t(e){var r=e.property,t=e.value,n=e.browserInfo,o=e.prefix,a=e.keepUnprefixed,s=e.forceRun,l=n.browser,u=n.version;if("string"==typeof t&&t.indexOf("calc(")>-1&&(s||"firefox"===l&&15>u||"chrome"===l&&25>u||"safari"===l&&6.1>u||"ios_saf"===l&&7>u)){var f=s?["-webkit-","-moz-"].map(function(e){return t.replace(/calc\(/g,e+"calc(")}).join(";"+r+":"):t.replace(/calc\(/g,o.css+"calc(");return i({},r,f+(a?";"+r+":"+t:""))}}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=t,e.exports=r["default"]},function(e,r){"use strict";function i(e){var r=e.property,i=e.value,n=e.browserInfo,o=e.prefix,a=e.keepUnprefixed,s=e.forceRun,l=n.browser,u=n.version;if("cursor"===r&&t[i]&&(s||"firefox"===l&&24>u||"chrome"===l&&37>u||"safari"===l&&9>u||"opera"===l&&24>u)){var f=s?["-webkit-","-moz-"].map(function(e){return e+i}).join(";"+r+":"):o.css+i;return{cursor:f+(a?";"+r+":"+i:"")}}}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=i;var t={"zoom-in":!0,"zoom-out":!0,grab:!0,grabbing:!0};e.exports=r["default"]},function(e,r){"use strict";function i(e){var r=e.property,i=e.value,n=e.browserInfo,o=(e.prefix,e.keepUnprefixed),a=e.forceRun,s=n.browser,l=n.version;if("display"===r&&t[i]&&(a||"chrome"===s&&29>l&&l>20||("safari"===s||"ios_saf"===s)&&9>l&&l>6||"opera"===s&&(15==l||16==l))){var u=a?["-webkit-box","-moz-box","-ms-"+i+"box","-webkit-"+i].join(";"+r+":"):"-webkit-"+i;return{display:u+(o?";"+r+":"+i:"")}}}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=i;var t={flex:!0,"inline-flex":!0};e.exports=r["default"]},function(e,r){"use strict";function i(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function t(e){var r=e.property,t=e.value,n=e.styles,l=e.browserInfo,u=(e.prefix,e.keepUnprefixed),f=e.forceRun,m=l.browser,c=l.version;if(s[r]&&(f||("ie_mob"===m||"ie"===m)&&10==c)){if(u||delete n[r],a[r])return i({},a[r],o[t]||t);if(o[t])return i({},r,o[t]+(u?";"+r+":"+t:""))}}Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e};r["default"]=t;var o={"space-around":"distribute","space-between":"justify","flex-start":"start","flex-end":"end",flex:"-ms-flexbox","inline-flex":"-ms-inline-flexbox"},a={alignContent:"msFlexLinePack",alignSelf:"msFlexItemAlign",alignItems:"msFlexAlign",justifyContent:"msFlexPack",order:"msFlexOrder",flexGrow:"msFlexPositive",flexShrink:"msFlexNegative",flexBasis:"msPreferredSize"},s=Object.keys(a).concat("display").reduce(function(e,r){return n({},e,i({},r,!0))},{});e.exports=r["default"]},function(e,r){"use strict";function i(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function t(e){var r=e.property,t=e.value,n=e.styles,l=e.browserInfo,u=e.prefix,f=e.keepUnprefixed,m=e.forceRun,c=l.browser,d=l.version;if(s[r]&&(m||"firefox"===c&&22>d||"chrome"===c&&21>d||("safari"===c||"ios_saf"===c)&&6.1>=d||"android"===c&&4.4>d||"and_uc"===c)){if(f||delete n[r],"flexDirection"===r)return{WebkitBoxOrient:t.indexOf("column")>-1?"vertical":"horizontal",WebkitBoxDirection:t.indexOf("reverse")>-1?"reverse":"normal"};if("display"===r&&o[t])return{display:u.css+o[t]+(f?";"+r+":"+t:"")};if(a[r])return i({},a[r],o[t]||t);if(o[t])return i({},r,o[t]+(f?";"+r+":"+t:""))}}Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e};r["default"]=t;var o={"space-around":"justify","space-between":"justify","flex-start":"start","flex-end":"end","wrap-reverse":"multiple",wrap:"multiple",flex:"box","inline-flex":"inline-box"},a={alignItems:"WebkitBoxAlign",justifyContent:"WebkitBoxPack",flexWrap:"WebkitBoxLines"},s=Object.keys(a).concat(["alignContent","alignSelf","display","order","flexGrow","flexShrink","flexBasis","flexDirection"]).reduce(function(e,r){return n({},e,i({},r,!0))},{});e.exports=r["default"]},function(e,r){"use strict";function i(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function t(e){var r=e.property,t=e.value,o=e.browserInfo,a=e.prefix,s=e.keepUnprefixed,l=e.forceRun,u=o.browser,f=o.version;if("string"==typeof t&&null!==t.match(n)&&(l||"firefox"===u&&16>f||"chrome"===u&&26>f||("safari"===u||"ios_saf"===u)&&7>f||("opera"===u||"op_mini"===u)&&12.1>f||"android"===u&&4.4>f||"and_uc"===u)){var m=l?["-webkit-","-moz-"].map(function(e){return e+t}).join(";"+r+":"):a.css+t;return i({},r,m+(s?";"+r+":"+t:""))}}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=t;var n=/linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;e.exports=r["default"]},function(e,r){"use strict";function i(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function t(e){var r=e.property,t=e.value,a=e.browserInfo,s=e.prefix,l=e.keepUnprefixed,u=e.forceRun;a.browser,a.version;if(n[r]&&o[t]){var f=u?["-webkit-","-moz-"].map(function(e){return e+t}).join(";"+r+":"):s.css+t;return i({},r,f+(l?";"+r+":"+t:""))}}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=t;var n={maxHeight:!0,maxWidth:!0,width:!0,height:!0,columnWidth:!0,minWidth:!0,minHeight:!0},o={"min-content":!0,"max-content":!0,"fill-available":!0,"fit-content":!0,"contain-floats":!0};e.exports=r["default"]},function(e,r,i){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function o(e){var r=e.property,i=e.value,t=e.browserInfo,o=e.prefix,a=e.keepUnprefixed,l=e.forceRun,f=e.requiresPrefix;t.browser,t.version;if("string"==typeof i&&(r.toLowerCase().indexOf("transition")>-1||r.toLowerCase().indexOf("transitionproperty")>-1)){var m,c=function(){var e=Object.keys(f).map(function(e){return(0,s["default"])(e)}),t=i,c=t.split(/,(?![^()]*(?:\([^()]*\))?\))/g);e.forEach(function(e){c.forEach(function(r,i){if(r.indexOf(e)>-1){var t=l?["-webkit-","-moz-","-ms-"].map(function(i){return r.replace(e,i+e)}).join(","):r.replace(e,o.css+e);c[i]=t+(a?","+r:"")}})});var d=c.join(",");return l?{v:(m={},n(m,"Webkit"+(0,u["default"])(r),d),n(m,"Moz"+(0,u["default"])(r),d),n(m,"ms"+(0,u["default"])(r),d),n(m,r,d),m)}:{v:n({},r,d)}}();if("object"==typeof c)return c.v}}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=o;var a=i(16),s=t(a),l=i(1),u=t(l);e.exports=r["default"]},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return Object.keys(r).forEach(function(i){return e[i]=r[i]}),e},e.exports=r["default"]},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e){return e.replace(/([a-z]|^)([A-Z])/g,function(e,r,i){return r+"-"+i.toLowerCase()}).replace("ms-","-ms-")},e.exports=r["default"]},function(e,r,i){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var n=i(3),o=t(n),a={Webkit:["chrome","safari","ios","android","phantom","opera","webos","blackberry","bada","tizen"],Moz:["firefox","seamonkey","sailfish"],ms:["msie","msedge"]},s={chrome:[["chrome"]],safari:[["safari"]],firefox:[["firefox"]],ie:[["msie"]],edge:[["msedge"]],opera:[["opera"]],ios_saf:[["ios","mobile"],["ios","tablet"]],ie_mob:[["windowsphone","mobile","msie"],["windowsphone","tablet","msie"],["windowsphone","mobile","msedge"],["windowsphone","tablet","msedge"]],op_mini:[["opera","mobile"],["opera","tablet"]],and_uc:[["android","mobile"],["android","tablet"]],android:[["android","mobile"],["android","tablet"]]},l=function(e){var r=void 0,i=void 0,t=void 0,n=void 0,o=void 0,l=void 0;r=Object.keys(a);for(var u=0;u<r.length;u++){i=r[u],t=a[i],n=s[e];for(var f=0;f<t.length;f++){o=t[f];for(var m=0;m<n.length;m++)if(l=n[m],-1!==l.indexOf(o))return{inline:i,css:"-"+i.toLowerCase()+"-"}}}return{inline:"",css:""}};r["default"]=function(e){if(!e)return!1;var r={};if("*"===e)return r.browsers=Object.keys(s),r.prefixes={},r.browsers.forEach(function(e){r.prefixes[e]=l(e)}),r;r=o["default"]._detect(e),Object.keys(a).forEach(function(e){a[e].forEach(function(i){r[i]&&(r.prefix={inline:e,css:"-"+e.toLowerCase()+"-"})})});var i="";return Object.keys(s).forEach(function(e){s[e].forEach(function(t){var n=0;t.forEach(function(e){r[e]&&(n+=1)}),t.length===n&&(i=e)})}),r.browser=i,r.version=r.version?parseFloat(r.version):parseInt(parseFloat(r.osversion),10),"android"===r.browser&&r.chrome&&r.version>37&&(r.browser="and_chr"),r.version=parseFloat(r.version),r.osversion=parseFloat(r.osversion),"android"===r.browser&&r.osversion<5&&(r.version=r.osversion),r},e.exports=r["default"]},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e){var r=e.browser,i=e.version,t=e.prefix,n="keyframes";return("chrome"===r&&43>i||("safari"===r||"ios_saf"===r)&&9>i||"opera"===r&&30>i||"android"===r&&4.4>=i||"and_uc"===r)&&(n=t.css+n),n},e.exports=r["default"]},function(e,r,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(){},e.exports=r["default"]},function(r,i){r.exports=e}])});
//# sourceMappingURL=index.js.map

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(164),
    getRawTag = __webpack_require__(181),
    objectToString = __webpack_require__(182);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MemoryRouter__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Prompt__ = __webpack_require__(82);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_1__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Redirect__ = __webpack_require__(84);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_2__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_3__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_4__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StaticRouter__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_5__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Switch__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_6__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__matchPath__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_7__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__withRouter__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_8__withRouter__["a"]; });



















/***/ }),
/* 157 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _History = __webpack_require__(149);

var _History2 = _interopRequireDefault(_History);

var _Navbar = __webpack_require__(150);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _SemesterItem = __webpack_require__(169);

var _SemesterItem2 = _interopRequireDefault(_SemesterItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			window.addEventListener("hashchange", function (e) {
				_History2.default.goBack();
			});
		}
	}, {
		key: 'render',
		value: function render() {
			/*
   You can't have commas and pipes in SemesterName, CourseCode and Course Titles.
   */
			//console.log('in tiles')
			var SemesterInfo = [];
			var incomingCourseInfo = this.props.location.state.StudentCourses;

			var semesterName, SemesterCourseInfo;

			for (var i = 0; i < incomingCourseInfo.length; i++) {
				SemesterCourseInfo = incomingCourseInfo[i].split(",");
				semesterName = SemesterCourseInfo.shift();
				SemesterInfo.push({ name: semesterName, enrolledInCourses: SemesterCourseInfo });
			};

			var createSemesterItem = function createSemesterItem(item, index) {
				return _react2.default.createElement(_SemesterItem2.default, { key: item.name + index, term: item.name, semesterCourses: item.enrolledInCourses });
			};

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Navbar2.default, null),
				_react2.default.createElement(
					'div',
					null,
					SemesterInfo.map(createSemesterItem)
				)
			);
		}
	}]);

	return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
	_inherits(Footer, _React$Component);

	function Footer() {
		_classCallCheck(this, Footer);

		return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	}

	_createClass(Footer, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"footer",
				{ className: "footer" },
				_react2.default.createElement(
					"p",
					null,
					"\xA9 2017 Code LMS, Inc."
				)
			);
		}
	}]);

	return Footer;
}(_react2.default.Component);

exports.default = Footer;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(175),
    getTag = __webpack_require__(178),
    isArguments = __webpack_require__(190),
    isArray = __webpack_require__(192),
    isArrayLike = __webpack_require__(193),
    isBuffer = __webpack_require__(194),
    isPrototype = __webpack_require__(162),
    isTypedArray = __webpack_require__(196);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),
/* 162 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(155),
    isObject = __webpack_require__(166);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(151);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ }),
/* 166 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 167 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 168 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _CourseItem = __webpack_require__(170);

var _CourseItem2 = _interopRequireDefault(_CourseItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SemesterItem = function (_React$Component) {
	_inherits(SemesterItem, _React$Component);

	function SemesterItem() {
		_classCallCheck(this, SemesterItem);

		var _this = _possibleConstructorReturn(this, (SemesterItem.__proto__ || Object.getPrototypeOf(SemesterItem)).call(this));

		_this.state = {
			Courses: []
		};
		return _this;
	}

	_createClass(SemesterItem, [{
		key: 'render',
		value: function render() {
			this.state.Courses = this.props.semesterCourses;
			var SemesterTitle = this.props.term;
			var SemesterHeadingStyle = {
				color: 'white'
			};

			var SemesterItemStyle = {
				clear: 'both',
				margin: 50

			};
			var createCourseItem = function createCourseItem(item, index) {
				return _react2.default.createElement(_CourseItem2.default, { CourseName: item, SemesterName: SemesterTitle });
			};

			return _react2.default.createElement(
				'div',
				{ style: SemesterItemStyle },
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'h1',
					{ style: SemesterHeadingStyle },
					' ',
					this.props.term,
					' '
				),
				this.state.Courses.map(createCourseItem),
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null)
			);
		}
	}]);

	return SemesterItem;
}(_react2.default.Component);

exports.default = SemesterItem;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(95);

var _ThumbNail = __webpack_require__(200);

var _ThumbNail2 = _interopRequireDefault(_ThumbNail);

var _CoursePageActions = __webpack_require__(171);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CourseItem = function (_React$Component) {
	_inherits(CourseItem, _React$Component);

	function CourseItem() {
		_classCallCheck(this, CourseItem);

		return _possibleConstructorReturn(this, (CourseItem.__proto__ || Object.getPrototypeOf(CourseItem)).apply(this, arguments));
	}

	_createClass(CourseItem, [{
		key: 'render',
		value: function render() {
			var CourseItemStyle = {
				marginRight: "50px"
			};
			var getSubcomponents = this.props.getSubcomponents;
			return _react2.default.createElement(
				'div',
				{ style: CourseItemStyle },
				_react2.default.createElement(_ThumbNail2.default, { getSubcomponents: getSubcomponents, CourseTitle: this.props.CourseName, SemesterName: this.props.SemesterName })
			);
		}
	}]);

	return CourseItem;
}(_react2.default.Component);

/*
CourseItem.propTypes = 
{
	getSubcomponentsNamesOnCoursePage: PropTypes.func.isRequired
}
*/

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		getSubcomponents: function getSubcomponents(courseData) {
			return dispatch((0, _CoursePageActions.getSubcomponentsNamesOnCoursePage)(courseData));
		}
	};
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(CourseItem);

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getSubcomponentsNamesOnCoursePageIns = exports.getSubcomponentsNamesOnCoursePage = undefined;

var _axios = __webpack_require__(50);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSubcomponentsNamesOnCoursePage = exports.getSubcomponentsNamesOnCoursePage = function getSubcomponentsNamesOnCoursePage(courseData) {
	return function (dispatch) {
		console.log('Getting Course Information...');
		//console.log(courseData)
		return _axios2.default.post('/loginS/student/course', courseData);
	};
};

var getSubcomponentsNamesOnCoursePageIns = exports.getSubcomponentsNamesOnCoursePageIns = function getSubcomponentsNamesOnCoursePageIns(courseData) {
	return function (dispatch) {
		console.log('Getting Course Information... INSTRUCTOR');
		console.log(courseData);
		return _axios2.default.post('/loginI/instructor/course', courseData);
	};
};

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _History = __webpack_require__(149);

var _History2 = _interopRequireDefault(_History);

var _GradeComponentItemNumber = __webpack_require__(205);

var _GradeComponentItemNumber2 = _interopRequireDefault(_GradeComponentItemNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AssignmentItem = function (_React$Component) {
	_inherits(AssignmentItem, _React$Component);

	function AssignmentItem() {
		_classCallCheck(this, AssignmentItem);

		return _possibleConstructorReturn(this, (AssignmentItem.__proto__ || Object.getPrototypeOf(AssignmentItem)).apply(this, arguments));
	}

	_createClass(AssignmentItem, [{
		key: 'render',
		value: function render() {
			var createGradeComponentItemNumber = function createGradeComponentItemNumber(item) {
				return _react2.default.createElement(_GradeComponentItemNumber2.default, { GradeComponentName: item });
			};

			var GradeComponentID = "#" + this.props.Type;

			var PanelStyle = {
				margin: 50
			};

			return _react2.default.createElement(
				'div',
				{ style: PanelStyle, className: 'panel-group', role: 'tablist' },
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
								{ className: 'collapsed', 'data-toggle': 'collapse', href: GradeComponentID, 'aria-expanded': 'false', 'aria-controls': 'collapseListGroup1' },
								this.props.Type
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ id: this.props.Type, className: 'panel-collapse collapse', role: 'tabpanel', 'aria-labelledby': 'collapseListGroupHeading1' },
						_react2.default.createElement(
							'ul',
							{ className: 'list-group' },
							this.props.subcomponents.map(createGradeComponentItemNumber)
						)
					)
				)
			);
		}
	}]);

	return AssignmentItem;
}(_react2.default.Component);

exports.default = AssignmentItem;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactCenter = __webpack_require__(154);

var _reactCenter2 = _interopRequireDefault(_reactCenter);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(95);

var _LoginForm = __webpack_require__(174);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _Navbar = __webpack_require__(150);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = __webpack_require__(159);

var _Footer2 = _interopRequireDefault(_Footer);

var _LoginActions = __webpack_require__(124);

var _CoursesActions = __webpack_require__(144);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login() {
		_classCallCheck(this, Login);

		return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
	}

	_createClass(Login, [{
		key: 'render',
		value: function render() {
			var styles = {
				logoStyle: {
					margin: 'auto',
					width: '153'
				},
				textStyle: {
					textAlign: 'center'
				}
			};

			var studentLoginRequest = this.props.studentlogin;
			var instructorLoginRequest = this.props.instructorlogin;
			var getCourses = this.props.getCourses;
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Navbar2.default, null),
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-md-4 col-md-offset-4', style: styles.major },
						_react2.default.createElement(_LoginForm2.default, { studentLoginRequest: studentLoginRequest, instructorLoginRequest: instructorLoginRequest, getCourses: getCourses }),
						_react2.default.createElement(_Footer2.default, null)
					)
				)
			);
		}
	}]);

	return Login;
}(_react2.default.Component);

Login.propTypes = {
	studentlogin: _propTypes2.default.func.isRequired,
	instructorlogin: _propTypes2.default.func.isRequired,
	getCourses: _propTypes2.default.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		studentlogin: function studentlogin(userData) {
			return dispatch((0, _LoginActions.studentLoginRequest)(userData));
		},
		instructorlogin: function instructorlogin(userData) {
			return dispatch((0, _LoginActions.instructorLoginRequest)(userData));
		},
		getCourses: function getCourses(username) {
			return dispatch((0, _LoginActions.getCoursesAfterLoginSuccess)(username));
		}
	};
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Login);

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactCenter = __webpack_require__(154);

var _reactCenter2 = _interopRequireDefault(_reactCenter);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(160);

var _classnames2 = _interopRequireDefault(_classnames);

var _isEmpty = __webpack_require__(161);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _reactRouter = __webpack_require__(156);

var _reactRouterDom = __webpack_require__(68);

var _Logo = __webpack_require__(153);

var _Logo2 = _interopRequireDefault(_Logo);

var _Routes = __webpack_require__(148);

var _Routes2 = _interopRequireDefault(_Routes);

var _Tiles = __webpack_require__(158);

var _Tiles2 = _interopRequireDefault(_Tiles);

var _History = __webpack_require__(149);

var _History2 = _interopRequireDefault(_History);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_React$Component) {
	_inherits(LoginForm, _React$Component);

	function LoginForm() {
		_classCallCheck(this, LoginForm);

		var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this));

		_this.state = {
			username: '',
			password: '',
			student: false,
			instructor: false,
			error_password: '',
			error_username: '',
			courses: [],
			CoursesReceived: false
		};

		_this.onChange = _this.onChange.bind(_this);
		_this.onSubmit = _this.onSubmit.bind(_this);
		return _this;
	}

	_createClass(LoginForm, [{
		key: 'onChange',
		value: function onChange(event) {
			this.setState(_defineProperty({ error_username: '', error_password: '' }, event.target.name, event.target.value));
			event.preventDefault();
		}
	}, {
		key: 'onSubmit',
		value: function onSubmit(event) {
			var _this2 = this;

			event.preventDefault();
			if (this.state.username && this.state.password) {
				this.props.studentLoginRequest({ username: this.state.username, password: this.state.password }).then(function (response) /// ctx.body's data will be available HERE in reponse variable
				{
					_this2.setState({
						student: response.data.student, // response should be the list of courses student is enrollrd in
						error_username: response.data.error_username,
						error_password: response.data.error_password
					});

					if (_this2.state.student) {
						_this2.props.getCourses({ username: _this2.state.username }).then(function (response) {
							_this2.setState({
								courses: response.data.courses,
								CoursesReceived: true
							});

							_History2.default.push({
								pathname: '/loginS/student',
								state: { StudentCourses: _this2.state.courses }
							});
						});
					}
				});
			} else this.setState({ error_username: 'Please enter username', error_password: 'Please enter password.' });
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			window.addEventListener("hashchange", function (e) {
				_History2.default.goBack();
			});
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
				_react2.default.createElement(_Logo2.default, null),
				_react2.default.createElement(
					'div',
					{ className: 'header clearfix' },
					_react2.default.createElement(
						'h3',
						{ className: 'text-muted text-center page-header' },
						' Student Login'
					)
				),
				_react2.default.createElement(
					'form',
					{ onSubmit: this.onSubmit },
					_react2.default.createElement(
						'div',
						{ className: (0, _classnames2.default)('form-group', { 'has-error': this.state.error_username }) },
						_react2.default.createElement(
							'label',
							{ className: 'control-label' },
							' Username '
						),
						_react2.default.createElement('input', {
							type: 'text',
							name: 'username',
							className: 'form-control',
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
						{ className: (0, _classnames2.default)('form-group', { 'has-error': this.state.error_password }) },
						_react2.default.createElement(
							'label',
							{ className: 'control-label' },
							' Password '
						),
						_react2.default.createElement('input', {
							type: 'password',
							name: 'password',
							className: 'form-control',
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
						{ className: 'form-group', style: styles.buttonStyle },
						_react2.default.createElement(
							'button',
							{ className: 'btn btn-lg btn-success' },
							' Login '
						)
					)
				)
			);
		}
	}]);

	return LoginForm;
}(_react2.default.Component);

exports.default = LoginForm;


LoginForm.propTypes = {
	studentLoginRequest: _propTypes2.default.func.isRequired,
	instructorLoginRequest: _propTypes2.default.func.isRequired,
	getCourses: _propTypes2.default.func.isRequired
};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(162),
    nativeKeys = __webpack_require__(176);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(177);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 177 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(179),
    Map = __webpack_require__(186),
    Promise = __webpack_require__(187),
    Set = __webpack_require__(188),
    WeakMap = __webpack_require__(189),
    baseGetTag = __webpack_require__(155),
    toSource = __webpack_require__(167);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(152),
    root = __webpack_require__(151);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(163),
    isMasked = __webpack_require__(183),
    isObject = __webpack_require__(166),
    toSource = __webpack_require__(167);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(164);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 182 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(184);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(151);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(152),
    root = __webpack_require__(151);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(152),
    root = __webpack_require__(151);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(152),
    root = __webpack_require__(151);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(152),
    root = __webpack_require__(151);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(191),
    isObjectLike = __webpack_require__(157);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(155),
    isObjectLike = __webpack_require__(157);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 192 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(163),
    isLength = __webpack_require__(168);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(151),
    stubFalse = __webpack_require__(195);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(111)(module)))

/***/ }),
/* 195 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(197),
    baseUnary = __webpack_require__(198),
    nodeUtil = __webpack_require__(199);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(155),
    isLength = __webpack_require__(168),
    isObjectLike = __webpack_require__(157);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 198 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(165);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(111)(module)))

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(156);

var _reactRouterDom = __webpack_require__(68);

var _History = __webpack_require__(149);

var _History2 = _interopRequireDefault(_History);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThumbNail = function (_React$Component) {
	_inherits(ThumbNail, _React$Component);

	function ThumbNail() {
		_classCallCheck(this, ThumbNail);

		var _this = _possibleConstructorReturn(this, (ThumbNail.__proto__ || Object.getPrototypeOf(ThumbNail)).call(this));

		_this.state = {
			courseSubComponents: {}
		};

		_this.onClick = _this.onClick.bind(_this);
		return _this;
	}

	_createClass(ThumbNail, [{
		key: 'onClick',
		value: function onClick(event) {
			var _this2 = this;

			var courseCode = this.props.CourseTitle.split('|')[0];
			var Semester = this.props.SemesterName;
			console.log(Semester);
			this.props.getSubcomponents({ CourseCode: courseCode, SemesterName: Semester }).then(function (response) {
				_this2.setState({
					courseSubComponents: response.data
				});

				var courseCode = _this2.props.CourseTitle.split('|')[0]; // repetition here.... alina pls fix this -abreeza
				var courseTitle = _this2.props.CourseTitle.split('|')[1];

				_History2.default.push({
					pathname: '/loginS/student/course',
					state: { CourseCode: courseCode, CourseTitle: courseTitle, SubComponents: _this2.state.courseSubComponents }
				});
			});
			event.preventDefault();
		}
	}, {
		key: 'render',
		value: function render() {
			var ThumbNailStyle = {
				width: 200,
				height: 300,
				margin: 40,
				fontSize: 20,
				overflow: 'hidden',
				verticalalign: 'top',
				float: 'left',
				background: "#f1f4d8"
			};

			var ImageStyle = {
				height: 'auto'

				//console.log('thumbnail')
				//console.log(this.props)
			};var courseCode = this.props.CourseTitle.split('|')[0];
			var courseTitle = this.props.CourseTitle.split('|')[1];
			return _react2.default.createElement(
				'div',
				{ style: ThumbNailStyle, display: 'inline-block', onClick: this.onClick, className: 'thumbnail' },
				_react2.default.createElement('img', { src: '/images/icon.png', className: 'img-circle' }),
				_react2.default.createElement(
					'p',
					null,
					courseCode
				),
				_react2.default.createElement(
					'p',
					null,
					courseTitle
				)
			);
		}
	}]);

	return ThumbNail;
}(_react2.default.Component);

exports.default = ThumbNail;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactCenter = __webpack_require__(154);

var _reactCenter2 = _interopRequireDefault(_reactCenter);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(95);

var _LoginForm = __webpack_require__(202);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _Navbar = __webpack_require__(150);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = __webpack_require__(159);

var _Footer2 = _interopRequireDefault(_Footer);

var _LoginActions = __webpack_require__(124);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login() {
		_classCallCheck(this, Login);

		return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
	}

	_createClass(Login, [{
		key: 'render',
		value: function render() {
			var styles = {
				logoStyle: {
					margin: 'auto',
					width: '153'
				},
				textStyle: {
					textAlign: 'center'
				}
			};

			var instructorLoginRequest = this.props.instructorlogin;
			var getInstructorCourses = this.props.getInstructorCourses;
			var loggedIn = this.props.loggedIn;
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Navbar2.default, null),
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-md-4 col-md-offset-4', style: styles.major },
						_react2.default.createElement(_LoginForm2.default, { loggedIn: loggedIn, instructorLoginRequest: instructorLoginRequest, getInstructorCourses: getInstructorCourses }),
						_react2.default.createElement(_Footer2.default, null)
					)
				)
			);
		}
	}]);

	return Login;
}(_react2.default.Component);

Login.propTypes = {
	loggedIn: _propTypes2.default.func.isRequired,
	instructorlogin: _propTypes2.default.func.isRequired,
	getInstructorCourses: _propTypes2.default.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		loggedIn: function loggedIn(x) {
			return dispatch((0, _LoginActions.loggedIn)(x));
		},
		instructorlogin: function instructorlogin(userData) {
			return dispatch((0, _LoginActions.instructorLoginRequest)(userData));
		},
		getInstructorCourses: function getInstructorCourses(username) {
			return dispatch((0, _LoginActions.getInstructorCourses)(username));
		}
	};
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Login);

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactCenter = __webpack_require__(154);

var _reactCenter2 = _interopRequireDefault(_reactCenter);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(160);

var _classnames2 = _interopRequireDefault(_classnames);

var _isEmpty = __webpack_require__(161);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _reactRouter = __webpack_require__(156);

var _reactRouterDom = __webpack_require__(68);

var _Logo = __webpack_require__(153);

var _Logo2 = _interopRequireDefault(_Logo);

var _Routes = __webpack_require__(148);

var _Routes2 = _interopRequireDefault(_Routes);

var _Tiles = __webpack_require__(158);

var _Tiles2 = _interopRequireDefault(_Tiles);

var _History = __webpack_require__(149);

var _History2 = _interopRequireDefault(_History);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_React$Component) {
	_inherits(LoginForm, _React$Component);

	function LoginForm() {
		_classCallCheck(this, LoginForm);

		var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this));

		_this.state = {
			username: '',
			password: '',
			instructor: false,
			error_password: '',
			error_username: '',
			courses: [],
			CoursesReceived: false
		};

		_this.onChange = _this.onChange.bind(_this);
		_this.onSubmit = _this.onSubmit.bind(_this);
		return _this;
	}

	_createClass(LoginForm, [{
		key: 'onChange',
		value: function onChange(event) {
			this.setState(_defineProperty({ error_username: '', error_password: '' }, event.target.name, event.target.value));
			event.preventDefault();
		}
	}, {
		key: 'onSubmit',
		value: function onSubmit(event) {
			var _this2 = this;

			event.preventDefault();
			if (this.state.username && this.state.password) {
				// fire action that updates the store...
				this.props.instructorLoginRequest({ username: this.state.username, password: this.state.password }).then(function (response) /// ctx.body's data will be available HERE in reponse variable
				{
					_this2.props.loggedIn(true);
					_this2.setState({ // successful login! now you need to set the logged_in value in the store to true <3 for that you'll call an action
						instructor: response.data.instructor, // response should be the list of courses student is enrollrd in
						error_username: response.data.error_username,
						error_password: response.data.error_password
					});

					if (_this2.state.instructor) {
						_this2.props.getInstructorCourses({ username: _this2.state.username }).then(function (response) {
							_this2.setState({
								courses: response.data.courses,
								CoursesReceived: true
							});

							_History2.default.push({
								pathname: '/loginI/instructor',
								state: { InstructorCourses: _this2.state.courses }
							});
						});
					}
				});
			} else this.setState({ error_username: 'Please enter username', error_password: 'Please enter password.' });
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			window.addEventListener("hashchange", function (e) {
				_History2.default.goBack();
			});
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
				_react2.default.createElement(_Logo2.default, null),
				_react2.default.createElement(
					'div',
					{ className: 'header clearfix' },
					_react2.default.createElement(
						'h3',
						{ className: 'text-muted text-center page-header' },
						' Instructor Login'
					)
				),
				_react2.default.createElement(
					'form',
					{ onSubmit: this.onSubmit },
					_react2.default.createElement(
						'div',
						{ className: (0, _classnames2.default)('form-group', { 'has-error': this.state.error_username }) },
						_react2.default.createElement(
							'label',
							{ className: 'control-label' },
							' Username '
						),
						_react2.default.createElement('input', {
							type: 'text',
							name: 'username',
							className: 'form-control',
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
						{ className: (0, _classnames2.default)('form-group', { 'has-error': this.state.error_password }) },
						_react2.default.createElement(
							'label',
							{ className: 'control-label' },
							' Password '
						),
						_react2.default.createElement('input', {
							type: 'password',
							name: 'password',
							className: 'form-control',
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
						{ className: 'form-group', style: styles.buttonStyle },
						_react2.default.createElement(
							'button',
							{ className: 'btn btn-lg btn-success' },
							' Login '
						)
					)
				)
			);
		}
	}]);

	return LoginForm;
}(_react2.default.Component);

exports.default = LoginForm;


LoginForm.propTypes = {
	loggedIn: _propTypes2.default.func.isRequired,
	instructorLoginRequest: _propTypes2.default.func.isRequired,
	getInstructorCourses: _propTypes2.default.func.isRequired
};

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(68);

var _Navbar = __webpack_require__(150);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = __webpack_require__(159);

var _Footer2 = _interopRequireDefault(_Footer);

var _Logo = __webpack_require__(153);

var _Logo2 = _interopRequireDefault(_Logo);

var _History = __webpack_require__(149);

var _History2 = _interopRequireDefault(_History);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import sand from '../images/sand.png'

var Dashboard = function (_React$Component) {
	_inherits(Dashboard, _React$Component);

	function Dashboard() {
		_classCallCheck(this, Dashboard);

		var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this));

		_this.studentButton = _this.studentButton.bind(_this);
		_this.instructorButton = _this.instructorButton.bind(_this);
		return _this;
	}

	_createClass(Dashboard, [{
		key: 'studentButton',
		value: function studentButton(event) {
			event.preventDefault();
			_History2.default.push('/loginS');
			//this.setState({student: true})
		}
	}, {
		key: 'instructorButton',
		value: function instructorButton(event) {
			event.preventDefault();
			_History2.default.push('/loginI');
			//this.setState({instructor: true})
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = {
				textStyle: {
					textAlign: 'center'
				},
				back: {
					backgroundImage: "url('./images/sand.png')"
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
						{ className: 'col-md-4 col-md-offset-4' /*style = {styles.back}*/ },
						_react2.default.createElement(_Logo2.default, null),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'div',
								{ className: 'float-left' },
								_react2.default.createElement(
									'button',
									{ className: 'btn btn-lg btn-success', onClick: this.studentButton },
									'Student Login'
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'float-right' },
								_react2.default.createElement(
									'button',
									{ className: 'btn btn-lg btn-success', onClick: this.instructorButton },
									'Instructor Login'
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'float-left' },
							_react2.default.createElement(_Footer2.default, null)
						)
					)
				)
			);
		}
	}]);

	return Dashboard;
}(_react2.default.Component);

exports.default = Dashboard;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _AssignmentItem = __webpack_require__(172);

var _AssignmentItem2 = _interopRequireDefault(_AssignmentItem);

var _Navbar = __webpack_require__(150);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			var navLinks = [{
				title: "Home",
				href: "#"
			}, {
				title: "Profile",
				href: "#"
			}, {
				title: "Notifications",
				href: "#"
			}];

			var GradeComponents = [{
				type: "Assignments",
				subcomponents: ["Assignment 1 ", "Assignment 2 ", "Assignment 3 "]
			}, {
				type: "Quizzes",
				subcomponents: ["Quiz 1 ", "Quiz 2 ", "Quiz 3 "]
			}, {
				type: "Labs",
				subcomponents: ["Lab 1 ", "Lab 2 ", "Lab 3 "]
			}];

			var createAssignmentItem = function createAssignmentItem(item) {
				return _react2.default.createElement(_AssignmentItem2.default, { Type: item.type, subcomponents: item.subcomponents });
			};

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Navbar2.default, null),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h1',
						{ className: 'text-dark header clearfix' },
						' CS 200 Introduction to Programming '
					)
				),
				GradeComponents.map(createAssignmentItem)
			);
		}
	}]);

	return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(95);

var _History = __webpack_require__(149);

var _History2 = _interopRequireDefault(_History);

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
		key: 'componentWillMount',
		value: function componentWillMount() {
			window.addEventListener("hashchange", function (e) {
				_History2.default.goBack();
			});
		}
	}, {
		key: 'onClick',
		value: function onClick(event) {
			_History2.default.push({
				pathname: '/loginS/student/course/console',
				state: { hey: "abc" }
			});
			event.preventDefault();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'li',
				{ className: 'list-group-item', onClick: this.onClick },
				this.props.GradeComponentName
			);
		}
	}]);

	return GradeComponentItemNumber;
}(_react2.default.Component);

/*
GradeComponentItemNumber.propTypes = 
{
	activeCourse: PropTypes.string.isRequired
}

function mapStateToProps(state)
{
	return { activeCourse: state.activeCourse }
}
*/
//connect(mapStateToProps, null)


exports.default = GradeComponentItemNumber;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Navbar = __webpack_require__(150);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _ReactAce = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./ReactAce2\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
							'Assignment 1'
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
								_react2.default.createElement(_ReactAce2.default, null),
								_react2.default.createElement(
									'div',
									{ className: 'row eq' },
									_react2.default.createElement('input', { type: 'button', defaultValue: 'Run', onClick: function onClick() {
											console.log('Run Clicked');
										} }),
									_react2.default.createElement('input', { type: 'button', defaultValue: 'Submit', onClick: function onClick() {
											console.log('Submit Clicked');
										} })
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

exports.default = CodeEditor;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(95);

var _History = __webpack_require__(149);

var _History2 = _interopRequireDefault(_History);

var _Navbar = __webpack_require__(150);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _SemesterItem = __webpack_require__(208);

var _SemesterItem2 = _interopRequireDefault(_SemesterItem);

var _CoursesActions = __webpack_require__(144);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tiles = function (_React$Component) {
	_inherits(Tiles, _React$Component);

	function Tiles() {
		_classCallCheck(this, Tiles);

		return _possibleConstructorReturn(this, (Tiles.__proto__ || Object.getPrototypeOf(Tiles)).apply(this, arguments));
	}

	_createClass(Tiles, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			window.addEventListener("hashchange", function (e) {
				_History2.default.goBack();
			});
		}
	}, {
		key: 'render',
		value: function render() {
			console.log('wtf');
			var SemesterInfo = [];
			var incomingCourseInfo = this.props.location.state.InstructorCourses;

			this.props.enrolledCourses(incomingCourseInfo); // this is an action! <3
			console.log('fucking done');
			var semesterName, SemesterCourseInfo;

			for (var i = 0; i < incomingCourseInfo.length; i++) {
				SemesterCourseInfo = incomingCourseInfo[i].split(",");
				semesterName = SemesterCourseInfo.shift();
				SemesterInfo.push({ name: semesterName, enrolledInCourses: SemesterCourseInfo });
			};

			var createSemesterItem = function createSemesterItem(item, index) {
				return _react2.default.createElement(_SemesterItem2.default, { key: item.name + index, term: item.name, semesterCourses: item.enrolledInCourses });
			};
			console.log(SemesterInfo);
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Navbar2.default, null),
				_react2.default.createElement(
					'div',
					null,
					SemesterInfo.map(createSemesterItem)
				)
			);
		}
	}]);

	return Tiles;
}(_react2.default.Component);

Tiles.propTypes = {
	enrolledCourses: _propTypes2.default.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		enrolledCourses: function enrolledCourses(courses) {
			return dispatch((0, _CoursesActions.addEnrolledCourses)(courses));
		}
	};
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Tiles);

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _CourseItem = __webpack_require__(209);

var _CourseItem2 = _interopRequireDefault(_CourseItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SemesterItem = function (_React$Component) {
	_inherits(SemesterItem, _React$Component);

	function SemesterItem() {
		_classCallCheck(this, SemesterItem);

		var _this = _possibleConstructorReturn(this, (SemesterItem.__proto__ || Object.getPrototypeOf(SemesterItem)).call(this));

		_this.state = {
			Courses: []
		};
		return _this;
	}

	_createClass(SemesterItem, [{
		key: 'render',
		value: function render() {
			this.state.Courses = this.props.semesterCourses;
			var SemesterTitle = this.props.term;
			var SemesterHeadingStyle = {
				color: 'white'
			};

			var SemesterItemStyle = {
				clear: 'both',
				margin: 50

			};
			var createCourseItem = function createCourseItem(item, index) {
				return _react2.default.createElement(_CourseItem2.default, { CourseName: item, SemesterName: SemesterTitle });
			};

			return _react2.default.createElement(
				'div',
				{ style: SemesterItemStyle },
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'h1',
					{ style: SemesterHeadingStyle },
					' ',
					this.props.term,
					' '
				),
				this.state.Courses.map(createCourseItem),
				_react2.default.createElement('br', null),
				_react2.default.createElement('br', null)
			);
		}
	}]);

	return SemesterItem;
}(_react2.default.Component);

exports.default = SemesterItem;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(95);

var _ThumbNail = __webpack_require__(210);

var _ThumbNail2 = _interopRequireDefault(_ThumbNail);

var _CoursePageActions = __webpack_require__(171);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CourseItem = function (_React$Component) {
	_inherits(CourseItem, _React$Component);

	function CourseItem() {
		_classCallCheck(this, CourseItem);

		return _possibleConstructorReturn(this, (CourseItem.__proto__ || Object.getPrototypeOf(CourseItem)).apply(this, arguments));
	}

	_createClass(CourseItem, [{
		key: 'render',
		value: function render() {
			var CourseItemStyle = {
				marginRight: "50px"
			};
			var getSubcomponents = this.props.getSubcomponents;
			return _react2.default.createElement(
				'div',
				{ style: CourseItemStyle },
				_react2.default.createElement(_ThumbNail2.default, { getSubcomponents: getSubcomponents, CourseTitle: this.props.CourseName, SemesterName: this.props.SemesterName })
			);
		}
	}]);

	return CourseItem;
}(_react2.default.Component);

/*
CourseItem.propTypes = 
{
	getSubcomponentsNamesOnCoursePage: PropTypes.func.isRequired
}
*/

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		getSubcomponents: function getSubcomponents(courseData) {
			return dispatch((0, _CoursePageActions.getSubcomponentsNamesOnCoursePageIns)(courseData));
		}
	};
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(CourseItem);

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(156);

var _reactRouterDom = __webpack_require__(68);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(95);

var _CoursesActions = __webpack_require__(144);

var _History = __webpack_require__(149);

var _History2 = _interopRequireDefault(_History);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThumbNail = function (_React$Component) {
	_inherits(ThumbNail, _React$Component);

	function ThumbNail() {
		_classCallCheck(this, ThumbNail);

		var _this = _possibleConstructorReturn(this, (ThumbNail.__proto__ || Object.getPrototypeOf(ThumbNail)).call(this));

		_this.state = {
			courseSubComponents: {}
		};

		_this.onClick = _this.onClick.bind(_this);
		return _this;
	}

	_createClass(ThumbNail, [{
		key: 'onClick',
		value: function onClick(event) {
			var _this2 = this;

			// user has clicked this thumbnail, meaning this is the active course now!
			console.log('gonna activate the course!');
			this.props.activeCourse(this.props.CourseTitle);
			var courseCode = this.props.CourseTitle.split('|')[0];
			var Semester = this.props.SemesterName;
			this.props.getSubcomponents({ CourseCode: courseCode, SemesterName: Semester }).then(function (response) {
				_this2.setState({
					courseSubComponents: response.data
				});

				var courseCode = _this2.props.CourseTitle.split('|')[0]; // repetition here.... alina pls fix this -abreeza
				var courseTitle = _this2.props.CourseTitle.split('|')[1];

				_History2.default.push({
					pathname: '/loginI/instructor/course',
					state: { CourseCode: courseCode, CourseTitle: courseTitle, SubComponents: _this2.state.courseSubComponents }
				});
			});
			event.preventDefault();
		}
	}, {
		key: 'render',
		value: function render() {
			var ThumbNailStyle = {
				width: 200,
				height: 300,
				margin: 40,
				fontSize: 20,
				overflow: 'hidden',
				verticalalign: 'top',
				float: 'left',
				background: "#f1f4d8"
			};

			var ImageStyle = {
				height: 'auto'

				//console.log('thumbnail')
				//console.log(this.props)
			};var courseCode = this.props.CourseTitle.split('|')[0];
			var courseTitle = this.props.CourseTitle.split('|')[1];
			return _react2.default.createElement(
				'div',
				{ style: ThumbNailStyle, display: 'inline-block', onClick: this.onClick, className: 'thumbnail' },
				_react2.default.createElement('img', { src: '/images/icon.png', className: 'img-circle' }),
				_react2.default.createElement(
					'p',
					null,
					courseCode
				),
				_react2.default.createElement(
					'p',
					null,
					courseTitle
				)
			);
		}
	}]);

	return ThumbNail;
}(_react2.default.Component);

ThumbNail.propTypes = {
	activeCourse: _propTypes2.default.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		activeCourse: function activeCourse(course) {
			return dispatch((0, _CoursesActions.addActiveCourse)(course));
		}
	};
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ThumbNail);

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _AssignmentItem = __webpack_require__(172);

var _AssignmentItem2 = _interopRequireDefault(_AssignmentItem);

var _Navbar = __webpack_require__(150);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoursePage = function (_React$Component) {
	_inherits(CoursePage, _React$Component);

	function CoursePage() {
		_classCallCheck(this, CoursePage);

		return _possibleConstructorReturn(this, (CoursePage.__proto__ || Object.getPrototypeOf(CoursePage)).apply(this, arguments));
	}

	_createClass(CoursePage, [{
		key: 'render',
		value: function render() {
			console.log('CoursePage props');
			console.log(this.props);
			console.log(this.props.location); // the data from the backend will be available in this thingy
			var CourseCode = this.props.location.state.CourseCode;
			var CourseTitle = this.props.location.state.CourseTitle; // where is this coming from???
			var AssignmentTitles = this.props.location.state.SubComponents.CourseInfo.assignments;
			var QuizzesTitles = this.props.location.state.SubComponents.CourseInfo.quizzes;
			var LabsTitles = this.props.location.state.SubComponents.CourseInfo.labs;

			var GradeComponents = [{
				type: "Assignments",
				subcomponents: AssignmentTitles
			}, {
				type: "Quizzes",
				subcomponents: QuizzesTitles
			}, {
				type: "Labs",
				subcomponents: LabsTitles
			}];

			var CourseHeadingStyle = {
				color: 'white'
			};

			GradeComponents = GradeComponents.filter(function (component) {
				return component.subcomponents.length != 0;
			});

			var createAssignmentItem = function createAssignmentItem(item) {
				return _react2.default.createElement(_AssignmentItem2.default, { Type: item.type, subcomponents: item.subcomponents });
			};
			console.log('grade Component');
			console.log(GradeComponents);
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Navbar2.default, null),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'h1',
							{ style: CourseHeadingStyle },
							' ',
							CourseCode,
							' ',
							CourseTitle
						)
					),
					GradeComponents.map(createAssignmentItem)
				)
			);
		}
	}]);

	return CoursePage;
}(_react2.default.Component);

exports.default = CoursePage;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _AssignmentItem = __webpack_require__(213);

var _AssignmentItem2 = _interopRequireDefault(_AssignmentItem);

var _Navbar = __webpack_require__(150);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoursePage = function (_React$Component) {
	_inherits(CoursePage, _React$Component);

	function CoursePage() {
		_classCallCheck(this, CoursePage);

		return _possibleConstructorReturn(this, (CoursePage.__proto__ || Object.getPrototypeOf(CoursePage)).apply(this, arguments));
	}

	_createClass(CoursePage, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			window.addEventListener("hashchange", function (e) {
				history.goBack();
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var CourseCode = this.props.location.state.CourseCode;
			var CourseTitle = this.props.location.state.CourseTitle;
			var AssignmentTitles = this.props.location.state.SubComponents.CourseInfo.assignments;
			var QuizzesTitles = this.props.location.state.SubComponents.CourseInfo.quizzes;
			var LabsTitles = this.props.location.state.SubComponents.CourseInfo.labs;

			var GradeComponents = [{
				type: "Assignments",
				subcomponents: AssignmentTitles
			}, {
				type: "Quizzes",
				subcomponents: QuizzesTitles
			}, {
				type: "Labs",
				subcomponents: LabsTitles
			}];

			var CourseHeadingStyle = {
				color: 'white'
			};

			var createAssignmentItem = function createAssignmentItem(item) {
				return _react2.default.createElement(_AssignmentItem2.default, { Type: item.type, subcomponents: item.subcomponents, CourseCode: CourseCode, CourseTitle: CourseTitle });
			};
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Navbar2.default, null),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'h1',
							{ style: CourseHeadingStyle },
							' ',
							CourseCode,
							' ',
							CourseTitle
						)
					),
					GradeComponents.map(createAssignmentItem)
				)
			);
		}
	}]);

	return CoursePage;
}(_react2.default.Component);

exports.default = CoursePage;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _History = __webpack_require__(149);

var _History2 = _interopRequireDefault(_History);

var _GradeComponentItemNumber = __webpack_require__(214);

var _GradeComponentItemNumber2 = _interopRequireDefault(_GradeComponentItemNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AssignmentItem = function (_React$Component) {
	_inherits(AssignmentItem, _React$Component);

	function AssignmentItem() {
		_classCallCheck(this, AssignmentItem);

		return _possibleConstructorReturn(this, (AssignmentItem.__proto__ || Object.getPrototypeOf(AssignmentItem)).apply(this, arguments));
	}

	_createClass(AssignmentItem, [{
		key: 'render',
		value: function render() {
			var createGradeComponentItemNumber = function createGradeComponentItemNumber(item) {
				return _react2.default.createElement(_GradeComponentItemNumber2.default, { GradeComponentName: item });
			};

			var GradeComponentID = "#" + this.props.Type;

			var PanelStyle = {
				margin: 50
			};
			return _react2.default.createElement(
				'div',
				{ style: PanelStyle, className: 'panel-group', role: 'tablist' },
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
								{ className: 'collapsed', 'data-toggle': 'collapse', href: GradeComponentID, 'aria-expanded': 'false', 'aria-controls': 'collapseListGroup1' },
								this.props.Type
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ id: this.props.Type, className: 'panel-collapse collapse', role: 'tabpanel', 'aria-labelledby': 'collapseListGroupHeading1' },
						_react2.default.createElement(
							'ul',
							{ className: 'list-group' },
							this.props.subcomponents.map(createGradeComponentItemNumber)
						)
					)
				)
			);
		}
	}]);

	return AssignmentItem;
}(_react2.default.Component);

exports.default = AssignmentItem;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _History = __webpack_require__(149);

var _History2 = _interopRequireDefault(_History);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(95);

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

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(95);

var _CoursesActions = __webpack_require__(144);

var _History = __webpack_require__(149);

var _History2 = _interopRequireDefault(_History);

var _Loading = __webpack_require__(216);

var _Loading2 = _interopRequireDefault(_Loading);

var _Navbar = __webpack_require__(150);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Roster = function (_React$Component) {
	_inherits(Roster, _React$Component);

	function Roster() {
		_classCallCheck(this, Roster);

		var _this = _possibleConstructorReturn(this, (Roster.__proto__ || Object.getPrototypeOf(Roster)).call(this));

		_this.state = {
			studentsEnrolledOriginal: [],
			studentsEnrolled: [],
			studentsFound: false,
			courseCode: '',
			courseTitle: ''
		};
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(Roster, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			window.addEventListener("hashchange", function (e) {
				_History2.default.goBack();
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var CourseTitle = this.props.location.state.courseTitle.activeCourse;

			this.setState({
				courseCode: CourseTitle.split('|')[0],
				courseTitle: CourseTitle.split('|')[1]
			}, function () {
				_this2.props.getStudentsEnrolled({ courseCode: _this2.state.courseCode }).then(function (response) {
					_this2.setState({
						studentsEnrolledOriginal: response.data.studentList.students_enrolled,
						studentsEnrolled: response.data.studentList.students_enrolled,
						studentsFound: true
					});
				});
			});
		}
	}, {
		key: 'onChange',
		value: function onChange(event) {
			console.log('calling on change!');
			console.log(event.target.value);
			var newArr = this.state.studentsEnrolledOriginal.filter(function (student) {
				return student.toLowerCase().indexOf(event.target.value.toLowerCase()) == 0;
			});
			console.log(newArr);
			event.preventDefault();
			this.setState({ studentsEnrolled: newArr });
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = {
				CourseHeadingStyle: {
					color: 'white'
				}
			};

			var createStudentList = function createStudentList(item, index) {
				return _react2.default.createElement(StudentsEnrolled, { name: item });
			};

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Navbar2.default, null),
				this.state.studentsFound ? _react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-md-4 col-md-offset-4' },
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'h3',
								{ className: 'page-header text-center', style: styles.CourseHeadingStyle },
								' ',
								this.state.courseTitle,
								' '
							),
							_react2.default.createElement('input', { className: 'search-bar', type: 'search', placeholder: 'Search', onChange: this.onChange }),
							_react2.default.createElement(
								'ul',
								null,
								this.state.studentsEnrolled.map(createStudentList)
							)
						)
					)
				) : _react2.default.createElement(_Loading2.default, null)
			);
		}
	}]);

	return Roster;
}(_react2.default.Component);

Roster.propTypes = {
	getStudentsEnrolled: _propTypes2.default.func.isRequired
};

var mapDisptachToProps = function mapDisptachToProps(dispatch) {
	return {
		getStudentsEnrolled: function getStudentsEnrolled(course) {
			return dispatch((0, _CoursesActions.getStudentsEnrolled)(course));
		}
	};
};

var StudentsEnrolled = function (_React$Component2) {
	_inherits(StudentsEnrolled, _React$Component2);

	function StudentsEnrolled() {
		_classCallCheck(this, StudentsEnrolled);

		return _possibleConstructorReturn(this, (StudentsEnrolled.__proto__ || Object.getPrototypeOf(StudentsEnrolled)).apply(this, arguments));
	}

	_createClass(StudentsEnrolled, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'li',
				null,
				' ',
				_react2.default.createElement(
					'h4',
					{ className: 'text-muted ' },
					' ',
					this.props.name,
					' '
				),
				' '
			);
		}
	}]);

	return StudentsEnrolled;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(null, mapDisptachToProps)(Roster);

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Logo = __webpack_require__(153);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = function (_React$Component) {
	_inherits(Loading, _React$Component);

	function Loading() {
		_classCallCheck(this, Loading);

		return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
	}

	_createClass(Loading, [{
		key: 'render',
		value: function render() {
			return (// must be a better way of doing the br shit :))))))
				_react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-md-4 col-md-offset-4' },
						_react2.default.createElement('br', null),
						_react2.default.createElement('br', null),
						_react2.default.createElement('br', null),
						_react2.default.createElement('br', null),
						_react2.default.createElement('br', null),
						_react2.default.createElement('br', null),
						_react2.default.createElement('br', null),
						_react2.default.createElement(_Logo2.default, null),
						_react2.default.createElement(
							'h3',
							{ className: 'text-muted text-center' },
							'    Loading Code LMS... '
						),
						_react2.default.createElement(
							'div',
							{ className: 'sk-circle' },
							_react2.default.createElement('div', { className: 'sk-circle1 sk-child' }),
							_react2.default.createElement('div', { className: 'sk-circle2 sk-child' }),
							_react2.default.createElement('div', { className: 'sk-circle3 sk-child' }),
							_react2.default.createElement('div', { className: 'sk-circle4 sk-child' }),
							_react2.default.createElement('div', { className: 'sk-circle5 sk-child' }),
							_react2.default.createElement('div', { className: 'sk-circle6 sk-child' }),
							_react2.default.createElement('div', { className: 'sk-circle7 sk-child' }),
							_react2.default.createElement('div', { className: 'sk-circle8 sk-child' }),
							_react2.default.createElement('div', { className: 'sk-circle9 sk-child' }),
							_react2.default.createElement('div', { className: 'sk-circle10 sk-child' }),
							_react2.default.createElement('div', { className: 'sk-circle11 sk-child' }),
							_react2.default.createElement('div', { className: 'sk-circle12 sk-child' })
						)
					)
				)
			);
		}
	}]);

	return Loading;
}(_react2.default.Component);

exports.default = Loading;

/***/ })
])