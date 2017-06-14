const params = urlParams()
const location_query = '/location/'
const services_query = '/services-by-location/'

var position

function init() {
  $('#location-info').show()
  $('#button-info').addClass("active")
  $('#location-map').hide()
  $('#button-map').removeClass("active")
  
  setBackBtn(params)

  fetchContent(location_query + params['id'])
}

function initContent(query, item, index) {
  if (query.includes(location_query)) {
    initLocation(item, index)
  } else if (query.includes(services_query)) {
    initServices(item, index)
  } else {
    console.log("Error: " + query)
  }
}

function initLocation(item, index) {
  if (index == 0) {
    $('#name').html(item.name)
    $('#address').html(item.address)
    $('#description').html(item.info)
    $('#how-to').html(item.how_to)

    position = {}
    position['lat'] = item.lat
    position['lng'] = item.long

    fetchContent(services_query + item.id)
  }
}

function initServices(item, index) {
  $('#services-panel').append(
    `<div class="col-sm-6 col-md-4 featurette">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p><a class="btn btn-info" onclick="clickService(${item.id})" role="button">View details &raquo;</a></p>
    </div>`)
}

function initMap() {
  if (position !== undefined) {
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: position
    })
    var marker = new google.maps.Marker({
      position: position,
      map: map
    })
  }
}

init()

// CLICK EVENTS ==========================>

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
