var express = require('express');
var router = express.Router();
var passport = require('passport')
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

passport.use(new LinkedInStrategy({
  clientID: '',
  clientSecret: '',
  callbackURL: "http://localhost:3000/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_basicprofile'],
}, function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  process.nextTick(function () {
    // To keep the example simple, the user's LinkedIn profile is returned to
    // represent the logged-in user. In a typical application, you would want
    // to associate the LinkedIn account with a user record in your database,
    // and return that user instead.
    return done(null, profile);
  });
}));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
