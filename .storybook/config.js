import { configure, addDecorator } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';

addDecorator(
  withBackgrounds([
    { name: 'twitter', value: '#00aced', default: true },
    { name: 'facebook', value: '#3b5998' },
    { name: 'grey', value: '#D3D3D3'},
    {name: 'white', value: 'transparent' }
  ])
);

function loadStories() {
  require('../src/menu/stories');
  require('../src/dropdown/stories')
  require('../src/slideAnimations/stories')
  // You can require as many stories as you need.
}

configure(loadStories, module);