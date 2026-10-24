import React from 'react'
import './Header.css'
import logoimage from '../../assets/react.svg'
function Header() {
  return (
    <div id= "headercontent">
        <h1>headercontent</h1>
        <img src="favicon.svg" alt="logo" />
        <img src={logoimage} alt=""/>
    </div>
  )
}

export default Header
