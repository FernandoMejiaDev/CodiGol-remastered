import React from "react";
import { useUser } from "@clerk/clerk-react";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";
import { useNavigate } from "react-router-dom";
import { resetGameProgress } from "@/core/utils/routeGuard";
import EventTime from "@/ui/EventTime"
import ModalSize from "@/ui/ModalSize";
import GitHub from "@/assets/svg/Github";

const FinalScene = () => {
  const navigate = useNavigate();

  const handleRestart = () => {
    resetGameProgress();
    navigate("/LessonIntro", { replace: true });
  };

  const handleGoHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="flex flex-col overflow-hidden text-white min-h-dvh bg-gradient-to-b from-neutral-900 via-neutral-800 to-black">

      <section className="flex flex-col items-center justify-center px-6 py-20 space-y-6 text-center">
        {/* FULL STACK LEAGUE COMPLETADA */}
        <h1 className="text-4xl font-extrabold tracking-wide md:text-6xl">
          DEMO COMPLETADA
        </h1>

        {/*Has terminado la primera temporada de CódiGol. */}
        <p className="max-w-2xl text-lg text-neutral-300 md:text-xl">
          Has terminado la demo de CódiGol.
          Gracias por jugar y explorar esta experiencia de aprendizaje.
        </p>

        <div className="w-32 h-1 bg-yellow-400 rounded-full"></div>
      </section>

      <section className="grid max-w-6xl gap-8 px-6 pb-20 mx-auto md:grid-cols-3">

        <div className="p-6 transition shadow-lg bg-neutral-800/60 backdrop-blur-md rounded-2xl hover:scale-105">
          <h2 className="mb-4 text-xl font-bold text-yellow-400">
            Sobre CódiGol
          </h2>

          <p className="text-neutral-300">
            Proyecto creado para practicar Tailwind CSS mediante
            mecánicas de fútbol gamificadas.
          </p>

          <p className="text-neutral-300">
            Proyecto con participación en la Hackathon de MiduDev 2025.
          </p>

          <a
            href="https://github.com/midudev/hackaton-clerk-2025?tab=readme-ov-file#%EF%B8%8F-c%C3%B3mo-participar-en-la-hackat%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm font-semibold text-yellow-400 hover:underline"
          >
            Ver Hackathon →
          </a>
        </div>

        <div className="flex flex-col items-center p-6 text-center transition shadow-lg bg-neutral-800/60 backdrop-blur-md rounded-2xl hover:scale-105">

          <img
            src="/img/FerCode.webp"
            alt="Fernando"
            className="object-cover mx-auto mb-4 border-4 border-yellow-400 rounded-full w-28 h-28"
            loading="lazy"
          />

          <h2 className="text-xl font-bold text-yellow-400">
            Fernando Mejía
          </h2>

          <p className="mt-3 text-sm text-neutral-300">
            Combinando fútbol y código para hacer el aprendizaje más divertido.
          </p>
        </div>

        <div className="p-6 text-center transition shadow-lg bg-neutral-800/60 backdrop-blur-md rounded-2xl hover:scale-105">
          <div className="w-20 h-20 m-auto text-yellow-400">
            <GitHub className="w-full h-full" />
          </div>

          <h2 className="text-xl font-bold text-yellow-400">
            Código Abierto
          </h2>

          <p className="mt-3 text-sm text-neutral-300">
            Explora el proyecto y su evolución.
          </p>

          <a
            href="https://github.com/FernandoMejiaDev/CodiGol-remastered"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm font-semibold text-yellow-400 hover:underline"
          >
            Ver GitHub →
          </a>
        </div>

      </section>

      <section className="py-8 mt-auto border-t bg-neutral-900 border-neutral-700">
        <div className="flex flex-col justify-center gap-6 md:flex-row">

          <button
            onClick={handleRestart}
            className="px-8 py-3 font-bold text-black transition bg-yellow-400 rounded-xl hover:scale-105"
          >
            Nueva Temporada
          </button>

          <button
            onClick={handleGoHome}
            className="px-8 py-3 font-bold text-yellow-400 transition border border-yellow-400 rounded-xl hover:bg-yellow-400 hover:text-black"
          >
            Volver al Inicio
          </button>

        </div>
      </section>

    </div>

  );
};

export default FinalScene;
