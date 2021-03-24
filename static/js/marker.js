var myMap = L.map("map", {
  center: [39.50, -98.35],
  zoom: 5
});

//Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

var newtry = "brew.geoJSON";

d3.json("brew.geoJSON", function(response)
{
  createFeatures(response.features)
});

function createFeatures(breweryData) {

// Create a GeoJSON layer containing the features array on the breweryData object
// // Run the onEachFeature function once for each piece of data in the array
var breweries = L.geoJSON(breweryData, {
  style: function(feature) {
      return {
          fillColor: '#06406F',
          weight: 2,
          opacity: 1,
          color: 'black',
          fillOpacity: 0.85
      };
  },

  pointToLayer: function(feature, latlng) {
      return new L.CircleMarker(latlng, {radius: 50});
  },
  onEachFeature: onEachFeature
});

  // Add breweries layer to the Map
  breweries.addTo(myMap);
}

// d3.json(newtry, function(response) {

//   console.log(response);

//   for (var i = 0; i < response.length; i++) {
//     var location = response[i].location;

//     if (location) {
//       L.marker([location.coordinates[1], location.coordinates[0]]).addTo(myMap);
//     }
//   }

// });