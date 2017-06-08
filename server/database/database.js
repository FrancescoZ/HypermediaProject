//database module
// il modulo ha lo scopo di astrarre la tecnologia del database usata, in particolare questo modulo viene usato dai vari
// controller per richiedere le diverse righe
const initDataFolder = "../../other/init/";

//sqlLite module
const sqlDbFactory = require("knex");
//paser from json to sqlDb module
const _ = require("lodash");
const process = require("process");

//Create the connection with the db
let sqlDb;
if (process.env.TEST) {
  sqlDb = sqlDbFactory({
    client: "sqlite3",
    debug: true,
    useNullAsDefault: true,
    connection: {
      filename: './other/' + "hospital.sqlite"
    }
  });
} else {
  sqlDb = sqlDbFactory({
      debug: true,
      client: "pg",
      connection: process.env.DATABASE_URL,
      ssl: true
}); }

module.exports = {

  //Initialisate the Database
  init : function(initFunction) {
    initFunction(sqlDb,initDataFolder,_);
  },
  /**
   * Send a select on the right module of the database
   * @param  {string}   objType             [Table on the database, NB EXACT NAME]
   * @param  {function} retFunction         [return function to send data asynchronsly]
   * @param  {obj}    [params=null]       [array of parameter to pass to the database]
   *                                          start- start value to search for,
   *                                          limit- limit value to search for,
   *                                          orderBy- order to return the results,
   *                                          id- if defined, the id of the row to search for,
   *                                          idname- if defined, the name of the id to search for
   */
  select : function(objType,retFunction,params){
    let start=params.start ? params.start : undefined;
    let limit=params.limit ? params.start : undefined;
    let orderBy=params.orderBy ? params.orderBy : undefined;
    let id=params.id ? params.id : undefined;;
    let idname=params.idname ? params.idname : undefined;;
    let selectQuery=sqlDb(objType);
    selectQuery = typeof limit != "undefined" ? selectQuery.limit(limit) : selectQuery;
    selectQuery = typeof start != "undefined" ? selectQuery.offset(start) : selectQuery;
    selectQuery = typeof orderBy != "undefined" ? selectQuery.orderBy(orderBy, "asc") : selectQuery;
    selectQuery = (typeof idname != "undefined" && typeof id != "undefined") ? selectQuery.where(idname,id) : selectQuery;
    selectQuery.then(result => {
      retFunction(result);
    });
  },
  insert : function(){},
  delete : function(){},
  update : function(){}
};
