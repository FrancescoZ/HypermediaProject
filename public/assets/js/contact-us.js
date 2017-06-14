function clickSubmit() {
  var data = new FormData(document.getElementById("reservation"))
  var json = formDataAsJSON(data)
  console.log(json)
}
