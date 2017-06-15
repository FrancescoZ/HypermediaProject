///////////////////////////////////////// RESERVATION & CONTACT /////////////////////////////////////////

const comDb = require("./database/comunicationDb.js");
const utilities = require("./utilities.js");

module.exports = function(app,_){
  var comunicationDb  ={

    initCom:function(){
      comDb.init();
    }
  };

  app.post("/reservation", function(req, res) {
    console.log(req.body)
    let toappend = {
      name: req.body.name,
      mail: req.body.mail,
      phone: req.body.phone,
      note: req.body.note,
      date: req.body.date,
      service: req.body.service,
      time: utilities.getDateTime()
    };
    comDb.insertReservation(toappend,function(){
      res.send(200);
    });
  });

  app.post("/contact", function(req, res) {
    console.log(req.body)
    let toappend = {
      name: req.body.name,
      mail: req.body.mail,
      note: req.body.note,
      time: utilities.getDateTime()
    };
    comDb.insertContact(toappend,function(){
      res.send(200);
    });
  });

  return comunicationDb;
}
