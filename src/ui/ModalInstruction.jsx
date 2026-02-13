import { useEffect, useState } from "react";
import Close from "../assets/svg/Close";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={toggleModal}
        className="w-full px-6 py-2 font-semibold text-black bg-white hover:bg-gray-200 rounded-xl"
      >
        Instrucciones
      </button>

      {/* Modal */}
      {isOpen && (

        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl overflow-hidden text-black bg-white shadow-2xl rounded-2xl">

            <div className="flex items-center justify-between px-8 py-5 text-black border-b bg-gray-50">
              <h2 className="text-2xl font-bold tracking-tight">
                CódiGol Instrucciones
              </h2>

              <button
                onClick={toggleModal}
                className="absolute w-16 h-16 right-2 top-2"
              >
                <Close />
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">

              <div className="p-6 border rounded-xl bg-gray-50">

                <div className="flex flex-col items-center gap-3">

                  <div
                    className="flex flex-col gap-2 px-3 py-2 text-base bg-white border rounded-lg shadow-sm text-start"
                  >
                    <p className="">
                      <span className="font-bold">CódiGol</span> es un videojuego educativo donde
                      aprenderás a usar Tailwind CSS de forma divertida.
                    </p>

                    <p className="">
                      Jugarás en la <span className="font-bold">"Full Stack League"</span> compuesta
                      por 10 partidos leccione. En cada uno aprenderás técnicas esenciales
                      sobre Tailwind CSS.
                    </p>

                    <p className="">
                      A medida que avances, los equipos rivales serán más difíciles,
                      tendrás menos oportunidades de anotar si no aplicas bien lo aprendido.
                    </p>

                    <p className="">
                      Este proyecto usa <span className="font-bold">React, Tailwind CSS </span>
                      y la autenticación fue implementada con <span className="font-bold">Clerk.</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 text-center border rounded-xl bg-gradient-to-r from-gray-100 to-gray-50">

                <p className="px-4 py-2 text-base bg-white border rounded-lg shadow-sm">
                  Esta es una <span className="font-bold">demo</span> creada como parte de la  <a
                    className="font-bold transition duration-300 ease-in-out hover:text-yellow-500"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/midudev/hackaton-clerk-2025?tab=readme-ov-file#%EF%B8%8F-c%C3%B3mo-participar-en-la-hackat%C3%B3n"
                  >
                    Hackathon de miduDev 2025
                  </a>.
                  Solo los primeros 3 partidos están disponible.

                </p>

                <p className="mt-3 text-sm text-gray-600">
                ¡Prepárate para jugar, aprender y ganar la liga! 
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
