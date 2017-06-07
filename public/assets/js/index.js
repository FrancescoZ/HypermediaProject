//========================================
const egnews = [
  {
    "id": 1,
    "title": 'Example headline.'
  },
  {
    "id": 2,
    "title": 'Another example headline.'
  },
  {
    "id": 3,
    "title": 'One more for good measure.'
  }
]

const caption = "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."

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

// TODO chiedere al server
function getNews() {
  return egnews
}

function fetchNews() {
  let start=0;
  let count=2;
  fetch('/news?start='+start+'&limit='+count)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      data.map(function(news,index){
        let clas= (index==0 ? "active" : "");
        $('#newsGalleryIndex').append('<li data-target="#newsGallery" data-slide-to="'+(index+1)+'" class="'+clas+'"></li>');
        $('#newsGalleryList').append(
          '<div class="item '+clas+'">'+
            '<img class="third-slide" src="'+news.image+'" alt="'+news.name+'">'+
            '<div class="container">'+
              '<div class="carousel-caption">'+
                '<h1>'+news.name+'</h1>'+
                '<p>'+news.text.substr(0,200)+'</p>'+
                '<!-- <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>-->'+
              '</div>'+
            '</div>'+
          '</div>');
      });
    });
}

function getServices() {
  return egservices
}

function getDoctors() {
  return egdoctors
}

function getLocations() {
  return eglocations
}

const sNews = getNews()
const sServices = getServices()
const sDoctors = getDoctors()
const sLocations = getLocations()

//========================================

function init() {
  initNews()
  initDoctors()
  initLocations()
  initServices()
}

function initNews() {
  for (var i in sNews) {
    if (i == 0) {
      $('#ind-carousel').append(`<li data-target="#myCarousel" data-slide-to="${i}" class="active"></li>`)
      $('#item-carousel').append(
        `<div class="item active">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Slide ${i}">
          <div class="container">
            <div class="carousel-caption">
              <h1>${sNews[i].title}</h1>
              <p>${caption}</p>
            </div>
          </div>
        </div>`)
      continue
    }
    $('#ind-carousel').append(`<li data-target="#myCarousel" data-slide-to="${i}"></li>`)
    $('#item-carousel').append(
      `<div class="item">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Slide ${i}">
          <div class="container">
            <div class="carousel-caption">
              <h1>${sNews[i].title}</h1>
              <p>${caption}</p>
            </div>
          </div>
        </div>`)
  }
}

function initServices() {
  for (var i in sServices) {
    $('#services-panel').append(
      `<div class="col-sm-6 col-md-4 featurette">
        <h2>${sServices[i].name}</h2>
        <p>${description}</p>
        <p><a class="btn btn-info" onClick="clickService(${sServices[i].id})" role="button">View details &raquo;</a></p>
      </div>`)
  }
}

function initDoctors() {
  for (var i in sDoctors) {
    $('#doctors-panel').append(
      `<div class="col-sm-6 col-md-4 featurette">
          <img class="img-circle center-img elevate" src="./assets/img/doctor.png" alt="Doctor ${sDoctors[i].name}" height="140" width="140">
          <h2>${sDoctors[i].name}</h2>
          <p><a class="btn btn-info" onClick="clickDoctor(${sDoctors[i].id})" role="button">View details &raquo;</a></p>
      </div>`)
  }
}

function initLocations() {
  for (var i in sLocations) {
    if (i != 0) {
      $('#locations-panel').append(`<hr>`)
    }
    if (i % 2 == 0) {
      $('#locations-panel').append(
      `<div class="row" >
          <div class="col-md-7">
            <h2 class="location-heading">${sLocations[i].name}<br><span class="text-muted h4">${sLocations[i].address}</span></h2>
            <p>${info.substr(0, 200) + "..."}</p>
            <p><a class="btn btn-info" onClick="clickLocation(${sLocations[i].id})" role="button">View details &raquo;</a></p>
          </div>
          <div class="col-md-5">
            <div class="map" id="map${sLocations[i].id}"></div>
          </div>
        </div>`)
    } else {
      $('#locations-panel').append(
      `<div class="row" >
          <div class="col-md-5">
            <div class="map" id="map${sLocations[i].id}"></div>
          </div>
          <div class="col-md-7">
            <h2 class="location-heading">${sLocations[i].name}<br><span class="text-muted h4">${sLocations[i].address}</span></h2>
            <p>${info.substr(0, 200) + "..."}</p>
            <p><a class="btn btn-info" onClick="clickLocation(${sLocations[i].id})" role="button">View details &raquo;</a></p>
          </div>
        </div>`)
    }
  }
}

function initMap() {
  for (var i in sLocations) {
    var position = {}
    position['lat'] = sLocations[i].lat
    position['lng'] = sLocations[i].long
    var map = new google.maps.Map(document.getElementById("map" + eglocations[i].id), {
      zoom: 15,
      center: position,
      disableDefaultUI: true,
      draggable: false,
      scrollwheel : false
    })
    var marker = new google.maps.Marker({position: position, map: map})
  }
}

function clickService(id) {
  document.location.href = `/service.html?id=${id}`
}

function clickDoctor(id) {
  document.location.href = `/doctor.html?id=${id}`
}

function clickLocation(id) {
  document.location.href = `/location.html?id=${id}`
}


init();