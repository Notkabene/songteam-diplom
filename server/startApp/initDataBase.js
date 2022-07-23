const Song = require('../models/Song')
const PositionTeam = require('../models/PositionTeam')
const songsMock = require('../mock/songs.json')
const positionTeamMock = require('../mock/positionTeam.json')


module.exports = async () => {
  const songs = await Song.find()
  if (songs.length !== songsMock.length) {
    await createInitialEntity(Song, songsMock)
  }

  const positions = await PositionTeam.find()
  if (positions.length !== positionTeamMock.length) {
    await createInitialEntity(PositionTeam, positionTeamMock)
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