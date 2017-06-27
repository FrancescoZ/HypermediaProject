/****************************************************  DOCTORS   ******************************************************/

//Module with common function used all over the project
const utilities = require("./utilities.js");
//Module to make javascript easier
const _ = require("lodash");
//Module to interact with the database
const doctorDb = require("./database/doctorDb.js");

/**
 * Module to manage the doctors request, include all the get and post request that are managed for the aredoctorsas
 * @param  {express} app [the express module used in the main script, all the get/post listener will be added here]
 */
module.exports = function (app) {
  var doctorsModule = {
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
        doctorDb.init();
      }
      catch(err){
        this.init=false;
        //Through error if the initialization fails
        console.log("\x1b[4m\x1b[31m%s\x1b[0m","Doctors module not initializated for: \n")
        console.log(err);
      }
    }
  };


  /**
   * Return the specified number of doctors starting from a defined start order by a specific request, the follower
   * parameter are take from the request
   * example of usage:  /doctor?start=0&limit=5&orderBy=1
   * @param {integer}  start [starting point to count the doctor]
   * @param {integer}  limit [number of doctor max to return]
   * @param {integer} [orderBy] [order criteria: 0-none 1- celebrity, 2- alphabetic order]
   * @return {JSON}           [news from the database]
   */
  app.get('/doctors', function (req, res) {
    let start = parseInt(_.get(req, "query.start", 0));
    let limit = parseInt(_.get(req, "query.limit", 5));
    let orderBy = utilities.convertOrder(_.get(req, "query.orderBy", 0));
    //Send the select to the database
    doctorDb.select(
      function (result) {
        res.send(JSON.stringify(result));
      }, start, limit, orderBy);
  });

  app.get("/doctor/:id", function (req, res) {
    let id = parseInt(req.params.id);
    //Send the select to the database
    doctorDb.selectById(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });

  app.get("/doctors-by-service/:id", function (req, res) {
    let id = parseInt(req.params.id);
    //Send the select to the database
    doctorDb.selectByService(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });

  app.get("/doctors-by-location/:id", function (req, res) {
    let id = parseInt(req.params.id);
    let orderBy = utilities.convertOrder(_.get(req, "query.orderBy", 0));
    //Send the select to the database
    doctorDb.selectByLocation(function (result) {
      res.send(JSON.stringify(result));
    }, id, orderBy);
  });
  return doctorsModule;
}
