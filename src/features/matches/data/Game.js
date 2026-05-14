// Game Test
const GameData = [
  
  {
    id: 1,
    level: 1,
    prompt:
      "Usa un tamaño base para el texto y haz que aumente en pantallas grandes a 5xl.",

    requiredClasses: ["text-base", "lg:text-5xl"],
  },

  {
    id: 2,
    level: 1,
    prompt:
      "Inicia con un tamaño grande (lg). Al llegar a pantallas md, triplica su impacto a 4xl, y en pantallas lg elévatelo al nivel 7xl.",
    requiredClasses: ["text-lg", "md:text-4xl", "lg:text-7xl"],
  },

  {
    id: 3,
    level: 1,
    prompt:
      "El texto debe ser pequeño (sm) en móviles. Aplica saltos de tamaño en cada breakpoint: en sm usa 2xl, en lg sube a 5xl y en 2xl termina con el tamaño 8xl.",
    requiredClasses: ["text-sm", "sm:text-2xl", "lg:text-5xl", "2xl:text-8xl"],
  },

  {
    id: 4,
    level: 1,
    prompt:
      "Crea una escala progresiva: empieza con el texto extra pequeño (xs). En pantallas sm salta a text-xl. A partir de ahí, sube el tamaño en cada breakpoint (md, lg, xl y 2xl) saltando de dos en dos (de xl a 3xl) para demostrar un crecimiento imparable.",
    requiredClasses: [
      "text-xs",
      "sm:text-xl",
      "md:text-3xl",
      "lg:text-5xl",
      "xl:text-7xl",
      "2xl:text-9xl",
    ],
  },

  {
    id: 5,
    level: 1,
    prompt:
      "Crea un texto responsive que use todos los breakpoints. Empieza en text-xl (móvil) y aumenta gradualmente en sm, md, lg, xl hasta culminar en 2xl con el tamaño 6xl.",
    requiredClasses: [
      "text-xl",
      "sm:text-2xl",
      "md:text-3xl",
      "lg:text-4xl",
      "xl:text-5xl",
      "2xl:text-6xl",
    ],
  },
];

export default GameData;
