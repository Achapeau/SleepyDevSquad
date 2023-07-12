import Proptypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";

import Vehicule from "../components/Vehicule";

function ChoixVehicule() {
  //Récupérer les informations depuis l'API
  const [vehiclesData, setVehiclesData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/vehicules`)
      .then((response) => {
        setVehiclesData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  if (vehiclesData.length > 0) {
    console.log(vehiclesData);
  }

  const km = 50;

  return (
    <>
      <img
        class="w-full h-32 object-cover object-center"
        src="../src/assets/Images/fresque.jpg"
        alt="foule derrière un carrosse avec chevaux"
      />
      <div class="flex flex-col md:flex-row">
        <div class="w-1/6">
          {/* <div class="flex">
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
            Click
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div> */}
          <select
          // onChange={(e) => setStageFilter(e.target.value)}
          >
            <option value="tri">Trier les véhicules</option>
            <option value="prixCroissant">Par prix décroissant</option>
            <option value="prixDécroissant">Par prix croissant</option>
            <option value="duréeCroissante">Par durée croissante</option>
            <option value="durée Décroissante">Par durée décroissante</option>
          </select>
        </div>
        <div class="flex flex-col md:flex-row md:w-5/6 md:p-8 overflow-hidden flex-wrap justify-center items-center">
          {vehiclesData.length > 0 &&
            vehiclesData.map((vehicle) => (
              <Vehicule
                image={vehicle.image}
                name={vehicle.name}
                prix={vehicle.prix * km}
                temps={km / vehicle.vitesse}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default ChoixVehicule;
