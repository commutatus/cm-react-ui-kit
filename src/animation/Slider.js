import React from 'react'
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';
import { render } from 'react-dom';
import '../styles/css/animation.css'

class Slider extends React.Component{
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
      <div>
        <button onClick={() => this.setState({unmount: true})}>click to unmount</button>
        <CSSTransition
          in={!this.state.unmount}
          appear={!this.state.unmount}
          timeout={5000}
          classNames="slide-in"
          unmountOnExit
        >
          <div>
            testing
          </div>
        </CSSTransition>
      </div>
    )
  }
}

export default Slider;