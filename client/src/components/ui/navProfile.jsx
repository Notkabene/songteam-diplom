import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getCurrentUserData, logOut } from '../../store/users'
import { useDispatch, useSelector } from 'react-redux'
import convert from 'react-from-dom/lib'

const navProfile = ({ handleBurgerClick }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const currentUser = useSelector(getCurrentUserData())

  function handleClick () {
    dispatch(logOut())
    navigate('/')
  }

  if (!currentUser) return <span className='nav-loading'>Загружаю...</span>
  return (
    <div className="nav-profile">
      <Link to={`/account/${currentUser._id}`} className="nav-profile__user">
        <div className="nav-profile__img">{convert(currentUser.image)}</div>
        <div className="nav-profile__name">{currentUser.name}</div>
      </Link>
      <button className='btn' type='button' onClick={handleClick}>Выйти</button>

    </div>
  )
}

export default navProfile
