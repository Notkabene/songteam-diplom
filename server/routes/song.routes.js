const express = require('express')
const Song = require('../models/Song')
const router = express.Router({
  mergeParams: true
})

router.get('/', async (req, res) => {
  try {
    const list = await Song.find()
    setTimeout(() => {
      res.status(200).send(list)
    }, 2000);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. попробуйте позже"
    })
  }
})

router.patch('/:songId', async (req, res) => {
  try {
    const {
      songId
    } = req.params
    const updatedSong = await Song.findByIdAndUpdate(songId, req.body, {
      new: true
    })
    res.send(updatedSong)
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

router.delete('/:songId', async (req, res) => {
  try {
    const { songId } = req.params
    const removedSong = await Song.findById(songId)
    removedSong.remove()
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})

module.exports = router