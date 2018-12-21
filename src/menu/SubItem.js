import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default class MenuSubItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showMore: false
    }
    this.dimensions = {}
  }

  componentDidMount(){
    this.dimensions  = ReactDOM.findDOMNode(this).parentNode.getBoundingClientRect()
  }

  onMouseEnter = (e) => {
    this.top = e.target.offsetTop
    this.setState({showMore: true})
  }
  
  onMouseLeave = (e) => {
    this.setState({showMore: false})
  }

  handleClick = (e) => {
    e.stopPropagation()
    let {iKey, onTitleClick, onClick} = this.props
    
    if(onTitleClick){
      onTitleClick({iKey, domEvent: e})
    }
    if(onClick){
      onClick({iKey, domEvent: e})
    }
  }

  _getStyle = (dimensions) => {
    if(!dimensions) return {}
    if(dimensions.right > (document.documentElement.clientWidth * 75)/ 100){
      return {right: dimensions.right - dimensions.left, top: this.top}
    }
    return {left: dimensions.right - dimensions.left, top: this.top}
  }
  

  render(){
    let {showMore} = this.state    
    return(
      <div
        className="list-item"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}  
        style={{position: "relative"}}
      >
        <div className="item-title menu-list" onClick={this.handleClick}>
          {this.props.title}
        </div>
        {
          (showMore) &&
          <CSSTransition
            in={true}
            appear={true}
            timeout={600}
            classNames="fade"
          >
            <div className="sub-menu-list" style={{...(this._getStyle(this.dimensions))}}>
              {
                React.Children.map(this.props.children, (child => React.cloneElement(child)))
              }
            </div>
          </CSSTransition>
        }
      </div>
    )
  }
}