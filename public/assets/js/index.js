

getNews();


function getNews()
{
  let start=0;
  let count=2;
  fetch('/news?start=${start}&limit=${count}')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      data.map(function(news,index){
        let clas= (index==1 ? "active" : "");
        $('#newsGalleryIndex').append('<li data-target="#newsGallery" data-slide-to="${index}" class="${clas}"></li>');
        $('#newsGalleryList').append(
          '<div class="item ${clas}">'+
            '<img class="third-slide" src="" alt="Third slide">'+
            '<div class="container">'+
              '<div class="carousel-caption">'+
                '<h1>${news.name}</h1>'+
                '<p>${new.text.substr(0,200)}</p>'+
                '<!-- <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>-->'+
              '</div>'+
            '</div>'+
          '</div>');
      });
    });
}

/*function getCommon(){
  let start=0;
  let count=5;
  fetch('/common?start=${start}&limit=${count}')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      data.map(function(data){

      });
      data.map(function(data.services){

      });
      data.map(function(data.area){

      });
    });
}*/
