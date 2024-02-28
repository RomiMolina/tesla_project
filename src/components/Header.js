import React from 'react'
import "./Header.css"
import teslaLogo from "../assets/tesla-9 small.svg"

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

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
       <HelpOutlineIcon/>
       <LanguageIcon/>
        <PermIdentityIcon/>
       </div>
       
    </div>

  )
}

export default Header
