import React from 'react'
import { useSelector } from 'react-redux'
import { getSongs } from '../../store/songs'
import SongItem from '../ui/songItem/songItem'

const SundayProgramm = () => {
  const songsList = useSelector(getSongs())
  return (
    <main className="main">
      <div className="container">
        <h1>SundayProgramm</h1>
        {songsList && <ul>
          {songsList.map((song) => (
            song.isConcert && <SongItem key={song._id} song={song}/>
          ))}
        </ul>}
      </div>
    </main>
  )
}

export default SundayProgramm
