//Practical training
import React, { useRef, useEffect, useState } from "react";

//Clerk
import { useUser } from "@clerk/clerk-react";
import { unlockNextPage } from "@/core/utils/routeGuard";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";

import testStrengthSystem from "@/features/league/utils/strength/testStrengthSystem";

const testStrengthSystemPage = () => {

  return (
    <div className="relative w-full overflow-hidden h-dvh">

      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(/img/ExerciseFund.webp)` }}
      ></div>


    </div>
  );
};

export default testStrengthSystemPage;