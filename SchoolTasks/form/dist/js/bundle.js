(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var FormHide = (function () {
	/**
  * get Element and save it to prototype
  * and go listen this button
  * @param  {String} selector The Close class name
  * @return {void}
  */
	function FormHide(selector) {
		_classCallCheck(this, FormHide);

		this.close = document.querySelector(selector);
		this.addListener();
	}

	_prototypeProperties(FormHide, null, {
		addListener: {
			/**
    * Listen this btn after constructor
    */
			value: function addListener() {
				var _this = this;
				var _close = this.close;
				_close.addEventListener("click", function () {
					_this.hideForm();
					_this.hideMask();
				});
			},
			writable: true,
			configurable: true
		},
		hideForm: {

			/**
    * Hide form just turn the display to none
    * and go to hide the mask
    * @return {void} 
    */
			value: function hideForm() {
				var _container = document.querySelector(".form-container");
				_container.style.display = "none";
			},
			writable: true,
			configurable: true
		},
		hideMask: {
			/**
    * remove mask node!
    * @return {void} This is end!
    */
			value: function hideMask() {
				var _mask = document.querySelector(".mask");
				document.body.removeChild(_mask);
			},
			writable: true,
			configurable: true
		}
	});

	return FormHide;
})();

module.exports = FormHide;

},{}],2:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var FormShow = (function () {
	/**
  * Constructor Function
  * return btn element to this prototype 
  * @param  {String} selector String should be DOM object
  * @return {void}
  */
	function FormShow(selector) {
		_classCallCheck(this, FormShow);

		this.btn = document.querySelector(selector);
		this.addListener();
	}

	_prototypeProperties(FormShow, null, {
		addListener: {
			/**
    * Listener
    * @param {DOM} btn prototype.btn
    */
			value: function addListener() {
				var _this = this;
				var _btn = this.btn;
				_btn.addEventListener("click", function (e) {
					_this.showLogin();
				});
			},
			writable: true,
			configurable: true
		},
		showLogin: {
			/**
    * Show Dialog in body
    * proxy at show Function
    * @return {void} 
    */
			value: function showLogin() {
				this.showMask();
				this.showDialog();
			},
			writable: true,
			configurable: true
		},
		showMask: {
			/**
    * Create a Element at body
    * @return {void} mask
    */
			value: function showMask() {
				var _maskHtml = document.createElement("div");
				_maskHtml.className = "mask";
				document.body.appendChild(_maskHtml);
			},
			writable: true,
			configurable: true
		},
		showDialog: {
			/**
    * show Dialog just SHOW not create!
    * @return {void} show
    */
			value: function showDialog() {
				var _dialog = document.querySelector(".form-container");
				_dialog.style.display = "block";
			},
			writable: true,
			configurable: true
		}
	});

	return FormShow;
})();

module.exports = FormShow;

},{}],3:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var FormShow = _interopRequire(require("./formShow"));

var FormHide = _interopRequire(require("./formHide"));

var show = new FormShow(".login-box .login-btn");
var hide = new FormHide(".close");

},{"./formHide":1,"./formShow":2}]},{},[3]);
