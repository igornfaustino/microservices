const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const httpProxy = require("express-http-proxy");
const bodyParser = require('body-parser')

const app = express();

const searchServiceProxy = httpProxy("http://twittersearch:3001");
const postServiceProxy = httpProxy("http://twitterpost:3002");
const retweetServiceProxy = httpProxy("http://twitterretweet:3003");
const authServiceProxy = httpProxy("http://auth:3004");

// MW
app.use(logger("short"))
app.use(helmet());
app.use(express.json())
app.use(bodyParser.json())

app.get("/", (req, res) => {
	res.send("api gateway")
})

app.get("/search/", (req, res, next) => {
	searchServiceProxy(req, res, next);
})

app.post("/post/", (req, res, next) => {
	postServiceProxy(req, res, next);
})

app.post("/retweet/:id", (req, res, next) => {
	retweetServiceProxy(req, res, next);
})

app.post("/auth", (req, res, next) => {
	authServiceProxy(req, res, next);
})

app.listen(process.env.PORT, () => {
	console.log(`gateway listen on port ${process.env.PORT}`)
})