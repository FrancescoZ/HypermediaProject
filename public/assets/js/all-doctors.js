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
  "name": "Sadiq Ahmed",
  "phone": "123-564789",
  "email": "sadiq.ahmed@hospidif.com",
  "bio": "Morbi urna nulla, congue tempor posuere at, mollis ut est. Sed semper turpis ligula, quis consectetur tortor fringilla vel. Maecenas id neque ullamcorper nunc malesuada porta bibendum ac tortor. Fusce aliquam tincidunt felis. Sed commodo mollis libero a scelerisque. Nulla condimentum blandit nisl, vitae aliquet enim maximus ut. Suspendisse a efficitur orci. Suspendisse nec velit congue, blandit felis in, feugiat eros. Proin a eros sodales, placerat nibh at, aliquam turpis. Phasellus fermentum lobortis purus rhoncus porta. Sed lacus neque, tristique tempus nibh vitae, mollis rutrum nunc. Duis vestibulum augue in purus imperdiet fringilla. Quisque iaculis tortor lacus, viverra convallis erat auctor in. Sed vehicula felis nec turpis aliquam gravida.",
  "image": "../assets/img/doctors/doctor_sadiq.jpg",
  "area_res": "Cardiology"
  },
  
    {
  "id": 2,
  "name": "Stephen Amato",
  "phone": "123-564789",
  "email": "stephen.amato@hospidif.com",
  "bio": "My name is R. Stephen Amato; I am a Medical Geneticist specializing in inherited diseases in children and adults, with special interest in metabolic and molecular disorders, neurogenetics, and ciliary abnormalities. I have been active in public health genetics and newborn screening and has been involved in organizing genetic services at the state, regional, and national levels. I have an undergraduate degree in chemistry and biology and a master’s degree in psychology and counseling from Columbia University, New York. I received my medical degree and trained in pediatrics and critical care medicine at the University of Nebraska. I was a Damon Runyon Memorial Fellow for Cancer Research at New York University and Beth Israel Medical Center, and received a PhD in Human Genetics and Cytogenetics from NYU. I have held appointments at the University of Nebraska, West Virginia University, University of Maryland, Johns Hopkins University, and Tufts University. I have coordinated newborn metabolic screening for the state of Arizona while a faculty member at Phoenix Children’s Hospital, prior to joining the faculty at the University of Kentucky. I am board certified in Pediatrics, Clinical Genetics and Laboratory Cytogenetics, and is qualified in Aerospace Medicine.",
  "image": "../assets/img/doctors/doctor_amato.jpg",
  "area_res": "Cancer care"
  },
  
    {
  "id": 3,
  "name": "Abdulnasser Alhajeri",
  "phone": "123-564789",
  "email": "abdulnasser.alhajeri@hospidif.com",
  "bio": "My name is Abdulnasser Alhajeri; I received my medical degree from Arabian Gulf University College of Medicine and Medical Sciences in Manama, Bahrain. I completed a radiology residency at University College Hospital in Galway, Ireland and at St. Vincent’s University Hospital in Dublin. I completed a neuroradiology fellowship at the University of Texas Southwestern Medical Center in Dallas; a pediatric neuroradiology fellowship at Children’s Medical Center in Dallas; and an endovascular surgical neuroradiology fellowship at Washington University School of Medicine in St. Louis. I specialize in endovascular neuroradiology, including the performance and interpretation of all invasive diagnostic imaging studies and image-guided therapeutic procedures of the brain, neck and spine in adults and children.",
  "image": "../assets/img/doctors/doctor_alhajeri.jpg",
  "area_res": "Neuroradiology"
  },
  
    {
  "id": 4,
  "name": "Vrushali Angadi",
  "phone": "123-564789",
  "email": "vrushali.angadi@hospidif.com",
  "bio": "Vrushali Angandi earned her doctoral degree in rehabilitation sciences from the University of Kentucky, under the mentorship of Dr. Joseph Stemple. She received her bachelor's and master's degree in speech-language pathology and audiology from the University of Mumbai, India. She completed a research fellowship at the Tata Memorial Hospital in Mumbai, India with a focus on alaryngeal voice and speech rehabilitation. I specialize in the rehabilitation following head and neck cancers, alaryngeal speech rehabilitation and management of voice, swallowing and upper airway disorders.",
  "image": "../assets/img/doctors/doctor_angadi.jpg",
  "area_res": "Vascular and vain"
  },
      
  {
  "id": 5,
  "name": "Lowell Anthony",
  "phone": "123-564789",
  "email": "anthony.lowell@hospidif.com",
  "bio": "My name is Lowell Anthony; I joined the UK Markey Cancer Center with more than two decades of experience in oncology and a special focus in gastrointestinal and neuroendocrine oncology. My clinical interests include drug development ranging from Phase I to III clinical trials. Agents targeting specific cellular signaling pathways and injectable radiolabeled compounds make up my past and current clinical investigative interests. I bring a clinical correlative component to complement the ongoing translational activities at Markey Cancer Center. I attended Vanderbilt University Medical School, where I also completed a medical residency and fellowship training in medical oncology and clinical pharmacology. I have previously been on the medical faculties at Vanderbilt University and the Louisiana State University Health Sciences Center in New Orleans.",
  "image": "../assets/img/doctors/doctor_lowell.jpg",
  },
  
  {
  "id": 6,
  "name": "Leslie Appiah",
  "phone": "123-564789",
  "email": "leslie.appiah@hospidif.com",
  "bio": "My name is Leslie A. Appiah; I joined UK HealthCare as a board-certified gynecologist with expertise in oncofertility and fellowship training in pediatric and adolescent gynecology. I bring six years of experience from Cincinnati Children’s Hospital Medical Center, where I served as director of oncofertility and fellowship director of pediatric and adolescent gynecology. I serve as Director of Oncofertility at UK and Norton Healthcare, where I work closely with subspecialists in reproductive endocrinology and infertility, at the Whitney-Hendrickson Women’s Cancer Facility, the Markey Cancer Center and the pediatric oncology team at Kentucky Children’s Hospital. My team and I will collaborate to preserve the fertility and reproductive health of pediatric, adolescent and adult cancer and blood disorders patients of all genders. I attended medical school at the University of Texas Southwestern Medical Center at Dallas. I completed a residency in OB-GYN at Sinai Hospital of Baltimore and a clinical fellowship in pediatric and adolescent gynecology at Texas Children’s Hospital. I have received several teaching awards including the Johns Hopkins Excellence in Teaching Award. My research interests include ovarian tissue cryopreservation, ovarian function post-chemotherapy and radiation, ovarian masses, endometriosis and congenital anomalies of the reproductive tract.",
  "image": "../assets/img/doctors/doctor_appiah.jpg",
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
  
  document.getElementById("sectionHeader").innerHTML = "All Doctors";
  
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
      `<div class="col-xs-6 col-lg-4" style="padding-left: 10px; padding-right: 10px;">
        <div class="well">
          <h3>${doctors[i].name}</h3>
          <img class="center-img img-circle elevate center-block" width="150px" height="150px" style="object-fit: contain;" alt="location img" src="${doctors[i].image}">
          <h4><br>Area responsible:<br><a href="">${doctors[i].area_res}</a></h4>
          <button type="button" class="btn btn-info" onClick="clickDoctor(${doctors[i].id})">View details &raquo;</button>
        </dv>
        </div>`);
  }
  
}

function clickDoctor(id) {
  document.location.href = `/doctor.html?id=${id}\&back=doctors`
}

function clickAllDoctors() {
  
  document.getElementById("sectionHeader").innerHTML = "All Doctors";
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
  
  document.getElementById("sectionHeader").innerHTML = "All Doctors in " + name;
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