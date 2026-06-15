const express = require("express");
const cors = require("cors");

const graphRoutes =
  require("./routes/graph.routes");

const app = express();
app.get('/', (req, res) => {
  res.send('Backend is running!');})


app.use(cors());

app.use(express.json());

app.use("/api", graphRoutes);

module.exports = app;