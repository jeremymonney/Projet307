/*
  But :    JS controller for map page
  Auteur : Jeremy Monney
  Date :   12.06.2023
  Version: 1.0
*/
class MapCtrl {
  constructor() {
    this.initMap();
  }

  initMap() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibW9ubmV5ajA2IiwiYSI6ImNsaXN4ZDM3NjE5N2szZG54bGI5MTZzY3oifQ.LZ9qpMsO3zO7gD2Co_Sfiw";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-74.009, 40.705],
      zoom: 9,
    });

    // Example locations
    let locations = [
      { name: "New York Stock Exchange", coordinates: [-74.009, 40.705] },
      { name: "NASDAQ", coordinates: [-74.037, 40.7128] },
      { name: "Tokyo Stock Exchange", coordinates: [139.6917, 35.6895] },
      { name: "Shanghai Stock Exchange", coordinates: [121.4905, 31.2222] },
      { name: "Hong Kong Stock Exchange", coordinates: [114.1667, 22.2793] },
      { name: "London Stock Exchange", coordinates: [-0.095, 51.5151] },
      { name: "Euronext Stock Exchange", coordinates: [4.8994, 52.3792] },
      { name: "Shenzhen Stock Exchange", coordinates: [114.0579, 22.5431] },
      { name: "Toronto Stock Exchange", coordinates: [-79.3832, 43.6511] },
      { name: "Frankfurter Börse", coordinates: [8.6638, 50.1109] },
    ];

    // Add markers to the map
    locations.forEach(function (location) {
      let marker = new mapboxgl.Marker()
        .setLngLat(location.coordinates)
        .setPopup(
          new mapboxgl.Popup().setHTML("<strong>" + location.name + "</strong>")
        )
        .addTo(map);
    });
  }
}
