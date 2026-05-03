//exercises and evaluate Answer
import { analyzeClasses } from "@/core/utils/AnalysisClasses";
import { analyzeAnswer } from "@/core/utils/analyzeAnswer";

const VerifyButton = ({
  code,
  exercise,
  attempts,
  setAttempts,
  setAlert,
  onSuccess, // qué hacer cuando acierta
  mode = "training", // 👈 clave
}) => {
  const handleVerify = () => {
    const analysis = analyzeClasses(code, exercise.requiredClasses);

    const feedback = analyzeAnswer(
      analysis,
      attempts,
      exercise.level,
      mode
    );

    setAlert({
      show: true,
      message: feedback.message,
      type: feedback.type,
    });

    if (feedback.type === "success") {
      setAttempts(0);
      onSuccess(); // 👈 delegas el comportamiento
    } else {
      setAttempts((prev) => prev + 1);
    }
  };

  return (
    <button
      className="max-w-[20rem] p-2 font-bold text-white bg-sky-600 rounded hover:bg-sky-700"
      onClick={handleVerify}
    >
      Verificar respuesta
    </button>
  );
};

export default VerifyButton;