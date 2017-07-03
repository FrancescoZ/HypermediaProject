/***************************************************  UTILITIES  ******************************************************/

//Module to make javascript easier
const _ = require("lodash");
//Module to send emails
const nodemailer = require('nodemailer');

module.exports = {
  /**
   * Convert an index into a string to be used into an order by clause
   * @param  {Int} value [Number to convert]
   * @return {String}       [Converted string]
   */
  convertOrder: function (req) {
    var value = _.get(req, "query.orderBy", 0)
    //Check if it's an int
    let order = parseInt(value);
    switch (order) {
      case 1:
        return "celebrity";
      case 2:
        return "name";
      default:
        //in this case i will not use the clause ORDER BY
        return undefined;
    }
  },
  /**
   * Check if the id is an integer and if it's undefined
   * @param  {String} id [String to convert to id]
   * @return {Int}    [Convert to a valid id]
   */
  checkId: function (id) {
    var ret = id != undefined ? parseInt(id) : -1
    return ret;
  },
  /**
   * Return a general error for a wrong request, used by express
   * @param  {String}   err  [error]
   * @param  {Obj}   req  [User request from express]
   * @param  {Obj}   res  [User answer for express]
   * @param  {Function} next [description]
   */
  errorManager: function (err, req, res, next) {
    specificErrorManager(err.stack, 500, res, 'Something broke!');
  },
  /**
   * Manage all the error that happen during a session
   * @param  {String} err      [Error to display into the console]
   * @param  {Obj} res      [Express answer to the user]
   * @param  {Int} intError [Number of the error]
   * @param  {String} resError [Error to return to the user]
   */
  specificErrorManager: function (err, res, intError, resError) {
    //Check if the error for the user is different from the error for the console
    resError = typeof resError != "undefined" ? resError : err;
    //Write the error in the console
    this.consoleError(err);
    //Send an answer with the error
    res.status(intError).send(resError);
  },
  /**
   * Write into the console with a specific format and color
   * @param  {String} error [Error to write in red into the console]
   */
  consoleError: function (error) {
    console.error('\x1b[4m\x1b[31m%s\x1b[0m', err);
  },
  /**
   * Take the parameter from express URL and return it in an obj
   * @param  {Obj} req [epress request]
   * @return {Obj}     [[Obj of parameter to pass to the database]
   *                       start- start value to search for,
   *                       limit- limit value to search for,
   *                       orderBy- order to return the results,]
   */
  getSelectUrlParameters: function (req) {
    let parameters = {
      //Take the parameters from the query request and parse it
      start: parseInt(_.get(req, "query.start", 0)),
      limit: parseInt(_.get(req, "query.limit", 5)),
      orderBy: this.convertOrder(_.get(req, "query.orderBy", 0))
    };

    //Check consistency of the parameter and reverse it if it's incorrect
    if (parameters.start > parameters.limit) {
      this.consoleError("Sent wrong parameters");
      var temp = parameters.start;
      parameters.start = parameters.limit;
      parameters.limit = temp;
    }
    return parameters;
  },
  /**
   * Get the current date and time: YYYY-MM-DD HH:MM:SS
   * @return {String} [current dateTime]
   */
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
  /**
   * Send an email
   * @param  {Obj} mail [Mail to send]
   */
  sendMail: function (mail) {
    // create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      auth: {
        user: 'hospidif@gmail.com',
        pass: 'Polimi@2017'
      }
    })

    let mailOptions = {
      from: '"Hospidif" <hospidif@gmail.com>', // sender address
      to: mail.to, // list of receivers
      subject: mail.subject, // Subject line
      text: mail.text // plain text body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
    })
  }
}
