import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getSongs } from '../../store/songs'
import { Link } from 'react-router-dom'
import PaginatedItems from '../ui/paginationSongs'
import InputItem from '../ui/inputItem'
import Button from '../ui/button'
import PropTypes from 'prop-types'
import Loader from '../ui/loader'

const SongListpage = ({ isLoggedIn, ruleUser }) => {
  const isRuleUser = ruleUser === 'user'
  const itemsPerPage = 5
  const [value, setValue] = useState('')
  const songsList = useSelector(getSongs())
  const [filteredSong, setfilteredSong] = useState([])
  const handleChange = (target) => {
    const data = target.value
    setValue(data)
  }

  useEffect(() => {
    setfilteredSong(
      songsList && songsList.filter((song) =>
        song.title.toLowerCase().includes(value.toLowerCase())
      )
    )
  }, [songsList])

  if (!songsList) return <Loader />

  return (<>
    {songsList && <main className="main">
      <div className="container song-list">
        <form className="form-search" action="/">
          <InputItem name="search" type="text" onChange={handleChange} />
          <Button title="Найти" classes="btn" type="button" />
        </form>
        {isLoggedIn && !isRuleUser && (
          <Link className="btn song-list__btn" to={'/createsong'}>
            Создать песню
          </Link>
        )}

        {filteredSong &&
          <PaginatedItems items={filteredSong} itemsPerPage={itemsPerPage} ruleUser={ruleUser}/>
        }
      </div>
    </main>}
    </>
  )
}

SongListpage.propTypes = {
  isLoggedIn: PropTypes.bool,
  ruleUser: PropTypes.string
}

export default SongListpage
