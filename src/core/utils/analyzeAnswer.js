const successMessages = [
  "¡Golazo! Dominaste la técnica.",
  "¡Perfecto! Aplicaste todo correctamente.",
  "¡Excelente! Se nota el entrenamiento.",
  "¡Impecable! Entendiste el responsive.",
  "Bien! Sigue así.",
];

const errorMessages = [
  "Estás fallando demasiado. Concéntrate y revisa bien.",
  "No tires por tirar, piensa la jugada.",
  "Así no vas a anotar. Analiza lo que haces.",
  "Detente un momento y revisa el ejercicio.",
  "Vas rápido, pero no correcto. Ajusta.",
];

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

  //  WARNING (feedback )
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
