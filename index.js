let featureLayer;
async function initMap() {
    // Request needed libraries.
    await google.maps.importLibrary("maps");
    // Get the gmp-map element.
    //const mapElement = document.querySelector("gmp-map");

    
    
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

    <gmp-map center="42,42" zoom="4" map-id="DEMO_MAP_ID" style="height: 400px">
  <gmp-advanced-marker position="42.4220656,42.0840897" title="Mountain View, CA"></gmp-advanced-marker>
  <gmp-advanced-marker position="42.648994,42.3503845" title="Seattle, WA"></gmp-advanced-marker>
</gmp-map>

    
    // Apply the style to a single boundary.
    featureLayer.style = (options) => {
        if (options.feature.placeId == 'ChIJ0zQtYiWsVHkRk8lRoB1RNPo') { // Hana, HI
            return featureStyleOptions;
        }
    };
}

initMap();


