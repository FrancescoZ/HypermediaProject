const database=require("./database.js");

module.exports ={
  init:function(){
    database.init(function(dbConnection,initData,_){
      let areaList = require(initData + "area.json");
      let areaDoctorList = require(initData + "areaDoctor.json");

      //Areas
      dbConnection.schema.hasTable("area").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("area", table => {
              table.increments('id').primary();
              table.string("name");
              table.text("info");
              table.integer("celebrity");
            })
            .then(() => {
              //fill the table just created
              Promise.all(
                _.map(areaList, a => {
                  return dbConnection("area").insert(a);
                })
              );
              console.log("Area loaded");
            });
          } else {
            console.log("Area are already loaded");
          }
      });

      //Area' doctorList
      dbConnection.schema.hasTable("area_doctor").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("area_doctor", table => {
              table.int('id_doctor').primary();
              table.int("id_area").primary();
            })
            .then(() => {
              //fill the table just created
              Promise.all(
                _.map(areaDoctorList, d => {
                  return dbConnection("area_doctor").insert(d);
                })
              );
              console.log("Doctor's areas loaded");
            });
          } else {
            console.log("Doctor's areas are already loaded");
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
    database.select("area",retFunction,param);
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
    database.select("area",retFunction,param);
  },
  selectByDoctor:function(retFunction,idDoc){
    //TODO Check the id
    let param={
      start:null,
      limit:null,
      orderBy: null,
      id:idDoc,
      idname:"id_doctor"
    };
    database.select("area_doctor",function(areaIds){
      var areas=[];
      areaIds.foreach(function(el){areas.append(el.id_area);});
      let param={
        start:null,
        limit:null,
        orderBy: null,
        ids:areas,
        idname:"id"
      };
      database.select("area",retFunction,param);
    },param);
  }
}
