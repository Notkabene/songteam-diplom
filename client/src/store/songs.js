import {
  createSlice
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
  songsRequestFiled
} =
actions

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
export const getSongs = () => (state) => state.songs.entities
export const getSongsLoadingStatus = () => (state) =>
  state.songs.isLoading
export const getSongsbyId = (id) => (state) => {
  if (state.songs.entities) {
    return state.songs.entities.find((s) => s._id === id)
  }
}
export default songsReducer
