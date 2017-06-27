/*********************************************** RESERVATION & CONTACT ************************************************/

//Module with common function used all over the project
const utilities = require("./utilities.js");
//Module to make javascript easier
const _ = require("lodash");
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
        console.log("\x1b[4m\x1b[31m%s\x1b[0m","Communication module not initializated for: \n")
        console.log(err);
      }
    }
  };

  app.post("/reservation", function (req, res) {
    let toappend = {
      name: req.body.name,
      mail: req.body.mail,
      phone: req.body.phone,
      note: req.body.note,
      date: req.body.date,
      service: req.body.service,
      time: utilities.getDateTime()
    };
    comDb.insertReservation(toappend, function () {
      res.send(200);
    });
  });

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
