function clickSubmit() {
  let headers = new Headers()
  headers.set("Content-Type", "application/json")

  let formdata = new FormData(document.getElementById("contact"))
  let body = formDataAsJSON(formdata)

  fetch("/contact", {
      method: "POST",
      body: body,
      headers: headers
    })
    .then(response => {
      if (response.ok) {
        $('#banner').html(`<strong>Well done!</strong> You request has been submitted`)
        $('#banner').addClass("alert-success")
        $('#submit-btn').hide()
      } else {
        $('#banner').html(`<strong>Warning!</strong> An error as occurred, please retry`)
        $('#banner').addClass("alert-danger")
        $('#submit-btn').hide()
      }
    })
}
