import {
  createSlice,
  createAction
} from '@reduxjs/toolkit'
import songsService from '../services/songs.services'

const songsSlice = createSlice({
  name: 'songs',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    songsRequested: (state) => {
      state.isLoading = true
    },
    songsReceved: (state, action) => {
      state.entities = action.payload
      state.lastFetch = Date.now()
      state.isLoading = false
    },
    songsRequestFiled: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    songCreated: (state, action) => {
      state.entities.push(action.payload)
    },
    songUpdateSuccessed: (state, action) => {
      state.entities[
        state.entities.findIndex((u) => u.id === action.payload.id)
      ] = action.payload
    },
    songRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (c) => c._id !== action.payload
      )
    }
  }
})

const {
  reducer: songsReducer,
  actions
} = songsSlice
const {
  songsRequested,
  songsReceved,
  songsRequestFiled,
  songUpdateSuccessed,
  songCreated,
  songRemoved
} =
actions

const addSongRequested = createAction('songs/addSongRequested')
const removeSongRequested = createAction('songs/removeSongRequested')
const songUpdateFailed = createAction('songs/songUpdateFailed')
const songUpdateRequested = createAction('songs/songUpdateRequested')

export const loadSongsList = () => async (dispatch, getState) => {
  dispatch(songsRequested())
  try {
    const {
      content
    } = await songsService.get()
    dispatch(songsReceved(content))
  } catch (error) {
    dispatch(songsRequestFiled(error.message))
  }
}

export const updateSong = (payload) => async (dispatch) => {
  dispatch(songUpdateRequested())
  try {
    const {
      content
    } = await songsService.update(payload)
    dispatch(songUpdateSuccessed(content))
  } catch (error) {
    dispatch(songUpdateFailed(error.message))
  }
}

export const createSong = (payload) => async (dispatch, getState) => {
  console.log('store', payload)
  dispatch(addSongRequested())
  try {
    const {
      content
    } = await songsService.createSong(payload)
    dispatch(songCreated(content))
  } catch (error) {
    dispatch(songsRequestFiled(error.message))
  }
}
export const removeSong = (songId) => async (dispatch) => {
  dispatch(removeSongRequested())
  try {
    const {
      content
    } = await songsService.removeSong(songId)
    if (!content) {
      dispatch(songRemoved(songId))
    }
  } catch (error) {
    dispatch(songsRequestFiled(error.message))
  }
}

export const getSongs = () => (state) => state.songs.entities
export const getSongsLoadingStatus = () => (state) =>
  state.songs.isLoading
export const getSongsbyId = (id) => (state) => {
  if (state.songs.entities) {
    return state.songs.entities.find((s) => s._id === id)
  }
}
export default songsReducer
