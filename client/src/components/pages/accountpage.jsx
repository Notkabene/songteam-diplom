import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUserById } from '../../store/users'
import PropTypes from 'prop-types'
import convert from 'react-from-dom/lib'
import { getBirthday } from '../../utils/getBirthday'

const AccountPage = ({ isLoggedIn }) => {
  const params = useParams()
  const { userId } = params
  const currentUser = useSelector(getUserById(userId))

  return (
    <main className="main account-page">
      {!isLoggedIn
        ? <p className="not-access">Авторизуйтесь для просмотра этой страницы</p>
        : (
        <div className="container">
          <div className="account-page__wrapper">
            <h2 className="account-page__title">
              {currentUser.name} {currentUser.surname}
            </h2>
            <div className="account-page__img">
              {convert(currentUser.image)}
            </div>
            <div className="account-page__info">
              <p className="account-page__info-name">День рождения</p>
              <p className="account-page__info-text">
                {getBirthday(currentUser.birthday)}
              </p>
              <p className="account-page__info-name">E-mail</p>
              <p className="account-page__info-text">{currentUser.email}</p>
              <p className="account-page__info-name">Права</p>
              <p className="account-page__info-text">{currentUser.userRule}</p>
              <p className="account-page__info-name">Пол</p>
              <p className="account-page__info-text">{currentUser.sex}</p>
            </div>
            <div className="account-page__btns">
              <Link
                to={`/edituser/${userId}`}
                className="btn account-page__edit"
              >
                Изменить данные
              </Link>
              <Link
                to={`/editpassword/${userId}`}
                className="btn account-page__pass"
              >
                Изменить пароль
              </Link>
            </div>
          </div>
        </div>
          )}
    </main>
  )
}

AccountPage.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default AccountPage
