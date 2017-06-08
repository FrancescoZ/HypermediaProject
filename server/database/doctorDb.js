const database=require("./database.js");

module.exports = {
  init:function(){
    database.init(function(dbConnection,initData,_){
      let doctorServiceList = require(initData + "docService.json");
      let doctorList = require(initData + "doc.json");
      //Doctors
      dbConnection.schema.hasTable("doctor").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
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
              table.integer("celebrity");
            })
            .then(() => {
              //fill the table just created
              Promise.all(
                _.map(doctorList, d => {
                  return dbConnection("doctor").insert(d);
                })
              );
              console.log("Doctors loaded");
            });
          } else {
            console.log("Doctors are already loaded");
          }
      });
      //Doctors's services
      dbConnection.schema.hasTable("doctor_service").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("doctor_service", table => {
              table.int('id_doctor').primary();
              table.int("id_service").primary();
            })
            .then(() => {
              //fill the table just created
              Promise.all(
                _.map(doctorServiceList, d => {
                  return dbConnection("doctor_service").insert(d);
                })
              );
              console.log("Doctors's services loaded");
            });
          } else {
            console.log("Doctors's services are already loaded");
          }
      });
    });
  },
}
