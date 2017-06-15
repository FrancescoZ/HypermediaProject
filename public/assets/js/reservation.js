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
    $('#title').append(`<b>${item.name}</b>`)
  }
}

init()

// CLICK EVENTS ==========================>

function clickSubmit() {
  let headers = new Headers();
  headers.set("Content-Type", "application/json");

  let formdata = new FormData(document.getElementById("reservation"))
  formdata.set('service', params['id'])
  let body = formDataAsJSON(formdata)

  fetch("/reservation", {
      method: "POST",
      body: body,
      headers: headers
    })
    .then(response => {
      if (response.ok) {
        $('#banner').html(`<strong>Well done!</strong> You request has been submitted`)
        $('#banner').addClass("alert-success")
        $('#submit-btn').hide()
      } else {
        $('#banner').html(`<strong>Warning!</strong> An error as occured, please retry`)
        $('#banner').addClass("alert-danger")
        $('#submit-btn').hide()
      }
    })
}
