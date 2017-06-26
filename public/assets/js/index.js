const news_query = '/news/'
const services_query = '/services/'
const doctors_query = '/doctors/'
const locations_query = '/locations/'

function init() {
  fetchContent(news_query)
  fetchContent(services_query + '?limit=6')
  fetchContent(doctors_query + '?limit=6')
  fetchContent(locations_query)
}

function initContent(query, item, index) {
  if (query.includes(news_query)) {
    initNews(item, index)
  } else if (query.includes(services_query)) {
    initService(item, index)
  } else if (query.includes(doctors_query)) {
    initDoctor(item, index)
  } else if (query.includes(locations_query)) {
    initLocation(item, index)
  } else {
    console.log("Error: " + query)
  }
}

function initNews(item, index) {
  $('#ind-carousel').append(`<li data-target="#myCarousel" data-slide-to="${index}" ${index == 0 ? `class="active"` : ``}></li>`)
  $('#item-carousel').append(
    `<div class="item ${index == 0 ? `active` : ``}">
      ${getNewsImage(item)}
      <div class="container">
        <div class="carousel-caption">
          <h1>${item.name}</h1>
          <p>${item.text === null ? "" : item.text.substr(0, 100) + "..."}</p>
        </div>
      </div>
    </div>`)
}

function getNewsImage(item) {
  if (item.image === undefined || item.image === null || item.image == "") {
    return `<img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="${item.name}">`
  } else {
    return `<img class="center-img elevate" style="object-fit: cover;" src="./assets/img/news/${item.image}" alt="${item.name}">`
  }
}

function initService(item, index) {
  $('#services-panel').append(
    `<div class="col-sm-6 col-lg-4 featurette">
      <h2>${item.name}</h2>
      <p>${item.description === null ? "" : item.description.substr(0, 200) + "..."}</p>
      <p><a class="btn btn-info" onclick="clickService(${item.id})" role="button">View details &raquo;</a></p>
    </div>`)
}

function initDoctor(item, index) {
  $('#doctors-panel').append(
    `<div class="col-sm-6 col-md-4 featurette">
      ${getDoctorImage(item)}
      <h2>${item.name}</h2>
      <p><a class="btn btn-info" onclick="clickDoctor(${item.id})" role="button">View details &raquo;</a></p>
    </div>`)
}

function getDoctorImage(item) {
  if (item.image === undefined || item.image === null || item.image == "") {
    return `<img class="img-circle center-img elevate" src="./assets/img/doctor.png" alt="Doctor ${item.name}" height="140" width="140">`
  } else {
    return `<img class="img-circle center-img elevate" style="object-fit: cover;" src="./assets/img/doctors/${item.image}" alt="Doctor ${item.name}" height="140" width="140">`
  }
}

function initLocation(item, index) {
  if (index != 0) {
    $('#locations-panel').append(`<hr>`)
  }
  $('#locations-panel').append(
    `<div class="row">
      ${getLocationElement(item, index)}
    </div>`)
  createMap(item)
}

function getLocationElement(item, index) {
  if ($(window).width() < 992) {
    return getLocationHeading(item) + getLocationMap(item)
  } else {
    return index % 2 == 0 ? getLocationHeading(item) + getLocationMap(item) : getLocationMap(item) + getLocationHeading(item)
  }
}

function getLocationHeading(item) {
  return `<div class="col-md-7">
            <h2 class="location-heading">${item.name}<br/><span class="text-muted h4">${item.address}</span></h2>
            <p>${item.info.substr(0, 200) + "..."}</p>
            <p><a class="btn btn-info" onclick="clickLocation(${item.id})" role="button">View details &raquo;</a></p>
          </div>`
}

function getLocationMap(item) {
  return `<div class="col-md-5">
            <div class="map" id="map${item.id}" style="height: 300px;"></div>
          </div>`
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

init()

// CLICK EVENTS ==========================>

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
