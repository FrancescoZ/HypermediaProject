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
      let locationAreaList = require(initData + "locationService.json");
      let locationList = require(initData + "location.json");

      //Create table structure for Locations
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
              table.string("image")
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
              table.integer('id_location')
              table.integer("id_service")
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

  /**
   * Select the locations from the db
   * equivalent select in SQL: SELECT * from location LIMIT @limit OFFSET @start ORDERBY @orderby
   * @param  {function} retFunction  [Callback function]
   * @param  {Int} [start=null] [Parameter @start of the query]
   * @param  {Int} [limit=null] [Parameter @limit of the query]
   * @param  {String} [order=null] [Parameter @orderby of the query]
   */
  select: function (retFunction, start = null, limit = null, order = null) {
    //Check the parameter
    let param = {
      start: start,
      limit: limit,
      orderBy: order
    };
    database.select("location", retFunction, param);
  },

  /**
   * Select the location from the db where the id is the id passed
   * equivalent select in SQL: SELECT * from location WHERE id=@id
   * @param  {function} retFunction  [Callback function]
   * @param  {Int} [id=null] [Parameter @id of the query]
   */
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
