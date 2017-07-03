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
      let serviceList = require(initData + "service.json");

      //Create table structure for Services
      dbConnection.schema.hasTable("service").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("service", table => {
              table.increments('id').primary();
              table.string("name");
              table.text("description");
              table.text("price");
              table.text("promotion");
              table.integer("celebrity");
              table.integer("doc_resp")
              table.integer("area");
            })
            .then(() => {
              //fill the table just created
              Promise.all(
                _.map(serviceList, s => {
                  return dbConnection("service").insert(s);
                })
              );
              console.log("Services loaded");
            });
        } else {
          console.log("Services are already loaded");
        }
      });
    });
  },

  /**
   * Select the services from the db
   * equivalent select in SQL: SELECT * FROM service LIMIT @limit OFFSET @start ORDERBY @orderby
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
    database.select("service", retFunction, param);
  },

  /**
   * Select the service from the db where the id is the id passed
   * equivalent select in SQL: SELECT * FROM service WHERE id=@id
   * @param  {function} retFunction  [Callback function]
   * @param  {Int} [id] [Parameter @id of the query]
   */
  selectById: function (retFunction, id) {
    let param = {
      id: id,
      idname: "id"
    };
    database.select("service", retFunction, param);
  },
  /**
   * Select the service that has a specific doctor as responsible
   * equivalent select in SQL: SELECT * FROM service WHERE doc_resp=@idResp
   * @param  {function} retFunction  [Callback function]
   * @param  {Int} [idResp] [Parameter @id of the query]
   */
  selectByResponsible: function (retFunction, idResp) {
    let param = {
      id: idResp,
      idname: "doc_resp"
    };
    database.select("service", retFunction, param);
  },
  /**
   * Select the services that are in a specific location
   * equivalent select in SQL:
   *        SELECT * FROM service WHERE id IN
   *              (SELECT id_service FROM location_service WHERE id_location=@idLoc)
   * @param  {function} retFunction  [Callback function]
   * @param  {Int} [idLoc] [Parameter @idLoc of the query]
   */
  selectByLocation: function (retFunction, idLoc) {
    let locParam = {
      objType: "location_service",
      idname: "id_location",
      id: idLoc,
      column: "id_service"
    };
    let serviceParam = {
      idsubquery: "id",
      subquery: locParam
    };
    database.select("service", retFunction, serviceParam);
  }
}
