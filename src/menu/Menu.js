import React from 'react'
import '../styles/css/Menu.css'

export default class Menu extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  handleClick = (e) => {
    let {key, onTitleClick, onClick} = this.props
    if(this.props.onTitleClick){
      onTitleClick({key, domEvent: e})
    }
    if(onClick){
      onClick({key, domEvent: e})
    }
  }

  render() {
    return(
      <div 
        onClick={this._handleClick}
        className={`menu-container ${this.props.className}`}
        style={{...this.props.style}}
      >
        {
          React.Children.map(this.props.children, (child => React.cloneElement(child, {handleClick: this.handleClick})))
        }
      </div>
    )
  }
}
