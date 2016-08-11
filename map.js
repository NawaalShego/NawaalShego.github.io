
      //function initMap() {
        //var mapDiv = document.getElementById('map');
        //var map = new google.maps.Map(mapDiv, {
            //center: {lat: 47.484995, lng: -122.355264},
            //zoom: 10
        //});
      //}
      

function initMap() {
  var myLatLng0 = {lat: 47.484995, lng: -122.355264};
  var myLatLng1 = {lat: 47.464639, lng: -122.329972};
  var myLatLng2 = {lat: 47.612877, lng: -122.335268};
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng0
  });

  var marker0 = new google.maps.Marker({
    position: myLatLng0,
    map: map,
    title: 'Hello World!'
  });

  var marker1 = new google.maps.Marker({
    position: myLatLng1,
    map: map,
    title: 'Hello World!'
  });

  var marker2 = new google.maps.Marker({
    position: myLatLng2,
    map: map,
    title: 'Hello World!'
  });

}
