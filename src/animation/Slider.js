import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { render } from 'react-dom';

export class Right extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showTransition: false
    }
  }

  _handleTransition(props){
    this.setState({showTransition: props.show})
  }

  render() {
    let {show} = this.props
    return(
      <CSSTransition
        in={show}
        appear={show}
      >
        
      </CSSTransition>
    )
  }
}