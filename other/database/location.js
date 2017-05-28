module.exports = function(dbConnection, initData){
  var locationDbModule = {
    init : function(){
      let locationAreaList = require(initData + "locationArea.json");
      let locationList = require(initData + "location.json");

      //Locations
      dbConnection.schema.hasTable("locations").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
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
                  return dbConnection("location").insert(l);
                })
              );
              console.log("Locations loaded");
            });
          } else {
            console.log("Locations are already loaded");
          }
      });

      //location' area
      dbConnection.schema.hasTable("location_area").then(exists => {
        //check the existance
        if (!exists) {
          //if there isn't than create the structure
          dbConnection.schema
            .createTable("location_area", table => {
              table.int('id_location').primary();
              table.int("id_area").primary();
            })
            .then(() => {
              //fill the table just created
              Promise.all(
                _.map(serviceAreaList, d => {
                  delete d.id;
                  return dbConnection("location_area").insert(d);
                })
              );
              console.log("Location's areas loaded");
            });
          } else {
            console.log("Location's areas are already loaded");
          }
      });

    }
  };
  return locationDbModule;
}
