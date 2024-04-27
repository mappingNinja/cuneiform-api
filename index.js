const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const connectDb = require("./db/connect");
const routes = require("./routes/article");

connectDb();
const app = express();

const port = 8086;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Local

app.get("/", (req, res) => {
  res.send("Welcome to Cuneiform");
});

app.use("/api", routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
