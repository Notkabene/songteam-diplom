import React from 'react'
import { songs } from '../../api/songs'
import Search from '../ui/search/search'
import SongItem from '../ui/songItem/songItem'

const SongListpage = () => {
  return (
    <main className="main">
      <div className="container">
        <Search/>
        <ul>
          {songs.map((song) => (
            <SongItem key={song.id} song={song} />
          ))}
        </ul>
      </div>
    </main>
  )
}

export default SongListpage
