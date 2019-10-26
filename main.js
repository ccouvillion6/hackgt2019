//code ripped straight from Leaflet tutorials


var mapboxAccessToken = 'pk.eyJ1IjoiY2NvdXZpbGxpb242IiwiYSI6ImNrMjdwNGJ5eTAyOXIzb25yc3V6Mmtkcm8ifQ.1zs1ALhenQunRGELj8KVMg';
var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
	id: 'mapbox.light',
	attribution: 'Mapbox'
}).addTo(map);
