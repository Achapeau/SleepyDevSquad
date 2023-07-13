import { Link } from "react-router-dom";

import Button from "../components/Button";
import Map from "../components/Map";

import cities from "../assets/Tableaux/ArrayCity.json";
import { useState } from "react";

import * as turf from "@turf/turf";

import "../styles/Accueil.css";

function Accueil() {
  const [selectCity1, setSelectCity1] = useState(
    {
    "id":1,
    "name":"Albi", 
    "url": "../src/assets/Images/blasons/Blason_Albi.png",
    "x": 0.14,
    "y": 0.92
}
);
  const [selectCity2, setSelectCity2] = useState(
    {
    "id":2,
    "name":"Arles",
    "url": "../src/assets/Images/blasons/Blason_Arles.png",
    "x": 0.62,
    "y": 43.67
}
);

  const calculDistance = () => {
    const point1 = turf.point([selectCity1.y, selectCity1.x]);
    const point2 = turf.point([selectCity2.y, selectCity2.x]);
    const distance = (turf.distance(point1, point2)).toFixed(2);
    console.log(distance);
    localStorage.setItem("distance", distance)

  }
  

  return (
    <main className="bg-almostWhite font-mono flex flex-grow justify-center min-w-full">
      <div className="mt-4 max-w-4xl flex flex-col w-full">
        <h1 className="text-xl mb-6 ml-2 text-blue">Bienvenue Cousin Hub !</h1>
        <div className="flex mx-2 h-32 md:justify-center">
          <div className="text-xs text-blue max-w-md">
            <p>
              Que vous souhaitiez faire des courses en ville ou découvrir de
              lointaines contrées, Tuum Vehiculum est là pour vous.
            </p>
            <p>Choisissez parmi nos nombreux véhicules et options.</p>
            <p>Votre trajet sera personnalisé à vos besoins.</p>
          </div>
          <div>
            <svg
              width="84"
              height="73"
              viewBox="0 0 84 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="42" cy="36.5" rx="42" ry="36.5" fill="#F2B705" />
            </svg>
            <img
              className="h-40 relative bottom-32 md:h-44"
              src="../src/assets/Images/paysan.png"
              alt="paysan"
            />
          </div>
        </div>
        <div className="flex items-center justify-around flex-col">
          <h2 className="font-sans text-brown text-xl mb-2">
            Querir ta destination
          </h2>
          <div className="flex items-center flex-col md:flex-row ">
            <div className="flex flex-col w-48 justify-center">
              <label htmlFor="departure" className="mt-2 text-brown">
                Départ
              </label>
              <select
                name="departure"
                id="departure"
                className="w-full p-1 rounded-md bg-blue drop-shadow-lg"
                onChange={(e) => setSelectCity1(cities.find((el)=> el.id == e.target.value))}
              >
                <option value="">---</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
              <label htmlFor="arrival" className="mt-4 text-brown">
                Arrivée
              </label>
              <select
                name="arrival"
                id="arrival"
                className="mb-8 w-full p-1 rounded-md bg-blue drop-shadow-lg"
                onChange={(e) => setSelectCity2(cities.find((el)=> el.id == e.target.value))}
              >
                <option value="">---</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="h-100 mb-16" >
              <Map city1={selectCity1}  city2={selectCity2} />
             
            </div>
          </div>
          <div
            onClick={calculDistance}
          >
          <Link to="/choixvehicule/">
            <Button
            
              btnName="Querir son char"
            />
          </Link>
          </div>
          <div>
            <img src="../src/assets/Images/charette.png" alt="charette" className="Charette"/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Accueil;
