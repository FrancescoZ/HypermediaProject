/******************************************************  AREAs  *******************************************************/

//Module with common function used all over the project
const utilities = require("./utilities.js");
//Module to make javascript easier
const _ = require("lodash");
//Module to interact with the database
const whoDb = require("./database/whoweareDb.js");

/**
 * Module to manage the request about who we are, include all the get and post request that are managed for it
 * @param  {express} app [the express module used in the main script, all the get/post listener will be added here]
 */
module.exports = function (app) {
  var whoweareModule = {
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
        whoDb.init();
      }
      catch(err){
        this.init=false;
        //Through error if the initialization fails
        console.log("\x1b[4m\x1b[31m%s\x1b[0m","Whoweare module not initializated for: \n")
        console.log(err);
      }
    }
  };


  /**
   * Return the infor from the starting poing indicated to the limit, the follower
   * parameter are take from the request
   * example of usage:  /whoweare?start=0&limit=5&orderby=1
   * @return {JSON}           [news from the database]
   */
  app.get("/whoweare", function (req, res) {

    //Send the select to the database
    whoDb.select(function (result) {
      res.send(JSON.stringify(result));
    });
  });
  return whoweareModule;
}
