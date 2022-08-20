import React from 'react'
import { getBirthday } from '../../utils/getBirthday'
import PropTypes from 'prop-types'
import convert from 'react-from-dom/lib'

const InfoCurrentUser = ({ currentUser }) => {
  // const isRuleAdmin = currentUser.userRule === 'admin'
  // console.log(isRuleAdmin)
  const getGenderUser = () => {
    if (currentUser.sex === 'male') {
      return 'мужской'
    }
    return 'женский'
  }

  return (
    <>
      <h2 className="account-page__title">
        {currentUser.name} {currentUser.surname}
      </h2>
      <div className="account-page__img">{convert(currentUser.image)}</div>
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
        <p className="account-page__info-text">{getGenderUser()}</p>
      </div>
    </>
  )
}

InfoCurrentUser.propTypes = {
  currentUser: PropTypes.object
}

export default InfoCurrentUser
