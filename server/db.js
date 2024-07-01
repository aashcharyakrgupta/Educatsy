/* LMS database */

const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://aashcharyakumargupta:aeiou0aeiou@cluster.v4veomf.mongodb.net/";
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
