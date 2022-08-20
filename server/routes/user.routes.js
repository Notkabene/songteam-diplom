const express = require('express')
const User = require('../models/User')
const router = express.Router({mergeParams: true})
const auth = require('../middleware/auth.middleware')

router.patch('/:userId', auth, async (req, res) => {
  try {
    const {userId} = req.params

    if (userId === req.user.id) {
      if(req.body._id) {
        const updatedUser = await User.findByIdAndUpdate(req.body._id, req.body, {new: true})
        res.send(updatedUser)
      } else {
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, {new: true})
        res.send(updatedUser)
      }
    } else {
      res.status(401).json({message: 'Unauthorized'})
    }

  } catch (e) {
    res.status(500).json({message: "На сервере произошла ошибка. Попробуйте позже"})
  }
})

router.get('/', auth, async (req, res) => {
  try {
    const list = await User.find()
    setTimeout(() => {
      res.status(200).send(list)
    }, 2000);
  } catch (e) {
    res.status(500).json({message: "На сервере произошла ошибка. попробуйте позже"})
  }
})


module.exports = router