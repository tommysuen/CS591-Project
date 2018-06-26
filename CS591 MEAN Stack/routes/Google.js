const passport = require('passport');
const Google = require('passport-google-oauth20');
const keys = require('./keys');
const data = require('../models/TopLocations');

//Passport serialization and deserialization
passport.serializeUser((user, result) =>{
    result(null, user.id)
});

passport.deserializeUser((id, result) =>{
    data.findById(id).then((user)=>{
        result(null, user)
    });
});

//Google OAuth 20 using Passport
passport.use(new Google({
    callbackURL:'/auth/google/redirect',
    clientID: keys.clientID,
    clientSecret: keys.clientSecret
}, (accessToken, refreshToken, profile, result) => {
    data.findOne({GID:profile.id}).then((exist) => {
        if(exist){
            //If the user is already in the DB, then do not re-add.
            console.log("already here")
            result(null, exist)
        }
        else{
            //if New user, add them in
            new data({
                username:profile.displayName,
                GID: profile.id,
                name:[]
            }).save().then((results) =>{
                console.log(results)
                result(null, results)
            })
        }
    })
    })
)