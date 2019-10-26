//code ripped straight from Leaflet tutorials


var accessToken = 'pk.eyJ1IjoiY2NvdXZpbGxpb242IiwiYSI6ImNrMjdwNGJ5eTAyOXIzb25yc3V6Mmtkcm8ifQ.1zs1ALhenQunRGELj8KVMg';
var mymap = L.map('mapid').setView([37.8, -96], 4);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + accessToken, {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox.light',
	accessToken: accessToken
}).addTo(mymap);
mymap.once('load', () => {
	mymap.resize()
  })

// add json data to map

//highlight on mouseover
function highlightFeature(e) {
	var layer = e.target;

	layer.setStyle({
		weight: 5,
		color: '#666',
		dashArray: '',
		fillOpacity: 0.7
	});

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	}
}

//un-highlight on mouseout
function resetHighlight(e) {
	//geojson.resetStyle(e.target);
}