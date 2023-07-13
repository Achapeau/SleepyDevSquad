import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../components/Button";
import Countdown from "../components/Countdown/Countdown";

import reine from "../assets/Images/reine.png";
import unCocher from "../assets/Images/options/Cocher.png";
import garde from "../assets/Images/options/Garde.png";
import marchandise from "../assets/Images/options/Marchandises.png";

function PersonnaliserVehicule() {
  const [vehiclesData, setVehiclesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/vehicules")
      .then((res) => res.json())
      .then((data) => {
        const itemsData = data.find((item) => item.id === parseInt(id, 10));

        if (itemsData) {
          setVehiclesData(itemsData);
        } else {
          navigate("/not-found");
        }
      })
      .then()
      .catch((err) => console.error(err));
  }, []);

  const km = parseInt(localStorage.getItem("distance"), 10);
  const prix = Math.round((vehiclesData.prix / 10) * km);

  const dateTimer = new Date("July 15, 23 17:20:18");
  const [cocher, setCochet] = useState(false);
  const [gardes, setGardes] = useState(false);
  const [marchandises, setMarchandises] = useState(false);
  const [eau, setEau] = useState(false);
  const [cervoise, setCervoise] = useState(false);
  const [vin, setVin] = useState(false);

  const [price, setPrice] = useState(0);

  const prixFinal = price + prix;

  const navigate = useNavigate();

  const { id } = useParams();

  const handleCocher = () => {
    setCochet(!cocher);
    if (cocher !== true) {
      setPrice(price + 1 * km);
    } else {
      setPrice(price - 1 * km);
    }
  };

  const handleGardes = () => {
    setGardes(!gardes);
    if (gardes !== true) {
      setPrice(price + 3 * km);
    } else {
      setPrice(price - 3 * km);
    }
  };

  const handleMarchandises = () => {
    setMarchandises(!marchandises);
    if (marchandises !== true) {
      setPrice(price + 15);
    } else {
      setPrice(price - 15);
    }
  };

  const handleCruche = () => {
    if (eau !== true) {
      setEau(!eau);
      if (eau !== true) {
        setPrice(price + 3);
      }
    } else if (cervoise !== true) {
      setCervoise(!cervoise);
      if (cervoise !== true) {
        setPrice(price + 5);
      }
    } else if (vin !== true) {
      setVin(!vin);
      if (vin !== true) {
        setPrice(price + 8);
      }
    }
  };

  return (
    <div className="bg-almostWhite px-8 pb-8">
      {vehiclesData && (
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-2/4 lg:pr-12">
            <div className="bg-almostWhite flex justify-center items-center pt-8 lg:pt-16">
              <h1
                className="bg-yellow text-almostWhite h-16 w-80 lg:w-96 rounded-lg drop-shadow-lg flex justify-center items-center text-2xl lg:text-4xl
        "
              >
                Personnalise ton char
              </h1>
            </div>
            <p className="font-mono text-blue text-sm lg:text-lg lg:py-8 py-6 text-center">
              Choisis tes options entre boissons, gardes, cocher ou
              marchandises.
            </p>
            <div className="flex justify-evenly">
              <div className="flex flex-col items-center lg:text-2xl">
                <p className="text-brown">Cruche</p>
                <select
                  onChange={handleCruche}
                  className=" bg-almostWhite text-brown lg:text-xl"
                >
                  <option className="text-center defaultValue bg-blue text-almostWhite">
                    ---
                  </option>
                  <option className="text-center bg-blue text-almostWhite">
                    Eau
                  </option>
                  <option className="text-center bg-blue text-almostWhite">
                    Cervoise
                  </option>
                  <option className="text-center bg-blue text-almostWhite">
                    Vin
                  </option>
                </select>
              </div>
              <div className="flex flex-col items-center lg:text-2xl">
                <p className="text-brown">Cocher</p>
                <input
                  type="checkbox"
                  className="toggle bg-yellow"
                  checked={cocher}
                  onChange={handleCocher}
                />
                <img
                  src={unCocher}
                  alt="Image d'un cochet"
                  className={
                    cocher ? "w-14 lg:w-20 mt-2 flex justify-center" : "hidden"
                  }
                />
              </div>
              <div className="flex flex-col items-center lg:text-2xl">
                <p className="text-brown">Gardes</p>
                <input
                  type="checkbox"
                  className="toggle bg-yellow"
                  checked={gardes}
                  onChange={handleGardes}
                />
                <img
                  src={garde}
                  alt="Image d'un garde"
                  className={
                    gardes ? "w-14 lg:w-20 mt-2 flex justify-center" : "hidden"
                  }
                />
              </div>
              <div className="flex flex-col items-center lg:text-2xl">
                <p className="text-brown">Marchandises</p>
                <input
                  type="checkbox"
                  className="toggle bg-yellow"
                  checked={marchandises}
                  onChange={handleMarchandises}
                />
                <img
                  src={marchandise}
                  alt="Image d'un garde"
                  className={
                    marchandises
                      ? "w-14 lg:w-20 mt-2 flex justify-center"
                      : "hidden"
                  }
                />
              </div>
            </div>
            <div className="hidden lg:flex lg:justify-center lg:mt-14">
              <img src={reine} alt="Photo d'une reine avec un portable" />
            </div>
          </div>
          <div className="lg:w-2/4">
            <div className="py-12 flex justify-center">
              <img src={vehiclesData.image} alt="Photo du véhicule" />
            </div>
            <div className="my-8">
              <p className="text-2xl text-brown font-bold text-center lg:text-4xl lg:font-normal">
                Prix de la course : {prixFinal} Ecus
              </p>
            </div>
            <div className="font-mono text-center bg-almostWhite ">
              <div
                onClick={() => window.my_modal_2.showModal()}
                className="flex justify-center lg:mb-4 bg-blend-overlay"
              >
                <Button btnName="Finaliser ma commande" />
              </div>
              <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box bg-almostWhite">
                  <h3 className="font-sans text-4xl text-brown">
                    Merci pour ta commande !
                  </h3>
                  <p className="py-4  text-brown">Ton carrosse arrive dans</p>
                  <Countdown countdownTimestampMs={dateTimer} />
                </form>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonnaliserVehicule;
