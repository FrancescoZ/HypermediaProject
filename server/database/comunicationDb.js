const database = require("./database.js");

module.exports = {
  init: function () {
    database.init(function (dbConnection, initData, _) {
      //initial data stored in json

      //Reservation
      dbConnection.schema.hasTable("reservation").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("reservation", table => {
              table.increments('id').primary();
              table.string("name");
              table.date("date");
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
  insertContact: function (obj, retFunction) {
    database.insert("contact", obj, retFunction);
  },
  insertReservation: function (obj, retFunction) {
    //TODO Check if reservation is possible
    database.insert("reservation", obj, retFunction);
  }
}
