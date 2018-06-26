const express = require('express');
const router = express.Router();
const passport = require('passport');

//Gets the User's profile using Google Authentication
router.get('/google', passport.authenticate('google',{
    scope:['profile']
}));

//Redirect the User after Authenticating back to the homepage
router.get('/google/redirect', passport.authenticate('google'), (req, res) =>{
    res.redirect('http://localhost:3000?='+req.user.GID)
});

//Log out
router.get('/logout', (req, res) =>{
    req.logout();
    res.redirect('http://localhost:3000')
})

module.exports = router;


