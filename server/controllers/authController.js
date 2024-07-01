/* Educatsy Controller */

const express = require('express')
const userModel = require('../models/User')
const bcrypt = require('bcrypt')

/*-------------
   | HOME |
-------------*/


const home = async (req, res) => {
     try {
          console.log(req.body);
          res.status(200).json({ message: req.body });
      
        }      
        catch (error) {
          console.log(error);
        }
      
}

/*-------------
   |Register |
-------------*/


const register = async (req, res) => {
     try {
          let { username, password, email, isAdmin } = req.body
          const userExist = await userModel.findOne({ email })
          
          /* Check for user existence from the database */
          if (userExist) {
               return res.status(200).json({message: "User already exist"})
          }


          /* FOR PASSWORD HASHING OR ENCYPRION FROM PLAIN TEXT TO STRING*/

          const hashSalt = bcrypt.genSalt(10)
          const hashPassword = bcrypt.compare(password, hashSalt)


      


     } catch (error) {
          
     }
}























/*-------------
   |lOGIN |
-------------*/