//database module
// il modulo ha lo scopo di astrarre la tecnologia del database usata, in particolare questo modulo viene usato dai vari
// controller per richiedere le diverse righe
const initDataFolder = "./init/";

//sqlLite module
const sqlDbFactory = require("knex");
//paser from json to sqlDb module
const _ = require("lodash");

//Create the connection with the db
const sqlDb = sqlDbFactory({
  client: "sqlite3",
  debug: true,
  useNullAsDefault: true,
  connection: {
    filename: '../' + "hospital.sqlite"
  }
});

//Submodule to keep the source small and clear, each one correspond to an entity in the Db
//The connection string is passed and the folder were to find the file fo the initialization
const doctorDb = require("./doctor.js")(sqlDb, initDataFolder);
const serviceDb = require("./service.js")(sqlDb, initDataFolder);
const areaDb = require("./area.js")(sqlDb, initDataFolder);
const locationDb = require("./location.js")(sqlDb, initDataFolder);
const otherDb = require("./other.js")(sqlDb, initDataFolder);

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
  /*
  * Select a group of objType with the specified parameters
  * objType: the entity we are looking for
  * start: the number from were to start
  * limit: the max number of obj to return
  * params: a vector with the detail of the query as:
  *   params[0]: ID
  *   params[1]:
  * retFunction: the function to asynchronsly return the results
  */
  select : function(objType,retFunction,errFunction=null,start=null,limit=null,orderBy=null,params=null){
    switch(objType){
      case "news":
        otherDb.selectNews(start, limit,  retFunction, errFunction);
        break;
      case "faq":
        otherDb.selectFaqs(start, limit, retFunction, errFunction);
        break;
      case "doctor":
        doctorDb.select(start, limit, retFunction, errFunction, orderBy);
        break;
      case "service":
        serviceDb.select(start, limit, retFunction, errFunction, orderBy);
        break;
      case "area":
        areaDb.select(start, limit, retFunction, errFunction, orderBy);
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
