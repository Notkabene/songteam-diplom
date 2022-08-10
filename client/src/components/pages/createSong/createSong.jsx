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
    const dateNow = new Date().valueOf()
    dispatch(createSong({ ...data, songId: dateNow }))
  }
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  const handleSelectChange = ({ target }) => {
    const indexTarget = target.options.selectedIndex
    const TextTarget = target.options[indexTarget].value
    setData((prevState) => ({
      ...prevState,
      [target.name]: TextTarget
    }))
  }
  return (
    <main className="main create-song">
      <div className="container">
        <h1 className="create-song__title">Создание песни</h1>
        <form className="create-song__form form" onSubmit={handleSubmit}>
          <label className="create-song__label">
            <span className="create-song__span">Название</span>
            <InputItem
              classes="create-song__input"
              name="title"
              onChange={handleChange}
              type="text"
            />
          </label>

          <label className="create-song__label">
            <span className="create-song__span">Метроном</span>
            <InputItem
              classes="create-song__input"
              name="metronome"
              type="text"
              onChange={handleChange}
            />
          </label>

          <label className="create-song__label">
            <span className="create-song__span">Язык</span>
            <select
              // defaultValue='Выберите язык песни'
              className="create-song__select"
              name="language"
              id="languageSelect"
              onChange={handleSelectChange}
            >
              <option className="create-song__option" value="">Выберите язык песни</option>
              <option className="create-song__option" value="russian">Русский</option>
              <option className="create-song__option" value="english">Английский</option>
              <option className="create-song__option" value="korean">Корейский</option>
            </select>
          </label>

          <label className="create-song__label">
            <span className="create-song__span">ТЕКСТ</span>
            <InputItem
              classes="create-song__input"
              name="text"
              onChange={handleChange}
              type="text"
            />
          </label>

          <label className="create-song__label">
            <span className="create-song__span">Аккорды</span>
            <InputItem
              classes="create-song__input"
              name="chords"
              onChange={handleChange}
              type="text"
            />
          </label>

          <label className="create-song__label">
            <span className="create-song__span">Ссылка на видео Ютуб (iframe)</span>
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
