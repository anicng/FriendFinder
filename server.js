var express = require("express");
var $ = require("jquery");
var path = require("path");
var fs = require("fs");
const quesions = require('./questions.js');


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

// Dynamically display quesions from questions.js file
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile('home.html');
// });

// app.get('/api/data', (req, res) => {
//     res.send(questions);
// });
