module.exports = function(dbConnection, initData,_){
  var areaDbModule = {
    init : function(){
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
                  delete a.id;
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
                _.map(serviceAreaList, d => {
                  delete d.id;
                  return dbConnection("area_doctor").insert(d);
                })
              );
              console.log("Doctor's areas loaded");
            });
          } else {
            console.log("Doctor's areas are already loaded");
          }
      });

    },
    select:function(start,limit,retFunction,errFunction,orderBy=null){
      let selectArea = dbConnection("area");
      if (orderBy!=null)
        selectArea = selectArea.orderBy(orderBy, "asc");
      //Send select to database
      selectArea.limit(limit).offset(start).then(result => {
        retFunction(result);
      });
    }
  };
  return areaDbModule
}
