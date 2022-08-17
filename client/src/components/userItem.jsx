// import { Piece } from 'avataaars'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import convert from 'react-from-dom/lib'

const UserItem = ({ user }) => {
  return (
    <li className="user-item">
      <Link className="user-item__link" to={`/userslist/${user._id}`}>
        <div className="user-item__img">{convert(user.image)}</div>
        <div className="user-item__info">
          <h3 className="user-item__name">
            {user.name} {user.surname}
          </h3>
          <p className="user-item__email">{user.email}</p>
        </div>
      </Link>
    </li>
  )
}

UserItem.propTypes = {
  user: PropTypes.object
}

export default UserItem
