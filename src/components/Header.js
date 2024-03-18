import React from 'react'
import imgLogo from '../assets/logo.png'

function Header () {
  return (
    <div className='nav_header'>
      <img src={imgLogo} alt="logo" width={118} />
      <ul className='nav_menu'>
        <li>О нас</li>
        <li>Услуги</li>
        <li>Аренда</li>
      </ul>

      <button>Связаться</button>

    </div>
  )
}

export default Header