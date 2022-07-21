import React from 'react'
import SongItem from '../songItem/songItem'
import './songList.css'

const SongList = ({ songs }) => {
  console.log(songs)
  return (
    <ul>
      {songs.map((song) => (
        <SongItem key={song.id} song={song}/>
      ))}
    </ul>
  )
}

SongList.propTypes = {
  songs: SongList.array
}

export default SongList
