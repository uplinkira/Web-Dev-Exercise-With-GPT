

// Load and add the static JSON data for stops and real bus line stops to the map
async function loadStaticData(filePath) {
  const response = await fetch(filePath);
  const data = await response.json();

  L.geoJSON(data, {
      onEachFeature: function (feature, layer) {
          layer.bindPopup(feature.properties.NOM_PARADA || 'No name');
      }
  }).addTo(map);
}

loadStaticData('20240301+stops.json');
loadStaticData('realBuslineStops.json');