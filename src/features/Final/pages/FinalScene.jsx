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
    <div className="min-h-dvh bg-gradient-to-b from-neutral-900 via-neutral-800 to-black text-white flex flex-col">

      <section className="flex flex-col items-center justify-center text-center py-20 px-6 space-y-6">
        {/* FULL STACK LEAGUE COMPLETADA */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
          DEMO COMPLETADA
        </h1>

        {/*Has terminado la primera temporada de CódiGol. */}
        <p className="max-w-2xl text-neutral-300 text-lg md:text-xl">
          Has terminado la demo de CódiGol.
          Gracias por jugar y explorar esta experiencia de aprendizaje.
        </p>

        <div className="h-1 w-32 bg-yellow-400 rounded-full"></div>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-20">

        <div className="bg-neutral-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-4 text-yellow-400">
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

        <div className="bg-neutral-800/60 backdrop-blur-md p-6 rounded-2xl items-center flex flex-col shadow-lg hover:scale-105 transition text-center">

          <img
            src="/img/FerCode.webp"
            alt="Fernando"
            className="w-28 h-28 mx-auto rounded-full mb-4 border-4 border-yellow-400 object-cover"
          />

          <h2 className="text-xl font-bold text-yellow-400">
            Fernando Mejía
          </h2>

          <p className="text-neutral-300 mt-3 text-sm">
            Combinando fútbol y código para hacer el aprendizaje más divertido.
          </p>
        </div>

        <div className="bg-neutral-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition text-center">
          <div className="w-20 h-20 text-yellow-400 m-auto">
            <GitHub className="w-full h-full" />
          </div>

          <h2 className="text-xl font-bold text-yellow-400">
            Código Abierto
          </h2>

          <p className="text-neutral-300 mt-3 text-sm">
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

      <section className="mt-auto bg-neutral-900 py-8 border-t border-neutral-700">
        <div className="flex flex-col md:flex-row justify-center gap-6">

          <button
            onClick={handleRestart}
            className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:scale-105 transition"
          >
            Nueva Temporada
          </button>

          <button
            onClick={handleGoHome}
            className="px-8 py-3 border border-yellow-400 text-yellow-400 font-bold rounded-xl hover:bg-yellow-400 hover:text-black transition"
          >
            Volver al Inicio
          </button>

        </div>
      </section>

    </div>

  );
};

export default FinalScene;
