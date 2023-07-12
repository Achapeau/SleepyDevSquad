import { useRef, useState } from "react";

function ChoixVehicule() {
  const idRef = useRef();
  const [showModal, setShowModal] = useState(true);

  return (
    <main className="bg-almostWhite flex flex-grow">
      <h1>Informations</h1>

      {showModal ? (
        <>
          <div className="mx-2 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              <div className="font-mono border-0 rounded-lg shadow-lg relative flex flex-col items-center text-center w-full bg-almostWhite outline-none align-center focus:outline-none">
                <img
                  className="w-64 my-3"
                  src="../src/assets/Images/charette.png"
                />

                <h3 className="text-2xl font-semibold">Le carrosse royal</h3>

                <p className="my-4 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus pariatur deleniti ipsam, dolor doloremque alias.
                  Architecto obcaecati voluptas provident praesentium!
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
        </>
      ) : null}
    </main>
  );
}

export default ChoixVehicule;
