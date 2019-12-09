require('dotenv').config()
var passport = require("passport");
// var newTwitter require("");
var keys = require("../../keys");

// Twitter strategy used by passport
var TwitterStrategy = require("passport-twitter").Strategy;
module.exports = function() {
  passport.use(
    new TwitterStrategy(
      {
        consumerKey: keys.twitterStrategy.TWITTER_KEY,
        consumerSecret: keys.twitterStrategy.TWITTER_SECRET,
        TwitterCallBackURL: keys.twitterStrategy.TWITTER_CB,
        passReqToCallback: true
      },
      function(req, token, tokenSecret, profile, done) {
        var user = {};

        // twitter does not allow you to have email if it exits
        // user.email = profile.emails[0].value;
        user.image = profile._json.image.url;
        user.displayName = profile.displayName;

        user.twitter = {};
        user.twitter.id = profile.id;
        user.twitter.token = accessToken;

        console.log(profile);
        done(null, user);
      }
    )
  );
};
