import { configure } from '@storybook/react';

function loadStories() {
  require('../src/menu/stories');
  // You can require as many stories as you need.
}

configure(loadStories, module);