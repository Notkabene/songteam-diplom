const Song = require('../models/Song')
const songsMock = require('../mock/songs.json')


module.exports = async () => {
  const songs = await Song.find()
  if (songs.length !== songsMock.length) {
    await createInitialEntity(Song, songsMock)
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