import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getUsersList } from '../../store/users'
import Button from '../ui/button'
import InputItem from '../ui/inputItem'
import PaginatedItems from '../ui/paginationUsers'
import PropTypes from 'prop-types'
import Loader from '../ui/loader'

const UsersListPage = ({ isLoggedIn }) => {
  const users = useSelector(getUsersList())
  const itemsPerPage = 10
  const [value, setValue] = useState('')

  const handleChange = (target) => {
    const data = target.value
    setValue(data)
  }

  const filteredUsers = users && users.filter((user) => {
    return user.name.toLowerCase().includes(value.toLowerCase())
  })

  if (!users) return <Loader/>

  return (
    <main className="main">
      {!isLoggedIn
        ? <p className='not-access'>Авторизуйтесь для просмотра этой страницы</p>
        : <div className="container">
        <form className="form-search" action="/">
          <InputItem name="search" type="text" onChange={handleChange} />
          <Button title="Найти" classes="btn" type="button" />
        </form>
        {users
          ? (
              users && (
            <PaginatedItems items={filteredUsers} itemsPerPage={itemsPerPage} />
              )
            )
          : (
          <p>Авторизуйтесь для просмотра этой страницы</p>
            )}
      </div>
      }
    </main>
  )
}

UsersListPage.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default UsersListPage
