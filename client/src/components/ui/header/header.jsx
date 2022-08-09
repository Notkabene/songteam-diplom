import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCurrentUserData, getIsLoggedIn } from '../../../store/users'
import Button from '../button/button'
import Logo from '../logo/logo'
import Navbar from '../navbar/navbar'
import NavProfile from '../navProfile/navProfile'
import './header.css'

const Header = () => {
  const currentUser = useSelector(getCurrentUserData())
  const isLoggedIn = useSelector(getIsLoggedIn())
  console.log(currentUser)
  // if (!currentUser) return 'loading'
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Navbar />
          <div>
            {isLoggedIn
              ? (
                <NavProfile />
                )
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
