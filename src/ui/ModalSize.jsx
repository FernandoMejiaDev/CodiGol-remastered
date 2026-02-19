import React, { useState, useEffect } from "react";

const ModalSize = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1281);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1281);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobile]);

  return (
    <>
      {isMobile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-red-600/25 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl overflow-hidden text-black bg-white shadow-2xl rounded-2xl">

            <div className="flex items-center justify-between px-8 py-5 text-black border-b bg-gray-50">
              <h2 className="text-2xl font-bold tracking-tight">
                😕 Resolución no soportada
              </h2>

            </div>

            {/* CONTENT */}
            <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">

              <div className="p-6 border rounded-xl bg-gray-50">

                <div className="flex flex-col items-center gap-3">

                  <div
                    className="flex flex-col gap-2 px-3 py-2 text-base bg-white border rounded-lg shadow-sm text-start"
                  >
                    <p className="">
                      <span className="font-bold">CódiGol</span> no es compatible con pantallas pequeñas.
                      Por favor, usa una laptop o computadora de escritorio para una mejor experiencia. 
                      el dispostivo debe ser mayor a 1280px.
                    </p>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalSize;
