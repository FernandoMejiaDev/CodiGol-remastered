import { feedbackConfig } from "./feedbackConfig";

export const analyzeAnswer = (analysis, attempts, level, mode = "training") => {
  const levelConfig = feedbackConfig[level] || feedbackConfig[1];

  const selectedConfig =
    mode === "match" ? levelConfig.MatchMessages : levelConfig.TrainingMessages;

  const {
    successMessages = [],
    errorMessages = [],
    FeedbackMessages = {},
  } = selectedConfig || {};

  const msg = FeedbackMessages;

  // success
  if (analysis.isCorrect) {
    const randomMessage =
      successMessages[Math.floor(Math.random() * successMessages.length)];

    return {
      type: "success",
      message: randomMessage,
      resetAttempts: true,
    };
  }

  // ERROR
  // If the user fails in the cycle, the WARNING message will be displayed 3 times,
  // and the fourth time an error message will be displayed, continuing that cycle.
  if ((attempts + 1) % 4 === 0) {
    const randomError =
      errorMessages[Math.floor(Math.random() * errorMessages.length)];

    return {
      type: "error",
      message: randomError,
      resetAttempts: false,
    };
  }

  // WARNING
  let message = "";

  const missingBase = analysis.missing.filter((cls) => !cls.includes(":"));

  if (missingBase.length > 0 && msg.missingBase) {
    message = msg.missingBase;
  } else if (analysis.missing.length > 0 && msg.missingResponsive) {
    message = msg.missingResponsive;
  } else if (analysis.extra.length > 0 && msg.extra) {
    message = msg.extra;
  } else if (analysis.wrongColor && msg.wrongColor) {
    message = msg.wrongColor;
  } else if (analysis.wrongShade && msg.wrongShade) {
    message = msg.wrongShade;
  } else {
    message = msg.fallback;
  }

  return {
    type: "warning",
    message,
    resetAttempts: false,
  };
};
