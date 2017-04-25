// index.js
// vegan-list-sp

// init project
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
var config = require('./config');
const app = express();

//
var db = MongoClient.connect('mongobdurl', function(err, db) {
    if(err)
        throw err;
    console.log("connected to the mongoDB !");
    myCollection = db.collection('restaurants_collection');
});



// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/restaurants", function (request, response) {
  response.send(restaurants);
});

app.get("/cafe", function (request, response) {
  response.send(cafe);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/restaurants", function (request, response) {
  restaurants.push(request.query.restaurants);
  response.sendStatus(200);
});

app.post("/cafe", function (request, response) {
  cafe.push(request.query.cafe);
  response.sendStatus(200);
});

// Simple in-memory store for now, I will use MongoDB (or other)
var restaurants = [
  "Cachoeira Tropical",
  "Vegg's Restaurante Vegetariano e Vegano",
  "Barão Natural"
];

// Simple in-memory store for now, I will use MongoDB (or other)
var cafe = [
  "Cafe 1",
  "Cafe vegano 2",
  "Cafe vegano 3"
];

// listen for requests :) for logging
var listener = app.listen(process.env.PORT || 8080, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});