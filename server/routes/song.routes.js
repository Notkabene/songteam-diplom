const express = require('express')
const Song = require('../models/Song')
const router = express.Router({mergeParams: true})

router.get('/', async (req, res) => {
  try {
    const list = await Song.find()
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({message: "На сервере произошла ошибка. попробуйте позже"})
  }
})

router.patch('/:songId', async (req, res) => {
  try {
    const { songId } = req.params
    if (songId === req.body._id) {
      const updatedUser = await Song.findByIdAndUpdate(songId, req.body, {new: true})
      res.send(updatedUser)
    } else {
      res.status(401).json({message: 'Unauthorized'})
    }
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})

router.post('/:songId', async (req, res) => {
  try {
    const newSong = await Song.create(req.body)
    res.status(201).send(newSong)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})

module.exports = router