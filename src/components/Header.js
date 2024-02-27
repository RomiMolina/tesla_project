import React from 'react'
import "./Header.css"
import teslaLogo from "../assets/tesla-9 small.svg"

const Header = () => {
  return (
    <div className='header' >
       <div className='header__logo'>
        <img src={teslaLogo} alt='Tesla Logo' />
       </div>

       <div className='header__center'>
       <p>Vehicles</p>
        <p>Energy</p>
        <p>Charging</p>
        <p>Discover</p>
        <p>Shop</p>
       </div>

       <div className='header__right'>
       <p>Shop</p>
        <p>Tesla Account</p>
       </div>
       
    </div>

  )
}

export default Header
