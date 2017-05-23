//database module

const initDataFolder = "../other/";
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

const doctorDb = require("./database/doctor.js")(sqlDb, initDataFolder);
const serviceDb = require("./database/service.js")(sqlDb, initDataFolder);
const areaDb = require("./database/area.js")(sqlDb, initDataFolder);
const locationDb = require("./database/location.js")(sqlDb, initDataFolder);
const otherDb = require("./database/other.js")(sqlDb, initDataFolder);


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
