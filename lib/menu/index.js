'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Item = require('./Item');

var _SubItem = require('./SubItem');

var _SubItem2 = _interopRequireDefault(_SubItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.assign(_Menu2.default, {
  Item: _Item.Item,
  SubItem: _SubItem2.default
});