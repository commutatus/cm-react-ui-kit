'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_React$Component) {
	_inherits(Dropdown, _React$Component);

	function Dropdown(props) {
		_classCallCheck(this, Dropdown);

		var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

		_this._handleClick = function (e) {
			var showDropdown = _this.state.showDropdown;

			if (!showDropdown) {
				_this.dimensions = e.target.getBoundingClientRect();
				console.log(_this.dimensions);

				window.addEventListener('click', _this._handleOutsideClick);
				_this._createDropdownElement();
				_this.setState({ showDropdown: !showDropdown });
			}
		};

		_this._createDropdownElement = function () {
			var elem = document.createElement('div');
			elem.style = "position: relative; left: 0px; top: 0px;";
			elem.id = "cascading-dropdown";
			document.body.appendChild(elem);
			_this.elem = elem;
		};

		_this._getDropdown = function () {
			var dropdownChild = _this.props.dropdownChild;
			var _this$dimensions = _this.dimensions,
			    left = _this$dimensions.left,
			    bottom = _this$dimensions.bottom;

			return _react2.default.createElement(
				'div',
				{ style: { left: left, top: bottom, position: 'fixed', zIndex: 9 } },
				dropdownChild
			);
		};

		_this._handleOutsideClick = function (e) {
			var elem = document.getElementById("cascading-dropdown");
			var elemBtn = document.getElementById("cascading-dropdown-btn");
			if (!elem.contains(e.target) && !elemBtn.contains(e.target)) {
				elem.remove();
				_this.setState({ showDropdown: false }, function () {
					window.removeEventListener('click', _this._handleOutsideClick);
				});
			}
		};

		_this.state = {
			showDropdown: false
		};
		return _this;
	}

	_createClass(Dropdown, [{
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('click', this._handleOutsideClick);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'cascading-dropdown', id: 'cascading-dropdown-btn', onClick: this._handleClick },
				this.props.children,
				this.state.showDropdown && _reactDom2.default.createPortal(this._getDropdown(), this.elem)
			);
		}
	}]);

	return Dropdown;
}(_react2.default.Component);

exports.default = Dropdown;