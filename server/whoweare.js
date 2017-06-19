///////////////////////////////////////// AREAs /////////////////////////////////////////
const utilities = require("./utilities.js");
const whoDb = require("./database/whoweareDb.js");

module.exports = function(app,_){
  var whoweareModule = {
    initWhoweare: function (){
      areaDb.init();
    }
  };

  /**
   * Return the infor from the starting poing indicated to the limit, the follower
   * parameter are take from the request
   * example of usage:  /whoweare?start=0&limit=5&orderby=1
   * @return {JSON}           [news from the database]
   */
  app.get("/whoweare", function(req, res) {

    //Send the select to the database
    whoDb.select(function(result) {
          res.send(JSON.stringify(result));
        });
  });
  return whoweareModule;
}
