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

function findFromJSONArray(id, array) {
  
  for (var i in array) {
    if (array[i].id == id) {
      return array[i]
    }
  }
}

function notFound() {
  document.location.href = "/not-found.html"
}
