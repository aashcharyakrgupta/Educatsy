
const Course = require('../models/Course.model')

const getCourse = async (req, res) => {
     try {
          const courses = await Course.find()
          res.status(200).json(courses) 
     } catch (error) {
          console.log(error)
          res.status(500).json({ error: 'Internal Server Error' })  
     }
}


const getCourseById = async (req, res) => {
     console.log(`Received request for course ID: ${req.params.id}`);
     try {
       const course = await Course.findById(req.params.id);
       if (!course) {
         console.log(`Course not found for ID: ${req.params.id}`);
         return res.status(404).json({ message: 'Course not found' });
       }
       console.log(`Found course:`, course);
       res.status(200).json(course);
     } catch (error) {
       console.error('Error in getCourseById:', error);
       if (error.name === 'CastError') {
         return res.status(400).json({ message: 'Invalid course ID format' });
       }
       res.status(500).json({ error: 'Internal Server Error', details: error.message });
     }
};
   


module.exports = { getCourse, getCourseById };

