var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {center: {lat: 41.8818, lng: -87.6231}, zoom: 13,})

  var marker = new google.maps.Marker({position: {lat:41.980935,lng: -87.669052}, map:map, animation: google.maps.Animation.BOUNCE});

  var info = new google.maps.InfoWindow({
    content: "<h5>My Neighborhood (Andersonville)</h5>"
  })
  info.open(map,marker)

  const location = [
    {lat:41.980935,lng:-87.669052},
    {lat:41.980935,lng:-87.669052}
  ]

  var neighborhood = new google.maps.Circle({
    center:{ lat: 41.980935, lng: -87.669052},
    radius:700,
    strokeColor: "blue",
    strokeOpacity:0.5,
    strokeWeight:1.5,
    fillColor:"blue",
    fillOpacity:0.1,
    map: map
  });
};


window.initMap=initMap;
alert("ALERT! This is a map.");
