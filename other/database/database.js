//database module

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
    filename: initDataFolder + "hospital.sqlite"
  }
});

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
  insert : function(){},
  delete : function(){},
  update : function(){}
};