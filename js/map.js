function initMap() {

	var cork = {lat: 51.8872066, lng:8.5297599};
	var map = new google.maps.Map(document.getElementById('map'),{

		zoom: 4,
		center: cork
	});

	var marker = new google.maps.Marker({
		position: cork,
		map: map
	});
}

