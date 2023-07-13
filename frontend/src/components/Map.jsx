import "leaflet/dist/leaflet.css";

import { useState, useMemo } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import ResetMap from "../components/ResetMap";

function Map({ city1, city2 }) {
  const markerCity1 = {
    geocode: [city1.y, city1.x],
    popUp: `${city1.name}`,
  };
  const markerCity2 = {
    geocode: [city2.y, city2.x],
    popUp: `${city2.name}`,
  };

  const city1Icon = new Icon({
    iconUrl: city1.url,
    iconSize: [32, 32],
  });

  const city2Icon = new Icon({
    iconUrl: city2.url,
    iconSize: [32, 32],
  });

  const center = [46.2848, 1.7606];

  const [map, setMap] = useState(null);

  const displayMap = useMemo(
    () => (
      <div className="h-full w-full">
        <MapContainer
          className="h-full w-full rounded-2xl md:ml-4"
          center={center}
          zoom={5}
          minZoom={5}
          maxZoom={18}
          ref={setMap}
        >
          {/* OPEN STREET MAPS TILES */}
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png" />

          <MarkerClusterGroup>
            <Marker position={markerCity1.geocode} icon={city1Icon}>
              <Popup>{markerCity1.popUp}</Popup>
            </Marker>

            <Marker position={markerCity2.geocode} icon={city2Icon}>
              <Popup>{markerCity2.popUp}</Popup>
            </Marker>
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    ),
    [city1, city2, center]
  );

  return (
    <div className="h-100 w-[40vh] lg:h-60">
      {map ? <ResetMap map={map} center={center} /> : null}
      {displayMap}
    </div>
  );
}

export default Map;
