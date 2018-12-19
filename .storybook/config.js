import { configure } from '@storybook/react';

function loadStories() {
  require('../src/menu/stories');
  require('../src/dropdown/stories')
  // You can require as many stories as you need.
}

configure(loadStories, module);