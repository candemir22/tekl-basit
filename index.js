let featureLayer;
let marker;

async function initMap() {
    // Request needed libraries.
    await google.maps.importLibrary("maps");
    // Get the gmp-map element.
    const mapElement = document.querySelector("gmp-map");
    const map = new google.maps.Map(document.getElementById("map"), {    zoom: 18,    center: { lat: 42, lng: 42 },    mapTypeId: "terrain",  });
    let marker;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 59.325, lng: 18.07 },
  });

  marker = new google.maps.Marker({
    map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: 59.327, lng: 18.067 },
  });
  marker.addListener("click", toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else { marker.setAnimation(google.maps.Animation.BOUNCE);  }
}
    
    
    // Get the inner map.
    const innerMap = mapElement.innerMap;
    // Get the feature layer.
    featureLayer = innerMap.getFeatureLayer(google.maps.FeatureType.LOCALITY);
    // Define a style with purple fill and border.
    const featureStyleOptions = {
        strokeColor: '#810FCB',
        strokeOpacity: 1.0,
        strokeWeight: 3.0,
        fillColor: '#810FCB',
        fillOpacity: 0.5
    };
    // Apply the style to a single boundary.
    featureLayer.style = (options) => {
        if (options.feature.placeId == 'ChIJ0zQtYiWsVHkRk8lRoB1RNPo') { // Hana, HI
            return featureStyleOptions;
        }
    };
}

initMap();




