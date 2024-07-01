
/* Contact */
const { response } = require('express');
const contact = require('../models/Contact.model')
const contactForm = async (req, res) => {

     try {
          console.log(req.body);
          await contact.create(req.body)
          return res.status(200).json({ message: "message send successfully" });
     } catch (error) {
          console.log(error);
     }
}

module.exports = contactForm