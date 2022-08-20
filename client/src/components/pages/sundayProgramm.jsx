import React from 'react'
import { useSelector } from 'react-redux'
import { getSongs } from '../../store/songs'
import SongItem from '../songItem'
import PropTypes from 'prop-types'
import Loader from '../ui/loader'

const SundayProgramm = ({ isLoggedIn, authUser }) => {
  const songsList = useSelector(getSongs())
  if (!songsList) return <Loader/>
  return (
    <main className="main sunday">
      {!isLoggedIn
        ? <p className='not-access'>Авторизуйтесь для просмотра этой страницы</p>
        : <div className="container">
            <h1 className='sunday__title'>Программма концерта</h1>
            {songsList && <ul>
              {songsList.map((song) => (
                song.isConcert && <SongItem key={song._id} song={song} authUser={authUser}/>
              ))}
            </ul>}
          </div>
      }
    </main>
  )
}

SundayProgramm.propTypes = {
  isLoggedIn: PropTypes.bool,
  authUser: PropTypes.object
}

export default SundayProgramm
