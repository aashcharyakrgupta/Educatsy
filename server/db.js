/* LMS database */

const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/Educatsy";
const connectDB = async () => {

  try {
    await mongoose.connect(mongoURI);
    console.log("Connection established with Database");
  }
  
  catch (error) {
    console.log(error);
    process.exit(0);
  }
  
};
module.exports = connectDB;
