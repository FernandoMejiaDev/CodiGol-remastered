import { feedbackConfig } from "./feedbackConfig";

export const analyzeAnswer = (
  analysis,
  attempts,
  level,
  mode = "training",
  eventType = null,
) => {
  const levelConfig = feedbackConfig[level] || feedbackConfig[1];

  const selectedConfig =
    mode === "match" ? levelConfig.MatchMessages : levelConfig.TrainingMessages;

  const {
    CompletionMessages = [],
    successMessages = [],
    FeedbackMessages = {},
    errorMessages = [],
    TimeMessages = [],
  } = selectedConfig || {};

  const msg = FeedbackMessages;

  // TIME
  if (eventType === "timeout") {
    const randomTimeMessage =
      TimeMessages[Math.floor(Math.random() * TimeMessages.length)];

    return {
      type: "time",
      message: randomTimeMessage,
      resetAttempts: false,
    };
  }

  // success
  if (analysis.isCorrect) {
    const randomMessage =
      successMessages[Math.floor(Math.random() * successMessages.length)];

    return {
      type: "success",
      message: randomMessage,
      resetAttempts: true,
      endPlay: true,
    };
  }

  //If the user fails the cycle, a WARNING message will be displayed three times,
  // and on the fourth attempt, an ERROR message will be displayed, thus continuing
  //  the cycle in the case of training. In the case of a match (game file),
  // a WARNING message will be displayed once, and on the second attempt,
  // an ERROR message will be displayed, moving on to the next exercise.

  if (mode === "training" && (attempts + 1) % 4 === 0) {
    const randomError =
      errorMessages[Math.floor(Math.random() * errorMessages.length)];

    return {
      type: "error",
      message: randomError,
      resetAttempts: false,
      endPlay: false,
    };
  }

  //Match (Game File)
  if (mode === "match" && (attempts + 1) % 2 === 0) {
    const randomError =
      errorMessages[Math.floor(Math.random() * errorMessages.length)];

    return {
      type: "error",
      message: randomError,
      resetAttempts: true,
      endPlay: true,
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
    endPlay: false,
  };
};
