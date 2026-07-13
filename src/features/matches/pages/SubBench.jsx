//Banking scene before the change
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { unlockNextPage } from "@/core/utils/routeGuard";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";
import DialogueBox from "@/ui/DialogueBox";
import ModalSize from "@/ui/ModalSize";

const SubBench = () => {
  const [level, setLevel] = useState(1);

  useEffect(() => {
    unlockNextPage("/Game");
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-dvh">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(/img/BankingFund.webp)` }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="grid items-center justify-center grid-cols-5 ">

        {/* <ModalSize className="absolute" /> */}

        <div className="absolute bottom-0 w-full ">

          <DialogueBox level={level} currentPhase="SubBench" />
        </div>
      </div>
    </div>
  );
};

export default SubBench;
