import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import convert from 'react-from-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getSongsbyId, removeSong } from '../../store/songs'
import InputItem from '../ui/inputItem'
import PropTypes from 'prop-types'
import Loader from '../ui/loader'

const SongPage = ({ isLoggedIn, ruleUser }) => {
  const params = useParams()
  const { songId } = params
  const currentSong = useSelector(getSongsbyId(songId))
  const [isConcert] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const handlePopupClick = () => {
    setIsOpen(!isOpen)
  }

  const isRuleUser = ruleUser === 'user'

  const handleDeleteSong = () => {
    dispatch(removeSong(currentSong._id))
    setIsOpen(!isOpen)
    location.href = '/songlist'
  }

  const getVideo = (videos) => {
    const newVideoList = videos.map((video, index) => {
      const newVideo = (
        <div className="" key={index + 1}>
          {convert(video)}
        </div>
      )
      return newVideo
    })
    return newVideoList
  }

  const getContent = (content) => {
    const changeContent = `<div>${content}</div>`
    const newContent = <div className="song-page__consert-content">{convert(changeContent)}</div>
    return newContent
  }
  if (!currentSong) return <Loader />
  return (
    <main className="main">
      <div className="container">
      <div className="song-page">
      {isLoggedIn && !isRuleUser && (
          <div className="song-page__icons">
            <svg
              onClick={handlePopupClick}
              className="song-page__svg"
              xmlns="http://www.w3.org/2000/svg"
              // viewBox="0 0 64 64"
            >
              <path d="M2.556 7.338a1.5 1.5 0 0 0 1.5 1.5h.8v17.725A4.942 4.942 0 0 0 9.792 31.5h12.416a4.942 4.942 0 0 0 4.936-4.937V8.838h.8a1.5 1.5 0 0 0 0-3h-5.25V4.29c0-2.09-1.7-3.791-3.79-3.791h-5.808c-2.09 0-3.79 1.7-3.79 3.791v1.547h-5.25a1.5 1.5 0 0 0-1.5 1.5zm9.75-3.047c0-.437.354-.791.79-.791h5.808c.436 0 .79.354.79.791v1.547h-7.389V4.29zm-4.45 4.547h16.288v17.725a1.939 1.939 0 0 1-1.936 1.937H9.792a1.939 1.939 0 0 1-1.936-1.937V8.838z" />
              <path d="M12.272 25.737a1.5 1.5 0 0 0 1.5-1.5V13.101a1.5 1.5 0 0 0-3 0v11.136a1.5 1.5 0 0 0 1.5 1.5zm7.456 0a1.5 1.5 0 0 0 1.5-1.5V13.101a1.5 1.5 0 0 0-3 0v11.136a1.5 1.5 0 0 0 1.5 1.5z" />
            </svg>
            <Link to={`/editsong/${songId}`}>
              <svg
                id="Layer_1"
                version="1.1"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                className="song-page__svg"
              >
                <g>
                  <path d="M55.736,13.636l-4.368-4.362c-0.451-0.451-1.044-0.677-1.636-0.677c-0.592,0-1.184,0.225-1.635,0.676l-3.494,3.484   l7.639,7.626l3.494-3.483C56.639,15.998,56.639,14.535,55.736,13.636z" />
                  <polygon points="21.922,35.396 29.562,43.023 50.607,22.017 42.967,14.39  " />
                  <polygon points="20.273,37.028 18.642,46.28 27.913,44.654  " />
                  <path d="M41.393,50.403H12.587V21.597h20.329l5.01-5H10.82c-1.779,0-3.234,1.455-3.234,3.234v32.339   c0,1.779,1.455,3.234,3.234,3.234h32.339c1.779,0,3.234-1.455,3.234-3.234V29.049l-5,4.991V50.403z" />
                </g>
              </svg>
            </Link>
          </div>
      )}
        <div className="song-page__inner">

        <div className="song-page__metronome">
            <span className="song-page__metronome-title">Метроном: </span>
            {isConcert ? <span>{currentSong.metronome}</span> : <InputItem />}
        </div>

        <h3 className="song-page__title">{currentSong.title}</h3>
          <div className="song-page__text song-page__item">
            <span className='song-page__subtitle'>Текст песни:</span>
            {getContent(currentSong.text)}
          </div>

          <div className="song-page__chords song-page__item">
            <span className='song-page__subtitle'>Аккорды:</span>
            {getContent(currentSong.chords)}
          </div>

          <div className="song-page__video">
            <span className='song-page__subtitle'>Видео:</span>
            {currentSong.linksVideo.length
              ? getVideo(currentSong.linksVideo)
              : (
              <p className="song-page__no-video">Нет видео</p>
                )}
          </div>
        </div>

        </div>
        {isOpen && (
          <div className="popup">
            <div className="popup__content">
              <p className="popup__text">
                Вы уверены, что хотите удалить песню:{' '}
                <span className="popup__name">{currentSong.title}?</span>
              </p>
              <button className="btn" type="button" onClick={handleDeleteSong}>
                Никаких сомнений
              </button>
              <button
                className="popup__delete"
                type="button"
                onClick={handlePopupClick}
              >
                Х
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

SongPage.propTypes = {
  isLoggedIn: PropTypes.bool,
  ruleUser: PropTypes.string
}

export default SongPage
