const express = require('express');
const router = express.Router();
const keys = require('./keys');

//Helper function to retrieve data from URL
function Get(json_url)
{
    const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",json_url,false);
    Httpreq.send(null);
    return Httpreq.responseText
}
//Uses the Yelp API
router.get('/yelp', function(req, res) {
    const travellocation = req.query.location.toString();
    let state = travellocation;
    let city = '';
    if (travellocation.includes(",")) {
        const removewhitespace = travellocation.replace(", ",",");
        const split = removewhitespace.split(",");
        city = split[0];
        state = split[1];
    }

    const entertainment = req.query.entertainment.toString();
    const yelp = require('yelp-fusion');
    const client = yelp.client(keys.YelpKey);
    let Businesses = [];
    //First Search calls for the the top 3 restaurants and then
    //appends those entries into the array Businesses
    let Foodsearch = function(){
        return client.search({
            term: 'restaurant',
            location: travellocation,
            limit: 3,
            sort_by: 'rating',
            price: '1,2,3'
        }).then(response => {
            for (i = 0; i <response.jsonBody.businesses.length; i++) {
                Businesses.push([response.jsonBody.businesses[i].name, response.jsonBody.businesses[i].image_url,
                    response.jsonBody.businesses[i].rating, response.jsonBody.businesses[i].review_count,
                    response.jsonBody.businesses[i].price, response.jsonBody.businesses[i].url]);
                    //This will return the Company's Name, Image URL, Rating, Review Count, Price, and Yelp URL
            }
        })
    };
    //HotelSearch calls for the top 3 hotels and then appending those results in Businesses
    let Hotelsearch = function(){
        return client.search({
                term: 'hotels',
                location: travellocation,
                limit: 3,
                sort_by: 'rating',
                price: '1,2,3'
            }).then(response => {
                for (i = 0; i <response.jsonBody.businesses.length; i++) {
                    Businesses.push([response.jsonBody.businesses[i].name, response.jsonBody.businesses[i].image_url,
                        response.jsonBody.businesses[i].rating, response.jsonBody.businesses[i].review_count,
                        response.jsonBody.businesses[i].price, response.jsonBody.businesses[i].url]);
                    //This will return the Company's Name, Image URL, Rating, Review Count, Price, and Yelp URL
                }

            })
    };
    //Eventful Search calls the Eventful API and give top recommendations for user's choice of entertainment
    let Eventfulsearch = function(){
        let url = 'http://api.eventful.com/json/events/search?app_key='+keys.EventfulKey+'&keywords='+entertainment+'&location='+travellocation+'&sort_order=popularity&page_size=3&page_number=1';
        let data = JSON.parse(Get(url));
        Businesses.push([data.events.event[0].title],[data.events.event[1].title],[data.events.event[2].title]);
    };

    let TicketMasterSearch = function(){
        let i;
        let link;
        for (i = 6; i< 9; i++) {
            let word = Businesses[i][0].toString();
            //If the user did not add a City and just a state (New York), then direct them to a general url
            if (city == '') {
                link = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=' + word + '&state=' + state + '&size=1&apikey=' + keys.TicketmasterKey;
            }
            //Else, enter both the city and state into the URL
            else{
                link = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=' + word + '&city=' + city + '&state=' + state + '&size=1&apikey=' + keys.TicketmasterKey;
            }

            let result = JSON.parse(Get(link));
            if (result['page'].totalElements == 0){
                //If there are no results, then just return generalized values and no-image template
                Businesses[i].push(0,-1, 1, "http://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png")
            }
            else {
                //If there are results, then return Ticketmaster's Event Venue, min Price, max price, Image URL, and the Ticketmaster Event URL
                Businesses[i].push(result._embedded.events[0]._embedded['venues'][0]['name'], result._embedded.events[0]['priceRanges'][0].min, result._embedded.events[0]['priceRanges'][0].max, result._embedded.events[0].images[0].url,
                    result._embedded.events[0].url)
            }

        }
        res.json(Businesses);

    };
    //Path maintains sequential order of the calls
    let path = async function(){
        await Foodsearch();
        await Hotelsearch();
        await Eventfulsearch();
        await TicketMasterSearch();

    };
    path();

});

module.exports = router;
