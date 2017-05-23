module.exports = function(dbConnection, initData){
  var otherDbModule ={
    init : function(){
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
                  delete f.id;
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
              table.string("image");
              table.text("text");
            })
            .then(() => {
              //fill the table just created
              Promise.all(
                _.map(newsList, n => {
                  delete n.id;
                  return dbConnection("news").insert(n);
                })
              );
              console.log("News loaded");
            });
          } else {
            console.log("News are already loaded");
          }
      });

    }
  };
  return otherDbModule;
}
