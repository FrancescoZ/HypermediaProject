const eglocations = [
  {
    "id": 1,
    "name": "Albert B. Chandler",
    "address": "800 Rose St, Lexington, KY 40536, Stati Uniti",
    "info": "Opened in 1962, the University of Kentucky Albert B. Chandler Hospital, a 569-bed acute care hospital, is part of the Hospidif patient care enterprise.<br>UK Chandler Hospital has Central and Eastern Kentucky’s only Level I trauma center, and handles the most severe traumas. It has the only Level IV neonatal intensive care unit in the area to treat the sickest infants.<br>The hospital also offers 100 intensive care beds, a post-anesthesia care unit, 17 operating rooms,14-bed labor and delivery, and 26 mother-baby rooms. The hospital draws upon the resources of six UK colleges: Medicine, Nursing, Health Sciences, Dentistry, Pharmacy and Public Health.",
    "how_to": "The nearest bus stop is 'South Limestone @ 1000 Inbound'. There are two bus going there: 5 and 14",
    "lat": 38.0311288,
    "long": -84.508976
  },
  {
    "id": 2,
    "name": "Good Samaritan Hospital",
    "address": "310 S Limestone, Lexington, KY 40508, Stati Uniti",
    "info": "Good Samaritan Hospital offer state-of-the-art medical care services in downtown Lexington, all private rooms and a high level of personal care.<br>With more than 600 clinical and ancillary staff and a medical staff of more than 600 physicians, Good Samaritan is able to offer a broad range of health care services to meet the needs of the residents of central and eastern Kentucky.",
    "how_to": "The nearest bus stop is 'South Limestone @ Samaritan Hospital'. There are two bus going there: 3 and 5",
    "lat": 38.0422502,
    "long": -84.5010722
  },
  {
    "id": 3,
    "name": "Neuroscience Institute",
    "address": "740 S. Limestone, First Floor, Wing C, Suite B101, Lexington, KY 40536, Stati Uniti",
    "info": "The Neuroscience Institute (NI) integrates the expertise of the University of Kentucky’s neurology and neurosurgery clinicians and researchers. NI is a referral center dedicated to providing comprehensive care to our patients with the most complex neurological conditions.<br>Neurosurgeons and neurologists at NI diagnose and treat a wide spectrum of neurological conditions involving the brain, spine, nerves and muscles. Our team includes neurosurgeons, neurologists, neuropsychologists, therapists, nurses and other  clinicians who use the most advanced surgical and medical treatments for brain, spinal cord, and nerve and muscle diseases and disorders. Our faculty are also training the next generation of health care providers and investigators. NI is on the leading edge of patient care, research and education and puts the power of advanced medicine and an entire team of specialists to work on your condition.",
    "how_to": "The nearest bus stop is 'Kentucky Clinic Ib'. There is a bus going there: 5",
    "lat": 38.0336722,
    "long": -84.5102607
  }
]

