// TODO da eliminare
const eglocations = [
  {
    "id": 1,
    "name": "London Westminster",
    "address": "Westminster, Londra SW1A 0AA, Regno Unito",
    "info": "Morbi urna nulla, congue tempor posuere at, mollis ut est. Sed semper turpis ligula, quis consectetur tortor fringilla vel. Maecenas id neque ullamcorper nunc malesuada porta bibendum ac tortor. Fusce aliquam tincidunt felis. Sed commodo mollis libero a scelerisque. Nulla condimentum blandit nisl, vitae aliquet enim maximus ut. Suspendisse a efficitur orci. Suspendisse nec velit congue, blandit felis in, feugiat eros. Proin a eros sodales, placerat nibh at, aliquam turpis. Phasellus fermentum lobortis purus rhoncus porta. Sed lacus neque, tristique tempus nibh vitae, mollis rutrum nunc. Duis vestibulum augue in purus imperdiet fringilla. Quisque iaculis tortor lacus, viverra convallis erat auctor in. Sed vehicula felis nec turpis aliquam gravida.",
    "how_to": "Quisque non sapien ac metus feugiat consequat placerat et nunc. Vestibulum et diam in sapien egestas porttitor. Integer in ex et diam posuere pretium. Ut lacinia, libero non malesuada elementum, mi lectus consequat sapien, non tincidunt lectus erat sed elit. Sed vitae leo quis sapien aliquam porta. Sed at massa quis urna mattis ultricies. Donec purus massa, bibendum ac neque sed, scelerisque ullamcorper erat.",
    "lat": 51.5285582,
    "long": -0.2416991
  },
  {
    "id": 2,
    "name": "Abbazia di Westminster",
    "address": "20 Deans Yd, Westminster, London SW1P 3PA, Regno Unito",
    "info": "Morbi urna nulla, congue tempor posuere at, mollis ut est. Sed semper turpis ligula, quis consectetur tortor fringilla vel. Maecenas id neque ullamcorper nunc malesuada porta bibendum ac tortor. Fusce aliquam tincidunt felis. Sed commodo mollis libero a scelerisque. Nulla condimentum blandit nisl, vitae aliquet enim maximus ut. Suspendisse a efficitur orci. Suspendisse nec velit congue, blandit felis in, feugiat eros. Proin a eros sodales, placerat nibh at, aliquam turpis. Phasellus fermentum lobortis purus rhoncus porta. Sed lacus neque, tristique tempus nibh vitae, mollis rutrum nunc. Duis vestibulum augue in purus imperdiet fringilla. Quisque iaculis tortor lacus, viverra convallis erat auctor in. Sed vehicula felis nec turpis aliquam gravida.",
    "how_to": "Quisque non sapien ac metus feugiat consequat placerat et nunc. Vestibulum et diam in sapien egestas porttitor. Integer in ex et diam posuere pretium. Ut lacinia, libero non malesuada elementum, mi lectus consequat sapien, non tincidunt lectus erat sed elit. Sed vitae leo quis sapien aliquam porta. Sed at massa quis urna mattis ultricies. Donec purus massa, bibendum ac neque sed, scelerisque ullamcorper erat.",
    "lat": 30.5285582,
    "long": -0.2416991
  },
  {
    "id": 3,
    "name": "Buckingham Palace",
    "address": "Westminster, Londra SW1A 1AA, Regno Unito",
    "info": "Morbi urna nulla, congue tempor posuere at, mollis ut est. Sed semper turpis ligula, quis consectetur tortor fringilla vel. Maecenas id neque ullamcorper nunc malesuada porta bibendum ac tortor. Fusce aliquam tincidunt felis. Sed commodo mollis libero a scelerisque. Nulla condimentum blandit nisl, vitae aliquet enim maximus ut. Suspendisse a efficitur orci. Suspendisse nec velit congue, blandit felis in, feugiat eros. Proin a eros sodales, placerat nibh at, aliquam turpis. Phasellus fermentum lobortis purus rhoncus porta. Sed lacus neque, tristique tempus nibh vitae, mollis rutrum nunc. Duis vestibulum augue in purus imperdiet fringilla. Quisque iaculis tortor lacus, viverra convallis erat auctor in. Sed vehicula felis nec turpis aliquam gravida.",
    "how_to": "Quisque non sapien ac metus feugiat consequat placerat et nunc. Vestibulum et diam in sapien egestas porttitor. Integer in ex et diam posuere pretium. Ut lacinia, libero non malesuada elementum, mi lectus consequat sapien, non tincidunt lectus erat sed elit. Sed vitae leo quis sapien aliquam porta. Sed at massa quis urna mattis ultricies. Donec purus massa, bibendum ac neque sed, scelerisque ullamcorper erat.",
    "lat": 10.5285582,
    "long": -50.2416991
  }
]

const egdoctors = [
  {
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
  },
  
    {
  "id": 2,
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
  },
  
    {
  "id": 3,
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
  },
  
    {
  "id": 4,
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
  },
      
  {
  "id": 5,
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
  },
  
  {
  "id": 6,
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
  
]

const egdoctorsMilano = [
  {
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
  },
  
    {
  "id": 2,
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
  },
  
    {
  "id": 3,
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
  },
  
    {
  "id": 4,
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
]

function init(){
  
  document.getElementById("pageHeader").innerHTML = "All Doctors";
  
  updateDoctorList(egdoctors);
  
  $('#all-doctors-button').addClass("active")
  
  for (var i in eglocations) {
    $('#doctorsPanelRight').append(
      `<a href="#" class="list-group-item" id="location-${eglocations[i].id}-button" onClick="clickLocationFilter(${eglocations[i].id})">${eglocations[i].name}</a>`)
  }
      
}

function updateDoctorList(doctors){
  
  document.getElementById("doctorsPanelLeft").innerHTML = "";
  
  for (var i in doctors) {
    
    $('#doctorsPanelLeft').append(
      `<div class="col-xs-6 col-lg-4">
        <h3>${doctors[i].name}</h3>
        <img class="img-responsive center-block center-cropped" alt="location img" src="../assets/img/doctor_scimmiu.jpg">
        <button type="button" class="btn btn-info" onClick="clickDoctor(${doctors[i].id})">View details &raquo;</button>
        </div>`);
  }
  
}

function clickDoctor(id) {
  document.location.href = `/doctor.html?id=${id}\&back=doctors`
}

function clickAllDoctors() {
  
  document.getElementById("pageHeader").innerHTML = "All Doctors";
  updateDoctorList(egdoctors);
  deactivateAllButton();
  $('#all-doctors-button').addClass("active")
  
}

function clickLocationFilter(id) {
  
  for (var i in eglocations){
    
    if (eglocations[i].id == id){
      var name = eglocations[i].name
    }
    
  }
  
  document.getElementById("pageHeader").innerHTML = "All Doctors in " + name;
  updateDoctorList(egdoctorsMilano);
  deactivateAllButton();
  $('#location-' + id + '-button').addClass("active")
  
}

function deactivateAllButton(){
  
  $('#all-doctors-button').removeClass("active")
  
  for (var i in eglocations){
    $('#location-' + eglocations[i].id + '-button').removeClass("active")
  }
  
}

// TODO la funzione deve riportare nella pagina precedente
function goBack(){
  console.log("back")
}

init();