import React from 'react'
import { Link } from 'react-router-dom'
import './navProfile.css'
import { getCurrentUserData, logOut } from '../../../store/users'
import { useDispatch, useSelector } from 'react-redux'

const navProfile = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(getCurrentUserData())
  console.log('currentUser', currentUser)

  function handleClick () {
    dispatch(logOut())
  }

  // TODO: ЗАМЕНИТЬ на Лоадер
  if (!currentUser) return 'loading'
  return (
    <div className="nav-profile">
      <div className="nav-profile__name">{currentUser.name}</div>
      <img
        src={currentUser.image}
        alt=""
        height="40"
        className="nav-profile__img"
      />

      <Link to={`/users/${currentUser._id}`} className="btn-white">
        ЛК
      </Link>
      <button className='btn-white' type='button' onClick={handleClick}>Выйти</button>

    </div>
  )
}

export default navProfile
