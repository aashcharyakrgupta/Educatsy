const express = require('express')
const app = express()
const router = express.Router()

const { home, register, login, contact } = require('../controllers/authController')


router.express('/home').post(home)
router.express('/register').post(register)
router.express('/login').post(login)