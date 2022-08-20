import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentUserId, getUserById, updateUser } from '../../store/users'
import PropTypes from 'prop-types'
import Loader from '../ui/loader'
import InfoCurrentUser from '../ui/infoCurrentUser'

const UserPage = ({ isLoggedIn }) => {
  const params = useParams()
  const authUserId = useSelector(getCurrentUserId())
  const authUser = useSelector(getUserById(authUserId))
  const { userId } = params
  const currentUser = useSelector(getUserById(userId))
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const handlePopupClick = () => {
    setIsOpen(!isOpen)
  }

  const [data, setData] = useState({
    userRule: 'user'
  })

  const handleUpdateUser = () => {
    const newData = { ...currentUser, ...data }
    dispatch(updateUser(newData))
    window.location.assign(`/userslist/${currentUser._id}`)
  }

  const handleSelectChange = ({ target }) => {
    const indexTarget = target.options.selectedIndex
    const TextTarget = target.options[indexTarget].value
    setData((prevState) => ({
      ...prevState,
      [target.name]: TextTarget
    }))
  }

  if (!currentUser) return <Loader/>

  return (
    <main className='main account-page'>
      {!isLoggedIn
        ? <p className='not-access'>У Вас нет прав для просмотра этой страницы</p>
        : (
            <div className='container'>
              <div className="account-page__wrapper">

                <InfoCurrentUser currentUser={currentUser}/>

                {authUser.userRule === 'admin' && <button className='btn' onClick={handlePopupClick}>
                  Поменять права этому пользователю
                </button>}
                </div>
            </div>
          )}
      {isOpen && (
        <div className='popup'>
          <div className='popup__content'>
            <p className='popup__text'>
              Выберите новые права для:{' '}
              <span className='popup__name'>{currentUser.name}</span>
              <label className=''>
                <select name='userRule' id='userRule' onChange={handleSelectChange} defaultValue={currentUser.userRule}>
                  <option value='user'>Пользователь</option>
                  <option value='admin'>Админ</option>
                  <option value='editor'>Редактор</option>
                </select>
              </label>
            </p>
            <button className='btn' type='button' onClick={handleUpdateUser}>
              Никаких сомнений
            </button>
            <button
              className='popup__delete'
              type='button'
              onClick={handlePopupClick}
            >
              Х
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
UserPage.propTypes = {
  isLoggedIn: PropTypes.bool
}
export default UserPage
