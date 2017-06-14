const database=require("./database.js");

module.exports ={
  init:function(){
    database.init(function(dbConnection,initData,_){
      let areaList = require(initData + "area.json");

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
              table.integer("doc_resp");
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
      id:id,
      idname:"id"
    };
    database.select("area",retFunction,param);
  },
  selectByDoctor:function(retFunction,idDoc){
  },
  selectByResponsible: function(retFunction,idResp){
    let param={
      id:idResp,
      idname:"doc_resp"
    };
    database.select("area",retFunction,param);
  }
}
