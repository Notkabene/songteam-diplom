import React from 'react'
import { useSelector } from 'react-redux'
import { getUsersList } from '../../store/users'
import UserItem from '../ui/userItem/userItem'

const UsersListPage = () => {
  const users = useSelector(getUsersList())

  return (
    <main className="">
      <div className="">
        <h1>UsersListPage</h1>
        <div>Сортировка</div>
        {users
          ? (users.map((user) => <UserItem key={user._id} user={user} />))
          : (<p>У вас не прав для просмотра пользователей</p>)}
      </div>
    </main>
  )
}

export default UsersListPage
