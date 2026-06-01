//Score verification button for training and matches, 
// component to distinguish between messages in each 
// context for alerts

import { useEffect } from "react";
//exercises and evaluate Answer
import { analyzeClasses } from "@/core/utils/AnalysisClasses";
import { analyzeAnswer } from "@/core/utils/analyzeAnswer";

const VerifyButton = ({
  code,
  exercise,
  attempts,
  setAttempts,
  setAlert,
  onSuccess,
  onFail,
  mode = "training",
  label,
}) => {

  /* 
  useEffect(() => {
     console.log("attempts actualizado:", attempts);
   }, [attempts]);
  */

  const handleVerify = () => {
    const analysis = analyzeClasses(
      code,
      exercise.requiredClasses
    );

    /* console.log({
       mode,
       attempts,
       nextAttempt: attempts + 1,
     });
    */

    const feedback = analyzeAnswer(
      analysis,
      attempts,
      exercise.level,
      mode
    );

    //console.log("feedback:", feedback);

    setAlert({
      show: true,
      message: feedback.message,
      type: feedback.type,
    });

    if (feedback.type === "success") {
      setAttempts(0);
      onSuccess?.();
      return;
    }

    if (feedback.endPlay) {
      setAttempts(0);
      onFail?.();
      return;
    }

    
    setAttempts((prev) => {
       //console.log("incrementando desde:", prev);
       return prev + 1;
     });
    
  };

  return (
    <button
      className="max-w-[20rem] p-2 font-bold text-white bg-sky-600 rounded hover:bg-sky-700"
      onClick={handleVerify}
    >
      {label}
    </button>
  );
};

export default VerifyButton;
