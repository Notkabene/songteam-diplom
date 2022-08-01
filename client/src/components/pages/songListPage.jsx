import React from 'react'
import Search from '../ui/search/search'
import SongItem from '../ui/songItem/songItem'
import { useSelector } from 'react-redux'
import { getSongs } from '../../store/songs'

const SongListpage = () => {
  const songsList = useSelector(getSongs())

  return (
    <main className="main">
      <div className="container">
        <Search/>
        <ul>
          {songsList.map((song) => (
            <SongItem key={song._id} song={song} />
          ))}
        </ul>
      </div>
    </main>
  )
}

export default SongListpage
