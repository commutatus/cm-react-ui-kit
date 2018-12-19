import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from '../../dropdown'

storiesOf('Dropdown', module)
  .add('simple list', () => (
    <Dropdown dropdownChild={<div>asgagas</div>}>
      <div>Press</div>
    </Dropdown>
  ))
