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

function init() {
  for (var i in egservices) {
    $('#inputService').append(`<option value="${egservices[i].id}">${egservices[i].name}</option>`)
  }
}

function clickSubmit() {
  var data = new FormData(document.getElementById("reservation"))
  var json = formDataAsJSON(data)
  console.log(json)
}

function formDataAsJSON(formData) {
  let x = {};
  for (var pair of formData.entries()) {
    x[pair[0]] = pair[1];
  }
  return x;
}

function closeForm() {

}

init()