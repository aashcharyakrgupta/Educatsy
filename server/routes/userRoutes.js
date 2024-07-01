const express = require('express');
const {signup, login} = require('../controllers/userController')
const router = express.Router();



/**
 * @swagger
 * /api/signup:
 *  post:
 *   summary: Signup
 *   requestBody:
 *    description: Signup as new user
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
 *        password:
 *         type: string
 *   responses:
 *    '200':
 *     description: Created user successfully
 *    '400':
 *     description: User already exists
 *    '500':
 *     description: Error
 */

router.post("/signup", signup);

/**
 * @swagger
 * /api/login:
 *  post:
 *   summary: Login
 *   requestBody:
 *    description: Login as existing user
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        email:
 *         type: string
 *        password:
 *         type: string
 *   responses:
 *    '200':
 *     description: Login successfully
 *    '400':
 *     description: Invalid credentials
 *    '500':
 *     description: Error
 */
router.post("/login", login);


module.exports = router
