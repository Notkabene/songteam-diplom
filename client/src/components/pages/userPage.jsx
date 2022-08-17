import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentUserId, getUserById, updateUser } from '../../store/users'
import PropTypes from 'prop-types'
import Loader from '../ui/loader'
import convert from 'react-from-dom/lib'
import { getBirthday } from '../../utils/getBirthday'

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
    dispatch(updateUser(data))
    setIsOpen(!isOpen)
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
    <main className='main'>
      {!isLoggedIn
        ? <p className='not-access'>У Вас нет прав для просмотра этой страницы</p>
        : (
        <div className='container'>
          <div className='user-page'>
            <div className='user-page__img'>{convert(currentUser.image)}</div>
            <h3 className='user-page__name'>
              {currentUser.name} {currentUser.surname}
            </h3>
            <div className='user-page__info'>
              <p className='user-page__item user-page__email'>
                <span className='user-page__span'>Почта: </span>{currentUser.email}
              </p>
              <p className='user-page__item user-page__rule'>
                <span className='user-page__span'>Права: </span>{currentUser.userRule}
              </p>
              <p className='user-page__item user-page__sex'>
                <span className='user-page__span'>Пол: </span>{currentUser.sex}
              </p>
              <p className='user-page__item user-page__birthday'>
                <span className='user-page__span'>День рождения: </span>
              {getBirthday(currentUser.birthday)}
              </p>
            </div>
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
