import React from 'react'

export const Item = (props) => {
  const handleClick = (e) => {
    let {iKey, onTitleClick, onClick} = props
    if(onTitleClick){
      onTitleClick({iKey, domEvent: e})
    }
    if(onClick){
      onClick({iKey, domEvent: e})
    }
  }
  return(
    <div className="menu-list" onClick={handleClick}>
      {props.children}
    </div>
  )
}