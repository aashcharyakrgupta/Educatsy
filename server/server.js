const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const userRoute = require("./routes/userRoutes"); 
const contactRoute = require('./routes/Contact.router');
const courseRoute = require('./routes/courseRoutes');

const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(bodyParser.json({extended: true }))
app.use(bodyParser.urlencoded({extended: true }))
app.use(express.json())


const swaggerOptions={
  definition:{openapi:"3.0.0",
  info:{
    title:"Sample API with swagger",
    version:"1.0.0",
    description:"Swagger intigration with Node.js"
  },
  servers:[{
    url:`https://educatsy.onrender.com/`
  }]},
  apis:["./routes/*.js"]
};
const swaggerspec= swaggerJSDoc(swaggerOptions);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerspec));

const corsOption = {
  origin: ['*'],
  method: ["GET POST PUT DELETE HEAD PATCH"],
  credentials: true,
};
app.use(cors(corsOption));

mongoose
    .connect(process.env.MONGO_URL, {})
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))
    
app.get('/',(req,res)=>{
  res.send(`API is running...`)
});

app.use("/api/user", userRoute); 
app.use("/api/form", contactRoute); 
app.use("/api/course", courseRoute);

app.listen(PORT, () => {
  console.log(`Server started at port no. ${PORT}`)
})