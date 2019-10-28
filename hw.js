var axios = require("axios");
var fs = require("fs");
require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var request = require('request');
var spotify = new Spotify(keys.spotify);

var HW = function () {
    // divider will be used as a spacer between the tv data we print in log.txt
    var divider = "\n------------------------------------------------------------\n\n";

    // findsong takes in the name of a tv song and searches the tvmaze API
    this.findSong = function (song) {
        var URL = "http://api.tvmaze.com/singlesearch/songs?q=" + song;

        axios.get(URL).then(function (response) {
            // Place the response.data into a variable, jsonData.
            var jsonData = response.data;

            // songData ends up being the string containing the song data we will print to the console
            var songData = [
                "Artists: " + jsonData.name,
                "Name: " + jsonData.genres.join(", "),
                "Previe Link: " + jsonData.rating.average,
                "Album: " + jsonData.network.name
            ].join("\n\n");

            fs.appendFile("log.txt", songData + divider, function (err) {
                if (err) throw err;
                console.log(songData);
            });
        });
    };
    this.random = function (file) {
        var URL = "http://api.tvmaze.com/search/people?q=" + movie;

        axios.get(URL).then(function (response) {
            // Grab the first index of the response array, access the object at the `person` key and store it in a variable.
            var jsonData = response.data[0].person;
            // movieData ends up being the string containing the show data we will print to the console
            var movieData = [
                "Title: " + jsonData.name,
                "Year: " + jsonData.birthday,
                "IMDB Rating: " + jsonData.gender,
                "Rotten Tomatoes Rating: " + ,
                "Country: " + jsonData.country.name,
                "Language: " + jsonData.country.name,
                "Plot:" + ,
                "Actors: " + jsonData.url
            ].join("\n\n");

            // Append movieData and the divider to log.txt, print showData to the console
            fs.appendFile("log.txt", movieData + divider, function (err) {
                if (err) throw err;
                console.log(movieData);
            });
        });
    };
    this.findMovie = function (movie) {
        var URL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

        axios.get(URL).then(function (response) {
            // Grab the first index of the response array, access the object at the `person` key and store it in a variable.
            var jsonData = response.data[0].person;
            // movieData ends up being the string containing the show data we will print to the console
            var movieData = [
                "Title: " + jsonData.title,
                "Year: " + jsonData.released,
                "IMDB Rating: " + jsonData.imdbRating,
                "Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value,
                "Country: " + jsonData.country,
                "Language: " + jsonData.language,
                "Plot:" + jsonData.language,
                "Actors: " + jsonData.actors
            ].join("\n\n");

            // Append movieData and the divider to log.txt, print showData to the console
            fs.appendFile("log.txt", movieData + divider, function (err) {
                if (err) throw err;
                console.log(movieData);
            });
        });
    };
};

module.exports = TV;

