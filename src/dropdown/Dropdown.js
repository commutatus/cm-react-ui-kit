import React from 'react'
import ReactDOM from 'react-dom'

class Dropdown extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			showDropdown: false
		}
  }

	_handleClick = (e) => {
		let {showDropdown} = this.state
    if(!showDropdown){
			this.dimensions = e.target.getBoundingClientRect();
			console.log(this.dimensions);
			
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

	_getDropdown = () => {
		let { dropdownChild } = this.props
		let { left, bottom } = this.dimensions
		return(
			<div style={{left, top: bottom, position: 'fixed', zIndex: 9}}>
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
			<div id="cascading-dropdown-btn" onClick={this._handleClick}>
        {this.props.children}
        <div id="dropdown-parent">
					{
						this.state.showDropdown && 
						ReactDOM.createPortal(
							this._getDropdown(),
								this.elem
						)
					}
				</div>
			</div>
		)
	}
}


export default Dropdown