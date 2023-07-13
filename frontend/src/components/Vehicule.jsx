import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

function Vehicule({ image, name, prix, temps, id, description }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="w-4/5 h-1/2 flex flex-col justify-between items-center text-blue font-mono my-10 md:w-1/3 md:px-4 lg:px-10  md:h-1/6">
      <img src={image} value={id} className="h-2/5" onClick={handleClick} />
      <h1 className="text-2xl">{name}</h1>
      <p className="text-base">Prix : {prix} Ecus</p>
      <p className="text-base">
        Temps jusqu'à destination : {Math.round(temps)} heures
      </p>
      {/* <button
        className="bg-red text-almostWhite hover:bg-blue hover:text-yellow p-5 flex justify-center items-center font-sans drop-shadow-lg rounded-2xl m-5 w-4/5 h-1/6 text-4xl md:text-xl lg:text-3xl transform active:scale-75 active:bg-blue active:text-almostwhite transition-transform"
        type="button"
      >
        Querir ce Char
      </button> */}
      <Link to={`/personnaliserVehicule/${id}`}>
        <Button btnName="Querir ce char" />
      </Link>

      {showModal ? (
        <div>
          <div className="mx-2 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              <div className="font-mono border-0 rounded-lg shadow-lg relative flex flex-col items-center text-center w-full bg-almostWhite outline-none align-center focus:outline-none">
                <img className="w-64 my-3" src={image} />

                <h3 className="text-2xl font-semibold">{name}</h3>

                <p className="px-4 my-4 text-lg leading-relaxed">
                  {description}
                </p>

                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="bg-b5 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-blue" />
        </div>
      ) : null}
    </div>
  );
}

export default Vehicule;
