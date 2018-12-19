import React from 'react'
import ReactDOM from 'react-dom'

export default class MenuSubItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showMore: false
    }
    this.dimensions = {}
  }

  componentDidMount(){
    let elem = document.getElementById("cascading-dropdown")
    if(elem)
      this.dimensions = elem.getBoundingClientRect()
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
    if((dimensions.right > window.screenWidth * 75)/ 100){
      return {right: dimensions.left, top: this.top}
    }
    return {left: dimensions.right, top: this.top}
  }
  

  render(){
    let {showMore} = this.state    
    return(
      <div
        className="list-item"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}        
      >
        <div className="item-title" onClick={this.handleClick}>
          {this.props.title}
        </div>
        {
          (showMore || true) &&
          <div className="sub-item-list" style={{...(this._getStyle(this.dimensions)), width: 100, position: 'absolute'}}>
            {
              React.Children.map(this.props.children, (child => React.cloneElement(child)))
            }
          </div>
        }
      </div>
    )
  }
}