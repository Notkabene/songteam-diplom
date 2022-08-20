import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Button from '../ui/button'
import { Editor } from '@tinymce/tinymce-react'
import { createSong } from '../../store/songs'
import InputItem from '../ui/inputItem'
import PropTypes from 'prop-types'

const CreateSong = ({ isLoggedIn }) => {
  const navigate = useNavigate()
  const editorRef = useRef()
  const dispatch = useDispatch()
  const [data, setData] = useState({
    title: '',
    metronome: '',
    language: '',
    linksVideo: '',
    isFavorite: false,
    isConcert: false
  })
  function onContentClickHandler (id) {
    const newContent = window.tinymce.get(id).getContent()
    return newContent
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const dateNow = new Date().valueOf()
    const newContentChords = onContentClickHandler('chordsChange')
    const newContentText = onContentClickHandler('textChange')
    const newText = { text: newContentText }
    const newChords = { chords: newContentChords }
    const newData = { ...data, ...newText, ...newChords }
    dispatch(createSong({ ...newData, songId: dateNow }))
    navigate('/songlist')
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
    <>
      {!isLoggedIn
        ? <main className="main create-song">
          <p className="not-access">
            Авторизуйтесь для просмотра этой страницы
          </p>
        </main>
        : (
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
                  className="create-song__select"
                  name="language"
                  id="languageSelect"
                  onChange={handleSelectChange}
                >
                  <option className="create-song__option" value="">
                    Выберите язык песни
                  </option>
                  <option className="create-song__option" value="russian">
                    Русский
                  </option>
                  <option className="create-song__option" value="english">
                    Английский
                  </option>
                  <option className="create-song__option" value="korean">
                    Корейский
                  </option>
                </select>
              </label>

              <h2>Текст песни</h2>
              <div>
                <Editor
                  className="test"
                  id="textChange"
                  onInit={(evt, editor) => (editorRef.current = editor)}
                />
              </div>

              <h2>Аккорды</h2>
              <div>
                <Editor
                  id="chordsChange"
                  onInit={(evt, editor) => (editorRef.current = editor)}
                />
              </div>

              <label className="create-song__label">
                <span className="create-song__span">
                  Ссылка на видео Ютуб (iframe)
                </span>
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
          )}
    </>
  )
}
CreateSong.propTypes = {
  isLoggedIn: PropTypes.bool
}
export default CreateSong
