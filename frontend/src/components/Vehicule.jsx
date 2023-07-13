import Button from "./Button";

function Vehicule({ image, name, prix, temps }) {
  return (
    <div class="w-4/5 h-1/2 flex flex-col justify-between items-center text-blue font-mono my-10 md:w-1/3 md:px-4 lg:px-10  md:h-1/6">
      <img src={image} className="h-2/5 " />
      <h1 className="text-2xl">{name}</h1>
      <p className="text-base">Prix: {prix} Ecus</p>
      <p className="text-base ">
        Temps jusqu'à destination: {Math.round(temps)} heures
      </p>
      <button
        className="bg-red text-almostWhite hover:bg-blue hover:text-yellow p-5 flex justify-center items-center font-sans drop-shadow-lg rounded-2xl m-5 w-4/5 h-1/6 text-4xl md:text-lg lg:text-3xl transform active:scale-75 active:bg-blue active:text-almostwhite transition-transform"
        type="button"
      >
        Querir ce Char
      </button>
    </div>
  );
}

export default Vehicule;
