//General Database module
const database = require("./database.js");
//Module to make javascript easier
const _ = require("lodash");

module.exports = {
  /*
   * Init db function, create the structure and fill it from the json data
   */
  init: function () {
    database.init(function (dbConnection, initData, _) {
      //Initial data
      let areaList = require(initData + "whoweare.json");

      //Create table structure for whoweare
      dbConnection.schema.hasTable("whoweare").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("whoweare", table => {
              table.increments('id').primary();
              table.string("title");
              table.text("text");
              table.string("tab");
            })
            .then(() => {
              //fill the table just created
              Promise.all(
                _.map(areaList, a => {
                  return dbConnection("whoweare").insert(a);
                })
              );
              console.log("Who we are loaded");
            });
        } else {
          console.log("Who we are already loaded");
        }
      });
    });
  },

  /**
   * Select the whoweare paragraph from the db
   * equivalent select in SQL: SELECT * FROM whoweare
   * @param  {function} retFunction  [Callback function]
   */
  select: function (retFunction) {
    database.select("whoweare", retFunction, {});
  }
}
