import React from 'react';
import Menu from '../menu';
import {mount} from 'enzyme'

test('Menu rendering properly...', () => {
  const tree = mount(
    // <Menu>
    <Menu.Item>
      Hello brother
    </Menu.Item>
  //   <Menu.Item>
  //     Hello brother
  //   </Menu.Item>
  //   <Menu.Item>
  //     Hello brother
  //   </Menu.Item>
  //   <Menu.SubItem title={"hover me..."}>
  //     <Menu.Item>
  //       Hello brother
  //     </Menu.Item>
  //   </Menu.SubItem>
  // </Menu>
  );
  console.log(tree)
  // let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})