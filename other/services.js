/**************************************************    SERVICES    ****************************************************/

//Module with common function used all over the project
const utilities = require("./utilities.js");
//Module to interact with the database
const serviceDb = require("./database/serviceDb.js");

/**
 * Module to manage the services request, include all the get and post request that are managed for the services
 * @param  {express} app [the express module used in the main script, all the get/post listener will be added here]
 */
module.exports = function (app) {
  var serviceModule = {
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
        serviceDb.init();
      }
      catch(err){
        this.init=false;
        //Through error if the initialization fails
        utilities.consoleError("Services module not initializated for: \n");
        utilities.consoleError(err);
      }
    }
  };
  /*
  * In the following line we add to the obj app all the get we need, the comment bellow look as a function documentation
  * because we threat each request as a funciton. So the parameter to explain are the params to insert into the query
  */

  /**
   * Return the specified number of services starting from a defined start, order by a specific request, the follower
   * parameter are take from the request
   * example of usage:  /services?start=0&limit=5&orderBy=1
   * @param {integer}  start [starting point to count the services]
   * @param {integer}  limit [number of services max to return]
   * @param {integer} orderBy [order criteria: 0-none 1- celebrity, 2- alphabetic order]
   * @return {JSON}           [news from the database]
   */
  app.get('/services', function (req, res) {
    //get parameters from the Url
    let parameters = utilities.getSelectUrlParameters(req);
    //Send the select to the database
    serviceDb.select(
      function (result) {
        res.send(JSON.stringify(result));
      }, parameters.start, parameters.limit, parameters.orderBy);
  });

  /**
   * Return the service with the specified id indicated in the parameters
   * example of usage:  /service?id=2
   * @param  {int} id [the id of the researched service]
   * @return {JSON}     [the service with the id equal to the id passed]
   */
  app.get("/service/:id", function (req, res) {
    //Take the id from the parameter and parse it
    let id = utilities.checkId(req.params.id);
    //Send the select to the database
    serviceDb.selectById(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });

  /**
   * Return the service with the responsible with id indicated in the parameters
   * example of usage:  /service-by-responsible?id=2
   * @param  {int} id [the id of the researched responsible]
   * @return {JSON}     [the service with the with the responsible with the id passed]
   */
  app.get("/service-by-responsible/:id", function (req, res) {
    //Take the id from the parameter and parse it
    let id = utilities.checkId(req.params.id);
    //Send the select to the database
    serviceDb.selectByResponsible(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });

  /**
   * Return the services that are in location with id indicated in the parameters
   * example of usage:  /doctors-by-location?id=2
   * @param  {int} id [the id of the specific location]
   * @return {JSON}     [services that are in location with id passed]
   */
  app.get("/services-by-location/:id", function (req, res) {
    //Take the id from the parameter and parse it
    let id = utilities.checkId(req.params.id);
    //Send the select to the database
    serviceDb.selectByLocation(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });

  return serviceModule;
}
