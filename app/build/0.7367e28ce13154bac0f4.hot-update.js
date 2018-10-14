webpackHotUpdate(0,{

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.activeAssignment = undefined;

var _GCActions = __webpack_require__(105);

var activeAssignment = exports.activeAssignment = function activeAssignment() // state should NOT be false by default :(
{
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	var action = arguments[1];

	console.log(action.type);
	switch (action.type) {
		case _GCActions.ACTIVE_ASSIGNMENT:
			return Object.assign({}, state, {
				activeAssignment: action.activeAssignment
			});
		default:
			return state;
	}
};

/***/ })

})