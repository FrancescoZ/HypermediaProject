const database=require("./database.js");

module.exports = {
  init:function(){
    database.init(function(dbConnection,initData,_){
      //initial data stored in json
      let faqList = require(initData + "faq.json");
      let newsList = require(initData + "news.json");

      //Faq
      dbConnection.schema.hasTable("faq").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
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
                  return dbConnection("faq").insert(f);
                })
              );
              console.log("Faqs loaded");
            });
          } else {
            console.log("Faqs are already loaded");
          }
      });
      //News
      dbConnection.schema.hasTable("news").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("news", table => {
              table.increments('id').primary();
              table.string("name");
              table.time("time");
              table.string("image");
              table.text("text");
              table.integer("celebrity");
            })
            .then(() => {
              //fill the table just created
              Promise.all(
                _.map(newsList, n => {
                  return dbConnection("news").insert(n);
                })
              );
              console.log("News loaded");
            });
          } else {
            console.log("News are already loaded");
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
    database.select("news",retFunction,param);
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
    database.select("news",retFunction,param);
  }
}