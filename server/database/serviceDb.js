const database=require("./database.js");

module.exports = {
  init:function(){
    database.init(function(dbConnection,initData,_){
      let serviceList = require(initData + "service.json");

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
              table.integer("area");
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
