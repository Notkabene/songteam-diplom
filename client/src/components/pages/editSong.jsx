import React from 'react'

import { useParams } from 'react-router-dom'
// import convert from 'react-from-dom'

import { useSelector } from 'react-redux'
import { getSongsbyId } from '../../store/songs'
import MyEditor from './myEditor'

const EditSong = () => {
  const params = useParams()
  const { songId } = params
  const currentSong = useSelector(getSongsbyId(songId))

  return (
    <main className=''>
      <div className="">
        <h1>editSong</h1>
        <h2>Текст песни</h2>
        <MyEditor text={currentSong.text}/>
        <h2>Аккорды</h2>
        <MyEditor text={currentSong.chords}/>
      </div>
    </main>
  )
}

export default EditSong
