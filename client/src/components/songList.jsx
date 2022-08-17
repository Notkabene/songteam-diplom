import React from 'react'
import SongItem from './songItem/songItem'

const SongList = ({ songs }) => {
  return (
    <>
    { songs
      ? 'loading'
      : <ul className='song-list'>
      {songs.map((song) => (
        <SongItem key={song.id} song={song}/>
      ))}
    </ul>}
    </>
  )
}

SongList.propTypes = {
  songs: SongList.array
}

export default SongList
