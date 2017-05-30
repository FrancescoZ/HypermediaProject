
function loading(){
  getNews();
  getCommon();
}

function getNews()
{
  let start=0;
  let count=2;
  fetch('/news?start=${start}&limit=${count}')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      data.map(function(news){

      });
    });
}

function getCommon(){
  let start=0;
  let count=5;
  fetch('/common?start=${start}&limit=${count}')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      data.map(function(data.doctors){

      });
      data.map(function(data.services){

      });
      data.map(function(data.area){

      });
    });
}
