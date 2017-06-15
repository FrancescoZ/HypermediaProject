const params = urlParams()
const doctors_query = '/doctors/' + '?limit='
const locations_query = '/locations/'
const location_query = '/location/'
const doc_by_loc_query = '/doctors-by-location/'
var loc_size = 0

function init() {
  document.getElementById("sectionHeader").innerHTML = "All Doctors";
  $('#all-doctors-button').addClass("active")
  fetchContent(doctors_query)
  fetchContent(locations_query)
}

function initContent(query, item, index) {
  if (query.includes(doctors_query)) {
    initDoctors(item, index)
  } else if (query.includes(locations_query)) {
    initLocations(item, index)
  } else if (query.includes(location_query)) {
    initLocation(item, index)
  } else if (query.includes(doc_by_loc_query)) {
    initDoctors(item, index)
  } else {
    console.log("Error: " + query)
  }
}

function initDoctors(item, index) {
  $('#doctorsPanelLeft').append(
    `<div class="col-xs-6 col-lg-4" style="padding-left: 10px; padding-right: 10px;">
        <div class="well">
          <h3>${item.name}</h3>
          <img class="center-img img-circle elevate center-block" width="150px" height="150px" style="object-fit: contain;" alt="location img" src="../assets/img/doctors/${item.image}">
          <button type="button" class="btn btn-info" onClick="clickDoctor(${item.id})">View details &raquo;</button>
        </dv>
      </div>`);
}

function initLocations(item, index){
  $('#doctorsPanelRight').append(
      `<a href="#" class="list-group-item" id="location-${item.id}-button" onClick="clickLocationFilter(${item.id})">${item.name}</a>`)
  loc_size++
}

function initLocation(item, index){
  document.getElementById("sectionHeader").innerHTML = "All Doctors in " + item.name;
  deactivateAllButton();
  $('#location-' + item.id + '-button').addClass("active")
}

function clickAllDoctors() {
  document.getElementById("sectionHeader").innerHTML = "All Doctors";
  deactivateAllButton();
  $('#all-doctors-button').addClass("active")
  document.getElementById("doctorsPanelLeft").innerHTML = "";
  fetchContent(doctors_query)
}

function clickLocationFilter(id) {
  fetchContent(location_query + id)
  document.getElementById("doctorsPanelLeft").innerHTML = "";
  fetchContent(doc_by_loc_query + id)
}

function deactivateAllButton() {
  $('#all-doctors-button').removeClass("active")
  for (i = 0; i <= loc_size; i++) {
    $('#location-' + i + '-button').removeClass("active")
  }
}

const back_ref = `&back=doctor`

function clickDoctor(id) {
  document.location.href = `/doctor.html?id=${id}` + back_ref
}

init();
