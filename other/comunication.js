/*********************************************** RESERVATION & CONTACT ************************************************/

//Module with common function used all over the project
const utilities = require("./utilities.js");
//Module to interact with the database
const comDb = require("./database/comunicationDb.js");

/**
 * Module to manage the post request about contact or reservation
 * @param  {express} app [the express module used in the main script, all the get/post listener will be added here]
 */
module.exports = function (app) {
  var comunication = {
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
        comDb.init();
      }
      catch(err){
        this.init=false;
        //Through error if the initialization fails
        utilities.consoleError("Communication module not initializated for: \n");
        utilities.consoleError(err);
      }
    }
  };

  /*
  * In the following line we add to the obj app all the get we need, the comment bellow look as a function documentation
  * because we threat each request as a funciton. So the parameter to explain are the params to insert into the query
  */

  /**
   * Send a post request to book a service
   * @param  {string} name [Name of the client]
   * @param  {string} mail [mail of the client]
   * @param {string} phone [phone of the client]
   * @param {string} note [note about the reservation]
   * @param {date} date [date of the reservation]
   * @param {int} service [service to book for]
   */
  app.post("/reservation", function (req, res) {
    let toappend = {
      name: req.body.name,
      mail: req.body.mail,
      phone: req.body.phone,
      note: req.body.note,
      date: req.body.date,
      service: utilities.checkId(req.body.service),
      time: utilities.getDateTime()
    };
    comDb.insertReservation(toappend, function () {
      res.send(200);
    });
  });

  /**
   * Send a POST request of contact from a client to ask specific question
   * @param  {string} name [Name of the client]
   * @param  {string} mail [mail of the client]
   * @param {string} note [The question the client is asking for]
   */
  app.post("/contact", function (req, res) {
    let toappend = {
      name: req.body.name,
      mail: req.body.mail,
      note: req.body.note,
      time: utilities.getDateTime()
    };
    comDb.insertContact(toappend, function () {
      res.send(200);
    });
  });

  return comunication;
}
