// Scoreboard.jsx
import React from "react";

export default function Scoreboard({
  playerTeam,
  rivalTeam,
  playerGoals,
  rivalGoals,
  currentMinute,
}) {
  return (
    <div className="absolute top-0 grid grid-flow-col gap-5 m-2 text-center text-white border bg-neutral-950/60 rounded-xl auto-cols-max">
      <div className="flex flex-col p-2">
        <img
          src={playerTeam.logo}
          alt="img"
          className="object-contain w-20 h-20"
        />
        <span className="text-lg">{playerGoals}</span>
        <span>{playerTeam.name}</span>
      </div>

      <div className="flex flex-col items-center justify-center p-4">
        <span className="font-mono text-xl countdown">{currentMinute}:00</span>
      </div>

      <div className="flex flex-col p-2">
        <img
          src={rivalTeam.logo}
          alt="img"
          className="object-contain w-20 h-20"
        />
        <span className="text-lg">{rivalGoals}</span>
        <span>{rivalTeam.name}</span>
      </div>
    </div>
  );
}
