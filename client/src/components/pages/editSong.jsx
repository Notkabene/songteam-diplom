import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSongsbyId, updateSong } from '../../store/songs'
import InputItem from '../ui/inputItem'
import Button from '../ui/button'
import PropTypes from 'prop-types'

const EditSong = ({ isLoggedIn }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const editorRef = useRef()
  const params = useParams()
  const { songId } = params
  const currentSong = useSelector(getSongsbyId(songId))
  const videosList = currentSong.linksVideo

  const [data, setData] = useState({
    title: `${currentSong.title}`,
    metronome: `${currentSong.metronome}`,
    language: `${currentSong.language}`,
    linksVideo: `${currentSong.linksVideo}`
  })

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  function onContentClickHandler (id) {
    const newContent = window.tinymce.get(id).getContent()
    return newContent
  }

  const handleSelectChange = ({ target }) => {
    const indexTarget = target.options.selectedIndex
    const TextTarget = target.options[indexTarget].value
    setData((prevState) => ({
      ...prevState,
      [target.name]: TextTarget
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newContentChords = onContentClickHandler('chordsChange')
    const newContentText = onContentClickHandler('textChange')

    const newText = { text: newContentText }
    const newChords = { chords: newContentChords }
    const newData = { ...data, ...newText, ...newChords }

    dispatch(updateSong(newData, songId))
    navigate(`/songlist/${songId}`)
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
        <main className="main">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <label className="">
                <span className="">Название песни</span>
                <InputItem
                  classes=""
                  name="title"
                  defaultValue={currentSong.title}
                  onChange={handleChange}
                  type="text"
                />
                <span className=""></span>
              </label>
              <label className="">
                <span className="">Метроном</span>
                <InputItem
                  classes=""
                  name="metronome"
                  defaultValue={currentSong.metronome}
                  onChange={handleChange}
                  type="text"
                />
                <span className=""></span>
              </label>
              <label className="create-song__label">
                <span className="create-song__span">Язык</span>
                <select
                  defaultValue={currentSong.language}
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
                {/* <Editor
                  id="textChange"
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue={currentSong.text}
                /> */}
              </div>

              <h2>Аккорды</h2>
              <div>
                {/* <Editor
                  id="chordsChange"
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue={currentSong.chords}
                /> */}
              </div>

              <ul>
                {videosList.map((video) => (
                  <label key={video} className="">
                    <span className="">Видео</span>
                    <InputItem
                      classes=""
                      name="name"
                      value={video}
                      defaultValue={currentSong.video}
                      onChange={handleChange}
                      type="text"
                    />
                    <span className=""></span>
                  </label>
                ))}
              </ul>

              <Button classes="" title="Изменить песню" type="submit" />
            </form>
          </div>
        </main>
          )}
    </>
  )
}

EditSong.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default EditSong
