const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongodb+srv://kspoth08:<Scooter#1>@cluster0.lmx5w.mongodb.net/workout?retryWrites=true&w=majority
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://kspoth08:Scooter%231@cluster0.lmx5w.mongodb.net/Workout?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
