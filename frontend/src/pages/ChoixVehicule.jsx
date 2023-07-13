import Proptypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";

import Vehicule from "../components/Vehicule";

function ChoixVehicule() {
  //Récupérer les informations depuis l'API
  const [vehiclesData, setVehiclesData] = useState([]);
  const [moteur, setMoteur] = useState(null);
  const [decapotable, setDecapotable] = useState(null);
  const [confort, setConfort] = useState(null);
  const [roues, setRoues] = useState(null);
  const [tri, setTri] = useState(null);

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

  const handleClickMoteur = (e) => {
    setMoteur(e.target.value);
  };

  const handleDecapotable = (e) => {
    setDecapotable(parseInt(e.target.value, 10));
  };

  const handleRoues = (e) => {
    setRoues(parseInt(e.target.value, 10));
  };

  const handleConfort = (e) => {
    setConfort(e.target.value);
  };

  const handleTri = (e) => {
    setTri(e.target.value);
  };

  console.log(tri);

  const resetFilters = () => {
    setMoteur(null);
    setDecapotable(null);
    setRoues(null);
    setConfort(null);
  };

  return (
    <>
      <img
        class="w-full h-32 object-cover object-center"
        src="../src/assets/Images/fresque.jpg"
        alt="foule derrière un carrosse avec chevaux"
      />
      <div class="flex flex-col md:flex-row">
        <div class="w-1/6 text-blue font-mono">
          <div>
            <p>Moteur</p>
            <button
              value="Cheval"
              className="w-28 rounded-lg p-1 border border-blue bg-almostWhite hover:bg-blue hover:scale-105 hover:text-almostWhite focus:bg-blue focus:text-almostWhite"
              onClick={handleClickMoteur}
            >
              Cheval
            </button>
            <button value="Boeuf" onClick={handleClickMoteur}>
              Boeuf
            </button>
            <button value="Âne" onClick={handleClickMoteur}>
              Âne
            </button>
            <button value="Humain" onClick={handleClickMoteur}>
              Humain
            </button>
          </div>
          <div>
            <p>Decapotable</p>
            <button value="1" onClick={handleDecapotable}>
              oui
            </button>
            <button value="0" onClick={handleDecapotable}>
              non
            </button>
          </div>
          <div>
            <p>Roues</p>
            <button value="2" onClick={handleRoues}>
              2 roues
            </button>
            <button value="4" onClick={handleRoues}>
              4 roues
            </button>
          </div>
          <div>
            <p>Confort</p>
            <button value="Royal" onClick={handleConfort}>
              Royal
            </button>
            <button value="Noble" onClick={handleConfort}>
              Noble
            </button>
            <button value="Serf" onClick={handleConfort}>
              Serf
            </button>
          </div>
          <div>
            <button
              onClick={resetFilters}
              className="w-28 rounded-lg p-1 border border-blue bg-almostWhite hover:bg-blue hover:text-almostWhite hover:scale-105"
            >
              Réinitialiser filtres
            </button>
          </div>

          <select onChange={handleTri}>
            <option value="tri">Trier les véhicules</option>
            <option value="prixCroissant">Par prix décroissant</option>
            <option value="prixDécroissant">Par prix croissant</option>
            <option value="duréeCroissante">Par durée croissante</option>
            <option value="duréeDécroissante">Par durée décroissante</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row md:w-5/6 md:p-8 overflow-hidden flex-wrap justify-center items-center">
          {vehiclesData.length > 0 &&
            vehiclesData
              .filter((elem) => moteur === null || elem.moteur === moteur)
              .filter(
                (elem) =>
                  decapotable === null || elem.decapotable === decapotable
              )
              .filter((elem) => roues === null || elem.roues === roues)
              .filter((elem) => confort === null || elem.confort === confort)
              .map((vehicle) => (
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
