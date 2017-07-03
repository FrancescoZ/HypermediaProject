/*****************************************************  INDEX  ********************************************************/
const utils=require("./other/utilities.js");

//Module to manage the request to the server
const express = require("express");
const app = express();

//Parse incoming request bodies in a middleware before your handlers, available under the req.body property
const bodyParser = require("body-parser");

//Allow the override of the primaly function of express as the management of the error
const methodOverride = require('method-override');

//Provides information and control over the node js process
const process = require("process");

//Read the environement variable to initializate the process
let serverPort = process.env.PORT || 5000;

//Set the static file to distribute, this allow to not specifically answer to the get request concerning the html pages
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/pages"));

//Set the middleware to parse Json request (containing content-type:json)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//set the non-stardard error management
app.use(methodOverride());
app.use(utils.errorManager);
//set the port from the env variable
app.set("port", serverPort);

/* Register REST API entry point */
const news = require("./other/news.js")(app);
const com = require("./other/comunication.js")(app);
const doctors = require("./other/doctors.js")(app);
const locations = require("./other/locations.js")(app);
const services = require("./other/services.js")(app);
const areas = require("./other/areas.js")(app);
const whowe = require("./other/whoweare.js")(app);

/* Init all the API module, it include the initialisation of the db*/
function init() {
  areas.init();
  doctors.init();
  locations.init();
  news.init();
  com.init();
  services.init();
  whowe.init();
};

init();

/* Start the server on port 5000 */
app.listen(serverPort, function () {
  console.log(`Your app is ready at port ${serverPort}`);
});
