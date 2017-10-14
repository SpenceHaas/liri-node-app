var Twitter = require('twitter');
var keys = require('./keys.js');
var client = new Twitter({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  access_token_key: keys.access_token_key,
  access_token_secret: keys.access_token_secret
});
 
var params = {screen_name: 'leroyyjenkkins'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
//     console.log(tweets);
	for (var i = 0; i<tweets.length; i++) {
		console.log(tweets[i].text);
	}
  }



});