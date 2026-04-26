const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const userRoutes = require("./routes/user");
const User = require("./models/User");
const workoutRoutes = require("./routes/workout");
const progressRoutes = require("./routes/progress");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

//user
app.use("/user", userRoutes);

//workout
app.use("/workout", workoutRoutes);


//progress
app.use("/progress", progressRoutes);


app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
