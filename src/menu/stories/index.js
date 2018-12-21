import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from '../../menu'
import { CSSTransition } from 'react-transition-group'
import '../../styles/css/Dropdown.css'

storiesOf('Menu', module)
  .add('left top aligned menu', () => (
    <div style={{width: '200px'}} className="left-top-align">
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
    </div>
  ))

  .add('right top aligned menu', () => (
    <div style={{width: '200px', float: 'right'}} className="right-top-align">
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
    </div>
  ))

  .add('testing Transitions...', () => (
    <CSSTransition
      in={true}
      timeout={300}
      className="example"
    >
      <div>hello brother</div>
    </CSSTransition>
  ))
  
  // .add('bottom right aligned menu', () => (
  //   <div style={{width: '200px', float: 'right'}}>
  //     <Menu>
  //       <Menu.Item>
  //         <span><input type="checkbox" /></span>
  //         Hello brother
  //       </Menu.Item>
  //       <Menu.Item>
  //         <span><input type="checkbox" /></span>
  //         Hello brother
  //       </Menu.Item>
  //       <Menu.Item>
  //         <span><input type="checkbox" /></span>
  //         Hello brother
  //       </Menu.Item>
  //       <Menu.SubItem title={"hover me..."}>
  //         <Menu.Item>
  //           <span><input type="checkbox" /></span>
  //           Hello brother
  //         </Menu.Item>
  //       </Menu.SubItem>
  //     </Menu>
  //   </div>
  // ))

  // .add('bottom left aligned menu', () => (
  //   <div style={{width: '200px', float: 'right'}}>
  //     <Menu>
  //       <Menu.Item>
  //         <span><input type="checkbox" /></span>
  //         Hello brother
  //       </Menu.Item>
  //       <Menu.Item>
  //         <span><input type="checkbox" /></span>
  //         Hello brother
  //       </Menu.Item>
  //       <Menu.Item>
  //         <span><input type="checkbox" /></span>
  //         Hello brother
  //       </Menu.Item>
  //       <Menu.SubItem title={"hover me..."}>
  //         <Menu.Item>
  //           <span><input type="checkbox" /></span>
  //           Hello brother
  //         </Menu.Item>
  //       </Menu.SubItem>
  //     </Menu>
  //   </div>
  // ))

  .add('list-item', () => (
    Array(10).fill().map(item => (
      <Menu.Item>
        <span><input type="checkbox" /></span>
        Hello brother
      </Menu.Item>
    ))
  ))

  .add('list-item', () => (
   Array(10).fill().map(item => (
     <Menu.Item>
       <span><input type="checkbox" /></span>
       Hello brother
     </Menu.Item>
   ))
 ))
