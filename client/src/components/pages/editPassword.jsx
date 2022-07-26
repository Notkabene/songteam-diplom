import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUserById, updateUser } from '../../store/users'
import { validator } from '../../utils/validator'
import InputItem from '../ui/inputItem'
import Button from '../ui/button'
import PropTypes from 'prop-types'

const EditPassword = ({ isLoggedIn }) => {
  const navigate = useNavigate()
  const params = useParams()
  const { userId } = params
  const currentUser = useSelector(getUserById(userId))
  const [data, setData] = useState({
    password: '',
    chekPassword: ''
  })
  const [errors, setErrors] = useState({})
  const validatorConfig = {
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения'
      },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву'
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одно число'
      },
      min: {
        message: 'Пароль должен состаять миниму из 8 символов',
        value: 8
      }
    },
    chekPassword: {
      isAgree: {
        message: 'Пароли не совпадают',
        password: data.password
      },
      isRequired: {
        message: 'Повторите новый пароль'
      }
    }
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    dispatch(updateUser(data))
    navigate(`/account/${currentUser._id}`)
  }

  return (
    <main className="main">
      {!isLoggedIn
        ? <p className='not-access'>Авторизуйтесь для просмотра этой страницы</p>
        : <div className="container">
        <form onSubmit={handleSubmit} className='form-edit'>
          <label className="form-edit__label">
            <span className="form-edit__span">Введите новый пароль</span>
            <InputItem
              classes="form-edit__input"
              name="password"
              onChange={handleChange}
              type="password"
              error={errors.password}
            />
          </label>
          <label className="form-edit__label">
            <span className="form-edit__span">Введите еще раз</span>
            <InputItem
              classes="form-edit__input"
              name="chekPassword"
              onChange={handleChange}
              type="password"
              error={errors.chekPassword}
            />
          </label>
          <div className="account-page__btns">
            <Button classes='account-page__edit' title="Изменить" type="submit" disabled={!isValid}/>
            <Link className='btn account-page__out' to={`/account/${currentUser._id}`}>Выйти без изменений</Link>
          </div>
        </form>
      </div>
    }
    </main>
  )
}
EditPassword.propTypes = {
  isLoggedIn: PropTypes.bool
}
export default EditPassword
