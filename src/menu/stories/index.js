import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));   
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
