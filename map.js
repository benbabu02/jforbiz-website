const map = L.map("map", {
  zoomControl: true,
  scrollWheelZoom: false
}).setView([40, -45], 3);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: ""
}).addTo(map);

const markerStyle = {
  radius: 12,
  fillColor: "#2fa0d2",
  color: "#2fa0d2",
  fillOpacity: 1
};

const ny = L.circleMarker([40.7128, -74.0060], markerStyle).addTo(map);
ny.bindPopup(`
  <b>New York</b><br>
  +1 (845) 573-3060<br>
  sales@jforbizinternational.com
`);

const tor = L.circleMarker([43.6532, -79.3832], markerStyle).addTo(map);
tor.bindPopup(`
  <b>Toronto</b><br>
  +1 (416) 245-7615<br>
  sales@jforbizinternational.ca
`);