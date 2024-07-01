const mongoose = require('mongoose')
const UserContact = new mongoose.Schema({
     username: {
          type: String,
          required: true
     },
     email: {
          type: String,
          required: true
     },
     message: {
          type: String,
          required: true
     }

}, {
     timestamps: true
})


module.exports = new mongoose.model("Contact", UserContact)