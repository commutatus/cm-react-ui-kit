import React from 'react';
import { storiesOf } from '@storybook/react';
import SlideTransitions from '../SlideTransitions';

storiesOf('slideIn', module)

  .add('slide in from left', () => (
    <SlideTransitions direction="left" />
  ))

  .add('slide in from right', () => (
    <SlideTransitions direction='right' />
  ))