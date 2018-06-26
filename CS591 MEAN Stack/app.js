const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');
const passport = require('passport');
const Googlepassport = require('./routes/Google');
const cookie = require('cookie-session');

mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('Connected')
});

//Routes
const YelpRouter = require('./routes/yelp');
const LocationsRouter = require('./routes/locations');
const AuthRouter = require('./routes/auth');


//Sets up CORS and BodyParser
const app = express();
app.use(cors());
app.use(bodyParser.json());

//Cookies
app.use(cookie({
    maxAge: 24*60*60*1000,
    keys: '123321123'
}));

//Passport Set up
app.use(passport.initialize());
app.use(passport.session());
//Connect Express to HTML Front End
app.use(express.static(path.join(__dirname, 'public')));

//Uses Routers
app.use('/locations',LocationsRouter);
app.use('/yelp', YelpRouter);
app.use('/auth', AuthRouter);

//Starts Server
app.listen(3000, () => {console.log("Server Started")});
module.exports = app;
