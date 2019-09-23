import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import classnames from 'classnames'
import { CSSTransition } from 'react-transition-group';
import '../styles/css/Dropdown.css'

class Dropdown extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			showDropdown: false
		}
  }

  componentDidUpdate(oldProps, oldState){
    if(this.state.showDropdown && !oldState.showDropdown){
      document.addEventListener('click', this._handleOutsideClick)
      
    }
    if(!this.state.showDropdown && oldState.showDropdown){
      if(this.elem)
			this.elem.remove()
	  	document.removeEventListener('click', this._handleOutsideClick)
    }
  }

	_handleClick = () => {
    let {showDropdown} = this.state
    if(!showDropdown){
			this.dimensions = this.btnNode.getBoundingClientRect();
      this._createDropdownElement()
      this.setState({showDropdown: true})
    }
  }

	_createDropdownElement = () => {
		if(!this.elem && this.state.usePortal){
			let elem = document.createElement('div')
			elem.style = "position: relative; left: 0px; top: 0px;"
			elem.id = "cm-dropdown"
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

	_getDropdown = (isPortal) => {
		let { dropdownChild } = this.props
		// let { left, bottom } = this.dimensions
		return(
			<div className="cm-dropdown-body" style={isPortal ? {position: "fixed", ...(this._getStyle(this.dimensions)), zIndex: 9} : {position: 'absolute'}}>
				<CSSTransition
					in={this.state.showDropdown}
					appear={this.state.showDropdown}
					timeout={100}
					classNames="collapse"
				>
					{dropdownChild}
				</CSSTransition>
			</div>
		)
	}

	_handleOutsideClick = (e) => {
    // if(this.state.showDropdown){
      if(this.state.usePortal){
        let elem = document.getElementById("cm-dropdown")
        let elemBtn = document.getElementById("cm-dropdown-btn")
        if(elem && !elem.contains(e.target) && !elemBtn.contains(e.target)){
          elem.remove()
          this.setState({showDropdown: false})
        }
      }
      else{
        if(this.containerNode && !this.containerNode.contains(e.target)){
          this.setState({showDropdown: false})
        }
      }
    // }
	}

	render() {
		let {
      usePortal, 
      showArrow, 
      dropdownStyle, 
      dropdownClassname
    } = this.props
		let {showDropdown} = this.state
    let containerStyle = usePortal ? this._getStyle(this.dimensions) : {position: 'relative'}
		return(
      <div 
        ref={node => this.containerNode = node} 
        className={classnames("cm-dropdown-container", dropdownClassname)}
        style={{...containerStyle, dropdownStyle}}
      >
				<div 
          id="cm-dropdown-btn"
          ref={node => this.btnNode = node}
					onClick={this._handleClick} 
					className="cm-dropdown-btn"
				>
          {this.props.children}
          {
            showArrow && <span><i className={`cm cm-icon-arrow-${showDropdown ? 'up' : 'down'}`} /></span>
          }
				</div>
					{
						usePortal
						?
						showDropdown &&
						ReactDOM.createPortal(
							this._getDropdown(true),
							this.elem
						)
						:
						showDropdown && this._getDropdown()
					}
			</div>
		)
	}
}

Dropdown.propTypes = {
	usePortal: PropTypes.bool, 
	showArrow: PropTypes.bool, 
	dropdownStyle: PropTypes.string, 
	dropdownClassname: PropTypes.string,
	children: PropTypes.node,
}

export default Dropdown