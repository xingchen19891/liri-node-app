require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var HW = require("./hw");
var request = require('request');
var spotify = new Spotify(keys.spotify);

var hw = new HW();


var search = process.argv[2];
var term = process.argv[3];
if (search === "spotify-this-song") {
    console.log("Searching for Song");
    hw.findSong(term);
  } else if (search === "movie-this") {
    console.log("Searching for Movie");
    hw.findMovie(term);
  }
