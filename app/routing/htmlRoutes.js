var express = require("express");
var path = require("path");
var fs = require("fs");
const questions = require('../../questions');



var PORT = 3000;
var app = express();

module.exports = function (app) {
    app.use(express.static('public'));

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get('/api/questions', (req, res) => {
        res.send(questions);
    });
}