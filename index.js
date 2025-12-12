let featureLayer;
async function initMap() {
    // Request needed libraries.
    await google.maps.importLibrary("maps");
    // Get the gmp-map element.
   

const map = new google.maps.Map(document.getElementById("map"), {    zoom: 18,    center: { lat: 37.214931, lng: 28.363885 },    mapTypeId: "terrain",  });

    // MARKER OLUSTUR
  marker = new google.maps.Marker({    map,    draggable: true,    animation: google.maps.Animation.DROP,  position: { lat: 42.327, lng: 42.067 },  });
  
  

			
			
}
initMap();