import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from '../../dropdown'
import Menu from '../../menu'

storiesOf('Dropdown', module)
  .add('simple list', () => (
    <Dropdown dropdownChild={<div>asgagas</div>}>
      <div>Press</div>
    </Dropdown>
  ))

  .add('nested Dropdown', () => (
    <Dropdown dropdownChild={
      <Menu>
        <Menu.Item>
          Hello brother
        </Menu.Item>
        <Menu.Item>
          Hello brother
        </Menu.Item>
        <Menu.Item>
          Hello brother
        </Menu.Item>
        <Menu.SubItem title={"hover me..."}>
          <Menu.Item>
            Hello brother
          </Menu.Item>
        </Menu.SubItem>
      </Menu>
    }>
      Press
    </Dropdown>
  ))
