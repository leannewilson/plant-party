const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const URI = process.env.MONGODB_URI || "mongodb://localhost/plantparty";
console.log(URI);
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) => console.log(`Connected to ${x.connections[0].name}`))
  .catch(() => console.error("Error connecting to Mongo"));

app.use(express.json());

app.use(cors());

// app.use(
//   cors({
//     origin: ["http://localhost:3000", process.env.clientURL], //Add client urls to allow CORS
//   })
// );

app.use("/api", require("./routes.js"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
