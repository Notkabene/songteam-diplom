import React, { useState } from 'react'
import Button from '../../ui/button/button'
import InputItem from '../../ui/input/inputItem'
import { useDispatch } from 'react-redux'
import './register.css'
import { signUp } from '../../../store/users'

const Register = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    email: '',
    password: '',
    sex: 'male',
    name: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    // const isValid = validate()
    // if (!isValid) return
    // console.log('signUp(data)', data)
    dispatch(signUp(data))
  }
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  return (
    <main className="main">
      <div className="register">
        <form className="register-form" onSubmit={handleSubmit}>
          <label className="label">
            <InputItem
              classes="register-form__input input"
              name="name"
              onChange={handleChange}
              type="text"
            />
            <span className="label__name">Имя</span>
            <span className="label__error"></span>
          </label>

          {/* <label className="label">
            <InputItem
              classes="register-form__input input"
              name="surname"
              type="text"
            />
            <span className="label__name">Фамилия</span>
            <span className="label__error"></span>
          </label> */}

          {/* <label className="label">
            <InputItem
              classes="register-form__input input"
              name="birthday"
              type="date"
            />
            <span className="label__name">День Рождения</span>
            <span className="label__error"></span>
          </label> */}

          <label className="label">
            <InputItem
              classes="register-form__input input"
              name="email"
              type="email"
              onChange={handleChange}
            />
            <span className="label__name">E-mail</span>
            <span className="label__error"></span>
          </label>

          <label className="label">
            <InputItem
              classes="register-form__input input"
              name="password"
              onChange={handleChange}
              type="password"
            />
            <span className="label__name">Пароль</span>
            <span className="label__error"></span>
          </label>

          <Button
            classes="register-form__btn btn"
            title="Зарегистрироваться"
            type="submit"
          />
        </form>
      </div>
    </main>
  )
}

export default Register
