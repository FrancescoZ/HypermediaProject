function getLocations(){
/*  fetch('/location')
    .then(function(response) {
    return response.json();
  })
    .then(function(data) {
    data.map(function(location){
      $('#locationsPanel').append(
        '<div class="row featurette">' +
        '<div class="col-md-7">' +
        '<h2 class="featurette-heading">First featurette heading. <span class="text-muted">It\'ll blow your mind.</span></h2>' +
        '<p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>' +
        '</div>' +
        '<div class="col-md-5">' +
        '<img class="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="500x500" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzUwMHg1MDAvYXV0bwpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNi4wLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsjaG9sZGVyXzE1YzU5YTQ2ZjQzIHRleHQgeyBmaWxsOiNBQUFBQUE7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6MjVwdCB9IF1dPjwvc3R5bGU+PC9kZWZzPjxnIGlkPSJob2xkZXJfMTVjNTlhNDZmNDMiPjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRUVFRUVFIi8+PGc+PHRleHQgeD0iMTg1LjEzMzMzMTI5ODgyODEyIiB5PSIyNjEuMjc5OTk5NTQyMjM2MzQiPjUwMHg1MDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=" data-holder-rendered="true">' +
        '</div>' +
        '</div>' +
        '<hr class="featurette-divider">');
    });
  });*/
    
  $('#locationsPanel').append(
      '<h1>Select a location to filter the doctors.</h1>');
      
  for (i = 0; i < 4; i++) {
      if (i % 3 == 0){
          $('#locationsPanel').append('<div class="row">');
      }
    $('#locationsPanel').append(
        '<div class="col-lg-4">' +
        '<img class="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">' +
        '<h2>Milano Repubblica</h2>' +
        '<p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbileo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>' +
        '</div><!-- /.col-lg-4 -->');
      if (i+1 % 3 == 0){
          $('#locationsPanel').append('</div>');
      }
  }

};

getLocations();