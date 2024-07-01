const express = require('express')
const router = express.Router()
const contactForm = require('../controllers/contact.controller')

/**
 * @swagger
 * /api/contact:
 *  post:
 *   summary: Message
 *   requestBody:
 *    description: Any message the user wants to share
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        username:
 *         type: string
 *        email:
 *         type: string
 *        message:
 *         type: string
 *   responses:
 *    '200':
 *     description: Message send successfully
 */
router.post('/contact', contactForm)

module.exports = router