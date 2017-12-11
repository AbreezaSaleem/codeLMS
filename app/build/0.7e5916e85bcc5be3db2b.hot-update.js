webpackHotUpdate(0,Array(412).concat([
/* 412 */
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

var _ReactAce = __webpack_require__(413);

var _ReactAce2 = _interopRequireDefault(_ReactAce);

var _ConsolePageActions = __webpack_require__(446);

var _ConsolePageActions2 = _interopRequireDefault(_ConsolePageActions);

var _reactRedux = __webpack_require__(12);

var _koaSocketClient = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"koa-socket-client\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _koaSocketClient2 = _interopRequireDefault(_koaSocketClient);

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

		socket = _koaSocketClient2.default.connect('http://localhost:8080');
		_this.state = {
			submitButtonClicked: false,
			runButtonClicked: false
		};
		_this.submitButton = _this.submitButton.bind(_this);
		_this.runButton = _this.runButton.bind(_this);

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
		}
	}, {
		key: 'runButton',
		value: function runButton(event) {
			event.preventDefault();
			console.log("Run Button Clicked");
			this.setState({
				runButtonClicked: true
			});
		}
	}, {
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
									_react2.default.createElement('input', { type: 'button', defaultValue: 'Run', onClick: this.submitButton }),
									_react2.default.createElement('input', { type: 'button', defaultValue: 'Submit', onClick: this.runButton })
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

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		sendCode: function sendCode(socket, code) {
			return dispatch((0, _ConsolePageActions2.default)(socket, code));
		}
	};
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(CodeEditor);

/***/ }),
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */
false,
/* 448 */
false,
/* 449 */
false,
/* 450 */
false,
/* 451 */
false,
/* 452 */
false,
/* 453 */
false,
/* 454 */
false,
/* 455 */
false,
/* 456 */
false,
/* 457 */
false,
/* 458 */
false,
/* 459 */
false,
/* 460 */
false,
/* 461 */
false,
/* 462 */
false,
/* 463 */
false,
/* 464 */
false,
/* 465 */
false,
/* 466 */
false,
/* 467 */
false,
/* 468 */
false,
/* 469 */
false,
/* 470 */
false,
/* 471 */
false,
/* 472 */
false,
/* 473 */
false,
/* 474 */
false,
/* 475 */
false,
/* 476 */
false,
/* 477 */
false,
/* 478 */
false,
/* 479 */
false,
/* 480 */
false,
/* 481 */
false,
/* 482 */
false,
/* 483 */
false,
/* 484 */
false,
/* 485 */
false,
/* 486 */
false,
/* 487 */
false,
/* 488 */
false,
/* 489 */
false,
/* 490 */
false,
/* 491 */
false,
/* 492 */
false,
/* 493 */
false,
/* 494 */
false,
/* 495 */
false,
/* 496 */
false,
/* 497 */
false,
/* 498 */
false,
/* 499 */
false,
/* 500 */
false,
/* 501 */
false,
/* 502 */
false,
/* 503 */
false,
/* 504 */
false,
/* 505 */
false,
/* 506 */
false,
/* 507 */
false,
/* 508 */
false,
/* 509 */
false,
/* 510 */
false,
/* 511 */
false,
/* 512 */
false,
/* 513 */
false,
/* 514 */
false,
/* 515 */
false,
/* 516 */
false,
/* 517 */
false,
/* 518 */
false,
/* 519 */
false,
/* 520 */
false,
/* 521 */
false,
/* 522 */
false,
/* 523 */
false,
/* 524 */
false,
/* 525 */
false,
/* 526 */
false,
/* 527 */
false,
/* 528 */
false,
/* 529 */
false,
/* 530 */
false,
/* 531 */
false,
/* 532 */
false,
/* 533 */
false,
/* 534 */
false,
/* 535 */
false,
/* 536 */
false,
/* 537 */
false,
/* 538 */
false,
/* 539 */
false,
/* 540 */
false,
/* 541 */
false,
/* 542 */
false,
/* 543 */
false,
/* 544 */
false,
/* 545 */
false,
/* 546 */
false,
/* 547 */
false,
/* 548 */
false,
/* 549 */
false,
/* 550 */
false,
/* 551 */
false,
/* 552 */
false,
/* 553 */
false,
/* 554 */
false,
/* 555 */
false,
/* 556 */
false,
/* 557 */
false,
/* 558 */
false,
/* 559 */
false,
/* 560 */
false,
/* 561 */
false,
/* 562 */
false,
/* 563 */
false,
/* 564 */
false,
/* 565 */
false,
/* 566 */
false,
/* 567 */
false,
/* 568 */
false,
/* 569 */
false,
/* 570 */
false,
/* 571 */
false,
/* 572 */
false,
/* 573 */
false,
/* 574 */
false,
/* 575 */
false,
/* 576 */
false,
/* 577 */
false,
/* 578 */
false,
/* 579 */
false,
/* 580 */
false,
/* 581 */
false,
/* 582 */
false,
/* 583 */
false,
/* 584 */
false,
/* 585 */
false,
/* 586 */
false,
/* 587 */
false,
/* 588 */
false,
/* 589 */
false,
/* 590 */
false,
/* 591 */
false,
/* 592 */
false,
/* 593 */
false,
/* 594 */
false,
/* 595 */
false,
/* 596 */
false,
/* 597 */
false,
/* 598 */
false,
/* 599 */
false,
/* 600 */
false,
/* 601 */
false,
/* 602 */
false,
/* 603 */
false,
/* 604 */
false,
/* 605 */
false,
/* 606 */
false,
/* 607 */
false,
/* 608 */
false,
/* 609 */
false,
/* 610 */
false,
/* 611 */
false,
/* 612 */
false,
/* 613 */
false,
/* 614 */
false,
/* 615 */
false,
/* 616 */
false,
/* 617 */
false,
/* 618 */
false,
/* 619 */
false,
/* 620 */
false,
/* 621 */
false,
/* 622 */
false,
/* 623 */
false,
/* 624 */
false,
/* 625 */
false,
/* 626 */
false,
/* 627 */
false,
/* 628 */
false,
/* 629 */
false,
/* 630 */
false,
/* 631 */
false,
/* 632 */
false,
/* 633 */
false,
/* 634 */
false,
/* 635 */
false,
/* 636 */
false,
/* 637 */
false,
/* 638 */
false,
/* 639 */
false,
/* 640 */
false,
/* 641 */
false,
/* 642 */
false,
/* 643 */
false,
/* 644 */
false,
/* 645 */
false,
/* 646 */
false,
/* 647 */
false,
/* 648 */
false,
/* 649 */
false,
/* 650 */
false,
/* 651 */
false,
/* 652 */
false,
/* 653 */
false,
/* 654 */
false,
/* 655 */
false,
/* 656 */
false,
/* 657 */
false,
/* 658 */
false,
/* 659 */
false,
/* 660 */
false,
/* 661 */
false,
/* 662 */
false,
/* 663 */
false,
/* 664 */
false,
/* 665 */
false,
/* 666 */
false,
/* 667 */
false,
/* 668 */
false,
/* 669 */
false,
/* 670 */
false,
/* 671 */
false,
/* 672 */
false,
/* 673 */
false,
/* 674 */
false,
/* 675 */
false,
/* 676 */
false,
/* 677 */
false,
/* 678 */
false,
/* 679 */
false,
/* 680 */
false,
/* 681 */
false,
/* 682 */
false,
/* 683 */
false,
/* 684 */
false,
/* 685 */
false,
/* 686 */
false,
/* 687 */
false,
/* 688 */
false,
/* 689 */
false,
/* 690 */
false,
/* 691 */
false,
/* 692 */
false,
/* 693 */
false,
/* 694 */
false,
/* 695 */
false,
/* 696 */
false,
/* 697 */
false,
/* 698 */
false,
/* 699 */
false,
/* 700 */
false,
/* 701 */
false,
/* 702 */
false,
/* 703 */
false,
/* 704 */
false,
/* 705 */
false,
/* 706 */
false,
/* 707 */
false,
/* 708 */
false,
/* 709 */
false,
/* 710 */
false,
/* 711 */
false,
/* 712 */
false,
/* 713 */
false,
/* 714 */
false,
/* 715 */
false,
/* 716 */
false,
/* 717 */
false,
/* 718 */
false,
/* 719 */
false,
/* 720 */
false,
/* 721 */
false,
/* 722 */
false,
/* 723 */
false,
/* 724 */
false,
/* 725 */
false,
/* 726 */
false,
/* 727 */
false,
/* 728 */
false,
/* 729 */
false,
/* 730 */
false,
/* 731 */
false,
/* 732 */
false,
/* 733 */
false,
/* 734 */
false,
/* 735 */
false,
/* 736 */
false,
/* 737 */
false,
/* 738 */
false,
/* 739 */
false,
/* 740 */
false,
/* 741 */
false,
/* 742 */
false,
/* 743 */
false,
/* 744 */
false,
/* 745 */
false,
/* 746 */
false,
/* 747 */
false,
/* 748 */
false,
/* 749 */
false,
/* 750 */
false,
/* 751 */
false,
/* 752 */
false,
/* 753 */
false,
/* 754 */
false,
/* 755 */
false
]))