const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
