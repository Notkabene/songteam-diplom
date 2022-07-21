import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { songs } from '../../../api/songs'
import convert from 'react-from-dom'
import './songPage.css'

const SongPage = () => {
  const params = useParams()
  const { songId } = params
  const currentSong = songs.find((song) =>
    song.id === Number(songId) ? song : null
  )

  const getVideo = (videos) => {
    const newVideoList = videos.map((video, index) => {
      const newVideo = (
        <div className="song-page__video" key={index + 1}>
          {convert(video)}
        </div>
      )
      return newVideo
    })
    return newVideoList
  }

  return (
    <main className="main">
      <div className="container">
        <div className="song-page">
          <h3 className="song-page__title">{currentSong.title}</h3>
          <div className="song-page__text">{currentSong.text}</div>
          <div className="song-page__chords">{currentSong.chords}</div>
          {/* СДЕЛАТЬ стили для Нет видео */}
          <div className="song-page__list">
            {currentSong.linksVideo.length ? (
              getVideo(currentSong.linksVideo)
            ) : (
              <p className="song-page__without">Нет видео</p>
            )}
          </div>

          <div className="song-page__icons">
            <Link to={'/'}>
              <svg
                className="song-page__svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
              </svg>
            </Link>
            <a href={currentSong.download} download>
              <svg
                className="song-page__svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SongPage
