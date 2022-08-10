import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import convert from 'react-from-dom'
import { useSelector } from 'react-redux'
import { getSongsbyId } from '../../store/songs'
import PopupEditor from '../ui/popupEditor/popupEditor'
import InputItem from '../ui/input/inputItem'

const SongPage = () => {
  const params = useParams()
  const { songId } = params
  const currentSong = useSelector(getSongsbyId(songId))
  const [isTest] = useState(true)

  useEffect(() => {
    console.log(isTest)
  }, [])

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
  const handleClick = (currentSong) => {
    // При клике делать popup видимым
  }

  return (
    <main className="main">
      <div className="container">
        <div className="">
          <h3 className="">{currentSong.title}</h3>
          <div className="">
            <span>Метроном:</span>
            {isTest
              ? <span>{currentSong.metronome}</span>
              : <InputItem />}
            <button onClick={() => handleClick(currentSong)}>
              <svg
                height="64px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 64 64"
                width="64px"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <g>
                  <path d="M55.736,13.636l-4.368-4.362c-0.451-0.451-1.044-0.677-1.636-0.677c-0.592,0-1.184,0.225-1.635,0.676l-3.494,3.484   l7.639,7.626l3.494-3.483C56.639,15.998,56.639,14.535,55.736,13.636z" />
                  <polygon points="21.922,35.396 29.562,43.023 50.607,22.017 42.967,14.39  " />
                  <polygon points="20.273,37.028 18.642,46.28 27.913,44.654  " />
                  <path d="M41.393,50.403H12.587V21.597h20.329l5.01-5H10.82c-1.779,0-3.234,1.455-3.234,3.234v32.339   c0,1.779,1.455,3.234,3.234,3.234h32.339c1.779,0,3.234-1.455,3.234-3.234V29.049l-5,4.991V50.403z" />
                </g>
              </svg>
            </button>
          </div>
          <div className="">
            {currentSong.text}
            <button onClick={handleClick}>
              <svg
                height="64px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 64 64"
                width="64px"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <g>
                  <path d="M55.736,13.636l-4.368-4.362c-0.451-0.451-1.044-0.677-1.636-0.677c-0.592,0-1.184,0.225-1.635,0.676l-3.494,3.484   l7.639,7.626l3.494-3.483C56.639,15.998,56.639,14.535,55.736,13.636z" />
                  <polygon points="21.922,35.396 29.562,43.023 50.607,22.017 42.967,14.39  " />
                  <polygon points="20.273,37.028 18.642,46.28 27.913,44.654  " />
                  <path d="M41.393,50.403H12.587V21.597h20.329l5.01-5H10.82c-1.779,0-3.234,1.455-3.234,3.234v32.339   c0,1.779,1.455,3.234,3.234,3.234h32.339c1.779,0,3.234-1.455,3.234-3.234V29.049l-5,4.991V50.403z" />
                </g>
              </svg>
            </button>
            <PopupEditor text={currentSong.text} />
          </div>
          <div className="">{currentSong.chords}</div>
          <div className="">
            {currentSong.linksVideo.length
              ? (getVideo(currentSong.linksVideo))
              : (<p className="">Нет видео</p>)}
          </div>

          <div className="">
            <Link to={`/editsong/${songId}`}>
              <svg
                height="64px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 64 64"
                width="64px"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <g>
                  <path d="M55.736,13.636l-4.368-4.362c-0.451-0.451-1.044-0.677-1.636-0.677c-0.592,0-1.184,0.225-1.635,0.676l-3.494,3.484   l7.639,7.626l3.494-3.483C56.639,15.998,56.639,14.535,55.736,13.636z" />
                  <polygon points="21.922,35.396 29.562,43.023 50.607,22.017 42.967,14.39  " />
                  <polygon points="20.273,37.028 18.642,46.28 27.913,44.654  " />
                  <path d="M41.393,50.403H12.587V21.597h20.329l5.01-5H10.82c-1.779,0-3.234,1.455-3.234,3.234v32.339   c0,1.779,1.455,3.234,3.234,3.234h32.339c1.779,0,3.234-1.455,3.234-3.234V29.049l-5,4.991V50.403z" />
                </g>
              </svg>
            </Link>
            <Link to={'/'}>
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
              </svg>
            </Link>
            <a href={currentSong.download} download>
              <svg
                className=""
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
