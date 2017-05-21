const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./database.js");
const _ = require("lodash");



let serverPort = process.env.PORT || 5000;



app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// /* Register REST entry point */
app.get("/pets", function(req, res) {
  let start = parseInt(_.get(req, "query.start", 0));
  let limit = parseInt(_.get(req, "query.limit", 5));
  let sortby = _.get(req, "query.sort", "none");
  let myQuery = sqlDb("pets");

  if (sortby === "age") {
    myQuery = myQuery.orderBy("born", "asc");
  } else if (sortby === "-age") {
    myQuery = myQuery.orderBy("born", "desc");
  }
  myQuery.limit(limit).offset(start).then(result => {
    res.send(JSON.stringify(result));
  });
});

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
