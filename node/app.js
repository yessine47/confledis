const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

var app = express();
app.use(cors());

// Server configuration
app.use(express.json());
app.listen(5000, () => console.log("Server Started !"));

mongoose.connect("mongodb+srv://yessine:9da9ONGGA1bGI4j0@products.twz9a.mongodb.net/product?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

//DB Status on init
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database !"));


productsRouter = require("./routes/products")(app);

module.exports = app;
