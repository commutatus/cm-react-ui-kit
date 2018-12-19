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

  .add('list-item', () => (
   Array(10).fill().map(item => (
     <Menu.Item>
       <span><input type="checkbox" /></span>
       Hello brother
     </Menu.Item>
   ))
 ))
