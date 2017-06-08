///////////////////////////////////////// SERVICES /////////////////////////////////////////

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
    let parameters={
      start:parseInt(_.get(req, "query.start", 0)),
      limit:parseInt(_.get(req, "query.limit", 5)),
      orderBy: convertOrder(_.get(req, "query.orderBy", 0))
    };
    //Send the select to the database
    serviceDb.select("services",
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

  return serviceModule;
}
