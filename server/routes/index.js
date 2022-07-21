const express = require('express')
const router = express.Router({mergeParams: true})

router.use('/auth', require('./auth.routes'))
router.use('/song', require('./song.routes'))
router.use('/user', require('./user.routes'))

module.exports = router