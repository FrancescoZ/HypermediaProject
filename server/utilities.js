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
  }
}
