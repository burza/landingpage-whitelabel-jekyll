//= require leaflet.min

$(function() {
  var LatLng = [53.564240, 9.920150],
  map = L.map('map', {
    scrollWheelZoom: false
  }).setView(LatLng, 15),
  MarkerIcon = L.icon({
    iconUrl: '/assets/img/map-marker.png',
    iconRetinaUrl: '/assets/img/map-marker@2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 40],
    popupAnchor: [-3, -76],
        // shadowUrl: 'http://cdn.leafletjs.com/leaflet-0.6.4/images/marker-shadow.png',
        // shadowRetinaUrl: 'http://cdn.leafletjs.com/leaflet-0.6.4/images/marker-shadow@2x.png',
        shadowSize: [41, 41],
        shadowAnchor: [10, 40]
  });

  // TODO (mw): don't load anything from Amazon Web Services
  L.tileLayer('https://ssl_tiles.cloudmade.com/BC9A493B41014CAABB98F0471D759707/{styleId}/256/{z}/{x}/{y}.png', {
    styleId: 109095,
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
  }).addTo(map);

  L.marker(LatLng, { icon: MarkerIcon }).addTo(map);
});
