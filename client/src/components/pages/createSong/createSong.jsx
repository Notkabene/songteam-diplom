import React, { useState } from 'react'
import InputItem from '../../ui/input/inputItem'
import './createSong.css'
import { useDispatch } from 'react-redux'
import { createSong } from '../../../store/songs'
import Button from '../../ui/button/button'
// import MyEditor from './myEditor'

const CreateSong = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    title: '',
    metronome: '',
    language: '',
    chords: '',
    linksVideo: '',
    text: '',
    isFavorite: false,
    isConcert: false
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    dispatch(createSong(data))
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
    <main className="main create-song">
      <div className="container">
        <h1 className="create-song__title">Создание песни</h1>
        <form className="create-song__form form" onSubmit={handleSubmit}>
          <label className="">
            <span className="">Название</span>
            <InputItem
              classes="create-song__input"
              name="title"
              onChange={handleChange}
              type="text"
            />
          </label>

          <label className="create-song__label">
            <span className="">Метроном</span>
            <InputItem
              classes="create-song__input"
              name="metronome"
              type="text"
              onChange={handleChange}
            />
          </label>

          <label className="create-song__label">
            <span className="">Язык</span>
            <select
              name="language"
              id="languageSelect"
              onChange={handleSelectChange}
            >
              <option value="russian">Русский</option>
              <option value="english">Английский</option>
              <option value="korean">Корейский</option>
            </select>
          </label>

          <label className="create-song__label">
            <span className="">ТЕКСТ</span>
            <InputItem
              classes="create-song__input"
              name="text"
              onChange={handleChange}
              type="text"
            />
          </label>

          <label className="create-song__label">
            <span className="">Аккорды</span>
            <InputItem
              classes="create-song__input"
              name="chords"
              onChange={handleChange}
              type="text"
            />
          </label>

          <label className="create-song__label">
            <span className="">Ссылка на видео Ютуб (iframe)</span>
            <InputItem
              classes="create-song__input"
              name="linksVideo"
              onChange={handleChange}
              type="text"
            />
          </label>

          <Button classes="" title="Создать песню" type="submit" />
        </form>
      </div>
    </main>
  )
}

export default CreateSong
