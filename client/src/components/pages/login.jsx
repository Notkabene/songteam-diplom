import React, { useEffect, useState } from 'react'
import Button from '../ui/button'
import InputItem from '../ui/inputItem'
import { validator } from '../../utils/validator'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthErrors, login } from '../../store/users'
import { Link } from 'react-router-dom'

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const loginError = useSelector(getAuthErrors())
  const dispath = useDispatch()
  const [errors, setErrors] = useState({})

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения'
      }
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения'
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

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return

    dispath(login({ payload: data }))
  }
  return (
    <main className="main login">
      <div className="login__wrapper">
        <div className="container">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form__item">
              <InputItem
                classes="login-form__input"
                name="email"
                onChange={handleChange}
                type="email"
                error={errors.email}
              />
              {loginError && <div className="text-danger">{loginError}</div>}
            </div>
            <div className="login-form__item">
              <InputItem
                classes="login-form__input"
                name="password"
                onChange={handleChange}
                type="password"
                error={errors.password}
              />
              {loginError && <div className="text-danger">{loginError}</div>}
            </div>
            <div className="login-form__registration">
              <span>Еще не с нами? </span>
              <Link to="/register">Регистрируйся!</Link>
            </div>
            <Button
              classes="login-form__btn"
              title="Войти"
              type="submit"
              disabled={!isValid}
            />
          </form>
        </div>
      </div>
    </main>
  )
}

export default Login
