function urlParams() {
  var result = {}
  var url = window.location.search.substring(1)
  var variables = url.split('&')
  for (var i = 0; i < variables.length; i++) {
    var pair = variables[i].split('=')
    result[pair[0]] = pair[1]
  }
  return result
}

function fetchContent(query) {
  fetch(query)
    .then(response => response.json())
    .then(data => {
      console.log(query)
      console.log(data)
      data.map((item, index) => {
        initContent(query, item, index)
      })
    })
}

function goBack() {
  window.history.back()
}

function setBackBtn(params) {
  if (params['back'] === undefined) {
    $('#back-button').hide()
  } else {
    $('#back-button').html("&larr; Return to " + params['back'])
  }
}

function formDataAsJSON(formData) {
  let data = {}
  for (var pair of formData.entries()) {
    data[pair[0]] = pair[1]
  }
  return JSON.stringify(data)
}
