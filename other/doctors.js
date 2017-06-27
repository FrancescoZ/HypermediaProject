/****************************************************  DOCTORS   ******************************************************/

//Module with common function used all over the project
const utilities = require("./utilities.js");
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
        utilities.consoleError("Doctors module not initializated for: \n");
        utilities.consoleError(err);
      }
    }
  };
  /*
  * In the following line we add to the obj app all the get we need, the comment bellow look as a function documentation
  * because we threat each request as a funciton. So the parameter to explain are the params to insert into the query
  */

  /**
   * Return the specified number of doctors starting from a defined start order by a specific request, the follower
   * parameter are take from the request
   * example of usage:  /doctors?start=0&limit=5&orderBy=1
   * @param {integer}  start [starting point to count the doctor]
   * @param {integer}  limit [number of doctor max to return]
   * @param {integer} [orderBy] [order criteria: 0-none 1- celebrity, 2- alphabetic order]
   * @return {JSON}           [news from the database]
   */
  app.get('/doctors', function (req, res) {
    //get parameters from the Url
    let parameters = utilities.getSelectUrlParameters(req);
    //Send the select to the database
    doctorDb.select(
      function (result) {
        res.send(JSON.stringify(result));
      }, parameters.start, parameters.limit, parameters.orderBy);
  });

  /**
   * Return the doctor with the specified id indicated in the parameters
   * example of usage:  /doctor?id=2
   * @param  {int} id [the id of the researched doctor]
   * @return {JSON}     [the doctor with the id equal to the id passed]
   */
  app.get("/doctor/:id", function (req, res) {
    //Take the id from the parameter and parse it
    let id = utilities.checkId(req.params.id);
    //Send the select to the database
    doctorDb.selectById(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });

  /**
   * Return the doctors who work in service with id indicated in the parameters
   * example of usage:  /doctors-by-service?id=2
   * @param  {int} id [the id of the specific service]
   * @return {JSON}     [doctors who work in service with id passed]
   */
  app.get("/doctors-by-service/:id", function (req, res) {
    //Take the id from the parameter and parse it
    let id = utilities.checkId(req.params.id);
    //Send the select to the database
    doctorDb.selectByService(function (result) {
      res.send(JSON.stringify(result));
    }, id);
  });

  /**
   * Return the doctors who work in location with id indicated in the parameters
   * example of usage:  /doctors-by-location?id=2
   * @param  {int} id [the id of the specific location]
   * @return {JSON}     [doctors who work in location with id passed]
   */
  app.get("/doctors-by-location/:id", function (req, res) {
    //Take the id from the parameter and parse it
    let id = utilities.checkId(req.params.id);
    let orderBy = utilities.convertOrder(_.get(req, "query.orderBy", 0));
    //Send the select to the database
    doctorDb.selectByLocation(function (result) {
      res.send(JSON.stringify(result));
    }, id, orderBy);
  });
  return doctorsModule;
}
