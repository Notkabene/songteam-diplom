import React from 'react'
import Search from '../ui/search/search'
import SongItem from '../ui/songItem/songItem'
import { useSelector } from 'react-redux'
import { getSongs } from '../../store/songs'
import { Link } from 'react-router-dom'

const SongListpage = () => {
  const songsList = useSelector(getSongs())

  return (
    <main className="main">
      <div className="container">
        <Search/>
        <Link className='' to={'/createsong'}>Создать песню</Link>
        <div>Сортировка</div>
        {songsList && <ul>
          {songsList.map((song) => (
            <SongItem key={song._id} song={song} />
          ))}
        </ul>}
      </div>
    </main>
  )
}

export default SongListpage
