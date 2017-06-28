//Module to make javascript easier
const _ = require("lodash");

module.exports = {
  convertOrder: function (value) {
    let order = parseInt(value);
    switch (order) {
      case 1:
        return "celebrity";
      case 2:
        return "name";
      default:
        return undefined;
    }
  },
  checkId: function (id) {
    var ret = id != undefined ? parseInt(id) : -1
    return ret;
  },
  errorManager: function (err, req, res, next) {
    specificErrorManager(err.stack, 500, res, 'Something broke!');
  },
  specificErrorManager: function (err, res, intError, resError) {
    resError = typeof resError != "undefined" ? resError : err;
    this.consoleError(err);
    res.status(intError).send(resError);
  },
  consoleError: function (error) {
    console.error('\x1b[4m\x1b[31m%s\x1b[0m', err);
  },
  getSelectUrlParameters: function (req) {
    let parameters = {
      //Take the parameters from the query request and parse it
      start: parseInt(_.get(req, "query.start", 0)),
      limit: parseInt(_.get(req, "query.limit", 5)),
      orderBy: this.convertOrder(_.get(req, "query.orderBy", 0))
    };

    //Check the parameters for the areas
    if (parameters.start > parameters.limit) {
      this.consoleError("Sent wrong parameters");
      var temp = parameters.start;
      parameters.start = parameters.limit;
      parameters.limit = temp;
    }
    return parameters;
  },
  getDateTime: function () {
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
  },
}
