// TODO da eliminare
const egdoctor = {
  "id": 1,
  "name": "Appiah Leslie A.",
  "phone": "123-564789",
  "email": "leslie.appiah@hospidif.com",
  "bio": "Morbi urna nulla, congue tempor posuere at, mollis ut est. Sed semper turpis ligula, quis consectetur tortor fringilla vel. Maecenas id neque ullamcorper nunc malesuada porta bibendum ac tortor. Fusce aliquam tincidunt felis. Sed commodo mollis libero a scelerisque. Nulla condimentum blandit nisl, vitae aliquet enim maximus ut. Suspendisse a efficitur orci. Suspendisse nec velit congue, blandit felis in, feugiat eros. Proin a eros sodales, placerat nibh at, aliquam turpis. Phasellus fermentum lobortis purus rhoncus porta. Sed lacus neque, tristique tempus nibh vitae, mollis rutrum nunc. Duis vestibulum augue in purus imperdiet fringilla. Quisque iaculis tortor lacus, viverra convallis erat auctor in. Sed vehicula felis nec turpis aliquam gravida.",
  "image": "",
  "monday_hours": 2,
  "tuesday_hours": 2,
  "wensday_hours": 2,
  "thuesday_hours": 2,
  "friday_hours": 2,
  "celebrity": 1
}

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

const params = urlParams()

// TODO chiedere al server
function getDoctor() {
  return egdoctor
}

function getServices() {
  return egservices
}

const sDoctor = getDoctor()
const sServices = getServices()

function init() {
  $('#doctor-about').show();
  $('#button-about').addClass("active")
  $('#doctor-working-hours').hide();
  $('#button-working-hours').removeClass("active")
  $('#doctor-related-services').hide();
  $('#button-related-services').removeClass("active")

  // TODO la location viene chiesta al server
  // TODO inizializzare foto della location
  document.getElementById("name").innerHTML = egdoctor.name;
  document.getElementById("contacts").innerHTML = "&#9742; " + egdoctor.phone + "<br>&#9993 " + egdoctor.email;
  document.getElementById("about").innerHTML = egdoctor.bio;
  
  if (params['back'] === undefined) {
    $('#back-button').hide()
  } else {
    $('#back-button').html("&larr; Return to " + params['back'])
  }
  
  $('#working-hours').append(
          `<table class="table table-striped">
            <tbody>
              <tr>
                <th>Sunday:</th>
                <th>07:00 AM - 8:30 AM</th>
              </tr>
              <tr>
                <td>Monday:</td>
                <td>close</td>
              </tr>
              <tr>
                <th>Tuesday:</th>
                <th>07:00 AM - 8:30 AM</th>
              </tr>
              <tr>
                <td>Wednesday:</td>
                <td>close</td>
              </tr>
              <tr>
                <th>Thurday:</th>
                <th>07:00 AM - 8:30 AM</th>
              </tr>
              <tr>
                <td>Friday:</td>
                <td>close</td>
              </tr>
              <tr>
                <th>Saturday:</th>
                <th>07:00 AM - 8:30 AM</th>
              </tr>
            </tbody>
          </table>`)

  for (var i in sServices) {
    $('#operating-services').append(
    `<a onClick="clickService(${sServices[i].id})" href="">${sServices[i].name}</a><br>`)
  }

  $('#area-responsible').append(`<a href="">Cardiology</a><br>`)
  $('#service-responsible').append(`<a href="">Vascular surgery</a><br>`)
  
}

// TODO la funzione deve riportare nella pagina precedente
function goBack() {
  if (params['back'] == "doctors") {
    document.location.href = `/all-doctors.html`
  }
}

function clickAbout() {
  $('#doctor-about').show();
  $('#button-about').addClass("active")
  $('#doctor-working-hours').hide();
  $('#button-working-hours').removeClass("active")
  $('#doctor-related-services').hide();
  $('#button-related-services').removeClass("active")
}

function clickWorkingHours() {
  $('#doctor-about').hide();
  $('#button-about').removeClass("active")
  $('#doctor-working-hours').show();
  $('#button-working-hours').addClass("active")
  $('#doctor-related-services').hide();
  $('#button-related-services').removeClass("active")
}
  
function clickRelatedServices() {
  $('#doctor-about').hide();
  $('#button-about').removeClass("active")
  $('#doctor-working-hours').hide();
  $('#button-working-hours').removeClass("active")
  $('#doctor-related-services').show();
  $('#button-related-services').addClass("active")
}

function clickService(id) {  
  document.location.href = `/service.html?id=${id}`
}

init();