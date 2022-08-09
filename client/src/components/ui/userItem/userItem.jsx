import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user }) => {
  return (
    <li className="">
      <div className="">
        <div className="">
          <Link to={`/songlist/${user._id}`}>
            <h3 className="">{user.name}</h3>
            <p className="">{user.email}</p>
            <p className="">{user.email}</p>
          </Link>
        </div>
        <div className="">
        </div>
      </div>
    </li>
  )
}

UserItem.propTypes = {
  user: PropTypes.object
}

export default UserItem
