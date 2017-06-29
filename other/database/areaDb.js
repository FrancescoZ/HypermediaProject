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
      let areaList = require(initData + "area.json");

      //Create table structure for Areas
      dbConnection.schema.hasTable("area").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("area", table => {
              table.increments('id').primary();
              table.string("name");
              table.text("info");
              table.integer("celebrity");
              table.integer("doc_resp");
            })
            .then(() => {
              //fill the table just created
              Promise.all(
                _.map(areaList, a => {
                  return dbConnection("area").insert(a);
                })
              );
              console.log("Area loaded");
            });
        } else {
          console.log("Area are already loaded");
        }
      });
    });
  },

  /**
   * Select the areas from the db
   * equivalent select in SQL: SELECT * from area LIMIT @limit OFFSET @start ORDERBY @orderby
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
    database.select("area", retFunction, param);
  },

  /**
   * Select the area from the db where the id is the id passed
   * equivalent select in SQL: SELECT * from area WHERE id=@id
   * @param  {function} retFunction  [Callback function]
   * @param  {Int} [id=null] [Parameter @id of the query]
   */
  selectById: function (retFunction, id) {
    let param = {
      id: id,
      idname: "id"
    };
    database.select("area", retFunction, param);
  },

  /**
   * Select the area that has a specific doctor as responsible
   * equivalent select in SQL: SELECT * FROM area WHERE doc_resp=@idResp
   * @param  {function} retFunction  [Callback function]
   * @param  {Int} [idResp] [Parameter @idResp of the query]
   */
  selectByResponsible: function (retFunction, idResp) {
    let param = {
      id: idResp,
      idname: "doc_resp"
    };
    database.select("area", retFunction, param);
  }
}
