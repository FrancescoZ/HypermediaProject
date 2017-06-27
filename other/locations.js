/***************************************************** LOCATIONS ******************************************************/

//Module with common function used all over the project
const utilities = require("./utilities.js");
//Module to interact with the database
const locationDb = require("./database/locationDb.js");

/**
 * Module to manage the location request, include all the get and post request that are managed for the location
 * @param  {express} app [the express module used in the main script, all the get/post listener will be added here]
 */
module.exports = function (app) {
  var locationsModule = {
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
        locationDb.init();
      }
      catch(err){
        this.init=false;
        //Through error if the initialization fails
        utilities.consoleError("Locations module not initializated for: \n");
        utilities.consoleError(err);
      }
    }
  };
  /*
  * In the following line we add to the obj app all the get we need, the comment bellow look as a function documentation
  * because we threat each request as a funciton. So the parameter to explain are the params to insert into the query
  */

  /**
   * Return the specified number of location starting from a defined start order by a specific request, the follower
   * parameter are take from the request
   * example of usage:  /locations?start=0&limit=5&orderBy=1
   * @param {integer}  start [starting point to count the location]
   * @param {integer}  limit [number of locations max to return]
   * @param {integer} [orderBy] [order criteria: 0-none 1- celebrity, 2- alphabetic order]
   * @return {JSON}           [news from the database]
   */
  app.get('/locations', function (req, res) {
    //get parameters from the Url
    let parameters = utilities.getSelectUrlParameters(req);
    locationDb.select(
      function (result) {
        res.send(JSON.stringify(result));
      }, parameters.start, parameters.limit, parameters.orderBy);
  });

  /**
   * Return the location with the specified id indicated in the parameters
   * example of usage:  /location?id=2
   * @param  {int} id [the id of the researched location]
   * @return {JSON}     [the location with the id equal to the id passed]
   */
  app.get("/location/:id", function (req, res) {
    //Take the id from the parameter and parse it
    let id = utilities.checkId(req.params.id);
    //Send the select to the database
    locationDb.selectById(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });

  /**
   * Return the location that are in area with id indicated in the parameters
   * example of usage:  /locations-by-area?id=2
   * @param  {int} id [the id of the specific area]
   * @return {JSON}     [location that are in area with id passed]
   */
  app.get("/locations-by-area/:id", function (req, res) {
    //Take the id from the parameter and parse it
    let id = utilities.checkId(req.params.id);
    //Send the select to the database
    locationDb.selectByArea(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });

  /**
   * Return the location that contains service with id indicated in the parameters
   * example of usage:  /locations-by-service?id=2
   * @param  {int} id [the id of the specific service]
   * @return {JSON}     [location that contains service with id passed]
   */
  app.get("/locations-by-service/:id", function (req, res) {
    //Take the id from the parameter and parse it
    let id = utilities.checkId(req.params.id);
    //Send the select to the database
    locationDb.selectByService(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });

  return locationsModule;
}
