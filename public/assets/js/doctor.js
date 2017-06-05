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
  document.getElementById("contacts").innerHTML = "Phone:" + egdoctor.phone + "<br>Email:" + egdoctor.email;
  document.getElementById("about").innerHTML = egdoctor.bio;
  //TODO come strutturare il paragrafo delle working hours
  document.getElementById("working-hours").innerHTML = egdoctor.how_to;
  //TODO come ricavare dal database i servizi relativi al dottore
  document.getElementById("operating-services").innerHTML = "";
  document.getElementById("area-responsible").innerHTML = "";
  document.getElementById("service-responsible").innerHTML = "";
  // TODO il testo da mostrare dipende dalla pagina precedente
  document.getElementById("back-button").innerHTML = "&larr; Return to " + "list"
}

// TODO la funzione deve riportare nella pagina precedente
function goBack(){
  console.log("back")
}

function clickService(id) {
  // TODO il click sul servizio rimanda alla pagina del servizio
  console.log(id)  
}

function clickAbout() {
  $('#doctor-about').show();
  $('#button-about').addClass("active")
  $('#doctor-working-hours').hide();
  $('#button-working-hours').removeClass("active")
  $('#doctor-related-services').hide();
  $('#button-related-services').removeClass("active")

  // TODO implementare api google maps
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

init();