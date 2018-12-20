import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/css/Dropdown.css'

class Dropdown extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			showDropdown: false
		}
  }

	_handleClick = () => {
		let {showDropdown} = this.state
    if(!showDropdown){
			this.dimensions = ReactDOM.findDOMNode(this).getBoundingClientRect();
      window.addEventListener('click', this._handleOutsideClick)
      this._createDropdownElement()
      this.setState({showDropdown: !showDropdown})
    }
  }

	_createDropdownElement = () => {
    let elem = document.createElement('div')
    elem.style = "position: relative; left: 0px; top: 0px;"
    elem.id = "cascading-dropdown"
    document.body.appendChild(elem)
    this.elem = elem
	}

	_getStyle = (dimensions) => {
		if(!dimensions) return {}
		let { left, bottom, right } = this.dimensions
    if(right > (document.documentElement.clientWidth * 75)/ 100){
      return {right: right - left, top: bottom}
    }
    return {left: right - left, top: bottom}
  }

	_getDropdown = () => {
		let { dropdownChild } = this.props
		let { left, bottom } = this.dimensions
		return(
			<div className="dropdown-body" style={{position: "fixed", ...(this._getStyle(this.dimensions)), zIndex: 9}}>
				{dropdownChild}
			</div>
		)
	}

	_handleOutsideClick = (e) => {
    let elem = document.getElementById("cascading-dropdown")
    let elemBtn = document.getElementById("cascading-dropdown-btn")
		if(!elem.contains(e.target) && !elemBtn.contains(e.target)){
      elem.remove()
			this.setState({showDropdown: false}, () => {
        window.removeEventListener('click', this._handleOutsideClick)
      })
		}
	}

	componentWillUnmount() {
		window.removeEventListener('click', this._handleOutsideClick)
	}

	render() {
		return(
			<div id="cascading-dropdown-btn" className="dropdown-container" onClick={this._handleClick}>
        <div className="dropdown-btn">{this.props.children}</div>
					{
						this.state.showDropdown && 
						ReactDOM.createPortal(
							this._getDropdown(),
							this.elem
						)
					}
			</div>
		)
	}
}


export default Dropdown