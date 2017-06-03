const locations = [
  {"id": 1,
   "name": "Buckingham Palace",
   "address": "Westminster, Londra SW1A 1AA, Regno Unito",
   "info": "",
   "how_to": "",
   "lat": 51.5285582,
   "long": -0.2416991
  },
  {"id": 1,
   "name": "Torre di Londra",
   "address": "St Katharine's & Wapping, Londra EC3N 4AB, Regno Unito",
   "info": "",
   "how_to": "",
   "lat": 51.5285582,
   "long": -0.2416991
  },
  {"id": 1,
   "name": "London Eye",
   "address": "Lambeth, Londra SE1 7PB, Regno Unito",
   "info": "",
   "how_to": "",
   "lat": 51.5285582,
   "long": -0.2416991
  }
]


function init() {
  $('#location-info').show();
  $('#button-info').addClass("active")
  $('#location-map').hide();
  $('#button-map').removeClass("active")

  var location = locations["0"]
  document.getElementById("title").innerHTML = location.name;
  document.getElementById("address").innerHTML = location.address;
}

function clickMap() {
  $('#location-info').hide();
  $('#button-info').removeClass("active")
  $('#location-map').show();
  $('#button-map').addClass("active")
}

function clickInfo() {
  $('#location-info').show();
  $('#button-info').addClass("active")
  $('#location-map').hide();
  $('#button-map').removeClass("active")
}

function updatePetsList() {

}

init();
