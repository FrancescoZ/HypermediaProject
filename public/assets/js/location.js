//========================================
const eglocations = [
  {
    "id": 1,
    "name": "London Westminster",
    "address": "Westminster, Londra SW1A 0AA, Regno Unito",
    "lat": 51.5285582,
    "long": -0.2416991
  },
  {
    "id": 2,
    "name": "Abbazia di Westminster",
    "address": "20 Deans Yd, Westminster, London SW1P 3PA, Regno Unito",
    "lat": 30.5285582,
    "long": -0.2416991
  },
  {
    "id": 3,
    "name": "Buckingham Palace",
    "address": "Westminster, Londra SW1A 1AA, Regno Unito",
    "lat": 10.5285582,
    "long": -50.2416991
  }
]

const info = "Morbi urna nulla, congue tempor posuere at, mollis ut est. Sed semper turpis ligula, quis consectetur tortor fringilla vel. Maecenas id neque ullamcorper nunc malesuada porta bibendum ac tortor. Fusce aliquam tincidunt felis. Sed commodo mollis libero a scelerisque. Nulla condimentum blandit nisl, vitae aliquet enim maximus ut. Suspendisse a efficitur orci. Suspendisse nec velit congue, blandit felis in, feugiat eros. Proin a eros sodales, placerat nibh at, aliquam turpis. Phasellus fermentum lobortis purus rhoncus porta. Sed lacus neque, tristique tempus nibh vitae, mollis rutrum nunc. Duis vestibulum augue in purus imperdiet fringilla. Quisque iaculis tortor lacus, viverra convallis erat auctor in. Sed vehicula felis nec turpis aliquam gravida."

const how_to = "Quisque non sapien ac metus feugiat consequat placerat et nunc. Vestibulum et diam in sapien egestas porttitor. Integer in ex et diam posuere pretium. Ut lacinia, libero non malesuada elementum, mi lectus consequat sapien, non tincidunt lectus erat sed elit. Sed vitae leo quis sapien aliquam porta. Sed at massa quis urna mattis ultricies. Donec purus massa, bibendum ac neque sed, scelerisque ullamcorper erat."

const egservices = [
  {
    "id": 1,
    "name": "Vascular surgery"
  },
  {
    "id": 2,
    "name": "Chemotherapy"
  },
  {
    "id": 3,
    "name": "Electrocardiography"
  },
  {
    "id": 4,
    "name": "Radiotherapy"
  }
]

const description = "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
//========================================

const params = urlParams()

function fetchLocation() {
  var location = findFromJSONArray(params['id'], eglocations)
  if (location === undefined) {
    return false
  } else {
    initLocation(location)
    return true
  }
}

function fetchServices() {
  egservices.map((item, index) => {
    initServices(item, index)
  })
}

//========================================

var position

function init() {
  $('#location-info').show()
  $('#button-info').addClass("active")
  $('#location-map').hide()
  $('#button-map').removeClass("active")
  if (fetchLocation())
    fetchServices()
}

function initLocation(item) {
  $('#name').html(item.name)
  $('#address').html(item.address)
  $('#description').html(info)
  $('#how-to').html(how_to)

  if (params['back'] === undefined) {
    $('#back-button').hide()
  } else {
    $('#back-button').html("&larr; Return to " + params['back'])
  }
  position = {}
  position['lat'] = item.lat
  position['lng'] = item.long
}

function initServices(item, index) {
  $('#services-panel').append(
    `<div class="col-sm-6 col-md-4 featurette">
      <h3>${item.name}</h3>
      <p>${description}</p>
      <p><a class="btn btn-info" onclick="clickService(${item.id})" role="button">View details &raquo;</a></p>
    </div>`)
}

function initMap() {
  if (position === undefined) {
    return
  }
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: position
  })
  var marker = new google.maps.Marker({
    position: position,
    map: map
  })
}

function clickInfo() {
  $('#location-info').show()
  $('#button-info').addClass("active")
  $('#location-map').hide()
  $('#button-map').removeClass("active")
}

function clickMap() {
  $('#location-info').hide()
  $('#button-info').removeClass("active")
  $('#location-map').show()
  $('#button-map').addClass("active")
  initMap()
}

const back_ref = `&back=location`

function clickService(id) {
  document.location.href = `/service.html?id=${id}` + back_ref
}

init()
