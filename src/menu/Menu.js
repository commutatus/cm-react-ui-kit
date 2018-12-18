import React from 'react'
import '../styles/css/Global.css'

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
        className="dropdown-parent"

      >
        {
          React.Children.map(this.props.children, (child => React.cloneElement(child, {handleClick: this.handleClick})))
        }
      </div>
    )
  }
}
