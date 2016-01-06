var express = require('express');
var router = express.Router();
var passport = require('passport')
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
require('dotenv').load()

passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: process.env.HOST + "/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_basicprofile']
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, {id: profile.id, displayName: profile.displayName, token: accessToken})
  }
));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
