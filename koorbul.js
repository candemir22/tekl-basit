
const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function success(position) {
  x.innerHTML = "Latitude: " + position.coords.longitude + 
  "<br>Longitude: " + position.coords.latitude ;
}
function error() {
  alert("Sorry, no position available.");
}






		
	



	
// SAİT SİSTEM BAŞLANGICI
function initMap() { 
const map = new google.maps.Map(document.getElementById("map"), {    zoom: 5,    center: { lat:42.886, lng:42.268 },    mapTypeId: "terrain",  });

      // üçkenleme gırısı  
  // Define the LatLng coordinates for the polygon's path.
  const triangleCoords = [
    { lat: 42.774, lng: 42.19 },
    { lat: 42.466, lng:42.118 },
    { lat: 42.321, lng: 42.757 },
    { lat: 42.774, lng: 42.19 },
  ];
  // Construct the polygon.
  
    const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
      bermudaTriangle.setMap(map); 
      // üçkenleme çıkışı
  
  
  
  
      // üçkenleme gırısı
    const triangleCoords2 = [
    { lat: 44.774, lng: 42.19 },
    { lat: 44.466, lng:42.118 },
    { lat: 44.321, lng: 42.757 },
    { lat: 44.774, lng: 42.19 },
  ];
   const bermudaTriangle2 = new google.maps.Polygon({
    paths: triangleCoords2,
    strokeColor: "#FF0040",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
     bermudaTriangle2.setMap(map); 
    // üçkenleme çıkışı
    
  
  
    // MARKER OLUSTUR
  marker = new google.maps.Marker({    map,    draggable: true,    animation: google.maps.Animation.DROP,  position: { lat: 42.327, lng: 42.067 },  });
    marker.addListener("mouseover", kazibol);   
    marker.addListener("click", cikis); 
	
	
     marker2 = new google.maps.Marker({    map, position: { lat: 41.327, lng: 41.067 }, });
     marker3 = new google.maps.Marker({    map,  position: { lat: 41.127, lng: 41.167 }, });
	     // MARKER FONCTION EMİRLER 
	
	
		   //FONTION INITMAP BBITIS 
 	}


	
	
	
    // MARKER FONCTİONLARI 
function kazibol() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    	window.speechSynthesis.speak(new SpeechSynthesisUtterance('KAZIbölgesi '));
    marker.setAnimation(google.maps.Animation.BOUNCE);
    }}

function cikis() {
     marker.setAnimation(null);
     	window.speechSynthesis.speak(new SpeechSynthesisUtterance('bu bölgenin proje kodu 128.60'));  }
	    // MARKER FOCTION   BITTI



