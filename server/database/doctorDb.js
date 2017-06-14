const database = require("./database.js");

module.exports = {
  init: function () {
    database.init(function (dbConnection, initData, _) {
      let doctorList = require(initData + "doc.json");
      //Doctors
      dbConnection.schema.hasTable("doctor").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("doctor", table => {
              table.increments('id').primary();
              table.string("name");
              table.string("phone");
              table.string("email");
              table.string("office_hours");
              table.text("bio");
              table.text("image");
              table.integer("celebrity");
              table.integer("at_service");
            })
            .then(() => {
              //fill the table just created
              Promise.all(
                _.map(doctorList, d => {
                  console.log(d);
                  return dbConnection("doctor").insert(d);
                })
              );
              console.log("Doctors loaded");
            });
        } else {
          console.log("Doctors are already loaded");
        }
      });
    });
  },
  ///////////////////////////////////////// SELECT ///////////////////////////
  select: function (retFunction, start = null, limit = null, order = null) {
    //Check the parameter
    let param = {
      start: start,
      limit: limit,
      orderBy: order
    };
    database.select("doctor", retFunction, param);
  },
  selectById: function (retFunction, id) {
    //TODO Check the id
    let param = {
      start: null,
      limit: null,
      orderBy: null,
      id: id,
      idname: "id"
    };
    database.select("doctor", retFunction, param);
  },
  selectByService: function (retFunction, idService) {
    //TODO Check the id
    let doctorParam = {
      idname: "at_service",
      id: idService
    };
    database.select("doctor", retFunction, doctorParam);
  },
  selectByLocation: function(retFunction,idLoc){
    let locParam={
      objType: "location_service",
      idname: "id_location",
      id: idLoc,
      column: "id_service"
    };
    let docParam={
      idsubquery:"at_service",
      subquery: locParam
    };
    database.select("doctor", retFunction, docParam);
  }


}
