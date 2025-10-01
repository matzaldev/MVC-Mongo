const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')

router.get('/user',userController.getUsers)
router.post('/user',userController.create)
router.get('/user/:id',userController.details)

module.exports = router