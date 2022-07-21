const Song = require('../models/Song')
const User = require('../models/User')
const songsMock = require('../mock/songs.json')
const usersMock = require('../mock/users.json')


module.exports = async () => {
  const songs = await Song.find()
  if (songs.length !== songsMock.length) {
    await createInitialEntity(Song, songsMock)
  }
  const users = await User.find()
  if (users.length !== usersMock.length) {
    await createInitialEntity(User, usersMock)
  }
}

async function createInitialEntity(Model, data) {
  await Model.collection.drop()
  return Promise.all(
      data.map(async item => {
        try {
          delete item.id
          const newItem = new Model(item)
          await newItem.save()
          return newItem
        } catch (e) {
          return e
        }
      })
  )
}