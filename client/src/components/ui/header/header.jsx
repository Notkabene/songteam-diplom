import React from 'react'
import Button from '../button/button'
import Logo from '../logo/logo'
import Navbar from '../navbar/navbar'
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Navbar />
          <Button classes={'btn-white'} title={'Войти'} type={'button'} />
        </div>
      </div>
    </header>
  )
}

export default Header
