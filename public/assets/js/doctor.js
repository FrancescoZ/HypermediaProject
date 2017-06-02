function clickAbout() {
  $("#about-doctor").show();
  $("#doctor-working-hour").hide();
  $("#doctor-services").hide();
}

function clickWorkingHours() {
  $("#about-doctor").hide();
  $("#doctor-working-hour").show();
  $("#doctor-services").hide();
}

function clickRelatedServices() {
  $("#about-doctor").hide();
  $("#doctor-working-hour").hide();
  $("#doctor-services").show();
}

function startup() {
  $("#doctor-working-hour").hide();
  $("#doctor-services").hide();
}

startup();