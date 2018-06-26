const mongoose = require('mongoose');
const config = require("../config/database");

const LocationMapping = mongoose.Schema({
    username: {
        type: String
    },
    GID: {
        type: String
    },
    name:{
        type: Array
    }

});

const Locations = module.exports = mongoose.model('Locations', LocationMapping);

module.exports.getLocation = function(name, callback){
    const query = {name: name};
    Locations.findOne(query, callback);
}

module.exports.addLocation = function(newLocation, callback){

}