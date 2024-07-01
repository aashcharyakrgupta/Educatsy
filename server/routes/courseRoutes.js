const express = require('express')
const router = express.Router()
const { getCourse, getCourseById} = require('../controllers/courseController')


/**
 * @swagger
 * /api/:
 *  get:
 *   summary: Courses
 *   description: Get all the available courses
 *   responses:
 *    '200':
 *     description: Successful
 *    '500':
 *     description: Server Error
 */
router.get('/', getCourse)

/**
 * @swagger
 * /api/{id}:
 *  get:
 *   summary: Course
 *   responses:
 *    '200':
 *     description: Successful
 *    '400':
 *     description: Invalid course id format
 *    '404':
 *     description: Course not found
 *    '500':
 *     description: Server Error
 */
router.get('/:id', getCourseById);

module.exports = router

