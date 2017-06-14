const egabout = ["Our medical team", "History", "Curiosity"]
const egwhere = ["Location &amp; info"]
const egprojects = "Project"
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum nulla lacus, at vehicula nisi finibus ut. Phasellus et porta nisi. Praesent efficitur turpis dui, in fringilla magna accumsan commodo. Maecenas gravida venenatis lorem id tempor. Aenean ligula orci, ullamcorper eu finibus vel, cursus ac metus. Phasellus nisi nunc, imperdiet bibendum rutrum sed, semper nec odio. Maecenas ac dui blandit, porttitor turpis ut, consequat elit. Nunc congue, mi ut interdum aliquam, felis diam bibendum quam, non accumsan felis justo eu dui. Mauris maximus, neque quis suscipit rhoncus, elit velit accumsan elit, eget molestie nisl ex vitae justo. Maecenas quis sem sit amet nisi dictum ultrices. Praesent tempus fermentum malesuada. Mauris tristique ut sapien et aliquet. Mauris tortor ante, pellentesque eu tristique vitae, aliquet at orci. Praesent massa purus, hendrerit vitae pretium nec, consequat hendrerit sem. Suspendisse potenti. Phasellus malesuada mattis metus et semper."


function init() {
  $('#about-panel').show();
  $('#about-btn').addClass("active")
  $('#where-panel').hide();
  $('#where-btn').removeClass("active")
  $('#projects-panel').hide();
  $('#projects-btn').removeClass("active")

  for (var i in egabout) {
    if (i != 0) {
      $("#about-panel").append(`<br>`)
    }
    $("#about-panel").append(getParagraph(egabout[i], description))
  }

  for (var i in egwhere) {
    if (i != 0) {
      $("#where-panel").append(`<br>`)
    }
    $("#where-panel").append(getParagraph(egwhere[i], description))
  }

  for (i = 0; i < 4; i++) {
    if (i != 0) {
      $("#projects-panel").append(`<br>`)
    }
    $("#projects-panel").append(getParagraph(egprojects + ` ${i + 1}`, description))
  }
}

function getParagraph(title, text) {
  return `<h2>${title}</h2><p>${text}</p>`
}

init()

// CLICK EVENTS ==========================>

function clickAbout() {
  $('#about-panel').show();
  $('#about-btn').addClass("active")
  $('#where-panel').hide();
  $('#where-btn').removeClass("active")
  $('#projects-panel').hide();
  $('#projects-btn').removeClass("active")
}

function clickProjects() {
  $('#about-panel').hide();
  $('#about-btn').removeClass("active")
  $('#where-panel').hide();
  $('#where-btn').removeClass("active")
  $('#projects-panel').show();
  $('#projects-btn').addClass("active")
}

function clickContactUs() {
  document.location.href = `/contact-us.html?`
}
