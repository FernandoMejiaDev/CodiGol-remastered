import React, { useState, useEffect } from "react";
export default function Timer({ onTimeOut, resetTrigger  }) {
  const [remainingTime, setRemainingTime] = useState({
    minutes: 1,
    seconds: 30,
  });

  useEffect(() => {
    setRemainingTime({ minutes: 1, seconds: 30 });
  }, [resetTrigger]); // In both cases, whether the exercise is good or bad, the timer is reset.

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        const { minutes, seconds } = prevTime;

        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
          if (onTimeOut) onTimeOut();
          return { minutes: 0, seconds: 0 };
        }

        if (seconds === 0) {
          return { minutes: minutes - 1, seconds: 59 };
        }

        return { minutes, seconds: seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeOut, resetTrigger]);

  return (
    <div className="absolute top-0 right-0 grid grid-flow-col gap-5 m-2 text-center text-white bg-black rounded-2xl auto-cols-max">
      <div className="flex flex-col p-2">
        <span className="font-mono text-5xl countdown">
          <span>{String(remainingTime.minutes).padStart(2, "0")}</span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2">
        <span className="font-mono text-5xl countdown">
          <span>{String(remainingTime.seconds).padStart(2, "0")}</span>
        </span>
        sec
      </div>
    </div>
  );
}
