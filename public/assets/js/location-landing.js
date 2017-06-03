function init() {
  $('#location-info').show();
  $('#button-info').addClass("active")
  $('#location-map').hide();
  $('#button-map').removeClass("active")
}

function clickMap() {
  $('#location-info').hide();
  $('#button-info').removeClass("active")
  $('#location-map').show();
  $('#button-map').addClass("active")
}

function clickInfo() {
  $('#location-info').show();
  $('#button-info').addClass("active")
  $('#location-map').hide();
  $('#button-map').removeClass("active")
}

init();
