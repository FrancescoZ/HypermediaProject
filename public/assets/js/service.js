//========================================
const egservices = [
  {
    "id": 1,
    "name": "Vascular surgery",
    "area": "Vascular and vein",
    "responsible": "Marco Polo"
  },
  {
    "id": 2,
    "name": "Chemotherapy",
    "area": "Cancer care",
    "responsible": "Ezio Auditore"
  },
  {
    "id": 3,
    "name": "Electrocardiography",
    "area": "Cardiology",
    "responsible": "Giovanni Auditore"
  },
  {
    "id": 4,
    "name": "Radiotherapy",
    "area": "Cancer care",
    "responsible": "Lorenzo de Medici"
  }
]

const description = "Morbi urna nulla, congue tempor posuere at, mollis ut est. Sed semper turpis ligula, quis consectetur tortor fringilla vel. Maecenas id neque ullamcorper nunc malesuada porta bibendum ac tortor. Fusce aliquam tincidunt felis. Sed commodo mollis libero a scelerisque. Nulla condimentum blandit nisl, vitae aliquet enim maximus ut. Suspendisse a efficitur orci. Suspendisse nec velit congue, blandit felis in, feugiat eros. Proin a eros sodales, placerat nibh at, aliquam turpis. Phasellus fermentum lobortis purus rhoncus porta. Sed lacus neque, tristique tempus nibh vitae, mollis rutrum nunc. Duis vestibulum augue in purus imperdiet fringilla. Quisque iaculis tortor lacus, viverra convallis erat auctor in. Sed vehicula felis nec turpis aliquam gravida."

const price = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut nibh iaculis, volutpat ante at, lacinia arcu. Nunc congue lorem pharetra nibh sodales gravida. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut velit volutpat, semper metus vel, volutpat dui. Nulla dapibus pulvinar sem tempor posuere. Proin efficitur posuere commodo. Vestibulum vitae vehicula dui, at bibendum lacus. Pellentesque id est facilisis, pellentesque risus at, molestie neque. Duis venenatis ligula sed eleifend fermentum. Ut malesuada ante turpis, sit amet ultricies ante efficitur nec. Mauris rhoncus consectetur orci nec sagittis."

const promotion = "Ut elementum nisi sed erat congue lacinia. Maecenas nec eros arcu. Quisque placerat urna felis. Suspendisse cursus magna congue magna fringilla, et fringilla ligula facilisis. Sed molestie, sem in imperdiet mattis, dolor ipsum fringilla tortor, vestibulum tristique tortor diam et arcu. Cras nec rhoncus turpis, gravida venenatis sapien. Phasellus dignissim efficitur faucibus. Pellentesque vel efficitur tortor. Proin odio sapien, interdum sed dolor a, vestibulum rutrum justo. Suspendisse neque metus, iaculis ut mauris eget, pellentesque venenatis est. Aenean et venenatis ligula."

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

const eglocations = [
  {
    "id": 1,
    "name": "London Westminster"
  },
  {
    "id": 2,
    "name": "Abbazia di Westminster",
  },
  {
    "id": 3,
    "name": "Buckingham Palace"
  }
]
//========================================

const params = urlParams()

function fetchService() {
  var service = findFromJSONArray(params['id'], egservices)
  if (service === undefined) {
    return false
  } else {
    initService(service)
    return true
  }
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
  $('#service-info').show()
  $('#button-info').addClass("active")
  $('#service-prices').hide()
  $('#button-prices').removeClass("active")

  if (fetchService()) {
    fetchDoctors()
    fetchLocations()
  }
}

function initService(item) {
  $('#name').html(item.name)
  $('#area').html(`<a href="#">${item.area}</a>`)
  $('#description').html(description + `<br><br>Responsible doctor: <b>${item.responsible}</b>`)
  $('#price').html(price)
  $('#promotion').html(promotion)

  if (params['back'] === undefined) {
    $('#back-button').hide()
  } else {
    $('#back-button').html("&larr; Return to " + params['back'])
  }
}

function initDoctors(item, index) {
  if (index == 0) {
    $('#doctors-panel').append(
      `<div class="col-sm-6 col-md-3 featurette" style="text-align:center;">
        <img class="img-circle center-img elevate" src="../assets/img/doctor.png" alt="Generic placeholder image" height="110" width="110">
        <h4>${item.name}</h4>
        <p><a class="btn btn-primary" onclick="clickDoctor(${item.id})" role="button">View details &raquo;</a></p>
      </div>`)
    return
  }
  $('#doctors-panel').append(
    `<div class="col-sm-6 col-md-3 featurette" style="text-align:center;">
      <img class="img-circle center-img elevate" src="../assets/img/doctor.png" alt="Generic placeholder image" height="110" width="110">
      <h4>${item.name}</h4>
      <p><a class="btn btn-info" onclick="clickDoctor(${item.id})" role="button">View details &raquo;</a></p>
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
  document.location.href = `/reservation-form.html`
}

init();
