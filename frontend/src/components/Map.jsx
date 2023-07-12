import "leaflet/dist/leaflet.css";

import { useState, useMemo } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import ResetMap from "../components/ResetMap";

function Map() {
  const markerScene = [
    {
      geocode: [46.14159, -1.16914],
      popUp: "Flying High",
    },
    {
      geocode: [46.14332, -1.17148],
      popUp: "Sonic Sphere",
    },
    {
      geocode: [46.14295, -1.16654],
      popUp: "Electronic Dawn",
    },
    {
      geocode: [46.14052, -1.17105],
      popUp: "Sunset Stage",
    },
  ];

  const markerCamping = {
    geocode: [46.13067, -1.14631],
    popUp: "Zone de Camping",
  };

  const markerToilets = [
    {
      geocode: [46.14193, -1.17129],
      popUp: "W.C.1",
    },
    {
      geocode: [46.14192, -1.16769],
      popUp: "W.C.2",
    },
  ];

  const markerFood = [
    {
      geocode: [46.141, -1.16927],
      popUp: "food-truc",
    },
    {
      geocode: [46.1409, -1.16978],
      popUp: "BeerCraft",
    },
  ];

  const markerEntrance = [
    {
      geocode: [46.1408, -1.1686],
      popUp: "Entrée du festival 1",
    },
    {
      geocode: [46.14111, -1.16613],
      popUp: "Entrée du festival 2",
    },
  ];

  const concertIcon = new Icon({
    iconUrl: "../src/assets/Images/concerts.png",
    iconSize: [32, 32],
  });

  const campingIcon = new Icon({
    iconUrl: "../src/assets/Images/places.png",
    iconSize: [32, 32],
  });

  const toiletsIcon = new Icon({
    iconUrl: "../src/assets/Images/wc.png",
    iconSize: [32, 32],
  });

  const foodIcon = new Icon({
    iconUrl: "../src/assets/Images/food.png",
    iconSize: [32, 32],
  });

  const entranceIcon = new Icon({
    iconUrl: "../src/assets/Images/tickets.png",
    iconSize: [32, 32],
  });

  const center = [46.1406, -1.1606];

  const [map, setMap] = useState(null);

  const displayMap = useMemo(
    () => (
        <div className="h-full w-full">
      <MapContainer
        className="h-full w-full rounded-2xl ml-4"
        center={center}
        zoom={14}
        minZoom={7}
        maxZoom={18}
        ref={setMap}
      >
        {/* OPEN STREET MAPS TILES */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup>
          {markerScene.map((marker) => (
            <Marker
              key={marker.popUp}
              position={marker.geocode}
              icon={concertIcon}
            >
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
          <Marker position={markerCamping.geocode} icon={campingIcon}>
            <Popup>{markerCamping.popUp}</Popup>
          </Marker>
          {markerToilets.map((marker) => (
            <Marker
              key={marker.popUp}
              position={marker.geocode}
              icon={toiletsIcon}
            >
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
          {markerFood.map((marker) => (
            <Marker
              key={marker.popUp}
              position={marker.geocode}
              icon={foodIcon}
            >
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
          {markerEntrance.map((marker) => (
            <Marker
              key={marker.popUp}
              position={marker.geocode}
              icon={entranceIcon}
            >
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
        </div>
    ),
    []
  );

  return (
    <div className="h-60 w-72">
      {map ? <ResetMap map={map} center={center} /> : null}
      {displayMap }
    </div>
  );
}

export default Map;