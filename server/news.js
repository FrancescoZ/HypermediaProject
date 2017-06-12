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
   * @param {integer} [orderBy] [order criteria: 0-none 1- celebrity, 2- alphabetic order]
   * @return {JSON}           [news from the database]
   */
  app.get("/news", function(req, res) {
    let start=parseInt(_.get(req, "query.start", 0));
    let limit=parseInt(_.get(req, "query.limit", 5));
    let orderBy= utilities.convertOrder(_.get(req, "query.orderBy", 0));

    //Send the select to the database
    newsDb.select(function(result) {
          res.send(JSON.stringify(result));
        },start,limit,orderBy);
  });


  app.get("/news/:id",function(req,res){
    let id = parseInt(req.params.id);
    //Send the select to the database
    newsDb.selectById(function(result) {
          res.send(JSON.stringify(result));
        },id);
  });

  return newsModule;
}
