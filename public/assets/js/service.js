// TODO da eliminare
const eglocations = [
  {
    "id": 1,
    "name": "London Westminster"
  },
  {
    "id": 2,
    "name": "Firenze"
  },
  {
    "id": 3,
    "name": "Pisa"
  }
]

// TODO da eliminare
const egservice = {
  "id": 1,
  "name": "Vascular surgery",
  "description": "Morbi urna nulla, congue tempor posuere at, mollis ut est. Sed semper turpis ligula, quis consectetur tortor fringilla vel. Maecenas id neque ullamcorper nunc malesuada porta bibendum ac tortor. Fusce aliquam tincidunt felis. Sed commodo mollis libero a scelerisque. Nulla condimentum blandit nisl, vitae aliquet enim maximus ut. Suspendisse a efficitur orci. Suspendisse nec velit congue, blandit felis in, feugiat eros. Proin a eros sodales, placerat nibh at, aliquam turpis. Phasellus fermentum lobortis purus rhoncus porta. Sed lacus neque, tristique tempus nibh vitae, mollis rutrum nunc. Duis vestibulum augue in purus imperdiet fringilla. Quisque iaculis tortor lacus, viverra convallis erat auctor in. Sed vehicula felis nec turpis aliquam gravida.",
  "responsible": "Marco Polo",
  "price": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut nibh iaculis, volutpat ante at, lacinia arcu. Nunc congue lorem pharetra nibh sodales gravida. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut velit volutpat, semper metus vel, volutpat dui. Nulla dapibus pulvinar sem tempor posuere. Proin efficitur posuere commodo. Vestibulum vitae vehicula dui, at bibendum lacus. Pellentesque id est facilisis, pellentesque risus at, molestie neque. Duis venenatis ligula sed eleifend fermentum. Ut malesuada ante turpis, sit amet ultricies ante efficitur nec. Mauris rhoncus consectetur orci nec sagittis.",
  "promotion": "Ut elementum nisi sed erat congue lacinia. Maecenas nec eros arcu. Quisque placerat urna felis. Suspendisse cursus magna congue magna fringilla, et fringilla ligula facilisis. Sed molestie, sem in imperdiet mattis, dolor ipsum fringilla tortor, vestibulum tristique tortor diam et arcu. Cras nec rhoncus turpis, gravida venenatis sapien. Phasellus dignissim efficitur faucibus. Pellentesque vel efficitur tortor. Proin odio sapien, interdum sed dolor a, vestibulum rutrum justo. Suspendisse neque metus, iaculis ut mauris eget, pellentesque venenatis est. Aenean et venenatis ligula.",
  "area": "Vascular and vein"
}

const egdoctors = [
  {
    "id": 1,
    "name": "Marco Polo"
  },
  {
    "id": 2,
    "name": "Ezio Auditore"
  },
  {
    "id": 3,
    "name": "Giovanni Auditore"
  },
  {
    "id": 4,
    "name": "Lorenzo De Medici"
  }
]

function init() {
  $('#service-info').show();
  $('#button-info').addClass("active")
  $('#service-prices').hide();
  $('#button-prices').removeClass("active")

  // TODO la location viene chiesta al server
  // TODO inizializzare foto della location
  document.getElementById("title").innerHTML = egservice.name;
  document.getElementById("area").innerHTML = `<a href="#" onclick="clickArea('${egservice.area}'); return false;">${egservice.area}</a>`;
  document.getElementById("description").innerHTML = egservice.description;
  document.getElementById("price").innerHTML = egservice.price;
  document.getElementById("promotion").innerHTML = egservice.promotion;
  // TODO il testo da mostrare dipende dalla pagina precedente
  document.getElementById("back-button").innerHTML = "&larr; Return to " + "list"

  // TODO i servizi vengono chiesti al server
  for (var i in egdoctors) {
    if (i == 0) {
      $('#doctors-panel').append(
      `<div class="col-sm-6 col-md-3" style="text-align:center;"><img class="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" height="100" width="100"><h4>${egdoctors[i].name}</h4><p><a class="btn btn-primary" onClick="clickDoctor(${egdoctors[i].id})" role="button">View details &raquo;</a></p></div>`)
      continue
    }
    $('#doctors-panel').append(
      `<div class="col-sm-6 col-md-3" style="text-align:center;"><img class="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" height="100" width="100"><h4>${egdoctors[i].name}</h4><p><a class="btn btn-info" onClick="clickDoctor(${egdoctors[i].id})" role="button">View details &raquo;</a></p></div>`)
  }

  for (var i in eglocations) {
    $('#locations-panel').append(
      `<div class="col-sm-6 col-md-3" style="text-align:center;"><img class="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" height="100" width="100"><h4>${eglocations[i].name}</h4><p><a class="btn btn-info" onClick="clickLocation(${eglocations[i].id})" role="button">View details &raquo;</a></p></div>`)
  }
}

// TODO la funzione deve riportare nella pagina precedente
function goBack(){
  console.log("back")
}

function clickDoctor(id) {
  // TODO il click sul servizio rimanda alla pagina del servizio
  console.log(id)  
}

function clickLocation(id) {
  // TODO il click sul servizio rimanda alla pagina del servizio
  console.log(id)  
}

function clickArea(id) {
  // TODO il click sul servizio rimanda alla pagina del servizio
  console.log(id)  
}

function clickPrices() {
  $('#service-info').hide();
  $('#button-info').removeClass("active")
  $('#service-prices').show();
  $('#button-prices').addClass("active")
  // TODO implementare api google maps
}

function clickInfo() {
  $('#service-info').show();
  $('#button-info').addClass("active")
  $('#service-prices').hide();
  $('#button-prices').removeClass("active")
}

function book() {
  console.log("Book")
}

init();