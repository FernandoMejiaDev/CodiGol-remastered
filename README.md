> [!IMPORTANT]
> Este repositorio corresponde a la versión remasterizada de **CódiGol**, reconstruida desde cero a partir del proyecto original presentado en la **Hackathon de MiduDev 2025.**
>   
> El objetivo es mejorar la arquitectura, optimizar el código e implementar las funcionalidades que no pudieron incluirse en la versión inicial.  
> 
> Puedes ver la versión original aquí:  
> *[CodiGol](https://github.com/FernandoMejiaDev/CodiGol)*

![CódiGolLogo](https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/CodiGolLogo.webp)

# CÓDIGOL

CódiGol es un videojuego web educativo diseñado para aprender y practicar Tailwind CSS de una forma diferente, utilizando el fútbol como temática principal.

La idea combina aprendizaje y competición: en lugar de controlar jugadores en un entorno 2D o 3D, el jugador se sitúa en distintos momentos de un partido y debe resolver ejercicios de Tailwind CSS para conseguir oportunidades de gol. Cada desafío completado correctamente permite avanzar en el partido, con el objetivo final de ganar encuentros y conquistar la liga.

## Origen del proyecto

CódiGol nació originalmente como un concepto que había dejado de lado tiempo atrás. La oportunidad de retomarlo llegó con la *[Hackathon de MiduDev 2025](https://github.com/midudev/hackaton-clerk-2025?tab=readme-ov-file#%EF%B8%8F-c%C3%B3mo-participar-en-la-hackat%C3%B3n)*, donde decidí convertir la idea en una demo funcional.

La versión original de CódiGol, fue desarrollada en menos de 10 días, entre el 8 y el 21 de mayo de 2025, como parte del reto de la Hackathon. El proyecto recibió una mención honorífica durante la competición.

El tiempo limitado de desarrollo hizo que algunas ideas y aspectos técnicos tuvieran que simplificarse para poder completar una versión funcional dentro del plazo. Después de la Hackathon, y a partir de las críticas, comentarios y una revisión personal del proyecto, surgieron varias oportunidades de mejora.

## La remasterización

Esta versión de **CódiGol** nace como una **remasterización desarrollada desde cero.** En lugar de modificar progresivamente la versión vainilla, decidí reconstruir el proyecto utilizando una nueva arquitectura y replanteando diferentes aspectos de su desarrollo.

El objetivo de esta remasterización no es únicamente mejorar la apariencia del proyecto, sino también **revisar su estructura, lógica, experiencia de usuario y contenido**, tomando como referencia todo lo aprendido durante el desarrollo de la primera versión.

## ¿Por qué Tailwind CSS?

Inicialmente, CódiGol estaba pensado para enseñar JavaScript. Sin embargo, al notar que ya existen muchas plataformas enfocadas en eso, decidí optar por Tailwind CSS, ya que, más allá de su documentación oficial, no encontré recursos prácticos e interactivos para aprenderlo. Por ello decidí cambiar el enfoque hacia Tailwind CSS, buscando crear una experiencia práctica e interactiva para aprender sus clases y conceptos mediante ejercicios.

En lugar de limitar el aprendizaje a la lectura de documentación, CódiGol plantea los conceptos dentro de situaciones propias de un partido de fútbol. El jugador debe aplicar lo aprendido para resolver cada desafío y avanzar en el encuentro.

Como resultado, el proyecto busca combinar **aprendizaje, práctica y gamificación**, utilizando el fútbol como una forma de contextualizar los ejercicios de Tailwind CSS, De esta forma, el proyecto conserva la idea original de utilizar el fútbol como contexto para aprender Tailwind CSS, pero busca llevarla a una experiencia mucho más completa y pulida.

## Autenticación

Como parte del desarrollo para la *[Hackathon de MiduDev 2025](https://github.com/midudev/hackaton-clerk-2025?tab=readme-ov-file#%EF%B8%8F-c%C3%B3mo-participar-en-la-hackat%C3%B3n), se integró [Clerk](https://clerk.com/docs)* para la autenticación de usuarios donde **es necesario registrarse o iniciar sesión para poder jugar**.

## *Mención Especial en la Final de la Hackathon de Midudev* 

Durante la transmisión final de la Hackathon organizada por *[Midudev](https://www.twitch.tv/videos/2465451345)* y *[Clerk](https://clerk.com/docs)*, ¡**CódiGol** fue destacado como uno de los proyectos más originales!

> *"Luego también hay gente que se ha atrevido a hacer como una plataforma para aprender Tailwind. Se llama CódiGol. Tienes el entrenador, el coach aquí. Y entonces te va explicando la técnica del responsive y tal... Golazo. Has dominado la técnica..."*  
> — *Midudev en el stream de la final de la Hackathon 2025*

😅 Sí, el entrenador hablaba un poquito de más en la introducción (¡gracias por ese feedback, Midu!), pero ya lo solucioné: **ahora los diálogos son más cortos y directos al grano**, para que la experiencia sea más ágil y divertida.

**Puedes ver ese momento aquí (¡es un tremendo golazo!):**

[![Ver mención en el stream](https://img.youtube.com/vi/0Z0Vy0VWQeY/hqdefault.jpg)](https://www.youtube.com/watch?v=0Z0Vy0VWQeY)

[![youtube](https://img.shields.io/badge/youtube-fff?style=for-the-badge&logo=youtube&logoColor=c91e1e)](https://www.youtube.com/watch?v=0Z0Vy0VWQeY)

## Enlace a la demo 

[![codigol](https://img.shields.io/badge/juega_códigol-000000?style=for-the-badge&logo=devbox&logoColor=06B6D4)](https://codigol.netlify.app/)

## ¿Qué aprenderás?

- Fundamentos y clases de utilidad de **Tailwind CSS**
- Buenas prácticas al trabajar con **Tailwind CSS**

## Tecnologías utilizadas

<div align="left">

![javascript](https://img.shields.io/badge/javascript-000000?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![react](https://img.shields.io/badge/react-000000?style=for-the-badge&logo=react&logoColor=61DAFB)
![tailwind](https://img.shields.io/badge/tailwind_css-000000?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)
![vite](https://img.shields.io/badge/vite-000000?style=for-the-badge&logo=vite&logoColor=646CFF)
![pnpm](https://img.shields.io/badge/pnpm-000000?style=for-the-badge&logo=pnpm&logoColor=F69220)
![clerk](https://img.shields.io/badge/clerk-000000?style=for-the-badge&logo=clerk&logoColor=6C47FF)


</div>

 ## Autenticación con Clerk

Para poder jugar, los usuarios deben crear una cuenta o iniciar sesión.
**Clerk** se ha utilizado para manejar la autenticación, protegiendo las rutas del juego y personalizando la experiencia del jugador con sesiones activas.

## Integración con Clerk
**CódiGol** utiliza **Clerk** como sistema de autenticación para gestionar el acceso de los usuarios. La integración de **Clerk** permite proteger rutas y garantizar que solo los usuarios registrados puedan acceder a la experiencia completa del juego.

Cuando un usuario intenta iniciar el juego sin estar autenticado, se activa automáticamente el modal de inicio de sesión o registro proporcionado por **Clerk**.

A continuación se muestran capturas del flujo de autenticación:

<p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_readme_Home_N1.webp"alt="Pantalla de inicio protegida por Clerk" /> <br/> <em>Pantalla inicial con botón de acceso</em> </p> <p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_readme_Home_N2.webp" alt="Modal de login de Clerk" /> <br/><em>Modal de login de Clerk Integrado</em></p> <p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_readme_Home_N3.webp" alt="Usuario autenticado" /> <br/> <em>Modal con una pequeña Introducción sobre CódiGol </em> </p> <p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_readme_Home_N4.webp"alt="Protección de rutas con Clerk" /> <br/> <em>Verificación de Rutas protegidas que verifican si el usuario ya ha iniciado sesión de otro modo lo redirige a la página principal</em>   </p>

# Detalles del Juego 

## Historia y Temática de CódiGol

En **CódiGol**, el jugador se une a los **Wind Jaguars**, un equipo decidido a conquistar la **Full Stack League**. Desde el primer momento, el entrenador te da la bienvenida al equipo y te explica cómo funcionará tu entrenamiento, en cada partido aprenderás una **nueva técnica de Tailwind CSS**.

El camino hacia la victoria está dividido en 10 partidos, y cada uno representa una lección clave sobre **Tailwind CSS**. En el primer encuentro, por ejemplo, el jugador aprende sobre **diseño responsivo y clases de texto**. 

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_Readme_Training_New_N1.webp" alt="Image_Readme_Training_New" /> 

## Entrenamiento antes del partido

Antes de cada partido, el jugador debe completar un entrenamiento. Aquí podrá **experimentar, cometer errores y aprender sin presión**. El entrenador explicará cómo funciona cada clase de **Tailwind CSS**, y el jugador deberá resolver ejercicios prácticos para avanzar.

El entrenamiento solo termina cuando todas las respuestas son correctas, asegurando que el jugador domine bien la lección antes de entrar al campo.

<p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_Readme_Training_New_N2.webp"alt="alt" /> <br/> <em>Pantalla inicial de entrenamiento</em> </p> <p align="center"> <br/> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_Readme_Training_New_N3.webp" alt="Image_Readme_Training_New" /> <br/> <em></em>Ejercicio práctico</p> <p align="center"> <br/> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_Readme_Training_New_N4.webp" alt="Image_Readme_Training_New" /> <br/> <em>Anotación</em> </p> <p align="center"> <br/> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_Readme_Training_New_N8.webp"  alt="Image_Readme_Training_New" /> <br/> <em>Modal de explicación sobre las clases de Tailwind CSS</em>   </p>

## El Partido

Una vez completado el entrenamiento, es momento del partido. En la escena de **VS**, se presenta el contexto del enfrentamiento. Por ejemplo, en el primer partido, los **Wind Jaguars** van empatados 0-0 contra los **Gem Rubies**.

A medida que se avanza en la liga, el **margen de error se reduce** y los desafíos se vuelven más exigentes.

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/img_readme_Scene_VS_New_N1.webp" alt="img_readme_Scene_VS_New" /> 

## Estrategia y Recordatorio

Antes de entrar al segundo tiempo, el entrenador te recuerda lo aprendido y te da contexto de lo que está en juego. Además, menciona que tienes **5 jugadas o estrategias** para crear oportunidades de anotar esto representa tus **5 intentos** para resolver correctamente los ejercicios en el partido.

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/img_readme_bench_scene_new.webp" alt="img_readme_bench_scene" /> 

## El Partido Real

Durante el partido, el jugador **aplica lo aprendido** en el entrenamiento. Cada ejercicio es una jugada, y solo hay **una oportunidad** para acertar. Si fallas, se pasa directamente al siguiente ejercicio.

Al final del partido, se muestra el resultado, que determinará la posición del equipo en la tabla:

- Victoria = **3 puntos**
- Empate = **1 punto**
- Derrota = **0 puntos**

El objetivo final es **sumar la mayor cantidad de puntos** a lo largo de la liga y convertirte en el campeón de la Full Stack League, dominando las técnicas más importantes de **Tailwind CSS** en el camino.

<p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/img_readme_new_match_N1.webp"alt="alt" /> <br/> <em>Partido</em> </p> <p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/img_Readme_new_league_table.webp" alt="alt"/><br/><em></em>Posición en la liga</p>

## Detalle sobre la Responsividad y Modal de Tamaño

**CódiGol** ha sido diseñado para ofrecer la mejor experiencia en pantallas grandes, ya que cuenta con un editor de código integrado que requiere espacio suficiente para su uso cómodo y funcional. Por esta razón, cuando el juego se ejecuta en dispositivos con un ancho de pantalla menor a **1280px**, se muestra un modal informativo que indica que el tamaño de la pantalla no es el adecuado.

Este modal tiene como objetivo evitar problemas de visualización y usabilidad, especialmente en **celulares o tablets**, donde el entorno de desarrollo no sería óptimo. Para disfrutar de **CódiGol** correctamente, se recomienda utilizarlo en una computadora de escritorio o laptop con una resolución igual o superior a **1280px de ancho.**

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/imgReadmeN15.webp" alt="imgReadmeN15" /> 

## Objetivo del juego

- Ganar la liga enfrentando a 10 equipos diferentes
- Resolver ejercicios reales de **Tailwind CSS** para avanzar
- Mejorar tus habilidades de **Tailwind CSS** en un contexto práctico y divertido

## Mejoras de la remasterización

<details>
<summary>Alertas</summary>

# Alertas

## Antiguas Alertas 

<br>

<p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_Readme_Training_old_N4.webp"alt="Image_Readme_Training_old" /> <br/> <em></em> </p>

 ---

 # Nuevas Alertas

 ## Alerta de tipo acierto

<p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_Readme_Training_New_N4.webp"alt="Alert_Success" /> <br/> <em></em> </p>

 ## Alerta de tipo advertencia
<p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_Readme_Training_New_N5.webp"alt="Alert_Warning " /> <br/> <em></em> </p>

 ## Alerta de tipo error
<p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_Readme_Training_New_N6.webp"alt="Alert_Error" /> <br/> <em></em> </p>

 ## Alerta de tiempo terminado
<p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_Readme_Training_New_N9.webp"alt="Alert_Timer" /> <br/> <em></em> </p>

 ## Alerta de completado

<p align="center"> <img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Image_Readme_Training_New_N7.webp"alt="Alert_Complete" /> <br/> <em></em> </p>

---
 
</details>

<details>
<summary>Equipos</summary>

# Equipos de la liga Full Stack

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Wind_Jaguars_team.webp" alt="Wind_Jaguars_team" /> 

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Gem_Rubies_team.webp" alt="Gem_Rubies_team" /> 

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Tusk_Elephants_team.webp" alt="Tusk_Elephants_team" /> 

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Juggernaut_Leopards_team.webp" alt="Juggernaut_Leopards_team" /> 

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Code_Sharks_team.webp" alt="Code_Sharks_team" /> 

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Soar_Swifts_team.webp" alt="Soar_Swifts_team" /> 

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Knight_Coders_team.webp" alt="Knight_Coders_team" /> 

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Byte_Gophers_team.webp" alt="Byte_Gophers_team" /> 

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Style_Chameleons_team.webp" alt="Style_Chameleons_team" /> 

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Phantom_Viper_team.webp" alt="Phantom_Viper_team" /> 

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Forge_Minotaurs_team.webp" alt="Forge_Minotaurs_team" /> 

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Web_Hawks_team.webp" alt="Web_Hawks_team" /> 

---
###

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Cache_Rhinos_team.webp" alt="Cache_Rhinos_team" /> 

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Kernel_Titans_team.webp" alt="Kernel_Titans_team" /> 

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Stack_Bisons_team.webp" alt="Stack_Bisons_team" /> 

<img src="https://github.com/FernandoMejiaDev/CodiGol-remastered/blob/main/assets/img/Vector_Dragons_team.webp" alt="Vector_Dragons_team.webp" /> 

 ---
</details>

<details>
 <summary>Partidos</summary>

<details>
 <summary>Partidos de Wind Jaguars</summary>
 
 ---
 
</details> 

 ---
 
</details>

## Notas técnicas

- Cada pantalla está pensada como una fase: introducción, entrenamiento, partido y resultado.
- Los ejercicios se evalúan en tiempo real y afectan el marcador.
- Las rutas están protegidas con **Clerk** por que si se intenta acceder lo redireccionará a la página principal.

## Instalación y uso local

Si deseas correr **CódiGol** en tu máquina local, sigue estos pasos:

1. Clona el repositorio
2. Instala las dependencias usando pnpm
3. Instalación globalmente usando npm
     ```
    npm install -g pnpm
3. Instalación de las dependencias
     ```
    pnpm install
4. Crea el archivo `.env` y integra la variable de entorno para integrar **Clerk**
5. Inicia el servidor de desarrollo
    ```
     pnpm start
## ¿Por qué usar pnpm start?
**CódiGol** está construido con React, por lo que requiere un entorno de desarrollo para compilar y visualizar correctamente la aplicación.
El comando `pnpm start` inicia el servidor de desarrollo de React, permitiendo ver los cambios en tiempo real.

## Estructura del proyecto
La arquitectura de **CódiGol** está pensada para mantener el código limpio, modular y fácil de escalar. Aquí se explica cada carpeta y archivo clave del proyecto:

<details>
<summary>Estructura completa</summary>
 
<br/>
    
  ```
src/
├── app/
│   ├── Providers/
│   │   └── GameProvider.jsx
│   ├── App.jsx
│   └── routes.jsx
│ 
├── assets/
│   ├── svg/
│   │   ├── Close.jsx 
│   │   └── MobileMenu.jsx
│   └──  # Las imágenes están en la carpeta public por que se usan rutas absolutas
│
├── core/   
│   ├── constans/              
│   │   └── gameConfig.js               
│   ├── hooks/              
│   │   └── userTime.js
│   └── utils/
│       ├── AnalysisClasses.js
│       ├── analyzeAnswer.js
│       ├── evaluateAnswer.js
│       ├── feedbackConfig.js
│       ├── matchManager.js
│       ├── NavigateToNextPhase.js
│       ├── routeFlow.js
│       └── routeGuard.js
│
├── features/
│   ├── Final/              
│   │   └── pages/
│   │       └── FinalScene.jsx 
│   ├── auth/              
│   │   ├── components/
│   │   │   └── ProtectedRoute.jsx
│   │   └── services/
│   │       └── clerkSession.js
│   │ 
│   ├── home/              
│   │   └── pages/
│   │       ├── Home.jsx 
│   │       └── Prove.jsx
│   │ 
│   ├── league/              
│   │   ├── data/
│   │   │   ├── fixtures.js
│   │   │   └── leagueData.jsx 
│   │   └── pages/
│   │       └── LeagueTable.jsx
│   │ 
│   ├── matches/              
│   │   ├── data/
│   │   │   ├── teams/
│   │   │   │   ├── byte_gophers.js
│   │   │   │   ├── code_sharks.js
│   │   │   │   ├── forge_minotaurs.js
│   │   │   │   ├── gem_rubies.js
│   │   │   │   ├── index.js
│   │   │   │   ├── juggernaut_leopard.js
│   │   │   │   ├── knight_coders.js
│   │   │   │   ├── knight_coders.js
│   │   │   │   ├── phantom_viper.js
│   │   │   │   ├── soar_swifts.js
│   │   │   │   ├── style_chamaleons.js
│   │   │   │   ├── teamIds.js
│   │   │   │   ├── tusk_elephants.js
│   │   │   │   ├── web_hawks.js
│   │   │   │   └── wind_Jaguars.js
│   │   │   │
│   │   │   ├── Game.jsx
│   │   │   ├── MatchData.jsx
│   │   │   ├── MatchesList.js
│   │   │   ├── MatchPresentation.js
│   │   │   └── SubBench.js
│   │   │ 
│   │   └── Page/ 
│   │       ├── Final.jsx 
│   │       ├── Game.jsx 
│   │       ├── MatchPresentation.jsx 
│   │       └── SubBench.jsx 
│   │   
│   └── training/              
│       ├── data/
│       │   ├── lessonIntroDialogue.js
│       │   ├── trainingDialogues.js
│       │   └── trainingLessons.js 
│       │ 
│       └── Page/ 
│           ├── LessonIntro.jsx 
│           └── Training.jsx
│ 
├── styles/
│   ├── index.css 
│   └── tailwind.css 
│ 
├── ui/
│   ├── AlertFeedback.jsx
│   ├── DialogueBox.jsx 
│   ├── Editor.jsx
│   ├── EventTime.jsx 
│   ├── ModalExplanation.jsx 
│   ├── ModalInstruction.jsx 
│   ├── ModalSize.jsx 
│   ├── Preview.jsx
│   ├── ResizingLine.jsx
│   ├── Scoreboard.jsx 
│   ├── Timer.jsx
│   ├── TrainingPoint.jsx
│   ├── VerifyButton.jsx 
│   └── renderTextWithCode.jsx
│
└── index.js
```
</details>

## Agradecimientos

- A **MiduDev y Clerk** por organizar la hackathon.
- A ti, por jugar y aprender con **CódiGol** y leer este **readMe.**  

## Licencia
Este proyecto fue desarrollado como proyecto para la *[Hackathon de MiduDev 2025](https://github.com/midudev/hackaton-clerk-2025?tab=readme-ov-file#%EF%B8%8F-c%C3%B3mo-participar-en-la-hackat%C3%B3n)* y está disponible con fines educativos y demostrativos.

---
