const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./other/database/database.js");
const _ = require("lodash");



let serverPort = process.env.PORT || 5000;



app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/pages"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

///////////////////////////////////////// UTILITIES /////////////////////////////////////////////////////
var convertOrder=function(value){
  let order=parseInt(value);
  switch(order){
    case 1:
      return "celebrity";
    case 2:
      return "name";
    default:
      return null;
  }
}

// /* Register REST entry point */
///////////////////////////////////////// NEWS /////////////////////////////////////////
/**
 * Return the news from the starting poing indicated to the limit, the follower
 * parameter are take from the request
 * example of usage:  /news?start=0&limit=5
 * @param  {integer} start [starting news number]
 * @param  {interger} limit [max number of news to return]
 * @return {JSON}           [news from the database]
 */
app.get("/news", function(req, res) {
  //Take the parameter from the request
  //for the news we are interested in how many news shows up
  let parameters={
    start:parseInt(_.get(req, "query.start", 0)),
    limit:parseInt(_.get(req, "query.limit", 5))
    orderBy: convertOrder(_.get(req, "query.orderBy", 0))
  };
  //Send the select to the database
  db.select("news",
      function(result) {
        res.send(JSON.stringify(result));
      },
      function(error){
        console.log(error);
      },parameters);
});

app.get("news/:id",function(req,res){
  let id = parseInt(_.get(req, "query.params.id", 0));
  //TODO Request news by id
});

///////////////////////////////////////// DOCTORS /////////////////////////////////////////
/**
 * Return the specified number of doctors starting from a defined start order by a specific request, the follower
 * parameter are take from the request
 * example of usage:  /doctor?start=0&limit=5&orderBy=1
 * @param {integer}  start [starting point to count the doctor]
 * @param {integer}  limit [number of doctor max to return]
 * @param {integer} orderBy [order criteria: 0-none 1- celebrity, 2- alphabetic order]
 * @return {JSON}           [news from the database]
 */
app.get('/doctors', function(req,res){
  let parameters={
    start:parseInt(_.get(req, "query.start", 0)),
    limit:parseInt(_.get(req, "query.limit", 5)),
    orderBy: convertOrder(_.get(req, "query.orderBy", 0))
  };
  //Send the select to the database
  db.select("doctor",
      function(result) {
        res.send(JSON.stringify(result));
      },
      function(error){
        console.log(error);
      },parameters);
});

app.get("doctor/:id",function(req,res){
  let id = parseInt(_.get(req, "query.params.id", 0));
});

///////////////////////////////////////// LOCATIONS /////////////////////////////////////////
/**
 * Return the specified number of location starting from a defined start order by a specific request, the follower
 * parameter are take from the request
 * example of usage:  /locations?start=0&limit=5&orderBy=1
 * @param {integer}  start [starting point to count the location]
 * @param {integer}  limit [number of locations max to return]
 * @param {integer} orderBy [order criteria: 0-none 1- celebrity, 2- alphabetic order]
 * @return {JSON}           [news from the database]
 */
app.get('/locations', function(req,res){
  let parameters={
    start:parseInt(_.get(req, "query.start", 0)),
    limit:parseInt(_.get(req, "query.limit", 5)),
    orderBy: convertOrder(_.get(req, "query.orderBy", 0))
  };  //Send the select to the database
  db.select("location",
      function(result) {
        res.send(JSON.stringify(result));
      },
      function(error){
        console.log(error);
      },parameters);
});

app.get("location/:id",function(req,res){
  let id = parseInt(_.get(req, "query.params.id", 0));
});

///////////////////////////////////////// SERVICES /////////////////////////////////////////
/**
 * Return the specified number of services starting from a defined start, order by a specific request, the follower
 * parameter are take from the request
 * example of usage:  /services?start=0&limit=5&orderBy=1
 * @param {integer}  start [starting point to count the services]
 * @param {integer}  limit [number of services max to return]
 * @param {integer} orderBy [order criteria: 0-none 1- celebrity, 2- alphabetic order]
 * @return {JSON}           [news from the database]
 */
app.get('/services', function(req,res){
  let parameters={
    start:parseInt(_.get(req, "query.start", 0)),
    limit:parseInt(_.get(req, "query.limit", 5)),
    orderBy: convertOrder(_.get(req, "query.orderBy", 0))
  };
  //Send the select to the database
  db.select("services",
      function(result) {
        res.send(JSON.stringify(result));
      },
      function(error){
        console.log(error);
      },parameters);
});

app.get("service/:id",function(req,res){
  let id = parseInt(_.get(req, "query.params.id", 0));
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

db.init();

/* Start the server on port 5000 */
app.listen(serverPort, function() {
  console.log(`Your app is ready at port ${serverPort}`);
});
