const express = require('express')
const router = express.Router()
const {createUser,login,postLogin} = require('../controllers/user')

router.get('/',createUser)
router.get('/login',login)
router.post('/login',postLogin)

module.exports = router

