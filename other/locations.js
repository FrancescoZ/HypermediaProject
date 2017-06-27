/***************************************************** LOCATIONS ******************************************************/

//Module with common function used all over the project
const utilities = require("./utilities.js");
//Module to make javascript easier
const _ = require("lodash");
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
        console.log("\x1b[4m\x1b[31m%s\x1b[0m","Location module not initializated for: \n")
        console.log(err);
      }
    }
  };

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
    let start = parseInt(_.get(req, "query.start", 0));
    let limit = parseInt(_.get(req, "query.limit", 5));
    let orderBy = utilities.convertOrder(_.get(req, "query.orderBy", 0));
    locationDb.select(
      function (result) {
        res.send(JSON.stringify(result));
      }, start, limit, orderBy);
  });

  app.get("/location/:id", function (req, res) {
    let id = parseInt(req.params.id);
    //Send the select to the database
    locationDb.selectById(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });

  app.get("/locations-by-area/:id", function (req, res) {
    let id = parseInt(req.params.id);
    //Send the select to the database
    locationDb.selectByArea(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });

  app.get("/locations-by-service/:id", function (req, res) {
    let id = parseInt(req.params.id);
    //Send the select to the database
    locationDb.selectByService(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });

  return locationsModule;
}
