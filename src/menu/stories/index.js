import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from '../../menu'

storiesOf('Menu', module)
  .add('list', () => (
    <Menu>
      <Menu.Item>
        hello brother
      </Menu.Item>
      <Menu.Item>
        hello brother
      </Menu.Item>
    </Menu>
  ))
