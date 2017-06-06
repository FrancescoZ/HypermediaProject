// TODO da eliminare
const eglocation = {
  "id": 1,
  "name": "London Westminster",
  "address": "Westminster, Londra SW1A 0AA, Regno Unito",
  "info": "Morbi urna nulla, congue tempor posuere at, mollis ut est. Sed semper turpis ligula, quis consectetur tortor fringilla vel. Maecenas id neque ullamcorper nunc malesuada porta bibendum ac tortor. Fusce aliquam tincidunt felis. Sed commodo mollis libero a scelerisque. Nulla condimentum blandit nisl, vitae aliquet enim maximus ut. Suspendisse a efficitur orci. Suspendisse nec velit congue, blandit felis in, feugiat eros. Proin a eros sodales, placerat nibh at, aliquam turpis. Phasellus fermentum lobortis purus rhoncus porta. Sed lacus neque, tristique tempus nibh vitae, mollis rutrum nunc. Duis vestibulum augue in purus imperdiet fringilla. Quisque iaculis tortor lacus, viverra convallis erat auctor in. Sed vehicula felis nec turpis aliquam gravida.",
  "how_to": "Quisque non sapien ac metus feugiat consequat placerat et nunc. Vestibulum et diam in sapien egestas porttitor. Integer in ex et diam posuere pretium. Ut lacinia, libero non malesuada elementum, mi lectus consequat sapien, non tincidunt lectus erat sed elit. Sed vitae leo quis sapien aliquam porta. Sed at massa quis urna mattis ultricies. Donec purus massa, bibendum ac neque sed, scelerisque ullamcorper erat.",
  "lat": 51.5285582,
  "long": -0.2416991
}

// TODO da eliminare
const egservices = [
  {
    "id": 1,
    "name": "Vascular surgery",
    "description": "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
    "price": "100€",
    "promotion": "No promotions",
    "celebrity": 1
  },
  {
    "id": 2,
    "name": "Chemotherapy",
    "description": "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
    "price": "100€",
    "promotion": "No promotions",
    "celebrity": 2
  },
  {
    "id": 3,
    "name": "Electrocardiography",
    "description": "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
    "price": "100€",
    "promotion": "No promotions",
    "celebrity": 3
  },
  {
    "id": 4,
    "name": "Radiotherapy",
    "description": "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
    "price": "100€",
    "promotion": "No promotions",
    "celebrity": 4
  }
]

function init() {
  $('#location-info').show();
  $('#button-info').addClass("active")
  $('#location-map').hide();
  $('#button-map').removeClass("active")

  // TODO la location viene chiesta al server
  // TODO inizializzare foto della location
  document.getElementById("title").innerHTML = eglocation.name;
  document.getElementById("address").innerHTML = eglocation.address;
  document.getElementById("description").innerHTML = eglocation.info;
  document.getElementById("how-to").innerHTML = eglocation.how_to;
  // TODO il testo da mostrare dipende dalla pagina precedente
  document.getElementById("back-button").innerHTML = "&larr; Return to " + "list"

  // TODO i servizi vengono chiesti al server
  for (var i in egservices) {
    $('#services-panel').append(
      `<div class="col-sm-6 col-md-4"><h3>${egservices[i].name}</h3><p>${egservices[i].description}</p><p><a class="btn btn-info" onClick="clickService(${egservices[i].id})" role="button">View details &raquo;</a></p></div>`)
  }
}

function initMap() {
    var position = {}
    position['lat'] = eglocation.lat
    position['lng'] = eglocation.long
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: position,
    })
    var marker = new google.maps.Marker({
      position: position,
      map: map
    })
}

// TODO la funzione deve riportare nella pagina precedente
function goBack(){
  console.log("back")
}

function clickService(id) {
  // TODO il click sul servizio rimanda alla pagina del servizio
  console.log(id)  
}

function clickMap() {
  $('#location-info').hide();
  $('#button-info').removeClass("active")
  $('#location-map').show();
  $('#button-map').addClass("active")
  initMap()
  // TODO implementare api google maps
}

function clickInfo() {
  $('#location-info').show();
  $('#button-info').addClass("active")
  $('#location-map').hide();
  $('#button-map').removeClass("active")
}

init();