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
   * Create a select on the right module of the database, this function allow to send  a select in a select
   * @param  {string}   objType             [Table on the database, NB EXACT NAME]
   * @param  {obj}    [params=null]         [array of parameter to pass to the database]
   *                                          start- start value to search for,
   *                                          limit- limit value to search for,
   *                                          orderBy- order to return the results,
   *                                          id- if defined, the id of the row to search for,
   *                                          idname- if defined, the name of the id to search for
   * @return {sqlDb}                        [return the query to run on the database]
   */
  buildSelect:function(objType,params){
    let start=params.start!=null ? params.start : undefined;
    let limit=params.limit!=null ? params.limit : undefined;
    let orderBy=params.orderBy!=null ? params.orderBy : undefined;
    let id=params.id!=null ? params.id : undefined;;
    let idname=params.idname!=null ? params.idname : undefined;
    let column=params.column!=null ? params.column : undefined;

    let selectQuery=sqlDb(objType);
    selectQuery = typeof column != "undefined" ? selectQuery.select(column) : selectQuery;
    selectQuery = typeof limit != "undefined" ? selectQuery.limit(limit) : selectQuery;
    selectQuery = typeof start != "undefined" ? selectQuery.offset(start) : selectQuery;
    selectQuery = typeof orderBy != "undefined" ? selectQuery.orderBy(orderBy, "asc") : selectQuery;
    selectQuery = (typeof idname != "undefined" && typeof id != "undefined") ?
                                    selectQuery.where(idname,id) : selectQuery;
    return selectQuery;

  },
  buildQuery:function(objType,params){
    return typeof params.subquery != "undefined" ?
        this.buildSelect(objType,params).whereIn(params.idsubquery,
          this.buildQuery(params.subquery.objType,params.subquery))
        :
        this.buildSelect(objType,params);
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
   */
  select : function(objType,retFunction,params){
    params.subquery=params.subquery!=null ? params.subquery : undefined;
    let selectQuery=this.buildQuery(objType,params);
    selectQuery.then(result => {
      retFunction(result);
    });
  },

  insert : function(objType,obj,retFunction){
    sqlDb(objType).insert(obj).then(o => {
      retFunction(o);
    });

  },
  delete : function(){},
  update : function(){}
};