const egdoctors = [
  {
    "id": 1,
    "name": "Abdulnasser Alhajeri",
    "phone": "357-5103970",
    "email": "abdulnasser.alhajeri@hospidif.com",
    "bio": "My name is Abdulnasser Alhajeri; I received my medical degree from Arabian Gulf University College of Medicine and Medical Sciences in Manama, Bahrain. I completed a radiology residency at University College Hospital in Galway, Ireland and at St. Vincent’s University Hospital in Dublin.<br>I completed a neuroradiology fellowship at the University of Texas Southwestern Medical Center in Dallas; a pediatric neuroradiology fellowship at Children’s Medical Center in Dallas; and an endovascular surgical neuroradiology fellowship at Washington University School of Medicine in St. Louis.<br>I specialize in endovascular neuroradiology, including the performance and interpretation of all invasive diagnostic imaging studies and image-guided therapeutic procedures of the brain, neck and spine in adults and children.",
    "image": "../assets/img/doctors/doctor_alhajeri.jpg",
    "area_res": 2
  },

  {
    "id": 2,
    "name": "Ahmed Sadiq",
    "phone": "123-5647890",
    "email": "ahmed.sadiq@hospidif.com",
    "bio": "My name is Sadiq Ahmed; I received my medical degree from Mymensingh Medical College, Bangladesh. I then completed a residency in internal medicine at the University of Connecticut and a fellowship in nephrology at Indiana University, Indianapolis.<br>I am certified by the American Board of Internal Medicine in Internal Medicine and Nephrology. I am also certified by American Society of Hypertension. I am a Fellow of the American Society of Nephrology and American College of Physicians.",
    "image": "../assets/img/doctors/doctor_sadiq.jpg",
    "area_res": 3
  },

  {
    "id": 3,
    "name": "Anthony Lowell",
    "phone": "842-6816579",
    "email": "anthony.lowell@hospidif.com",
    "bio": "My name is Lowell Anthony; I joined the UK Markey Cancer Center with more than two decades of experience in oncology and a special focus in gastrointestinal and neuroendocrine oncology. My clinical interests include drug development ranging from Phase I to III clinical trials. Agents targeting specific cellular signaling pathways and injectable radiolabeled compounds make up my past and current clinical investigative interests. I bring a clinical correlative component to complement the ongoing translational activities at Markey Cancer Center.<br>I attended Vanderbilt University Medical School, where I also completed a medical residency and fellowship training in medical oncology and clinical pharmacology. I have previously been on the medical faculties at Vanderbilt University and the Louisiana State University Health Sciences Center in New Orleans.",
    "image": "../assets/img/doctors/doctor_lowell.jpg"
  },

  {
    "id": 4,
    "name": "Brian Armentrout",
    "phone": "549-6248520",
    "email": "brian.armentrout@hospidif.com",
    "bio": "My name is Brian Armentrout and I am currently a physician assistant in the Division of Internal Medicine-Nephrology. I completed my undergraduate degree in nutrition at the University of Dayton and worked as a renal dietitian prior to entering PA school. I attended Baylor College of Medicine in Houston and began my career there as a physician assistant with a large private nephrology group. In that role, I worked exclusively with outpatients and was responsible for developing patient and staff education modules.<br>After 10 years in Texas, my wife and I wanted to move closer to our families and were lucky enough to have an opportunity present itself at UK. Now, after a little more than a year with the UK Nephrology team, I have had the chance to work within all of our inpatient teams and outpatient clinics serving people of the region and beyond.<br>I particularly enjoy working for a team that provides such a variety of services in different settings, including ICU, transplantation, outpatient clinic and dialysis, as well as research. Additionally, my background as a renal dietitian continues to help our patients in understanding how diet plays an essential role in their health and care. I look forward to continuing to learn from my colleagues and patients and the future growth and development of APPs in Nephrology. ",
    "image": "../assets/img/doctors/doctor_armentrout.jpg"
  },

  {
    "id": 5,
    "name": "Kimberly Applegate",
    "phone": "369-1472586",
    "email": "kimberly.applegate@hospidif.com",
    "bio": "Dr. Kimberly Applegate is a leader in radiology, and passionate about improving the health care we provide to patients. She is the immediate past speaker of the council for the American College of Radiology Speaker of the Council and president of the Association for University Radiologists (AUR) Research and Education Foundation. She is also the past president of the AUR, the American Association for Women in Radiology (AAWR), and the Radiology Alliance for Health Services Research. She is a member of both the National and International Councils for Radiation Protection and of the Steering Committee for the Image Gently Campaign to improve safe and effective imaging care of children. More recently, she joined the executive committees of both the Image Wisely Campaign for adults and the World Federation for Paediatric Imaging. Applegate lectures nationally and internationally and has published more than 200 papers.<br>Applegate’s research interests focus on health services and policy, evidence-based summaries of imaging appropriateness, and radiation safety. Research projects include appropriate use of imaging in abdominal pain in children; technology assessment; quality improvement; and CT safety, especially radiation dose reduction techniques. ",
    "image": "../assets/img/doctors/doctor_applegate.jpg"
  },

  {
    "id": 6,
    "name": "Leslie Appiah",
    "phone": "456-9157435",
    "email": "leslie.appiah@hospidif.com",
    "bio": "My name is Leslie A. Appiah; I joined UK HealthCare as a board-certified gynecologist with expertise in oncofertility and fellowship training in pediatric and adolescent gynecology. I bring six years of experience from Cincinnati Children’s Hospital Medical Center, where I served as director of oncofertility and fellowship director of pediatric and adolescent gynecology.<br>I serve as Director of Oncofertility at UK and Norton Healthcare, where I work closely with subspecialists in reproductive endocrinology and infertility, at the Whitney-Hendrickson Women’s Cancer Facility, the Markey Cancer Center and the pediatric oncology team at Kentucky Children’s Hospital. My team and I will collaborate to preserve the fertility and reproductive health of pediatric, adolescent and adult cancer and blood disorders patients of all genders.<br>I attended medical school at the University of Texas Southwestern Medical Center at Dallas. I completed a residency in OB-GYN at Sinai Hospital of Baltimore and a clinical fellowship in pediatric and adolescent gynecology at Texas Children’s Hospital. I have received several teaching awards including the Johns Hopkins Excellence in Teaching Award. My research interests include ovarian tissue cryopreservation, ovarian function post-chemotherapy and radiation, ovarian masses, endometriosis and congenital anomalies of the reproductive tract.",
    "image": "../assets/img/doctors/doctor_appiah.jpg"
  },


  {
    "id": 7,
    "name": "Sameer Badarudeen",
    "phone": "680-3094152",
    "email": "sameer.badarudeen@hospidif.com",
    "bio": "I received my medical degree and post graduate training in orthopedic surgery from University of Kerala. I was awarded a traveling fellowship to the U.S. to visit the Mayo Clinic in 2005. In 2006, I earned my masters in public health at the Southern Illinois University. I then joined Cedars Sinai Medical Center, Los Angeles, for my general surgery internship. After graduating from Cedars Sinai Medical Center, I moved to Boston University where I completed an orthopedic surgery residency training. I am specialized in hip and knee replacement surgery through a fellowship training in adult reconstruction from the University of Louisville.<br>I welcome all patients, being part of the University of Kentucky as a faculty enables me to take care of patients from all financial backgrounds even those who do not have insurance.",
    "image": "../assets/img/doctors/doctor_badarudeen.jpg"
  },

  {
    "id": 8,
    "name": "Stephen Amato",
    "phone": "789-2016549",
    "email": "stephen.amato@hospidif.com",
    "bio": "My name is Stephen Amato; I am a Medical Geneticist specializing in inherited diseases in children and adults, with special interest in metabolic and molecular disorders, neurogenetics, and ciliary abnormalities. I have been active in public health genetics and newborn screening and has been involved in organizing genetic services at the state, regional, and national levels.<br>I have an undergraduate degree in chemistry and biology and a master’s degree in psychology and counseling from Columbia University, New York. I received my medical degree and trained in pediatrics and critical care medicine at the University of Nebraska.<br>I was a Damon Runyon Memorial Fellow for Cancer Research at New York University and Beth Israel Medical Center, and received a PhD in Human Genetics and Cytogenetics from NYU.<br>I have held appointments at the University of Nebraska, West Virginia University, University of Maryland, Johns Hopkins University, and Tufts University. I have coordinated newborn metabolic screening for the state of Arizona while a faculty member at Phoenix Children’s Hospital, prior to joining the faculty at the University of Kentucky.<br>I am board certified in Pediatrics, Clinical Genetics and Laboratory Cytogenetics, and is qualified in Aerospace Medicine.",
    "image": "../assets/img/doctors/doctor_amato.jpg",
    "area_res": 1
  },

  {
    "id": 9,
    "name": "Susanne Arnold",
    "phone": "302-8513674",
    "email": "susanne.arnold@hospidif.com",
    "bio": "My name is Susanne M. Arnold; I received my medical degree from the University of Kentucky, College of Medicine, Lexington. I completed a residency in Internal Medicine at the University of Virginia and fellowship in Medical Oncology and Hematology at the University of Kentucky, Lexington.<br>I am board certified by the American Board of Internal Medicine in Medical Oncology. I am the Associate Director of Clinical Translation of the Markey Cancer Center with interests in lung cancer, head and neck cancer and early therapeutics. ",
    "image": "../assets/img/doctors/doctor_arnold.jpg"
  },

  {
    "id": 10,
    "name": "Vrushali Angadi",
    "phone": "375-9152384",
    "email": "vrushali.angadi@hospidif.com",
    "bio": "Vrushali Angandi earned her doctoral degree in rehabilitation sciences from the University of Kentucky, under the mentorship of Dr. Joseph Stemple. She received her bachelor's and master's degree in speech-language pathology and audiology from the University of Mumbai, India. She completed a research fellowship at the Tata Memorial Hospital in Mumbai, India with a focus on alaryngeal voice and speech rehabilitation.<br>I specialize in the rehabilitation following head and neck cancers, alaryngeal speech rehabilitation and management of voice, swallowing and upper airway disorders.",
    "image": "../assets/img/doctors/doctor_angadi.jpg",
    "area_res": 4
  }
]

