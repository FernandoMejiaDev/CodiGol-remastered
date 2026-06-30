import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { unlockNextPage } from "@/core/utils/routeGuard";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";

import { analyzeAnswer } from "@/core/utils/analyzeAnswer";

//At the end of the GameData it will take you to MatchPresentation
import { useNavigate } from "react-router-dom";
import { navigateToNextPhase } from "@/core/utils/navigateToNextPhase";

import ModalSize from "@/ui/ModalSize";
import Preview from "@/ui/Preview";
import Editor from "@/ui/Editor";
import VerifyButton from "@/ui/VerifyButton";

//GameData and evaluate Answer
import GameData from "@/features/matches/data/Game";

import Timer from "@/ui/Timer";

//ScoreBoard
import MatchData from "@/features/matches/data/MatchData";
import Scoreboard from "@/ui/Scoreboard";

import { useGame } from "@/features/league/data/leagueData"; // Collect match results

//ResizingLine
import ResizingLine from "@/ui/ResizingLine";

// Alert
import AlertFeedback from "@/ui/AlertFeedback";

import { feedbackConfig } from "@/core/utils/feedbackConfig";

const defaultCode = `
<div class="">
  Hola Tailwind!
</div>
`;

const Game = () => {

  //ResizingLine
  //Resize screens in width, preview screen and editor screen
  const [previewWidth, setPreviewWidth] = useState(400); // start width

  //Alert Feedback
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "success", // complete | time | success | warning | error
  });

  const getCompletionMessage = () => {
    const levelConfig = feedbackConfig[currentExercise.level] || feedbackConfig[1];
    const messages = levelConfig.MatchMessages?.CompletionMessage || [];

    if (!messages.length) {
      return "¡Partido Terminado!";
    }

    return messages[Math.floor(Math.random() * messages.length)];
  };

  const [code, setCode] = useState(defaultCode);

  //GameData and evaluate Answer
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const currentExercise = GameData[currentExerciseIndex];

  //props of analyzeAnswer
  // `attempts` is a state variable that resides within the Training component, 
  // but the `analyzeAnswer` function (which is in an external file) has no 
  // idea what it is unless it is explicitly passed; otherwise, it marks it as 
  // `attempts is not defined`.
  const [attempts, setAttempts] = useState(0);

  //If the player runs out of time or makes a mistake in his answer, then we move
  // on to the next exercise called the function that indicates that time has run
  // out or that he has made a mistake.

  const [timerResetKey, setTimerResetKey] = useState(0);

  const nextExercise = () => {
    if (currentExerciseIndex < GameData.length - 1) {
      setAttempts(0);
      setCurrentExerciseIndex((prev) => prev + 1);
      setCode(defaultCode);
      setTimerResetKey((prev) => prev + 1);
      //In both cases, whether the exercise is good or bad,
      // the timer is reset.
    } else {
      const completionMessage = getCompletionMessage();

      setAlert({
        show: true,
        message: completionMessage,
        type: "complete"
      });

      setTimeout(handleFinishLevel, 7000);
    }
  };

  const [timeoutProcessing, setTimeoutProcessing] = useState(false);

  const handleTimeOut = () => {
    if (timeoutProcessing) return;

    setTimeoutProcessing(true);

    //console.log("TIMEOUT", currentExerciseIndex);

    const feedback = analyzeAnswer(
      {},
      attempts,
      currentExercise.level,
      "match",
      "timeout"
    );

    setAlert({
      show: true,
      message: feedback.message,
      type: feedback.type,
    });

    setTimeout(() => {
      nextExercise();
      setTimeoutProcessing(false);
    }, 1000);
  };

  //ScoreBoard

  const [playerGoals, setPlayerGoals] = useState(
    MatchData.playerTeam.score
  );

  const rivalGoals = MatchData.rivalTeam.score;

  const handleCorrectAnswer = () => {
    updatePlayerGoals();
    setPlayerGoals((prev) => prev + 1);
    if (exerciseIndex < 5) setExerciseIndex((prev) => prev + 1);
  };

  //Save the final match result
  const { saveMatchResult } = useGame();

  //Next Phase
  const navigate = useNavigate();
  const handleFinishLevel = () => {
    navigateToNextPhase("Game", navigate);
  };

  useEffect(() => {
    saveMatchResult(); // Save the result after the match ends
  }, []);

  useEffect(() => {
    unlockNextPage("/FinalScore");
  }, []);

  return (

    <div className="relative w-full overflow-hidden h-dvh">

      {alert.show && (
        <AlertFeedback
          message={alert.message}
          type={alert.type}
          mode="match"
          onClose={() =>
            setAlert((prev) => ({ ...prev, show: false }))
          }
        />
      )}

      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(/img/TestFund.webp)` }}
      ></div>

      <div className="flex h-full ">
        <div
          style={{ width: `${previewWidth}px` }}
          className="relative h-[85%] min-w-40 mt-32 p-1 z-10"
        >
          <Preview code={code} setCode={setCode} className="w-auto" />
        </div>

        {/* <ModalSize className="absolute" /> */}

        <ResizingLine setPreviewWidth={setPreviewWidth} />

        <img
          src="/img/RivalGoalkeeper.webp"
          alt="RivalGoalkeeper"
          className="absolute z-0 object-contain w-80 top-1/4 right-1/3"
          loading="lazy"
        />

        <div className="relative flex flex-col justify-end flex-1 h-full z-10 px-1 min-w-[33rem]">
          <div className="bottom-0 w-full ">
            {/* Scene sequence: coach's dialogue, exercise */}
          </div>

          <Scoreboard
            className="absolute"
            playerTeam={MatchData.playerTeam}
            rivalTeam={MatchData.rivalTeam}
            playerGoals={playerGoals}
            rivalGoals={rivalGoals}
            currentMinute={MatchData.matchMinutes[currentExerciseIndex]}
          />

          <Timer
            className="absolute"
            onTimeOut={handleTimeOut}
            resetTrigger={timerResetKey}
          />

          <div className="z-20 flex flex-col justify-center w-full h-full max-w-4xl gap-2 mt-16">
            <div className="flex flex-row w-full">

              <VerifyButton
                code={code}
                exercise={currentExercise}
                attempts={attempts}
                setAttempts={setAttempts}
                setAlert={setAlert}
                mode="match"
                label="Disparar"
                onSuccess={() => {
                  setAttempts(0);

                  setPlayerGoals(prev => prev + 1);

                  const isLastExercise =
                    currentExerciseIndex === GameData.length - 1;

                  if (!isLastExercise) {
                    // Next Exercise
                    setTimeout(() => {
                      setCurrentExerciseIndex((prev) => prev + 1);
                      setCode(defaultCode);
                    }, 2000);
                  } else {
                    // Completed
                    const completionMessage = getCompletionMessage();

                    setAlert({
                      show: true,
                      message: completionMessage,
                      type: "complete",
                    });

                    setTimeout(() => {
                      handleFinishLevel();
                    }, 7000);
                  }
                }}

                onFail={() => {
                  // final ruling
                  setTimeout(() => {
                    nextExercise();
                  }, 2000);
                }}
              />

            </div>

            {currentExercise && (
              <div className="flex flex-col items-start gap-2 p-2 text-base border bg-neutral-950 text-slate-100 rounded-2xl">
                <strong>Para anotar:</strong>
                <p>{currentExercise.prompt}</p>
              </div>
            )}

            <Editor code={code} setCode={setCode} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Game;
