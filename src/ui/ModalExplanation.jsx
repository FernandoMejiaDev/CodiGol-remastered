import { useEffect, useState } from "react";
import Close from "../assets/svg/Close";

const ModalExplanation = () => {
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
                className="w-full px-6 py-2 font-bold text-black bg-white hover:bg-gray-200 rounded-xl"
            >
                Pedir Explicaciones
            </button>

            {/* Modal Explanation */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm">
                    <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">

                        {/* HEADER */}
                        <div className="flex items-center justify-between px-8 py-5 border-b bg-gray-50">
                            <h2 className="text-2xl font-bold tracking-tight">
                                Lección: Responsive
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
                                <h3 className="mb-4 text-lg font-semibold">
                                    Tamaños de Texto
                                </h3>

                                <div className="grid grid-cols-2 items-center gap-3 md:grid-cols-3">
                                    {[
                                        "text-xs = 12px",
                                        "text-sm = 14px",
                                        "text-base = 16px",
                                        "text-lg = 18px",
                                        "text-xl = 20px",
                                        "text-2xl = 24px",
                                        "text-3xl = 30px",
                                        "text-4xl = 36px",
                                        "text-5xl = 48px",
                                        "text-6xl = 60px",
                                        "text-7xl = 72px",
                                        "text-8xl = 96px",
                                        "text-9xl = 128px",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="px-3 py-2 text-sm bg-white text-center border rounded-lg shadow-sm"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Breakpoints */}
                            <div className="p-6 border rounded-xl bg-gray-50">
                                <h3 className="mb-4 text-lg font-semibold">
                                    Breakpoints Responsive
                                </h3>

                                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                    {[
                                        "Desde dispositivos moviles no se utiliza ningún Breakpoints, se aplican las clases tal cual.",
                                        "sm ≥ 640px",
                                        "md ≥ 768px",
                                        "lg ≥ 1024px",
                                        "xl ≥ 1280px",
                                        "2xl ≥ 1536px",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="px-4 py-3 text-sm font-medium flex flex-col text-center items-center justify-center bg-white border rounded-lg shadow-sm"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 text-center border rounded-xl bg-gradient-to-r from-gray-100 to-gray-50">
                                <h3 className="mb-3 text-lg font-semibold">
                                    Ejemplo práctico
                                </h3>

                                <code className="px-4 py-2 text-base font-mono bg-white border rounded-lg shadow-sm">
                                    text-base lg:text-xl
                                </code>

                                <p className="mt-3 max-w-xl m-auto text-sm text-gray-600">
                                    La clase  establece un tamaño de fuente base de <span className="font-bold">16px</span> para
                                    dispositivos móviles y pantallas pequeñas, y lo aumenta automáticamente
                                    a <span className="font-bold">20px</span>  solo cuando la pantalla alcanza el punto de
                                    interrupción <span className="font-bold">lg (pantallas grandes).</span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default ModalExplanation;