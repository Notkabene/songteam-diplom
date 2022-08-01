import songsReducer from './songs'
import usersReducer from './users'

const {
  combineReducers,
  configureStore
} = require('@reduxjs/toolkit')

const rootReducer = combineReducers({
  songs: songsReducer,
  users: usersReducer
})

export function createStore () {
  return configureStore({
    reducer: rootReducer
  })
}
