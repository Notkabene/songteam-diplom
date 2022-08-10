import React, { useState } from 'react'
import Button from '../ui/button/button'
import InputItem from '../ui/input/inputItem'
import { useDispatch } from 'react-redux'
import { signUp } from '../../store/users'
import localforage from 'localforage'

const Register = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    email: '',
    password: '',
    sex: '',
    image: '',
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

  const handleChangeFile = (target) => {
    const test = document.querySelector('#imageFile')
    const file = test.files[0]
    localforage.setItem('file', file)
    console.log(file)
    // setData((prevState) => ({
    //   ...prevState,
    //   [target.name]: target.value
    // }))
  }
  const handleSelectChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  return (
    <main className="main">
      <div className="container">
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

          <label className="create-song__label">
            <span className="create-song__span">Загрузите фото</span>
            <InputItem
              classes="create-song__input"
              name="file"
              id="imageFile"
              onChange={handleChangeFile}
              type="file"
            />
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
            <select
              name="sexSelect"
              id="sexSelect"
              onChange={handleSelectChange}
            >
              <option value="male">мужской</option>
              <option value="female">женский</option>
            </select>
            <span className="">Пол</span>
            <span className=""></span>
          </label>

          <Button classes="" title="Зарегистрироваться" type="submit" />
        </form>
      </div>
    </main>
  )
}

export default Register
