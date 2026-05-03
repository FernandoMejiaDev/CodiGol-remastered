import { feedbackConfig } from "./feedbackConfig";



export const analyzeAnswer = (analysis, attempts, level) => {
  //Level 2 feedback config
  const config = feedbackConfig[level] || feedbackConfig[1];
  const msg = config.messages;

  analysis.wrongColor = true;
  analysis.wrongShade = true;

  // If that's correct
  if (analysis.isCorrect) {
    const randomMessage =
      successMessages[Math.floor(Math.random() * successMessages.length)];

    return {
      type: "success",
      message: randomMessage,
      resetAttempts: true,
    };
  }

  // ERROR CASE (many attempts)
  if ((attempts + 1) % 4 === 0) {
    const randomError =
      errorMessages[Math.floor(Math.random() * errorMessages.length)];

    return {
      type: "error",
      message: randomError,
      resetAttempts: false,
    };
  }

  //  WARNING (feedback)
  let message = "";

  const missingBase = analysis.missing.filter((cls) => !cls.includes(":"));

  // PRIORITY 1  lack of base
  if (missingBase.length > 0 && msg.missingBase) {
    message = msg.missingBase;
  }
  // PRIORITY 2  lack of responsive
  else if (analysis.missing.length > 0 && msg.missingResponsive) {
    message = msg.missingResponsive;
  }
  // PRIORITY 3 extra classes
  else if (analysis.extra.length > 0 && msg.extra) {
    message = msg.extra;
  } 
  //LEVEL 2 specific feedback   
  else if (analysis.wrongColor && msg.wrongColor) {
    message = msg.wrongColor;
  } else if (analysis.wrongShade && msg.wrongShade) {
    message = msg.wrongShade;
  }
  // fallback
  else {
    message = msg.fallback;
  }

  return {
    type: "warning",
    message,
    resetAttempts: false,
  };
};
