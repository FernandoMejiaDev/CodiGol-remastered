//Practical training
//Dialogues and exercise
import React, { useRef, useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { unlockNextPage } from "@/core/utils/routeGuard";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";
import DialogueBox from "@/ui/DialogueBox";
import Preview from "@/ui/Preview";
import Editor from "@/ui/Editor";
import ModalSize from "@/ui/ModalSize";
import ModalExplanation from "@/ui/ModalExplanation";
//exercises and evaluate Answer
import exercises from "@/features/training/data/trainingLessons";
import evaluateAnswer from "@/core/utils/evaluateAnswer";

//At the end of the exercises it will take you to MatchPresentation
import { useNavigate } from "react-router-dom";
import { navigateToNextPhase } from "@/core/utils/navigateToNextPhase";

//ResizingLine
import ResizingLine from "@/ui/ResizingLine";

// Alert
import AlertFeedback from "@/ui/AlertFeedback";

const defaultCode =
  `<div class="text-xs text-white">
Hola Tailwind
</div>`;

const Training = () => {

  //ResizingLine
  //Resize screens in width, preview screen and editor screen
  const [previewWidth, setPreviewWidth] = useState(400); // start width

  //Alert Feedback
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "success", // success | error | warning
  });

  const [code, setCode] = useState(defaultCode);
  const [showEditor, setShowEditor] = useState(false);
  const [lastTrainerText, setLastTrainerText] = useState(""); // View exercise button

  //exercises and evaluate Answer
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const currentExercise = exercises[currentExerciseIndex];


  const navigate = useNavigate();
  const handleFinishLevel = () => {
    navigateToNextPhase("Training", navigate);
  };

  useEffect(() => {
    unlockNextPage("/MatchPresentation");
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-dvh">

      {alert.show && (
        <AlertFeedback
          message={alert.message}
          type={alert.type}
          onClose={() =>
            setAlert((prev) => ({ ...prev, show: false }))
          }
        />
      )}

      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(/img/ExerciseFund.webp)` }}
      ></div>

      <div className="flex h-dvh">
        <div
          style={{ width: `${previewWidth}px` }}
          className="relative h-[85%] min-w-40 mt-32 p-1"
        >
          <Preview code={code} setCode={setCode} />
        </div>

        <ResizingLine setPreviewWidth={setPreviewWidth} />

        <div className="relative flex flex-col justify-end flex-1 min-w-[33rem] h-dvh">
          <div className="bottom-0 w-full ">
            {/* Scene sequence: coach's dialogue, exercise */}
            {!showEditor && (
              <DialogueBox
                level={1}
                currentPhase="Training"
                onFinishDialog={(lastText) => {
                  setShowEditor(true); // Show editor when dialog ends
                  setLastTrainerText(lastText); // Last dialogue for the request explanation button
                }}
              />
            )}
          </div>

          {showEditor && (
            <>
              <div className="z-20 flex flex-col justify-center w-full h-full max-w-4xl gap-2 p-1">
                <div className="flex flex-row w-full gap-1">

                  <ModalExplanation />

                  <button
                    className="max-w-[20rem] p-2 font-bold text-white bg-sky-600 rounded  hover:bg-sky-700"
                    onClick={() => {
                      const isCorrect = evaluateAnswer(code, currentExercise);

                      if (isCorrect) {
                        // mensaje temporal (luego vendrá del analyzer)
                        const message = "¡Golazo! 🎯 ¡Has dominado la técnica! ⚽";

                        setAlert({
                          show: true,
                          message,
                          type: "success",
                        });

                        if (currentExerciseIndex < exercises.length - 1) {
                          setTimeout(() => {
                            setCurrentExerciseIndex((prev) => prev + 1);
                            setCode(defaultCode);
                          }, 1500); // esperar a que se vea la alerta
                        } else {
                          setTimeout(() => {
                            setAlert({
                              show: true,
                              message:
                                "¡Bien! 🏆 Has completado el entrenamiento. Prepárate para el partido.",
                              type: "success",
                            });

                            handleFinishLevel();
                          }, 5000);
                        }
                      } else {
                        // aquí luego irá el feedback inteligente
                        const message =
                          "¡Casi! ❌ Revisa cómo estás aplicando las clases.";

                        setAlert({
                          show: true,
                          message,
                          type: "error",
                        });
                      }
                    }}
                  >
                    Verificar respuesta
                  </button>

                </div>

                <div className="flex flex-col items-start gap-2 p-2 text-lg border bg-neutral-950 text-slate-100 rounded-2xl">
                  <strong>Entrenador dice:</strong>

                  <p>{currentExercise.prompt}</p>

                </div>
                <Editor code={code} setCode={setCode} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Training;
