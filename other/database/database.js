//database module
// il modulo ha lo scopo di astrarre la tecnologia del database usata, in particolare questo modulo viene usato dai vari
// controller per richiedere le diverse righe
const initDataFolder = "./init/";

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

//Submodule to keep the source small and clear, each one correspond to an entity in the Db
//The connection string is passed and the folder were to find the file fo the initialization
const doctorDb = require("./doctor.js")(sqlDb, initDataFolder,_);
const serviceDb = require("./service.js")(sqlDb, initDataFolder,_);
const areaDb = require("./area.js")(sqlDb, initDataFolder,_);
const locationDb = require("./location.js")(sqlDb, initDataFolder,_);
const otherDb = require("./other.js")(sqlDb, initDataFolder,_);

module.exports = {

  //Initialisate the Database
  init : function() {
    console.log(`Database is loading`);
    doctorDb.init();
    serviceDb.init();
    areaDb.init();
    locationDb.init();
    otherDb.init();
    console.log("Database loaded");
  },
  /**
   * Send a select on the right module of the database
   * @param  {string}   objType             [Table on the database]
   * @param  {function} retFunction         [return function to send data asynchronsly]
   * @param  {function} errFunction  [error function to send error asynchronsly]
   * @param  {obj}    [params=null]       [array of parameter to pass to the database]
   *                                          start- start value to search for,
   *                                          limit- limit value to search for,
   *                                          orderBy- order to return the results,
   *                                          id- if defined, the id of the row to search for,
   */
  select : function(objType,retFunction,errFunction,params=null){
    let unique= params.id != null;
    switch(objType){
      case "news":
        otherDb.selectNews(params.start, params.limit,  retFunction, errFunction);
        break;
      case "faq":
        otherDb.selectFaqs(params.start, params.limit, retFunction, errFunction);
        break;
      case "doctor":
        doctorDb.select(params.start, params.limit, retFunction, errFunction, orderBy);
        break;
      case "service":
        serviceDb.select(params.start, params.limit, retFunction, errFunction, orderBy);
        break;
      case "area":
        areaDb.select(params.start, params.limit, retFunction, errFunction, orderBy);
        break;
      default:
        throw Exception();
        break;
    }
  },
  insert : function(){},
  delete : function(){},
  update : function(){}
};
