import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUserById } from '../../store/users'
import PropTypes from 'prop-types'

import InfoCurrentUser from '../ui/infoCurrentUser'

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
          <InfoCurrentUser currentUser={currentUser} />
          <div className="account-page__btns">
            <Link to={`/edituser/${userId}`} className="btn account-page__edit">
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
