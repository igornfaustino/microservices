const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const app = express();

// MW
app.use(logger("short"));
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("search api");
});

app.post("/auth", (req, res) => {
  const { username, password } = req.body;
  if (username == "sd2018" && password == "sd2018"){
	  res.json({auth: true})
  } else {
	  res.status(404).json({auth: false})
  }
});

app.listen(process.env.PORT, () => {
  console.log(`search API listen on port ${process.env.PORT}`);
});
