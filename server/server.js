/* LMS Server */

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
dotenv.config();

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
/* ROUTES */

const userRoute = require("./routes/userRoutes"); // importing signup from the userRoute
const contactRoute = require('./routes/Contact.router')
const courseRoute = require('./routes/courseRoutes');
const { title } = require("process");
const { version } = require("os");

const corsOption = {
  origin: ['https://educatsy-virid.vercel.app', 'http://localhost:3000'],
  method: ["GET POST PUT DELETE HEAD PATCH"],
  credentials: true,
};
app.use(cors(corsOption));

mongoose
    .connect(process.env.MONGO_URL, {})
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))
    
app.listen(PORT, () => {
  console.log(`Server started at port no. ${PORT}`)
})

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});


app.get("/", (req, res) => {
  res.send("Api is running.....");
});


app.use("/api/user", userRoute); // /user/signup -----> signup is comming from the user controller
app.use("/api/form", contactRoute); 
app.use("/api/course", courseRoute);