const egdoctorsMilano = [
  {
    "id": 7,
    "name": "Sameer Badarudeen",
    "phone": "680-3094152",
    "email": "sameer.badarudeen@hospidif.com",
    "bio": "I received my medical degree and post graduate training in orthopedic surgery from University of Kerala. I was awarded a traveling fellowship to the U.S. to visit the Mayo Clinic in 2005. In 2006, I earned my masters in public health at the Southern Illinois University. I then joined Cedars Sinai Medical Center, Los Angeles, for my general surgery internship. After graduating from Cedars Sinai Medical Center, I moved to Boston University where I completed an orthopedic surgery residency training. I am specialized in hip and knee replacement surgery through a fellowship training in adult reconstruction from the University of Louisville.<br>I welcome all patients, being part of the University of Kentucky as a faculty enables me to take care of patients from all financial backgrounds even those who do not have insurance.",
    "image": "../assets/img/doctors/doctor_badarudeen.jpg"
  },

  {
    "id": 8,
    "name": "Stephen Amato",
    "phone": "789-2016549",
    "email": "stephen.amato@hospidif.com",
    "bio": "My name is Stephen Amato; I am a Medical Geneticist specializing in inherited diseases in children and adults, with special interest in metabolic and molecular disorders, neurogenetics, and ciliary abnormalities. I have been active in public health genetics and newborn screening and has been involved in organizing genetic services at the state, regional, and national levels.<br>I have an undergraduate degree in chemistry and biology and a master’s degree in psychology and counseling from Columbia University, New York. I received my medical degree and trained in pediatrics and critical care medicine at the University of Nebraska.<br>I was a Damon Runyon Memorial Fellow for Cancer Research at New York University and Beth Israel Medical Center, and received a PhD in Human Genetics and Cytogenetics from NYU.<br>I have held appointments at the University of Nebraska, West Virginia University, University of Maryland, Johns Hopkins University, and Tufts University. I have coordinated newborn metabolic screening for the state of Arizona while a faculty member at Phoenix Children’s Hospital, prior to joining the faculty at the University of Kentucky.<br>I am board certified in Pediatrics, Clinical Genetics and Laboratory Cytogenetics, and is qualified in Aerospace Medicine.",
    "image": "../assets/img/doctors/doctor_amato.jpg",
    "area_res": 1
  },

  {
    "id": 9,
    "name": "Susanne Arnold",
    "phone": "302-8513674",
    "email": "susanne.arnold@hospidif.com",
    "bio": "My name is Susanne M. Arnold; I received my medical degree from the University of Kentucky, College of Medicine, Lexington. I completed a residency in Internal Medicine at the University of Virginia and fellowship in Medical Oncology and Hematology at the University of Kentucky, Lexington.<br>I am board certified by the American Board of Internal Medicine in Medical Oncology. I am the Associate Director of Clinical Translation of the Markey Cancer Center with interests in lung cancer, head and neck cancer and early therapeutics. ",
    "image": "../assets/img/doctors/doctor_arnold.jpg"
  },

  {
    "id": 10,
    "name": "Vrushali Angadi",
    "phone": "375-9152384",
    "email": "vrushali.angadi@hospidif.com",
    "bio": "Vrushali Angandi earned her doctoral degree in rehabilitation sciences from the University of Kentucky, under the mentorship of Dr. Joseph Stemple. She received her bachelor's and master's degree in speech-language pathology and audiology from the University of Mumbai, India. She completed a research fellowship at the Tata Memorial Hospital in Mumbai, India with a focus on alaryngeal voice and speech rehabilitation.<br>I specialize in the rehabilitation following head and neck cancers, alaryngeal speech rehabilitation and management of voice, swallowing and upper airway disorders.",
    "image": "../assets/img/doctors/doctor_angadi.jpg",
    "area_res": 4
  }
]

