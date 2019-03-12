import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles/css/slideAnimation.css';

class SlideTransitions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showTransition: false
    }
  }

  _handleSlideTransition = () => {
    this.setState({showTransition: !this.state.showTransition});
    console.log('comes', this.state.showTransition);
  }

  render() {
    let {direction} = this.props
    let {showTransition} = this.state
    return(
      <React.Fragment>
        <CSSTransition
          in={showTransition}
          appear={showTransition}
          timeout={300}
          classNames={`massd-slide-${direction}`}
        >
          <div className="sliding-container">
            <h2>Ktm's slide</h2>
          </div>  
        </CSSTransition>

        <div className="slide-btn" onClick={this._handleSlideTransition}>
          Click to slide
        </div>
      </React.Fragment>
    )
  }
}

export default SlideTransitions;