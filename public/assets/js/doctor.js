const params = urlParams()
const doctor_query = '/doctor/'
const area_query = '/area-by-responsible/'
const service_query = '/service/'


function init() {
  fetchContent(doctor_query + params['id'])
}

function initContent(query, item, index) {
  if (query.includes(doctor_query)) {
    initDoctor(item, index)
  } else if (query.includes(area_query)) {
    initArea(item, index)
  } else if (query.includes(service_query)) {
    initService(item, index)
  } else {
    console.log("Error: " + query)
  }
}

function initDoctor(item, index) {

  if (index == 0) {
    $("#name").html(item.name)
    $("#contacts").html("&#9742; " + item.phone + "<br>&#9993 " + item.email)
    $("#biography").html(item.bio)
    $("#office-hours").html(item.office_hours)
    document.getElementById("image").setAttribute("src", item.image)

    if (params['back'] === undefined) {
      $('#back-button').hide()
    } else {
      $('#back-button').html("&larr; Return to " + params['back'])
    }
    
    fetchContent(service_query + item.at_service)
    fetchContent(area_query + item.id)
  }
}

function initService(item, index) {
  if(item.doc_resp == params['id'])
    $('#operating-service').append(`<b>Service Responsible: </b><a href="#" onClick="clickService(${item.id})">${item.name}</a>`)
  else
    $('#operating-service').append(`<b>Operating Service: </b><a href="#" onClick="clickService(${item.id})">${item.name}</a>`)
}

function initArea(item, index) {
    $('#area-resp').append(`<b>Area Responsible: </b><a href="#">${item.name}</a>`)
}

const back_ref = `&back=doctor`

function clickService(id) {
  document.location.href = `/service.html?id=${id}` + back_ref
}

init();
