import mongoose from 'mongoose';
const LocalStrategy = require('passport-local').Strategy
var User = require('../models/user-schema');

module.exports = function(passport) {

    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, username, password, done) {
        User.findOne({username: username}, function(err, user) {
            console.log(user);
            if (err) return done(err);
            if (!user) return done(null, false);
            user.verifyPassword(password, (err, isMatch) => {
                if (err) { return done(err); }
                if (!isMatch) { return done(null, false, { error: 'Your login details could not be verified. Please try again.' }); }
        
                return done(null, user);
            });
        });
    }));
}
