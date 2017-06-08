///////////////////////////////////////// AREAs /////////////////////////////////////////
module.exports = function(app,_){
  const areaDb = require("./database/areaDb.js");

  var areaModule = {
    initAreas: function (){
      areaDb.init();
    }
  };
  return areaModule;
}
