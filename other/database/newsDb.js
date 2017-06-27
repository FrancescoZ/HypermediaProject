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
      //initial data stored in json
      let newsList = require(initData + "news.json");

      //Create table structure for News
      dbConnection.schema.hasTable("news").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("news", table => {
              table.increments('id').primary();
              table.string("name");
              table.time("time");
              table.string("image");
              table.text("text");
              table.integer("celebrity");
            })
            .then(() => {
              //fill the table just created
              Promise.all(
                _.map(newsList, n => {
                  return dbConnection("news").insert(n);
                })
              );
              console.log("News loaded");
            });
        } else {
          console.log("News are already loaded");
        }
      });
    });
  },

  /**
   * Select the news from the db
   * equivalent select in SQL: SELECT * from news LIMIT @limit OFFSET @start ORDERBY @orderby
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
    database.select("news", retFunction, param);
  },

  /**
   * Select the news from the db where the id is the id passed
   * equivalent select in SQL: SELECT * from news WHERE id=@id
   * @param  {function} retFunction  [Callback function]
   * @param  {Int} [id=null] [Parameter @id of the query]
   */
  selectById: function (retFunction, id) {
    //TODO Check the id
    let param = {
      id: id,
      idname: "id"
    };
    database.select("news", retFunction, param);
  }
}
