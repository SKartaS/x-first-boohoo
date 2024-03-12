const Twitter = require("xauth-login"),
	TwitterApi = require("twt-api");

const CONSUMER_KEY = "0K8zhOjYljum3j9DAJm85l",
	CONSUMER_SECRET = "3dulnnyRpH9FunY3V2mdC3JdpfbxYZbd6WY4fCJbXmbO2SJ";

const main = async (username, password) => {
	const { oauth_token, oauth_token_secret } = await Twitter.xauthLogin({
		CONSUMER_KEY,
		CONSUMER_SECRET,
		username,
		password,
	});

	const client = new TwitterApi({
		CONSUMER_KEY,
		CONSUMER_SECRET,
		oauth_token,
		oauth_token_secret,
	});

	const me = await client.getMyInfo();
	return me;
};

module.exports = main;
