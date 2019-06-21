import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/css/Dropdown.css'

class Dropdown extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			showDropdown: false
		}
  }
	
	componentWillUnmount() {
		this.elem && this.elem.remove()
		window.removeEventListener('click', this._handleOutsideClick)
	}

	_handleClick = () => {
		let {showDropdown} = this.state
    if(!showDropdown){
			this.dimensions = document.getElementById('dropdown-btn').getBoundingClientRect();
      window.addEventListener('click', this._handleOutsideClick)
      this._createDropdownElement()
      this.setState({showDropdown: !showDropdown})
    }
  }

	_createDropdownElement = () => {
		if(!this.elem){
			let elem = document.createElement('div')
			elem.style = "position: relative; left: 0px; top: 0px;"
			elem.id = "dropdown"
			document.body.appendChild(elem)
			this.elem = elem
		}
	}

	_getStyle = (dimensions) => {
		if(!dimensions) return {}
		let { left, bottom, right } = this.dimensions
    if(right > (document.documentElement.clientWidth * 75)/ 100){
      return {right: document.documentElement.clientWidth - right, top: bottom}
    }
    return {left: left, top: bottom}
  }

	_getDropdown = () => {
		let { dropdownChild } = this.props
		let { left, bottom } = this.dimensions
		return(
			<div className="dropdown-body" style={{position: "fixed", ...(this._getStyle(this.dimensions)), zIndex: 9}}>
				<CSSTransition
					in={this.state.showDropdown}
					appear={this.state.showDropdown}
					timeout={600}
					classNames="collapse"
				>
					{dropdownChild}
				</CSSTransition>
			</div>
		)
	}

	_handleOutsideClick = (e) => {
    let elem = document.getElementById("dropdown")
    let elemBtn = document.getElementById("dropdown-btn")
		if(!elem.contains(e.target) && !elemBtn.contains(e.target)){
      elem.remove()
			this.setState({showDropdown: false}, () => {
        window.removeEventListener('click', this._handleOutsideClick)
      })
		}
	}

	render() {
		return(
			<div className="dropdown-container">
				<div 
					id="dropdown-btn" 
					onClick={this._handleClick} 
					className="dropdown-btn"
				>
					{this.props.children}
				</div>
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