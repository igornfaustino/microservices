# microservices
First experience with microservice architecture

# Config

Add a config file with your twitter key to all services folders

```
- twitterPost
  - config.js
- twitterRetweet
  - config.js
- twitterSearch
  - config.js
```

The config file should look like this:

```js
module.exports = {
  TWITTER_CONSUMER_KEY: "BLABLABLA",
  TWITTER_CONSUMER_SECRET: "BLABLABLA",
  TWITTER_ACCESS_TOKEN_KEY: "BLABLABLA",
  TWITTER_ACCESS_TOKEN_SECRET: "BLABLABLA"
};

```

# How to run

To run the aplication you need to install the [doker](https://www.docker.com/).
After that you just need to type the follow line on th root directory.

```bash
docker-compose up
```
