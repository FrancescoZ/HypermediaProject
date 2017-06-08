const database=require("./database.js");

module.exports = {
  init:function(){
    database.init(function(dbConnection,initData,_){
      let serviceList = require(initData + "service.json");
      let serviceAreaList = require(initData + "serviceArea.json");

      //Services
      dbConnection.schema.hasTable("service").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("service", table => {
              table.increments('id').primary();
              table.string("name");
              table.text("description");
              table.text("price");
              table.text("promotion");
              table.integer("celebrity");
            })
            .then(() => {
              //fill the table just created
              Promise.all(
                _.map(serviceList, s => {
                  return dbConnection("service").insert(s);
                })
              );
              console.log("Services loaded");
            });
          } else {
            console.log("Services are already loaded");
          }
      });

      //Services's area
      dbConnection.schema.hasTable("service_area").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("service_area", table => {
              table.int('id_service').primary();
              table.int("id_area").primary();
            })
            .then(() => {
              //fill the table just created
              Promise.all(
                _.map(serviceAreaList, d => {
                  return dbConnection("service_area").insert(d);
                })
              );
              console.log("Service's areas loaded");
            });
          } else {
            console.log("Service's areas are already loaded");
          }
      });
    });
  },
  ///////////////////////////////////////// SELECT ///////////////////////////
  select:function(retFunction,start=null,limit=null,order=null){
    //Check the parameter
    let param={
      start:start,
      limit:limit,
      orderBy: order
    };
    database.select("service",retFunction,param);
  },
  selectById:function(retFunction,id){
    //TODO Check the id
    let param={
      start:null,
      limit:null,
      orderBy: null,
      id:id,
      idname:"id"
    };
    database.select("service",retFunction,param);
  }
}
