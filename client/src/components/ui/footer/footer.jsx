import React from 'react'
import Logo from '../logo/logo'
import Navbar from '../navbar/navbar'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <Logo />
          <Navbar />
        </div>
      </div>
    </footer>
  )
}

export default Footer
