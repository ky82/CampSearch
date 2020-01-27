const db = require("./db/models")
const express = require("express");
const path = require("path")
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Define API routes

app.use("/", routes)

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app,get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  })
}

// Starts the server to begin listening and sync sequelize models
// =============================================================
db.sequelize.sync().then(() => {
  app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
  });
})