module.exports = {
  convertOrder:function(value){
    let order=parseInt(value);
    switch(order){
      case 1:
        return "celebrity";
      case 2:
        return "name";
      default:
        return undefined;
    }
  },
  errorManager:function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  },
  getDateTime: function(){
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
  }
}
