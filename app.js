const express = require("express");
const app = express();
const http = require("http").Server(app);
const path = require("path");
const db = require("./config/sequelize");
require("dotenv").config();

app.use(require("morgan")("dev"));
app.use(express.json());

app.use("/notes", require("./routes/notes"));
app.use(express.static(path.join(__dirname, "dist/mynote")));

db.sequelize
  .sync()
  .then(() => console.log("Notes DB and notes table have been created"))
  .catch((err) => console.log("Could not connect to MySql server"));

const PORT = process.env.PORT || 4000;
http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
