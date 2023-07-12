import { useState } from "react";
import Button from "../components/Button";
import Countdown from "../components/Countdown/Countdown";

import reine from "../assets/Images/reine.png";
import vehicule from "../assets/Images/carrosse.png";

function PersonnaliserVehicule() {
  const dateTimer = new Date("July 15, 23 17:20:18");
  const [cocher, setCochet] = useState(false);
  const [garde, setGarde] = useState(false);
  const [marchandise, setMarchandise] = useState(false);

  return (
    <div className="bg-almostWhite px-8 pb-8">
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
            Choisis tes options entre moteur, boisson et si tu désires un garde
            et transporter des marchandises
          </p>
          <div className="flex justify-evenly">
            <div className="flex flex-col items-center lg:text-2xl">
              <select className=" bg-almostWhite text-brown">
                <option disabled selected hidden>
                  Cruche
                </option>
                <option className=" bg-blue text-almostWhite">Eau</option>
                <option className=" bg-blue text-almostWhite">Cervoise</option>
                <option className=" bg-blue text-almostWhite">Vin</option>
              </select>
            </div>
            <div className="flex flex-col items-center lg:text-2xl">
              <p className="text-brown">Cocher</p>
              <input
                type="checkbox"
                className="toggle bg-yellow"
                checked={cocher}
                onChange={() => setCochet(!cocher)}
              />
            </div>
            <div className="flex flex-col items-center lg:text-2xl">
              <p className="text-brown">Garde</p>
              <input
                type="checkbox"
                className="toggle bg-yellow"
                checked={garde}
                onChange={() => setGarde(!garde)}
              />
            </div>
            <div className="flex flex-col items-center lg:text-2xl">
              <p className="text-brown">Marchandise</p>
              <input
                type="checkbox"
                className="toggle bg-yellow"
                checked={marchandise}
                onChange={() => setMarchandise(!marchandise)}
              />
            </div>
          </div>
          <div className="hidden lg:flex lg:justify-center lg:mt-14">
            <img src={reine} alt="Photo d'une reine avec un portable" />
          </div>
        </div>
        <div className="lg:w-2/4">
          <div className="py-12 flex justify-center">
            <img src={vehicule} alt="Photo du véhicule" />
          </div>
          <div className="my-8">
            <p className="text-2xl text-brown font-bold text-center lg:text-4xl lg:font-normal">
              Prix de la course : 20 Ecu
            </p>
          </div>
          <div className="font-mono text-center bg-almostWhite ">
            <div
              onClick={() => window.my_modal_2.showModal()}
              className="flex justify-center  bg-blend-overlay"
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
    </div>
  );
}

export default PersonnaliserVehicule;
