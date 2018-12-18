import React from 'react'

export const Item = (props) => {
  const handleClick = (e) => {
    let {iKey, onTitleClick, onClick} = props
    if(onTitleClick){
      onTitleClick({iKey, domEvent: e})
    }
    if(this.onClick){
      onClick({iKey, domEvent: e})
    }
  }
  return(
    <div className="list-item-child" onClick={handleClick}>
      {props.children}
    </div>
  )
}