function init() {
  document.getElementById("sectionHeader").innerHTML = "All Doctors";
  updateDoctorList(egdoctors);
  $('#all-doctors-button').addClass("active")
  for (var i in eglocations) {
    $('#doctorsPanelRight').append(
      `<a href="#" class="list-group-item" id="location-${eglocations[i].id}-button" onClick="clickLocationFilter(${eglocations[i].id})">${eglocations[i].name}</a>`)
  }
}

function updateDoctorList(doctors) {
  document.getElementById("doctorsPanelLeft").innerHTML = "";
  for (var i in doctors) {
    $('#doctorsPanelLeft').append(
      `<div class="col-xs-6 col-lg-4" style="padding-left: 10px; padding-right: 10px;">
        <div class="well">
          <h3>${doctors[i].name}</h3>
          <img class="center-img img-circle elevate center-block" width="150px" height="150px" style="object-fit: contain;" alt="location img" src="${doctors[i].image}">
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
  for (var i in eglocations) {
    if (eglocations[i].id == id) {
      var name = eglocations[i].name
    }

  }
  document.getElementById("sectionHeader").innerHTML = "All Doctors in " + name;
  updateDoctorList(egdoctorsMilano);
  deactivateAllButton();
  $('#location-' + id + '-button').addClass("active")
}

function deactivateAllButton() {
  $('#all-doctors-button').removeClass("active")
  for (var i in eglocations) {
    $('#location-' + eglocations[i].id + '-button').removeClass("active")
  }

}

// TODO la funzione deve riportare nella pagina precedente
function goBack() {
  console.log("back")
}

init();