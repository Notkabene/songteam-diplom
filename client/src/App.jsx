import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import Main from './components/pages/main'
import Login from './components/pages/login'
import SongListPage from './components/pages/songListPage'
import UsersListPage from './components/pages/usersListPage'
import SundayProgramm from './components/pages/sundayProgramm'
import NotFound from './components/pages/notFound'
import SongPage from './components/pages/songPage'
import Header from './components/ui/header'
import Footer from './components/ui/footer'
import Register from './components/pages/register'
import AppLoader from './components/ui/hoc/appLoader'
import CreateSong from './components/pages/createSong'
import UserPage from './components/pages/userPage'
import EditUser from './components/pages/editUser'
import AccountPage from './components/pages/accountpage'
import EditSong from './components/pages/editSong'
import EditPassword from './components/pages/editPassword'
import { getIsLoggedIn, getCurrentUserData } from './store/users'

function App () {
  const isLoggedIn = useSelector(getIsLoggedIn())
  const authUser = useSelector(getCurrentUserData())
  const getRuleUser = () => {
    if (authUser) {
      return 'guest'
    } else if (authUser === 'admin') {
      return 'admin'
    } else if (authUser === 'editor') {
      return 'editor'
    } else {
      return 'user'
    }
  }

  return (
    <>
      <AppLoader>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/createsong"
              element={
                <CreateSong isLoggedIn={isLoggedIn} authUser={authUser} />
              }
            />
            <Route
              path="/editsong/:songId"
              element={<EditSong isLoggedIn={isLoggedIn} authUser={authUser} />}
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/songlist/:songId"
              element={
                <SongPage ruleUser={getRuleUser()} isLoggedIn={isLoggedIn} />
              }
            />
            <Route
              path="/songlist"
              exact
              element={
                <SongListPage
                  isLoggedIn={isLoggedIn}
                  ruleUser={getRuleUser()}
                />
              }
            />
            <Route
              path="/userslist"
              element={
                <UsersListPage isLoggedIn={isLoggedIn} authUser={authUser} />
              }
            />
            <Route
              path="/edituser/:userId"
              element={<EditUser isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/editpassword/:userId"
              element={<EditPassword isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/userslist/:userId"
              element={<UserPage isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/account/:userId"
              element={<AccountPage isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/sundayprogramm"
              element={
                <SundayProgramm isLoggedIn={isLoggedIn} authUser={authUser} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppLoader>
      <ToastContainer />
    </>
  )
}

export default App
