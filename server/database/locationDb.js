const database = require("./database.js");

module.exports = {
  init: function () {
    database.init(function (dbConnection, initData, _) {
      let locationAreaList = require(initData + "locationService.json");
      let locationList = require(initData + "location.json");

      //Locations
      dbConnection.schema.hasTable("location").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("location", table => {
              table.increments('id').primary();
              table.string("name");
              table.string("address");
              table.text("info");
              table.text("how_to");
              table.float("long");
              table.float("lat");
            })
            .then(() => {
              //fill the table just created
              Promise.all(
                _.map(locationList, l => {
                  return dbConnection("location").insert(l);
                })
              );
              console.log("Locations loaded");
            });
        } else {
          console.log("Locations are already loaded");
        }
      });

      //location' area
      dbConnection.schema.hasTable("location_service").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("location_service", table => {
              table.int('id_location')
              table.int("id_service")
            })
            .then(() => {
              //fill the table just created
              Promise.all(
                _.map(locationAreaList, d => {
                  return dbConnection("location_service").insert(d);
                })
              );
              console.log("Location's service loaded");
            });
        } else {
          console.log("Location's service are already loaded");
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
    database.select("location", retFunction, param);
  },
  selectById: function (retFunction, id) {
    //TODO Check the id
    let param = {
      id: id,
      idname: "id"
    };
    database.select("location", retFunction, param);
  },
  selectByArea: function (retFunction, idArea) {
    //TODO Check the id
    let serviceParam = {
      objType: "service",
      idname: "area",
      id: idArea,
      column: "id"
    };
    let locParam = {
      objType: "location_service",
      idsubquery: "id_location",
      subquery: serviceParam,
      column: "id_location"
    };
    let locationParam = {
      idsubquery: "id",
      subquery: locParam
    }
    database.select("location", retFunction, locationParam);
  },
  selectByService: function (retFunction, idService) {
    //TODO Check the id
    let locParam = {
      objType: "location_service",
      idname: "id_service",
      id: idService,
      column: "id_location"
    };
    let locationParam = {
      idsubquery: "id",
      subquery: locParam
    }
    database.select("location", retFunction, locationParam);
  }
}
