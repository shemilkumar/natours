export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic2hlbWlsIiwiYSI6ImNsZGszemE4ZzBoM3czbmxndjN2MzZyeHAifQ.G1Yfj0FJuYB0zzLuQyabpw';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shemil/cldk4ubg4004s01rn61y6tqs4',
    //   center: [-118.113491, 34.111745],
    //   zoom: 10,
    //   interactive: false,
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    // Add Marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>${loc.description}</p>`)
      .addTo(map);

    // extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 250,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
