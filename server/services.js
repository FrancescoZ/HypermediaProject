///////////////////////////////////////// SERVICES /////////////////////////////////////////
const utilities = require("./utilities.js");
const serviceDb = require("./database/serviceDb.js");

module.exports = function(app,_){
  var serviceModule={
    initServices: function(){
      serviceDb.init();
    }
  };


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
    let start=parseInt(_.get(req, "query.start", 0));
    let limit=parseInt(_.get(req, "query.limit", 5));
    let orderBy= utilities.convertOrder(_.get(req, "query.orderBy", 0));
    //Send the select to the database
    serviceDb.select(
        function(result) {
          res.send(JSON.stringify(result));
        },start,limit,orderBy);
  });

  app.get("/service/:id",function(req,res){
    let id = parseInt(req.params.id);
    //Send the select to the database
    serviceDb.selectById(function(result) {
          res.send(JSON.stringify(result));
        },id);
  });

  app.get("/service-by-resp/:id",function(req,res){
    let id = parseInt(req.params.id);
    //Send the select to the database
    serviceDb.selectByResponsible(function(result) {
          res.send(JSON.stringify(result));
        },id);
  });

  app.get("/service-by-location/:id",function(req,res){
    let id = parseInt(req.params.id);
    //Send the select to the database
    serviceDb.selectByLocation(function(result) {
          res.send(JSON.stringify(result));
        },id);
  });

  return serviceModule;
}
