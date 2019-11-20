var express = require("express");
var $ = require("jquery");
var path = require("path");
var fs = require("fs");

var PORT = 3000;
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

var questions = [{
        question: "Your mind is always buzzing with unexplored ideas and plans.",
        answer: ["1(Strongly Disagree)", "2", "3", "4", "5(Strongly Agree)"]
    },
    {
        question: "Generally speaking, you rely more on your experience than your imagination.",
        answer: ["1(Strongly Disagree)", "2", "3", "4", "5(Strongly Agree)"]
    },
    {
        question: ".",
        answer: ["1(Strongly Disagree)", "2", "3", "4", "5(Strongly Agree)"]
    }
]

var survey = $("#questions-area");

function displayQuestions() {
    for (var i = 0; i < questions.length; i++) {
        survey.append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            survey.append("<option>" + questions[i].answers[j] +
                "</option>");
        }
    }
};