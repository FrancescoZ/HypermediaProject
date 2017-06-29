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
      let doctorList = require(initData + "doc.json");
      //Create table structure for Doctors
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

  /**
   * Select the doctors from the db
   * equivalent select in SQL: SELECT * FROM doctor LIMIT @limit OFFSET @start ORDERBY @orderby
   * @param  {function} retFunction  [Callback function]
   * @param  {Int} [start=null] [Parameter @start of the query]
   * @param  {Int} [limit=null] [Parameter @limit of the query]
   * @param  {String} [order=null] [Parameter @orderby of the query]
   */
  select: function (retFunction, start = null, limit = null, order = null) {
    let param = {
      start: start,
      limit: limit,
      orderBy: order
    };
    database.select("doctor", retFunction, param);
  },

  /**
   * Select the doctor from the db where the id is the id passed
   * equivalent select in SQL: SELECT * FROM doctor WHERE id=@id
   * @param  {function} retFunction  [Callback function]
   * @param  {Int} [id] [Parameter @id of the query]
   */
  selectById: function (retFunction, id) {
    let param = {
      id: id,
      idname: "id"
    };
    database.select("doctor", retFunction, param);
  },

  /**
   * Select the doctors who work in specific server
   * equivalent select in SQL: SELECT * FROM doctor WHERE at_service=@idService
   * @param  {function} retFunction  [Callback function]
   * @param  {Int} [idService] [Parameter @idService of the query]
   */
  selectByService: function (retFunction, idService) {
    let doctorParam = {
      idname: "at_service",
      id: idService
    };
    database.select("doctor", retFunction, doctorParam);
  },

  /**
   * Select the doctors who work in specific location
   * equivalent select in SQL:
   *       SELECT * FROM doctor WHERE at_service IN
   *            (SELECT id_service FROM location_service WHERE id_location=@idLoc)
   * @param  {function} retFunction  [Callback function]
   * @param  {Int} [idLoc] [Parameter @idLoc of the query]
   * @param  {String} [order = null] [Parameter @order of the query]
   */
  selectByLocation: function (retFunction, idLoc, order = null) {
    let locParam = {
      objType: "location_service",
      idname: "id_location",
      id: idLoc,
      column: "id_service"
    };
    let docParam = {
      idsubquery: "at_service",
      subquery: locParam,
      orderBy: order
    };
    database.select("doctor", retFunction, docParam);
  }
}
