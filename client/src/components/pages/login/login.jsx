import React, { useState } from 'react'
import Button from '../../ui/button/button'
import InputItem from '../../ui/input/inputItem'
import './login.css'
import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import { login } from '../../../store/users'
import { Link } from 'react-router-dom'

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  // const loginError = useSelector(getAuthErrors())
  // const history = useHistory()
  const dispath = useDispatch()
  // const [errors, setErrors] = useState({})

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  // const validatorConfog = {
  //   email: {
  //     isRequired: {
  //       message: 'Электронная почта обязательна для заполнения'
  //     }
  //   },
  //   password: {
  //     isRequired: {
  //       message: 'Пароль обязателкн для заполнения'
  //     }
  //   }
  // }
  // useEffect(() => {
  //   validate()
  // }, [data])
  // const validate = () => {
  //   const errors = validator(data, validatorConfog)
  //   setErrors(errors)
  //   return Object.keys(errors).length === 0
  // }
  // const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('login', data)
    // const isValid = validate()
    // if (!isValid) return
    const redirect = '/'
    console.log(data)

    dispath(login({ payload: data, redirect }))
  }
  return (
    <main className="main">
      <div className="login">
        <form className="login-form" onSubmit={handleSubmit}>
          <InputItem
            classes='login-form__input input'
            name='email'
            onChange={handleChange}
            type='email'
          />
          <InputItem
            classes='login-form__input input'
            name='password'
            onChange={handleChange}
            type='password'
          />
          <Link className='login-form__register link' to='/register'>Регистрация</Link>
          <Button classes="login-form__btn btn" title="Войти" type="submit" />
        </form>
      </div>
    </main>
  )
}

export default Login
