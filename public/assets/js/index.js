//========================================
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
  }
]

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
//========================================

function fetchNews() {
  let start = 0
  let count = 3
  fetch('/news?start=' + start + '&limit=' + count)
    .then(response => response.json())
    .then(data => {
      data.map((item, index) => {
        initNews(item, index)
      })
    })
}

function fetchServices() {
  egservices.map((item, index) => {
    initServices(item, index)
  })
}

function fetchDoctors() {
  egdoctors.map((item, index) => {
    initDoctors(item, index)
  })
}

function fetchLocations() {
  eglocations.map((item, index) => {
    initLocations(item, index)
  })
}

//========================================

function init() {
  fetchNews()
  fetchServices()
  fetchDoctors()
  fetchLocations()
}

function initNews(item, index) {
  if (index == 0) {
    $('#ind-carousel').append(`<li data-target="#myCarousel" data-slide-to="${index}" class="active"></li>`)
    $('#item-carousel').append(
      `<div class="item active">
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Slide ${index}">
        <div class="container">
          <div class="carousel-caption">
            <h1>${item.name}</h1>
            <p>${item.text}</p>
          </div>
        </div>
      </div>`)
    return
  }
  $('#ind-carousel').append(`<li data-target="#myCarousel" data-slide-to="${index}"></li>`)
  $('#item-carousel').append(
    `<div class="item">
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Slide ${index}">
        <div class="container">
          <div class="carousel-caption">
            <h1>${item.name}</h1>
            <p>${item.text}</p>
          </div>
        </div>
    </div>`)
}

function initServices(item, index) {
  $('#services-panel').append(
    `<div class="col-sm-6 col-md-4 featurette">
      <h2>${item.name}</h2>
      <p>${description}</p>
      <p><a class="btn btn-info" onclick="clickService(${item.id})" role="button">View details &raquo;</a></p>
    </div>`)
}

function initDoctors(item, index) {
  $('#doctors-panel').append(
    `<div class="col-sm-6 col-md-4 featurette">
        <img class="img-circle center-img elevate" src="./assets/img/doctor.png" alt="Doctor ${item.name}" height="140" width="140">
        <h2>${item.name}</h2>
        <p><a class="btn btn-info" onclick="clickDoctor(${item.id})" role="button">View details &raquo;</a></p>
    </div>`)
}

function initLocations(item, index) {
  if (index != 0) {
    $('#locations-panel').append(`<hr>`)
  }
  if (index % 2 == 0) {
    $('#locations-panel').append(
      `<div class="row" >
        <div class="col-md-7">
          <h2 class="location-heading">${item.name}<br><span class="text-muted h4">${item.address}</span></h2>
          <p>${info.substr(0, 200) + "..."}</p>
          <p><a class="btn btn-info" onclick="clickLocation(${item.id})" role="button">View details &raquo;</a></p>
        </div>
        <div class="col-md-5">
          <div class="map" id="map${item.id}"></div>
        </div>
      </div>`)
  } else {
    $('#locations-panel').append(
      `<div class="row" >
        <div class="col-md-5">
          <div class="map" id="map${item.id}"></div>
        </div>
        <div class="col-md-7">
          <h2 class="location-heading">${item.name}<br><span class="text-muted h4">${item.address}</span></h2>
          <p>${info.substr(0, 200) + "..."}</p>
          <p><a class="btn btn-info" onclick="clickLocation(${item.id})" role="button">View details &raquo;</a></p>
        </div>
      </div>`)
  }
  createMap(item)
}

function createMap(item) {
  var position = {}
  position['lat'] = item.lat
  position['lng'] = item.long
  var map = new google.maps.Map(document.getElementById(`map${item.id}`), {
    zoom: 15,
    center: position,
    disableDefaultUI: true,
    draggable: false,
    scrollwheel: false
  })
  var marker = new google.maps.Marker({
    position: position,
    map: map
  })
}

const back_ref = `&back=home`

function clickService(id) {
  document.location.href = `/service.html?id=${id}` + back_ref
}

function clickDoctor(id) {
  document.location.href = `/doctor.html?id=${id}` + back_ref
}

function clickLocation(id) {
  document.location.href = `/location.html?id=${id}` + back_ref
}

init()
