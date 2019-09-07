var router = require('express').Router()
var controller = require('./user.controller.js')
const verify = require('../../auth/auth.service')

//Create a user
router.post('/',controller.create)

//dummyRoute
router.get('/check', verify, controller.check)

module.exports = router