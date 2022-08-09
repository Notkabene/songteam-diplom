import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const path = useLocation().pathname
  const navMenu = [
    {
      name: 'Список песен',
      id: 'songlist',
      link: '/songlist'
    },
    {
      name: 'Пользователи',
      id: 'userslist',
      link: '/userslist'
    },
    {
      name: 'Концерт',
      id: 'sundayprogramm',
      link: '/sundayprogramm'
    }
  ]

  return (
    <nav className="menu">
      <ul className="menu__items">
        {navMenu.map((item) => (
          <li
            key={item.id}
            className={
              path !== item.link ? 'menu__item link' : 'menu__item active'
            }
          >
            <Link className="link" to={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
