	
    // MARKER FONCTİONLARI 
function kazibol() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
	window.speechSynthesis.speak(new SpeechSynthesisUtterance('KAZI KODU 128.60'));
  } else {
    	window.speechSynthesis.speak(new SpeechSynthesisUtterance('KAZI ALANI '));
    marker.setAnimation(google.maps.Animation.BOUNCE);
    }}

function cikis() {
     marker.setAnimation(null);
     	window.speechSynthesis.speak(new SpeechSynthesisUtterance('bu bölgenin proje kodu 128.60'));  }
	    // MARKER FOCTION   BITTI



    // HESAPLAMA  FONCTİONLARI 
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
const map = new google.maps.Map(document.getElementById("map"), {    zoom: 8,    center: { lat:42.886, lng:42.268 },    mapTypeId: "terrain",  });

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
	
	
	
  const svgMarker = {
    path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "RED",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,

    anchor: new google.maps.Point(42, 42),
  };

  new google.maps.Marker({
    position: map.getCenter(),
    icon: svgMarker,
    map: map,
  });


var kmlLayer = new google.maps.KmlLayer({
  url: 'C:\Users\saitc\OneDrive\Desktop\ikili\SAT1.kml',
  map: map
});





	//FONTION INITMAP BBITIS 
 	}


	
	
	



