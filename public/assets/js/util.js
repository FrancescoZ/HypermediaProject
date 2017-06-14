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

function findFromJSONArray(id, array) {
  for (var i in array) {
    if (array[i].id == id) {
      return array[i]
    }
  }
}

function goBack() {
  window.history.back()
}
