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
      //Create table structure for Reservation
      dbConnection.schema.hasTable("reservation").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("reservation", table => {
              table.increments('id').primary();
              table.string("name");
              table.string("date");
              table.string("mail");
              table.string("phone");
              table.text("note");
              table.integer("service");
              table.timestamp("time")
            })
            .then(() => {
              console.log("Reservation created");
            });
        } else {
          console.log("Reservation already created");
        }
      });

      //Contact
      dbConnection.schema.hasTable("contact").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("contact", table => {
              table.increments('id').primary();
              table.string("name");
              table.timestamp("time");
              table.string("mail");
              table.text("note");
            })
            .then(() => {
              console.log("Contact created");
            });
        } else {
          console.log("Contact already created");
        }
      });
    });
  },
  /**
   * Insert a new row into the Contact table
   * @param  {Obj} obj         [Object to insert into the db]
   * @param  {Function} retFunction [callback function]
   */
  insertContact: function (obj, retFunction) {
    database.insert("contact", obj, retFunction);
  },
  /**
   * Insert a new row into the Reservation table
   * @param  {Obj} obj         [Object to insert into the db]
   * @param  {Function} retFunction [callback function]
   */
  insertReservation: function (obj, retFunction) {
    //TODO Check if reservation is possible
    database.insert("reservation", obj, retFunction);
  }
}
