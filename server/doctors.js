///////////////////////////////////////// DOCTORS /////////////////////////////////////////

const doctorDb = require("./database/doctorDb.js");
const utilities = require("./utilities.js");

module.exports = function(app,_){
  var doctorsModule = {
    initDoctors: function(){
      doctorDb.init();
    }
  };

  /**
   * Return the specified number of doctors starting from a defined start order by a specific request, the follower
   * parameter are take from the request
   * example of usage:  /doctor?start=0&limit=5&orderBy=1
   * @param {integer}  start [starting point to count the doctor]
   * @param {integer}  limit [number of doctor max to return]
   * @param {integer} [orderBy] [order criteria: 0-none 1- celebrity, 2- alphabetic order]
   * @return {JSON}           [news from the database]
   */
  app.get('/doctors', function(req,res){
    let start=parseInt(_.get(req, "query.start", 0));
    let limit=parseInt(_.get(req, "query.limit", 5));
    let orderBy= utilities.convertOrder(_.get(req, "query.orderBy", 0));
    //Send the select to the database
    doctorDb.select(
        function(result) {
          res.send(JSON.stringify(result));
        },start,limit,orderBy);
  });

  app.get("/doctor/:id",function(req,res){
    let id = parseInt(req.params.id);
    //Send the select to the database
    doctorDb.selectById(function(result) {
          res.send(JSON.stringify(result));
        },id);
  });

  app.get("/doctors-by-service/:id",function(req,res){
    let id = parseInt(req.params.id);
    //Send the select to the database
    doctorDb.selectByService(function(result) {
          res.send(JSON.stringify(result));
        },id);
  });

  app.get("/doctor-by-location/:id",function(req,res){
    let id = parseInt(req.params.id);
    //Send the select to the database
    doctorDb.selectByLocation(function(result) {
          res.send(JSON.stringify(result));
        },id);
  });
  return doctorsModule;
}
