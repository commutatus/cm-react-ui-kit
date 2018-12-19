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
    this.dimensions = ReactDOM.findDOMNode(this).parentNode.getBoundingClientRect()
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

  render(){
    let {showMore} = this.state
    let {width} = this.dimensions
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
          showMore &&
          <div className="sub-item-list" style={{left: width, top: this.top, width: 50, position: 'absolute'}}>
            {
              React.Children.map(this.props.children, (child => React.cloneElement(child)))
            }
          </div>
        }
      </div>
    )
  }
}