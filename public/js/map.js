mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: [78.4772, 17.4065], // starting position [lng, lat]
  zoom: 9, // starting zoom
});
