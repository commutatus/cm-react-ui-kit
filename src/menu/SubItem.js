import React from 'react'
import ReactDOM from 'react-dom'
import { relative } from 'path';

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
    console.log(dimensions);
    
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
          (showMore || true) &&
          <div className="sub-menu-list" style={{...(this._getStyle(this.dimensions))}}>
            {
              React.Children.map(this.props.children, (child => React.cloneElement(child)))
            }
          </div>
        }
      </div>
    )
  }
}