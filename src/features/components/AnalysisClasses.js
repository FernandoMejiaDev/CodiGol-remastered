
const parseClasses = (input) => {
  return input
    .trim()
    .split(/\s+/)
    .filter(Boolean);
};

const classifyClass = (cls) => {
  if (cls.includes(":")) {
    const [bp, value] = cls.split(":");
    return { type: "responsive", breakpoint: bp, value };
  }
  return { type: "base", value: cls };
};

export const analyzeClasses = (userInput, requiredClasses) => {
  const userClasses = parseClasses(userInput);

  const result = {
    isCorrect: false,
    missing: [],
    extra: [],
    correct: [],
    breakdown: {
      base: [],
      responsive: {},
    },
  };

  // convert required to set to compare
  const requiredSet = new Set(requiredClasses);
  const userSet = new Set(userClasses);

  // detect correct and missing items
  requiredClasses.forEach((cls) => {
    if (userSet.has(cls)) {
      result.correct.push(cls);

      const info = classifyClass(cls);

      if (info.type === "base") {
        result.breakdown.base.push(info.value);
      } else {
        if (!result.breakdown.responsive[info.breakpoint]) {
          result.breakdown.responsive[info.breakpoint] = [];
        }
        result.breakdown.responsive[info.breakpoint].push(info.value);
      }
    } else {
      result.missing.push(cls);
    }
  });

  //  detect extras (what the user added but wasn't requested)
  userClasses.forEach((cls) => {
    if (!requiredSet.has(cls)) {
      result.extra.push(cls);
    }
  });

  // Result
  result.isCorrect = result.missing.length === 0;

  return result;
};