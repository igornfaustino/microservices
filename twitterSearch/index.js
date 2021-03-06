const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const bodyParser = require('body-parser')
const config = require('./config')
const Twitter = require('twitter');

const app = express();


const client = new Twitter({
  consumer_key: config.TWITTER_CONSUMER_KEY,
  consumer_secret: config.TWITTER_CONSUMER_SECRET,
  access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET
});

// MW
app.use(logger("short"))
app.use(helmet());
app.use(express.json())
app.use(bodyParser.json())

app.get("/", (req, res) => {
	res.send("search api")
})

app.get("/search/", (req, res) => {
	const query = req.query.q
	client.get('search/tweets', {q: query}, function(_error, tweets, _response) {
		res.json(tweets)
	 });
})

app.listen(process.env.PORT, () => {
	console.log(`search API listen on port ${process.env.PORT}`)
})