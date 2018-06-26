const express = require('express');
const router = express.Router();
const Location = require('../models/TopLocations');

//Get Data from MongoDB based off ID
router.get('/input/:id', function(req, res){
    Location.find({GID: req.params.id}, function(err, results){
        res.json({results}.results[0]);
    })
});

//Get Data from MongoDB if no specifications
router.get('/input', (req, res, next) =>{
    Location.find(function(err, locations){
        res.json(locations);
    })
});

router.post('/input', (req, res, next) => {
    Location.find(
        //Finds the user favorite locations
        {name: [req.body.name, req.body.activity]}, function(err, result){
            if (result != ''){
                //If it is, then its already in there
                console.log("Already in here")
            }
            else{
                //If the user is trying to post a new favorite location, then add it based on their GID
                Location.update(
                    {GID: req.body.GID}, {$push: {name: [[req.body.name,req.body.activity]]}}, function(err){
                        if (err){
                            console.log(err)
                        }
                    });
            }
        });
});


//Deletes Entry From Database
router.delete('', function(req, res){

    Location.update({},{$pull:{name: {$in:[[req.body.name]]}}}, function(err, result){
        if(err){
            res.json("fail")
        }
        else{
        res.json("ok")
    }});

});
module.exports = router;