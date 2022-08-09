import React, { useState } from 'react'
import Button from '../ui/button/button'
import InputItem from '../ui/input/inputItem'
import { useDispatch } from 'react-redux'
import { signUp } from '../../store/users'

const Register = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    email: '',
    password: '',
    sex: '',
    name: '',
    surname: '',
    birthday: ''
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
  const handleSelectChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  return (
    <main className="">
      <div className="">
        <form className="" onSubmit={handleSubmit}>
          <label className="">
            <InputItem
              classes=""
              name="name"
              onChange={handleChange}
              type="text"
            />
            <span className="">Имя</span>
            <span className=""></span>
          </label>

          <label className="">
            <InputItem
              classes=""
              name="surname"
              onChange={handleChange}
              type="text"
            />
            <span className="">Фамилия</span>
            <span className=""></span>
          </label>

          <label className="">
            <InputItem
              classes=""
              name="birthday"
              onChange={handleChange}
              type="date"
            />
            <span className="">День Рождения</span>
            <span className=""></span>
          </label>

          <label className="">
            <InputItem
              classes=""
              name="email"
              type="email"
              onChange={handleChange}
            />
            <span className="">E-mail</span>
            <span className=""></span>
          </label>

          <label className="">
            <InputItem
              classes=""
              name="password"
              onChange={handleChange}
              type="password"
            />
            <span className="">Пароль</span>
            <span className=""></span>
          </label>

          <label className="">
            <select name="sexSelect" id="sexSelect" onChange={handleSelectChange}>
              <option value="male">мужской</option>
              <option value="female">женский</option>
            </select>
            <span className="">Пол</span>
            <span className=""></span>
          </label>

          <Button
            classes=""
            title="Зарегистрироваться"
            type="submit"
          />
        </form>
      </div>
    </main>
  )
}

export default Register
