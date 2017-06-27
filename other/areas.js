/*****************************************************   AREAs   ******************************************************/

//Module with common function used all over the project
const utilities = require("./utilities.js");
//Module to interact with the database
const areaDb = require("./database/areaDb.js");

/**
 * Module to manage the area request, include all the get and post request that are managed for the areas
 * @param  {express} app [the express module used in the main script, all the get/post listener will be added here]
 */
module.exports = function (app) {
  var areaModule = {
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
        areaDb.init();
      }
      catch(err){
        this.init=false;
        //Through error if the initialization fails
        utilities.consoleError("Area module not initializated for: \n");
        utilities.consoleError(err);
      }
    }
  };

  /*
  * In the following line we add to the obj app all the get we need, the comment bellow look as a function documentation
  * because we threat each request as a funciton. So the parameter to explain are the params to insert into the query
  */

  /**
   * Return the areas from the starting point indicated in the parameter to the limit, the follower
   * parameter are take from the request
   * example of usage:  /areas?start=0&limit=5&orderby=1
   * @param  {integer} start [starting news number]
   * @param  {interger} limit [max number of news to return]
   * @param {integer} orderBy [order criteria: 0-none 1- celebrity, 2- alphabetic order]
   * @return {JSON}           [news from the database]
   */
  app.get("/areas", function (req, res) {
    //get parameters from the Url
    let parameters = utilities.getSelectUrlParameters(req);
    //Send the select to the database
    areaDb.select(function (result) {
      //Send the answer back to the user
      res.send(JSON.stringify(result));
    }, parameters.start, parameters.limit, parameters.orderBy);
  });

  /**
   * Return the area with the specified id indicated in the parameters
   * example of usage:  /area?id=2
   * @param  {int} id [the id of the researched area]
   * @return {JSON}     [the area with the id equal to the id passed]
   */
  app.get("/area/:id", function (req, res) {
    //Take the id from the parameter and parse it
    let id = utilities.checkId(req.params.id);
    //Send the select to the database
    areaDb.selectById(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });

  /**
   * Return the area with the responsible with id indicated in the parameters
   * example of usage:  /area-by-responsible?id=2
   * @param  {int} id [the id of the researched responsible]
   * @return {JSON}     [the area with the with the responsible with the id passed]
   */
  app.get("/area-by-responsible/:id", function (req, res) {
    //Take the id from the parameter and parse it
    let id = utilities.checkId(req.params.id);
    //Send the select to the database
    areaDb.selectByResponsible(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });
  return areaModule;
}
