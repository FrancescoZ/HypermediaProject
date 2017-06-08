module.exports = {
  convertOrder:function(value){
    let order=parseInt(value);
    switch(order){
      case 1:
        return "celebrity";
      case 2:
        return "name";
      default:
        return null;
    }
  }
}
