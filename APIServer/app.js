/*const data=require("./data");

const sharemessagedata=data.sharemessage;
const dbConnection = require("./config/mongoConnection");*/

const express = require("express");
const bodyParser = require("body-parser");
let app = express();
let configRoutes = require("./routes");

const cookieParser = require("cookie-parser");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");
const Strategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt-nodejs");

app.use(bodyParser.json());
app.use(flash());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());


const bcrypt = require("bcrypt-nodejs");
const LocalStrategy = require('passport-local').Strategy;
const users = require("./data/users");

module.exports = function(passport){
// for persistent login
passport.serializeUser(function(user, done) {
    done(null, user._id);
});
passport.deserializeUser(function(id, done) {
    users.getUserByIDPassport(id, function(err, user) {
        done(err, user);
    });
});
let validPassword = function(user, password){
    return bcrypt.compareSync(password, user.saltedPassword);
}
//user() for stragtegies and configration
passport.use('login', new Strategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},
    function(req, email, password, done){
        //email = decodeURIComponent(email)
        users().getUserByEmailPassport(email, function(err, user){
            if(err){
                console.log("error");
                return done(err);
            }
            //user not exist
            if(!user){
                console.log('user not exist');
                return done(null, false, req.flash('message','user not found'))
            }
            //user exist but wrong password
            if(!validPassword(user, password)){
                console.log("invalid password");
                return done(null, false, req.flash('message','invalid password'));
            }
            return done(null, true, user);
        })
    }

))

}


configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});
