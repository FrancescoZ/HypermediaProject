//TODO Commentare


const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const _ = require("lodash");
const process = require("process");
const util=require("./server/utilities.js");

// /* Register REST entry point */
const news = require("./server/news.js")(app,_);
const doctors = require("./server/doctors.js")(app,_);
const locations = require("./server/locations.js")(app,_);
const services = require("./server/services.js")(app,_);
const areas = require("./server/areas.js")(app,_);

/**
 * Call the different submodule, and crete the connection with the database
 */
function init() {
  areas.initAreas();
  doctors.initDoctors();
  locations.initLocations();
  news.initNews();
  services.initServices();
};

let serverPort = process.env.PORT || 5000;

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/pages"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(function(err, req, res, next) {
    console.log(err);
    res.send(500);
});
/*
app.delete("/pets/:id", function(req, res) {
  let idn = parseInt(req.params.id);
  sqlDb("pets").where("id", idn).del().then(() => {
    res.status(200);
    res.send({ message: "ok" });
  });
});

app.post("/pets", function(req, res) {
  let toappend = {
    name: req.body.name,
    tag: req.body.tag,
    born: req.body.year
  };
  sqlDb("pets").insert(toappend).then(ids => {
    let id = ids[0];
    res.send(_.merge({ id, toappend }));
  });
});
*/
// app.use(function(req, res) {
//   res.status(400);
//   res.send({ error: "400", title: "404: File Not Found" });
// });

app.set("port", serverPort);

init();

/* Start the server on port 5000 */
app.listen(serverPort, function() {
  console.log(`Your app is ready at port ${serverPort}`);
});
