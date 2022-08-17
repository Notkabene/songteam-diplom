import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
  getIsLoggedIn,
  getUsersLoadingStatus,
  loadUsersList
} from '../../../store/users'
import { loadSongsList } from '../../../store/songs'
import Loader from '../loader'

const AppLoader = ({ children }) => {
  const dispatch = useDispatch()
  const usersStatusLoading = useSelector(getUsersLoadingStatus())
  const isLoggedIn = useSelector(getIsLoggedIn())
  useEffect(() => {
    dispatch(loadSongsList())
    if (isLoggedIn) {
      dispatch(loadUsersList())
    }
  }, [isLoggedIn])

  return usersStatusLoading ? <Loader /> : children
}

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default AppLoader
