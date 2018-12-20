'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuSubItem = function (_React$Component) {
  _inherits(MenuSubItem, _React$Component);

  function MenuSubItem(props) {
    _classCallCheck(this, MenuSubItem);

    var _this = _possibleConstructorReturn(this, (MenuSubItem.__proto__ || Object.getPrototypeOf(MenuSubItem)).call(this, props));

    _this.onMouseEnter = function (e) {
      _this.top = e.target.offsetTop;
      _this.setState({ showMore: true });
    };

    _this.onMouseLeave = function (e) {
      _this.setState({ showMore: false });
    };

    _this.handleClick = function (e) {
      e.stopPropagation();
      var _this$props = _this.props,
          iKey = _this$props.iKey,
          onTitleClick = _this$props.onTitleClick,
          onClick = _this$props.onClick;


      if (onTitleClick) {
        onTitleClick({ iKey: iKey, domEvent: e });
      }
      if (onClick) {
        onClick({ iKey: iKey, domEvent: e });
      }
    };

    _this._getStyle = function (dimensions) {
      if (!dimensions) return {};
      if (dimensions.right > document.documentElement.clientWidth * 75 / 100) {
        return { right: dimensions.right - dimensions.left, top: _this.top };
      }
      return { left: dimensions.right - dimensions.left, top: _this.top };
    };

    _this.state = {
      showMore: false
    };
    _this.dimensions = {};
    return _this;
  }

  _createClass(MenuSubItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.dimensions = _reactDom2.default.findDOMNode(this).parentNode.getBoundingClientRect();
    }
  }, {
    key: 'render',
    value: function render() {
      var showMore = this.state.showMore;

      return _react2.default.createElement(
        'div',
        {
          className: 'list-item',
          onMouseEnter: this.onMouseEnter,
          onMouseLeave: this.onMouseLeave,
          style: { position: "relative" }
        },
        _react2.default.createElement(
          'div',
          { className: 'item-title menu-list', onClick: this.handleClick },
          this.props.title
        ),
        showMore && _react2.default.createElement(
          'div',
          { className: 'sub-menu-list', style: _extends({}, this._getStyle(this.dimensions)) },
          _react2.default.Children.map(this.props.children, function (child) {
            return _react2.default.cloneElement(child);
          })
        )
      );
    }
  }]);

  return MenuSubItem;
}(_react2.default.Component);

exports.default = MenuSubItem;