///////////////////////////////////////// LOCATIONS /////////////////////////////////////////
const locationDb = require("./database/locationDb.js");
const utilities = require("./utilities.js");

module.exports = function(app,_){
  var locationsModule = {
    initLocations: function(){
      locationDb.init();
    }
  };


  /**
   * Return the specified number of location starting from a defined start order by a specific request, the follower
   * parameter are take from the request
   * example of usage:  /locations?start=0&limit=5&orderBy=1
   * @param {integer}  start [starting point to count the location]
   * @param {integer}  limit [number of locations max to return]
   * @param {integer} [orderBy] [order criteria: 0-none 1- celebrity, 2- alphabetic order]
   * @return {JSON}           [news from the database]
   */
  app.get('/locations', function(req,res){
    let start=parseInt(_.get(req, "query.start", 0));
    let limit=parseInt(_.get(req, "query.limit", 5));
    let orderBy= utilities.convertOrder(_.get(req, "query.orderBy", 0));
    locationDb.select(
        function(result) {
          res.send(JSON.stringify(result));
        },start,limit,orderBy);
  });

  app.get("/location/:id",function(req,res){
    let id = parseInt(req.params.id);
    //Send the select to the database
    locationDb.selectById(function(result) {
          res.send(JSON.stringify(result));
        },id);
  });

  return locationsModule;
}
