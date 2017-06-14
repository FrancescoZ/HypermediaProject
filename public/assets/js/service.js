const params = urlParams()

function init() {
  $('#service-info').show()
  $('#button-info').addClass("active")
  $('#service-prices').hide()
  $('#button-prices').removeClass("active")

  fetchContent('/service/' + params['id'])
}

function initContent(query, item, index) {
  if (query.includes('/service')) {
    initService(item, index)
  } else if (query.includes('/area')) {
    initArea(item, index)
  } else if (query.includes('/doctors-by-service')) {
    initDoctors(item, index)
  } else if (query.includes('/locations-by-area')) {
    initLocations(item, index)
  } else {
    console.log("Error: " + query)
  }
}

function initService(item, index) {
  if (index == 0) {
    $('#name').html(item.name)
    $('#description').html(`${item.description}<br/><br/>Responsible doctor: <b>${item.responsible}</b>`)
    $('#price').html(item.price)
    $('#promotion').html(item.promotion)
    if (params['back'] === undefined) {
      $('#back-button').hide()
    } else {
      $('#back-button').html("&larr; Return to " + params['back'])
    }
    fetchContent('/area/' + item.area)
    fetchContent('/doctors-by-service/' + item.id)
    fetchContent('/locations-by-area/' + item.area)
  }
}

function initArea(item, index) {
  if (index == 0) {
    $('#area').html(`<a href="#">${item.name}</a>`)
  }
}

function initDoctors(item, index) {
  $('#doctors-panel').append(
    `<div class="col-sm-6 col-md-3 featurette" style="text-align:center;">
      <img class="img-circle center-img elevate" src="../assets/img/doctor.png" alt="Generic placeholder image" height="110" width="110">
      <h4>${item.name}</h4>
      <p><a class="btn ${index == 0 ? 'btn-primary' : 'btn-info'}" onclick="clickDoctor(${item.id})" role="button">View details &raquo;</a></p>
    </div>`)
}

function initLocations(item, index) {
  $('#locations-panel').append(
    `<div class="col-sm-6 col-md-3 featurette" style="text-align:center;">
        <img class="img-circle center-img elevate" src="../assets/img/location.png" alt="Generic placeholder image" height="110" width="110">
        <h4>${item.name}</h4>
        <p><a class="btn btn-info" onclick="clickLocation(${item.id})" role="button">View details &raquo;</a></p>
      </div>`)
}

init();

// CLICK EVENTS ==========================>

function clickInfo() {
  $('#service-info').show()
  $('#button-info').addClass("active")
  $('#service-prices').hide()
  $('#button-prices').removeClass("active")
}

function clickPrices() {
  $('#service-info').hide()
  $('#button-info').removeClass("active")
  $('#service-prices').show()
  $('#button-prices').addClass("active")
}

const back_ref = `&back=service`

function clickDoctor(id) {
  document.location.href = `/doctor.html?id=${id}` + back_ref
}

function clickLocation(id) {
  document.location.href = `/location.html?id=${id}` + back_ref
}

function clickBook() {
  document.location.href = `/reservation-form.html` + back_ref
}
