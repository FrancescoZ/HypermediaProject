/*****************************************************    NEWS    *****************************************************/

//Module with common function used all over the project
const utilities = require("./utilities.js");
//Module to interact with the database
const newsDb = require("./database/newsDb.js");

/**
 * Module to manage the news request, include all the get and post request that are managed for the news
 * @param  {express} app [the express module used in the main script, all the get/post listener will be added here]
 */
module.exports = function (app) {
  var newsModule = {
    //Status of the initialization
    init:false,
    /**
     * Init the database, creating the table and inserting the data taken from the .json
     * @return none
     */
    init: function () {
      this.init=true;
      try {
        //init the database
        newsDb.init();
      }
      catch(err){
        this.init=false;
        //Through error if the initialization fails
        utilities.consoleError("News module not initializated for: \n");
        utilities.consoleError(err);
      }
    }
  };
  /*
  * In the following line we add to the obj app all the get we need, the comment bellow look as a function documentation
  * because we threat each request as a funciton. So the parameter to explain are the params to insert into the query
  */

  /**
   * Return the news from the starting poing indicated to the limit, the follower
   * parameter are take from the request
   * example of usage:  /news?start=0&limit=5
   * @param  {integer} start [starting news number]
   * @param  {interger} limit [max number of news to return]
   * @param {integer} [orderBy] [order criteria: 0-none 1- celebrity, 2- alphabetic order]
   * @return {JSON}           [news from the database]
   */
  app.get("/news", function (req, res) {
    //get parameters from the Url
    let parameters = utilities.getSelectUrlParameters(req);
    //Send the select to the database
    newsDb.select(function (result) {
      res.send(JSON.stringify(result));
    }, parameters.start, parameters.limit, parameters.orderBy);
  });


  app.get("/news/:id", function (req, res) {
    //Take the id from the parameter and parse it
    let id = utilities.checkId(req.params.id);
    //Send the select to the database
    newsDb.selectById(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });

  return newsModule;
}
