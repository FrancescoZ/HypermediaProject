//database module

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
    filename: "./hospital.sqlite"
  }
});

module.exports = {

  //Private function to load the initial relationships
  loadRelationships : function(){
    //initial data stored in json
    let doctorServiceList = require("./docService.json");
    let serviceAreaList = require("./serviceArea.json");
    let areaDoctorList = require("./areaDoctor.json");
    let locationAreaList = require("./locationArea.json");

    //Doctors's services
    sqlDb.schema.hasTable("doctor_service").then(exists => {
      //check the existance
      if (!exists) {
        //if there isn't than create the structure
        sqlDb.schema
          .createTable("doctor_service", table => {
            table.int('id_doctor').primary();
            table.int("id_service").primary();
          })
          .then(() => {
            //fill the table just created
            Promise.all(
              _.map(doctorServiceList, d => {
                delete d.id;
                return sqlDb("doctor_service").insert(d);
              })
            );
            console.log("Doctors's services loaded");
          });
        } else {
          console.log("Doctors's services are already loaded");
        }
    });
    //Services's area
    sqlDb.schema.hasTable("service_area").then(exists => {
      //check the existance
      if (!exists) {
        //if there isn't than create the structure
        sqlDb.schema
          .createTable("service_area", table => {
            table.int('id_service').primary();
            table.int("id_area").primary();
          })
          .then(() => {
            //fill the table just created
            Promise.all(
              _.map(serviceAreaList, d => {
                delete d.id;
                return sqlDb("service_area").insert(d);
              })
            );
            console.log("Service's areas loaded");
          });
        } else {
          console.log("Service's areas are already loaded");
        }
    });
    //Area' doctorList
    sqlDb.schema.hasTable("area_doctor").then(exists => {
      //check the existance
      if (!exists) {
        //if there isn't than create the structure
        sqlDb.schema
          .createTable("area_doctor", table => {
            table.int('id_doctor').primary();
            table.int("id_area").primary();
          })
          .then(() => {
            //fill the table just created
            Promise.all(
              _.map(serviceAreaList, d => {
                delete d.id;
                return sqlDb("area_doctor").insert(d);
              })
            );
            console.log("Doctor's areas loaded");
          });
        } else {
          console.log("Doctor's areas are already loaded");
        }
    });
    //location' area
    sqlDb.schema.hasTable("location_area").then(exists => {
      //check the existance
      if (!exists) {
        //if there isn't than create the structure
        sqlDb.schema
          .createTable("location_area", table => {
            table.int('id_location').primary();
            table.int("id_area").primary();
          })
          .then(() => {
            //fill the table just created
            Promise.all(
              _.map(serviceAreaList, d => {
                delete d.id;
                return sqlDb("location_area").insert(d);
              })
            );
            console.log("Location's areas loaded");
          });
        } else {
          console.log("Location's areas are already loaded");
        }
    });
  },
  //private funciton to load the inital entities
  loadEntityTables : function() {
    //initial data stored in json
    let doctorList = require("./doc.json");
    let serviceList = require("./service.json");
    let areaList = require("./area.json");
    let locationList = require("./location.json");
    let faqList = require("./faq.json");
    let newsList = require("./news.json");

    //Doctors
    sqlDb.schema.hasTable("doctor").then(exists => {
      //check the existance
      if (!exists) {
        //if there isn't than create the structure
        sqlDb.schema
          .createTable("doctor", table => {
            table.increments('id').primary();
            table.string("name");
            table.string("phone");
            table.string("email");
            table.text("bio");
            table.text("image");
            table.time("monday_hours");
            table.time("tuesday_hours");
            table.time("wensday_hours");
            table.time("thuesday_hours");
            table.time("friday_hours");
          })
          .then(() => {
            //fill the table just created
            Promise.all(
              _.map(doctorList, d => {
                delete d.id;
                return sqlDb("doctor").insert(d);
              })
            );
            console.log("Doctors loaded");
          });
        } else {
          console.log("Doctors are already loaded");
        }
    });
    //Services
    sqlDb.schema.hasTable("service").then(exists => {
      //check the existance
      if (!exists) {
        //if there isn't than create the structure
        sqlDb.schema
          .createTable("service", table => {
            table.increments('id').primary();
            table.string("name");
            table.text("description");
            table.text("price");
            table.text("promotion");
          })
          .then(() => {
            //fill the table just created
            Promise.all(
              _.map(serviceList, s => {
                delete s.id;
                return sqlDb("service").insert(s);
              })
            );
            console.log("Services loaded");
          });
        } else {
          console.log("Services are already loaded");
        }
    });
    //Locations
    sqlDb.schema.hasTable("locations").then(exists => {
      //check the existance
      if (!exists) {
        //if there isn't than create the structure
        sqlDb.schema
          .createTable("location", table => {
            table.increments('id').primary();
            table.string("name");
            table.string("address");
            table.text("info");
            table.text("how_to");
            table.float("long");
            table.float("lat");
          })
          .then(() => {
            //fill the table just created
            Promise.all(
              _.map(locationList, l => {
                delete l.id;
                return sqlDb("location").insert(l);
              })
            );
            console.log("Locations loaded");
          });
        } else {
          console.log("Locations are already loaded");
        }
    });
    //Areas
    sqlDb.schema.hasTable("area").then(exists => {
      //check the existance
      if (!exists) {
        //if there isn't than create the structure
        sqlDb.schema
          .createTable("area", table => {
            table.increments('id').primary();
            table.string("name");
            table.text("info");
          })
          .then(() => {
            //fill the table just created
            Promise.all(
              _.map(areaList, a => {
                delete a.id;
                return sqlDb("area").insert(a);
              })
            );
            console.log("Area loaded");
          });
        } else {
          console.log("Area are already loaded");
        }
    });
    //Faq
    sqlDb.schema.hasTable("faq").then(exists => {
      //check the existance
      if (!exists) {
        //if there isn't than create the structure
        sqlDb.schema
          .createTable("faq", table => {
            table.increments('id').primary();
            table.string("question");
            table.string("answer");
            table.string("category");
          })
          .then(() => {
            //fill the table just created
            Promise.all(
              _.map(faqList, f => {
                delete f.id;
                return sqlDb("faq").insert(f);
              })
            );
            console.log("Faqs loaded");
          });
        } else {
          console.log("Faqs are already loaded");
        }
    });
    //News
    sqlDb.schema.hasTable("news").then(exists => {
      //check the existance
      if (!exists) {
        //if there isn't than create the structure
        sqlDb.schema
          .createTable("news", table => {
            table.increments('id').primary();
            table.string("name");
            table.string("image");
            table.text("text");
          })
          .then(() => {
            //fill the table just created
            Promise.all(
              _.map(newsList, n => {
                delete n.id;
                return sqlDb("news").insert(n);
              })
            );
            console.log("News loaded");
          });
        } else {
          console.log("News are already loaded");
        }
    });
  },

  //Initialisate the Database
  init : function() {
    console.log(`Database is loading`);
    //verify or create table for all the entities in the db
    this.loadEntityTables();
    //verify or create table for the relationship between entities
    this.loadRelationships();
  }

};
