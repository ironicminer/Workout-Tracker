const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

require("./routes/apiroutes.js")(app);
require("./routes/htmlroutes.js")(app);
app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
