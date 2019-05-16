import React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from '../Slider'

storiesOf('Animation', module)
  .add('simple list', () => (
    <Slider />
  ))