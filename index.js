//TODO Commentare

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const _ = require("lodash");
const process = require("process");
const util = require("./other/utilities.js");

let serverPort = process.env.PORT || 5000;

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/pages"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride());
app.use(function (err, req, res, next) {
  console.log(err);
  res.send(404);
});

app.set("port", serverPort);

// /* Register REST entry point */
const news = require("./other/news.js")(app, _);
const com = require("./other/comunication.js")(app, _);
const doctors = require("./other/doctors.js")(app, _);
const locations = require("./other/locations.js")(app, _);
const services = require("./other/services.js")(app, _);
const areas = require("./other/areas.js")(app, _);
const whowe = require("./other/whoweare.js")(app, _);

/**
 * Call the different submodule, and crete the connection with the database
 */
function init() {
  areas.initAreas();
  doctors.initDoctors();
  locations.initLocations();
  news.initNews();
  com.initCom();
  services.initServices();
  whowe.initWhoweare();
};

init();

/* Start the server on port 5000 */
app.listen(serverPort, function () {
  console.log(`Your app is ready at port ${serverPort}`);
});
