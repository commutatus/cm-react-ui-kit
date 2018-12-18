"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = exports.Item = function Item(props) {
  var handleClick = function handleClick(e) {
    var iKey = props.iKey,
        onTitleClick = props.onTitleClick,
        onClick = props.onClick;

    if (onTitleClick) {
      onTitleClick({ iKey: iKey, domEvent: e });
    }
    if (undefined.onClick) {
      onClick({ iKey: iKey, domEvent: e });
    }
  };
  return _react2.default.createElement(
    "div",
    { className: "list-item-child", onClick: handleClick },
    props.children
  );
};