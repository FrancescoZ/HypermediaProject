/*****************************************************   AREAs   ******************************************************/

//Module with common function used all over the project
const utilities = require("./utilities.js");
//Module to make javascript easier
const _ = require("lodash");
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
        console.log("\x1b[4m\x1b[31m%s\x1b[0m","Area module not initializated for: \n")
        console.log(err);
      }
    }
  };

  /**
   * Return the areas from the starting point indicated in the parameter to the limit, the follower
   * parameter are take from the request
   * example of usage:  /area?start=0&limit=5&orderby=1
   * @param  {integer} start [starting news number]
   * @param  {interger} limit [max number of news to return]
   * @param {integer} orderBy [order criteria: 0-none 1- celebrity, 2- alphabetic order]
   * @return {JSON}           [news from the database]
   */
  app.get("/areas", function (req, res) {
    //Take the parameters from the query request
    let start = parseInt(_.get(req, "query.start", 0));
    let limit = parseInt(_.get(req, "query.limit", 5));
    let orderBy = utilities.convertOrder(_.get(req, "query.orderBy", 0));

    //Send the select to the database
    areaDb.select(function (result) {
      res.send(JSON.stringify(result));
    }, start, limit, orderBy);
  });

  app.get("/area/:id", function (req, res) {
    let id = parseInt(req.params.id);
    //Send the select to the database
    areaDb.selectById(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });
  app.get("/area-by-responsible/:id", function (req, res) {
    let id = parseInt(req.params.id);
    //Send the select to the database
    areaDb.selectByResponsible(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });
  return areaModule;
}
