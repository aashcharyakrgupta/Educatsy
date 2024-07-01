/* LMS Server */

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const path = require("path");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const swaggerOptions={
  definition:{openapi:"3.0.0",
  info:{
    title:"Sample API with swagger",
    version:"1.0.0",
    description:"Swagger intigration with Node.js"
  },
  servers:[{
    url:`http://localhost:5000`
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
  origin: "http://localhost:3000",
  method: "GET POST PUT DELETE HEAD PATCH",
  credentials: true,
};
app.use(cors(corsOption));

/* MongoDB setup */
const mongoURI = "mongodb://127.0.0.1:27017/Educatsy";

try {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
      app.listen(5000, () => console.log("Server running on port 5000"));
    })
    .catch((err) => {
      console.error("Could not connect to MongoDB:", err)
      process.exit(1)
    });

} catch (err) {
  console.log("Error : " + err.message)
}

app.get("/", (req, res) => {
  res.send("Api is running.....");
});
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});
app.use("/api/user", userRoute); // /user/signup -----> signup is comming from the user controller
app.use("/api/form", contactRoute); 
app.use("/api/course", courseRoute)
app.use('*', (req, res) => {res.sendFile(path.join(__dirname, 'public', 'index.html'))});