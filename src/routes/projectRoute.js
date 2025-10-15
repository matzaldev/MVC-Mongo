const express = require ('express')
const router = express.Router()

const projectCpntroller = require('../controller/projectController')

router.get('/project',projectCpntroller.getProject)
router.post('/project',projectCpntroller.create)
router.get('/project/:id',projectCpntroller.details)

modeule.exports = router