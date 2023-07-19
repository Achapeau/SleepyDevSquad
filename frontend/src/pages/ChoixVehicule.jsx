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
    window.scrollTo(0, 0);
  }, []);

  if (vehiclesData.length > 0) {
    console.log(vehiclesData);
  }
  const km = parseInt(localStorage.getItem("distance"), 10);

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

  const resetFilters = () => {
    setMoteur(null);
    setDecapotable(null);
    setRoues(null);
    setConfort(null);
  };

  return (
    <main className="bg-almostWhite w-screen h-full min-h-screen">
      <div className="">
        <img
          className="w-full h-32 object-cover object-center"
          src="../src/assets/Images/fresque.jpg"
          alt="foule derrière un carrosse avec chevaux"
        />
        <div className="flex flex-col m-5 md:flex-row">
          <details className="dropdown">
            <summary className="m-1 btn bg-blue text-almostWhite text-xl hover:bg-brown">
              Filtres et tri
            </summary>
            <div className="p-2 shadow menu dropdown-content z-[1] bg-blue rounded-box w-52 h-96 overflow-scroll">
              <div className="w-1/6 text-almostWhite  m-5">
                <div>
                  <p className="font-sans text-2xl my-5">Moteur</p>
                  <button
                    value="Cheval"
                    className={`w-28 rounded-lg font-mono text-lg p-2 m-2  border border-blue hover:bg-brown hover:scale-105 hover:text-almostWhite active:scale-75 
              ${moteur === "Cheval" ? "bg-brown " : "bg-almostWhite text-blue"}
              `}
                    onClick={handleClickMoteur}
                  >
                    Cheval
                  </button>
                  <button
                    value="Boeuf"
                    className={`w-28 rounded-lg font-mono text-lg p-2 m-2  border border-blue hover:bg-brown hover:scale-105 hover:text-almostWhite active:scale-75 
              ${moteur === "Boeuf" ? "bg-brown " : "bg-almostWhite text-blue"}
              `}
                    onClick={handleClickMoteur}
                  >
                    Boeuf
                  </button>
                  <button
                    value="Âne"
                    className={`w-28 rounded-lg font-mono text-lg p-2 m-2  border border-blue hover:bg-brown hover:scale-105 hover:text-almostWhite active:scale-75 
              ${moteur === "Äne" ? "bg-brown " : "bg-almostWhite text-blue"}
              `}
                    onClick={handleClickMoteur}
                  >
                    Âne
                  </button>
                  <button
                    value="Humain"
                    className={`w-28 rounded-lg font-mono text-lg p-2 m-2  border border-blue hover:bg-brown hover:scale-105 hover:text-almostWhite active:scale-75 
              ${moteur === "Humain" ? "bg-brown " : "bg-almostWhite text-blue"}
              `}
                    onClick={handleClickMoteur}
                  >
                    Humain
                  </button>
                </div>
                <div>
                  <p className="font-sans text-2xl my-5">Decapotable</p>
                  <button
                    value="1"
                    className={`w-28 rounded-lg font-mono text-lg p-2 m-2  border border-blue hover:bg-brown hover:scale-105 hover:text-almostWhite active:scale-75 
              ${decapotable === 1 ? "bg-brown " : "bg-almostWhite text-blue"}
              `}
                    onClick={handleDecapotable}
                  >
                    oui
                  </button>
                  <button
                    value="0"
                    className={`w-28 rounded-lg font-mono text-lg p-2 m-2  border border-blue hover:bg-brown hover:scale-105 hover:text-almostWhite active:scale-75 
              ${decapotable === 0 ? "bg-brown " : "bg-almostWhite text-blue"}
              `}
                    onClick={handleDecapotable}
                  >
                    non
                  </button>
                </div>
                <div>
                  <p className="font-sans text-2xl my-5">Roues</p>
                  <button
                    value="2"
                    className={`w-28 rounded-lg font-mono text-lg p-2 m-2  border border-blue hover:bg-brown hover:scale-105 hover:text-almostWhite active:scale-75 
              ${roues === 2 ? "bg-brown " : "bg-almostWhite text-blue"}
              `}
                    onClick={handleRoues}
                  >
                    2 roues
                  </button>
                  <button
                    value="4"
                    className={`w-28 rounded-lg font-mono text-lg p-2 m-2  border border-blue hover:bg-brown hover:scale-105 hover:text-almostWhite active:scale-75 
              ${roues === 4 ? "bg-brown " : "bg-almostWhite text-blue"}
              `}
                    onClick={handleRoues}
                  >
                    4 roues
                  </button>
                </div>
                <div>
                  <p className="font-sans text-2xl my-5">Confort</p>
                  <button
                    value="Royal"
                    className={`w-28 rounded-lg font-mono text-lg p-2 m-2  border border-blue hover:bg-brown hover:scale-105 hover:text-almostWhite active:scale-75 
              ${confort === "Royal" ? "bg-brown " : "bg-almostWhite text-blue"}
              `}
                    onClick={handleConfort}
                  >
                    Royal
                  </button>
                  <button
                    value="Noble"
                    className={`w-28 rounded-lg font-mono text-lg p-2 m-2  border border-blue hover:bg-brown hover:scale-105 hover:text-almostWhite active:scale-75 
              ${confort === "Noble" ? "bg-brown " : "bg-almostWhite text-blue"}
              `}
                    onClick={handleConfort}
                  >
                    Noble
                  </button>
                  <button
                    value="Serf"
                    className={`w-28 rounded-lg font-mono text-lg p-2 m-2  border border-blue hover:bg-brown hover:scale-105 hover:text-almostWhite active:scale-75 
              ${confort === "Serf" ? "bg-brown " : "bg-almostWhite text-blue"}
              `}
                    onClick={handleConfort}
                  >
                    Serf
                  </button>
                </div>
                <div>
                  <button
                    onClick={resetFilters}
                    className="w-28 m-2 rounded-lg p-2 border font-mono text-lg border-blue bg-almostWhite text-blue hover:bg-brown active:scale-75 hover:text-almostWhite hover:scale-105"
                  >
                    Réinitialiser filtres
                  </button>
                </div>

                <select
                  onChange={handleTri}
                  className="bg-almostWhite text-blue pl-2 p-1 font-mono"
                >
                  <option value="tri">Trier les véhicules</option>
                  <option value="prixCroissant">Par prix croissant</option>
                  <option value="prixDécroissant">Par prix décroissant</option>
                  <option value="duréeCroissante">Par durée croissante</option>
                  <option value="duréeDécroissante">
                    Par durée décroissante
                  </option>
                </select>
              </div>
            </div>
          </details>
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
                .sort((a, b) => tri === "prixCroissant" && a.prix - b.prix)
                .sort((a, b) => tri === "prixDécroissant" && b.prix - a.prix)
                .sort(
                  (a, b) => tri === "duréeCroissante" && b.vitesse - a.vitesse
                )
                .sort(
                  (a, b) => tri === "duréeDécroissante" && a.vitesse - b.vitesse
                )
                .map((vehicle) => (
                  <Vehicule
                    key={vehicle.id}
                    image={vehicle.image}
                    name={vehicle.name}
                    prix={Math.round((vehicle.prix / 10) * km)}
                    temps={km / vehicle.vitesse}
                    id={vehicle.id}
                    description={vehicle.description}
                  />
                ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ChoixVehicule;
