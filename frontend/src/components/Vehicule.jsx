import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

function Vehicule({ image, name, prix, temps, id, description }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="w-4/5 h-1/2 flex flex-col justify-between items-center text-blue font-mono my-10 md:w-1/3 md:px-4 lg:px-10  md:h-1/6 drop-shadow-xl">
      <img
        src={image}
        value={id}
        className="h-2/5 hover:animate-waving-caross active:animate-waving-caross transition-transform object-contain"
        onClick={handleClick}
      />
      <h1 className="text-2xl">{name}</h1>
      <p className="text-base lg:text-xl">Prix : {prix} Ecus</p>
      <p className="text-base lg:text-xl">
        Temps jusqu'à destination : {Math.round(temps)} heures
      </p>
      <button
        className="bg-red text-almostWhite hover:bg-blue hover:text-yellow p-5 flex justify-center items-center font-sans drop-shadow-lg rounded-2xl hover:scale-110 m-5 w-4/5 lg:w-3/4 h-1/6 text-4xl md:text-lg lg:text-3xl transform active:scale-75 active:bg-blue active:text-almostwhite transition-transform"
        type="button"
      >
        Querir ce Char
      </button>
      <Link to={`/personnaliserVehicule/${id}`}>
        <Button btnName="Querir ce char" />
      </Link>

      {showModal ? (
        <div>
          <div className="m-2 justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="h-full w-auto my-6 mx-auto max-w-xl">
              <div className="font-mono border-0 rounded-lg shadow-lg flex flex-col items-center text-center w-full bg-almostWhite outline-none align-center focus:outline-none">
                <img className="w-64 object-contain m-5" src={image} />

                <h3 className="text-2xl font-semibold">{name}</h3>

                <p className="px-4 my-4 text-lg leading-relaxed">
                  {description}
                </p>

                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="bg-b5 text-almostWhite bg-red hover:bg-blue hover:text-yellow active:scale-75 font-sans uppercase text-xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
