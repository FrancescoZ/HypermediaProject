///////////////////////////////////////// AREAs /////////////////////////////////////////
module.exports = function(app,_){
  const areaDb = require("./database/areaDb.js");

  var areaModule = {
    initAreas: function (){
      areaDb.init();
    }
  };

  /**
   * Return the areas from the starting poing indicated to the limit, the follower
   * parameter are take from the request
   * example of usage:  /area?start=0&limit=5&orderby=1
   * @param  {integer} start [starting news number]
   * @param  {interger} limit [max number of news to return]
   * @param {integer} orderBy [order criteria: 0-none 1- celebrity, 2- alphabetic order]
   * @return {JSON}           [news from the database]
   */
  app.get("/areas", function(req, res) {
    let start=parseInt(_.get(req, "query.start", 0));
    let limit=parseInt(_.get(req, "query.limit", 5));
    let orderBy= utilities.convertOrder(_.get(req, "query.orderBy", 0));

    //Send the select to the database
    areaDb.select(function(result) {
          res.send(JSON.stringify(result));
        },start,limit,orderBy);
  });

  app.get("/area/:id",function(req,res){
    let id = parseInt(req.params.id);
    //Send the select to the database
    areaDb.selectById(function(result) {
          res.send(JSON.stringify(result));
        },id);
  });
  return areaModule;
}
