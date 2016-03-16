var apiKey = 'AIzaSyAqP_35y_R28hWtcLfjL666jemaO4vnHMI';

var map;
function initMap() {
  navigator.geolocation.getCurrentPosition(function(position){

    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: position.coords.latitude, lng: position.coords.longitude},
      zoom: 15
    });
  });
}
