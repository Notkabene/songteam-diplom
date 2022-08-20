import PropTypes from 'prop-types'
import React from 'react'
import convert from 'react-from-dom/lib'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateSong } from '../store/songs'
import { getIsLoggedIn } from '../store/users'

const SongItem = ({ song, ruleUser }) => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(getIsLoggedIn())
  const isRuleUser = ruleUser === 'user'
  const handleClick = () => {
    const newSong = { ...song, isConcert: !song.isConcert }
    dispatch(updateSong(newSong, song._id))
  }

  const getContent = (content) => {
    const changeContent = `<div class="song-item__text">${content}</div>`
    const newContent = (
      <div className="">
        {convert(changeContent)}
      </div>
    )
    return newContent
  }

  return (
    <>
      <li className="song-item">
        <div className="song-item__wrapper">
          <div className="song-item__top">
            <Link to={`/songlist/${song._id}`}>
              <h3 className="song-item__title">{song.title}</h3>
              {getContent(song.text)}
            </Link>
          </div>
          { <div className="song-item__info">
            {isLoggedIn && !isRuleUser && <svg
              onClick={handleClick}
              className="song-item__svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              {!song.isConcert
                ? <path
                d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
                : <path d="M467.4,212.4H42.9c-24.2,0-43.7,19.6-43.7,43.7s19.6,43.7,43.7,43.7h424.5c24.2,0,43.7-19.6,43.7-43.7S491.5,212.4,467.4,212.4z"/>
            }
            </svg>}
          </div>}
        </div>
      </li>
    </>
  )
}

SongItem.propTypes = {
  song: PropTypes.object,
  ruleUser: PropTypes.string
}

export default SongItem
