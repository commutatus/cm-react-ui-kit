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

  onMouseEnter = () => {
    this.setState({showMore: true})
  }
  
  onMouseLeave = () => {
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
          <div className="sub-item-list" style={{rigth: 60+width, top: 0, width: 50, position: 'absolute'}}>
            {
              React.Children.map(this.props.children, (child => React.cloneElement(child)))
            }
          </div>
        }
      </div>
    )
  }
}