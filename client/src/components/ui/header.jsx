import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getIsLoggedIn } from '../../store/users'
import Button from './button'
import Logo from './logo'
import Navbar from './navbar'
import NavProfile from './navProfile'

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const isLoggedIn = useSelector(getIsLoggedIn())

  const handleBurgerClick = () => {
    setOpen(!isOpen)
  }

  const getClasses = () => {
    return isOpen ? 'header active' : 'header'
  }

  return (
    <header className={getClasses()}>
      <button className="burger" onClick={handleBurgerClick}>
        <span className="burger__line"></span>
      </button>
      <div className="container">
        <div className="header__wrapper">
          <Logo />
            <Navbar isLoggedIn={isLoggedIn} />
            <div className='header__user'>
              {isLoggedIn
                ? <NavProfile onClick={handleBurgerClick}/>
                : (
                <Link to="/login">
                  <Button classes="btn-white" title="Войти" type="button" />
                </Link>
                  )}
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
