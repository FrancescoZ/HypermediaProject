///////////////////////////////////////// DOCTORS /////////////////////////////////////////

const doctorDb = require("./database/doctorDb.js");
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
    doctorDb.select("doctor",
        function(result) {
          res.send(JSON.stringify(result));
        },parameters);
  });

  app.get("doctor/:id",function(req,res){
    let id = parseInt(_.get(req, "query.params.id", 0));
  });

  return doctorsModule;
}
