module.exports = function(dbConnection, initData,_){
  var serviceDbModule = {
    init : function(){
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
                  delete s.id;
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
                  delete d.id;
                  return dbConnection("service_area").insert(d);
                })
              );
              console.log("Service's areas loaded");
            });
          } else {
            console.log("Service's areas are already loaded");
          }
      });

    },
    select:function(start,limit,retFunction,errFunction,orderBy=null){
      let selectService = dbConnection("service");
      if (orderBy!=null)
        selectService = selectService.orderBy(orderBy, "asc");
      //Send select to database
      selectService.limit(limit).offset(start).then(result => {
        retFunction(result);
      });
    }
  };
  return serviceDbModule;

}
