import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({ isLoggedIn }) => {
  const path = useLocation().pathname
  const navMenu = [
    {
      name: 'Список песен',
      id: 'songlist',
      access: 'all',
      link: '/songlist'
    },
    {
      name: 'Пользователи',
      id: 'userslist',
      access: 'registered',
      link: '/userslist'
    },
    {
      name: 'Концерт',
      id: 'sundayprogramm',
      access: 'registered',
      link: '/sundayprogramm'
    }
  ]

  return (
    <nav className="menu">
      <ul className="menu__items">
        {isLoggedIn
          ? navMenu.map((item) => (
              <li
                key={item.id}
                className={
                  path !== item.link ? 'menu__item' : 'menu__item active'
                }
              >
                <Link className="" to={item.link}>
                  {item.name}
                </Link>
              </li>
          ))
          : navMenu.map(
            (item) =>
              item.access === 'all' && (
                  <li
                    key={item.id}
                    className={
                      path !== item.link ? 'menu__item' : 'menu__item active'
                    }
                  >
                    <Link className="" to={item.link}>
                      {item.name}
                    </Link>
                  </li>
              )
          )}
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default Navbar
