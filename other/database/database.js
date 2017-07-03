/*
 * The module is made to abstract the db level from all the other module. Doing this we can change the db module
 * without changing the other
 */
const initDataFolder = "./init/";

//sqlLite module
const sqlDbFactory = require("knex");
//paser from json to sqlDb module
const _ = require("lodash");
const process = require("process");

//Create the connection with the db
let sqlDb;
//sqlLit only for testing, doesn't work on server
if (process.env.TEST) {
  sqlDb = sqlDbFactory({
    client: "sqlite3",
    debug: true,
    useNullAsDefault: true,
    connection: {
      filename: './hospital.sqlite'
    }
  });
} else {
  sqlDb = sqlDbFactory({
    debug: true,
    client: "pg",
    connection: process.env.DATABASE_URL,
    ssl: true
  });
}

module.exports = {

  //Initialisate the Database
  init: function (initFunction) {
    initFunction(sqlDb, initDataFolder, _);
  },
  /**
   * Create a select on the right module of the database, this function allow to send  a select in a select
   * ex: SELECT @column FROM @objType LIMIT @limit OFFSET @start ORDERBY @orderby WHERE @idname=@id
   * @param  {string}   objType             [Table on the database, NB EXACT NAME]
   * @param  {obj}    [params=null]         [array of parameter to pass to the database]
   *                                          start- start value to search for,
   *                                          limit- limit value to search for,
   *                                          orderBy- order to return the results,
   *                                          id- if defined, the id of the row to search for,
   *                                          idname- if defined, the name of the id to search for
   *                                          column- if defined, indicate the name of the colum to select
   * @return {sqlDb}                        [return the query to run on the database]
   */
  buildSelect: function (objType, params) {
    //Check the consistency of the parameters
    let start = params.start != null ? params.start : undefined;
    let limit = params.limit != null ? params.limit : undefined;
    let orderBy = params.orderBy != null ? params.orderBy : undefined;
    let id = params.id != null ? params.id : undefined;;
    let idname = params.idname != null ? params.idname : undefined;
    let column = params.column != null ? params.column : undefined;

    //build the query
    let selectQuery = sqlDb(objType);
    //if a parameter is define use else skip it
    selectQuery = typeof column != "undefined" ? selectQuery.select(column) : selectQuery;
    selectQuery = typeof limit != "undefined" ? selectQuery.limit(limit) : selectQuery;
    selectQuery = typeof start != "undefined" ? selectQuery.offset(start) : selectQuery;
    selectQuery = typeof orderBy != "undefined" ? selectQuery.orderBy(orderBy, "asc") : selectQuery;
    selectQuery = (typeof idname != "undefined" && typeof id != "undefined") ?
      selectQuery.where(idname, id) : selectQuery;
    return selectQuery;

  },
  /**
   * Create a select that contains the IN clause, it is recursive so it's possible to create a select in a selct etc
   * ex: SELECT @column FROM @objType LIMIT @limit OFFSET @start ORDERBY @orderby WHERE @idsubquery IN (subquery)
   * @param  {string}   objType             [Table on the database, NB EXACT NAME]
   * @param  {function} retFunction         [return function to send data asynchronsly]
   * @param  {obj}    [params=null]       [array of parameter to pass to the database]
   *                                          start- start value to search for,
   *                                          limit- limit value to search for,
   *                                          orderBy- order to return the results,
   *                                          id- if defined, the id of the row to search for,
   *                                          idname- if defined, the name of the id to search for
   *                                          subquery- if defined, list for the where clause
   *                                          column- if defined, indicate the name of the colum to select
   *                                          idsubquery- if defined, indicate the column to put in the IN structure
   */
  buildQuery: function (objType, params) {
    return typeof params.subquery != "undefined" ?
      this.buildSelect(objType, params).whereIn(params.idsubquery,
        this.buildQuery(params.subquery.objType, params.subquery)) :
      this.buildSelect(objType, params);
  },
  /**
   * Send a select on the right tab of the database
   * @param  {string}   objType             [Table on the database, NB EXACT NAME]
   * @param  {function} retFunction         [return function to send data asynchronsly]
   * @param  {obj}    [params=null]       [array of parameter to pass to the database]
   *                                          start- start value to search for,
   *                                          limit- limit value to search for,
   *                                          orderBy- order to return the results,
   *                                          id- if defined, the id of the row to search for,
   *                                          idname- if defined, the name of the id to search for
   *                                          subquery- if defined, list for the where clause
   *                                          column- if defined, indicate the name of the colum to select
   *                                          idsubquery- if defined, indicate the column to put in the IN structure
   */
  select: function (objType, retFunction, params) {
    params.subquery = params.subquery != null ? params.subquery : undefined;
    let selectQuery = this.buildQuery(objType, params);
    selectQuery.then(result => {
      retFunction(result);
    });
  },
  /**
   * Send a INSERT on the table @objType, the structure of object must match the structure of the table
   * @param  {string}   objType             [Table on the database, NB EXACT NAME]
   * @param  {Obj} obj         [The object to insert into the db, must have the same structure of the table]
   * @param  {function} retFunction         [return function to send data asynchronsly]
   */
  insert: function (objType, obj, retFunction) {
    sqlDb(objType).insert(obj).then(o => {
      retFunction(o);
    });

  }
};
