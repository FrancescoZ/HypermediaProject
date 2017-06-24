const database = require("./database.js");

module.exports = {
  init: function () {
    database.init(function (dbConnection, initData, _) {
      let areaList = require(initData + "whoweare.json");

      //Areas
      dbConnection.schema.hasTable("whoweare").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("whoweare", table => {
              table.increments('id').primary();
              table.string("title");
              table.text("text");
              table.integer("tab");
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
  ///////////////////////////////////////// SELECT ///////////////////////////
  select: function (retFunction) {
    //Check the parameter
    database.select("whoweare", retFunction, {});
  }
}
