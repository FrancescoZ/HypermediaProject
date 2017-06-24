const params = urlParams()
const about_query = '/whoweare/'


function init() {
  $('#about-panel').show();
  $('#about-btn').addClass("active")
  $('#history-panel').hide();
  $('#history-btn').removeClass("active")
  $('#projects-panel').hide();
  $('#projects-btn').removeClass("active")

  fetchContent(about_query)
}

function initContent(query, item, index) {
  if (query.includes(about_query)) {
    initWhoWeAre(item, index)
  } else {
    console.log("Error: " + query)
  }
}

function initWhoWeAre(item, index) {
  if (item.tab == "About") {
    $("#about-panel").append(`<h2>${item.title}</h2><p>${item.text}</p><br>`)
  } else if (item.tab == "History") {
    $("#history-panel").append(`<p>${item.text}</p><br>`)
  } else if (item.tab == "Project") {
    $("#projects-panel").append(`<h2>${item.title}</h2><p>${item.text}</p><br>`)
  }
}

init()

// CLICK EVENTS ==========================>

function clickAbout() {
  $('#about-panel').show();
  $('#about-btn').addClass("active")
  $('#history-panel').hide();
  $('#history-btn').removeClass("active")
  $('#projects-panel').hide();
  $('#projects-btn').removeClass("active")
}

function clickHistory() {
  $('#about-panel').hide();
  $('#about-btn').removeClass("active")
  $('#history-panel').show();
  $('#history-btn').addClass("active")
  $('#projects-panel').hide();
  $('#projects-btn').removeClass("active")
}

function clickProjects() {
  $('#about-panel').hide();
  $('#about-btn').removeClass("active")
  $('#history-panel').hide();
  $('#history-btn').removeClass("active")
  $('#projects-panel').show();
  $('#projects-btn').addClass("active")
}

function clickContactUs() {
  document.location.href = `/contact-us.html?`
}
