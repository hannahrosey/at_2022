/* Centerline data: https://github.com/anandthakker/apptrail/blob/master/data/centerline-merged.json */
// Get data and load to map
mapboxgl.accessToken = "pk.eyJ1IjoiaGFubmFocm9zZXkiLCJhIjoiY2t6aG5ocmh0NDNvdzJvbmZxMG44czVyayJ9.GfvFPfGH_vdPxHOIGVGEPg"

// lngLat for the fountain in Washington Square Park
var trailCenter = [-78.464355,37.840157]

$.getJSON('./data/centerline-merged.json', function(trailData) {
  var map = new mapboxgl.Map({
    container: 'map-container', // HTML container id
    style: 'mapbox://styles/mapbox/light-v9', // style URL
    center: trailCenter, // starting position as [lng, lat]
    zoom: 3
    });

  // add airbnb data source
  map.on('load', function() {
    map.addSource('trail-centerline', {
        type: 'geojson',
        data: trailData
      });
    // add centerline layer
    map.addLayer({
        id: 'trail-centerline',
        type: 'line',
        source: 'trail-centerline',
        layout: {
          visibility: 'visible',
        }
      });

  });
});
