const params = urlParams()
const service_query = '/service/'

function init() {
  fetchContent(service_query + params['id'])

}

function initContent(query, item, index) {
  if (query.includes(service_query)) {
    initService(item, index)
  } else {
    console.log("Error: " + query)
  }
}

function initService(item, index) {
  if (index == 0) {
    $('#title').append(item.name)
  }
}

init()

// CLICK EVENTS ==========================>

function clickSubmit() {
  var data = new FormData(document.getElementById("reservation"))
  var json = formDataAsJSON(data)
  json['service'] = params['id']
  console.log(json)
}
