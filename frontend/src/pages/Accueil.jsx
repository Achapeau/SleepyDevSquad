function Accueil() {
  return (
    <main className="bg-white font-mono flex flex-grow">
      <div className="mx-4 mt-4">
        <h1 className="text-xl mb-6">Bienvenue Cousin Hub !</h1>
        <div className="flex mx-2 h-32">
          <div className="text-xs text-blue">
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
              className="h-40 relative bottom-32"
              src="../src/assets/Images/paysan.png"
              alt="paysan"
            />
          </div>
        </div>
        <div className="flex items-center flex-col">
          <h2 className="font-sans text-brown text-xl">
            Querir ta destination
          </h2>
          <div className="flex flex-col w-48 justify-center">
            <label htmlFor="departure" className="mt-2 text-brown">
              Départ
            </label>
            <select
              name="departure"
              id="departure"
              className="w-full p-1 rounded-md bg-blue drop-shadow-lg"
            >
              <option value="">---</option>
              <option value="">Ville 1</option>
              <option value="">Ville 2</option>
            </select>
            <label htmlFor="arrival" className="mt-4 text-brown">
              Arrivée
            </label>
            <select
              name="arrival"
              id="arrival"
              className="mb-8 w-full p-1 rounded-md bg-blue drop-shadow-lg"
            >
              <option value="">---</option>
              <option value="">Ville 1</option>
              <option value="">Ville 2</option>
            </select>
          </div>
          <img src="../src/assets/Images/carte.jpg" alt="carte" />
        </div>
      </div>
    </main>
  );
}

export default Accueil;
