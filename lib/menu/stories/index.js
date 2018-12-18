'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _demo = require('@storybook/react/demo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Button', module).add('with text', function () {
  return _react2.default.createElement(
    _demo.Button,
    null,
    'Hello Button'
  );
}).add('with some emoji', function () {
  return _react2.default.createElement(
    _demo.Button,
    null,
    _react2.default.createElement(
      'span',
      { role: 'img', 'aria-label': 'so cool' },
      '\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF'
    )
  );
});
// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import Menu from '../../menu'

// storiesOf('Menu', module)
//   .add('list', () => (
//     <Menu>
//       <Menu.Item>
//         hello brother
//       </Menu.Item>
//       <Menu.Item>
//         hello brother
//       </Menu.Item>
//       <Menu.Item>
//         hello brother
//       </Menu.Item>
//     </Menu>
//   ))