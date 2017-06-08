///////////////////////////////////////// NEWS /////////////////////////////////////////

const newsDb = require("./database/newsDb.js");
const utilities = require("./utilities.js");
module.exports = function(app,_){
  var newsModule={
    initNews:function(){
      newsDb.init();
    }
  };

  /**
   * Return the news from the starting poing indicated to the limit, the follower
   * parameter are take from the request
   * example of usage:  /news?start=0&limit=5
   * @param  {integer} start [starting news number]
   * @param  {interger} limit [max number of news to return]
   * @return {JSON}           [news from the database]
   */
  app.get("/news", function(req, res) {
    //TODO Check parameters
    let parameters={
      start:parseInt(_.get(req, "query.start", 0)),
      limit:parseInt(_.get(req, "query.limit", 5)),
      orderBy: utilities.convertOrder(_.get(req, "query.orderBy", 0))
    };
    //Send the select to the database
    newsDb.select(function(result) {
          res.send(JSON.stringify(result));
        },
        function(error){
          console.log(error);
        },parameters);
  });


  app.get("news/:id",function(req,res){
    //TODO Check id
    let parameters={
      id : parseInt(_.get(req, "query.params.id", 0))
    };
    //Send the select to the database
    newsDb.select(function(result) {
          res.send(JSON.stringify(result));
        },
        function(error){
          console.log(error);
        },parameters);
  });

  return newsModule;
}
