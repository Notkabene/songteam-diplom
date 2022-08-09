import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Main from './components/pages/main'
import Login from './components/pages/login'
import SongListPage from './components/pages/songListPage'
import UsersListPage from './components/pages/usersListPage'
import SundayProgramm from './components/pages/sundayProgramm'
import NotFound from './components/pages/notFound'
import SongPage from './components/pages/songPage'
import Header from './components/ui/header/header'
import Footer from './components/ui/footer/footer'
import Register from './components/pages/register'
import AppLoader from './components/ui/hoc/appLoader'
import CreateSong from './components/pages/createSong/createSong'
// import EditSong from './components/pages/editSong/editSong'

function App () {
  return (
    <>
      <AppLoader>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createsong" element={<CreateSong />} />
            {/* <Route path="/editsong/:songId" element={<EditSong/>} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/songlist/:songId" element={<SongPage />} />
            <Route path="/songlist" exact element={<SongListPage />} />
            <Route path="/userslist" element={<UsersListPage />} />
            <Route path="/sundayprogramm" element={<SundayProgramm />} />
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
